"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataNews, stories } from "@/utils/contanst";

export default function Page() {
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
    <div className="min-h-screen pt-32 pb-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Latest News Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold mb-8">Tin mới nhất</h2>
          <div className="w-full">
            <Slider {...carouselSettings} className="news-carousel -mx-3 w-full">
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
            <Link href="/thong-tin/cau-chuyen" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
              Xem thêm &rarr;
            </Link>
          </div>
        </section>
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stories.map((story, index) => {
              if (index === 1) {
                return (
                  <div key={index} className="relative h-[250px] bg-[#CFD1D4] rounded-xl flex items-center justify-center">
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
                  <div key={index} className="relative h-[250px] bg-[#CFD1D4] rounded-xl flex items-center justify-center">
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
                  <div className="group cursor-pointer relative h-[250px] rounded-xl overflow-hidden">
                    <Image src={story.img} alt={story.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-medium text-sm line-clamp-2">{story.title}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}