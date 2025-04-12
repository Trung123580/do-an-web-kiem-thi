import { Lock } from "lucide-react";

export default function DonateSection() {
  return (
    <div className='w-full'>
      {/* Hero section with image and overlay form */}
      <div className='relative w-full min-h-[400px] md:min-h-[500px] h-[720px] bg-cover bg-center' style={{ backgroundImage: "url('/image/donate-bg.jpg')" }}>
        <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' />
        <div className='absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 text-white max-w-md px-4 md:px-0'>
          <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
            Hãy cùng chúng tôi
            <br />
            phá bỏ rào cản.
          </h1>
          <p className='mt-4 text-base md:text-lg opacity-90'>
            Chung tay hỗ trợ giáo dục và đào tạo nghề
            <br className='hidden md:block' />
            cho người khiếm thính ngay hôm nay!
          </p>
        </div>
        <div className='absolute left-4 right-4 top-1/2 md:right-10 md:left-auto -translate-y-1/2 md:w-[413px]'>
          <div className='bg-white rounded-xl shadow-lg py-12 px-9'>
            <h2 className='text-center text-[#111827] font-normal mb-6 text-[32px]'>Ủng hộ để hỗ trợ người khiếm thính</h2>

            {/* Toggle buttons */}
            <div className='bg-[#EEF1FF] rounded-md flex mb-2 border border-[#E5E7EB] overflow-hidden'>
              <button className='flex-1 py-4 text-sm font-medium bg-white'>Một lần</button>
              <button className='flex-1 py-4 text-sm font-medium text-[#4B5563]'>Hàng tháng</button>
            </div>
            {/* Amount buttons */}
            <div className='grid grid-cols-4 mb-2 rounded-md overflow-hidden border border-[#E5E7EB]'>
              <button className='bg-[#EEF1FF] py-4 text-sm hover:bg-[#E5E7EB]'>10$</button>
              <button className='bg-white py-4 text-sm hover:bg-[#E5E7EB]'>40$</button>
              <button className='bg-white py-4 text-sm hover:bg-[#E5E7EB]'>80$</button>
              <button className='bg-white py-4 text-sm hover:bg-[#E5E7EB]'>200$</button>
            </div>

            <p className='text-sm text-[#6B7280] mb-6 text-center'>Mỗi đóng góp không chỉ trao cơ hội, mà tạo một tương lai công bằng hơn cho người khiếm thính.</p>

            {/* Custom amount input */}
            <div className='relative mb-6'>
              <span className='absolute left-0 w-[56px] h-full flex items-center justify-center border-r border-[#E5E7EB] top-1/2 -translate-y-1/2 text-[#9CA3AF]'>$</span>
              <input type='text' placeholder='Nhập số tiền khác' className='w-full border border-[#E5E7EB] pl-[65px] pr-3 py-4 rounded-[4px] text-sm focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]' />
            </div>

            {/* Donate button */}
            <button className='w-full bg-[#4F46E5] text-white py-5 rounded-[4px] text-2xl font-medium mb-4 hover:bg-[#4338CA] transition-colors'>Ủng hộ ngay</button>
            {/* Payment methods */}
            <div className='flex items-center flex-col justify-center gap-2 text-xs text-[#6B7280]'>
              <img src="/image/visa.png" alt="" />
              {/* <img src='/icon/payment.png' alt='Payment methods' className='h-4' /> */}
              <span className="flex items-center gap-1 justify-center"><Lock size={15} /> Khoản quyên góp của bạn được xử lý an toàn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <div className='bg-[#3B82F6] text-white px-4 py-8'>
        <div className='max-w-7xl mx-auto'>
          <h3 className='text-xl font-semibold mb-1'>Đăng ký thông báo</h3>
          <p className='text-sm text-white/90 mb-6 md:mb-4 max-w-3xl'>
            Đăng ký nhận thông tin để cập nhật những tin tức, sự kiện và chương trình hỗ trợ giáo dục, đào tạo hướng nghiệp. Nhận các cập nhật, câu chuyện truyền cảm hứng và các tin tức mới nhất nhanh chóng.
          </p>

          <div className='flex flex-col md:flex-row gap-4 md:gap-3 xl:max-w-[70%]'>
            <input type='text' placeholder='Họ tên*' className='flex-1 px-3 py-2 rounded-[4px] text-black outline-none bg-white text-sm' />
            <input type='email' placeholder='Email*' className='flex-1 px-3 py-2 rounded-[4px] text-black outline-none bg-white text-sm' />
            <input type='tel' placeholder='Số di động*' className='flex-1 px-3 py-2 rounded-[4px] text-black outline-none bg-white text-sm' />
            <button className='bg-[#111827] text-white px-6 py-2 rounded-[4px] text-sm font-medium hover:bg-gray-900 transition-colors whitespace-nowrap'>Đăng ký</button>
          </div>

          {/* Footer Links */}
          <div className='flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-white/20'>
            <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-4 md:mb-0 text-sm'>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>
                Liên hệ với chúng tôi
              </a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>
                Quyền riêng tư và Cookie
              </a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>
                Chính sách cộng đồng
              </a>
            </div>

            {/* Social Icons */}
            <div className='flex gap-4'>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z' />
                </svg>
              </a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
                </svg>
              </a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
