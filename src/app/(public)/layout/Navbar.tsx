/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useState } from "react";
// Giả định các icon (Search, Cart, User) từ thư viện Lucide React
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

// Định nghĩa kiểu dữ liệu cho một mục con trong menu
interface MenuItem {
  name: string;
  href: string;
}

// Định nghĩa kiểu dữ liệu cho một phần (section) lớn trong menu
interface MenuSection {
  title: string;
  items: MenuItem[];
}

export default function Navbar() {
  // State quản lý Mega Menu (dành cho desktop)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  // State quản lý Menu Hamburger (dành cho mobile)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dữ liệu mock cho Mega Menu với kiểu dữ liệu MenuSection[]
  const menuData: MenuSection[] = [
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
    <>
      <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1 md:py-2 lg:px-6">
          {/* Logo (Bên trái) */}
          <div className="text-2xl font-bold text-gray-900 tracking-widest cursor-pointer">
            <a href="/">
              <span className="flex items-center space-x-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 22H22L12 2ZM12 11.5L17 20H7L12 11.5Z"
                    fill="#1e293b"
                  />
                </svg>
                {/* Đã chỉnh font logo thành sans-serif cơ bản để phù hợp với phong cách hiện đại */}
                <span className="text-xl font-sans tracking-widest">
                  ZIATTI.
                </span>
              </span>
            </a>
          </div>

          {/* Cụm MENU + Icons (Bên phải) */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* 1. MENU Link và Mega Menu Trigger/Content (Desktop) */}
            <nav className="hidden lg:flex">
              {/* --- MEGA MENU TRIGGER --- */}
              <div
                className="relative h-full"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <a
                  href="#"
                  // Điều chỉnh font size/weight cho link MENU
                  className="text-base text-gray-800 uppercase tracking-wider transition duration-150 hover:text-indigo-600 font-semibold text-2xl"
                >
                  MENU
                </a>

                {/* --- MEGA MENU DROPDOWN CONTENT --- */}
                <div
                  // Luôn render div để transition hoạt động
                  // origin-top: Đảm bảo hiệu ứng trượt/phóng to bắt đầu từ đỉnh
                  // scale-y-0/100: Tạo hiệu ứng trượt từ trên xuống (giống như Max-Height transition)
                  className={`
                    
                    absolute transform -translate-x-69/100 top-8 mx-3
                    bg-white border-t-4 border-white-600 shadow-2xl p-10 
                    w-screen z-50 rounded-b-xl 
                    transition-all duration-500 ease-out origin-top border-amber-50
                   
                    ${
                      isMegaMenuOpen
                        ? "opacity-100 scale-y-100 pointer-events-auto"
                        : "opacity-0 scale-y-0 pointer-events-none"
                    }
                  `}
                  style={{ minHeight: "400px", paddingBottom: "50px" }}
                >
                  {/* Nội dung bên trong Mega Menu (Chỉ hiện khi mở) */}
                  {isMegaMenuOpen && (
                    <>
                      <div className="grid grid-cols-6 gap-10">
                        {menuData.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h3 className="font-extrabold text-sm text-gray-900 mb-4 uppercase tracking-widest border-b pb-2 border-gray-200">
                              {section.title}
                            </h3>
                            <ul className="space-y-3">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a
                                    href={item.href}
                                    // Điều chỉnh font link con
                                    className="text-gray-600 hover:text-indigo-600 text-sm font-normal transition duration-150 block"
                                    onClick={() => setIsMegaMenuOpen(false)}
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* Footer của Mega Menu */}
                      <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                        <span>
                          Thiết kế và Chất lượng từ Việt Nam & Hàn Quốc
                        </span>
                        <a
                          href="/showroom"
                          className="hover:text-indigo-600 transition"
                        >
                          Tìm showroom gần nhất &rarr;
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </nav>

            {/* 2. Search Input, Icons và Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Search Input (Desktop) */}
              <div className="hidden lg:block relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="border border-gray-300 rounded-full pl-4 pr-10 py-1.5 w-40 xl:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                />
                <Search className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
              </div>

              {/* Icons */}
              <ShoppingBag className="h-5 w-5 text-gray-700 cursor-pointer hover:text-indigo-600 transition" />
              <User className="h-5 w-5 text-gray-700 cursor-pointer hover:text-indigo-600 transition" />

              {/* Hamburger Button (Mobile) */}
              <button
                className="lg:hidden p-2 -mr-2 text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute w-full bg-white shadow-xl z-40 border-t border-gray-100">
            <div className="p-4 space-y-4">
              {menuData.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="border-b border-gray-100 pb-3"
                >
                  <h3 className="font-extrabold text-sm text-gray-900 mb-2 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="pl-3 space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-indigo-600 text-sm transition duration-150 block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
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
      </header>
    </>
  );
}
