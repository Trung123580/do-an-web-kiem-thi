"use client"
import BannerSwiper from "@/components/banner-swiper"
import Donate from "@/components/Donate"
import LatestNews from "@/components/LatestNews"
import StoryGrid from "@/components/StoryGrid"
import Link from "next/link"
import Slider from "react-slick"
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
    const carouselSettings2 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 3,
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
      <div className='relative overflow-hidden px-[32px] mt-[250px] md:mb-[96px] md:mt-[195px]'>
        <Slider {...carouselSettings} ref={sliderRef} className='news-carousel md:!block !hidden !w-full md:max-w-[1064px] mx-auto'>
          {sampleCourses.map(({ id, imageUrl, title, link }) => (
            <div key={id} className='px-3'>
              <Link href={link}>
                <div className='group cursor-pointer relative group'>
                  <div className='relative h-[200px] md:h-[272px] w-full overflow-hidden rounded-lg'>
                    <div className='relative shadow-slide h-full'>
                      <img src={imageUrl} className='h-full w-full object-cover' alt='' />
                    </div>
                    <div className='absolute bottom-[22px] left-[32px] flex items-end text-white w-full'>
                      <div className="grid grid-cols-3">
                        <p className='font-bold col-span-2 text-lg'>{title}</p>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='24px'
                          viewBox='0 -960 960 960'
                          width='24px'
                          className='min-w-[24px] col-span-1 w-[24px] max-[24px] h-max group-hover:-right-5 transition-all relative'
                          fill='white'>
                          <path d='M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <div className='flex absolute top-1/2 -translate-y-1/2 max-w-7xl w-screen justify-between items-center left-1/2 -translate-x-1/2 '>
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <img src={"/image/sllider-home/prev.png"} className='' alt='' />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <img src={"/image/sllider-home/next.png"} className='' alt='' />
          </button>
        </div>
      </div>
      <h3 className='md:hidden block font-bold text-2xl px-[32px] mb-2'>Nội dung nổi bật</h3>
      <Slider {...carouselSettings2} className='news-carousel md:!hidden !block !w-full md:max-w-[1064px] mx-auto overflow-hidden'>
        {sampleCourses.map(({ id, imageUrl, title, link }) => (
          <div key={id} className='px-2'>
            <Link href={link}>
              <div className='group cursor-pointer relative group'>
                <div className='relative h-[200px] md:h-[272px] w-full overflow-hidden rounded-lg'>
                  <div className='relative shadow-slide h-full'>
                    <img src={imageUrl} className='h-full w-full object-cover' alt='' />
                  </div>
                  <div className='absolute bottom-[12px] left-[12px] flex items-end text-white max-w-[293px]'>
                    <p className='font-normal text-xs'>{title}</p>
                    <img src='/icon/arrow.png' alt='' className='h-max group-hover:-right-5 transition-all relative' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      {/* <section className='relative w-full'>
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
      <VietnamStatsMap /> */}
      <StoryGrid />
      <LatestNews />
      <Donate />
    </div>
  )
}
