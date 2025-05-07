"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { boTuVung, dataSukien, dataVolunteer } from "@/utils/contanst";
import Slider from "react-slick";
type Params = Promise<{ "slug-botuvung": string[] }>;
export default async function page({ params }: { params: Params }) {
  const slug = (await params)["slug-botuvung"][0];
  const boTuVungDetail: any = boTuVung.find((item: any) => item.router === slug);
  console.log(boTuVungDetail);
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
    <div className="min-h-screen bg-gray-50 pt-24 pb-8 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F2F2F3] mb-8 h-auto md:h-[480px] rounded-2xl overflow-hidden">
          <div className="flex justify-evenly flex-col h-full p-6 md:p-8 lg:p-12">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">{boTuVungDetail?.title}</h1>
              <p className="text-base sm:text-xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl max-w-xl">{boTuVungDetail?.description}</p>
              <button className="bg-[#3A63ED] font-light text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base  hover:bg-[#2E4FBE]/80 transition-colors duration-300">Tải tài liệu</button>
            </div>
          </div>
          <div className="rounded-2xl h-[300px] md:h-full overflow-hidden">
            <Image src={boTuVungDetail?.src} alt="Education Banner" width={500} height={500} className="object-cover w-full h-full" priority />
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-4 mt-20">
          {boTuVungDetail?.items.map((item: any, index: number) => {
            return (
              <div key={index} className="" >
                <video
                  src={item.img}
                  className="object-cover rounded-2xl w-[305px] h-[305px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <h2 className="text-[32px] font-normal mt-2 text-center">{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
