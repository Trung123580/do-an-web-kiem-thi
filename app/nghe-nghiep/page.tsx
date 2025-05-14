'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import CourseGrid from '../components/CourseGrid';
import { phuongPhap, camnang, triLieuNgonNgu, dataJob, daotaonghe } from '@/utils/contanst';
import CourseGridNghe from '../components/CourseGridNghe';
import ModalPartner from '@/components/ModalPartner';



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
            <Link href={'/nghe-nghiep/test'} className="bg-[#3A63ED] text-white w-max mx-auto xl:mx-0 px-10 py-3 rounded transition">
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
          {dataJob.slice(0,4).map((job, idx) => (
            <Link  key={idx} href={`/ve-chung-toi/tham-gia-chung-toi/job/${job.slug}`} className="bg-[#F2F2F3] rounded-xl shadow p-3 flex gap-6">
                <div className='w-[136px] h-[136px] bg-white rounded-lg' >
                  <img src={job.img} alt="" className='max-w-full h-full  rounded-lg object-cover' />
                </div>
                <div className='flex flex-col gap-2 grow justify-between'>
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <span className="text-gray-500 text-sm">{job.company}</span>
                  </div>
                   <div className='flex  justify-between'>
                    <div className="flex gap-2 flex-wrap my-2">
                        <div className=" text-gray-700 px-2 py-1 rounded text-xs bg-white border border-[#CFD1D4]">{job.salary}</div>
                        <div className=" text-gray-700 px-2 py-1 rounded text-xs bg-white border border-[#CFD1D4]">{job.location}</div>
                        <div className=" text-gray-700 px-2 py-1 rounded text-xs bg-white border border-[#CFD1D4]">{job.salary}</div>
                      </div>
                      <div className="text-right text-xs text-gray-400 flex justify-center items-center">
                          Hạn ứng tuyển: {job.deadline}
                      </div>
                   </div>
                </div>
            </Link>
          ))}
        </div>
        <div className="text-end mt-6">
          <Link href="/nghe-nghiep/tuyen-dung" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
            Xem thêm  <img src="/icon/arrow.png" alt="" />
          </Link>
        </div>
        <CourseGridNghe courses={daotaonghe}  path="nghe-nghiep/dao-tao-nghe" title="Đào tạo nghề" />
        <div className="text-end mt-6">
            <Link href="/nghe-nghiep/dao-tao-nghe" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
              Xem thêm <img src="/icon/arrow.png" alt="" />
            </Link>
        </div>
        <h2 className="text-5xl font-bold mb-[32px]">Cẩm nang</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {camnang.map((item,index) => {
              if (index > 2) return <></>
              return <Link key={index} href={`/nghe-nghiep/cam-nang/${item.slug}`} className='px-3 h-full'>
                  <div className='bg-[#F2F2F3] overflow-hidden rounded-2xl hover:bg-[#3A63ED]/50 shadow-lg h-full group relative'>
                    <div className='relative h-60 group-hover:h-40 transition-all duration-300'>
                      <Image src={item.image} alt={''} fill className='object-cover rounded-2xl' />
                    </div>
                    <div className='px-6 pt-4 pb-6'>
                      <p className='text-gray-600 font-medium text-lg mb-4'>{item.name}</p>
                      <p className='text-gray-600 font-medium text-sm absolute left-0 right-0 p-4 pt-0 translate-y-full group-hover:translate-y-0 transition-all duration-300'>{item.note}</p>
                    </div>
                  </div>
                </Link>
            })}
        </div>
        <div className="text-end mt-6">
            <Link href="/nghe-nghiep/cam-nang" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-7 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
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
        <div className='bg-[#4263EB] mx-auto px-4 py-16 text-center rounded-2xl'>
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