"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { dataSukien, dataVolunteer, khoaHoc } from "@/utils/contanst"
import Slider from "react-slick"
import SwiperSlider from "@/components/SwiperSlider"

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
  }
  return (
    <div className="min-h-screen bg-white pt-16 md:pt-24 pb-8 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-8 h-[300px] sm:h-[500px] md:h-[340px] lg:h-[480px] rounded-2xl overflow-hidden gap-4 md:gap-8 mt-6">
          <div className="flex justify-evenly bg-[#F2F2F3] flex-col h-[300px] md:h-full p-6 md:p-10 basis-full md:basis-1/3 rounded-2xl">
            <div className="relative h-full w-full">
              <div className="relative h-full w-full">
                <img
                  src="/image/finger1.png"
                  alt=""
                  className="object-cover absolute top-14 sm:top-7 md:top-10 lg:top-16 xl:top-8 2xl:-top-3 left-1/2 sm:left-56 md:left-7 lg:left-10 xl:left-10 2xl:left-20 z-1 animate-wiggle w-20 sm:w-20 lg:w-30 xl:w-40 2xl:w-45"
                />
                <img
                  src='/image/finger2.png'
                  alt=''
                  className='object-cover absolute top-14 sm:top-7 md:top-16 lg:top-24 xl:top-16 2xl:top-8 right-1/3 sm:right-1/3 md:right-1 lg:right-3 xl:right-8 2xl:right-10 w-20 sm:w-20 lg:w-30 xl:w-40 2xl:w-45 '
                />
                <img
                  src='/image/arrow1.png'
                  alt=''
                  className='object-cover absolute bottom-16 sm:bottom-16 md:bottom-24 lg:bottom-32 xl:bottom-28 2xl:bottom-32 left-64 sm:left-64  md:left-12 lg:left-16 xl:left-20 2xl:left-32 animate-arrow w-4 sm:w-4 md:w-5 lg:w-9 xl:w-12 2xl:w-14'
                />
              </div>
              <div className='absolute bottom-0 left-0 flex justify-center items-center flex-col gap-2 w-full'>
                <p className='font-light text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Ký hiệu trong ngày</p>
                <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight'>Ốm</h1>
              </div>
            </div>
          </div>
          <div className='rounded-2xl relative h-[300px] md:h-full overflow-hidden basis-full md:basis-2/3 hidden sm:block'>
            <Image src='/image/banner-9.png' alt='Education Banner' width={500} height={500} className='object-cover w-full h-full' priority />
            <Link href={'ngon-ngu-ky-hieu/game'}><img src='/image/game1.png' alt="" className="absolute bottom-0 right-2 cursor-pointer" /></Link>
          </div>
        </div>
        <SwiperSlider />
        <div className='grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 md:gap-8'>
          <div>
            <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8'>Khóa học</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
              {khoaHoc.slice(0, 3).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className='rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300 h-auto md:h-[472px]'>
                    <div className='relative h-48 md:h-72 bg-[#CFD1D4]'>
                      <Image src={course.img} alt={course.title} fill className='object-cover' />
                    </div>
                    <div className='px-4 md:px-6 pt-4 md:pt-6 pb-4'>
                      <h3 className='font-semibold text-lg md:text-xl mb-2'>{course.title}</h3>
                      <p className='text-gray-600 text-sm mb-4 line-clamp-2'>Ngày kết thúc: {course.date}</p>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3 w-full'>
                          <Image src={course.organization[0].img} alt='DNXH Logo' width={32} height={32} className='rounded-full w-8 h-8 md:w-10 md:h-10' />
                          <div>
                            <div className='text-xs text-gray-500'>Đơn vị tổ chức</div>
                            <div className='font-medium text-sm md:text-base'>{course.organization[0].title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* <div className="text-end mt-4 md:mt-6">
              <Link href="/giao-duc/ngon-ngu-ky-hieu/khoa-hoc" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-5 md:px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
                Xem thêm &rarr;
              </Link>
            </div> */}
            <div className='flex justify-end mt-6'>
              <Link href={`/giao-duc/ngon-ngu-ky-hieu/khoa-hoc`} className='flex items-center px-7 py-2 text-sm border-2 border-[#CFD1D4] text-[#414652] rounded-lg hover:bg-gray-100 transition'>
                Xem thêm
                <img src='/icon/arrow.png' alt='' />
              </Link>
            </div>
          </div>
          <div>
            <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8'>Khóa học trực tuyến</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
              {dataSukien.slice(0, 4).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className='rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300 h-auto md:h-[472px]'>
                    <div className='relative h-48 md:h-72 bg-[#CFD1D4]'>
                      <Image src={course.img} alt={course.title} fill className='object-cover' />
                    </div>
                    <div className='px-4 md:px-6 pt-4 md:pt-6 pb-4'>
                      <h3 className='font-semibold text-lg md:text-xl mb-2'>{course.title}</h3>
                      <p className='text-gray-600 text-sm mb-4 line-clamp-2'>Ngày kết thúc: {course.date}</p>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3 w-full'>
                          <Image src={"/image/Ellipse-7.png"} alt='DNXH Logo' width={32} height={32} className='rounded-full w-8 h-8 md:w-10 md:h-10' />
                          <div>
                            <div className='text-xs text-gray-500'>Đơn vị tổ chức</div>
                            <div className='font-medium text-sm md:text-base'>Foundation For Future</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-6'>
          <Link href={`/giao-duc/ngon-ngu-ky-hieu/khoa-hoc-ngoai-tuyen`} className='flex items-center px-7 py-2 text-sm border-2 border-[#CFD1D4] text-[#414652] rounded-lg hover:bg-gray-100 transition'>
            Xem thêm
            <img src='/icon/arrow.png' alt='' />
          </Link>
        </div>
      </div>

    </div>
  )
}
