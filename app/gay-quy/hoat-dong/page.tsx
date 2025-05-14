"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const route = useRouter();
  const handleDownload = () => {
    fetch("/pdf-mau.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "downloaded-file.pdf";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };
  return (
    <div>
      <section className="w-full  h-[230px] md:h-[232px] mt-20 relative bg-[#3A63ED] flex flex-col justify-center items-start px-20">
        <h1 className="font-bold md:text-5xl text-xl sm:text-4xl text-[#FFFFFF] mb-2">Quỹ của bạn được sử dụng như thế nào?</h1>
        <p className=" md:text-lg sm:text-base text-xs text-[#FFFFFF]">Tại Foundation for Future, mỗi khoản đóng góp đều góp phần trực tiếp vào việc tạo nên sự thay đổi tích cực cho cộng đồng người khiếm thính. Chúng tôi sử dụng nguồn quỹ để triển khai các hoạt động thiết thực, mang lại cơ hội phát triển bền vững</p>
      </section>
      <div className="container mx-auto px-4 pt-[50px] pb-28 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className="py-8 px-12 rounded-2xl bg-[#F2F2F3]">
            <h1 className="md:text-[32px] text-center mb-4 font-bold text-[#3A63ED]">Hỗ trợ giáo dục & đào tạo</h1>
            <ul className="md:text-lg font-normal list-disc">
              <li>Cung cấp khóa học ngôn ngữ ký hiệu, kỹ năng mềm, đào tạo nghề miễn phí</li>
              <li>Phát triển nội dung học tập trực tuyến, dễ tiếp cận với người khiếm thính</li>
              <li>Tư vấn định hướng học tập, học nghề phù hợp với khả năng</li>
            </ul>
          </div>
          <div className="py-8 px-12  rounded-2xl bg-[#F2F2F3]">
            <h1 className="md:text-[32px] text-center mb-4 font-bold text-[#3A63ED]">Nâng cao nhận thức xã hội</h1>
            <ul className="md:text-lg font-normal list-disc">
              <li>Tổ chức chiến dịch truyền thông, sự kiện cộng đồng nhằm thay đổi định kiến</li>
              <li>Phát hành ấn phẩm, video có phụ đề SDH để tiếp cận đa dạng đối tượng</li>
              <li>Hợp tác với tổ chức, trường học và doanh nghiệp thúc đẩy hòa nhập</li>
            </ul>
          </div>
          <div className="py-8 px-12  rounded-2xl bg-[#F2F2F3]">
            <h1 className="md:text-[32px] text-center mb-4 font-bold text-[#3A63ED]">Kết nối việc làm</h1>
            <ul className="md:text-lg font-normal list-disc">
              <li>Hỗ trợ tìm việc, kết nối với nhà tuyển dụng thân thiện với người khuyết tật</li>
              <li>Tổ chức chương trình đào tạo kỹ năng làm việc và phỏng vấn</li>
              <li>Tạo hệ sinh thái việc làm công bằng và hòa nhập</li>
            </ul>
          </div>
          <div className="py-8 px-12  rounded-2xl bg-[#F2F2F3]">
            <h1 className="md:text-[32px] text-center mb-4 font-bold text-[#3A63ED]">Cải thiện công cụ hỗ trợ</h1>
            <ul className="md:text-lg font-normal list-disc">
              <li>Cung cấp thông tin về thiết bị trợ thính, dịch vụ phiên dịch ngôn ngữ ký hiệu</li>
              <li>Hỗ trợ truy cập các công nghệ học tập dành riêng cho người khiếm thính</li>
            </ul>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-12 pt-24 text-center">Tác động từ sự ủng hộ của bạn</h1>
        <div className="flex flex-grow">
          <div className="basis-1/2 bg-[#FEF5D0] rounded-l-2xl py-16  pl-16 pr-14 flex justify-center flex-col">
            <h1 className="md:text-[32px] text-center mb-4 font-bold">Xây dựng nền tảng bền vững</h1>
            <ul className="md:text-lg font-normal list-disc">
              <li>Giảm rào cản tiếp cận giáo dục với tài nguyên học tập được thiết kế dành riêng cho người khiếm thính.</li>
              <li>Thay đổi cách nhìn của xã hội, từ sự thương hại sang sự tôn trọng và công nhận khả năng.</li>
              <li>Phát triển đội ngũ tình nguyện viên, chuyên gia, nhà tuyển dụng đồng hành cùng sứ mệnh dài hạn.</li>
            </ul>
          </div>
          <div className="basis-1/2 rounded-r-2xl">
            <img src="/image/hoatdong1.png" alt="" className="rounded-r-2xl w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-grow mt-6">
          <div className="basis-1/2 bg-[#D8E0FB] rounded-l-2xl pl-16 py-16  pr-14 flex justify-center flex-col">
            <h1 className="md:text-[32px] text-center mb-4 font-bold">Tác động thực tế</h1>
            <ul className="md:text-lg font-normal list-disc">
              <li>Hơn 1.000 người khiếm thính đã tiếp cận các khóa học ngôn ngữ ký hiệu, kỹ năng mềm và đào tạo nghề phù hợp.</li>
              <li>Nhiều học viên đã có việc làm tại các doanh nghiệp hòa nhập sau khi tham gia chương trình kết nối việc làm của FFF.</li>
              <li>Hàng nghìn lượt truy cập vào nền tảng học tập trực tuyến – nơi cung cấp tài liệu dễ hiểu, có phụ đề và phiên dịch.</li>
              <li>Cộng đồng người khiếm thính được trao tiếng nói thông qua các sự kiện truyền thông, diễn đàn, chiến dịch nâng cao nhận thức.</li>
            </ul>
          </div>
          <div className="basis-1/2 rounded-r-2xl">
            <img src="/image/hoatdong2.png" alt="" className="rounded-r-2xl w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="bg-[#111827] pb-24 pt-14 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white font-bold text-center">Chúng tôi cam kết</h1>
        <div className="grid md:grid-cols-4 justify-center items-center px-20 mt-[56px] gap-7 max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <img src="/image/icon1.png" alt="" className="mb-6 w-[44px] h-[42px] object-cover" />
            <div className="text-2xl text-center font-bold text-white mb-2">Minh bạch & trung thực</div>
            <p className="text-[#F2F2F3] text-base text-center">Mỗi khoản đóng góp đều được quản lý rõ ràng, sử dụng đúng mục đích, có báo cáo định kỳ và công khai.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/image/icon2.png" alt="" className="mb-6 w-[44px] h-[42px] object-cover" />
            <div className="text-2xl text-center font-bold text-white mb-2">Minh bạch & trung thực</div>
            <p className="text-[#F2F2F3] text-base text-center">Mỗi khoản đóng góp đều được quản lý rõ ràng, sử dụng đúng mục đích, có báo cáo định kỳ và công khai.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/image/icon3.png" alt="" className="mb-6 w-[44px] h-[42px] object-cover" />
            <div className="text-2xl text-center font-bold text-white mb-2">Minh bạch & trung thực</div>
            <p className="text-[#F2F2F3] text-base text-center">Mỗi khoản đóng góp đều được quản lý rõ ràng, sử dụng đúng mục đích, có báo cáo định kỳ và công khai.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/image/icon4.png" alt="" className="mb-6 w-[44px] h-[42px] object-cover" />
            <div className="text-2xl text-center font-bold text-white mb-2">Minh bạch & trung thực</div>
            <p className="text-[#F2F2F3] text-base text-center">Mỗi khoản đóng góp đều được quản lý rõ ràng, sử dụng đúng mục đích, có báo cáo định kỳ và công khai.</p>
          </div>
        </div>
        <div className="mt-14 mb-6 w-full flex justify-center">
          <button
            onClick={() => {
              route.push("/gay-quy");
            }}
            className="bg-[#3A63ED] font-light text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base  hover:bg-[#3A63ED]/60 transition-colors duration-300"
          >
            Gây quỹ ngay hôm nay
          </button>
        </div>
        <div className="mb-6 w-full flex justify-center">
          <button onClick={handleDownload} className="font-bold text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base transition-colors duration-300 flex justify-center items-center gap-2">
            Tải báo cáo thường niên <img src="/image/taive.png" alt="" />
          </button>
        </div>
        <div className="mb-6 w-full flex justify-center">
          <button
            onClick={() => {
              route.push("/gay-quy/quy-tac-gay-quy");
            }}
            className="font-bold text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base transition-colors duration-300 flex justify-center items-center gap-2"
          >
            Quy tắc gây quỹ <img src="/icon/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
