'use client';

import Link from 'next/link';
import CourseGrid from "@/app/components/CourseGrid";
import { daotaonghe } from "@/utils/contanst";

export default function page() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 py-8">
      {/* Breadcrumb navigation */}
      <nav className="bg-white mt-16">
        <div className="mx-auto px-4">
          <div className="flex items-center h-12">
            <Link
              href="/nghe-nghiep"
              className="text-[#A0A3A9] hover:text-gray-900"
            >
              Nghề nghiệp
            </Link>
            <span className="mx-2 text-2xl text-black">&gt;</span>
            <span className="text-[#3A63ED]">Đào tạo nghề</span>
          </div>
        </div>
      </nav>

      {/* Course grid */}
      <CourseGrid courses={daotaonghe} status={''} path="dao-tao-nghe" title="Đào tạo nghề" />
    </section>
  );
}