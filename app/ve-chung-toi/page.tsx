import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      {/* Mission & Vision Section */}
      <section className=' mt-16'>
        <div className='mx-auto space-y-12 w-full'>
          {/* Mission */}
          <div className='text-center w-full h-[350px] md:h-[406px]  flex items-center justify-center flex-col'>
            <p className='text-[24px] md:text-[32px] font-md text-gray-600 leading-tight w-full px-10 max-w-[1063px]'>
              <span className='text-[#3a63ed] font-bold'>Mục tiêu của chúng tôi </span>
              là giúp người khiếm thính có thể tự kiến tạo và duy trì một tương lai bền vững thông qua việc hỗ trợ giáo dục và đào tạo nghề nghiệp
            </p>
          </div>

          {/* Vision */}
          <div className='text-center bg-[#374151] text-white h-[350px] md:h-[406px] flex items-center justify-center flex-col'>
            <p className='text-[24px] md:text-[32px] font-md text-white leading-tight w-full px-6 max-w-[1063px]'>
              <span className='text-[#FDE68A] font-bold'>Tầm nhìn của của chúng tôi </span>
                là xây dựng một xã hội nơi 
                người khiếm thính có thể tự lập, tự tạo dựng giá trị bền vững,
                hòa nhập vào cộng đồng và phát triển mạnh mẽ trong tất cả các lĩnh vực của cuộc sống. 
            </p>
          </div>
        </div>
      </section>
      <section className='w-full bg-white max-w-7xl mx-auto py-[72px]'>
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-[48px]">Đội ngũ của chúng tôi</h2>
        <div className='grid md:grid-cols-2 gap-[48px] px-4'>
          <div className="">
            <img src="/image/art-1.jpg" className="max-w-[305px] h-[305px] rounded-lg object-cover w-full" alt="" />
            {/* <img src="/image/art-2.jpg" alt="" /> */}
            <h4 className="text-[32px] mt-[32px] mb-[16px] font-bold text-[#3A63ED]">Nguyễn Thị Minh Anh, Sinh viên <br/> trường Quản Trị và Kinh Doanh (HSB),<br/> Sáng lập dự án</h4>
            <p className="text-[18px] font-normal text-[#111827]">Sau một khoảng thời gian dài hoạt động xã hội về lĩnh vực người khiếm thính tại tổ chức Doanh nghiệp xã hội vì người khiếm thính Việt Nam, nhận thấy rằng người khiếm thính gặp rất nhiều rào cản từ việc làm đến học tập do hạn chế về kiến thức, hiểu biết cơ bản, bắt nguồn từ việc thiếu thông tin hỗ trợ về giáo dục và nghề nghiệp. Minh Anh quyết định thực hiện dự án xây dựng Website hỗ trợ giáo dục và đào tạo hướng nghiệp cho người khiếm thính với mong muốn hỗ trợ người khiếm thính những điều kiện cơ bản để họ có thể tự lập xây dựng tương lai.</p>
          </div>
          <div className="">
            <img src="/image/art-2.jpg" className="max-w-[305px] h-[305px] rounded-lg object-cover w-full" alt="" />
            {/* <img src="/image/art-2.jpg" alt="" /> */}
            <h4 className="text-[32px]  mt-[32px] mb-[16px] font-bold text-[#3A63ED]">Bà Chử Thị Thanh Hương, Sáng lập/ <br/> Giám đốc Doanh nghiệp xã hội vì <br/> người khiếm thính Việt Nam, Bảo trợ <br/> dự án</h4>
            <p className="text-[18px] font-normal text-[#111827]">Sau một khoảng thời gian dài hoạt động xã hội về lĩnh vực người khiếm thính tại tổ chức Doanh nghiệp xã hội vì người khiếm thính Việt Nam, nhận thấy rằng người khiếm thính gặp rất nhiều rào cản từ việc làm đến học tập do hạn chế về kiến thức, hiểu biết cơ bản, bắt nguồn từ việc thiếu thông tin hỗ trợ về giáo dục và nghề nghiệp. Minh Anh quyết định thực hiện dự án xây dựng Website hỗ trợ giáo dục và đào tạo hướng nghiệp cho người khiếm thính với mong muốn hỗ trợ người khiếm thính những điều kiện cơ bản để họ có thể tự lập xây dựng tương lai.</p>
          </div>
        </div>
      </section>
      {/* Story Section */}
      <section className='w-full bg-white'>
        <div className='grid md:grid-cols-2'>
          {/* Image Column */}
          <div className='relative h-[656px]'>
            <Image src='/image/ve-chung-toi/image-1.jpg' alt='Học sinh khiếm thính trong lớp học' fill className='object-cover' />
          </div>

          {/* Content Column */}
          <div className='flex flex-col justify-center space-y-6 px-4 md:px-16 bg-[#D8E0FB]'>
            <h2 className='text-[48px] font-bold'>
              Câu chuyện về
              <br />
              <span className='text-[#3A63ED]'>Người khiếm thính</span>
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed'>
              Chúng tôi bắt đầu từ một sự thật tưởng chừng đơn giản: người khiếm thính khó tiếp cận với giáo dục và đào tạo nghề. Qua quá trình thực hiện trình tìm hiểu và đồng hành cùng cộng đồng người khiếm thính, chúng tôi chứng kiến quá nhiều
              người bị bỏ lại phía sau – không tiếp cận được thông tin, không được hướng nghiệp, không có cơ hội học tập như bao người khác.
            </p>
            <p className='text-gray-600 text-lg leading-relaxed'>
              Foundation for Future ra đời với mong muốn thay đổi điều đó. Chúng tôi tin rằng, khi được cung cấp đầy đủ thông tin hỗ trợ và giáo dục và đào tạo nghề nghiệp, người khiếm thính có thể xây dựng cho mình một tương lai tốt đẹp, tự tin hơn,
              tự do hơn. Từ đó, họ không chỉ có thể tự lập, mà còn góp phần phát triển bền vững, mà còn đóng góp vào sự phát triển chung của xã hội.
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className='bg-white py-12 md:py-24 container mx-auto px-4'>
        <div className='px-4 max-w-7xl mx-auto flex gap-7 md:gap-14 md:flex-nowrap flex-wrap'>
          <div className='max-w-[522px] '>
            <h2 className='text-[40px] md:text-[48px] font-bold mb-6'>
              Công việc của
              <br />
              chúng tôi
            </h2>
            <p className='text-[#111827] text-lg mb-8 font-normal'>
              Foundation for Future là tổ chức cung cấp thông tin hỗ trợ giáo dục và đào tạo nghề nghiệp cho người khiếm thính, thông qua nền tảng trực tuyến thân thiện, dễ tiếp cận. Chúng tôi giúp họ trang bị kiến thức, kỹ năng cơ bản để tự lập,
              phát triển bền vững và tăng bước hòa nhập vào cộng đồng.
            </p>
            <Link href='/ve-chung-toi/tham-gia-chung-toi' className='inline-flex px-6 py-3 bg-[#3A63ED] text-white rounded-md hover:opacity-70 transition-colors'>
              Tham gia cùng chúng tôi
            </Link>
          </div>

          <div className='flex flex-col gap-4 max-h-[447px] overflow-x-hidden overflow-y-auto px-4'>
          {[
              {
                title: "Cung cấp thông tin và tài nguyên giáo dục cho người khiếm thính",
                description: "bao gồm khóa học ngôn ngữ ký hiệu, tài liệu ngôn ngữ, kỹ năng và tài liệu học tập phụ trợ.",
              },
              {
                title: "Cung cấp chương trình đào tạo nghề và thông tin tuyển dụng",
                description: "nhằm giúp người khiếm thính định hướng nghề nghiệp và tìm kiếm cơ hội việc làm phù hợp.",
              },
              {
                title: "Cung cấp tư vấn định hướng học tập và nghề nghiệp",
                description: "đặc biệt dành cho người khiếm thính và người chăm sóc.",
              },
              {
                title: "Cung cấp thông tin và thiết bị hỗ trợ, chương trình trợ giúp",
                description: "và phương pháp chăm sóc - giáo dục người khiếm thính.",
              },
              {
                title: "Cung cấp tin tức và truyền thông xã hội",
                description: "góp phần nâng cao nhận thức của cộng đồng về người khiếm thính.",
              },
            ].map((item, index) => (
              <div key={index} className='bg-gray-100 px-3.5 py-[18px] rounded-lg'>
                <p className='text-gray-800 text-lg'>
                  <span>{item.title}</span>
                  {item.description && `, ${item.description}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
