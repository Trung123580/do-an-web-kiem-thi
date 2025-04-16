'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { dataJob } from '../../page'
export default function JobDetailPage({ params }: { params: { 'slug-job': string[] } }) {
    const slug = params['slug-job'][0]
    const [jobDetail, setJobDetail] = useState(dataJob.find(job => job.slug === slug))
    console.log(slug,jobDetail)
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-8">
            <div className="container mx-auto px-4">
                <div className="shadow-sm bg-white rounded-xl p-6 mb-8 h-[400px]">
                    <div className="flex flex-col md:flex-row gap-6 items-center h-full">
                        <div className="rounded-xl flex-shrink-0 h-full">
                            <Image
                                src={jobDetail?.imgDetail || ''}
                                alt="Content Creator Icon"
                                width={305}
                                height={305}
                                className="object-contain h-full"
                            />
                        </div>
                        <div className="flex justify-evenly flex-col h-full">
                            <span className="text-gray-500 text-sm mb-1 bg-[#F2F2F3] py-1 px-3 size-max rounded-xs">Hạn nộp hồ sơ: {jobDetail?.deadline}</span>
                            <h1 className="text-5xl font-bold mb-2">
                                {jobDetail?.title} <br />
                                {jobDetail?.titleDes}
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-blue-50 px-6 py-4 rounded-sm">
                                    <div className="text-sm text-gray-600">Thu nhập</div>
                                    <div className="font-medium">{jobDetail?.salary}</div>
                                </div>
                                <div className="bg-blue-50 px-6 py-4 rounded-sm">
                                    <div className="text-sm text-gray-600">Địa điểm</div>
                                    <div className="font-medium">{jobDetail?.location}</div>
                                </div>
                                <div className="bg-blue-50 px-6 py-4 rounded-sm">
                                    <div className="text-sm text-gray-600">Thời gian công việc</div>
                                    <div className="font-medium">{jobDetail?.nature}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Details */}
                <div className="grid md:grid-cols-[2fr,1fr] gap-8">
                    <div className="shadow-sm bg-white rounded-xl space-y-8 p-11">
                        {/* Mô tả công việc */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-600 mb-4">Mô tả công việc</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
                                {jobDetail?.jobDescription.map((item, index) => (
                                    <li key={index} className="text-base">{item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Yêu cầu ứng viên */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-600 mb-4">Yêu cầu ứng viên</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
                                {jobDetail?.candidateRequirements.map((item, index) => (
                                    <li key={index} className="text-base">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-blue-600 mb-4">Quyền lợi</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
                                {jobDetail?.benefits.map((item, index) => (
                                    <li key={index} className="text-base">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-blue-600 mb-4">Địa điểm làm việc</h3>
                            <p className="text-gray-600 text-base mb-6">Văn phòng Foundation for Future - 23B Tông Đản, Hoàn Kiếm, Hà Nội</p>

                            <h3 className="text-xl font-bold text-blue-600 mb-4">Thời gian làm việc</h3>
                            <p className="text-gray-600 text-base">Thứ 2 đến Thứ 6, từ 8h30 - 17h30 (nghỉ trưa 1 tiếng) | Có thể hỗ trợ làm việc remote linh hoạt</p>
                        </div>
                        <div className="md:sticky md:top-24 h-fit flex justify-center">
                            <div>
                                <button className="bg-blue-600 text-white py-3 px-12 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Ứng tuyển ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}