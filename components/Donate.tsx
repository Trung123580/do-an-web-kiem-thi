import { Lock } from "lucide-react"
import React from "react"

const Donate = () => {
  return (
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
            <img src='/image/visa.png' alt='' />
            {/* <img src='/icon/payment.png' alt='Payment methods' className='h-4' /> */}
            <span className='flex items-center gap-1 justify-center'>
              <Lock size={15} /> Khoản quyên góp của bạn được xử lý an toàn
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
