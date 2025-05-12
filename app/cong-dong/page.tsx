import React from "react";
import Image from "next/image";
import { organizations, organizations_1, organizations_2, organizations_3, organizations_4, organizations_5 } from "@/utils/contanst";



const page = () => {
  return (
    <div>
      <section className="w-full h-[400px] md:h-[404px] mt-20 relative">
        <div className="absolute inset-0 bg-[#3A63ED]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-0 text-white text-center mt-8">
          <div className="text-xl md:text-5xl font-family leading-[130%]">Sự liên kết với các tổ chức và cộng đồng là cần thiết trong việc tìm kiếm các trợ giúp</div>
        </div>
        <div className='absolute top-0 left-0 md:left-[-10px] z-50 w-[164px] md:scale-100 scale-50 origin-bottom-left'>
          <div className='absolute top-0  w-[164px] h-[150px] bg-[#89A1F4] z-10'>
            <div className='absolute bottom-0 left-0 w-[117px] h-[100px] bg-[#3A63ED] z-20' />
            <div className='absolute bottom-0 left-0 w-[117px] h-[50px] bg-[#FDE68A] z-30' />
            <div className='absolute bottom-0 right-0 w-[160px] h-[50px] bg-[#3A63ED] z-auto' />
          </div>
        </div>
        <div className='absolute bottom-0 right-0 w-[164px] h-[100px] bg-[#89A1F4] z-10'>
          <div className='absolute top-0 right-0 w-[117px] h-[50px] bg-[#3A63ED] z-20' />
          <div className='absolute bottom-full right-0 w-[117px] h-[50px] bg-[#FDE68A] z-30' />
        </div>
      </section>
      <div className="container mx-auto px-4 py-28 max-w-7xl">
        <h1 className="text-5xl font-bold mb-12">Các tổ chức Của và Vì người khiếm thính</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {organizations.map((org, index) => (
            <div key={index} className="bg-white py-2 w-[305px] px-4">
              <div className="relative h-32 mx-auto mb-6 flex flex-col items-center">
                <img
                  src={org.logo}
                  alt={org.title}
                  // fill
                  className="object-contain"
                />
              </div>
              <a target="_blank" href={org.link} className="text-lg font-semibold block mb-4 leading-[130%]">{org.title}</a>
              <p className=" text-[10px]">{org.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-12 pt-28">Các tổ chức hỗ trợ người khiếm thính</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizations_1.map((org, index) => (
            <div key={index} className="bg-white py-2 w-[305px] px-4">
              <div className="relative w-[305px] h-32 mx-auto mb-6">
                <Image
                  src={org.logo}
                  alt={org.title}
                  fill
                  className="object-contain"
                />
              </div>
              <a target="_blank" href={org.link} className="text-lg font-semibold block mb-4 leading-[130%]">{org.title}</a>
              <p className="text-[10px]">{org.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-12 pt-28">Các tổ chức nghiên cứu giáo dục người khiếm thính</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizations_2.map((org, index) => (
            <div key={index} className="bg-white py-2 w-[305px] px-4">
              <div className="relative w-[305px] h-32 mx-auto mb-6">
                <Image
                  src={org.logo}
                  alt={org.title}
                  fill
                  className="object-contain"
                />
              </div>
              <a target="_blank" href={org.link} className="text-lg font-semibold block mb-4 leading-[130%]">{org.title}</a>
              <p className="text-[10px]">{org.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-12 pt-28">Các tổ chức hỗ trợ việc làm và học nghề cho người khiếm thính</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizations_3.map((org, index) => (
            <div key={index} className="bg-white py-2 w-[305px] px-4">
              <div className="relative w-[305px] h-32 mx-auto mb-6">
                <Image
                  src={org.logo}
                  alt={org.title}
                  fill
                  className="object-contain"
                />
              </div>
              <a target="_blank" href={org.link} className="text-lg font-semibold block mb-4 leading-[130%]">{org.title}</a>
              <p className="text-[10px]">{org.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-12 pt-28">Các tổ chức quốc tế hỗ trợ người khiếm thính và người khuyết tật</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizations_4.map((org, index) => (
            <div key={index} className="bg-white py-2 w-[305px] px-4">
              <div className="relative w-[305px] h-32 mx-auto mb-6">
                <Image
                  src={org.logo}
                  alt={org.title}
                  fill
                  className="object-contain"
                />
              </div>
              <a target="_blank" href={org.link} className="text-lg font-semibold block mb-4 leading-[130%]">{org.title}</a>
              <p className="text-[10px]">{org.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-12 pt-28">Các tổ chức cung cấp dịch vụ tư vấn - đo thính lực và thiết bị trợ thính</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizations_5.map((org, index) => (
            <div key={index} className="bg-white py-2 w-[305px] px-4">
              <div className="relative w-[305px] h-32 mx-auto mb-6">
                <Image
                  src={org.logo}
                  alt={org.title}
                  fill
                  className="object-contain"
                />
              </div>
              <a target="_blank" href={org.link} className="text-lg font-semibold block mb-4 leading-[130%]">{org.title}</a>
              <p className="text-[10px]">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
