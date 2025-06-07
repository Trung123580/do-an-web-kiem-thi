"use client"
import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { dataNews, stories } from "@/utils/contanst"
import StoryGrid from "@/components/StoryGrid"

export default function Page() {
  const sliderRef = useRef<Slider>(null)
  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: false, // Change to false so items don't loop and are not hidden
    speed: 500,
    slidesToShow: 2, // Show 2.5 items
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
  }

  return (
    <div className='min-h-screen pt-32 md:pb-16 pb-10 max-w-7xl mx-auto'>
      {/* Latest News Section */}
      <section className='max-w-7xl mx-auto px-[32px] md:px-0 py-8'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-3xl md:text-[48px] font-bold'>Tin mới nhất</h2>
          <div className='flex items-center justify-center gap-1 *:cursor-pointer'>
            {/* <img src='/image/home/Variant3.png' alt='Previous' className='cursor-pointer' onClick={() => sliderRef.current?.slickPrev()} /> */}
            {/* <img src='/image/home/Variant2.png' alt='Next' className='cursor-pointer' onClick={() => sliderRef.current?.slickNext()} /> */}
            <svg
              onClick={() => sliderRef.current?.slickNext()}
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill=''
              className='rounded-sm'>
              <rect
                width='40'
                height='40'
                transform='translate(24) rotate(90)'
                fill=''
                className='fill-white hover:fill-[#F0F1F2]'
              />
              <path
                d='M9.02495 11.9998C9.02495 11.8665 9.04578 11.7415 9.08745 11.6248C9.12912 11.5081 9.19995 11.3998 9.29995 11.2998L13.9 6.6998C14.0833 6.51647 14.3166 6.4248 14.6 6.4248C14.8833 6.4248 15.1166 6.51647 15.3 6.6998C15.4833 6.88314 15.575 7.11647 15.575 7.3998C15.575 7.68314 15.4833 7.91647 15.3 8.0998L11.4 11.9998L15.3 15.8998C15.4833 16.0831 15.575 16.3165 15.575 16.5998C15.575 16.8831 15.4833 17.1165 15.3 17.2998C15.1166 17.4831 14.8833 17.5748 14.6 17.5748C14.3166 17.5748 14.0833 17.4831 13.9 17.2998L9.29995 12.6998C9.19995 12.5998 9.12912 12.4915 9.08745 12.3748C9.04578 12.2581 9.02495 12.1331 9.02495 11.9998Z'
                fill='#111827'
              />
            </svg>

            <svg
              onClick={() => sliderRef.current?.slickPrev()}
              className='rotate-180'
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'>
              <rect
                width='40'
                height='40'
                transform='translate(24) rotate(90)'
                className='fill-white hover:fill-[#F0F1F2]'
              />
              <path
                d='M9.02495 11.9998C9.02495 11.8665 9.04578 11.7415 9.08745 11.6248C9.12912 11.5081 9.19995 11.3998 9.29995 11.2998L13.9 6.6998C14.0833 6.51647 14.3166 6.4248 14.6 6.4248C14.8833 6.4248 15.1166 6.51647 15.3 6.6998C15.4833 6.88314 15.575 7.11647 15.575 7.3998C15.575 7.68314 15.4833 7.91647 15.3 8.0998L11.4 11.9998L15.3 15.8998C15.4833 16.0831 15.575 16.3165 15.575 16.5998C15.575 16.8831 15.4833 17.1165 15.3 17.2998C15.1166 17.4831 14.8833 17.5748 14.6 17.5748C14.3166 17.5748 14.0833 17.4831 13.9 17.2998L9.29995 12.6998C9.19995 12.5998 9.12912 12.4915 9.08745 12.3748C9.04578 12.2581 9.02495 12.1331 9.02495 11.9998Z'
                fill='#111827'
              />
            </svg>
          </div>
        </div>
        {/* Scrollable list */}
        <div className='relative overflow-visible'>
          <Slider
            ref={sliderRef}
            {...carouselSettings}
            className='news-carousel mx-1 md:-mx-3 w-full'>
            {dataNews.map((news, index) => (
              <div key={index} className=' md:px-3 pr-3 h-full' style={{ width: 545 }}>
                <Link href={`/thong-tin/tin-tuc/${news.slug}`} className='h-full'>
                  <div className='group cursor-pointer relative h-full'>
                    <div className='relative h-[240px] md:h-[340px] rounded-xl overflow-hidden'>
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className=' object-cover group-hover:scale-125 transition-transform duration-700 w-full'
                      />
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70'></div>
                      <div className='space-y-2 absolute bottom-0 left-0 right-0 p-6 text-white z-10'>
                        <h3 className='font-normal text-2xl transition-colors line-clamp-2'>
                          {news.title}
                        </h3>
                        <div className='flex gap-2'>
                          {news.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className='text-sm text-black px-3 py-1 bg-white rounded-sm'>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='rounded-b-xl absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(181deg,rgba(42,123,155,0)_0%,#4177efd6_50%,#4177efd6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className='flex justify-end mt-6 gap-2'>
          <Link
            href='/thong-tin/tin-tuc'
            className={`flex items-center gap-2 px-7 py-2 text-sm  border-2 border-transparent md:border-[#CFD1D4] text-[#414652] rounded-lg hover:bg-gray-100 transition`}>
            Xem thêm
            <img src='/icon/arrow.png' alt='' className='md:block hidden' />
          </Link>
        </div>
      </section>
      {/* <section className='md:mb-16 mb-0'>
        <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4'>
          {stories.map((story, index) => {
            if (index === 1) {
              return (
                <div
                  key={index}
                  className='relative h-[305px] sm:w-[305px] w-full bg-[#CFD1D4] rounded-xl flex items-center justify-center'>
                  <h2 className='text-5xl font-light text-center px-4'>
                    MỖI
                    <br />
                    CÂU
                    <br />
                    CHUYỆN
                  </h2>
                </div>
              )
            }
            if (index === 7) {
              return (
                <div
                  key={index}
                  className='relative h-[305px] sm:w-[305px] w-full bg-[#CFD1D4] rounded-xl flex items-center justify-center'>
                  <h2 className='text-5xl font-light text-center px-4'>
                    LÀ MỘT
                    <br />
                    CẢM
                    <br />
                    HỨNG
                  </h2>
                </div>
              )
            }
            if (typeof story === "string") return null
            return (
              <Link key={index} href={`/thong-tin/cau-chuyen/${story.slug}`}>
                <div className='group cursor-pointer relative h-[305px] sm:w-[305px] w-full rounded-xl overflow-hidden'>
                  <Image
                    src={story.img}
                    alt={story.title}
                    width={305}
                    height={305}
                    className='object-cover w-full sm:w-[305px] h-full group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                    <h3 className='font-medium text-sm line-clamp-2'>{story.title}</h3>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className='text-end mt-6'>
          <Link
            href='/thong-tin/cau-chuyen'
            className='gap-2 inline-flex items-center px-6 py-3 text-base font-normal border-2 border-[#CFD1D4] text-[#414652] rounded-lg hover:bg-gray-100 transition'>
            Xem thêm <img src='/icon/arrow.png' alt='' />
          </Link>
        </div>
      </section> */}
      <StoryGrid />
      
    </div>
  )
}
