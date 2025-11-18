"use client";
// Đã loại bỏ import Link từ "next/link" do lỗi biên dịch
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dữ liệu mock cho Mega Menu
  const menuData = [
    {
      title: "DINING",
      items: [
        { name: "Bàn gỗ", href: "/dining/go" },
        { name: "Bàn mặt đá", href: "/dining/da" },
        { name: "Ghế", href: "/dining/ghe" },
        { name: "Bench", href: "/dining/bench" },
      ],
    },
    {
      title: "LIVING",
      items: [
        { name: "Sofa", href: "/living/sofa" },
        { name: "Giường", href: "/living/giuong" },
        { name: "Tủ", href: "/living/tu" },
        { name: "Kệ", href: "/living/ke" },
        { name: "Bàn bên", href: "/living/ban-ben" },
        { name: "Home Office", href: "/living/home-office" },
      ],
    },
    {
      title: "ABOUT",
      items: [
        { name: "Chuyện ZIATTI", href: "/about/story" },
        { name: "Bản sắc", href: "/about/identity" },
        { name: "Tính bền vững", href: "/about/sustainability" },
        { name: "Zood care", href: "/about/zood-care" },
        { name: "Hợp tác", href: "/about/cooperate" },
        { name: "Sponsorship", href: "/about/sponsorship" },
      ],
    },
    {
      title: "MATERIAL",
      items: [
        { name: "Gỗ", href: "/material/go" },
        { name: "Porcelain (Ceramic)", href: "/material/ceramic" },
        { name: "Da", href: "/material/da" },
        { name: "Vải", href: "/material/vai" },
        { name: "Vật liệu hoàn thiện", href: "/material/hoan-thien" },
      ],
    },
    {
      title: "SHOWROOM",
      items: [
        { name: "Hồ Chí Minh", href: "/showroom/hcm" },
        { name: "Hàn Quốc", href: "/showroom/han-quoc" },
      ],
    },
    {
      title: "COMMUNITY",
      items: [
        { name: "Thông báo", href: "/community/announcement" },
        { name: "Tư vấn", href: "/community/consulting" },
        { name: "ZALO", href: "https://zalo.me" },
        { name: "FACEBOOK", href: "https://facebook.com" },
        { name: "BLOG", href: "/community/blog" },
        { name: "INSTAGRAM", href: "https://instagram.com" },
        { name: "YOUTUBE", href: "https://youtube.com" },
      ],
    },
  ];

  return (
    <header className="w-full h-16 bg-white sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
        <div className="text-2xl font-bold text-gray-900 tracking-widest">ZIATTI</div>

        <nav 
          className="hidden md:flex space-x-8 text-sm font-semibold"
          // Sử dụng onMouseEnter và onMouseLeave để kiểm soát trạng thái menu
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          {/* Menu chính */}
          <div className="relative">
            {/* Đã thay thế Link bằng thẻ <a> */}
            <a 
              href="#" 
              className="hover:text-indigo-600 text-gray-700 uppercase tracking-wider transition duration-150"
            >
              Menu
            </a>

            {/* --- MEGA MENU DROPDOWN --- */}
            {isMenuOpen && (
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 
                           bg-white border-t-4 border-indigo-600 shadow-2xl p-8 
                           w-screen max-w-7xl z-50 rounded-b-xl animate-fade-in-down"
                style={{ animationDuration: '0.3s' }}
              >
                <div className="grid grid-cols-6 gap-8">
                  {menuData.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="font-extrabold text-sm text-gray-900 mb-3 uppercase tracking-wider border-b pb-1 border-gray-200">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {/* Đã thay thế Link bằng thẻ <a> */}
                            <a href={item.href} className="text-gray-600 hover:text-indigo-600 text-sm transition duration-150">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Các mục menu khác có thể thêm vào đây, ví dụ: */}
          {/* <a href="/gioi-thieu" className="hover:text-primary text-gray-700 uppercase tracking-wider transition duration-150">Giới Thiệu</a> */}
          {/* <a href="/lien-he" className="hover:text-primary text-gray-700 uppercase tracking-wider transition duration-150">Liên Hệ</a> */}
        </nav>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="hidden sm:block border border-gray-300 rounded-full px-4 py-1 w-40 md:w-60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
          />
          <button className="relative p-1 rounded-full hover:bg-gray-100 transition duration-150">
            <span className="material-icons text-2xl text-gray-700">person</span>
          </button>
          <button className="relative p-1 rounded-full hover:bg-gray-100 transition duration-150">
            <span className="material-icons text-2xl text-gray-700">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-red-600 text-xs text-white w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <button className="relative p-1 rounded-full hover:bg-gray-100 transition duration-150 hidden sm:block">
            <span className="material-icons text-2xl text-gray-700">search</span>
          </button>
        </div>
      </div>
    </header>
  );
}