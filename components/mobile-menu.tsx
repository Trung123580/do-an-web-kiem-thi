"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import SearchButton from "./search-button"

interface MobileMenuProps {
  currentPath?: string
}

export default function MobileMenu({ currentPath = "/" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

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
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="text-[#3a63ed] text-2xl font-bold" onClick={() => setIsOpen(false)}>
            F
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-[#111827] p-2" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-6">
            <SearchButton isMobile />
          </div>

          <nav className="space-y-4">
            <Link
              href="/"
              className={`block py-2 px-4 ${
                isActivePath("/")
                  ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                  : "text-[#414652] border-l-4 border-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Về chúng tôi
            </Link>
            <Link
              href="/thong-tin"
              className={`block py-2 px-4 ${
                isActivePath("/thong-tin")
                  ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                  : "text-[#414652] border-l-4 border-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Thông tin
            </Link>
            <Link
              href="/giao-duc"
              className={`block py-2 px-4 ${
                isActivePath("/giao-duc")
                  ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                  : "text-[#414652] border-l-4 border-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Giáo dục
            </Link>
            <Link
              href="/nghe-nghiep"
              className={`block py-2 px-4 ${
                isActivePath("/nghe-nghiep")
                  ? "text-[#111827] font-medium border-l-4 border-[#3a63ed]"
                  : "text-[#414652] border-l-4 border-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Nghề nghiệp
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t">
            <button className="w-full bg-[#3a63ed] text-white px-4 py-2 rounded-md flex items-center justify-center">
              Gây quỹ <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
