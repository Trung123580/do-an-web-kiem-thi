"use client"
import React from "react"
import Donate from "@/components/Donate"
import { useRouter } from "next/navigation"

export default function page() {
const route = useRouter()

  return (
    <div className='min-h-screen'>
      <section className='relative w-full md:h-[720px] mt-20'>
        <Donate/>
      </section>
      <div className='container mx-auto px-4 py-16'>
        <h1 className="md:text-5xl font-bold text-base text-center  mb-[50px]">Vì sao ủng hộ Foundation for Future?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="md:text-2xl font-bold text-base text-[#3A63ED] mb-[23px]">Chúng tôi là cộng đồng vì sự hòa nhập</div>
            <p className="md:text-base text-sm  mb-6">
              Chúng tôi không dựa vào các tập đoàn lớn hay nguồn hỗ trợ của chính phủ. Thay vào đó, chúng tôi xây dựng một cộng đồng những người tin vào sự bình đẳng, nhân phẩm và cơ hội dành cho người khiếm thính. Sự ủng hộ của bạn sẽ giúp chúng tôi mang lại giáo dục tiếp cận, đào tạo nghề và các công cụ cần thiết cho những người thường xuyên đối mặt với rào cản xã hội. Mỗi đóng góp là một bước giúp phá bỏ sự im lặng, xây dựng tương lai nơi mọi người đều có tiếng nói, giá trị và sự hiện diện.
            </p>
            <img src="/image/gayquy1.jpg" alt=""  className="rounded-lg w-full object-cover h-[288px]"/>
          </div>
           <div>
            <div className="md:text-2xl font-bold text-base text-[#3A63ED]  mb-[23px]">Để lại một sự đóng góp đầy ý nghĩa</div>
            <p className="md:text-base text-sm mb-6">
              Chúng tôi hiểu rằng ưu tiên hàng đầu của bạn là chăm lo cho những người thân yêu. Nhưng sau khi đã làm điều đó, bạn vẫn có thể tiếp tục tạo nên điều tốt đẹp – một tương lai nơi mọi người, dù có khuyết tật hay không, đều có cơ hội để phát triển. Và Foundation for Future là một nơi lý tượng để bạn có thể có những đóng góp ý nghĩa cho cộng đồng người khiếm thính. Sự đóng góp của bạn góp phần hỗ trợ người khiếm thính được hỗ trợ giáo dục và đào tạo hướng nghiệp hiệu quả hơn.
            </p>
            <img src="/image/gayquy2.jpg" alt="" className="rounded-lg w-full object-cover h-[288px]" />
          </div>
        </div>
        <div className="mt-8 w-full flex justify-center">
         <button onClick={() => { route.push('/gay-quy/hoat-dong') }} className="bg-[#111827] font-light text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base  hover:bg-[#111827]/60 transition-colors duration-300">Hoạt động của chúng tôi</button>
        </div>
      </div>
   
    </div>
  )
}
