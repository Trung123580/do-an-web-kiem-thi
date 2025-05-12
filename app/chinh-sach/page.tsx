import React from "react"

const page = () => {
  return (
    <div className='min-h-screen pt-16 max-w-7xl mx-auto'>
      <div className='relative h-[400px]'>
        <img src='/image/rieng-tu.jpg' className='h-full w-full object-top object-cover' alt='' />
        <h3 className='absolute bottom-[30px] left-[80px] text-5xl font-bold text-white'>Chính sách cộng đồng</h3>
      </div>
      <div className='flex flex-col gap-[56px] pt-[50px] pb-[96px]'>
        <div className='mx-auto max-w-[1280px] bg-[#F2F2F3] rounded-2xl py-[64px] px-[72px]'>
          <h3 className='text-5xl font-bold text-[#111827] mb-4'>Chính sách & Nguyên tắc Cộng đồng</h3>
          Chúng tôi tin rằng sự tôn trọng và minh bạch là nền tảng cho một cộng đồng bền vững.
            <p className="font-bold">1. Nguyên tắc hoạt động của Foundation for Future:</p>
            <ul className='list-disc pl-7'>
            <li>Tôn trọng người khiếm thính và các nhóm yếu thế khác.</li>
            <li>Không phân biệt đối xử dưới bất kỳ hình thức nào (giới tính, khuyết tật, vùng miền, tôn giáo...).</li>
            <li>Ưu tiên ngôn ngữ rõ ràng, dễ tiếp cận với người khiếm thính.</li>
            <li>Bảo vệ trẻ em và không khoan nhượng với mọi hành vi xâm hại.</li>
            <li>Không lợi dụng danh nghĩa tổ chức để kêu gọi, gây quỹ trái phép.</li>
          </ul>
            <p className="font-bold">2. Trách nhiệm của người dùng khi tham gia website:</p>
            <ul className='list-disc pl-7'>
            <li>Sử dụng ngôn ngữ lịch sự, tôn trọng khi bình luận hoặc gửi phản hồi.</li>
            <li>Không chia sẻ nội dung vi phạm pháp luật, kích động thù địch hoặc gây hiểu lầm.</li>
            <li>Không sử dụng website để spam hoặc truyền bá thông tin sai lệch.</li>
          </ul>v
        </div>
      </div>
    </div>
  )
}

export default page
