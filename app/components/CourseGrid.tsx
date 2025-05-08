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

export default function CourseGrid({ courses, path, title }: any) {
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
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl md:text-[48px] font-bold">{title}</h1>
        <div className="relative w-full md:w-[413px]">
          <input
            type="text"
            placeholder="Tìm kiếm khóa học..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[58px] px-4 py-3.5 rounded-lg border-2 border-[#E5E7EB] focus:outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8.79743 17.504C6.33871 17.504 4.25774 16.6519 2.55451 14.9475C0.851503 13.2434 0 11.1783 0 8.75219C0 6.32613 0.852183 4.26091 2.55655 2.55655C4.26069 0.852182 6.32964 0 8.76342 0C11.197 0 13.2621 0.852182 14.9587 2.55655C16.6556 4.26091 17.504 6.32726 17.504 8.75559C17.504 9.73577 17.3453 10.6756 17.0279 11.575C16.7105 12.4743 16.2494 13.3019 15.6447 14.0578L23.6711 22.0386C23.8904 22.2511 24 22.5216 24 22.8501C24 23.1784 23.8904 23.4521 23.6711 23.6711C23.4519 23.8904 23.1781 24 22.8498 24C22.5215 24 22.2511 23.8904 22.0386 23.6711L14.035 15.6675C13.3548 16.2418 12.5653 16.6915 11.6665 17.0167C10.7678 17.3416 9.81139 17.504 8.79743 17.504ZM8.77464 15.2366C10.5697 15.2366 12.0954 14.6037 13.3517 13.3378C14.6083 12.0719 15.2366 10.5434 15.2366 8.75219C15.2366 6.96099 14.6083 5.43234 13.3517 4.16625C12.0954 2.90039 10.5697 2.26746 8.77464 2.26746C6.96711 2.26746 5.43064 2.90039 4.16523 4.16625C2.90005 5.43234 2.26746 6.96099 2.26746 8.75219C2.26746 10.5434 2.90005 12.0719 4.16523 13.3378C5.43064 14.6037 6.96711 15.2366 8.77464 15.2366Z" fill="#3A63ED" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dataRender.map((course: any) => (
          <Link href={`${path}/${course.slug}` || `${path}/${course.slug}` || `khoa-hoc/${course.slug}`} key={course.slug} className="block group">
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300">
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
                  Ngày kết thúc: 14.05.25
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#F3F4F6] overflow-hidden flex items-center justify-center">
                    <Image
                      src={course.organization[0].img}
                      alt="Foundation Icon"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#4B5563] text-sm line-clamp-1">{course.organization[0].title}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 