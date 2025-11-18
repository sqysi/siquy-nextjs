// src/types/Category.ts

/**
 * Định nghĩa cấu trúc dữ liệu cho một Danh mục (Category)
 */
export interface Category {
  id: number;
  name: string;
  image: string;
  // Thêm các thuộc tính khác nếu có, ví dụ: slug?: string;
}

/**
 * Định nghĩa cấu trúc dữ liệu cho một Sản phẩm (Product)
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  // Thêm các thuộc tính khác nếu có
}