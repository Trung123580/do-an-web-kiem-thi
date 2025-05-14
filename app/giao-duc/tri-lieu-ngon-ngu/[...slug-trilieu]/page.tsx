'use client'
import { triLieuNgonNgu } from "@/utils/contanst";
import Image from "next/image";
import { useParams } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function page() {
    const params = useParams()
    const slug: any = params["slug-trilieu"]
    const khoahocDetail: any = triLieuNgonNgu.find((khoahoc) => khoahoc.slug === slug[0]);
    const [step, setStep] = useState(1)
    const [dataSubmit, setDataSubmit] = useState({
        fullName: "",
        email: "",
        phone: "",
        textAria: ""
    })
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        // await handles.onPostRegisterNotification(dataSubmit)
        // setDataSubmit({
        //   fullName: "",
        //   email: "",
        //   phone: "",
        // })
    }
    return (
        <>
            <nav className="bg-white pb-6 pt-8 max-w-7xl mx-auto relative mt-20 ">
                <div className="mx-auto px-4">
                    <div className="flex items-center ">
                        <Link
                            href="/giao-duc"
                            className="text-[#A0A3A9] hover:text-gray-900 line-clamp-1"
                        >
                            Giáo dục
                        </Link>
                        <span className="mx-2 text-2xl text-black">&gt;</span>
                        <Link href={'/giao-duc/tri-lieu-ngon-ngu'} className="text-[#A0A3A9] line-clamp-1">Trị liệu ngôn ngữ</Link>
                        <span className="mx-2 text-2xl text-black">&gt;</span>
                        <span className="text-[#3A63ED] line-clamp-1">{khoahocDetail?.title}</span>
                    </div>
                </div>
            </nav>
            <div className="bg-[#D8E0FB] px-4">
                <div className="py-14 max-w-7xl mx-auto relative">
                    <div className="mb-6">
                        {khoahocDetail?.organization.map((item: any, index: number) => (
                            <div key={index} className="flex items-center gap-3">
                                <Image src={item.img} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                                <div>
                                    <div className="text-[10px] text-[#70747D]">Đơn vị tổ chức</div>
                                    <div className="font-medium text-lg">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-5xl font-bold mb-4">{khoahocDetail?.title}</h1>
                    <p className="mb-16 text-lg max-w-4xl">{khoahocDetail?.description}</p>
                    <div className="bg-[#FFFFFF] rounded-xl shadow-sm p-8 absolute -bottom-75 sm:-bottom-36 md:-bottom-20 xl:-bottom-15 left-1/2 -translate-x-1/2  w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
                            <div className="flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]">
                                <span className="text-sm text-[#70747D]">Thời lượng buổi học</span>
                                <span className="text-2xl">{khoahocDetail?.time}</span>
                            </div>
                            <div className="flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]">
                                <span className="text-sm text-[#70747D]">Hình thức</span>
                                <span className="text-2xl">{khoahocDetail?.form}</span>
                            </div>
                            <div className="flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]">
                                <span className="text-sm text-[#70747D]">Chi phí buổi học</span>
                                <span className="text-2xl">{khoahocDetail?.price}</span>
                            </div>
                            <div className="flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]">
                                <span className="text-sm text-[#70747D]">Độ tuổi</span>
                                <span className="text-2xl">{khoahocDetail?.objectives}</span>
                            </div>
                            <div className="flex justify-center gap-1 flex-col px-5">
                                <span className="text-sm text-[#70747D]">Giáo viên</span>
                                <span className="text-2xl">{khoahocDetail?.teacher}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen pb-16 py-16 pt-88 sm:pt-48 md:pt-30 xl:pt-32 max-w-7xl mx-auto px-4">
                <div className="container mx-auto">
                    <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">Giới thiệu khóa học</h2>
                    <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.courseIntroduction ?? "" }} />
                    <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Đầu ra</h2>
                    <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.output ?? "" }} />
                    <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Nội dung khóa học</h2>
                    <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.content ?? "" }} />
                    <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Phản hồi về khóa học</h2>
                    <div className="gap-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {khoahocDetail?.commnents.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col p-6 items-start gap-3 mb-5  border-2 border-[#CFD1D4] rounded-lg">
                                <div className="flex">
                                    <Image src={item.avatar} alt="DNXH Logo" width={48} height={48} className="rounded-full" />
                                    <div className="flex flex-col justify-center ml-3">
                                        <span className="text-[10px]">Học viên</span>
                                        <span className="text-lg">{item.name}</span>
                                    </div>
                                </div>
                                <div className="text-base">{item.content}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col mt-18 gap-3.5 bg-[#F2F2F3] py-12 px-[72px] rounded-lg">
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">Đăng ký khóa học</h2>
                        <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.scienceRegistration ?? "" }} />
                    </div>
                </div>
            </div >
        </>
    );
}
