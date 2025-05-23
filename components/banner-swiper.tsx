"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BoxColor from "./BoxColor"
import Button from "./Button"
import BoxColor2 from "./BoxColor2"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Hỗ trợ giáo dục cho người khiếm thính",
    description: "Chúng tôi cung cấp các chương trình giáo dục đặc biệt cho người khiếm thính.",
    buttonText: "Xem thêm",
    image: "/image/banner-1.png",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Đào tạo nghề nghiệp",
    description: "Các khóa học kỹ năng nghề nghiệp giúp tạo cơ hội việc làm bền vững.",
    buttonText: "Xem thêm",
    image: "/image/banner-2.png",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Hòa nhập cộng đồng",
    description: "Các hoạt động xã hội giúp người khiếm thính hòa nhập tốt hơn với cộng đồng.",
    buttonText: "Xem thêm",
    image: "/image/banner-3.png",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Ngôn ngữ ký hiệu: Phương tiện giao tiếp",
    description: "Ngôn ngữ ký hiệu là một phương tiện giao tiếp quan trọng cho cộng đồng người kiếm thính trên toàn thế giới",
    buttonText: "Xem thêm",
    image: "/image/banner-5.png",
    color: "bg-purple-500",
  },
]

export default function BannerSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play when user interacts with controls
  const handleControlClick = (callback: () => void) => {
    setIsAutoPlaying(false)
    callback()
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <div className='relative h-dvh mt-16'>
      {/* Slides */}
      <div className='h-full relative text-white w-full'>
        <img src='/image/banner-23.jpg' className='h-full object-cover w-full' alt='' />
        <div className='absolute  z-1 top-[75%] md:top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 w-full flex flex-col justify-center items-center'>
          <h3 className='text-3xl md:text-5xl leading-[130%] font-bold font-Epiogue text-white text-center'>
            Trao nền tảng – Xây dựng tương lai <br /> bền vững cho người khiếm thính
          </h3>
          <p className='px-2 text-center font-normal text-sm md:text-base mt-[16px] mb-[32px]'>
            Foundation for Future (FFF) là một tổ chức xã hội hoạt động với sứ mệnh hỗ trợ thông tin về giáo dục và đào tạo hướng <br /> nghiệp cho người khiếm thính. Chúng tôi tin rằng mỗi người khiếm thính đều có tiềm năng để chủ động xây dựng
            tương lai <br /> của mình, khi được trao cơ hội tiếp cận đúng đắn và công bằng.
          </p>
          <Link href='/ve-chung-toi' className='bg-[#3A63ED] text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors'>
            Về chúng tôi
          </Link>
          <div className='max-w-7xl mx-auto relative w-[95%] md:w-full -bottom-[20px] md:-bottom-[310px] text-black h-auto md:h-[198px] bg-[#F2F2F3] rounded-2xl shadow-box-banner'>
          <div className='w-full shadow-box-banner2 h-full rounded-2xl md:gap-0 gap-5 flex md:flex-row flex-col items-center justify-center py-[42px] px-[80px]'>
            <div>
              <h3 className="text-[#3A63ED] text-4xl md:text-5xl font-bold text-center">5%</h3>
              <p className="text-center text-sm md:text-base font-normal text-[#111827]">Hơn 5% dân số thế giới cần khắc phục tình trạng mất thính lực</p>
            </div>
            <div className="w-[1px] h-full bg-[#CFD1D4] mx-[84px]"></div>
            <div>
              <h3 className="text-[#3A63ED] text-4xl md:text-5xl font-bold text-center">1200</h3>
              <p className="text-center text-sm md:text-base font-normal text-[#111827]">Hàng năm có từ 1.200 - 1.400 trẻ khiếm thính ra đời tại Việt Nam.</p>
            </div>
            <div className="w-[1px] h-full bg-[#CFD1D4] mx-[84px]"></div>
            <div>
              <h3 className="text-[#3A63ED] text-4xl md:text-5xl font-bold text-center">2,5 triệu</h3>
              <p className="text-center text-sm md:text-base font-normal text-[#111827]">Cả nước có khoảng 2,5 triệu người khuyết tật nghe nói.</p>
            </div>
          </div>
        </div>
        </div>
        {/* <div className='max-w-7xl mx-auto absolute w-[95%] md:w-full left-1/2 -translate-x-1/2 -bottom-[350px] md:-bottom-[99px] text-black h-auto md:h-[198px] bg-[#F2F2F3] rounded-2xl shadow-box-banner'>
          <div className='w-full shadow-box-banner2 h-full rounded-2xl md:gap-0 gap-5 flex md:flex-row flex-col items-center justify-center py-[42px] px-[80px]'>
            <div>
              <h3 className="text-[#3A63ED] text-5xl font-bold text-center">5%</h3>
              <p className="text-center text-base font-normal text-[#111827]">Hơn 5% dân số thế giới cần khắc phục tình trạng mất thính lực</p>
            </div>
            <div className="w-[1px] h-full bg-[#CFD1D4] mx-[84px]"></div>
            <div>
              <h3 className="text-[#3A63ED] text-5xl font-bold text-center">1200</h3>
              <p className="text-center text-base font-normal text-[#111827]">Hàng năm có từ 1.200 - 1.400 trẻ khiếm thính ra đời tại Việt Nam.</p>
            </div>
            <div className="w-[1px] h-full bg-[#CFD1D4] mx-[84px]"></div>
            <div>
              <h3 className="text-[#3A63ED] text-5xl font-bold text-center">2,5 triệu</h3>
              <p className="text-center text-base font-normal text-[#111827]">Cả nước có khoảng 2,5 triệu người khuyết tật nghe nói.</p>
            </div>
          </div>
        </div> */}
        {/* <BoxColor /> */}
        {/* <BoxColor2 /> */}
        {/* {slides.map((slide, index) => (
          <div
            key={index + '12390x2'}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="max-w-4xl text-white absolute left-9 bottom-10  p-4 text-2xl sm:left-11 sm:bottom-6 md:bottom-14 lg:bottom-28 md:left-16 lg:left-24">
                <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-2 md:mb-4">{slide.title}</h2>
                <p className="text-[18px] mb-4 md:mb-6 hidden sm:block">{slide.description}</p>
                <Button text={slide.buttonText} className="bg-[#3A63ED] text-[18px]"/>
              </div>
            </div>
          </div>
        ))} */}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={() => handleControlClick(prevSlide)}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 p-1 md:p-2 rounded-full text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>
      <button
        onClick={() => handleControlClick(nextSlide)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 p-1 md:p-2 rounded-full text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button> */}

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index + '12312'}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}
