"use client"
import React from "react"
import { useParams } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { phuongPhap } from "@/utils/contanst"

const page = () => {
  const params = useParams()
  const slug: any = params["slug"]
  const detail: any = phuongPhap.find((khoahoc) => khoahoc.slug === slug[0])
  return (
    <div>
      <div className='flex mt-16 xl:flex-row flex-col'>
        <div className='flex-2/4 bg-[#111827] flex flex-col justify-end pl-[40px] md:pl-[80px] pr-[32px] pb-[56px] gap-[16px]'>
          <h3 className="text-5xl font-bold text-white">{detail?.name}</h3>
          <p className="text-lg font-normal text-white">{detail?.note}</p>
        </div>
        <div className='flex-2/4'>
          <img src={detail?.image} className="h-full w-full object-cover" alt='asdas' />
        </div>
      </div>
      <div className="max-w-[846px] mx-auto py-[56px] px-4" dangerouslySetInnerHTML={{__html: detail?.descript}}>
      </div>
    </div>
  )
}

export default page
