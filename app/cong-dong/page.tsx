'use client'
import React, { useRef, useState } from "react";
import Image from "next/image";
import { dataSukien, dataTaiTro, sliderOrganizations } from "@/utils/contanst";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

const sampleCourses = [
  {
    id: "23123",
    title: "Các tổ chức hỗ trợ người khiếm thính",
    imageUrl: "/image/sllider-home/item-1.jpg",
    link: '/cong-dong'
  },
  {
    id: "212441s",
    title: "Phương pháp giáo dục đặc biệt cho người khiếm thính",
    imageUrl: "/image/sllider-home/item-2.png",
    link: '/giao-duc/giao-duc-dac-biet'
  },
  {
    id: "312as",
    title: "Công việc phù hợp với người khiếm thính",
    imageUrl: "/image/sllider-home/item-3.jpg",
    link: '/nghe-nghiep'
  },
  {
    id: "412asca2",
    title: "Các chương trình tài trợ",
    imageUrl: "/image/sllider-home/item-4.jpg",
    link: '/cong-dong/hoat-dong'
  },
]

const page = () => {
  const [play, setPlay] =useState(true)
  const sliderRef = useRef<Slider>(null) //
  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const carouselSettings_1 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: play,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="w-full">
      <section className="w-full h-[400px] md:h-[404px] mt-20 relative mx-auto">
        <div className="absolute inset-0 bg-[#3A63ED]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-0 text-white text-center mt-8">
          <div className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-family leading-[130%]">Sự liên kết với các tổ chức và cộng đồng là cần thiết trong việc tìm kiếm các trợ giúp</div>
        </div>
        <div className='absolute top-0 left-0 md:left-[-10px] z-50 w-[164px] md:scale-100 scale-50 origin-bottom-left'>
          <div className='absolute top-0  w-[164px] h-[150px] bg-[#89A1F4] z-10'>
            <div className='absolute bottom-0 left-0 w-[117px] h-[100px] bg-[#3A63ED] z-20' />
            <div className='absolute bottom-0 left-0 w-[117px] h-[50px] bg-[#FDE68A] z-30' />
            <div className='absolute bottom-0 right-0 w-[160px] h-[50px] bg-[#3A63ED] z-auto' />
          </div>
        </div>
        <div className='absolute bottom-0 right-0 md:right-[-10px] z-50 w-[164px] md:scale-100 scale-50 origin-bottom-right'>
          <div className='absolute bottom-0 right-0 w-[164px] h-[100px]  bg-[#89A1F4] z-10'>
            <div className='absolute top-0 right-0 w-[117px] h-[50px] bg-[#3A63ED] z-20' />
            <div className='absolute bottom-full right-0 w-[117px] h-[50px] bg-[#FDE68A] z-30' />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 pt-24 max-w-7xl">
        <div className="relative overflow-hidden  mb-[96px]">
          <Slider {...carouselSettings} ref={sliderRef} className='news-carousel  !w-full md:max-w-[1064px] mx-auto'>
            {sampleCourses.map(({ id, imageUrl, title, link }) => (
              <div key={id} className='px-3'>
                <Link href={link}>
                  <div className='group cursor-pointer relative group'>
                    <div className='relative h-[272px] w-full overflow-hidden rounded-lg'>
                      <div className="relative shadow-slide h-full">
                        <img src={imageUrl} className="h-full w-full" alt='' />
                      </div>
                      <div className="absolute bottom-[22px] left-[32px] flex items-end text-white max-w-[293px]">
                        <p className="font-normal text-lg line-clamp-1">{title}</p>
                        <img src='/icon/arrow.png' alt='' className="h-max group-hover:-right-5 transition-all relative" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
          <div className="absolute top-1/2 -translate-y-1/2 flex w-[90%] md:w-full justify-between items-center left-1/2 -translate-x-1/2 ">
            <button onClick={() => sliderRef.current?.slickPrev()}>
              <img src={'/image/sllider-home/prev.png'} className="" alt='' />
            </button>
            <button onClick={() => sliderRef.current?.slickNext()}>
              <img src={'/image/sllider-home/next.png'} className="" alt='' />
            </button>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-12 mt-24">Sự kiện</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataSukien.slice(0, 3).map((event, index) => (
            <Link href={`hoat-dong/su-kien/${event.slug}`} key={index}>
              <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer  hover:shadow-lg hover:shadow-[#2E4FBE] transition-shadow duration-300">
                <div className="relative h-64 bg-[#CFD1D4] rounded-2xl">
                  <Image
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-2xl mb-2 line-clamp-2">{event.title}</h3>
                  <p className="text-gray-600 text-base mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex flex-grow justify-between items-center">
                    <span className="text-gray-500 text-base basis-2/3">Ngày kết thúc: 14.05.25</span>
                    <button className="basis-1/3 bg-black text-white px-5 py-2 font-light rounded-md text-sm hover:bg-gray-800 transition-colors duration-300">
                      Tham gia
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-end mt-8">
          <Link href="/cong-dong/hoat-dong" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-lg border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
            Xem thêm <img src="/icon/arrow.png" alt="" />
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-12 mt-16">Chương trình hỗ trợ/tài trợ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataTaiTro.slice(0, 3).map((event, index) => (
            <Link href={`hoat-dong/tai-tro/${event.slug}`} key={index}>
              <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer   hover:shadow-lg hover:shadow-[#2E4FBE] transition-shadow duration-300">
                <div className="relative h-64 bg-[#CFD1D4] rounded-2xl">
                  <Image
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-2xl mb-2 line-clamp-2">{event.title}</h3>
                  <p className="text-gray-600 text-base mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex justify-between items-center flex-grow">
                    <span className="text-gray-500 text-base basis-2/3">Ngày kết thúc: 14.05.25</span>
                    <button className="basis-1/3 bg-black text-white px-5 py-2 font-light rounded-md text-sm hover:bg-gray-800 transition-colors duration-300">
                      Tham gia
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-end mt-8">
          <Link href="/cong-dong/hoat-dong" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-lg border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
            Xem thêm <img src="/icon/arrow.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="bg-[#111827] pb-24 pt-14 flex flex-col justify-center items-cente mt-24">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-2 mb-14">Tổ chức và Cộng đồng</h1>
          <Slider {...carouselSettings_1} ref={sliderRef} className='news-carousel  !w-full mx-auto'>
          {sliderOrganizations.map((item, index) => (
                <img src={item} key={index} alt="" className="object-contain max-w-[120px]" />
          ))}
        </Slider>
        <button className="text-white mt-14" onClick={() => setPlay(!play)}>1</button>
      </div>
    </div>
  );
};

export default page;
