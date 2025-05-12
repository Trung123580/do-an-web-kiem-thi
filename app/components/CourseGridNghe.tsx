'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Course {
  id: string;
  title: string;
  imageUrl: string;
  endDate: string;
}

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGridNghe({ courses, path, title, status }: any) {
  const [searchTerm, setSearchTerm] = useState('');
  const [dataRender, setDataRender] = useState(courses)
  const defaultData = courses as any[]

  useEffect(() => {
    if (searchTerm !== '') {
      setDataRender(defaultData.filter((item) => item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())))
    } else {
      setDataRender(defaultData)
    }
  }, [searchTerm])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl md:text-[48px] font-bold">{title}</h1>
        {/* <div className="relative w-full md:w-[263px]">
          <input
            type="text"
            placeholder="Tìm kiếm khóa học"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[48px] pl-4 pr-12 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#3A63ED] focus:border-transparent"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dataRender.map((course: any,index:number) => {
          if (index > 2) return <></>
          return   <Link href={`${path}/${course.slug}` || `${path}/${course.slug}` || `khoa-hoc/${course.slug}`} key={course.slug} className="block group">
          <div className="bg-white rounded-2xl group-hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src={course.img || '/placeholder-course.jpg'}
                alt={course.title}
                fill
                className="rounded-2xl object-cover bg-[#CFD1D4]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[20px] font-semibold text-[#111827] line-clamp-1">{course.title}</h3>
              <p className="mt-2 text-[#6B7280] text-sm">
                {status ? status : 'Ngày kết thúc: 14.05.25'} 
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="rounded-full bg-[#F3F4F6] overflow-hidden flex items-center justify-center">
                  <Image
                    src={''}
                    alt="Foundation Icon"
                    width={48}
                    height={48}
                    className="object-contain w-12 h-12 min-w-12"
                  />
                </div>
                <div className='flex-1'>
                  <span className='text-[10px] font-normal text-[#70747D]'>Đơn vị tổ chức</span>
                  <span className="text-[#111827] text-lg font-normal line-clamp-2">Foundation For Future</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        })}
      </div>
    </div>
  );
} 