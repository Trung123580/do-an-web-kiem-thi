'use client'
import React, { useState } from 'react'
import ModalPartner from '@/components/ModalPartner';
const jobs = [
  {
    title: "Chuyên viên thiết kế đồ họa",
    company: "CTY TNHH THIẾT KẾ ĐỒ HỌA HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57.png",
    salary: "10 - 12 triệu",
    location: "Quận Hoàn Kiếm, Hà Nội",
    type: "Full-time",
    deadline: "12.05.2025",
  },
  {
    title: "Nhà phát triển phần mềm",
    company: "CTY TNHH PHẦN MỀM ABC",
    image: "/nghe-nghiep/Rectangle 57-1.png",
    salary: "15 - 20 triệu",
    location: "Quận 1, TP.HCM",
    type: "Full-time",
    deadline: "30.06.2025",
  },
  {
    title: "Nhân viên marketing",
    company: "CTY TNHH MARKETING XYZ",
    image: "/nghe-nghiep/Rectangle 57-2.png",
    salary: "8 - 10 triệu",
    location: "Cầu Giấy, Hà Nội",
    type: "Part-time",
    deadline: "15.07.2025",
  },
  {
    title: "Quản lý dự án",
    company: "CÔNG TY TNHH MTV ABC",
    image: "/nghe-nghiep/Rectangle 57-3.png",
    salary: "8 - 10 triệu",
    location: "Cầu Giấy, Hà Nội",
    type: "Part-time",
    deadline: "15.07.2025",
  },
  {
    title: "Kỹ thuật viên IT",
    company: "CTY TNHH KỸ THUẬT SỐ HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-4.png",
    salary: "10 - 12 triệu",
    location: "Thanh Xuân, Hà Nội",
    type: "Full-time",
    deadline: "12.05.2025",
  },
  {
    title: "Chuyên viên chăm sóc khách hàng",
    company: "CTY TNHH DỊCH VỤ KHÁCH HÀNG HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-5.png",
    salary: "8 - 10 triệu",
    location: "Hai Bà Trưng, Hà Nội",
    type: "Full-time",
    deadline: "05.06.2025",
  },
  {
    title: "Nhân viên thu ngân",
    company: "CTY THÀNH BÌNH LÊ HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-6.png",
    salary: "7 - 9 triệu",
    location: "Quận Đống Đa, Hà Nội",
    type: "Part-time",
    deadline: "10.05.2025",
  },
  {
    title: "Designer UI/UX",
    company: "CTY CỔ PHẦN SÁNG TẠO HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-7.png",
    salary: "15 - 20 triệu",
    location: "Hai Bà Trưng, Hà Nội",
    type: "Full-time",
    deadline: "12.06.2025",
  },
  {
    title: "Nhà nghiên cứu thị trường",
    company: "CTY CP THỊ TRƯỜNG HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-8.png",
    salary: "12 - 15 triệu",
    location: "Long Biên, Hà Nội",
    type: "Full-time",
    deadline: "14.06.2025",
  },
  {
    title: "Kỹ sư mạng",
    company: "CTY TNHH CNTT HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-9.png",
    salary: "20 - 25 triệu",
    location: "Nam Từ Liêm, Hà Nội",
    type: "Full-time",
    deadline: "03.06.2025",
  },
  {
    title: "Chuyên viên SEO",
    company: "CTY MARKETING HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-10.png",
    salary: "15 - 17 triệu",
    location: "Bắc Từ Liêm, Hà Nội",
    type: "Full-time",
    deadline: "22.06.2025",
  },
  {
    title: "Nhân viên phát triển kinh doanh",
    company: "CTY TNHH PHÁT TRIỂN DOANH NGHIỆP HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-11.png",
    salary: "18 - 22 triệu",
    location: "Hoàng Mai, Hà Nội",
    type: "Full-time",
    deadline: "10.06.2025",
  },
  {
    title: "Chuyên viên tài chính",
    company: "CTY CP TÀI CHÍNH HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-12.png",
    salary: "25 - 30 triệu",
    location: "Cầu Giấy, Hà Nội",
    type: "Full-time",
    deadline: "30.06.2025",
  },
  {
    title: "Chuyên viên tài chính",
    company: "CTY CP TÀI CHÍNH HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-13.png",
    salary: "25 - 30 triệu",
    location: "Quận Cầu Giấy, Hà Nội",
    type: "Full-time",
    deadline: "05.07.2025",
  },
  {
    title: "Nhân viên hành chính nhân sự",
    company: "CTY TNHH NHÂN SỰ HÀ NỘI",
    image: "/nghe-nghiep/Rectangle 57-14.png",
    salary: "12 - 15 triệu",
    location: "Hoàng Mai, Hà Nội",
    type: "Full-time",
    deadline: "05.07.2025",
  }
]

