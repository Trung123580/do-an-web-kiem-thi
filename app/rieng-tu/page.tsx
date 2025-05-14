import React from "react"

const page = () => {
  return (
    <div className='min-h-screen pt-16 max-w-7xl mx-auto'>
      <div className='relative h-[400px]'>
        <img src='/image/rieng-tu.jpg' className='h-full w-full object-top object-cover' alt='' />
        <h3 className='absolute bottom-[30px] left-[10px] md:left-[80px] text-4xl md:text-5xl font-bold text-white'>Quyền riêng tư và Cookie</h3>
      </div>
      <div className='flex flex-col gap-[56px] pt-[50px] pb-[96px] px-4'>
        <div className='mx-auto max-w-[1280px] bg-[#F2F2F3] rounded-2xl py-[32px] md:py-[64px] px-[36] md:px-[72px]'>
          <h3 className='text-3xl md:text-5xl font-bold text-[#111827] mb-4'>Chính sách Quyền riêng tư</h3>
          Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn.
          <p className='font-bold'>1. Dữ liệu được thu thập:</p>
          Chúng tôi có thể thu thập các thông tin như: họ tên, địa chỉ email, số điện thoại, thông tin liên hệ khi bạn đăng ký sự kiện, gửi phản hồi hoặc liên hệ với chúng tôi.
          <p className='font-bold'>2. Mục đích sử dụng:</p>
          Thông tin được sử dụng để:
          <ul className='list-disc pl-7'>
            <li>Cung cấp thông tin sự kiện, chương trình.</li>
            <li>Cải thiện trải nghiệm người dùng trên website.</li>
            <li>Gửi thông báo liên quan đến các hoạt động cộng đồng.</li>
          </ul>
          <p className='font-bold'>3. Bảo mật thông tin:</p>
          Dữ liệu cá nhân của bạn được lưu trữ an toàn và không chia sẻ với bên thứ ba nếu không có sự đồng ý của bạn, trừ khi pháp luật yêu cầu.
          <p className='font-bold'>4. Quyền của bạn:</p>
          Bạn có quyền yêu cầu chỉnh sửa hoặc xoá thông tin cá nhân bất cứ lúc nào bằng cách liên hệ qua email:
          <br />
          contact@foundationforfuture.vn
        </div>
        <div className='mx-auto max-w-[1280px] bg-[#F2F2F3] rounded-2xl py-[32px] md:py-[64px] px-[36] md:px-[72px]'>
          <h3 className='text-3xl md:text-5xl font-bold text-[#111827] mb-4'>Chính sách Cookie</h3>
          Website của chúng tôi sử dụng cookie để cải thiện trải nghiệm người dùng.
          <ul className='list-disc pl-7'>
            <li>Cookie là gì? Cookie là các tệp nhỏ lưu trên trình duyệt, giúp ghi nhớ tuỳ chọn và hoạt động của bạn trên trang web.</li>
            <li>
              Chúng tôi sử dụng cookie để:
              <ul className='list-disc pl-7'>
                <li>Phân tích lưu lượng truy cập và hành vi người dùng.</li>
                <li>Ghi nhớ ngôn ngữ, khu vực truy cập, hoặc các nội dung bạn quan tâm.</li>
              </ul>
            </li>
            <li>Quản lý cookie: Bạn có thể từ chối hoặc xoá cookie thông qua cài đặt trình duyệt. Tuy nhiên, điều này có thể ảnh hưởng đến một số chức năng của website.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page
