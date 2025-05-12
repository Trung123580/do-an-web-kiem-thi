'use client'
import { khoaHocTrucTuyen } from '@/utils/contanst'
import React, { useState } from 'react'
import CustomVideo from './CustomVideo'
import Link from 'next/link';
const transcripts2 = [
    { time: '00:00', text: 'Tiếp theo là Câu mẫu giao tiếp.' },
    { time: '00:04', text: 'Tôi tên là Thủy.' },
    { time: '00:12', text: 'Tên ký hiệu khuôn mặt của tôi là' },
    { time: '00:16', text: 'Bạn tên là gì?' },
    { time: '00:20', text: 'Tên ký hiệu khuôn mặt của bạn là gì?' },
    { time: '00:27', text: 'Tôi đến từ Việt Nam.' },
    { time: '00:33', text: 'Rất vui được gặp bạn.' },
    { time: '00:40', text: 'Bạn đã làm rất tốt, hẹn gặp lại ở những bài tiếp theo nhé' },
];
const transcripts1 = [
    { time: '00:05', text: 'Xin chào!' },
    { time: '00:07', text: 'Hôm nay chúng ta sẽ học cách chào hỏi và giới thiệu bản thân bằng ngôn ngữ ký hiệu.' },
    { time: '00:17', text: 'Sau đây là mục từ vựng và ký hiệu.' },
    { time: '00:28', text: 'Xin chào. Tạm biệt. Cảm ơn. Xin lỗi. Tôi tên là. Bạn tên là. Vui. Gặp.' },
];
const toSeconds = (timeStr: string) => {
    const [minutes, seconds] = timeStr.split(":").map(Number);
    return minutes * 60 + seconds;
};
const Lesson = ({khoahocDetail}: any) => {
    const [linkVideo] = useState({
        link1: '/bai-giang/phan-1.mp4',
        link2: '/bai-giang/phan-2.mp4'
    })
    const [linkPlay, setLinkPlay] = useState(linkVideo.link1)
    const [active, setActive] = useState(0)
    const handleChangeLink = (key: string) => {
        setLinkPlay(key)
    }
    const [dataTrans, setDataTrans] = useState(transcripts1)
    const [time, setTime] = useState(dataTrans[0].time)
    // slots
    const handleChangeSlots = (timeVideo: any) => {
        setTime(timeVideo)
    }
    return (
        <div className='min-h-screen pb-16 py-16 pt-20 max-w-7xl mx-auto px-4'>
            <div className='container mx-auto'>
                <nav className='bg-white pb-6 pt-8 max-w-7xl mx-auto relative'>
                    <div className='mx-auto'>
                        <div className='flex items-center'>
                            <Link href='/giao-duc/ngon-ngu-ky-hieu' className='text-[#A0A3A9] hover:text-gray-900 line-clamp-1'>
                                Ngôn ngữ ký hiệu
                            </Link>
                            <span className='mx-2 text-2xl text-black'>&gt;</span>
                            <Link href={"/giao-duc/ngon-ngu-ky-hieu/khoa-hoc-ngoai-tuyen"} className='text-[#A0A3A9] line-clamp-1'>
                                Khóa học trực tuyến
                            </Link>
                            <span className='mx-2 text-2xl text-black'>&gt;</span>
                            <span className='text-[#3A63ED] line-clamp-1'>{khoahocDetail?.title}</span>
                        </div>
                    </div>
                </nav>
                <div className='flex flex-row'>
                    <div className='basis-1/4 pr-5 border-r-2 border-[#CFD1D4]'>
                        <h1 className='text-2xl font-bold leading-[130%] mb-4'>Nội dung khóa học</h1>
                        {khoaHocTrucTuyen[1].lectures.map((lecture: any, index: number) => (
                            <div key={index} className='flex items-start mb-2 cursor-pointer' >
                                <div className={`flex gap-1 text-lg ${active === index ? 'text-[#2E4FBE]' : ''}`} onClick={() => {
                                    handleChangeLink(index === 0 ? linkVideo.link1 : linkVideo.link2)
                                    setActive(index)
                                    setDataTrans(index === 0 ? transcripts1 : transcripts2)
                                    setTime(index === 0 ? dataTrans[0].time : dataTrans[1].time)
                                }}>
                                    Bài giảng {index + 1}: {lecture.title}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='basis-3/4 px-5'>
                        <h1 className='text-5xl font-bold leading-[130%] mb-4 text-[#3A63ED]'>Bài giảng 1</h1>
                        <CustomVideo linkPlay={linkPlay} handleChangeSlots={handleChangeSlots} />
                        <div className="w-full bg-white ">
                            <h2 className="font-bold text-2xl text-gray-800 mb-3">Bản ghi chép</h2>
                            <div className="space-y-2 max-h-[664px] rounded-lg overflow-y-auto p-4  border border-[#CFD1D4]">
                                {dataTrans.map((item, index) => {
                                    console.log(item.time, time);
                                    const isActive = toSeconds(item.time) <= toSeconds(time);
                                    return <div key={index} className="flex text-lg font-normal items-start gap-10">
                                        <span className={`${isActive ? "text-[#3A63ED]" : ''} min-w-[50px]`}>{item.time}</span>
                                        <span className="">{item.text}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Lesson