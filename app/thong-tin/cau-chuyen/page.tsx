import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { stories } from '@/utils/contanst';

const page = () => {
    return (
        <div className="min-h-screen">
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[720px]">
                <video
                    src="/image/bannerVideo.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-16 text-white">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold -tracking-tight leading-relaxed">Ước tính có khoảng 1,2 triệu người khiếm thính tại Việt Nam</h1>
                    <p className="text-sm sm:text-base md:text-lg -tracking-tight leading-relaxed mt-2">Con số này phản ánh nhu cầu cấp thiết về sự hỗ trợ, đồng cảm và mỗi con số ẩn chứa cả một câu chuyện sống đầy thử thách.</p>
                </div>
            </section>
            <div className='container mx-auto px-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Câu chuyện nổi bật</h1>
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Học ngôn ngữ ký hiệu"
                            className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex justify-end items-center mb-6 gap-4">
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10L8 14L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 6L8 2L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Mới nhất
                        </button>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H10V10H3V3ZM14 3H21V10H14V3ZM3 14H10V21H3V14ZM14 14H21V21H14V14Z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                    </button>
                </div>

                <section className="mb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {stories.map((story, index) => {
                            if (index === 1) {
                                return <></>
                            }
                            if (index === 7) {
                                return <></>
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
    )
}

export default page