'use client'
import React from 'react'
import Image from 'next/image';
import { docs } from '@/utils/contanst';
import FAQItem from '@/app/components/FAQItem';

export default function page() {
  const chapters = [
    'Chương I', 'Chương II', 'Chương III', 'Chương IV',
    'Chương V',
  ];
  // 'Chương VI', 'Chương VII', 'Chương VIII',
  //     'Chương IX', 'Chương X'
  const handleScroll = (index: number) => {
    const chapterId = `chuong-${index}`;
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  return (
    <div>
      <section className="relative w-full h-[400px] md:h-[720px]">
        {/* Background Image */}
        <Image
          src="/image/ve-chung-toi/banner-1.jpg"
          alt="Trẻ em khiếm thính vui chơi"
          fill
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-20 text-white">
          <p className="text-xl md:text-3xl font-bold -tracking-tight leading-relaxed">
            Người khiếm thính là những cá nhân có khả năng nghe giảm, gặp khó khăn trong việc tiếp nhận âm thanh và giao tiếp truyền thông.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Title and Description */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[32px] font-bold mb-4">
              Việt Nam có khoảng 2,5 triệu
              <br />
              người khuyết tật nghe nói
            </h2>
            <p className="text-gray-600 text-lg max-w-[900px] mx-auto">
              Tại Việt Nam, ước tính có khoảng 2,5 triệu người khuyết tật nghe nói, tạo nên nhu cầu cấp thiết về hỗ trợ giáo dục, y tế và truyền thông nhằm giúp họ tiếp cận thông tin và hòa nhập xã hội.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Statistic 1 */}
            <div className="bg-[#EEF1FF] p-8 rounded-xl h-[413px] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-4">1.200 đến 1.400</h3>
              <p className="text-gray-600 text-center">
                Theo báo cáo của trẻ em người khuyết tật của Tổng cục Thống kê năm có từ 1.200 - 1.400 trẻ khiếm thính ra đời.
              </p>
            </div>

            {/* Statistic 2 */}
            <div className="bg-[#EEF1FF] p-8 rounded-xl h-[413px] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-4">Giảm thính lực</h3>
              <p className="text-gray-600 text-center">
                Tỷ lệ giảm thính lực ở độ tuổi từ 65 - 75 chiếm khoảng 30% - 40%, trên 75 tuổi chiếm khoảng 40% - 50%.
              </p>
            </div>

            {/* Statistic 3 */}
            <div className="bg-[#EEF1FF] p-8 rounded-xl h-[413px] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-4">Can thiệp</h3>
              <p className="text-gray-600 text-center">
                Chỉ khoảng 30% trẻ sơ sinh được sàng lọc thính lực sau sinh tại Việt Nam. Mục tiêu đến năm 2030 là 90% trẻ sơ sinh được làm sàng lọc thính lực sớm, bao gồm khiếm thính.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Law Section */}
      <section className="py-20 px-4 md:px-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl md:text-[32px] font-bold">
                  Luật Người
                  <br />
                  khuyết tật
                </h2>
              </div>
              <p className="text-gray-600 text-lg">
                Việc thực thi Luật người khuyết tật nhằm quy định quyền và nghĩa vụ của mình, đồng thời tiếp cận các dịch vụ hỗ trợ, tăng cường tự tin và bảo vệ quyền lợi trước các hành vi phân biệt đối xử.
              </p>
              {/* Chapter Buttons Grid */}
              <div className="flex flex-wrap gap-2">
                {chapters.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleScroll(index + 1)}
                    className="px-6 py-2 text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Law Document Preview */}
            <div className="bg-white md:col-span-2 p-8 rounded-xl shadow-lg max-h-[720px] overflow-x-hidden overflow-y-auto">
              <div className="pb-4 mb-4">
                <p className="text-sm text-gray-500">Luật số 51/2010/QH12 của Quốc hội: LUẬT NGƯỜI KHUYẾT TẬT</p>
                <div className="flex justify-between mt-2">
                  <div className='flex items-center flex-col'>
                    <div className=''>
                      <p className="text-sm font-medium mb-5">QUỐC HỘI</p>
                      <hr />
                    </div>
                    <p className='mt-1'>Luật số: 51/2010/QH12</p>
                  </div>
                  <div className='flex items-center flex-col'>
                    <div className='flex flex-col'>
                      <p className="text-sm font-medium ">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                      <div className=''>
                        <p className="text-center text-sm font-medium ">Độc lập - Tự do - Hạnh phúc</p>
                        <hr className='w-1/2 mx-auto mt-2' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div dangerouslySetInnerHTML={{ __html: docs }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-bold mb-10">Câu hỏi thường gặp</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FAQItem
              question="Tại sao cần nắm rõ Luật về Người khuyết tật?"
              answer="Việc nắm rõ Luật về người khuyết tật rất quan trọng vì giúp bảo vệ quyền lợi và tăng cơ hội hòa nhập cộng đồng cho người khuyết tật. Luật quy định rõ các quyền về giáo dục, việc làm, chăm sóc sức khỏe, tiếp cận thông tin và sống độc lập. Hiểu luật giúp ngăn chặn phân biệt đối xử, hướng dẫn tổ chức và cá nhân thực hiện đúng trách nhiệm, đồng thời tạo điều kiện để xã hội chung tay hỗ trợ người khuyết tật hiệu quả hơn. Đây là cơ sở quan trọng để xây dựng một xã hội công bằng và nhân văn."
            />
            <FAQItem
              question="Có những phương pháp nào đặc biệt để trẻ khiếm thính học nói? "
              answer="Để giúp trẻ khiếm thính học nói, có một số phương pháp hiệu quả. Phương pháp bắt chước giúp trẻ quan sát hình miệng và nhắc lại từ ngữ. Phương pháp luyện nghe hỗ trợ trẻ nhận biết âm thanh với sự giúp đỡ của máy trợ thính. Ngôn ngữ ký hiệu cũng được sử dụng để hỗ trợ giao tiếp. Cuối cùng, phương pháp trị liệu Nghe – Nói giúp phát triển kỹ năng nghe và nói, giúp trẻ giao tiếp tự nhiên hơn. Tất cả đều cần sự kiên nhẫn và hỗ trợ từ người lớn."
            />
            <FAQItem
              question="Có những mức độ khiếm thính nào?"
              answer="Việc nắm rõ Luật về người khuyết tật rất quan trọng vì giúp bảo vệ quyền lợi và tăng cơ hội hòa nhập cộng đồng cho người khuyết tật. Luật quy định rõ các quyền về giáo dục, việc làm, chăm sóc sức khỏe, tiếp cận thông tin và sống độc lập. Hiểu luật giúp ngăn chặn phân biệt đối xử, hướng dẫn tổ chức và cá nhân thực hiện đúng trách nhiệm, đồng thời tạo điều kiện để xã hội chung tay hỗ trợ người khuyết tật hiệu quả hơn."
            />
            <FAQItem
              question="Những yếu tố di truyền nào có thể gây khiếm thính?"
              answer="Khiếm thính có thể được gây ra bởi các yếu tố di truyền. Đột biến gen GJB2 là một trong những nguyên nhân phổ biến nhất, dẫn đến mất thính lực bẩm sinh. Ngoài ra, các gen như GJB3, SLC26A4, và 12S rRNA cũng liên quan đến khiếm thính. Một số hội chứng di truyền như Usher, Pendred, và Waardenburg cũng có thể gây ra khiếm thính, thường đi kèm với các triệu chứng khác. Những yếu tố di truyền này có thể di truyền theo mô hình lặn hoặc trội."
            />
            <FAQItem
              question="Khi nói chuyện với người khiếm thính, tôi nên làm gì?"
              answer="Hãy nhìn thẳng vào họ, nói chậm, rõ ràng. Dùng cử chỉ, biểu cảm khuôn mặt, hoặc viết nếu cần. Tránh quay mặt đi khi nói hoặc che miệng."
            />
            <FAQItem
              question="Có những loại thiết bị hỗ trợ nào dành cho người khiếm thính?"
              answer="1. Máy trợ thính: Bao gồm các loại như BTE, ITE, RITE, ITC – giúp khuếch đại âm thanh phù hợp với từng mức độ khiếm thính.

              2. Thiết bị truyền âm trực tiếp (ALDs): Hệ thống FM, hồng ngoại, vòng cảm ứng từ (hearing loop) và Bluetooth giúp nghe rõ hơn trong môi trường ồn hoặc khoảng cách xa.

              3. Cấy ghép ốc tai (Cochlear implant): Dành cho người khiếm thính nặng – truyền âm thanh trực tiếp đến não thông qua kích thích điện.

              5. Thiết bị truyền âm qua xương (BAHA): Truyền âm qua xương sọ, thích hợp với người bị khiếm thính dẫn truyền.

              6. Thiết bị cảnh báo: Các thiết bị phát tín hiệu bằng đèn nháy hoặc rung (như chuông cửa, báo thức, báo cháy) hỗ trợ người khiếm thính nhận biết môi trường xung quanh."
            />
            <FAQItem
              question="Người khiếm thính có thể giao tiếp như thế nào?"
              answer="Người khiếm thính có thể giao tiếp bằng ngôn ngữ ký hiệu, viết, đọc khẩu hình, hoặc qua thiết bị hỗ trợ nghe. Nhiều người cũng sử dụng lời nói nếu được luyện tập từ nhỏ."
            />
            <FAQItem
              question="Các phương pháp giáo dục nào đặc biệt hiệu quả cho trẻ khiếm thính?"
              answer="Trẻ khiếm thính có thể phát triển khả năng học tập và giao tiếp hiệu quả thông qua các phương pháp giáo dục đặc biệt. Phương pháp bắt chước giúp trẻ học nói bằng cách quan sát hình miệng của người lớn, trong khi phương pháp luyện nghe sử dụng máy trợ thính để cải thiện khả năng nhận biết âm thanh. Phương pháp giao tiếp tổng hợp kết hợp ngôn ngữ ký hiệu, chữ cái tay, và biểu lộ thông qua nét mặt, cử chỉ để hỗ trợ giao tiếp đa dạng. Ngoài ra, phương pháp tiếp cận song ngữ cho phép trẻ sử dụng thành thạo cả ngôn ngữ ký hiệu và ngôn ngữ nói, giúp phát triển khả năng giao tiếp linh hoạt. Sử dụng hình ảnh và xúc giác cũng giúp trẻ tiếp nhận kiến thức tốt hơn. Cuối cùng, tạo một môi trường hỗ trợ với sự quan tâm từ gia đình và cộng đồng là chìa khóa để trẻ khiếm thính phát triển toàn diện."
            />
            {/* Add the rest of your FAQ items here */}
          </div>
        </div>
      </section>
   </div >
  )
}