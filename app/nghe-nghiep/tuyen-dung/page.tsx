'use client'
import React, { useState } from 'react'
import ModalPartner from '@/components/ModalPartner';
import Link from 'next/link';
import { dataJob_1 } from '@/utils/contanst';
const districts = [
  { label: "Ba Đình", value: "ba-dinh" },
  { label: "Hoàn Kiếm", value: "hoan-kiem" },
  { label: "Tây Hồ", value: "tay-ho" },
  { label: "Cầu Giấy", value: "cau-giay" },
  { label: "Đống Đa", value: "dong-da" },
  { label: "Hai Bà Trưng", value: "hai-ba-trung" },
  { label: "Hoàng Mai", value: "hoang-mai" },
  { label: "Thanh Xuân", value: "thanh-xuan" },
  { label: "Long Biên", value: "long-bien" },
  { label: "Bắc Từ Liêm", value: "bac-tu-liem" },
  { label: "Nam Từ Liêm", value: "nam-tu-liem" },
  { label: "Hà Đông", value: "ha-dong" },
];
const field = [
  { label: "Kinh doanh", value: "ba-dinh" },
  { label: "Truyền thông", value: "hoan-kiem" },
  { label: "Dịch vụ", value: "tay-ho" },
  { label: "Thiết kế", value: "cau-giay" },
  { label: "Luật", value: "dong-da" },
  { label: "Giáo dục", value: "hai-ba-trung" },
  { label: "Du lịch", value: "hoang-mai" },
  { label: "Y tế", value: "thanh-xuan" },
];
const salary = [
  { label: "2 - 5 triệu", value: "ba-dinh" },
  { label: "5 - 10 triệu", value: "hoan-kiem" },
  { label: "10 -15 triệu", value: "tay-ho" },
];
const form = [
  { label: "Thực tập sinh", value: "ba-dinh" },
  { label: "Part - time", value: "ba-dinh" },
  { label: "Full - time", value: "ba-dinh" },
  { label: "Làm việc tại nhà", value: "ba-dinh" },
];
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
              <input type="text" placeholder="Tìm kiếm" className="rounded-lg px-4 py-2 w-full md:w-1/3 text-lg bg-white outline-0" />
              <div className='flex grow justify-between'>
                <button className="bg-white grow text-lg justify-center rounded-lg px-4 py-2 flex items-center gap-2 border border-[#3A63ED] relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M11.5 20.5C11.2167 20.5 10.9792 20.4042 10.7875 20.2125C10.5959 20.0208 10.5 19.7833 10.5 19.5V13.5L4.70002 6.1C4.45002 5.76667 4.41252 5.41667 4.58752 5.05C4.76252 4.68333 5.06669 4.5 5.50002 4.5H19.5C19.9334 4.5 20.2375 4.68333 20.4125 5.05C20.5875 5.41667 20.55 5.76667 20.3 6.1L14.5 13.5V19.5C14.5 19.7833 14.4042 20.0208 14.2125 20.2125C14.0209 20.4042 13.7834 20.5 13.5 20.5H11.5ZM12.5 12.8L17.45 6.5H7.55002L12.5 12.8Z" fill="#111827" />
                  </svg>
                  Bộ lọc:<span className='text-[#3A63ED]'>Địa điểm; Lĩnh vực; Mức lương; Hình thức</span>
                  <div className='bg-[white] absolute top-full left-0 w-full rounded-lg grid grid-cols-3 gap-4 mt-2 p-2 shadow-lg'>
                    <div className='flex flex-col gap-2 px-1 p-2.5'>
                      <span className='text-lg font-normal text-left'>Địa điểm</span>
                      {districts.map((district, index) => (
                        <div key={district.value} className='flex items-center gap-3 px-1'>
                          <input
                            type="checkbox"
                            id={`district-${district.value}`}
                            name="districts"
                            value={district.value}
                            className="w-4.5 h-4.5"
                          />
                          <label className="text-[#70747D] text-base text-nowrap" htmlFor={`district-${district.value}`}>Quận {district.label}</label><br />
                        </div>
                      ))}
                    </div>
                    <div className='flex flex-col gap-2 px-1 p-2.5'>
                      <span className='text-lg font-normal text-left'>Lĩnh vực</span>
                      {field.map((district, index) => (
                        <div key={district.value} className='flex items-center gap-3 px-1'>
                          <input
                            type="checkbox"
                            id={`district-${district.value}`}
                            name="districts"
                            value={district.value}
                            className="w-4.5 h-4.5"
                          />
                          <label className="text-[#70747D] text-base text-nowrap" htmlFor={`district-${district.value}`}>{district.label}</label><br />
                        </div>
                      ))}
                    </div>
                    <div className='flex flex-col gap-2 px-1 p-2.5'>
                      <span className='text-lg font-normal text-left'>Mức lương</span>
                      {salary.map((salary, index) => (
                        <div key={salary.value} className='flex items-center gap-3 px-1'>
                          <input
                            type="checkbox"
                            id={`district-${salary.value}`}
                            name="districts"
                            value={salary.value}
                            className="w-4.5 h-4.5"
                          />
                          <label className="text-[#70747D] text-base text-nowrap" htmlFor={`district-${salary.value}`}>{salary.label}</label><br />
                        </div>
                      ))}
                      <span className='text-lg font-normal text-left'>Hình thức</span>
                      {form.map((district, index) => (
                        <div key={district.value} className='flex items-center gap-3 px-1'>
                          <input
                            type="checkbox"
                            id={`district-${district.value}`}
                            name="districts"
                            value={district.value}
                            className="w-4.5 h-4.5"
                          />
                          <label className="text-[#70747D] text-base text-nowrap" htmlFor={`district-${district.value}`}>{district.label}</label><br />
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
                <button className="bg-[#222] text-white font-semibold rounded-lg px-8 py-2 ms-5">Tìm kiếm</button>
              </div>
            </div>
          </div>
        </div>
        {/* Danh sách job */}
        <div className="max-w-7xl xl mx-auto px-4 xl:px-0  pt-[48px] pb-[96px] grid md:grid-cols-2 rid-cols-1 gap-6">
          {dataJob_1.map((job, idx) => (
            <Link href={`/ve-chung-toi/tham-gia-chung-toi/job/${job.slug}`} key={idx} className="bg-[#F7F7F8] rounded-lg flex items-center gap-6 p-3 pr-6">
              <img src={job.img} alt={job.title} className="w-[136px] h-[136px] object-cover rounded-lg" />
              <div className='flex flex-col gap-7 grow justify-between'>
                <div>
                  <div className="text-2xl font-normal">{job.title}</div>
                  <span className="text-gray-500 text-[10px] font-normal">{job.company}</span>
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
        <div className='bg-[#4263EB] mx-auto px-4 py-16 mb-[96px] text-center max-w-7xl rounded-2xl'>
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
