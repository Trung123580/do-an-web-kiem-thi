"use client"
import { useApp } from "@/context/ContextProvider"
import { dataJob } from "@/utils/contanst"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
export default function JobDetailPage() {
  const params = useParams()
  const slug: any = params["slug-job"]
  const { handles } = useApp()
  const jobDetail = dataJob.find((job) => job.slug === slug[0])
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
    <div className='min-h-screen bg-gray-50 pt-24 pb-8'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <nav className='bg-transparent'>
          <div className='mx-auto'>
            <div className='flex items-center h-12 mb-8'>
              <Link href='/ve-chung-toi/tham-gia-chung-toi' className='text-[#A0A3A9] hover:text-gray-900'>
                Tham gia cùng chúng tôi
              </Link>
              <span className='mx-2 text-2xl text-black'>&gt;</span>
              <span className={`${step === 2 || step === 3 ? "text-[#A0A3A9]" : "text-[#3A63ED]"}`}>{jobDetail?.titleDes}</span>
              {(step === 2 || step === 3) && (
                <>
                  <span className='mx-2 text-2xl text-black'>&gt;</span>
                  <span className='text-[#3A63ED]'>Ứng tuyển</span>
                </>
              )}
            </div>
          </div>
        </nav>
        {step !== 3 && (
          <div className='shadow-sm bg-white rounded-xl py-8 px-8 mb-8'>
            <div className='flex flex-col md:flex-row gap-6 items-center h-full'>
              <div className='rounded-xl flex-shrink-0 h-full'>
                <Image src={jobDetail?.imgDetail || ""} alt='Content Creator Icon' width={305} height={305} className='object-cover rounded-xl h-full' />
              </div>
              <div className='flex justify-evenly flex-col h-full flex-1'>
                <span className='text-gray-500 text-sm mb-1 bg-[#F2F2F3] py-1 px-3 size-max rounded-xs'>Hạn nộp hồ sơ: {jobDetail?.deadline}</span>
                <h1 className='text-3xl md:text-5xl font-bold mb-5 md:mb-2'>
                  {jobDetail?.title} <br />
                  {jobDetail?.titleDes}
                </h1>
                <div className='flex flex-row gap-6'>
                  <div className='bg-[#D8E0FB] px-6 py-4 rounded-sm basis-1/3 flex gap-2 flex-col'>
                    <div className='text-sm text-[#70747D] font-normal'>Thu nhập</div>
                    <div className='font-normal text-2xl'>{jobDetail?.salary}</div>
                  </div>
                  <div className='bg-[#D8E0FB] px-6 py-4 rounded-sm basis-1/3 flex gap-2 flex-col'>
                    <div className='text-sm text-[#70747D] font-normal'>Địa điểm</div>
                    <div className='font-normal text-2xl'>{jobDetail?.location}</div>
                  </div>
                  <div className='bg-[#D8E0FB] px-6 py-4 rounded-sm basis-1/3 flex gap-2 flex-col'>
                    <div className='text-sm text-[#70747D] font-normal'>Thời gian công việc</div>
                    <div className='font-normal text-2xl'>{jobDetail?.nature}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Job Details */}
        <div className='grid md:grid-cols-[2fr,1fr] gap-8'>
          <div className={`${step !== 3 ? "shadow-sm bg-white" : "bg-[#f9fafb]"} rounded-xl space-y-8 p-11`}>
            {step === 1 && (
              <>
                {/* Mô tả công việc */}
                <div>
                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Mô tả công việc</h3>
                  <ul className='list-disc list-inside space-y-2 text-gray-600 text-base'>
                    {jobDetail?.jobDescription.map((item, index) => (
                      <li key={index} className='text-base'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Yêu cầu ứng viên */}
                <div>
                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Yêu cầu ứng viên</h3>
                  <ul className='list-disc list-inside space-y-2 text-gray-600 text-base'>
                    {jobDetail?.candidateRequirements.map((item, index) => (
                      <li key={index} className='text-base'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Quyền lợi</h3>
                  <ul className='list-disc list-inside space-y-2 text-gray-600 text-base'>
                    {jobDetail?.benefits.map((item, index) => (
                      <li key={index} className='text-base'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Địa điểm làm việc</h3>
                  <p className='text-gray-600 text-base mb-6'>Văn phòng Foundation for Future - 23B Tông Đản, Hoàn Kiếm, Hà Nội</p>

                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Thời gian làm việc</h3>
                  <p className='text-gray-600 text-base'>Thứ 2 đến Thứ 6, từ 8h30 - 17h30 (nghỉ trưa 1 tiếng) | Có thể hỗ trợ làm việc remote linh hoạt</p>
                </div>
                {/* Mô tả công việc */}
                <div>
                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Mô tả công việc</h3>
                  <ul className='list-disc list-inside space-y-2 text-gray-600 text-base'>
                    {jobDetail?.jobDescription.map((item, index) => (
                      <li key={index} className='text-base'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <div>
                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Thông tin cá nhân</h3>
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
                  </div>
                </div>
                <div>
                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>CV hoặc sơ yếu lý lịch</h3>
                  <p className='text-black text-base mb-6'>Tải lên CV hoặc hồ sơ xin việc của bạn</p>
                  <label htmlFor='file' className='cursor-pointer max-w-[582px] border-2 border-[#CFD1D4] flex justify-center items-center h-[250px] rounded-lg '>
                    <div className='text-center text-[#A0A3A9]'>
                      <b className='text-black'>Tải lên một tập tin</b> hoặc kéo và thả vào đây <br /> Tải lên một tập tin hoặc kéo và thả vào đây <br /> Các tệp được chấp nhận: PDF, DOC, DOCX, JPEG và PNG <br />
                      có dung lượng tối đa 50MB.
                    </div>
                  </label>
                  <input type='file' id='file' className='hidden' />
                </div>
                <div>
                  <h3 className='text-[32px] font-bold text-[#2E4FBE] mb-4'>Thư giới thiệu</h3>
                  <p className='text-gray-600 text-base mb-6'>Một thư giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên nghiệp và gây ấn tượng hơn với nhà tuyển dụng.</p>
                  <textarea value={dataSubmit.textAria} onChange={(e) => setDataSubmit({ ...dataSubmit, textAria: e.target.value })} placeholder='Gửi một nội dung đến nhà tuyển dụng' className='outline-0 border-2 border-[#CFD1D4] px-8 py-4 rounded-lg text-lg w-full h-[250px] font-normal' id='coverLetter'></textarea>
                </div>
                <p className="mt-12 mb-12 text-lg text-[#A0A3A9]">Hồ sơ ứng tuyển bạn nhập dưới đây sẽ được gửi trực tiếp tới email của nhà tuyển dụng Blue Horizon Media tại bluehorizon.hr@gmail.com, đồng thời tự động được lưu vào kho dữ liệu CV trên hệ thống Foundation for Future để nhà tuyển dụng chọn lọc ứng viên. Bạn vui lòng kiểm tra địa chỉ email của mình thật chính xác trước khi ứng tuyển, cũng như luôn kiểm tra cả hòm thư rác (Spam), hòm thư Quảng Cáo (Promotions), hoặc hòm thư Cập Nhật (Updates) sau khi ứng tuyển để không bỏ lỡ các thông báo quan trọng từ nhà tuyển dụng.
                Bằng việc nhấn nút “Nộp hồ sơ ứng tuyển” đơn ứng tuyển, bạn xác nhận rằng Foundation for Future hoặc các đối tác của chúng tôi có thể gửi thông tin liên quan đến cơ hội nghề nghiệp tương tự qua email dựa trên các thông tin bạn cung cấp.</p>
              </form>
            )}
            {step === 3 && (
              <>
                <h1 className='text-5xl font-bold text-[#3A63ED] text-center mb-6'>Hồ sơ của bạn đã được gửi thành công!</h1>
                <div className='text-center text-lg font-normal'>
                  Cảm ơn bạn đã dành thời gian và tâm huyết để nộp hồ sơ cho Foundation for Future. <br /> Chúng tôi rất trân trọng sự quan tâm và mong muốn đóng góp của bạn cho cộng đồng người khiếm thính.
                </div>
                <div className='flex justify-center mt-4'>
                  <img src='/image/complete.png' className='object-cover max-w-full' alt='' />
                </div>
                <div className='text-center text-lg font-normal mt-4'>
                  Hồ sơ của bạn đang được đội ngũ của chúng tôi xem xét. <br /> Chúng tôi sẽ liên hệ với bạn trong vòng [3-5 ngày làm việc] qua email hoặc số điện thoại bạn đã cung cấp <br /> Trong thời gian chờ đợi, bạn có thể:
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
              </>
            )}
            {step !== 3 && (
              <div className='md:sticky md:top-24 h-fit flex justify-center'>
                <div>
                  <button
                    onClick={() => {
                      if (step === 1) {
                        setStep(2)
                      } else if (step === 2) {
                        setStep(3)
                      } else {
                      }
                    }}
                    className='bg-[#3A63ED] text-white py-3 text-2xl px-12 rounded-lg font-[Inter] hover:bg-[#3A63ED]/60 transition-colors'>
                    {step === 1 ? "Ứng tuyển ngay" : "Nộp hồ sơ ứng tuyển"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
