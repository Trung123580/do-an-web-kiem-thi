"use client";

import Link from "next/link";
import CourseGrid from "@/app/components/CourseGrid";
import { camnang } from "@/utils/contanst";
import Image from "next/image";

export default function page() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 py-8">
      {/* Breadcrumb navigation */}
      <nav className="bg-white mt-16 pb-4">
        <div className="mx-auto px-4">
          <div className="flex items-center h-12">
            <Link href="/giao-duc" className="text-[#A0A3A9] hover:text-gray-900">
              Giáo dục
            </Link>
            <span className="mx-2 text-2xl text-black">&gt;</span>
            <span className="text-[#3A63ED]">Cẩm nang</span>
          </div>
        </div>
      </nav>
      <div className="px-4">
      <div className="">
        <h2 className="text-5xl font-bold mb-[32px]">Phương pháp chăm sóc & giáo dục</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {camnang.map((item,index) => (
        <Link key={index} href={`/nghe-nghiep/cam-nang/${item.slug}`} className="px-3 h-full">
          <div className="bg-[#F2F2F3] overflow-hidden rounded-2xl hover:bg-[#3A63ED]/50 shadow-lg h-full group relative">
            <div className="relative h-60 group-hover:h-40 transition-all duration-300">
              <Image src={item.image} alt={''} fill className="object-cover rounded-2xl" />
            </div>
            <div className="px-6 pt-4 pb-6">
              <p className="text-gray-600 font-medium text-lg mb-4">{item.name}</p>
              <p className="text-gray-600 font-medium text-sm absolute left-0 right-0 p-4 pt-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">{item.note}</p>
            </div>
          </div>
        </Link>
      ))}
        </div>
      </div>
    </div>
    </section>
  );
}
