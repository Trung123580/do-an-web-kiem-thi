'use client'
import { dataSukien } from "@/utils/contanst";
import Image from "next/image";
import { useParams } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function sukienDetailPage() {
  const params = useParams()
  const slug: any = params["slug-sukien"]
  const sukienDetail: any = dataSukien.find((sukien) => sukien.slug === slug[0]);
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
    <div className="min-h-screen pb-16 py-16 pt-20 max-w-7xl mx-auto">
      <div className="container mx-auto">
        {step !== 3 && (
          <>
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
              <Link
                href="/cong-dong/hoat-dong"
                className="text-[#A0A3A9] hover:text-gray-900"
              >
               Hoạt động
              </Link>
              <span className="mx-2 text-2xl text-black">&gt;</span>
              <span className="text-[#3A63ED]">Sự kiện</span>
            </div>
          </div>
        </nav>
        <h1 className="text-4xl font-bold mb-8">{sukienDetail?.title}</h1>
        <div className="bg-[#F2F2F3] rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-row">
            <div className="flex flex-col basis-1/3 gap-5">
              {sukienDetail?.organization.map((item: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={item.img} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
              {sukienDetail?.sponsoring.map((item: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={item.img} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="text-xs text-gray-500">Đơn vị tài trợ</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="basis-2/3">
              <p className="text-gray-700 mb-4 text-base">{sukienDetail?.description}</p>
              <ul className="space-y-1 text-base">
                <li>
                  <strong>Thời gian hoạt động:</strong> {sukienDetail?.time}
                </li>
                <li>
                  <strong>Địa điểm:</strong> {sukienDetail?.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
          </>
        )}
        <div className="rounded-xl py-8 space-y-8">
          {step === 1 && <>
            <div className="text-base" dangerouslySetInnerHTML={{ __html: sukienDetail?.content ?? "" }} />
            <div className="rounded-xl overflow-hidden mb-2 shadow-sm">
              <Image src={sukienDetail?.img || ""} alt="Workshop Volunteer Image" width={1000} height={400} className="w-full h-auto object-cover" />
            </div>
          </>}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="rounded-xl">
              <div >
                <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Thông tin đăng ký</h3>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1 text-sm font-bold'>
                    <label htmlFor='name'>Họ và tên</label>
                    <input value={dataSubmit.fullName} onChange={(e) => setDataSubmit({ ...dataSubmit, fullName: e.target.value })} placeholder='Họ và tên*' className='outline-0 border-2 border-[#CFD1D4] px-8 py-4 rounded-lg text-lg max-w-[582px] font-normal' type='text' id='name' />
                  </div>
                  <div className='flex flex-col gap-1 text-sm  font-bold'>
                    <label htmlFor='email'>Email</label>
                    <input value={dataSubmit.email} onChange={(e) => setDataSubmit({ ...dataSubmit, email: e.target.value })} placeholder='Email*' className='outline-0 border-2 border-[#CFD1D4] px-8 py-4 rounded-lg text-lg max-w-[582px]  font-normal' type='text' id='email' />
                  </div>
                  <div className='flex flex-col gap-1 text-sm  font-bold'>
                    <label htmlFor='phone'>Số điện thoại</label>
                    <input value={dataSubmit.phone} onChange={(e) => setDataSubmit({ ...dataSubmit, phone: e.target.value })} placeholder='Số điện thoại*' className='outline-0 border-2 border-[#CFD1D4] px-8 py-4 rounded-lg text-lg max-w-[582px] font-normal' type='text' id='phone' />
                  </div>
                  <div className='flex flex-col gap-1 text-sm  font-bold '>
                    <span >Giới tính</span>
                    <div className="pl-4 flex flex-col gap-4 text-[#A0A3A9]">
                      <div className='gap-3 flex text-lg font-normal'>
                        <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label htmlFor="html">Nam</label><br />
                      </div>
                      <div className='gap-3 flex text-lg font-normal'>
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label htmlFor="css">Nữ</label><br />
                      </div><div className='gap-3 flex text-lg font-normal'>
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                        <label htmlFor="javascript">Khác</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4 mt-10'>Câu hỏi</h3>
                <p className='text-gray-600 text-base mb-6'>Bạn có nhu cầu hỗ trợ nào khi tham gia sự kiện?</p>
                <textarea value={dataSubmit.textAria} onChange={(e) => setDataSubmit({ ...dataSubmit, textAria: e.target.value })} placeholder='Ví dụ: phiên dịch ngôn ngữ ký hiệu, hỗ trợ di chuyển...' className='outline-0 border-2 border-[#CFD1D4] px-8 py-4 rounded-lg text-lg w-full h-[250px] font-normal' id='coverLetter'></textarea>
              </div>
            </form>
          )}
        </div>
        {step === 3 && (
          <>
            <h1 className='text-5xl font-bold text-[#3A63ED] text-center mb-6'>Đăng ký tham gia thành công!</h1>
            <div className='text-center text-lg font-normal'>
              Chúng tôi đã ghi nhận thông tin của bạn và sẽ gửi email xác nhận trong thời gian sớm nhất.<br />Vui lòng kiểm tra hộp thư (kể cả mục Spam/thư rác) để không bỏ lỡ thông tin quan trọng trước sự kiện.
            </div>
            <div className='flex justify-center mt-4'>
              <img src='/image/complete.png' className='object-cover max-w-full' alt='' />
            </div>
            <ul className='flex justify-center flex-col w-full space-y-6 text-gray-600 text-base mt-4'>
              <li className='flex text-lg font-bold text-[#3A63ED] items-center justify-center gap-2 group'>
                <Link href={"/thong-tin/hoat-dong"} className='group-hover:-translate-x-1 transition-all duration-1000'>
                  Quay về trang hoạt động
                </Link>
                <img src='/image/arrow2.png' alt='' className='group-hover:translate-x-1 transition-all duration-1000' />
              </li>
            </ul>
          </>
        )}
        {step !== 3 && <div className="text-center">
          <button onClick={() => {
            if (step === 1) {
              setStep(2)
            } else if (step === 2) {
              setStep(3)
            } else {
            }
          }} className="bg-blue-600 text-white py-3 px-16 rounded-lg font-light hover:bg-blue-700 transition-colors text-lg">{step === 1 ? "Đăng ký tham gia" : "Đăng ký ngay"}</button>
        </div>}
      </div>
    </div >
  );
}
