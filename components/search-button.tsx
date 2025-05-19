"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { dataSearch } from "@/utils/contanst"
import Link from "next/link"
interface SearchButtonProps {
  isMobile?: boolean
}

export default function SearchButton({ isMobile = false }: SearchButtonProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [onChange, setOnChange] = useState("")
  const [dataRender, setDataRender ] = useState(dataSearch)
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

  useEffect(() => {
    if (!!onChange) {
      setDataRender(
        dataSearch.filter((item: any) => {
          const searchItem = [item?.title, item?.titleDes, item?.name]
          return searchItem.some((field) =>
            field?.toLowerCase().includes(onChange.toLowerCase().trim())
          )
        })
      )
    } else {
      setDataRender(dataSearch)
    }
  }, [onChange])

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
      <div className='relative w-full'>
        <div className='flex items-center w-full'>
          <input
            type='text'
            placeholder='Tìm kiếm...'
            onChange={(event) => setOnChange(event.target.value)}
            onBlur={() => setTimeout(() => setOnChange(''), 200)}
            value={onChange}
            className='border border-[#cfd1d4] rounded-md py-2 px-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#3a63ed] focus:border-transparent'
          />
          <button className='absolute right-3 text-[#111827] hover:text-[#3a63ed] transition-colors' aria-label='Tìm kiếm'>
            <Search className='h-5 w-5' />
          </button>
          {onChange !== "" && (
            <ul className='absolute top-[105%] left-0 rounded-xl shadow-box-banner2 w-full max-h-[400px] h-[400px] overflow-y-auto bg-white  z-10 flex flex-col gap-2 px-2 py-4'>
              {dataRender.map((item: any, index) => {
                if (item === "text") return <></>
                return (
                  <li key={index + "kaskll299x"} >
                    <Link href={item?.slug || ''} className='flex items-center gap-4'>
                       <img src={item?.image || item?.img || item?.src || ""} className='w-[45px] h-[45px] min-w-[45px] object-cover' alt='asedas' />
                        <span className='line-clamp-2 text-sm'>{item?.title || item?.titleDes || item?.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    )
  }

  // Desktop version (expandable)
  return (
    <div className='relative flex items-center'>
      {isSearchOpen ? (
        <div className='flex items-center animate-in slide-in-from-right-5 duration-300'>
          <input
            ref={inputRef}
            type='text'
            onChange={(event) => setOnChange(event.target.value)}
            value={onChange}
            onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
            placeholder='Tìm kiếm...'
            className='border border-[#cfd1d4] rounded-md py-2 px-3 text-sm w-[200px] focus:outline-none focus:ring-2 focus:ring-[#3a63ed] focus:border-transparent'
          />
          <button onClick={toggleSearch} className='ml-2 text-[#111827] hover:text-[#3a63ed] transition-colors' aria-label='Đóng tìm kiếm'>
            <X className='h-5 w-5' />
          </button>
          {onChange !== "" && (
            <ul className='absolute top-full left-1/2 -translate-x-1/2 rounded-xl shadow-box-banner2 w-[350px] max-h-[400px] h-[400px] overflow-y-auto bg-white  z-10 flex flex-col gap-2 px-2 py-4'>
              {dataRender.map((item: any, index) => {
                if (item === "text") return <></>
                return (
                  <li key={index + "kaskll299x"} >
                    <Link href={item?.slug || ''} className='flex items-center gap-4'>
                       <img src={item?.image || item?.img || item?.src || ""} className='w-[45px] h-[45px] min-w-[45px] object-cover' alt='asedas' />
                        <span className='line-clamp-2 text-sm'>{item?.title || item?.titleDes || item?.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ) : (
        <button onClick={toggleSearch} className='text-[#111827] hover:text-[#3a63ed] transition-colors' aria-label='Mở tìm kiếm'>
          <Search className='h-5 w-5' />
        </button>
      )}
    </div>
  )
}
