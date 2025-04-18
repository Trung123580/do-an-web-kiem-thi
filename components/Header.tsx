"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SearchButton from "./search-button"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const pathname = usePathname()

  // Function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") {
      return true
    }
    if (path !== "/" && pathname.startsWith(path)) {
      return true
    }
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white border-b border-[#cfd1d4] z-[60]">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="text-[#3a63ed] text-3xl font-bold">
          F
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="relative flex space-x-4 lg:space-x-8">
            {/* Về chúng tôi dropdown */}
            <div className="relative group">
              <Link
                href="/ve-chung-toi"
                className={`${
                  isActivePath("/ve-chung-toi") ? "text-[#111827]" : "text-[#414652]"
                } font-medium px-3 py-2 inline-flex items-center relative group `}
              >
                Về chúng tôi
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                {isActivePath("/ve-chung-toi") ? (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div>
                ) : (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] opacity-50 transition-all duration-200"></div>
                )}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
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

            {/* Thông tin dropdown */}
            <div className="relative group">
              <Link
                href="/thong-tin"
                className={`${
                  isActivePath("/thong-tin") ? "text-[#111827]" : "text-[#414652]"
                } font-medium px-3 py-2 inline-flex items-center relative group `}
              >
                Thông tin
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                {isActivePath("/thong-tin") ? (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div>
                ) : (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] opacity-50 transition-all duration-200"></div>
                )}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/thong-tin/tin-tuc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tin tức
                  </Link>
                  <Link href="/thong-tin/cau-chuyen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Câu chuyện
                  </Link>
                  <Link href="/thong-tin/to-chuc-cong-dong" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tổ chức & cộng đồng
                  </Link>
                  <Link href="/thong-tin/hoat-dong" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Hoạt động
                  </Link>
                </div>
              </div>
            </div>

            {/* Giáo dục dropdown */}
            <div className="relative group">
              <Link
                href="/giao-duc"
                className={`${
                  isActivePath("/giao-duc") ? "text-[#111827]" : "text-[#414652]"
                } font-medium px-3 py-2 inline-flex items-center relative group `}
              >
                Giáo dục
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                {isActivePath("/giao-duc") ? (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div>
                ) : (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] opacity-50 transition-all duration-200"></div>
                )}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/giao-duc/chuong-trinh" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Chương trình
                  </Link>
                  <Link href="/giao-duc/hoc-bong" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Học bổng
                  </Link>
                  <Link href="/giao-duc/dao-tao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Đào tạo
                  </Link>
                </div>
              </div>
            </div>

            {/* Nghề nghiệp dropdown */}
            <div className="relative group">
              <Link
                href="/nghe-nghiep"
                className={`${
                  isActivePath("/nghe-nghiep") ? "text-[#111827]" : "text-[#414652]"
                } font-medium px-3 py-2 inline-flex items-center relative group `}
              >
                Nghề nghiệp
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                {isActivePath("/nghe-nghiep") ? (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div>
                ) : (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] opacity-50 transition-all duration-200"></div>
                )}
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/nghe-nghiep/viec-lam" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Việc làm
                  </Link>
                  <Link href="/nghe-nghiep/tu-van" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Tư vấn
                  </Link>
                  <Link href="/nghe-nghiep/dao-tao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                    Đào tạo nghề
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative group">
            <button className="bg-[#3a63ed] text-white px-4 py-2 rounded-md flex items-center">
              Gây quỹ <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <Link href="/gay-quy/mot-lan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                  Hoạt động
                </Link>
                <Link href="/gay-quy/hang-thang" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]">
                  Quy tắc gây quỹ
                </Link>
              </div>
            </div>
          </div>
          <SearchButton />
        </div>

        {/* Mobile Menu */}
        <MobileMenu currentPath={pathname} />
      </div>
    </header>
  )
}
