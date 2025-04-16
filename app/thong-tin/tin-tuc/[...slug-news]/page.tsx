"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsDetail = {
  id: 1,
  title: "Cơ Hội Việc Làm Thách Thức và Rào Cản Đối Với Người khiếm thính/Điếc",
  author: "SHE+ Doanh nghiệp Xã hội vì Người Khiếm Thính Việt Nam",
  date: "07.03.2025",
  image: "/image/news-1.png",
  content: [
    {
      text: "Tại Việt Nam, có khoảng 2,5 triệu người bị khiếm thính, trong đó 60% đang ở độ tuổi lao động. Tuy nhiên, tỷ lệ người khiếm thính có việc làm vẫn còn thấp, do họ phải đối mặt với nhiều thách thức như:",
      type: "paragraph",
    },
    {
      text: "• Phân biệt đối xử và định kiến: Nhiều nhà tuyển dụng còn e ngại về khả năng làm việc của người khiếm thính, dẫn đến việc họ ít được trao cơ hội việc làm.",
      type: "bullet",
    },
    {
      text: "• Thiếu sự thiếu vì thiếu tự tin giao tiếp: Theo thống kê, 84,4% người khuyết tật từ 16 tuổi trở lên không có chuyên môn, chỉ 6,5% có bằng cấp tổ chứng nghề trở lên. Điều này khiến người khiếm thính gặp khó khăn trong việc đáp ứng yêu cầu công việc.",
      type: "bullet",
    },
    {
      text: "• Hạn chế trong tiếp cận thông tin việc làm: Người khiếm thính thường gặp khó khăn trong việc tiếp cận thông tin tuyển dụng và các dịch vụ hỗ trợ việc làm do rào cản về ngôn ngữ và công nghệ.",
      type: "bullet",
    },
    {
      text: "Để cải thiện tình hình, các doanh nghiệp xã hội như SHE+ đang nỗ lực tạo cơ hội kết nối việc làm cho người khiếm thính, giúp họ hòa nhập và đóng góp cho xã hội.",
      type: "paragraph",
    },
    {
      text: "Hiện SHE+ đang có rất nhiều đơn vị tìm đến để tuyển dụng người khiếm thính tuy nhiên để đáp ứng yêu cầu công việc thì cần có một khoảng trong điều đó phụ thuộc rất nhiều vào các yếu tố khách quan và chủ quan.",
      type: "paragraph",
    },
    {
      text: "Khi tìm kiếm việc làm, môi trường làm hàng đầu của người khiếm thính thường là môi trường làm việc thân thiện và không phân biệt đối xử. Họ mong muốn được làm việc trong môi trường tốn trọng, hỗ trợ và tạo điều kiện để phát huy khả năng.",
      type: "paragraph",
    },
    {
      text: "Tuy nhiên thực tế là việc đào tạo tại trường và gia đình chưa hỗ trợ nhiều về đào tạo kỹ năng chuyên môn và kỹ năng mềm, dẫn đến việc dẫy chính yếu tố quan trọng giúp họ tự tin và đáp ứng yêu cầu công việc.",
      type: "paragraph",
    },
    {
      text: "Việc nâng cao nhận thức của cộng đồng và doanh nghiệp về khả năng và tiềm năng của người khiếm thính, cùng với việc tạo điều kiện tiếp cận giáo dục và đào tạo nghề, sẽ góp phần quan trọng trong việc mở rộng cơ hội việc làm cho họ.",
      type: "paragraph",
    },
  ],
  tags: ["Kiến thức", "Xã hội"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="mb-8">
        <div className=" h-[400px] flex flex-row">
          <div className="basis-1/2 bg-[#111827] flex flex-col justify-end items-center">
            <h1 className="text-6xl text-white font-bold mb-10 max-w-4xl">{newsDetail.title}</h1>
          </div>
          <div className="basis-1/2">
            <Image src={newsDetail.image} alt={newsDetail.title} fill className="object-cover !relative" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row gap-2">
            <div>
              <Image src={"/image/Ellipse-6.png"} alt={newsDetail.title} fill className="object-cover !relative" />
            </div>
            <div>
              <div>
                <p className="text-gray-500 text-xs">Người viết</p>
                <h1 className="text-base text-gray-900">{newsDetail.title}</h1>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">{newsDetail.date}</p>
          </div>
          {/* Content */}
          <div className="prose max-w-none mt-5">
            {newsDetail.content.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="text-black mb-4 leading-relaxed">
                    {item.text}
                  </p>
                );
              } else if (item.type === "bullet") {
                return (
                  <div key={index} className="text-black mb-4 leading-relaxed pl-4">
                    {item.text}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
