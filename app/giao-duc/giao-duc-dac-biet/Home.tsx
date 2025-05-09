import { phuongPhap } from "@/utils/contanst"
import Link from "next/link"
import React from "react"

const Home = () => {
  return (
    <div className="px-4">
      <div className='flex rounded-2xl overflow-hidden xl:flex-row flex-col'>
        <div className='flex-1 bg-[#F2F2F3] items-center justify-center flex flex-col py-20'>
          <h3 className='text-5xl font-bold text-black leading-14'>
            Các thông tin hỗ <br /> trợ giáo dục
          </h3>
          <div className='flex flex-col gap-6 mt-6'>
            <Link className='text-lg font-bold text-[#3A63ED]' href={"/thong-tin/hoat-dong"}>
              Các chương trình hỗ trợ giáo dục →
            </Link>
            <Link className='text-lg font-bold text-[#3A63ED]' href={"/thong-tin/to-chuc-cong-dong"}>
              Các tổ chức hỗ trợ giáo dục →
            </Link>
          </div>
        </div>
        <img className='w-full xl:w-[738px]' src='/image/giao-duc-dac-biet/banner.jpg' alt='' />
      </div>
      <div className="mt-[96px]">
        <h2 className="text-5xl font-bold mb-[32px]">Phương pháp chăm sóc & giáo dục</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {phuongPhap.map((item) => <Link href={`/giao-duc/giao-duc-dac-biet/` + item.slug} className="bg-[#F2F2F3] group hover:bg-[#D8E0FB] rounded-2xl overflow-hidden">
                <img className="h-[270px] group-hover:h-[200px] transition-all duration-300 object-cover w-full rounded-2xl"  src={item.image} alt="" />
                <div className="px-[24px] py-[32px] h-[107px]">
                    <h4 className="text-2xl font-normal mb-5">{item.name}</h4>
                    <p className="text-[12px] ">{item.note}</p>
                </div>
            </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Home
