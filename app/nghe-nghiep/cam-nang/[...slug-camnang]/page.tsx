'use client'
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { camnang } from '@/utils/contanst'


const page = () => {
    const params = useParams()
    const slug: any = params["slug-camnang"]
    const camnangDetail: any = camnang.find((camnang) => camnang.slug === slug[0]);
  return (
    <div className="min-h-screen bg-gray-50  pb-16">
       <div className='flex mt-16 xl:flex-row flex-col relative'>
        <div className='flex-2/4 min-h-[400px] bg-[#111827] flex flex-col justify-end pl-[40px] md:pl-[80px] pr-[32px] pb-[56px] gap-[16px]'>
          <h3 className="text-5xl font-bold text-white mt-10 xl:hidden block">{camnangDetail?.name}</h3>
          <p className="text-lg font-normal text-white xl:hidden block">{camnangDetail?.note}</p>
        </div>
        <div className='flex-2/4'>
          <img src={camnangDetail?.image} className="h-full w-full object-cover  max-h-[600px]" alt='asdas' />
        </div>
        <div className="absolute max-w-7xl w-full xl:flex hidden bottom-14 left-1/2 pl-4 -translate-x-1/2 ">

          <div className="flex-2/4 pr-5">
            <h3 className="text-5xl font-bold text-white mt-10">{camnangDetail?.name}</h3>
            <p className="text-lg font-normal text-white mt-4">{camnangDetail?.note}</p>
          </div>
          <div className="flex-2/4">
          </div>
        </div>
      </div>
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Content */}
        <div className="prose max-w-none mt-5">
          <div className="text-lg" dangerouslySetInnerHTML={{ __html: camnangDetail?.descript ?? "" }} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default page