import { khoaHocTrucTuyen } from '@/utils/contanst'
import React from 'react'
import CustomVideo from './CustomVideo'

const Lesson = () => {
    return (
        <div className='min-h-screen pb-16 py-16 pt-32 max-w-7xl mx-auto px-4'>
            <div className='container mx-auto'>
                <div className='flex flex-row'>
                    <div className='basis-1/4 pr-5 border-r-2 border-[#CFD1D4]'>
                        <h1 className='text-2xl font-bold leading-[130%] mb-4'>Nội dung khóa học</h1>
                        {khoaHocTrucTuyen[0].lectures.map((lecture: any, index: number) => (
                            <div key={index} className='flex items-start mb-2 cursor-pointer' >
                                <div className='flex gap-1 text-lg'>
                                    Bài giảng {index + 1}: {lecture.title}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='basis-3/4 px-5'>
                        <h1 className='text-5xl font-bold leading-[130%] mb-4 text-[#3A63ED]'>Bài giảng 1</h1>
                        <CustomVideo />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Lesson