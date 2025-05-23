import React from "react";
import Image from "next/image";
import Link from "next/link";
import { dataSukien, dataTaiTro } from "@/utils/contanst";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16 pt-20 max-w-7xl">
        <nav className="bg-white">
        <div className="mx-auto  pb-6 pt-8">
          <div className="flex items-center h-12">
            <Link
              href="/cong-dong"
              className="text-[#A0A3A9] hover:text-gray-900"
            >
              Cộng đồng
            </Link>
            <span className="mx-2 text-2xl text-black">&gt;</span>
            <span className="text-[#3A63ED]">Hoạt động</span>
          </div>
        </div>
      </nav>
      <h1 className="text-3xl font-bold mb-12">Sự kiện</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataSukien.map((event, index) => (
          <Link href={`hoat-dong/su-kien/${event.slug}`} key={index}>
            <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer  hover:shadow-lg hover:shadow-[#2E4FBE] transition-shadow duration-300">
              <div className="relative h-64 bg-[#CFD1D4] rounded-2xl">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-2xl mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-gray-600 text-base mb-4 line-clamp-2">{event.description}</p>
                <div className="flex flex-grow justify-between items-center">
                  <span className="text-gray-500 text-base basis-2/3">Ngày kết thúc: 14.05.25</span>
                  <button className="basis-1/3 bg-black text-white px-5 py-2 font-light rounded-md text-sm hover:bg-gray-800 transition-colors duration-300">
                    Tham gia
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-12 mt-16">Chương trình hỗ trợ/tài trợ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataTaiTro.map((event, index) => (
          <Link href={`hoat-dong/tai-tro/${event.slug}`} key={index}>
            <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer   hover:shadow-lg hover:shadow-[#2E4FBE] transition-shadow duration-300">
              <div className="relative h-64 bg-[#CFD1D4] rounded-2xl">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-2xl mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-gray-600 text-base mb-4 line-clamp-2">{event.description}</p>
                <div className="flex justify-between items-center flex-grow">
                  <span className="text-gray-500 text-base basis-2/3">Ngày kết thúc: 14.05.25</span>
                  <button className="basis-1/3 bg-black text-white px-5 py-2 font-light rounded-md text-sm hover:bg-gray-800 transition-colors duration-300">
                    Tham gia
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}