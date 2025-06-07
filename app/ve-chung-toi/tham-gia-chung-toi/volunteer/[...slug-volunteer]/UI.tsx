"use client"
import React, { useState } from "react"
import { dataVolunteer } from "@/utils/contanst"
import Image from "next/image"
import Link from "next/link"

const UI = ({ slug }: { slug: string }) => {
  const volunteerDetail = dataVolunteer.find((volunteer) => volunteer.slug === slug)
  const [step, setStep] = useState(1)
  const [dataSubmit, setDataSubmit] = useState({
    fullName: "",
    email: "",
    phone: "",
    textAria: "",
  })
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStep(3)
    // await handles.onPostRegisterNotification(dataSubmit)
    // setDataSubmit({
    //   fullName: "",
    //   email: "",
    //   phone: "",
    // })
  }
  return (
    <>
      {step === 1 && (
        <div className='min-h-screen pb-16 pt-[32px] mt-20 mx-auto max-w-7xl px-4'>
          <div className='container mx-auto'>
            <nav className='bg-white'>
              <div className='mx-auto'>
                <div className='flex items-center h-12 mb-[48px]'>
                  <Link href='/ve-chung-toi/tham-gia-chung-toi' className='text-[#A0A3A9] hover:text-gray-900 text-lg font-normal'>
                    Tham gia cùng chúng tôi
                  </Link>
                  <span className='mx-2 text-2xl text-black'>
                    <img src='/arrow.png' alt='' />
                  </span>
                  <span className='text-[#3A63ED] text-lg font-normal'>Tham gia tình nguyện</span>
                </div>
              </div>
            </nav>
            <h1 className='text-5xl font-bold mb-8'>{volunteerDetail?.title}</h1>
            <div className='bg-[#F2F2F3] rounded-xl shadow-sm p-8 mb-8'>
              <div className='flex flex-col md:flex-row gap-3 h-full'>
                <div className='flex flex-col basis-1/3 gap-5'>
                  {volunteerDetail?.organization.map((item, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <Image src={item.img} alt='DNXH Logo' width={40} height={40} className='rounded-full' />
                      <div>
                        <div className='text-xs text-gray-500'>Đơn vị tổ chức</div>
                        <div className='font-medium'>{item.title}</div>
                      </div>
                    </div>
                  ))}
                  {volunteerDetail?.sponsoring.map((item, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <Image src={item.img} alt='DNXH Logo' width={40} height={40} className='rounded-full' />
                      <div>
                        <div className='text-xs text-gray-500'>Đơn vị tài trợ</div>
                        <div className='font-medium'>{item.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='basis-2/3'>
                  <p className='text-[#000000] mb-4 text-base'>{volunteerDetail?.description}</p>
                  <ul className='space-y-1 text-base'>
                    <li>
                      <strong>Thời gian hoạt động:</strong> {volunteerDetail?.time}
                    </li>
                    <li>
                      <strong>Địa điểm:</strong> {volunteerDetail?.location}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Banner Image */}
            <div className='rounded-xl overflow-hidden mb-8 shadow-sm'>
              <img src={volunteerDetail?.img || ""} alt='Workshop Volunteer Image' className='w-full rounded-xl h-[400px] object-cover' />
            </div>

            {/* Details Sections */}
            <div className='rounded-xl p-8 space-y-8 mb-8'>
              {/* Yêu cầu */}
              <div>
                <h2 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Yêu cầu</h2>
                <ul className='list-disc list-inside text-[#111827] text-base'>
                  {volunteerDetail?.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Vai trò */}
              <div>
                <h2 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Vai trò</h2>
                <ul className='list-disc list-inside text-[#111827] text-base'>
                  {volunteerDetail?.roles.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Quyền lợi */}
              <div>
                <h2 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Quyền lợi</h2>
                <ul className='list-disc list-inside text-[#111827] text-base'>
                  {volunteerDetail?.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Apply Button */}
            <div className='text-center'>
              <button onClick={() => setStep(2)} className='bg-[#3a63ed] text-white py-3 px-16 rounded-lg font-medium  hover:bg-[#89A1F4]  transition-colors text-lg'>
                Trở thành tình nguyện viên
              </button>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className='min-h-screen bg-[#F1F2F3] mt-20 py-8 pb-16'>
         <nav className='bg-transparent max-w-7xl mx-auto'>
          <div className='mx-auto'>
            <div className='flex items-center h-12 mb-8'>
              <Link href='/ve-chung-toi/tham-gia-chung-toi' className='text-lg font-normal text-[#A0A3A9] hover:text-gray-900 text-lg font-normal'>
                Tham gia cùng chúng tôi
              </Link>
              <span className='mx-2 text-2xl text-black'><img src="/arrow.png" alt="" /></span>
              <span className='text-[#3A63ED] text-lg font-normal'>Tham gia tình nguyện</span>
            </div>
          </div>
        </nav>
          <div className='container mx-auto px-[80px] py-[56px] max-w-7xl bg-white rounded-2xl'>
            <form onSubmit={handleSubmit}>
              <div>
                <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Thông tin cá nhân</h3>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1 text-sm font-bold'>
                    <label htmlFor='fullName'>Họ và tên</label>
                    {/* <input
                  value={dataSubmit.fullName}
                  onChange={(e) => setDataSubmit({ ...dataSubmit, fullName: e.target.value })}
                  placeholder='Họ và tên*'
                  className='outline-0 border-2 border-[#CFD1D4] px-8 py-4 rounded-lg text-lg max-w-[582px] font-normal'
                  type='text'
                  id='name'
                /> */}
                    <div className='relative w-full'>
                      <label htmlFor='fullName' className={`${dataSubmit.fullName.length !== 0 ? "hidden" : "block"} text-base font-normal absolute left-8 text-[#A0A3A9] top-1/2 -translate-y-1/2`}>
                        Họ và tên <span className='text-red-600'>*</span>
                      </label>
                      <input
                        required
                        id='fullName'
                        value={dataSubmit.fullName}
                        onChange={(e) => setDataSubmit({ ...dataSubmit, fullName: e.target.value })}
                        className='outline-0 border-2 border-[#CFD1D4] px-7 py-4 rounded-lg w-full text-lg max-w-[582px] font-normal'
                      />
                    </div>
                  </div>

                  <div className='flex flex-col gap-1 text-sm  font-bold'>
                    <label htmlFor='email'>Email</label>
                    {/* <input
                  value={dataSubmit.email}
                  onChange={(e) => setDataSubmit({ ...dataSubmit, email: e.target.value })}
                  placeholder='Email*'
                  className='outline-0 border-2 border-[#CFD1D4] px-7 py-4 rounded-lg text-lg max-w-[582px]  font-normal'
                  type='text'
                  id='email'
                /> */}
                    <div className='relative w-full'>
                      <label htmlFor='email' className={`${dataSubmit.email.length !== 0 ? "hidden" : "block"} text-base font-normal absolute left-8 text-[#A0A3A9] top-1/2 -translate-y-1/2`}>
                        Email <span className='text-red-600'>*</span>
                      </label>
                      <input
                        required
                        id='email'
                        type='email'
                        value={dataSubmit.email}
                        onChange={(e) => setDataSubmit({ ...dataSubmit, email: e.target.value })}
                        className='outline-0 border-2 border-[#CFD1D4] px-7 py-4 rounded-lg w-full text-lg max-w-[582px] font-normal'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col gap-1 text-sm  font-bold'>
                    <label htmlFor='phone'>Số điện thoại</label>
                    {/* <input
                  value={dataSubmit.phone}
                  onChange={(e) => setDataSubmit({ ...dataSubmit, phone: e.target.value })}
                  placeholder='Số điện thoại*'
                  className='outline-0 border-2 border-[#CFD1D4] px-7 py-4 rounded-lg text-lg max-w-[582px] font-normal'
                  type='text'
                  id='phone'
                /> */}
                    <div className='relative w-full'>
                      <label htmlFor='phone' className={`${dataSubmit.phone.length !== 0 ? "hidden" : "block"} text-base font-normal absolute left-8 text-[#A0A3A9] top-1/2 -translate-y-1/2`}>
                        Số điện thoại <span className='text-red-600'>*</span>
                      </label>
                      <input
                        required
                        id='phone'
                        type='number'
                        value={dataSubmit.phone}
                        onChange={(e) => setDataSubmit({ ...dataSubmit, phone: e.target.value })}
                        className='outline-0 border-2 border-[#CFD1D4] px-7 py-4 rounded-lg w-full text-lg max-w-[582px] font-normal'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-2 mt-[25px]'>CV hoặc sơ yếu lý lịch</h3>
                <p className='text-black text-base mb-6'>Tải lên CV hoặc hồ sơ xin việc của bạn</p>
                <label htmlFor='file' className='cursor-pointer max-w-[582px] border-2 border-[#CFD1D4] flex justify-center items-center h-[250px] rounded-lg '>
                  <div className='text-center text-[#A0A3A9]'>
                    <b className='text-black'>Tải lên một tập tin</b> hoặc kéo và thả vào đây <br /> Tải lên một tập tin hoặc kéo và thả vào đây <br /> Các tệp được chấp nhận: PDF, DOC, DOCX, JPEG và
                    PNG <br />
                    có dung lượng tối đa 50MB.
                  </div>
                </label>
                <input type='file' id='file' className='hidden' />
              </div>
              <div>
                <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-2 mt-[25px]'>Thư giới thiệu</h3>
                <p className='text-gray-600 text-base mb-6'>Một thư giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên nghiệp và gây ấn tượng hơn với nhà tuyển dụng.</p>
                <textarea
                  value={dataSubmit.textAria}
                  onChange={(e) => setDataSubmit({ ...dataSubmit, textAria: e.target.value })}
                  placeholder='Gửi một nội dung đến nhà tuyển dụng'
                  className='outline-0 border-2 border-[#CFD1D4] px-7 py-4 rounded-lg text-lg w-full h-[250px] font-normal'
                  id='coverLetter'></textarea>
              </div>
              {/* <p className='mt-12 mb-12 text-lg text-[#A0A3A9]'>
            Hồ sơ ứng tuyển bạn nhập dưới đây sẽ được gửi trực tiếp tới email của nhà tuyển dụng Blue Horizon Media tại bluehorizon.hr@gmail.com, đồng thời tự động được lưu vào kho dữ liệu CV
            trên hệ thống Foundation for Future để nhà tuyển dụng chọn lọc ứng viên. Bạn vui lòng kiểm tra địa chỉ email của mình thật chính xác trước khi ứng tuyển, cũng như luôn kiểm tra cả
            hòm thư rác (Spam), hòm thư Quảng Cáo (Promotions), hoặc hòm thư Cập Nhật (Updates) sau khi ứng tuyển để không bỏ lỡ các thông báo quan trọng từ nhà tuyển dụng. Bằng việc nhấn nút
            “Nộp hồ sơ ứng tuyển” đơn ứng tuyển, bạn xác nhận rằng Foundation for Future hoặc các đối tác của chúng tôi có thể gửi thông tin liên quan đến cơ hội nghề nghiệp tương tự qua email
            dựa trên các thông tin bạn cung cấp.
          </p> */}
          <div className="flex items-center justify-center mt-12">
             <button
              className='bg-[#3A63ED] text-white h-[71px] text-2xl px-[72px] rounded-lg hover:bg-[#89A1F4] transition-colors'>
              Nộp hồ sơ ứng tuyển
            </button>
          </div>
            </form>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="mt-20 py-8">
          <h1 className='text-5xl font-bold text-[#3A63ED] text-center mb-6'>Hồ sơ của bạn đã được gửi thành công!</h1>
          <div className='text-center text-lg font-normal'>
            Cảm ơn bạn đã dành thời gian và tâm huyết để nộp hồ sơ cho Foundation for Future. <br /> Chúng tôi rất trân trọng sự quan tâm và mong muốn đóng góp của bạn cho cộng đồng người khiếm
            thính.
          </div>
          <div className='flex justify-center mt-4'>
            <img src='/image/complete.png' className='object-cover max-w-full' alt='' />
          </div>
          <div className='text-center text-lg font-normal mt-4'>
            Hồ sơ của bạn đang được đội ngũ của chúng tôi xem xét. <br /> Chúng tôi sẽ liên hệ với bạn trong vòng [3-5 ngày làm việc] qua email hoặc số điện thoại bạn đã cung cấp <br /> Trong
            thời gian chờ đợi, bạn có thể:
          </div>
          <ul className='flex justify-center flex-col w-full space-y-6 text-gray-600 text-base mt-4'>
            <li className='flex text-lg font-bold text-[#3A63ED] items-center justify-center gap-2 group'>
              <Link href={"/ve-chung-toi/tham-gia-chung-toi"} className='group-hover:-translate-x-1 transition-all duration-1000'>
                Tìm hiểu các cơ hội hợp tác khác
              </Link>
              <img className='group-hover:translate-x-1 transition-all duration-1000' src='/image/arrow2.png' alt='' />
            </li>
            <li className='flex text-lg font-bold text-[#3A63ED] items-center justify-center gap-2 group'>
              <Link href={"/ve-chung-toi"} className='group-hover:-translate-x-1 transition-all duration-1000'>
                Về chúng tôi
              </Link>
              <img src='/image/arrow2.png' alt='' className='group-hover:translate-x-1 transition-all duration-1000' />
            </li>
            <li className='flex text-lg font-bold text-[#3A63ED] items-center justify-center gap-2 group'>
              <Link href={"/thong-tin/tin-tuc"} className='group-hover:-translate-x-1 transition-all duration-1000'>
                Các tin tức mới
              </Link>
              <img src='/image/arrow2.png' alt='' className='group-hover:translate-x-1 transition-all duration-1000' />
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default UI
