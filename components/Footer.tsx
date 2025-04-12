export default function DonateSection() {
  return (
    <div className='w-full'>
      {/* Hero section with image and overlay form */}
      <div className='relative w-full h-[600px] bg-cover bg-center' style={{ backgroundImage: "url('/image/hero-bg.jpg')" }}>
        <div className='absolute inset-0 bg-black/20' /> {/* Overlay mờ */}
        <div className='absolute top-1/2 left-10 transform -translate-y-1/2 text-white max-w-md'>
          <h1 className='text-3xl md:text-4xl font-bold'>Hãy cùng chúng tôi phá bỏ rào cản.</h1>
          <p className='mt-4 text-lg'>Chung tay hỗ trợ giáo dục và đào tạo nghề cho người khiếm thính ngay hôm nay!</p>
        </div>
        <div className='absolute top-1/2 right-10 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 w-[300px] space-y-4'>
          <h2 className='text-lg font-semibold text-center'>Ủng hộ để hỗ trợ người khiếm thính</h2>
          <div className='flex justify-between bg-gray-100 p-1 rounded-md'>
            <button className='flex-1 py-1 rounded-md bg-white text-sm font-medium'>Một lần</button>
            <button className='flex-1 py-1 text-sm font-medium text-gray-600'>Hàng tháng</button>
          </div>
          <div className='grid grid-cols-4 gap-2 text-sm'>
            <button className='bg-gray-100 py-2 rounded'>10$</button>
            <button className='bg-gray-100 py-2 rounded'>40$</button>
            <button className='bg-gray-100 py-2 rounded'>80$</button>
            <button className='bg-gray-100 py-2 rounded'>200$</button>
          </div>
          <input type='text' placeholder='Nhập số tiền khác' className='w-full border px-3 py-2 rounded text-sm' />
          <button className='w-full bg-blue-600 text-white py-2 rounded font-medium'>Ủng hộ ngay</button>
          <p className='text-xs text-center text-gray-500'>💳 VISA • Paypal</p>
        </div>
      </div>

      {/* Subscribe section */}
      {/* Subscribe section */}
      <div className='bg-[#3B82F6] text-white px-6 py-10'>
        <div className='max-w-5xl mx-auto'>
          <h3 className='text-xl md:text-2xl font-bold mb-2'>Đăng ký thông báo</h3>
          <p className='text-sm md:text-base mb-6 max-w-2xl'>
            Đăng ký nhận thông tin để cập nhật những tin tức, sự kiện và chương trình hỗ trợ giáo dục, đào tạo hướng nghiệp. Nhận các cập nhật, câu chuyện truyền cảm hứng và các tin tức mới nhất nhanh chóng.
          </p>

          <div className='flex flex-col md:flex-row gap-4 mb-10'>
            <input type='text' placeholder='Họ tên*' className='flex-1 px-4 py-2 rounded text-black outline-none' />
            <input type='email' placeholder='Email*' className='flex-1 px-4 py-2 rounded text-black outline-none' />
            <input type='tel' placeholder='Số di động*' className='flex-1 px-4 py-2 rounded text-black outline-none' />
            <button className='bg-black text-white px-6 py-2 rounded font-medium'>Đăng ký</button>
          </div>

          {/* Footer */}
          <div className='border-t border-white/30 pt-6 flex flex-col md:flex-row md:items-center md:justify-between text-sm'>
            <div className='flex flex-wrap gap-6 mb-4 md:mb-0'>
              <a href='#' className='hover:underline'>
                Liên hệ với chúng tôi
              </a>
              <a href='#' className='hover:underline'>
                Quyền riêng tư và Cookie
              </a>
              <a href='#' className='hover:underline'>
                Chính sách cộng đồng
              </a>
            </div>
            <div className='flex gap-4 text-white text-lg'>
              <a href='#'>
                <i className='fa-solid fa-envelope' />1
              </a>
              <a href='#'>
                <i className='fa-brands fa-instagram' />11
              </a>
              <a href='#'>
                <i className='fa-brands fa-facebook' />11
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
