'use client'
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const route = useRouter()
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 max-w-7xl mx-auto mt-[122px] px-4">
        <div className=" bg-[#FEF5D0] lg:rounded-l-2xl rounded-t-2xl py-16  pl-16 pr-14 flex justify-center flex-col">
          <h1 className="md:text-5xl  mb-4 font-bold">Giá trị cốt lõi</h1>
          <ul className="md:text-lg font-normal">
            <li>
              <span className="font-bold">Bền vững:</span> Chúng tôi tập trung vào việc xây dựng những giá trị dài lâu, đảm bảo người khiếm thính có thể phát triển lâu dài trong tương lai.
            </li>
            <li>
              <span className="font-bold">Bền vững:</span> Mọi hoạt động của chúng tôi đều hướng tới việc chuẩn bị cho người khiếm thính một tương lai tốt đẹp hơn thông qua việc phát triển các kỹ năng sống và nghề nghiệp.
            </li>
            <li>
              <span className="font-bold">Hòa nhập:</span> Mọi hoạt động của chúng tôi đều hướng tới việc chuẩn bị cho người khiếm thính một tương lai tốt đẹp hơn thông qua việc phát triển các kỹ năng sống và nghề nghiệp.
            </li>
            <li>
              <span className="font-bold">Khả năng:</span> Mọi hoạt động của chúng tôi đều hướng tới việc chuẩn bị cho người khiếm thính một tương lai tốt đẹp hơn thông qua việc phát triển các kỹ năng sống và nghề nghiệp.
            </li>
            <li>
              <span className="font-bold">Đồng cảm và Tôn trọng:</span> Mọi hoạt động của chúng tôi đều hướng tới việc chuẩn bị cho người khiếm thính một tương lai tốt đẹp hơn thông qua việc phát triển các kỹ năng sống và nghề nghiệp.
            </li>
          </ul>
        </div>
        <div className="ld:rounded-r-2xl rounded-b-2xl">
          <img src="/image/hoatdong2.png" alt="" className="ld:rounded-r-2xl rounded-b-2xl  w-full h-full object-cover" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="bg-[#F2F2F3] rounded-2xl py-16  pl-16 pr-14 flex justify-center flex-col">
          <h1 className="md:text-5xl  mb-4 font-bold">Quy tắc gây quỹ của Foundation for Future</h1>
          <p className="md:text-lg font-normal mb-4">Tại Foundation for Future, chúng tôi trân trọng từng sự đóng góp từ cộng đồng – những người tin vào một xã hội công bằng, nơi người khiếm thính có thể tiếp cận giáo dục, đào tạo nghề và cơ hội việc làm một cách bình đẳng. Chính vì vậy, chúng tôi cam kết xây dựng và thực hiện các nguyên tắc gây quỹ minh bạch, độc lập và có trách nhiệm.</p>
          <div className="md:text-lg font-bold">Tính độc lập</div>
          <p className="mb-4">Foundation for Future không nhận tài trợ từ các tổ chức chính phủ, đảng phái chính trị hay các tập đoàn doanh nghiệp. Các khoản tài trợ từ cá nhân và các quỹ độc lập là nguồn tài chính duy nhất để đảm bảo rằng chúng tôi duy trì được sự độc lập và trung lập trong mọi hoạt động hỗ trợ người khiếm thính.</p>
          <div className="md:text-lg font-bold">Sàng lọc và minh bạch</div>
          <p className="mb-4">Tất cả các khoản đóng góp lớn đều được kiểm tra nhằm đảm bảo không ảnh hưởng đến tính chính trực, định hướng hoạt động hoặc làm lệch mục tiêu của tổ chức. Trong trường hợp phát hiện xung đột lợi ích hoặc bất kỳ yếu tố không phù hợp nào, chúng tôi sẽ từ chối hoặc hoàn lại khoản tài trợ đó.</p>
          <div className="md:text-lg font-bold">Trách nhiệm và hiệu quả</div>
          <p className="mb-4">Chúng tôi cam kết sử dụng nguồn quỹ một cách hiệu quả và có tác động lớn nhất. Mỗi khoản đóng góp đều được sử dụng để đầu tư vào chương trình giáo dục, đào tạo nghề, nâng cao năng lực, phát triển công nghệ hỗ trợ và vận hành nền tảng học tập trực tuyến cho người khiếm thính.</p>
          <div className="md:text-lg font-bold">Tôn trọng mong muốn của người ủng hộ</div>
          <p className="mb-4">Nếu người ủng hộ muốn khoản quyên góp của mình được sử dụng vào một chương trình cụ thể, chúng tôi sẽ nỗ lực đáp ứng mong muốn đó. Mọi khoản đóng góp được phân bổ theo phương pháp kế toán rõ ràng và sẽ được báo cáo cụ thể trong các bản công bố hằng năm của tổ chức.</p>
          <div className="md:text-lg font-bold">Tuân thủ đạo đức và pháp lý</div>
          <p className="mb-4">Các phương pháp gây quỹ của Foundation for Future tuân thủ quy chuẩn đạo đức nghề nghiệp và các quy định pháp luật tại Việt Nam cũng như quốc tế. Chúng tôi luôn duy trì sự tôn trọng tuyệt đối đối với người ủng hộ và cộng đồng mà chúng tôi phục vụ.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="bg-[#D8E0FB] rounded-2xl py-16  pl-16 pr-14 flex justify-center flex-col">
          <h1 className="md:text-5xl  mb-4 font-bold">Hệ thống minh bạch</h1>
          <ul>
            <li>Foundation for Future minh bạch trong mọi hoạt động gây quỹ, quản lý tài chính và triển khai chương trình:</li>
            <li>Công khai chi tiết nguồn thu – chi trong Báo cáo thường niên.</li>
            <li>Thiết lập hệ thống giám sát nội bộ và kiểm toán độc lập.</li>
            <li>Mọi phản hồi, khiếu nại đều được tiếp nhận và xử lý theo quy trình công khai.</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="bg-[#D8E0FB] rounded-2xl py-16  pl-16 pr-14 flex justify-center flex-col">
          <h1 className="md:text-5xl  mb-4 font-bold">Cam kết đa dạng và hòa nhập</h1>
          <ul>
            <li>Chúng tôi xây dựng một môi trường an toàn, thân thiện, nơi mọi người – dù ở bất kỳ hoàn cảnh nào – đều được chào đón và được tôn trọng.</li>
            <li>Không phân biệt đối xử vì lý do giới tính, khuyết tật, văn hóa, tôn giáo hay khuynh hướng cá nhân.</li>
            <li>Trao quyền cho người khiếm thính tham gia vào mọi khâu thiết kế, thực hiện và đánh giá chương trình.</li>
            <li>Tạo điều kiện tiếp cận thông tin bằng ngôn ngữ ký hiệu, phụ đề, và các công cụ hỗ trợ cần thiết.</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 mb-24 w-full flex justify-center">
        <button onClick={() => { route.push('/gay-quy') }} className="bg-[#3A63ED] font-light text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base  hover:bg-[#3A63ED]/60 transition-colors duration-300">Gây quỹ ngay hôm nay</button>
      </div>
    </div>

  );
};

export default page;
