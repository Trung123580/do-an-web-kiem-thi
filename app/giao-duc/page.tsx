'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dataSukien } from "@/utils/contanst";
import { useKeenSlider } from "keen-slider/react";
import Wheel from "@/components/Wheel";

export default function EducationPage() {
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="container mx-auto px-4">
  
        {/* Rest of your content */}
        <div className="grid grid-cols-2 bg-[#F2F2F3] mb-8 h-[480px] rounded-2xl overflow-hidden">
          <div className="flex justify-evenly flex-col h-full p-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Ngôn ngữ ký hiệu là
                <br />
                phương tiện giao tiếp
              </h1>
              <p className="text-lg max-w-xl">Ngôn ngữ ký hiệu là một hình thức giao tiếp bằng thị giác, sử dụng các cử chỉ tay, biểu cảm khuôn mặt và chuyển động cơ thể để truyền đạt thông tin.</p>
              <button className="bg-[#111827] font-light text-white px-12 py-3 rounded-md text-lg hover:bg-[#2E4FBE]/80 transition-colors duration-300">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="rounded-2xl h-full overflow-hidden">
            <Image 
              src="/image/banner-5.png" 
              alt="Education Banner" 
              width={500} 
              height={500} 
              className="object-cover w-full h-full" 
              priority 
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-8">Khóa học nổi bật</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {dataSukien.slice(0, 4).map((course, index) => (
                <Link href={`/giao-duc/khoa-hoc/${course.slug}`} key={index}>
                  <div className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-[#5d7deb80] transition-shadow duration-300 h-[472px]">
                    <div className="relative h-72 bg-[#CFD1D4]">
                      <Image src={course.img} alt={course.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">Ngày kết thúc: {course.date}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 w-full">
                          <Image src={'/image/Ellipse-7.png'} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                          <div>
                            <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                            <div className="font-medium">Foundation For Future</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Danh mục</h3>
              <ul className="space-y-2">
                <li className="hover:text-[#2E4FBE] cursor-pointer">Ngôn ngữ ký hiệu</li>
                <li className="hover:text-[#2E4FBE] cursor-pointer">Kỹ năng giao tiếp</li>
                <li className="hover:text-[#2E4FBE] cursor-pointer">Công nghệ hỗ trợ</li>
                <li className="hover:text-[#2E4FBE] cursor-pointer">Phát triển bản thân</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Tài liệu mới</h3>
              <div className="space-y-4">
                {dataSukien.slice(0, 3).map((doc, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={doc.img} alt={doc.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium hover:text-[#2E4FBE] cursor-pointer">{doc.title}</h4>
                      <p className="text-sm text-gray-500">{doc.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
