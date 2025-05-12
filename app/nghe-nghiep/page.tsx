'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import CourseGrid from '../components/CourseGrid';
import { phuongPhap, camnang, triLieuNgonNgu } from '@/utils/contanst';
import CourseGridNghe from '../components/CourseGridNghe';
import ModalPartner from '@/components/ModalPartner';

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
  const [isOpen, setIsOpen] = useState(false)

  return (
   <>
    <div className="mt-[80px] min-h-screen ">
      {/* Hero section */}
      <div className="mt-20 ">
        {/* Hero section */}
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between bg-[#F2F2F3] pl-6 sm:pl-10 xl:pl-20 pb-8">
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
            <Link href={'/test'} className="bg-[#3A63ED] text-white w-max mx-auto xl:mx-0 px-10 py-3 rounded transition">
                Làm bài kiểm tra
            </Link>
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
          <Link href="/nghe-nghiep/tuyen-dung" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
            Xem thêm  <img src="/icon/arrow.png" alt="" />
          </Link>
        </div>
        <CourseGridNghe courses={triLieuNgonNgu}  path="tri-lieu-ngon-ngu" title="Đào tạo nghề" />
        <div className="text-end mt-6">
            <Link href="/thong-tin/cau-chuyen" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
              Xem thêm <img src="/icon/arrow.png" alt="" />
            </Link>
        </div>
        <h2 className="text-5xl font-bold mb-[32px]">Cẩm nang</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {camnang.map((item,index) => {
              if (index > 2) return <></>
              return <Link href={`/giao-duc/giao-duc-dac-biet/` + item.slug} className="bg-[#F2F2F3] group hover:bg-[#D8E0FB] rounded-2xl overflow-hidden">
              <img className="h-[270px] group-hover:h-[200px] transition-all duration-300 object-cover w-full rounded-2xl"  src={item.image} alt="" />
              <div className="px-[24px] py-[32px] h-[107px]">
                  <h4 className="text-2xl font-normal mb-5">{item.name}</h4>
                  <p className="text-[12px] ">{item.note}</p>
              </div>
          </Link>
            })}
        </div>
        <div className="text-end mt-6">
            <Link href="/thong-tin/cau-chuyen" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
              Xem thêm <img src="/icon/arrow.png" alt="" />
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 h-auto sm:h-[255px] md:h-[345px] lg:h-[400px] xl:h-[495px] 2xl:h-[545px] rounded-2xl overflow-hidden mt-24">
          <div className="flex justify-evenly flex-col p-6 md:p-12">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                Tư vấn định hướng
                <br />
                học tập
              </h1>
              <p className="text-base sm:text-xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl max-w-xl">Tư vấn và định hướng phù hợp là cách tốt nhất để giúp người khiếm thính phát huy tiềm năng, lựa chọn đúng hướng đi, và xây dựng lộ trình học tập – nghề nghiệp phù hợp với khả năng, sở thích và điều kiện cá nhân</p>
              <Link href={'/giao-duc/tu-van-dinh-huong'} className="bg-[#111827] font-light text-white px-7 py-2 sm:px-3 sm:py-2 md:px-6 md:py-2 lg:px-12 lg:py-3 xl:px-12 xl:py-3 2xl:px-12 2xl:py-3 rounded-md text-base sm:text-xs md:text-sm lg:text-base  hover:bg-[#111827]/60 transition-colors duration-300">Tìm hiểu thêm</Link>
            </div>
          </div>
          <div className="relative z-0 overflow-visible h-[400px] sm:h-auto group">
            <img src="/image/banner-6.png" alt="Education Banner" className="object-cover h-full absolute bottom-0 left-0  hover:scale-100 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90 " />
            <img src="/image/banner-7.png" alt="Education Banner" className="object-cover h-full absolute bottom-0 left-1/2 -translate-x-1/2 hover:scale-100 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
            <img src="/image/banner-8.png" alt="Education Banner" className="object-cover h-full absolute bottom-0 right-0 hover:scale-100 hover:opacity-100 hover:z-10 transition-all duration-300 group-hover:opacity-40 group-hover:scale-90" />
          </div>
        </div>
        <div className='bg-[#4263EB] mx-auto px-4 py-16 text-center w-[80%] rounded-2xl'>
          <h2 className='text-3xl font-bold text-white mb-4'>Trở thành một phần của chúng tôi</h2>
          <p className='text-white/90 max-w-2xl mx-auto mb-8'>Góp phần hỗ trợ người khiếm thính bằng cách trở thành nhà tuyển dụng, đối tác tổ chức sự kiện và nhiều hình thức hợp tác khác.</p>
          <button onClick={()=> setIsOpen(true)} className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors'>Tham gia cùng chúng tôi</button>
        </div>
      </div>
    </div>
      <ModalPartner isOpen={isOpen} closeModal={() => setIsOpen(false)} />
   </>

  )
}

export default page