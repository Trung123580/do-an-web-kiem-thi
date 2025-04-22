"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { dataSukien, dataVolunteer } from "@/utils/contanst";
import Slider from "react-slick";

export default function page() {
  const volunteerCarouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-8 h-auto md:h-[480px] rounded-2xl overflow-hidden gap-4 md:gap-8">
          <div className="flex justify-evenly bg-[#F2F2F3] flex-col h-[300px] md:h-full p-6 md:p-10 basis-full md:basis-1/3 rounded-2xl">
            <div className="relative h-full w-full">
              <div className="relative h-full w-full">
                <img 
                  src="/image/finger1.png" 
                  alt="" 
                  className="object-cover absolute -top-2 left-8 md:left-12 z-1 animate-wiggle w-16 md:w-auto" 
                />
                <img src="/image/finger2.png" alt="" className="object-cover absolute top-9 right-8 md:right-11 w-16 md:w-auto" />
                <img src="/image/arrow1.png" alt="" className="object-cover absolute bottom-20 md:bottom-28 left-16 md:left-28 animate-arrow w-16 md:w-auto" />
              </div>
              <div className="absolute bottom-0 left-0 flex justify-center items-center flex-col gap-2 w-full">
                <p className="font-light text-base md:text-lg">Ký hiệu trong ngày</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Ốm</h1>
              </div>
            </div>
          </div>
          <div className="rounded-2xl h-[300px] md:h-full overflow-hidden basis-full md:basis-2/3">
            <Image src="/image/banner-5.png" alt="Education Banner" width={500} height={500} className="object-cover w-full h-full" priority />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 md:gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Trị liệu ngôn ngữ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {dataSukien.slice(0, 4).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300 h-auto md:h-[472px]">
                    <div className="relative h-48 md:h-72 bg-[#CFD1D4]">
                      <Image src={course.img} alt={course.title} fill className="object-cover" />
                    </div>
                    <div className="px-4 md:px-6 pt-4 md:pt-6 pb-4">
                      <h3 className="font-semibold text-lg md:text-xl mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">Ngày kết thúc: {course.date}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 w-full">
                          <Image src={"/image/Ellipse-7.png"} alt="DNXH Logo" width={32} height={32} className="rounded-full w-8 h-8 md:w-10 md:h-10" />
                          <div>
                            <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                            <div className="font-medium text-sm md:text-base">Foundation For Future</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-end mt-4 md:mt-6">
              <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-5 md:px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
                Xem thêm &rarr;
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Kỹ năng mềm</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {dataSukien.slice(0, 4).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300 h-auto md:h-[472px]">
                    <div className="relative h-48 md:h-72 bg-[#CFD1D4]">
                      <Image src={course.img} alt={course.title} fill className="object-cover" />
                    </div>
                    <div className="px-4 md:px-6 pt-4 md:pt-6 pb-4">
                      <h3 className="font-semibold text-lg md:text-xl mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">Ngày kết thúc: {course.date}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 w-full">
                          <Image src={"/image/Ellipse-7.png"} alt="DNXH Logo" width={32} height={32} className="rounded-full w-8 h-8 md:w-10 md:h-10" />
                          <div>
                            <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                            <div className="font-medium text-sm md:text-base">Foundation For Future</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-end mt-4 md:mt-6">
              <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-5 md:px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
                Xem thêm &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F2F2F3] mb-8 h-auto md:h-[671px] rounded-2xl overflow-hidden">
          <div className="flex justify-evenly flex-col h-full p-6 md:p-12">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Tư vấn định hướng
                <br />
                học tập
              </h1>
              <p className="text-base md:text-lg max-w-xl">Tư vấn và định hướng phù hợp là cách tốt nhất để giúp người khiếm thính phát huy tiềm năng, lựa chọn đúng hướng đi, và xây dựng lộ trình học tập – nghề nghiệp phù hợp với khả năng, sở thích và điều kiện cá nhân</p>
              <button className="bg-[#111827] font-light text-white px-8 md:px-12 py-2 md:py-3 rounded-md text-base md:text-lg hover:bg-[#2E4FBE]/80 transition-colors duration-300">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className="relative z-0 overflow-visible group h-[300px] md:h-auto">
            <img src="/image/banner-6.png" alt="Education Banner" className="object-cover absolute bottom-0 left-0 w-1/3 md:w-auto hover:scale-125 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
            <img src="/image/banner-7.png" alt="Education Banner" className="object-cover absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 md:w-auto hover:scale-125 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
            <img src="/image/banner-8.png" alt="Education Banner" className="object-cover absolute bottom-0 right-0 w-1/3 md:w-auto hover:scale-125 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Thông tin</h2>
        <Slider {...volunteerCarouselSettings} className="volunteer-carousel -mx-3 overflow-hidden">
          {dataVolunteer.map((item, index) => {
            return (
              <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/volunteer/${item.slug}`} className="px-3 h-full">
                <div className="bg-white overflow-hidden shadow-lg h-full group relative rounded-2xl">
                  <div className="relative h-48 md:h-60 group-hover:h-32 md:group-hover:h-40 transition-all duration-300 rounded-2xl">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="px-4 md:px-6 pt-4 pb-2">
                    <p className="text-gray-600 font-medium text-base md:text-lg mb-4">{item.title}</p>
                    <p className="text-gray-600 font-medium text-xs md:text-sm absolute left-0 right-0 p-4 pt-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">{item.sortDesc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
        <style jsx global>{`
          .volunteer-carousel .slick-track {
            display: flex !important;
            padding: 1rem 0;
          }
          .volunteer-carousel .slick-slide {
            height: inherit !important;
            margin-bottom: 1rem;
          }
          .volunteer-carousel .slick-slide > div {
            height: 100%;
          }
        `}</style>
         <div className="text-end mt-4 md:mt-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-5 md:px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
          Xem thêm &rarr;
        </Link>
      </div>
      </div>
     
    </div>
  );
}
