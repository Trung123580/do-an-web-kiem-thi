"use client"
import { khoaHocTrucTuyen } from "@/utils/contanst"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import Button from "@/components/Button"
import Lesson from "@/app/components/Lesson"
const lectures = [
  { title: "Giới thiệu về ngôn ngữ ký hiệu và cộng đồng người khiếm thính", duration: "15:30" },
  { title: "Bảng chữ cái ngôn ngữ ký hiệu", duration: "8:00" },
  { title: "Chào hỏi và giới thiệu về bản thân", duration: "7:30" },
  { title: "Từ vựng chủ đề gia đình và bạn bè", duration: "6:30" },
  { title: "Từ vựng chủ đề động vật", duration: "5:00" },
  { title: "Từ vựng chủ đề thực phẩm và đồ uống", duration: "6:30" },
  { title: "Biểu cảm khuôn mặt và ngữ điệu ký hiệu", duration: "7:00" },
  { title: "Câu hỏi – câu trả lời thường gặp", duration: "6:00" },
  { title: "Giao tiếp trong lớp học và nơi công cộng", duration: "6:30" },
  { title: "Văn hóa người khiếm thính", duration: "6:30" },
  { title: "Ôn tập và định hướng nâng cao", duration: "6:30" },
  { title: "Nội dung bổ sung cho bài giảng 12.", duration: "6:30" },
]
const textAria = `
  <p class="text-black text-sm mb-4 leading-relaxed pl-4">
  Vui lòng tiến hành thanh toán để tải xuống trọn bộ 12 video bài giảng của khóa học Ngôn ngữ Ký hiệu Cơ Bản.
  Sau khi thanh toán hoàn tất, khóa học sẽ tự động được tải về thiết bị của bạn – vui lòng kiểm tra trong mục “Tải xuống” hoặc thư mục File.
  </p>	
  <p class="text-black text-sm leading-relaxed pl-4">
    📌 Nếu khóa học không được tự động tải xuống, hoặc bạn gặp bất kỳ sự cố nào liên quan đến nội dung bài giảng, đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ nhanh chóng:
  </p>
  <p class="text-black text-sm leading-relaxed pl-4">
    Email: hlcsvietnam@gmail.com
  </p>
  <p class="text-black text-sm leading-relaxed pl-4">
  Hotline/Zalo: 0936 253 215
  </p>
  <p class="text-black text-sm mb-4 leading-relaxed pl-4">
    hoặc liên hệ Foundation for Future để được hỗ trợ
  </p>
  `
