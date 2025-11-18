"use client";

// Đã thêm useCallback vào danh sách import
import { useState, useEffect, useCallback } from "react"; 
// Sử dụng path aliases cho các imports đã refactor
import { Category, Product } from "./types/Category";
import HeroSlider from "./HeroSlider";
import SectionTitle from "./SectionTitle";
import CategoryCard from "./category/CategoryCard";
import ProductCard from "./product/ProductCard";

// Định nghĩa Base URL
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

// Component Footer đơn giản (để giữ page.tsx gọn gàng)

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Sử dụng useCallback (đã được import)
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    // Mảng chứa các fetch promise
    const fetchPromises = [
      {
        name: "categories",
        // QUAN TRỌNG: Sử dụng BASE_URL đã định nghĩa
        url: `${BASE_URL}/api/categories`, 
        setter: setCategories,
      },
      {
        name: "products",
        // QUAN TRỌNG: Sử dụng BASE_URL đã định nghĩa
        url: `${BASE_URL}/api/products`, 
        setter: setProducts,
      },
    ];

    try {
      // Thực hiện tất cả các request song song
      const results = await Promise.all(
        fetchPromises.map(async ({ name, url }) => {
          const response = await fetch(url);

          if (!response.ok) {
            // Đây là dòng 57, nơi lỗi 404 được throw ra
            throw new Error(`${name} failed with status: ${response.status}`);
          }

          return { name, data: await response.json() };
        })
      );

      // Cập nhật state sau khi tất cả đã thành công
      results.forEach(({ name, data }) => {
        if (name === "categories") {
          setCategories(data as Category[]);
        } else if (name === "products") {
          setProducts(data as Product[]);
        }
      });
      console.log("All data loaded successfully from MSW.");
    } catch (err) {
      // Lỗi khi tải dữ liệu
      console.error("Lỗi khi tải dữ liệu:", err);
      if (err instanceof Error) {
        setError(`Không thể tải dữ liệu: ${err.message}`);
      } else {
        setError("Đã xảy ra lỗi không xác định trong quá trình tải API.");
      }
    } finally {
      setLoading(false);
    }
  }, []); // Loại bỏ BASE_URL khỏi dependencies vì nó là hằng số

  useEffect(() => {
    // Tăng độ trễ lên 300ms để khắc phục Race Condition của MSW
    const timer = setTimeout(() => {
      fetchData();
    }, 300); // Đã tăng từ 100ms lên 300ms

    return () => clearTimeout(timer);
  }, [fetchData]);

  // --- Render UI ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-indigo-500 mx-auto mb-3"></div>
            <p className="text-lg font-semibold text-gray-700">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (error || (categories.length === 0 && products.length === 0)) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-8 bg-red-50 rounded-xl shadow-xl border-2 border-red-500">
                <p className="text-xl font-bold text-red-700 mb-2">Lỗi Dữ Liệu</p>
                <p className="text-gray-700">
                    {error || "Không tìm thấy dữ liệu Mock. Vui lòng kiểm tra MSW hoặc API!"}
                </p>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

        <main className="w-full space-y-16">
            
            {/* Hero Slider */}
            <HeroSlider />

            {/* Danh mục nổi bật */}
            <section>
                <SectionTitle title="Danh mục nổi bật" />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.id} category={cat} />
                    ))}
                </div>
            </section>

            {/* Sản phẩm mới */}
            <section>
                <SectionTitle title="Sản phẩm mới nhất" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.slice(0, 5).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Sản phẩm bán chạy */}
            <section>
                <SectionTitle title="Sản phẩm bán chạy" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.slice(5, 10).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
        
    </div>
  );
}