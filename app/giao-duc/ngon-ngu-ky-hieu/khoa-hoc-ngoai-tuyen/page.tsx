'use client';

import Link from 'next/link';
import CourseGrid from "@/app/components/CourseGrid";

const sampleCourses = [
  {
    id: '1',
    title: 'Docker Container Practice',
    imageUrl: '/placeholder-course.jpg',
    endDate: '14.05.25',
  },
  {
    id: '2',
    title: 'Docker Container Practice',
    imageUrl: '/placeholder-course.jpg',
    endDate: '14.05.25',
  },
  {
    id: '3',
    title: 'Docker Container Practice',
    imageUrl: '/placeholder-course.jpg',
    endDate: '14.05.25',
  },
  {
    id: '4',
    title: 'Docker Container Practice',
    imageUrl: '/placeholder-course.jpg',
    endDate: '14.05.25',
  },
  {
    id: '5',
    title: 'Docker Container Practice',
    imageUrl: '/placeholder-course.jpg',
    endDate: '14.05.25',
  },
  {
    id: '6',
    title: 'Docker Container Practice',
    imageUrl: '/placeholder-course.jpg',
    endDate: '14.05.25',
  },
];

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
            <span className="text-[#3A63ED]">Khóa học ngoại tuyến</span>
          </div>
        </div>
      </nav>

      {/* Course grid */}
      {/* <CourseGrid courses={sampleCourses} /> */}
    </section>
  );
}