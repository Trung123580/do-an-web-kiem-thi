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
          <div className="relative flex space-x-8">
            <Link
              href="/ve-chung-toi"
              className={`${
                isActivePath("/") ? "text-[#111827]" : "text-[#414652]"
              } font-medium px-3 py-2 relative group`}
            >
              Về chúng tôi
              {isActivePath("/ve-chung-toi") ? (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div>
              ) : (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] opacity-50 transition-all duration-200"></div>
              )}
            </Link>
            <Link
              href="/thong-tin"
              className={`${
                isActivePath("/thong-tin") ? "text-[#111827]" : "text-[#414652]"
              } font-medium px-3 py-2 relative group`}
            >
              Thông tin
              {isActivePath("/thong-tin") ? (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div>
              ) : (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] opacity-50 transition-all duration-200"></div>
              )}
            </Link>
            <Link
              href="/giao-duc"
              className={`${
                isActivePath("/giao-duc") ? "text-[#111827]" : "text-[#414652]"
              } font-medium px-3 py-2 relative group`}
            >
              Giáo dục
              {isActivePath("/giao-duc") ? (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div>
              ) : (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] opacity-50 transition-all duration-200"></div>
              )}
            </Link>
            <Link
              href="/nghe-nghiep"
              className={`${
                isActivePath("/nghe-nghiep") ? "text-[#111827]" : "text-[#414652]"
              } font-medium px-3 py-2 relative group`}
            >
              Nghề nghiệp
              {isActivePath("/nghe-nghiep") ? (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3a63ed]"></div>
              ) : (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#3a63ed] opacity-50 transition-all duration-200"></div>
              )}
            </Link>
          </div>
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-[#3a63ed] text-white px-4 py-2 rounded-md flex items-center">
            Gây quỹ <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <SearchButton />
        </div>

        {/* Mobile Menu */}
        <MobileMenu currentPath={pathname} />
      </div>
    </header>
  )
}
