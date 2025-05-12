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
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
    <div className="mb-8">
      <div className=" h-[600px] flex flex-row">
        <div className="basis-1/2 bg-[#111827] px-14 flex flex-col justify-end items-center">
          <div className="text-6xl text-white font-bold mb-10 max-w-4xl">
            {camnangDetail?.name}
            <div className="text-lg text-white font-normal mt-3">{camnangDetail?.note}</div>
          </div>
        </div>
        <div className="basis-1/2">
          <Image src={camnangDetail?.image ?? ""} alt="" fill className="object-cover !relative" />
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