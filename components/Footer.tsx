"use client"
import { useApp } from "@/context/ContextProvider"
import { Lock } from "lucide-react"
import { useState } from "react"

export default function DonateSection() {
  const { handles }: any = useApp()
  const [dataSubmit, setDataSubmit] = useState({
    fullName: "",
    email: "",
    phone: "",
  })
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    await handles.onPostRegisterNotification(dataSubmit)
    setDataSubmit({
      fullName: "",
      email: "",
      phone: "",
    })
  }
  return (
    <div className='w-full'>
      {/* Subscribe section */}
      <div className='bg-[#3A63ED] text-white px-4 py-8'>
        <div className='max-w-7xl mx-auto'>
          <h3 className='text-xl font-semibold mb-1'>Đăng ký thông báo</h3>
          <p className='text-sm text-white/90 mb-6 md:mb-4 max-w-3xl'>
            Đăng ký nhận thông tin để cập nhật những tin tức, sự kiện và chương trình hỗ trợ giáo dục, đào tạo hướng nghiệp. Nhận các cập nhật, câu chuyện truyền cảm hứng và các tin tức mới nhất nhanh chóng.
          </p>
          <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-4 md:gap-3 xl:max-w-[70%] w-full'>
            <div className='relative'>
              <label htmlFor='name' className={`${dataSubmit.fullName.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-1/2 -translate-y-1/2`}>
                Họ tên <span className='text-red-600'>*</span>
              </label>
              <input
                required
                id='name'
                value={dataSubmit.fullName}
                onChange={(e) => setDataSubmit({ ...dataSubmit, fullName: e.target.value })}
                type='text'
                className='flex-1 px-3 w-full py-2 rounded-[4px] text-black outline-none bg-white text-sm border-2 border-[#CFD1D4]'
              />
            </div>
            <div className='relative'>
              <label htmlFor='email' className={`${dataSubmit.email.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-1/2 -translate-y-1/2`}>
                Email <span className='text-red-600'>*</span>
              </label>
              <input
                required
                id='email'
                value={dataSubmit.email}
                onChange={(e) => setDataSubmit({ ...dataSubmit, email: e.target.value })}
                type='email'
                className='flex-1 px-3 w-full py-2 rounded-[4px] text-black outline-none bg-white text-sm border-2 border-[#CFD1D4]'
              />
            </div>
            <div className='relative'>
              <label htmlFor='phone' className={`${dataSubmit.phone.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-1/2 -translate-y-1/2`}>
                Số di động <span className='text-red-600'>*</span>
              </label>
              <input
                required
                id='phone'
                value={dataSubmit.phone}
                onChange={(e) => setDataSubmit({ ...dataSubmit, phone: e.target.value })}
                type='tel'
                className='flex-1 px-3 w-full py-2 rounded-[4px] text-black outline-none bg-white text-sm border-2 border-[#CFD1D4]'
              />
            </div>
            <button type='submit' className='bg-[#111827] hover:bg-[#70747D] text-white px-6 py-2 rounded-[4px] text-sm font-medium transition-colors whitespace-nowrap'>
              Đăng ký
            </button>
          </form>

          {/* Footer Links */}
          <div className='flex flex-col justify-between mt-8 pt-6 border-t border-white/20'>
          <div className='flex gap-4 *:hover:bg-black/40 *:p-2 *:rounded-xl'>
              <a href='#' className='text-white/90 !pl-0 hover:text-white transition-colors'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-[27px] h-[27px]' viewBox='0 0 28 22' fill='none'>
                  <path
                    d='M3.33333 21.6663C2.6 21.6663 1.97222 21.4052 1.45 20.883C0.927779 20.3608 0.666668 19.733 0.666668 18.9997V2.99967C0.666668 2.26634 0.927779 1.63856 1.45 1.11634C1.97222 0.594119 2.6 0.333008 3.33333 0.333008H24.6667C25.4 0.333008 26.0278 0.594119 26.55 1.11634C27.0722 1.63856 27.3333 2.26634 27.3333 2.99967V18.9997C27.3333 19.733 27.0722 20.3608 26.55 20.883C26.0278 21.4052 25.4 21.6663 24.6667 21.6663H3.33333ZM24.6667 5.66634L14.7 11.8997C14.5889 11.9663 14.4722 12.0163 14.35 12.0497C14.2278 12.083 14.1111 12.0997 14 12.0997C13.8889 12.0997 13.7722 12.083 13.65 12.0497C13.5278 12.0163 13.4111 11.9663 13.3 11.8997L3.33333 5.66634V18.9997H24.6667V5.66634ZM14 9.66634L24.6667 2.99967H3.33333L14 9.66634ZM3.33333 5.99967V4.03301V4.06634V4.04967V5.99967Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>
                <svg className='w-[27px] h-[27px]' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
                </svg>
              </a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>
                <svg className='w-[27px] h-[27px]' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
            </div>
            <div className='flex flex-wrap *:hover:underline  gap-2 md:gap-[56px] md:mt-0 mt-2 mb-4 md:mb-0 text-xl md:text-2xl'>
              <a href='/lien-he' className='text-white/90 hover:text-white transition-colors'>
                Liên hệ với chúng tôi
              </a>
              <a href='/rieng-tu' className='text-white/80 hover:text-white transition-colors'>
                Quyền riêng tư và Cookie
              </a>
              <a href='/chinh-sach' className='text-white/80 hover:text-white transition-colors'>
                Chính sách cộng đồng
              </a>
              <a href='/gay-quy' className='text-white/80 hover:text-white transition-colors'>
                Gây quỹ
              </a>
            </div>

            {/* Social Icons */}
           
          </div>
        </div>
      </div>
    </div>
  )
}
