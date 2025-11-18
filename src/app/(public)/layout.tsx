import "../globals.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Providers from "./providers"; // ⬅ THÊM DÒNG NÀY

export const metadata = {
  title: "Ziatti Clone",
  description: "Trang thương mại điện tử giống Ziatti.vn",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-white text-gray-800 font-sans">
        <Providers /> {/* ⬅ THÊM DÒNG NÀY */}
        <Navbar />
        <main className="mt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
