"use client"
import BannerSwiper from "@/components/banner-swiper"
import BoxColor2 from "@/components/BoxColor2"
import Button from "@/components/Button"
import Donate from "@/components/Donate"
import LatestNews from "@/components/LatestNews"
import StoryGrid from "@/components/StoryGrid"
import VietnamStatsMap from "@/components/vietnam-stats-map.tsx"
import Link from "next/link"
import CourseGrid from "./components/CourseGrid"
import Slider from "react-slick"
import { dataNews } from "@/utils/contanst"
import Image from "next/image"
import { useRef } from "react"

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

export default function Home() {
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
  
  return (
    <div>
      <BannerSwiper />
     <div className="relative overflow-hidden mt-[96px]">
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
                    <p className="font-normal text-lg">{title}</p>
                    <img src='/icon/arrow.png' alt='' className="h-max group-hover:-right-5 transition-all relative" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <div className="absolute top-1/2 -translate-y-1/2 flex w-[90%] md:w-[70%] justify-between items-center left-1/2 -translate-x-1/2 ">
        <button onClick={() => sliderRef.current?.slickPrev()}>
          <img src={'/image/sllider-home/prev.png'} className="" alt='' />
        </button>
        <button onClick={() => sliderRef.current?.slickNext()}>
          <img src={'/image/sllider-home/next.png'} className="" alt='' />
        </button>
      </div>
     </div>
      <section className='relative w-full'>
        <div className='max-w-[846px] mx-auto h-[540px] flex justify-center items-center flex-col gap-[30px]'>
          <h3 className='text-header font-bold text-5xl'>Hoạt động của chúng tôi</h3>
          <p className='text-description'>
            Foundation for Future cung cấp thông tin giáo dục và đào tạo hướng nghiệp trực tuyến, nhằm trang bị những kiến thức cơ bản và thiết yếu cho cộng đồng người khiếm thính. Qua đó, tổ chức hỗ trợ họ xây dựng nền tảng tự lập và phát triển bền
            vững trong cuộc sống.
          </p>
          <Link href={"/ve-chung-toi"} className='bg-[#111827] text-white !py-2 !px-8 md:!py-4 md:!px-14 rounded-[8px]'>
            Về chúng tôi
          </Link>
        </div>
      </section>
      <VietnamStatsMap />
      <StoryGrid />
      <LatestNews />
      <Donate />
    </div>
  )
}
