'use client'
import { dataNews } from "@/utils/contanst";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import React, { useRef } from "react";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function LatestNews() {
  const sliderRef = useRef<Slider>(null); //
  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: false, // Change to false so items don't loop and are not hidden
    speed: 500,
    slidesToShow: 2.5, // Show 2.5 items
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay to avoid skipping items
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
  };

  return (
    <section className='max-w-7xl mx-auto px-[32px] md:px-0 py-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-3xl md:text-[48px] font-bold'>Tin mới nhất</h2>
        <div className="flex items-center justify-center gap-1 *:cursor-pointer">
        <img
            src="/image/home/Variant3.png"
            alt="Previous"
            className="cursor-pointer"
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <img
            src="/image/home/Variant2.png"
            alt="Next"
            className="cursor-pointer"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
      {/* Scrollable list */}
      <div className="relative overflow-visible">
        <Slider  ref={sliderRef}  {...carouselSettings} className="news-carousel -mx-3 w-full">
        {dataNews.map((news, index) => (
          <div key={index} className="px-3" style={{ width: 545 }}>
            <Link href={`/thong-tin/tin-tuc/${news.slug}`}>
              <div className="group cursor-pointer relative">
                <div className="relative h-[197px] md:h-[340px] rounded-xl overflow-hidden">
                  <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-125 transition-transform duration-700 w-full" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
                  <div className="space-y-2 absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <h3 className="font-normal text-2xl transition-colors line-clamp-2">{news.title}</h3>
                    <div className="flex gap-2">
                      {news.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-sm text-black px-3 py-1 bg-white rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-b-xl absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(181deg,rgba(42,123,155,0)_0%,#4177efd6_50%,#4177efd6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>
            </Link>
          </div>
        ))}
      </Slider>
      </div>
      
      <div className="flex justify-end mt-6">
        <Link href='/thong-tin/tin-tuc'  className={`flex items-center px-7 py-2 text-sm  border-2 border-transparent md:border-[#CFD1D4] text-[#414652] rounded-lg hover:bg-gray-100 transition`}>
          Xem thêm 
          <img src="/icon/arrow.png" alt="" className="md:block hidden" />
        </Link>
      </div>
    </section>
  )
}
