import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 mt-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="font-heading text-lg mb-3">ZIATTI</h3>
          <p>Thương hiệu nội thất cao cấp.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Liên kết</h4>
          <ul className="space-y-1">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/category">Danh mục</Link></li>
            <li><Link href="/product">Sản phẩm</Link></li>
            <li><Link href="/post">Tin tức</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Hỗ trợ</h4>
          <ul className="space-y-1">
            <li><Link href="/policy">Chính sách</Link></li>
            <li><Link href="/refund">Đổi trả</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Liên hệ</h4>
          <p>Email: support@ziatti.vn</p>
          <p>Hotline: 0123 456 789</p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2025 ZIATTI. All rights reserved.
      </div>
    </footer>
  );
}