export default function page() {
  const params = useParams()
  const router = useRouter()
  const slug: any = params["slug-khoahoc"]
  const khoahocDetail: any = khoaHocTrucTuyen.find((khoahoc) => khoahoc.slug === slug[0])
  const [step, setStep] = useState(1 )
  const [countdown, setCountdown] = useState(10);
  const handleDownload = () => {
    fetch('/pdf-mau.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "downloaded-file.pdf";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };
  useEffect(() => {
    let timer: any
    if (step === 3) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleDownload()
            // window.location.href = '/pdf-mau.pdf';
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step]);
  const [dataSubmit, setDataSubmit] = useState({
    fullName: "",
    email: "",
    phone: "",
    textAria: "",
    donationType: 1,
    selectedAmount: 10,
    customAmount: "",
    paymentMethod: "",
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setDataSubmit((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

      const handlePaymentMethodChange = (method: string) => {
    setDataSubmit((prev) => ({
      ...prev,
      paymentMethod: method,
    }))
  }
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
  const goToVideo = (lecture: string) => {
    if (!khoahocDetail.free) return
    router.push(`/giao-duc/ngon-ngu-ky-hieu/khoa-hoc-ngoai-tuyen/${khoahocDetail.slug}/${lecture}`)
  }
  if (slug?.length === 2) return <Lesson khoahocDetail={khoahocDetail}/>
  return (
    <>
      {step === 1 && (
        <nav className='bg-white pb-6 pt-8 max-w-7xl mx-auto relative mt-20 '>
          <div className='mx-auto px-4'>
            <div className='flex items-center'>
              <Link href='/giao-duc/ngon-ngu-ky-hieu' className='text-[#A0A3A9] hover:text-gray-900 text-lg font-normal line-clamp-1'>
                Ngôn ngữ ký hiệu
              </Link>
              <span className='mx-2 text-2xl text-black'><img src="/arrow.png" alt="" /></span>
              <Link href={"/giao-duc/ngon-ngu-ky-hieu/khoa-hoc-ngoai-tuyen"} className='text-[#A0A3A9] line-clamp-1 text-lg font-normal'>
                Khóa học trực tuyến
              </Link>
              <span className='mx-2 text-2xl text-black'><img src="/arrow.png" alt="" /></span>
              <span className='text-[#3A63ED] line-clamp-1 text-lg font-normal'>{khoahocDetail?.title}</span>
            </div>
          </div>
        </nav>
      )}
      <div className='bg-[#D8E0FB] px-4'>
        <div className='py-14 max-w-7xl mx-auto relative'>
          {step === 1 && (
            <>
              <div className='mb-6'>
                {khoahocDetail?.organization.map((item: any, index: number) => (
                  <div key={index} className='flex items-center gap-3'>
                    <Image src={item.img} alt='DNXH Logo' width={40} height={40} className='rounded-full' />
                    <div>
                      <div className='text-[10px] text-[#70747D]'>Đơn vị tổ chức</div>
                      <div className='font-medium text-lg'>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
              <h1 className='text-5xl font-bold mb-4'>{khoahocDetail?.title}</h1>
              <p className='mb-16 text-lg max-w-4xl'>{khoahocDetail?.description}</p>
              {khoahocDetail.free ? (
                <>
                  <div className='bg-[#FFFFFF] rounded-xl shadow-sm p-8 absolute -bottom-75 sm:-bottom-36 md:-bottom-20 xl:-bottom-15 left-1/2 -translate-x-1/2  w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4'>
                      <div className='flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]'>
                        <span className='text-sm text-[#70747D]'>Tổng thời lượng</span>
                        <span className='text-2xl'>{khoahocDetail?.time}</span>
                      </div>
                      <div className='flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]'>
                        <span className='text-sm text-[#70747D]'>Chi phí khóa học</span>
                        <span className='text-2xl'>Miễn phí</span>
                      </div>
                      <div className='flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]'>
                        <span className='text-sm text-[#70747D]'>Đối tượng</span>
                        <span className='text-2xl'>{khoahocDetail?.objectives}</span>
                      </div>
                      <div className='flex justify-center gap-1 flex-col px-5'>
                        <span className='text-sm text-[#70747D]'>Giảng viên</span>
                        <span className='text-2xl text-nowrap'>{khoahocDetail?.teacher}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='bg-[#FFFFFF] rounded-xl shadow-sm p-8 absolute -bottom-75 sm:-bottom-36 md:-bottom-20 xl:-bottom-15 left-1/2 -translate-x-1/2  w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4'>
                      <div className='flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]'>
                        <span className='text-sm text-[#70747D]'>Khóa học</span>
                        <span className='text-2xl'>{khoahocDetail?.day}</span>
                      </div>
                      <div className='flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]'>
                        <span className='text-sm text-[#70747D]'>Chi phí khóa học</span>
                        <span className='text-2xl'>{khoahocDetail?.price}</span>
                      </div>
                      <div className='flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]'>
                        <span className='text-sm text-[#70747D]'>Tổng thời lượng</span>
                        <span className='text-2xl'>{khoahocDetail?.time}</span>
                      </div>
                      <div className='flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]'>
                        <span className='text-sm text-[#70747D]'>Đối tượng</span>
                        <span className='text-2xl'>{khoahocDetail?.objectives}</span>
                      </div>
                      <div className='flex justify-center gap-1 flex-col px-5'>
                        <span className='text-sm text-[#70747D] '>Giảng viên</span>
                        <span className='text-2xl text-nowrap'>{khoahocDetail?.teacher}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
          {step === 2 && (
            <div className="mt-20">
              <h1 className='text-5xl font-bold mb-2.5'>Thanh toán khóa học</h1>
              <p className='mb-16 text-lg max-w-4xl'>
                Vui lòng tiến hành thanh toán để tải xuống trọn bộ 12 video bài giảng của khóa học Ngôn ngữ Ký hiệu Cơ Bản. Sau khi thanh toán hoàn tất, khóa học sẽ tự động được tải về thiết bị của
                bạn – vui lòng kiểm tra trong mục “Tải xuống” hoặc thư mục File.
              </p>
            </div>
          )}
          {step === 3 && (
            <div className="mt-20">
              <h1 className='text-5xl font-bold mb-2.5'>Thanh toán khóa học học thành công!</h1>
              <p className='mb-16 text-lg max-w-4xl'>
                Vui lòng tiến hành thanh toán để tải xuống trọn bộ 12 video bài giảng của khóa học Ngôn ngữ Ký hiệu Cơ Bản. Sau khi thanh toán hoàn tất, khóa học sẽ tự động được tải về thiết bị của
                bạn – vui lòng kiểm tra trong mục “Tải xuống” hoặc thư mục File.
              </p>
            </div>
          )}
        </div>
      </div>
      {step === 1 && (
        <>
          <div className='min-h-screen py-16 pb-[96px]  max-w-7xl mx-auto'>
            <div className='container mx-auto'>
              <h2 className='text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10'>Giới thiệu khóa học</h2>
              <div
                className='text-base'
                dangerouslySetInnerHTML={{
                  __html: khoahocDetail?.courseIntroduction,
                }}
              />
              <h2 className='text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10'>Đầu ra</h2>
              <div
                className='text-base'
                dangerouslySetInnerHTML={{
                  __html: khoahocDetail?.output,
                }}
              />
              <h2 className='text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10'>Nội dung khóa học</h2>
              <div className='text-base space-y-2'>
                {khoahocDetail.lectures.map((lecture: any, index: number) => (
                  <div
                    key={index}
                    className='flex gap-[90px] items-start cursor-pointer hover:text-[#2E4FBE]'
                    onClick={() => {
                      goToVideo(lecture.slug)
                    }}>
                    <div className='flex gap-1'>
                      <span className='font-bold text-nowrap'>Bài giảng {index + 1}:</span> <span className='grow line-clamp-1'>{lecture.title}</span>
                    </div>
                    <span className='text-gray-400 text-sm'>{lecture.duration}</span>
                  </div>
                ))}
              </div>
              <h2 className='text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10'>Phản hồi về khóa học</h2>
              <div className='gap-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {khoahocDetail?.commnents.map((item: any, index: number) => (
                  <div key={index} className='flex flex-col p-6 items-start gap-3 mb-5  border-2 border-[#CFD1D4] rounded-lg'>
                    <div className='flex'>
                      <Image src={item.avatar} alt='DNXH Logo' width={48} height={48} className='rounded-full' />
                      <div className='flex flex-col justify-center ml-3'>
                        <span className='text-[10px] text-[#A5A8AD]'>Học viên</span>
                        <span className='text-lg'>{item.name}</span>
                      </div>
                    </div>
                    <div className='text-base'>{item.content}</div>
                  </div>
                ))}
              </div>
              {!khoahocDetail.free && (
                <div className='flex flex-col mt-18 gap-3.5 bg-[#F2F2F3] py-12 px-[72px] rounded-lg'>
                  <h2 className='text-[32px] font-bold text-[#2E4FBE] mb-2'>Đăng ký khóa học</h2>
                  <div className='text-base' dangerouslySetInnerHTML={{ __html: khoahocDetail?.scienceRegistration }} />
                  <button type='button' className='bg-black hover:bg-[#70747D] w-max rounded-lg mx-auto !py-4 !px-14 text-white !text-[18px] font-normal' onClick={() => setStep(2)}>
                    Thanh toán khóa học
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <form onSubmit={handleSubmit} className='pt-14 max-w-7xl mx-auto relative p-10 space-y-6'>
            {/* Thông tin cá nhân */}
            <div>
                <div className='px-[30px] md:px-[56px] mt-8 text-[#111827] h-[90%] overflow-y-auto '>
                  <h2 className='text-xl font-bold mb-4'>Thông tin cá nhân</h2>
                  <div className='relative'>
                    <label htmlFor='email' className={`${dataSubmit.fullName?.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-[40%] -translate-y-1/2`}>
                      Họ tên <span className='text-red-600'>*</span>
                    </label>
                    <input required name='fullName' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3' value={dataSubmit.fullName} onChange={handleInputChange} />
                  </div>
                  {/* <input
                  name='fullName'
                  value={dataSubmit.fullName}
                  onChange={handleInputChange}
                  className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3'
                  placeholder='Họ tên*'
                  required
                /> */}
                  <div className='relative'>
                    <label htmlFor='email' className={`${dataSubmit.fullName?.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-[40%] -translate-y-1/2`}>
                      Email <span className='text-red-600'>*</span>
                    </label>
                    <input required name='email' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3' value={dataSubmit.email} onChange={handleInputChange} />
                  </div>
                  {/* <input
                  type='email'
                  value={dataSubmit.email}
                  onChange={handleInputChange}
                  className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3'
                  placeholder='Email*'
                  required
                /> */}

                  <div className='relative'>
                    <label htmlFor='email' className={`${dataSubmit.fullName?.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-[40%] -translate-y-1/2`}>
                      Số điện thoại <span className='text-red-600'>*</span>
                    </label>
                    <input required name='phone' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3' value={dataSubmit.phone} onChange={handleInputChange} type='number' />
                  </div>
                  {/* <input
                  name='phone'
                  value={dataSubmit.phone}
                  onChange={handleInputChange}
                  className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3'
                  placeholder='Số điện thoại*'
                  required
                /> */}
                  <h3 className='text-xl font-bold mb-4'>Phương thức thanh toán</h3>
                  <div className='font-normal text-[18px] border-2 border-[#cfd1d4] rounded-lg'>
                    <label className='flex items-start gap-2 border-b-2 border-[#cfd1d4] px-3 py-3'>
                      <input type='radio' name='paymentMethod' value='momo' checked={dataSubmit.paymentMethod === "momo"} onChange={(e) => handlePaymentMethodChange(e.target.value)} />
                      <div className='-mt-1.5'>
                        Ví MoMo
                        <img src='/image/momo.png' alt='MoMo' className='h-10' />
                      </div>
                    </label>
                    <label className='flex items-start gap-2 border-b-2 border-[#cfd1d4] px-3 py-3'>
                      <input type='radio' name='paymentMethod' value='credit' checked={dataSubmit.paymentMethod === "credit"} onChange={(e) => handlePaymentMethodChange(e.target.value)} />
                      <div className='-mt-1.5'>
                        Thẻ tín dụng hoặc thẻ ghi nợ
                        <div className='flex items-center gap-2'>
                          <img src='/image/visa-all.png' alt='Visa' className='h-10' />
                        </div>
                        {dataSubmit.paymentMethod === "credit" && (
                          <>
                            <div className='flex flex-col gap-2 mt-6'>
                              <input type='text' placeholder='Số thẻ' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2' />
                              <div className='flex gap-2'>
                                <input placeholder='Ngày hết hạn' type='text' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2' />
                                <input type='text' placeholder='Mã bảo mật' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2' />
                              </div>
                              <p className='font-normal text-[10px] text-[#A0A3A9]'>
                                Mọi thông tin trao đổi trong quá trình quyên góp thẻ đều được mã hóa TLS. Dữ liệu này không thể bị phát hiện, chặn hoặc sử dụng bởi bên thứ ba. Thông tin cũng không
                                được lưu trữ trong hệ thống dữ liệu của chúng tôi.
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </label>
                    <label className='flex items-start gap-2 px-3 py-3'>
                      <input type='radio' name='paymentMethod' value='paypal' checked={dataSubmit.paymentMethod === "paypal"} onChange={(e) => handlePaymentMethodChange(e.target.value)} />
                      <div className='-mt-1.5'>
                        Thẻ tín dụng
                        <div className='flex items-center gap-2'>
                          <img src='/image/paypal.png' alt='Visa' className='h-10' />
                        </div>
                      </div>
                    </label>
                  </div>
                  {dataSubmit.paymentMethod && (
                    <>
                      <h2 className='text-xl font-bold mb-4 mt-5'>Tóm tắt</h2>
                      <div className='bg-[#FEF5D0] *:flex  *:items-center *:justify-between p-4 rounded-lg gap-1 flex flex-col'>
                        <div>
                          <span>{dataSubmit.donationType === 1 ? "Một lần" : "Hàng tháng"}</span>
                          <span className='font-bold'>${dataSubmit.customAmount || dataSubmit.selectedAmount}</span>
                        </div>
                        <div>
                          <span>phương thức thanh toán</span>
                          <span className='font-bold'>{dataSubmit.paymentMethod}</span>
                        </div>
                      </div>
                      <p className='text-[10px] text-[#A0A3A9] my-4'>
                        Bạn xác nhận rằng bạn đã trên 18 tuổi và đồng ý nhận email từ Foundation for Future về công việc của chúng tôi và cách bạn có thể giúp đỡ. Nếu bạn cung cấp số điện thoại của
                        mình, chúng tôi cũng có thể gọi cho bạn. Bạn có thể chọn không tham gia bất cứ lúc nào. Đối với gây quỹ hằng tháng chúng tôi sẽ tự động tính phí cho đến khi bạn huỷ đăng ký,
                        hãy liên hệ đến chúng tôi để huỷ đăng ký.
                      </p>
                      <div className='bg-[#F2F2F3] gap-2 p-6 rounded-lg flex flex-col items-center justify-center'>
                        <p className='text-center'>Sau khi bạn hoàn tất và gửi biểu mẫu này, bạn sẽ được chuyển hướng đến PayPal để hoàn tất khoản quyên góp của mình</p>
                        <img src='/image/paypal.png' alt='' className="max-w-[140px]" />
                        <button type='submit' className='mt-4 w-max px-14 bg-[#3A63ED] text-white py-3 rounded text-lg font-medium hover:bg-[#4338CA] transition-colors'>
                          Quyên góp ngay
                        </button>
                      </div>
                    </>
                  )}
                </div>
            </div>

            {/* Phương thức thanh toán */}
            {/* <div>
              <h2 className='font-semibold text-lg'>Phương thức thanh toán</h2>
              <div className='space-y-2 mt-2'>
                <label className='flex items-center gap-2 border p-3 rounded-md'>
                  <input required type='radio' name='payment' />
                  <img src='/image/momo.png' alt='Momo' className='' />
                  <span>Ví MoMo</span>
                </label>
                <label className='flex items-center gap-2 border p-3 rounded-md'>
                  <input required type='radio' name='payment' />
                  <div>
                    <span>Thẻ tín dụng hoặc thẻ ghi nợ</span>
                    <div>
                      <img src='/image/visa-all.png' className='' />
                    </div>
                  </div>
                </label>
                <label className='flex items-center gap-2 border-2 border-purple-400 p-3 rounded-md'>
                  <input required type='radio' name='payment' defaultChecked />
                  <div>
                    <span>Thẻ tín dụng</span>
                    <div>
                      <img src='/image/paypal.png' className='h-10' />
                    </div>
                  </div>
                </label>
              </div>
            </div> */}
            {/* <div className='bg-yellow-100 p-4 rounded-md'>
              <h3 className='font-semibold'>Tóm tắt</h3>
              <div className='flex justify-between mt-2'>
                <span>Khóa học ngôn ngữ ký hiệu cơ bản</span>
                <span className='font-bold'>500.000 VND</span>
              </div>
              <div className='flex justify-between mt-2'>
                <span>Phương thức thanh toán:</span>
                <span className='font-bold'>Paypal</span>
              </div>
            </div>
            <p className='text-[10px] font-normal text-[#A0A3A9]'>
              Bạn xác nhận rằng bạn đã trên 18 tuổi và đồng ý nhận email từ Foundation for Future về công việc của chúng tôi và cách bạn có thể giúp đỡ. Nếu bạn cung cấp số điện thoại của mình, chúng
              tôi cũng có thể gọi cho bạn.
            </p>
            <div className='bg-blue-50 p-4 rounded-md text-center'>
              <p className='mb-2'>Sau khi bạn hoàn tất, bạn sẽ được chuyển đến PayPal để hoàn tất thanh toán.</p>
              <img src='/image/paypal.png' className='h-10 mx-auto mt-4' />
              <button type='submit' className='bg-[#3A63ED] mt-8 w-max rounded-lg mx-auto !py-4 !px-14 text-white !text-[18px] font-normal hover:bg-[#89A1F4]' onClick={() => null}>
                Thanh toán ngay
              </button>
            </div> */}
          </form>
        </>
      )}
      {step === 3 && (
        <div className='py-[300px] max-w-7xl mx-auto relative p-10 space-y-6'>
          <div className='flex flex-col items-center justify-center h-full text-center px-4'>
            <h1 className='text-2xl md:text-5xl font-bold text-gray-900'>
              Tài liệu sẽ được tự động tải sau {countdown} giây. <br />
              Hoặc <button
                // href="/pdf-mau.pdf"
                onClick={handleDownload}
                className='text-blue-600 hover:underline font-bold'>
                Click
              </button> vào đây để tải xuống.
            </h1>
            <p className='my-4 text-base font-normal text-gray-900'>
              Tài liệu sẽ đồng thời được gửi qua email của bạn.
            </p>
            <a href='/giao-duc/ngon-ngu-ky-hieu/khoa-hoc-ngoai-tuyen' className='mt-4 text-blue-600 font-semibold hover:underline flex items-center gap-1'>
              Quay về Khóa học trực tuyến →
            </a>
          </div>
        </div>
      )}
    </>
  )
}
