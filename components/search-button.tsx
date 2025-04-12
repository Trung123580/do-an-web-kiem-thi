"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"

interface SearchButtonProps {
  isMobile?: boolean
}

export default function SearchButton({ isMobile = false }: SearchButtonProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  // Focus the input when search is opened
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen])

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isSearchOpen])

  // Mobile version (full width)
  if (isMobile) {
    return (
      <div className="relative w-full">
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="border border-[#cfd1d4] rounded-md py-2 px-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#3a63ed] focus:border-transparent"
          />
          <button
            className="absolute right-3 text-[#111827] hover:text-[#3a63ed] transition-colors"
            aria-label="Tìm kiếm"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    )
  }

  // Desktop version (expandable)
  return (
    <div className="relative flex items-center">
      {isSearchOpen ? (
        <div className="flex items-center animate-in slide-in-from-right-5 duration-300">
          <input
            ref={inputRef}
            type="text"
            placeholder="Tìm kiếm..."
            className="border border-[#cfd1d4] rounded-md py-1 px-3 text-sm w-[200px] focus:outline-none focus:ring-2 focus:ring-[#3a63ed] focus:border-transparent"
          />
          <button
            onClick={toggleSearch}
            className="ml-2 text-[#111827] hover:text-[#3a63ed] transition-colors"
            aria-label="Đóng tìm kiếm"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <button
          onClick={toggleSearch}
          className="text-[#111827] hover:text-[#3a63ed] transition-colors"
          aria-label="Mở tìm kiếm"
        >
          <Search className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
