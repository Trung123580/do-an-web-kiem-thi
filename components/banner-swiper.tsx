"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BoxColor from "./BoxColor"
import Button from "./Button"

const slides = [
  {
    id: 1,
    title: "Hỗ trợ giáo dục cho người khiếm thính",
    description: "Chúng tôi cung cấp các chương trình giáo dục đặc biệt cho người khiếm thính.",
    buttonText: "Tìm hiểu thêm",
    image: "/image/banner-1.png",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Đào tạo nghề nghiệp",
    description: "Các khóa học kỹ năng nghề nghiệp giúp tạo cơ hội việc làm bền vững.",
    buttonText: "Xem khóa học",
    image: "/image/banner-2.png",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Hòa nhập cộng đồng",
    description: "Các hoạt động xã hội giúp người khiếm thính hòa nhập tốt hơn với cộng đồng.",
    buttonText: "Tham gia ngay",
    image: "/image/banner-3.png",
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
    <div className="relative h-[300px] md:h-[400px] lg:h-[720px] xl:h-dvh">
      {/* Slides */}
      <div className="h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
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
                <p className="text-sm md:text-base lg:text-xl mb-4 md:mb-6 hidden sm:block">{slide.description}</p>
                <Button text={slide.buttonText} className={slide.color}/>
              </div>
            </div>
          </div>
        ))}
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
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <BoxColor />
    </div>
  )
}
