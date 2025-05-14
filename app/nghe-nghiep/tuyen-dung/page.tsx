'use client'
import React, { useState } from 'react'
import ModalPartner from '@/components/ModalPartner';
import Link from 'next/link';
import { dataJob } from '@/utils/contanst';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="min-h-screen bg-white mt-16">
        {/* Header */}
        <div className="bg-[#3A63ED] px-8 py-16">
          <div className='max-w-7xl mx-auto'>
            <h1 className="text-white text-5xl font-bold mb-3">Việc làm phù hợp</h1>
            <p className="text-white text-lg mb-6">Tìm kiếm những công việc phù hợp nhất cùng những quyền lợi đặc biệt.</p>
            <div className="flex flex-col w-full md:flex-row gap-4 items-center">
              <input type="text" placeholder="Tìm kiếm" className="rounded-lg px-4 py-2 w-full md:w-1/3 text-base bg-white" />
              <div className='flex grow justify-between'>
                <button className="bg-white text-[#3A63ED] grow gap-5 font-semibold rounded-lg px-4 py-2 flex items-center gap-2 border border-[#3A63ED]">
                  <svg width="20" height="20" fill="none" stroke="#3A63ED" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                  Bộ lọc: Địa điểm; Lĩnh vực; Mức lương; Hình thức
                </button>
                <button className="bg-[#222] text-white font-semibold rounded-lg px-8 py-2 ms-5">Tìm kiếm</button>
              </div>
            </div>
          </div>
        </div>
        {/* Danh sách job */}
        <div className="max-w-[1280px] xl mx-auto px-4 pt-[48px] pb-[96px] grid md:grid-cols-2 rid-cols-1 gap-6">
          {dataJob.map((job, idx) => (
            <Link href={`/ve-chung-toi/tham-gia-chung-toi/job/${job.slug}`} key={idx} className="bg-[#F7F7F8] rounded-2xl flex items-center gap-6 p-3 pr-6">
              <img src={job.img} alt={job.title} className="w-[136px] h-[136px] object-cover rounded-xl" />
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
        <div className='bg-[#4263EB] mx-auto px-4 py-16 mb-[96px] text-center w-[80%] rounded-2xl'>
          <h2 className='text-3xl font-bold text-white mb-4'>Trở thành một phần của chúng tôi</h2>
          <p className='text-white/90 max-w-2xl mx-auto mb-8'>Góp phần hỗ trợ người khiếm thính bằng cách trở thành nhà tuyển dụng, đối tác tổ chức sự kiện và nhiều hình thức hợp tác khác.</p>
          <button onClick={() => setIsOpen(true)} className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors'>Tham gia cùng chúng tôi</button>
        </div>
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
      </div>
      <ModalPartner isOpen={isOpen} closeModal={() => setIsOpen(false)} />

    </>
  )
}

export default Page
