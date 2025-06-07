"use client"
import React, { useState } from "react"
import { Lock } from "lucide-react"
import { useApp } from "@/context/ContextProvider"
import { PiCurrencyDollarSimpleBold } from "react-icons/pi"
interface DonationData {
  donationType: 1 | 2
  selectedAmount?: number
  customAmount?: ""
  fullName?: string
  email?: string
  phone?: string
  paymentMethod?: string
}

const Donate = () => {
  const { handles } = useApp()
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(2)
  const [dataSubmit, setDataSubmit] = useState<DonationData>({
    donationType: 1,
    selectedAmount: 10,
    customAmount: "",
    fullName: "",
    email: "",
    phone: "",
    paymentMethod: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(dataSubmit)
    if (open) {
      // await handles.onPostDonate(dataSubmit)
      // setOpen(false)
      setStep(3)
      setDataSubmit({
        donationType: 1,
        selectedAmount: 10,
        customAmount: "",
        fullName: "",
        email: "",
        phone: "",
        paymentMethod: "",
      })
    } else {
      setOpen(true)
    }
  }

  const handleAmountSelect = (amount: number) => {
    setDataSubmit((prev) => ({
      ...prev,
      selectedAmount: amount,
      customAmount: "",
    }))
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as any
    if (value === "" || /^\d+$/.test(value)) {
      setDataSubmit((prev) => ({
        ...prev,
        customAmount: value,
        selectedAmount: 10,
      }))
    }
  }

  const handleDonationTypeChange = (type: 1 | 2) => {
    setDataSubmit((prev) => ({
      ...prev,
      donationType: type,
      selectedAmount: 10,
    }))
  }

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

  return (
    <div className='relative w-full min-h-[400px] h-[720px] bg-cover bg-center' style={{ backgroundImage: "url('/image/donate-bg.jpg')" }}>
      {/* <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' /> */}
      <div className='relative max-w-7xl h-full mx-auto'>
        <div className='absolute top-[106px] md:top-2/3 transform -translate-y-1/2 text-white max-w-lg px-4 md:px-0'>
          <h1 className='text-xl md:text-5xl font-bold leading-tight text-shadow-basd'>
            Hãy cùng chúng tôi
            <br />
            phá bỏ rào cản.
          </h1>
          <p className='mt-2 md:mt-6 text-sm md:text-lg opacity-90 text-shadow-basd'>Chung tay hỗ trợ giáo dục và đào tạo nghề cho người khiếm thính ngay hôm nay!</p>
        </div>
        <form onSubmit={handleSubmit} className='absolute left-0 right-0 md:px-0 px-[32px] top-[180px] md:top-1/2 md:left-auto md:-translate-y-1/2 md:w-[413px]'>
          <div className='bg-white rounded-xl shadow-lg py-[32px] md:py-12 px-[24px] md:px-9'>
            <h2 className='text-center text-[#111827] font-bold md:font-normal mb-6 text-[24px] md:px-0 px-10 md:text-[32px] leading-[35px]'>Ủng hộ để hỗ trợ người khiếm thính</h2>
            <div className='bg-[#EEF1FF] rounded-md flex mb-2 border-2 border-[#CFD1D4] overflow-hidden'>
              {[1, 2].map((type) => (
                <button
                  key={type}
                  type='button'
                  className={`flex-1 h-[56px] text-lg font-normal transition-colors ${dataSubmit.donationType === type ? "bg-[#D8E0FB] text-[#111827]" : "text-[#111827] bg-white"}`}
                  onClick={() => handleDonationTypeChange(type as 1 | 2)}>
                  {type === 1 ? "Một lần" : "Hàng tháng"}
                </button>
              ))}
            </div>
            <div className='grid grid-cols-4 mb-2 rounded-md overflow-hidden border-[#CFD1D4] border-2'>
              {[10, 40, 80, 200].map((amount) => (
                <button
                  type='button'
                  key={amount}
                  className={`h-[56px] text-lg transition-colors ${dataSubmit.selectedAmount === amount ? "bg-[#D8E0FB]" : "bg-white hover:bg-[#CFD1D4]"}`}
                  onClick={() => handleAmountSelect(amount)}>
                  {amount}$
                </button>
              ))}
            </div>
            <p className='text-sm text-[#6B7280] mb-4 md:mb-6 text-center'>Mỗi đóng góp không chỉ trao cơ hội, mà tạo một tương lai công bằng hơn cho người khiếm thính.</p>
            <div className='relative'>
              <span className='absolute left-6 top-1/2 -translate-y-1/2 border-r-2 border-[#E5E7EB] h-full flex items-center pr-6'>
                <PiCurrencyDollarSimpleBold size={20} />
              </span>
              <input
                type='text'
                value={dataSubmit.customAmount}
                onChange={handleCustomAmountChange}
                placeholder='Nhập số tiền khác'
                className='w-full text-lg py-2.5 pl-20 pr-4 border-2 border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EEF1FF]'
              />
            </div>
            <button
              className='mt-2 md:mt-4 w-full bg-[#3A63ED] text-white py-4 rounded-[4px] text-base md:text-2xl font-normal md:font-medium mb-[40px] md:mb-4 hover:bg-[#89A1F4] transition-all '
              type='button'
              onClick={() => setOpen(true)}>
              Ủng hộ ngay
            </button>
            <div className='flex items-center flex-col justify-center gap-2 text-xs text-[#6B7280]'>
              <img src='/image/visa.png' alt='' />
              <span className='flex items-center gap-1 justify-center'>
                <Lock size={15} /> Khoản quyên góp của bạn được xử lý an toàn
              </span>
            </div>
          </div>
        </form>
      </div>
      {open && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/40'>
          <div className='bg-white rounded-2xl py-16 max-w-[630px] w-full p-6 max-h-[80vh] overflow-y-auto relative shadow-lg' id="donate">
            {step === 1 && (
              <>
                <div className='absolute top-4 right-0 px-8 items-center  flex justify-between w-full'>
                  <button></button>
                  <button
                    className='text-2xl'
                    onClick={() => {
                      setOpen(false)
                      setStep(2)
                      setDataSubmit({
                        donationType: 1,
                        selectedAmount: 10,
                        customAmount: "",
                        fullName: "",
                        email: "",
                        phone: "",
                        paymentMethod: "",
                      })
                    }}>
                    &times;
                  </button>
                </div>
                <div className='w-full h-2 bg-gray-200 mt-0 rounded mb-4'>
                  <div className='h-2 bg-[#3A63ED] rounded' style={{ width: "30%" }} />
                </div>
                <form onSubmit={handleSubmit} className=''>
                  <div className='px-[36px] '>
                    <h2 className='text-center text-[#111827] font-bold md:font-bold mb-4 text-[24px] md:px-0 px-10 md:text-[32px] line-clamp-2'>
                      Ủng hộ để hỗ trợ <br /> người khiếm thính
                    </h2>
                    <div className='bg-[#EEF1FF] rounded-md flex mb-2 border-2 border-[#CFD1D4] overflow-hidden'>
                      {[1, 2].map((type) => (
                        <button
                          key={type}
                          type='button'
                          className={`flex-1 h-[56px] text-base font-normal md:font-medium transition-colors ${
                            dataSubmit.donationType === type ? "bg-[#D8E0FB] text-[#111827]" : "text-[#111827] bg-white"
                          }`}
                          onClick={() => handleDonationTypeChange(type as 1 | 2)}>
                          {type === 1 ? "Một lần" : "Hàng tháng"}
                        </button>
                      ))}
                    </div>
                    <div className='grid grid-cols-4 mb-2 rounded-md overflow-hidden border-[#CFD1D4] border-2'>
                      {[10, 40, 80, 200].map((amount) => (
                        <button
                          type='button'
                          key={amount}
                          className={`py-2.5 md:py-4 text-base transition-colors ${dataSubmit.selectedAmount === amount ? "bg-[#D8E0FB]" : "bg-white hover:bg-[#CFD1D4]"}`}
                          onClick={() => handleAmountSelect(amount)}>
                          {amount}$
                        </button>
                      ))}
                    </div>
                    <p className='text-[10px] md:text-sm text-[#6B7280] mb-4 md:mb-6 text-center'>Mỗi đóng góp không chỉ trao cơ hội, mà tạo một tương lai công bằng hơn cho người khiếm thính.</p>
                    <div className='relative'>
                      <span className='absolute left-6 top-1/2 -translate-y-1/2 border-r-2 border-[#E5E7EB] h-full flex items-center pr-6'>
                        <PiCurrencyDollarSimpleBold width={9} height={18} />
                      </span>
                      <input
                        type='text'
                        value={dataSubmit.customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder='Nhập số tiền khác'
                        className='w-full py-2.5 md:py-3 pl-20 pr-4 border-2 border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EEF1FF]'
                      />
                    </div>
                    <button
                      className='mt-2 md:mt-4 w-full bg-[#3A63ED] text-white py-2.5 md:py-5 rounded-2xl text-base md:text-2xl font-normal md:font-medium mb-[40px] md:mb-4 hover:bg-[#89A1F4] transition-all '
                      type='button'
                      onClick={() => setStep(2)}>
                      Ủng hộ ngay
                    </button>
                    <div className='flex items-center flex-col justify-center gap-2 text-xs text-[#6B7280]'>
                      <img src='/image/visa.png' alt='' />
                      <span className='flex items-center gap-1 justify-center'>
                        <Lock size={15} /> Khoản quyên góp của bạn được xử lý an toàn
                      </span>
                    </div>
                  </div>
                </form>
              </>
            )}
            {step === 2 && (
              <>
                <div className='absolute top-4 right-0 px-8 items-center  flex justify-between w-full'>
                  <button
                    className='text-left text-lg text-gray-600 font-medium'
                    onClick={() => {
                      // setOpen(false)
                      setStep(1)
                    }}>
                    Quay lại
                  </button>
                  <button
                    className='text-2xl'
                    onClick={() => {
                      setOpen(false)
                      setStep(2)
                      setDataSubmit({
                        donationType: 1,
                        selectedAmount: 10,
                        customAmount: "",
                        fullName: "",
                        email: "",
                        phone: "",
                        paymentMethod: "",
                      })
                    }}>
                    &times;
                  </button>
                </div>
                <div className='w-full h-2 bg-gray-200 mt-0 rounded mb-6'>
                  <div className='h-2 bg-[#3A63ED] rounded' style={{ width: "50%" }} />
                </div>
                <form onSubmit={handleSubmit} className='px-[30px] md:px-[56px] mt-8 text-[#111827] h-[90%] overflow-y-auto '>
                  <h2 className='text-xl font-bold mb-4'>Thông tin cá nhân</h2>
                  <div className='relative'>
                    <label htmlFor='email' className={`${dataSubmit.fullName?.length !== 0 ? "hidden" : "block"} text-sm absolute left-5 text-gray-500 top-[40%] -translate-y-1/2`}>
                      Họ tên <span className='text-red-600'>*</span>
                    </label>
                    <input required name='fullName' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-4' value={dataSubmit.fullName} onChange={handleInputChange} />
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
                    <label htmlFor='email' className={`${dataSubmit.fullName?.length !== 0 ? "hidden" : "block"} text-sm absolute left-5 text-gray-500 top-[40%] -translate-y-1/2`}>
                      Email <span className='text-red-600'>*</span>
                    </label>
                    <input required name='email' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-4' value={dataSubmit.email} onChange={handleInputChange} />
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
                    <label htmlFor='email' className={`${dataSubmit.phone?.length !== 0 ? "hidden" : "block"} text-sm absolute left-5 text-gray-500 top-[40%] -translate-y-1/2`}>
                      Số điện thoại <span className='text-red-600'>*</span>
                    </label>
                    <input required min={0} name='phone' className='w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-4' value={dataSubmit.phone} onChange={handleInputChange} type='number' />
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
                    <label className='flex items-start gap-2 border-b-2 border-[#cfd1d4] px-5 py-3'>
                      <input type='radio' name='paymentMethod' value='momo' checked={dataSubmit.paymentMethod === "momo"} onChange={(e) => handlePaymentMethodChange(e.target.value)} />
                      <div className='-mt-1.5'>
                        Ví MoMo
                        <img src='/image/momo.png' alt='MoMo' className='h-10' />
                      </div>
                    </label>
                    <label className='flex items-start gap-2 border-b-2 border-[#cfd1d4] px-5 py-3'>
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
                    <label className='flex items-start gap-2 px-5 py-3'>
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
                      <p className='text-[10px] text-[#A0A3A9] my-2'>
                        Bạn xác nhận rằng bạn đã trên 18 tuổi và đồng ý nhận email từ Foundation for Future về công việc của chúng tôi và cách bạn có thể giúp đỡ. Nếu bạn cung cấp số điện thoại của
                        mình, chúng tôi cũng có thể gọi cho bạn. Bạn có thể chọn không tham gia bất cứ lúc nào. Đối với gây quỹ hằng tháng chúng tôi sẽ tự động tính phí cho đến khi bạn huỷ đăng ký,
                        hãy liên hệ đến chúng tôi để huỷ đăng ký.
                      </p>
                      <div className='bg-[#F2F2F3] gap-2 p-6 rounded-lg flex flex-col items-center justify-center'>
                        <p className='text-center'>Sau khi bạn hoàn tất và gửi biểu mẫu này, bạn sẽ được chuyển hướng đến PayPal để hoàn tất khoản quyên góp của mình</p>
                        {dataSubmit?.paymentMethod === "momo" && (
                          <img src="/image/momo.png"/>
                        )}
                        {dataSubmit?.paymentMethod === "credit" && (
                          <img src="/image/visa-all.png"/>
                        )}
                        {dataSubmit?.paymentMethod === "paypal" && (
                          <img src="/image/paypal.png" className="w-1/2"/>
                        )}
                        <button type='submit' className='mt-4 w-max px-14 bg-[#3A63ED] text-white py-3 rounded text-lg font-medium hover:bg-[#4338CA] transition-colors'>
                          Quyên góp ngay
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </>
            )}
            {step === 3 && (
              <>
                <div className='absolute top-4 right-0 px-8 items-center  flex justify-between w-full'>
                  <button
                    className='text-left text-lg text-gray-600 font-medium'
                    onClick={() => {
                      // setOpen(false)
                      setStep(1)
                    }}>
                    Quay lại
                  </button>
                  <button
                    className='text-2xl'
                    onClick={() => {
                      setOpen(false)
                      setStep(2)
                      setDataSubmit({
                        donationType: 1,
                        selectedAmount: 10,
                        customAmount: "",
                        fullName: "",
                        email: "",
                        phone: "",
                        paymentMethod: "",
                      })
                    }}>
                    &times;
                  </button>
                </div>
                <div className='w-full h-2 bg-gray-200 mt-0 rounded mb-6'>
                  <div className='h-2 bg-[#3A63ED] rounded' style={{ width: "100%" }} />
                </div>
                <div className='px-[10px] md:px-[56px]'>
                  <h4 className='text-[32px] leading-[40px] font-bold text-center line-clamp-3'>Sự đóng góp của bạn giúp người khiếm thính có tương lai tươi sáng hơn</h4>
                  <p className='text-[17px] font-normal text-center line-clamp-4'>
                    Sự đóng góp của bạn không chỉ là một khoản quyên góp — đó là một hành động đầy yêu thương, một cam kết cùng chúng tôi xây dựng tương lai tươi sáng hơn cho cộng đồng người khiếm
                    thính.
                  </p>
                  <img className='object-contain aspect-[282/282] w-[282px] mx-auto' src='/heart.gif' alt='' />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Donate
