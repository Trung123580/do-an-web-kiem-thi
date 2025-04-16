import React from 'react'
import Image from 'next/image';
import { docs } from '@/utils/contanst';

export default function page() {
  const chapters = [
    'Chương I', 'Chương II', 'Chương III', 'Chương IV',
    'Chương V', 'Chương VI', 'Chương VII', 'Chương VIII',
    'Chương IX', 'Chương X'
  ];

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
            <div className="grid grid-cols-2 gap-4 mt-8">
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  className="px-6 py-3 text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                >
                  {chapter}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Law Document Preview */}
          <div className="bg-white md:col-span-2 p-8 rounded-xl shadow-lg max-h-[720px] overflow-x-hidden overflow-y-auto">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <p className="text-sm text-gray-500">Luật số 51/2010/QH12 của Quốc hội: LUẬT NGƯỜI KHUYẾT TẬT</p>
              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium">QUỐC HỘI</p>
                <p className="text-sm font-medium">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
              </div>
              <p className="text-sm text-right mt-1">Độc lập - Tự do - Hạnh phúc</p>
            </div>

            <div className="space-y-4">
              <div dangerouslySetInnerHTML={{__html: docs}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
}