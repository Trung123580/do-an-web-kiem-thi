"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dataSukien, dataVolunteer } from "@/utils/contanst";
import Slider from "react-slick";

export default function EducationPage() {
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
    <div className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 bg-[#F2F2F3] mb-8 h-[480px] rounded-2xl overflow-hidden">
          <div className="flex justify-evenly flex-col h-full p-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Ngôn ngữ ký hiệu là
                <br />
                phương tiện giao tiếp
              </h1>
              <p className="text-lg max-w-xl">Ngôn ngữ ký hiệu là một hình thức giao tiếp bằng thị giác, sử dụng các cử chỉ tay, biểu cảm khuôn mặt và chuyển động cơ thể để truyền đạt thông tin.</p>
              <button className="bg-[#111827] font-light text-white px-12 py-3 rounded-md text-lg hover:bg-[#2E4FBE]/80 transition-colors duration-300">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className="rounded-2xl h-full overflow-hidden">
            <Image src="/image/banner-5.png" alt="Education Banner" width={500} height={500} className="object-cover w-full h-full" priority />
          </div>
        </div>
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-8">Trị liệu ngôn ngữ</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {dataSukien.slice(0, 4).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300 h-[472px]">
                    <div className="relative h-72 bg-[#CFD1D4]">
                      <Image src={course.img} alt={course.title} fill className="object-cover" />
                    </div>
                    <div className="px-6 pt-6 pb-4">
                      <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">Ngày kết thúc: {course.date}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 w-full">
                          <Image src={"/image/Ellipse-7.png"} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                          <div>
                            <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                            <div className="font-medium">Foundation For Future</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-end mt-6">
              <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
                Xem thêm &rarr;
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Kỹ năng mềm</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {dataSukien.slice(0, 4).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300 h-[472px]">
                    <div className="relative h-72 bg-[#CFD1D4]">
                      <Image src={course.img} alt={course.title} fill className="object-cover" />
                    </div>
                    <div className="px-6 pt-6 pb-4">
                      <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">Ngày kết thúc: {course.date}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 w-full">
                          <Image src={"/image/Ellipse-7.png"} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                          <div>
                            <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                            <div className="font-medium">Foundation For Future</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-end mt-6">
              <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
                Xem thêm &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#F2F2F3] mb-8 h-[671px] rounded-2xl overflow-hidden">
          <div className="flex justify-evenly flex-col h-full p-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Tư vấn định hướng
                <br />
                học tập
              </h1>
              <p className="text-lg max-w-xl">Tư vấn và định hướng phù hợp là cách tốt nhất để giúp người khiếm thính phát huy tiềm năng, lựa chọn đúng hướng đi, và xây dựng lộ trình học tập – nghề nghiệp phù hợp với khả năng, sở thích và điều kiện cá nhân</p>
              <button className="bg-[#111827] font-light text-white px-12 py-3 rounded-md text-lg hover:bg-[#2E4FBE]/80 transition-colors duration-300">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className="relative z-0 overflow-visible group">
            <img src="/image/banner-6.png" alt="Education Banner" className="object-cover absolute bottom-0 left-0  hover:scale-125 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90 " />
            <img src="/image/banner-7.png" alt="Education Banner" className="object-cover absolute bottom-0 left-1/2 -translate-x-1/2 hover:scale-125 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
            <img src="/image/banner-8.png" alt="Education Banner" className="object-cover absolute bottom-0 right-0 hover:scale-125 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Thông tin</h2>
        <Slider {...volunteerCarouselSettings} className="volunteer-carousel -mx-3 overflow-hidden">
          {dataVolunteer.map((item, index) => {
            return (
              <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/volunteer/${item.slug}`} className="px-3 h-full">
                <div className="bg-white  overflow-hidden shadow-lg h-full group relative rounded-2xl">
                  <div className="relative h-60 group-hover:h-40 transition-all duration-300 rounded-2xl">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <p className="text-gray-600 font-medium text-lg mb-4">{item.title}</p>
                    <p className="text-gray-600 font-medium text-sm absolute left-0 right-0 p-4 pt-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">{item.sortDesc}</p>
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
        <div className="text-end mt-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
          Xem thêm &rarr;
        </Link>
      </div>
      </div>
      
    </div>
  );
}
