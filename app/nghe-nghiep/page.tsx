import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import CourseGrid from '../components/CourseGrid';
import { triLieuNgonNgu } from '@/utils/contanst';
import CourseGridNghe from '../components/CourseGridNghe';

const jobs = [
  {
    title: 'Chuyên viên thiết kế đồ họa',
    company: 'CTY TNHH HƯỚNG LONG',
    tags: ['12 - 15 triệu', 'Hà Nội', 'Full-time'],
    deadline: '12/06/2024',
  },
  {
    title: 'Chuyên viên thiết kế đồ họa',
    company: 'CTY TNHH HƯỚNG LONG',
    tags: ['12 - 15 triệu', 'Hà Nội', 'Full-time'],
    deadline: '12/06/2024',
  },
  {
    title: 'Chuyên viên thiết kế đồ họa',
    company: 'CTY TNHH HƯỚNG LONG',
    tags: ['12 - 15 triệu', 'Hà Nội', 'Full-time'],
    deadline: '12/06/2024',
  },
  {
    title: 'Chuyên viên thiết kế đồ họa',
    company: 'CTY TNHH HƯỚNG LONG',
    tags: ['12 - 15 triệu', 'Hà Nội', 'Full-time'],
    deadline: '12/06/2024',
  },
  // Thêm các job khác nếu cần
];

const page = () => {
  return (
    <div className="mt-[80px] min-h-screen ">
      {/* Hero section */}
      <div className="mt-20 ">
        {/* Hero section */}
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between bg-[#F2F2F3] pl-6 sm:pl-10 xl:pl-20 mb-8">
            {/* Left content */}
            <div className="w-full xl:w-1/2 flex justify-center flex-col text-center xl:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
                Hệ thống đánh giá <br />
                <span className="text-[#3A63ED]">Kỹ năng làm việc</span>
            </h1>
            <p className="mb-8 text-[#111827] text-base sm:text-lg">
                Bài kiểm tra kỹ năng làm việc được phát triển và nghiên cứu dựa trên đối tượng đặc biệt nhằm giúp họ khám phá năng lực
                nghề nghiệp bản thân thông qua các bài kiểm tra kỹ năng nhằm khám phá bản thân và lựa chọn định hướng phù hợp bản thân.
            </p>
            <button className="bg-[#3A63ED] text-white w-max mx-auto xl:mx-0 px-10 py-3 rounded transition">
                Làm bài kiểm tra
            </button>
            </div>

            {/* Right image */}
            <div className="w-full xl:w-1/2 mb-6 xl:mb-0 relative h-[250px] sm:h-[350px] md:h-[400px] xl:h-[500px] flex justify-center items-center">
            <img
                src="/image/nghe-nghiep/banner.png"
                alt="minh họa"
                className="max-h-full object-contain"
            />
            </div>
        </div>
        </div>


      {/* Tuyển dụng section */}
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Tuyển dụng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-[#F2F2F3] rounded-xl shadow p-3 flex gap-6">
                <div className='w-[136px] h-[136px] bg-white rounded-lg' ></div>
                <div className='flex flex-col gap-2 grow'>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <span className="text-gray-500 text-sm">{job.company}</span>
                    <div className="flex gap-2 flex-wrap my-2">
                        {job.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tag}</span>
                        ))}
                    </div>
                    <div className="text-right text-xs text-gray-400">
                        Hạn ứng tuyển: {job.deadline}
                    </div>
                </div>
            </div>
          ))}
        </div>
        <div className="text-end mt-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
            Xem thêm  <img src="/icon/arrow.png" alt="" />
          </Link>
        </div>
        <CourseGridNghe courses={triLieuNgonNgu}  path="tri-lieu-ngon-ngu" title="Đào tạo nghề" />
      </div>
    </div>
  )
}

export default page