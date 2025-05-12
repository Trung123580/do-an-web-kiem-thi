"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import SearchButton from "./search-button"

interface MobileMenuProps {
  currentPath?: string
}

export default function MobileMenu({ currentPath = "/" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  // Function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === "/" && currentPath === "/") {
      return true
    }
    if (path !== "/" && currentPath.startsWith(path)) {
      return true
    }
    return false
  }

  // Toggle submenu
  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
        setOpenSubmenu(null)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="text-[#111827] p-2" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setIsOpen(false)
          setOpenSubmenu(null)
        }}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img src="/image/logo.png" alt="" />
          </Link>
          <button 
            onClick={() => {
              setIsOpen(false)
              setOpenSubmenu(null)
            }} 
            className="text-[#111827] p-2" 
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-6">
            <SearchButton isMobile />
          </div>

          <nav className="space-y-4">
            {/* Về chúng tôi */}
            <div>
              <button
                onClick={() => toggleSubmenu("about")}
                className={`flex items-center justify-between w-full py-2 px-4 ${
                  isActivePath("/ve-chung-toi")
                    ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                    : "text-[#414652] border-l-4 border-transparent"
                }`}
              >
                <span>Về chúng tôi</span>
                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === "about" ? "rotate-90" : ""}`} />
              </button>
              <div className={`pl-6 space-y-2 overflow-hidden transition-all duration-200 ${openSubmenu === "about" ? "max-h-40 mt-2" : "max-h-0"}`}>
                <Link href="/ve-chung-toi" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                Về chúng tôi
                </Link>
                <Link href="/ve-chung-toi/nguoi-khiem-thinh" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Người kiếm thính
                </Link>
                <Link href="/ve-chung-toi/tham-gia-chung-toi" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Tham gia cùng chúng tôi
                </Link>
              </div>
            </div>
            <div>
              <button
                onClick={() => toggleSubmenu("hoat-dong")}
                className={`flex items-center justify-between w-full py-2 px-4 ${
                  isActivePath("/cong-dong")
                    ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                    : "text-[#414652] border-l-4 border-transparent"
                }`}
              >
                <span>Cộng đồng</span>
                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === "hoat-dong" ? "rotate-90" : ""}`} />
              </button>
              <div className={`pl-6 space-y-2 overflow-hidden transition-all duration-200 ${openSubmenu === "hoat-dong" ? "max-h-40 mt-2" : "max-h-0"}`}>
                <Link href="/cong-dong" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Tổ chức & cộng đồng
                </Link>
                <Link href="/cong-dong/hoat-dong" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Hoạt động
                </Link>
              </div>
            </div>
            {/* Thông tin */}
            <div>
              <button
                onClick={() => toggleSubmenu("news")}
                className={`flex items-center justify-between w-full py-2 px-4 ${
                  isActivePath("/thong-tin")
                    ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                    : "text-[#414652] border-l-4 border-transparent"
                }`}
              >
                <span>Thông tin</span>
                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === "news" ? "rotate-90" : ""}`} />
              </button>
              <div className={`pl-6 space-y-2 overflow-hidden transition-all duration-200 ${openSubmenu === "news" ? "max-h-40 mt-2" : "max-h-0"}`}>
                <Link href="/thong-tin" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                Thông tin
                </Link>
                <Link href="/thong-tin/su-kien" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Tin tức
                </Link>
                <Link href="/thong-tin/cau-chuyen" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Câu chuyện
                </Link>
                {/* <Link href="/thong-tin/to-chuc-cong-dong" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Tổ chức và cộng đồng
                </Link>
                <Link href="/thong-tin/hoat-dong" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Hoạt động
                </Link> */}
              </div>
            </div>

            {/* Giáo dục */}
            <div>
              <button
                onClick={() => toggleSubmenu("education")}
                className={`flex items-center justify-between w-full py-2 px-4 ${
                  isActivePath("/giao-duc")
                    ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                    : "text-[#414652] border-l-4 border-transparent"
                }`}
              >
                <span>Giáo dục</span>
                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === "education" ? "rotate-90" : ""}`} />
              </button>
              <div className={`pl-6 space-y-2 overflow-hidden transition-all duration-200 ${openSubmenu === "education" ? "max-h-64 mt-2" : "max-h-0"}`}>
                <Link href="/giao-duc" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                Giáo dục
                </Link>
                <Link href="/giao-duc/ngon-ngu-ky-hieu" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Ngôn ngữ ký hiệu
                </Link>
                <Link href="/giao-duc/tri-lieu-ngon-ngu" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Trị liệu ngôn ngữ
                </Link>
                <Link href="/giao-duc/ky-nang-mem" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Kỹ năng mềm
                </Link>
                <Link href="/giao-duc/tu-van-dinh-huong" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Tư vấn & Định hướng
                </Link>
                <Link href="/giao-duc/giao-duc-dac-biet" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Giáo dục đặc biệt
                </Link>
              </div>
            </div>

            {/* Nghề nghiệp */}
            <div>
              <button
                onClick={() => toggleSubmenu("career")}
                className={`flex items-center justify-between w-full py-2 px-4 ${
                  isActivePath("/nghe-nghiep")
                    ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                    : "text-[#414652] border-l-4 border-transparent"
                }`}
              >
                <span>Nghề nghiệp</span>
                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === "career" ? "rotate-90" : ""}`} />
              </button>
              <div className={`pl-6 space-y-2 overflow-hidden transition-all duration-200 ${openSubmenu === "career" ? "max-h-40 mt-2" : "max-h-0"}`}>
                <Link href="/nghe-nghiep" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                Nghề nghiệp
                </Link>
                <Link href="/nghe-nghiep/dao-tao" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Đào tạo nghề
                </Link>
                <Link href="/nghe-nghiep/tuyen-dung" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                 Tuyển dụng
                </Link>
                <Link href="/nghe-nghiep/tu-van-dinh-huong" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                 Tư vấn định hướng
                </Link>
                <Link href="/nghe-nghiep/cam-nang" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Cẩm nang
                </Link>
                <Link href="/nghe-nghiep/test" className="block py-2 px-4 text-sm text-gray-700 hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                  Chắc nghiệm kỹ năng
                </Link>
                
              </div>
            </div>
          </nav>

          <div className="mt-6 pt-6 border-t">
            <div className="relative">
              <button 
                onClick={() => toggleSubmenu("fundraising")}
                className="w-full bg-[#3a63ed] text-white px-4 py-2 rounded-md flex items-center justify-center"
              >
                Gây quỹ <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${openSubmenu === "fundraising" ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute left-0 right-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200 ${
                openSubmenu === "fundraising" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}>
                <div className="py-2">
                  <Link href="/gay-quy/mot-lan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                    Hoạt động
                  </Link>
                  <Link href="/gay-quy/hang-thang" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EEF1FF] hover:text-[#3a63ed]" onClick={() => setIsOpen(false)}>
                    Quy tắc gây quỹ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
