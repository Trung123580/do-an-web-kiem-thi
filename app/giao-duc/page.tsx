"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dataSukien, dataVolunteer } from "@/utils/contanst";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function EducationPage() {
  const route = useRouter()
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
    <div className="min-h-screen pt-24 pb-8 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F2F2F3] mb-24 h-auto md:h-[480px] rounded-2xl overflow-hidden">
          <div className="flex justify-evenly flex-col h-full p-6 md:p-8 lg:p-12">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-tight mb-4">
                Ngôn ngữ ký hiệu là
                <br />
                phương tiện giao tiếp
              </h1>
              <p className="text-base sm:text-xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl max-w-xl mb-12">Ngôn ngữ ký hiệu là một hình thức giao tiếp bằng thị giác, sử dụng các cử chỉ tay, biểu cảm khuôn mặt và chuyển động cơ thể để truyền đạt thông tin.</p>
              <button onClick={() => { route.push('/giao-duc/ngon-ngu-ky-hieu') }} className="bg-[#111827] font-light text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base  hover:bg-[#111827]/60 transition-colors duration-300">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className='rounded-2xl relative h-[300px] md:h-full overflow-hidden basis-full md:basis-2/3 block'>
            {/* <Image src='/image/banner-9.png' alt='Education Banner'  priority /> */}
            <video
              src="/ngonngukyhieu.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              // width={500} height={500}
              muted
              playsInline
            />
            <Link href={'ngon-ngu-ky-hieu/game'}><img src='/image/game1.png' alt="" className="absolute bottom-0 right-2 cursor-pointer" /></Link>
          </div>
        </div>
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div>
            <h2 className="text-5xl font-bold mb-6">Trị liệu ngôn ngữ</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {dataSukien.slice(0, 3).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300 h-[472px]">
                    <div className="relative h-72 bg-[#CFD1D4]">
                      <Image src={course.img} alt={course.title} fill className="object-cover" />
                    </div>
                    <div className="px-6 pt-6 pb-4">
                      <h3 className="font-semibold text-xl mb-2 line-clamp-1">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-8 line-clamp-1">Ngày kết thúc: {course.date}</p>
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
            <div className="text-end mt-4">
              <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
                Xem thêm <img src="/icon/arrow.png" alt="" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 mt-16">Kỹ năng mềm</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {dataSukien.slice(0, 3).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className="rounded-2xl overflow-hidden group cursor-pointer  h-[472px]">
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
                Xem thêm <img src="/icon/arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 h-auto sm:h-[255px] md:h-[345px] lg:h-[400px] xl:h-[495px] 2xl:h-[545px] rounded-2xl overflow-hidden mt-24">
          <div className="flex justify-evenly flex-col p-6 md:p-12">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                Tư vấn định hướng
                <br />
                học tập
              </h1>
              <p className="text-base sm:text-xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl max-w-xl">Tư vấn và định hướng phù hợp là cách tốt nhất để giúp người khiếm thính phát huy tiềm năng, lựa chọn đúng hướng đi, và xây dựng lộ trình học tập – nghề nghiệp phù hợp với khả năng, sở thích và điều kiện cá nhân</p>
              <button onClick={() => { route.push('/giao-duc/tu-van-dinh-huong') }} className="bg-[#111827] font-light text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base  hover:bg-[#111827]/60 transition-colors duration-300">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className="relative z-0 overflow-visible h-[400px] sm:h-auto group">
            <img src="/image/banner-6.png" alt="Education Banner" className="object-cover h-full absolute bottom-0 left-0  hover:scale-100 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90 " />
            <img src="/image/banner-7.png" alt="Education Banner" className="object-cover h-full absolute bottom-0 left-1/2 -translate-x-1/2 hover:scale-100 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
            <img src="/image/banner-8.png" alt="Education Banner" className="object-cover h-full absolute bottom-0 right-0 hover:scale-100 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 mt-24">Giáo dục đặc biệt</h2>
        <Slider {...volunteerCarouselSettings} className="volunteer-carousel -mx-3 overflow-hidden">
          {dataVolunteer.map((item, index) => {
            return (
              <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/volunteer/${item.slug}`} className="px-3 h-full">
                <div className="bg-white hover:bg-[#D8E0FB]  overflow-hidden shadow-lg h-full group relative rounded-2xl transition-all duration-1000">
                  <div className="relative h-60 group-hover:h-40 transition-all duration-300 rounded-2xl">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="px-6 pt-8 pb-8">
                    <p className="text-gray-600 font-medium text-lg">{item.title}</p>
                    <p className="text-gray-600 font-medium text-sm absolute line-clamp-3 left-0  right-0 px-6 pt-0 translate-y-full group-hover:translate-y-0 group-hover:mt-2 transition-all duration-500">{item.sortDesc}</p>
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
        <div className="text-end mt-4">
          <Link href="/giao-duc/giao-duc-dac-biet" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
            Xem thêm <img src="/icon/arrow.png" alt="" />
          </Link>
        </div>
      </div>

    </div>
  );
}
