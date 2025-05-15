"use client";

// import { ChevronDown } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchButton from "./search-button";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const pathname = usePathname();

  // Function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") {
      return true;
    }
    if (path !== "/" && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-header  z-[60]">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20  max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <img src="/image/logo.png" alt="" />
        </Link>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center h-full">
          <div className="relative flex space-x-4 lg:space-x-8 h-full items-center">
            {/* Về chúng tôi dropdown */}
            <div className="relative group h-full">
              <Link href="/ve-chung-toi" className={`${isActivePath("/ve-chung-toi") ? "text-[#111827]" : "text-[#414652]"} font-medium px-3 py-2 inline-flex items-center relative group h-full `}>
                Về chúng tôi
                {/* <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" /> */}
                {isActivePath("/ve-chung-toi") ? <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div> : <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] transition-all duration-200"></div>}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/ve-chung-toi/nguoi-khiem-thinh" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Người khiếm thính
                  </Link>
                  <Link href="/ve-chung-toi/tham-gia-chung-toi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tham gia cùng chúng tôi
                  </Link>
                </div>
              </div>
            </div>
             <div className="relative group h-full">
              <Link href="/cong-dong" className={`${isActivePath("/cong-dong") ? "text-[#111827]" : "text-[#414652]"} font-medium px-3 py-2 inline-flex items-center relative group h-full `}>
                Cộng đồng
                {/* <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" /> */}
                {isActivePath("/cong-dong") ? <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div> : <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] transition-all duration-200"></div>}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/cong-dong/to-chuc-va-hoat-dong" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tổ chức & cộng đồng
                  </Link>
                  <Link href="/cong-dong/hoat-dong" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Hoạt động
                  </Link>
                </div>
              </div>
            </div>
            {/* Thông tin dropdown */}
            <div className="relative group h-full">
              <Link href="/thong-tin" className={`${isActivePath("/thong-tin") ? "text-[#111827]" : "text-[#414652]"} font-medium px-3 py-2 inline-flex items-center relative group h-full `}>
                Thông tin
                {/* <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" /> */}
                {isActivePath("/thong-tin") ? <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div> : <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] transition-all duration-200"></div>}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/thong-tin/tin-tuc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tin tức
                  </Link>
                  <Link href="/thong-tin/cau-chuyen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Câu chuyện
                  </Link>
              
                </div>
              </div>
            </div>
            <div className="relative group h-full">
              <Link href="/giao-duc" className={`${isActivePath("/giao-duc") ? "text-[#111827]" : "text-[#414652]"} font-medium px-3 py-2 inline-flex items-center relative group h-full `}>
                Giáo dục
                {/* <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" /> */}
                {isActivePath("/giao-duc") ? <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div> : <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] transition-all duration-200"></div>}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/giao-duc/ngon-ngu-ky-hieu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Ngôn ngữ ký hiệu
                  </Link>
                  <Link href="/giao-duc/tri-lieu-ngon-ngu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Trị liệu ngôn ngữ
                  </Link>
                  <Link href="/giao-duc/ky-nang-mem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Kỹ năng mềm
                  </Link>
                  <Link href="/giao-duc/tu-van-dinh-huong" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tư vấn & Định hướng
                  </Link>
                  <Link href="/giao-duc/giao-duc-dac-biet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Giáo dục đặc biệt
                  </Link>
                </div>
              </div>
            </div>

            {/* Nghề nghiệp dropdown */}
            <div className="relative group h-full">
              <Link href="/nghe-nghiep" className={`${isActivePath("/nghe-nghiep") ? "text-[#111827]" : "text-[#414652]"} font-medium px-3 py-2 inline-flex items-center relative group h-full `}>
                Nghề nghiệp
                {/* <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" /> */}
                {isActivePath("/nghe-nghiep") ? <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div> : <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] transition-all duration-200"></div>}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/nghe-nghiep/dao-tao-nghe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Đào tạo nghề
                  </Link>
                  <Link href="/nghe-nghiep/tuyen-dung" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tuyển dụng
                  </Link>
                  <Link href="/nghe-nghiep/tu-van-dinh-huong" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tư vấn định hướng
                  </Link>
                  <Link href="/nghe-nghiep/cam-nang" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Cẩm nang
                  </Link>
                  <Link href="/nghe-nghiep/test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Trắc nghiệm kỹ năng
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group h-full">
              <Link href="/gay-quy" className={`${isActivePath("/nghe-nghiep") ? "text-[#111827]" : "text-[#414652]"} font-medium px-3 py-2 inline-flex items-center relative group h-full `}>
                Gây quỹ
                {/* <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" /> */}
                {isActivePath("/gay-quy") ? <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div> : <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] transition-all duration-200"></div>}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/gay-quy/hoat-dong" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Hoạt động
                  </Link>
                  <Link href="/gay-quy/quy-tac-gay-quy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Quy tắc gây quỹ
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4 h-full">
          <SearchButton />
        </div>

        {/* Mobile Menu */}
        <MobileMenu currentPath={pathname} />
      </div>
    </header>
  );
}