const Page = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
   <>
    <div className="min-h-screen bg-white mt-16">
      {/* Header */}
      <div className="bg-[#3A63ED] px-8 py-16">
        <h1 className="text-white text-5xl font-bold mb-3">Việc làm phù hợp</h1>
        <p className="text-white text-lg mb-6">Tìm kiếm những công việc phù hợp nhất cùng những quyền lợi đặc biệt.</p>
        <div className="flex flex-col w-full md:flex-row gap-4 items-center">
          <input type="text" placeholder="Tìm kiếm" className="rounded-lg px-4 py-2 w-full md:w-1/3 text-base bg-white" />
          <div className='flex grow justify-between'>
            <button className="bg-white text-[#3A63ED] grow gap-5 font-semibold rounded-lg px-4 py-2 flex items-center gap-2 border border-[#3A63ED]">
                <svg width="20" height="20" fill="none" stroke="#3A63ED" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                Bộ lọc: Địa điểm; Lĩnh vực; Mức lương; Hình thức
            </button>
            <button className="bg-[#222] text-white font-semibold rounded-lg px-8 py-2">Tìm kiếm</button>
          </div>
        </div>
      </div>
      {/* Danh sách job */}
      <div className="max-w-[1280px] xl mx-auto px-4 pt-[48px] pb-[96px] grid grid-cols-2 gap-6">
        {jobs.map((job, idx) => (
          <div key={idx} className="bg-[#F7F7F8] rounded-2xl flex items-center gap-6 p-3 pr-6">
            <img src={job.image} alt={job.title} className="w-[136px] h-[136px] object-cover rounded-xl" />
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-semibold mb-1 text-[#222] truncate">{job.title}</h3>
              <div className="text-gray-400 text-sm mb-3 font-medium uppercase tracking-wide">{job.company}</div>
              <div className="flex justify-between">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-white border border-[#E6EDFF] text-[#222] px-3 py-1 rounded-md text-[10px] font-normal">{job.salary}</span>
                <span className="bg-white border border-[#E6EDFF] text-[#222] px-3 py-1 rounded-md text-[10px] font-normal">{job.location}</span>
                <span className="bg-white border border-[#E6EDFF] text-[#222] px-3 py-1 rounded-md text-[10px] font-normal">{job.type}</span>
              </div>
                <div className="text-gray-400 text-[10px] font-normal whitespace-nowrap">Hạn ứng tuyển: <span className="font-medium">{job.deadline}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-[#4263EB] mx-auto px-4 py-16 mb-[96px] text-center w-[80%] rounded-2xl'>
          <h2 className='text-3xl font-bold text-white mb-4'>Trở thành một phần của chúng tôi</h2>
          <p className='text-white/90 max-w-2xl mx-auto mb-8'>Góp phần hỗ trợ người khiếm thính bằng cách trở thành nhà tuyển dụng, đối tác tổ chức sự kiện và nhiều hình thức hợp tác khác.</p>
          <button onClick={()=> setIsOpen(true)} className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors'>Tham gia cùng chúng tôi</button>
        </div>
    </div>
      <ModalPartner isOpen={isOpen} closeModal={() => setIsOpen(false)} />

   </>
  )
}

export default Page
