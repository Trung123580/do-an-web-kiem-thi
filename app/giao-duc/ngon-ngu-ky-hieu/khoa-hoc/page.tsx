'use client';

import Link from 'next/link';
import CourseGrid from "@/app/components/CourseGrid";
import { khoaHoc } from "@/utils/contanst";

export default function CoursePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 py-8">
      {/* Breadcrumb navigation */}
      <nav className="bg-white mt-16">
        <div className="mx-auto px-4">
          <div className="flex items-center h-12">
            <Link
              href="/giao-duc/ngon-ngu-ky-hieu"
              className="text-[#A0A3A9] hover:text-gray-900"
            >
              Ngôn ngữ ký hiệu
            </Link>
            <span className="mx-2 text-2xl text-black">&gt;</span>
            <span className="text-[#3A63ED]">Khóa học</span>
          </div>
        </div>
      </nav>

      {/* Course grid */}
      <CourseGrid courses={khoaHoc} path="khoa-hoc"/>
    </section>
  );
}