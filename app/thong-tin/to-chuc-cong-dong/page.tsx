import React from "react";
import Image from "next/image";

const organizations = [
  {
    logo: "/image/tochuc1.png",
    title: "Hội Cha Mẹ Trẻ Khiếm Thính và Người Khiếm Thính VN",
    description: "Hỗ trợ Trẻ khiếm thính và Người khiếm thính trong hành trình tìm âm thanh, phương tiện giao tiếp phù hợp và cơ hội hòa nhập cộng đồng, cơ hội sống độc lập và bình đẳng!",
  },
  {
    logo: "/image/tochuc1.png",
    title: "Câu lạc bộ người khiếm thính TP. Hồ Chí Minh",
    description: "Establishing support networks is vital for individuals with hearing impairments. These networks foster a sense of community, offer emotional support, and provide resources for education and advocacy. By connecting with others, members can share experiences and strategies for navigating daily challenges.",
  },
  {
    logo: "/image/tochuc1.png",
    title: "Hiệp hội Giáo dục cho Trẻ Khiếm Thính",
    description: "Inclusive education is essential for children with hearing disabilities. It promotes equal opportunities in learning environments and encourages the development of social skills. By implementing tailored educational programs and resources, we can empower these children to thrive academically and socially.",
  },
  {
    logo: "/image/tochuc1.png",
    title: "Tổ chức trợ giúp người khiếm thính",
    description: "Access to technology plays a significant role in enhancing communication for the hearing impaired. Devices such as hearing aids, speech-to-text apps, and video relay services can transform interactions and improve quality of life. Continuous innovation in this field is necessary to meet the evolving needs of the community.",
  },
  {
    logo: "/image/tochuc1.png",
    title: "Tổ chức trợ giúp người khiếm thính",
    description: "Access to technology plays a significant role in enhancing communication for the hearing impaired. Devices such as hearing aids, speech-to-text apps, and video relay services can transform interactions and improve quality of life. Continuous innovation in this field is necessary to meet the evolving needs of the community.",
  },
  {
    logo: "/image/tochuc1.png",
    title: "Tổ chức trợ giúp người khiếm thính",
    description: "Access to technology plays a significant role in enhancing communication for the hearing impaired. Devices such as hearing aids, speech-to-text apps, and video relay services can transform interactions and improve quality of life. Continuous innovation in this field is necessary to meet the evolving needs of the community.",
  },
];

const page = () => {
  return (
    <div>
      {" "}
      <section className="relative w-full h-[400px] md:h-[720px]">
        <div className="absolute inset-0 bg-[#3A63ED]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-0 text-white text-center mt-8">
          <p className="text-xl md:text-5xl font-family leading-tight">Sự liên kết với các tổ chức và cộng đồng là cần thiết trong việc tìm kiếm các trợ giúp</p>
        </div>
        <div className='absolute top-14 left-0 md:left-[-10px] z-50 w-[277px] md:scale-100 scale-50 origin-bottom-left'>
          <div className='absolute top-0  w-[277px] h-[277px] bg-[#89A1F4] z-10'>
            <div className='absolute bottom-0 left-0 w-[184px] h-[184px] bg-[#3A63ED] z-20' />
            <div className='absolute bottom-0 left-0 w-[184px] h-[92px] bg-[#FDE68A] z-30' />
            <div className='absolute bottom-0 right-0 w-[93px] h-[92px] bg-[#3A63ED] z-30' />
          </div>
        </div>
        <div className='absolute bottom-0 right-0 w-[277px] h-[184px] bg-[#89A1F4] z-10'>
          <div className='absolute top-0 right-0 w-[184px] h-[92px] bg-[#3A63ED] z-20' />
          <div className='absolute bottom-full right-0 w-[184px] h-[92px] bg-[#FDE68A] z-30' />
        </div>
      </section>
      <div className="container mx-auto px-4 py-28 max-w-7xl">
        <h1 className="text-5xl font-bold mb-12">Các tổ chức Của và Vì người khiếm thính</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <div key={index} className="bg-white p-6">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={org.logo}
                  alt={org.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-4">{org.title}</h3>
              <p className="text-gray-600 text-[10px]">{org.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-12 pt-28">Các tổ chức hỗ trợ người khiếm thính</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <div key={index} className="bg-white p-6">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={org.logo}
                  alt={org.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-4">{org.title}</h3>
              <p className="text-gray-600 text-[10px]">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
