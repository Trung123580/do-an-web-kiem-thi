'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { stories_1 } from '@/utils/contanst';

const page = () => {
    const [storiesData, setStoriesData] = useState(stories_1);
    console.log(storiesData)
    const [sortState, setSortState] = useState<"latest" | "oldest" | "">("");
    const [gridState, setgridState] = useState<2 | 4>(4);
    const shortStories = (type: "latest" | "oldest") => {
        if (type === "latest") {
            const latestStories = storiesData.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setStoriesData(latestStories);
        } else {
            const oldestStories = storiesData.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            setStoriesData(oldestStories);
        }
        setSortState(type);
    }
    return (
        <div className="min-h-screen pt-16 pb-16">
            <section className="relative overflow-hidden w-full h-[113px] sm:h-[276px] md:h-[329px] lg:h-[437px] xl:h-[500px] 2xl:h-[500px]">
                <video
                    src="/VideoBannerCauChuyen.mp4"
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
            <div className='container mx-auto px-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-7xl'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2'>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold'>Câu chuyện nổi bật</h1>
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Tìm kiếm câu chuyện"
                            className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex justify-end items-center mb-2 gap-2">
                    <div className="flex items-center gap-2 my-2">
                        <button className="flex items-center hover:bg-[#70747D]/10 text-[#70747D] gap-2 px-4 py-2 rounded-lg" onClick={() => { shortStories(sortState === 'latest' ? 'oldest' : 'latest') }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10L8 14L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 6L8 2L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {sortState === 'latest' ? 'Nổi bật' : 'Mới nhất'}
                        </button>
                    </div>
                    <button className=" hover:bg-[#70747D]/10 rounded-lg text-[#70747D]" onClick={() => { setgridState(gridState === 4 ? 2 : 4) }}>
                        {gridState === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M13 19C12.45 19 11.9792 18.8042 11.5875 18.4125C11.1958 18.0208 11 17.55 11 17V13C11 12.45 11.1958 11.9792 11.5875 11.5875C11.9792 11.1958 12.45 11 13 11H27C27.55 11 28.0208 11.1958 28.4125 11.5875C28.8042 11.9792 29 12.45 29 13V17C29 17.55 28.8042 18.0208 28.4125 18.4125C28.0208 18.8042 27.55 19 27 19H13ZM13 17H27V13H13V17ZM13 29C12.45 29 11.9792 28.8042 11.5875 28.4125C11.1958 28.0208 11 27.55 11 27V23C11 22.45 11.1958 21.9792 11.5875 21.5875C11.9792 21.1958 12.45 21 13 21H27C27.55 21 28.0208 21.1958 28.4125 21.5875C28.8042 21.9792 29 22.45 29 23V27C29 27.55 28.8042 28.0208 28.4125 28.4125C28.0208 28.8042 27.55 29 27 29H13ZM13 27H27V23H13V27Z" fill="#70747D" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M13 19C12.45 19 11.9792 18.8042 11.5875 18.4125C11.1958 18.0208 11 17.55 11 17V13C11 12.45 11.1958 11.9792 11.5875 11.5875C11.9792 11.1958 12.45 11 13 11H17C17.55 11 18.0208 11.1958 18.4125 11.5875C18.8042 11.9792 19 12.45 19 13V17C19 17.55 18.8042 18.0208 18.4125 18.4125C18.0208 18.8042 17.55 19 17 19H13ZM13 29C12.45 29 11.9792 28.8042 11.5875 28.4125C11.1958 28.0208 11 27.55 11 27V23C11 22.45 11.1958 21.9792 11.5875 21.5875C11.9792 21.1958 12.45 21 13 21H17C17.55 21 18.0208 21.1958 18.4125 21.5875C18.8042 21.9792 19 22.45 19 23V27C19 27.55 18.8042 28.0208 18.4125 28.4125C18.0208 28.8042 17.55 29 17 29H13ZM23 19C22.45 19 21.9792 18.8042 21.5875 18.4125C21.1958 18.0208 21 17.55 21 17V13C21 12.45 21.1958 11.9792 21.5875 11.5875C21.9792 11.1958 22.45 11 23 11H27C27.55 11 28.0208 11.1958 28.4125 11.5875C28.8042 11.9792 29 12.45 29 13V17C29 17.55 28.8042 18.0208 28.4125 18.4125C28.0208 18.8042 27.55 19 27 19H23ZM23 29C22.45 29 21.9792 28.8042 21.5875 28.4125C21.1958 28.0208 21 27.55 21 27V23C21 22.45 21.1958 21.9792 21.5875 21.5875C21.9792 21.1958 22.45 21 23 21H27C27.55 21 28.0208 21.1958 28.4125 21.5875C28.8042 21.9792 29 22.45 29 23V27C29 27.55 28.8042 28.0208 28.4125 28.4125C28.0208 28.8042 27.55 29 27 29H23ZM13 17H17V13H13V17ZM23 17H27V13H23V17ZM23 27H27V23H23V27ZM13 27H17V23H13V27Z" fill="#70747D" />
                        </svg>}
                    </button>
                </div>
                <section className="mb-16">
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridState} gap-5`}>
                        {storiesData.map((story, index) => {
                            return (
                                <Link key={index} href={`/thong-tin/cau-chuyen/${story.slug}`}>
                                    <div className={`group cursor-pointer relative  ${gridState === 4 ? 'h-[305px]' : 'h-[391px]'} rounded-xl overflow-hidden`}>
                                        <img src={story.img} alt={story.title} height={gridState === 4 ? 305 : 391} className="object-cover w-full !h-full group-hover:scale-115 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white group-hover:bg-[#3A63ED] group-hover:blur-2xl scale-125 h-16"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white ">
                                            <h3 className="font-medium text-lg line-clamp-2">{story.title}</h3>
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