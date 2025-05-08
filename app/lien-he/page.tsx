'use client'
import ModalPartner from "@/components/ModalPartner"
import React, { useState } from "react"

const page = () => {
      const [isOpen, setIsOpen] = useState(false)
    
  return (
    <>
      <div className='pb-[96px]'>
        <div className='relative h-[400px]'>
          <img src='/image/lien-he.jpg' className='h-full w-full object-top object-cover' alt='' />
          <h3 className='absolute bottom-[30px] left-[80px] text-5xl font-bold text-white'>Liên hệ với chúng tôi</h3>
        </div>
        <div className='max-w-[1065px] mx-auto py-[56px] text-lg font-normal'>
          <h4>Chúng tôi luôn sẵn sàng lắng nghe bạn!</h4>
          <p className='py-6'>Nếu bạn có bất kỳ câu hỏi, phản hồi hoặc muốn hợp tác cùng Foundation for Future trong các chương trình vì cộng đồng người khiếm thính, đừng ngần ngại liên hệ với chúng tôi qua</p>
          <ul className='list-disc pl-7'>
            <li>
              <span className='font-bold'>Địa chỉ: </span> Số 23B, Đường Tông Đản, Quận Hoàn Kiếm, Hà Nội
            </li>
            <li>
              <span className='font-bold'>Email: </span> contact@foundationforfuture.vn
            </li>
            <li>
              <span className='font-bold'>Điện thoại/Zalo: </span> 0936 253 215
            </li>
            <li>
              <span className='font-bold'>Facebook: </span> Foundation for Future
            </li>
          </ul>
          <i>Thời gian làm việc: Thứ Hai – Thứ Sáu (08:30 – 17:30)</i>
        </div>
        <div className='bg-[#4263EB] mx-auto px-4 py-16 text-center w-[80%] rounded-2xl'>
          <h2 className='text-3xl font-bold text-white mb-4'>Trở thành một phần của chúng tôi</h2>
          <p className='text-white/90 max-w-2xl mx-auto mb-8'>Góp phần hỗ trợ người khiếm thính bằng cách trở thành nhà tuyển dụng, đối tác tổ chức sự kiện và nhiều hình thức hợp tác khác.</p>
          <button onClick={()=> setIsOpen} className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors'>Tham gia cùng chúng tôi</button>
        </div>
      </div>
      <ModalPartner isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  )
}

export default page
