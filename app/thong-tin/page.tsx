"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataNews, stories } from "@/utils/contanst";
import { FaArrowRight } from "react-icons/fa";

export default function Page() {
  const sliderRef = useRef<Slider>(null)
  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
  };

  return (
    <div className="min-h-screen pt-32 md:pb-16 pb-10 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Latest News Section */}
        <section className="mb-16">
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl md:text-[48px] font-bold'>Tin mới nhất</h2>
            <div className='flex items-center justify-center gap-1 *:cursor-pointer'>
              <img src='/image/home/Variant3.png' alt='Previous' className='cursor-pointer' onClick={() => sliderRef.current?.slickPrev()} />
              <img src='/image/home/Variant2.png' alt='Next' className='cursor-pointer' onClick={() => sliderRef.current?.slickNext()} />
            </div>
          </div>
          <div className="w-full">
            <Slider ref={sliderRef} {...carouselSettings} className="news-carousel -mx-3 w-full">
              {dataNews.map((news, index) => (
                <div key={index} className="px-3">
                  <Link href={`/thong-tin/tin-tuc/${news.slug}`}>
                    <div className="group cursor-pointer relative">
                      <div className="relative h-[370px] rounded-xl overflow-hidden">
                        <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
                        <div className="space-y-2 absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="font-semibold text-lg transition-colors line-clamp-2">{news.title}</h3>
                          <div className="flex gap-2">
                            {news.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-sm text-black px-3 py-1 bg-white rounded-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <div className="text-end mt-6">
            <Link href="/thong-tin/tin-tuc" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
              Xem thêm <img src="/icon/arrow.png" alt="" />
            </Link>
          </div>
        </section>
        <section className="md:mb-16 mb-0">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            {stories.map((story, index) => {
              if (index === 1) {
                return (
                  <div key={index} className="relative h-[305px] sm:w-[305px] w-full bg-[#CFD1D4] rounded-xl flex items-center justify-center">
                    <h2 className="text-5xl font-light text-center px-4">
                      MỖI
                      <br />
                      CÂU
                      <br />
                      CHUYỆN
                    </h2>
                  </div>
                );
              }
              if (index === 7) {
                return (
                  <div key={index} className="relative h-[305px] sm:w-[305px] w-full bg-[#CFD1D4] rounded-xl flex items-center justify-center">
                    <h2 className="text-5xl font-light text-center px-4">
                      LÀ MỘT
                      <br />
                      CẢM
                      <br />
                      HỨNG
                    </h2>
                  </div>
                );
              }
              if (typeof story === 'string') return null;
              return (
                <Link key={index} href={`/thong-tin/cau-chuyen/${story.slug}`}>
                  <div className="group cursor-pointer relative h-[305px] sm:w-[305px] w-full rounded-xl overflow-hidden">
                    <Image src={story.img} alt={story.title} width={305} height={305} className="object-cover w-full sm:w-[305px] h-full group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-medium text-sm line-clamp-2">{story.title}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-end mt-6">
            <Link href="/thong-tin/cau-chuyen" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
              Xem thêm <img src="/icon/arrow.png" alt="" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}