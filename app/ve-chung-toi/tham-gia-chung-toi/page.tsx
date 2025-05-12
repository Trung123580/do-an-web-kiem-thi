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
    infinite: true,
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
    infinite: true,
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
    <div className='min-h-screen'>
      <section className='relative w-full h-[200px] md:h-[720px]'>
        <Image src='/image/banner-3.png' alt='Trẻ em khiếm thính vui chơi' fill className='object-cover' />
        <div className='absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white'>
          <p className='text-xl md:text-5xl font-bold -tracking-tight leading-relaxed'>Cùng chúng tôi tạo nên tương lai tươi đẹp cho cộng đồng người khiếm thính</p>
        </div>
      </section>
      <div className='container mx-auto px-4 py-16'></div>
      <div className='bg-[#4263EB] mx-auto px-4 py-16 text-center w-[80%] rounded-2xl  max-w-7xl'>
        <h2 className='text-3xl font-bold text-white mb-4'>Trở thành một phần của chúng tôi</h2>
        <p className='text-white/90 max-w-2xl mx-auto mb-8'>Góp phần hỗ trợ người khiếm thính cùng cách thú vị như thiết kế, đào tạo, tổ chức sự kiện và nhiều lĩnh thực hấp tấc khác...</p>
        <button onClick={() => setIsOpen(true)} className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors'>
          Tham gia cùng chúng tôi
        </button>
      </div>
      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-3xl md:text-[48px] font-bold'>Công việc</h2>
          <div className='flex items-center justify-center gap-1 *:cursor-pointer'>
            <img src='/image/home/Variant3.png' alt='Previous' className='cursor-pointer' onClick={() => sliderRef.current?.slickPrev()} />
            <img src='/image/home/Variant2.png' alt='Next' className='cursor-pointer' onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>
        <Slider ref={sliderRef} {...carouselSettings} className='job-carousel -mx-3'>
          {dataJob.map((item, index) => (
            <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/job/${item.slug}`} className='px-3 h-full'>
              <div className='bg-[#F2F2F3] rounded-xl h-full'>
                <div className='mb-4'>
                  <Image src={item.img} alt='' width={200} height={150} className='w-full' />
                </div>
                <div className='p-4'>
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
      <div className=' py-16 max-w-7xl mx-auto'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-3xl md:text-[48px] font-bold'>Tham gia tình nguyện</h2>
            <div className='flex items-center justify-center gap-1 *:cursor-pointer'>
              <img src='/image/home/Variant3.png' alt='Previous' className='cursor-pointer' onClick={() => sliderRef2.current?.slickPrev()} />
              <img src='/image/home/Variant2.png' alt='Next' className='cursor-pointer' onClick={() => sliderRef2.current?.slickNext()} />
            </div>
          </div>
          <Slider ref={sliderRef2} {...volunteerCarouselSettings} className='volunteer-carousel -mx-3'>
            {dataVolunteer.map((item, index) => {
              return (
                <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/volunteer/${item.slug}`} className='px-3 h-full'>
                  <div className='bg-[#F2F2F3] overflow-hidden rounded-2xl hover:bg-[#3A63ED]/50 shadow-lg h-full group relative'>
                    <div className='relative h-60 group-hover:h-40 transition-all duration-300'>
                      <Image src={item.img} alt={item.title} fill className='object-cover rounded-2xl' />
                    </div>
                    <div className='px-6 pt-4 pb-6'>
                      <p className='text-gray-600 font-medium text-lg mb-4'>{item.title}</p>
                      <p className='text-gray-600 font-medium text-sm absolute left-0 right-0 p-4 pt-0 translate-y-full group-hover:translate-y-0 transition-all duration-300'>{item.sortDesc}</p>
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
