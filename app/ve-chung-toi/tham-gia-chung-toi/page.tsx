"use client"
import React, { useRef, useState } from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"
import ModalPartner from "@/components/ModalPartner"
import { dataJob, dataVolunteer } from "@/utils/contanst"

export default function JoinUsPage() {
  const sliderRef = useRef<Slider>(null) //
  const sliderRef2 = useRef<Slider>(null) //
  const [isOpen, setIsOpen] = useState(false)
  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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

  const volunteerCarouselSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='min-h-screen pt-20'>
      <section className='relative w-full h-[200px] md:h-[720px]'>
        <div className='absolute inset-0 bg-gradient-to-r from-black/40 z-10 to-transparent' />
        <Image src='/image/banner-3.png' alt='Trẻ em khiếm thính vui chơi' fill className='object-cover ' />
        <div className='absolute z-20 bottom-0 left-1/2 -translate-x-1/2 right-0 p-8 md:p-20 md:pl-0 text-white max-w-7xl w-full'>
          <p className='text-xl md:text-5xl font-bold -tracking-tight leading-relaxed'>Cùng chúng tôi tạo nên tương lai tươi đẹp cho cộng đồng người khiếm thính</p>
        </div>
      </section>
      <div className='bg-[#4263EB] mx-auto px-4 text-center w-[80%] rounded-2xl  max-w-7xl py-4 md:py-16 mt-[96px]'>
        <h2 className='text-3xl font-bold text-white mb-4'>Trở thành một phần của chúng tôi</h2>
        <p className='text-white/90 max-w-2xl mx-auto mb-8'>Góp phần hỗ trợ người khiếm thính cùng cách thú vị như thiết kế, đào tạo, tổ chức sự kiện và nhiều lĩnh thực hấp tấc khác...</p>
        <button onClick={() => setIsOpen(true)} className='bg-black text-white px-[56px] py-3 rounded-lg hover:bg-[#70747D] transition-colors'>
          Tham gia cùng chúng tôi
        </button>
      </div>
      <div className='container mx-auto px-4 max-w-7xl mt-[96px]'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-3xl md:text-[48px] font-bold'>Công việc</h2>
          <div className='flex items-center justify-center gap-1 *:cursor-pointer'>
            {/* <img src='/image/home/Variant2.png' alt='Next' className='cursor-pointer hover:opacity-50' /> */}
            <svg onClick={() => sliderRef.current?.slickNext()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="" className="rounded-sm">
            <rect width="40" height="40" transform="translate(24) rotate(90)" fill="" className="fill-white hover:fill-[#F0F1F2]"/>
            <path d="M9.02495 11.9998C9.02495 11.8665 9.04578 11.7415 9.08745 11.6248C9.12912 11.5081 9.19995 11.3998 9.29995 11.2998L13.9 6.6998C14.0833 6.51647 14.3166 6.4248 14.6 6.4248C14.8833 6.4248 15.1166 6.51647 15.3 6.6998C15.4833 6.88314 15.575 7.11647 15.575 7.3998C15.575 7.68314 15.4833 7.91647 15.3 8.0998L11.4 11.9998L15.3 15.8998C15.4833 16.0831 15.575 16.3165 15.575 16.5998C15.575 16.8831 15.4833 17.1165 15.3 17.2998C15.1166 17.4831 14.8833 17.5748 14.6 17.5748C14.3166 17.5748 14.0833 17.4831 13.9 17.2998L9.29995 12.6998C9.19995 12.5998 9.12912 12.4915 9.08745 12.3748C9.04578 12.2581 9.02495 12.1331 9.02495 11.9998Z" fill="#111827"/>
            </svg>

            <svg  onClick={() => sliderRef.current?.slickPrev()} className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
            <rect width="40" height="40" transform="translate(24) rotate(90)" className="fill-white hover:fill-[#F0F1F2]"/>
            <path d="M9.02495 11.9998C9.02495 11.8665 9.04578 11.7415 9.08745 11.6248C9.12912 11.5081 9.19995 11.3998 9.29995 11.2998L13.9 6.6998C14.0833 6.51647 14.3166 6.4248 14.6 6.4248C14.8833 6.4248 15.1166 6.51647 15.3 6.6998C15.4833 6.88314 15.575 7.11647 15.575 7.3998C15.575 7.68314 15.4833 7.91647 15.3 8.0998L11.4 11.9998L15.3 15.8998C15.4833 16.0831 15.575 16.3165 15.575 16.5998C15.575 16.8831 15.4833 17.1165 15.3 17.2998C15.1166 17.4831 14.8833 17.5748 14.6 17.5748C14.3166 17.5748 14.0833 17.4831 13.9 17.2998L9.29995 12.6998C9.19995 12.5998 9.12912 12.4915 9.08745 12.3748C9.04578 12.2581 9.02495 12.1331 9.02495 11.9998Z" fill="#111827"/>
            </svg>
          </div>
        </div>
        <Slider ref={sliderRef} {...carouselSettings} className='job-carousel -mx-3'>
          {dataJob.map((item, index) => (
            <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/job/${item.slug}`} className='px-3 h-full'>
              <div className='bg-[#F2F2F3] rounded-2xl h-full hover:bg-[#D8E0FB]'>
                <div className=''>
                  <Image src={item.img} alt='' width={200} height={150} className='w-full' />
                </div>
                <div className='pt-[27px] pb-[25px] px-6'>
                  <h3 className='font-semibold text-lg mb-2'>{item.titleDes}</h3>
                  <p className='text-sm text-gray-700'>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>

        <style jsx global>{`
          .job-carousel .slick-track {
            display: flex !important;
          }
          .job-carousel .slick-slide {
            height: inherit !important;
          }
          .job-carousel .slick-slide > div {
            height: 100%;
          }
        `}</style>
      </div>
      <div className='my-[96px] max-w-7xl mx-auto'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-3xl md:text-[48px] font-bold'>Tham gia tình nguyện</h2>
            <div className='flex items-center justify-center gap-1 *:cursor-pointer'>
              <img src='/image/home/Variant3.png' alt='Previous' className='cursor-pointer hover:opacity-50' onClick={() => sliderRef2.current?.slickPrev()} />
              <img src='/image/home/Variant2.png' alt='Next' className='cursor-pointer hover:opacity-50' onClick={() => sliderRef2.current?.slickNext()} />
            </div>
          </div>
          <Slider ref={sliderRef2} {...volunteerCarouselSettings} className='volunteer-carousel -mx-3'>
            {dataVolunteer.map((item, index) => {
              return (
                <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/volunteer/${item.slug}`} className='px-3 h-full'>
                  <div className='bg-[#F2F2F3] overflow-hidden rounded-2xl hover:bg-[#89A1F4]  h-full group relative'>
                    {/* shadow-lg */}
                    <div className='relative h-60 group-hover:h-40 transition-all duration-300'>
                      <Image src={item.img} alt={item.title} fill className='object-cover rounded-2xl' />
                    </div>
                    <div className='px-6 pt-[25px] pb-[5px] group-hover:pb-[32px]'>
                       {/* group-hover:pb-[100px] */}
                      <p className='text-[#111827] font-medium text-lg mb-4'>{item.title}</p>
                      <p className='text-[#111827] font-medium text-sm absolute left-0 right-0 p-6 pt-0 translate-y-full group-hover:translate-y-0 transition-all duration-300'>{item.sortDesc}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </Slider>
          <style jsx global>{`
            .volunteer-carousel .slick-track {
              display: flex !important;
              padding: 1rem 0;
            }
            .volunteer-carousel .slick-slide {
              height: inherit !important;
              margin-bottom: 1rem;
            }
            .volunteer-carousel .slick-slide > div {
              height: 100%;
            }
          `}</style>
        </div>
      </div>
      <ModalPartner isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  )
}
