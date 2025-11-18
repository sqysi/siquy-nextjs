import { http, HttpResponse } from 'msw';

const API = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

const mockCategories = [
  { id: 1, name: "Ghế Sofa" },
  { id: 2, name: "Bàn Ăn" },
  { id: 3, name: "Giường" },
  { id: 4, name: "Tủ" },
];

const mockProducts = [
  { id: 1, name: "Sofa Cao Cấp", price: 12000000, image: "/images/prod1.jpg" },
  { id: 2, name: "Bàn Ăn Gỗ Tự Nhiên", price: 8000000, image: "/images/prod2.jpg" },
  { id: 3, name: "Giường Gỗ Hiện Đại", price: 10000000, image: "/images/prod3.jpg" },
  { id: 4, name: "Tủ Quần Áo Cửa Lùa", price: 9500000, image: "/images/prod4.jpg" },
  { id: 5, name: "Ghế thư giãn L-Shape", price: 4500000, image: "/images/prod5.jpg" },
  { id: 6, name: "Bàn làm việc thông minh", price: 5200000, image: "/images/prod6.jpg" },
  { id: 7, name: "Kệ sách treo tường", price: 1800000, image: "/images/prod7.jpg" },
  { id: 8, name: "Thảm lông cừu", price: 2300000, image: "/images/prod8.jpg" },
  { id: 9, name: "Đèn chùm pha lê", price: 7900000, image: "/images/prod9.jpg" },
  { id: 10, name: "Bàn trà mặt đá", price: 3800000, image: "/images/prod10.jpg" },
];

export const handlers = [
  http.get(`${API}/api/categories`, () => {
    return HttpResponse.json(mockCategories);
  }),

  http.get(`${API}/api/products`, () => {
    return HttpResponse.json(mockProducts);
  }),
];
