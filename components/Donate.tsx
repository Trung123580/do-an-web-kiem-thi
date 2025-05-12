"use client";
import React, { useState } from 'react';
import { Lock } from "lucide-react"
import { useApp } from '@/context/ContextProvider';

interface DonationData {
  donationType: 1 | 2;
  selectedAmount?: number;
  customAmount?: number;
  fullName?: string;
  email?: string;
  phone?: string;
  paymentMethod?: string;
}

const Donate = () => {
  const { handles } = useApp()
  const [open, setOpen] = useState(false);
  const [dataSubmit, setDataSubmit] = useState<DonationData>({
    donationType: 1,
    selectedAmount: 10,
    customAmount: 0,
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dataSubmit);
    if (open) {
      await handles.onPostDonate(dataSubmit)
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleAmountSelect = (amount: number) => {
    setDataSubmit(prev => ({
      ...prev,
      selectedAmount: amount,
      customAmount: 0
    }));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setDataSubmit(prev => ({
        ...prev,
        customAmount: Number(value),
        selectedAmount: 10,
      }));
    }
  };

  const handleDonationTypeChange = (type: 1 | 2) => {
    setDataSubmit(prev => ({
      ...prev,
      donationType: type,
      selectedAmount: 10,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataSubmit(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (method: string) => {
    setDataSubmit(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  return (
    <div className='relative w-full min-h-[400px] md:min-h-[500px] h-[720px] bg-cover bg-center' style={{ backgroundImage: "url('/image/donate-bg.jpg')" }}>
      <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' />
      <div className='absolute top-2/3 left-4 md:left-20 transform -translate-y-1/2 text-white max-w-lg px-4 md:px-0'>
        <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
          Hãy cùng chúng tôi
          <br />
          phá bỏ rào cản.
        </h1>
        <p className='mt-6 text-base md:text-lg opacity-90'>
          Chung tay hỗ trợ giáo dục và đào tạo nghề cho người khiếm thính ngay hôm nay!
        </p>
      </div>
      <form onSubmit={handleSubmit} className='absolute left-4 right-4 top-1/2 md:right-20 md:left-auto -translate-y-1/2 md:w-[413px]'>
        <div className='bg-white rounded-xl shadow-lg py-12 px-9'>
          <h2 className='text-center text-[#111827] font-normal mb-6 text-[32px]'>Ủng hộ để hỗ trợ người khiếm thính</h2>

          <div className='bg-[#EEF1FF] rounded-md flex mb-2 border border-[#E5E7EB] overflow-hidden'>
            {[1, 2].map((type) => (
              <button
                key={type}
                type='button'
                className={`flex-1 py-4 text-sm font-medium transition-colors ${
                  dataSubmit.donationType === type ? 'bg-[#EEF1FF] text-gray-900' : 'text-[#4B5563] bg-white'
                }`}
                onClick={() => handleDonationTypeChange(type as 1 | 2)}
              >
                {type === 1 ? 'Một lần' : 'Hàng tháng'}
              </button>
            ))}
          </div>
          <div className='grid grid-cols-4 mb-2 rounded-md overflow-hidden border border-[#E5E7EB]'>
            {[10, 40, 80, 200].map((amount) => (
              <button
                type='button'
                key={amount}
                className={`py-4 text-sm transition-colors ${
                  dataSubmit.selectedAmount === amount ? 'bg-[#EEF1FF]' : 'bg-white hover:bg-[#E5E7EB]'
                }`}
                onClick={() => handleAmountSelect(amount)}
              >
                {amount}$
              </button>
            ))}
          </div>

          <p className='text-sm text-[#6B7280] mb-6 text-center'>Mỗi đóng góp không chỉ trao cơ hội, mà tạo một tương lai công bằng hơn cho người khiếm thính.</p>

          <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>$</span>
            <input
              type='text'
              value={dataSubmit.customAmount}
              onChange={handleCustomAmountChange}
              placeholder='Nhập số tiền khác'
              className='w-full py-3 pl-8 pr-4 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EEF1FF]'
            />
          </div>

          <button type='button' 
           onClick={() => setOpen(true)}
          className='mt-4 w-full bg-[#3A63ED] text-white py-5 rounded-[4px] text-2xl font-medium mb-4 hover:bg-[#4338CA] transition-colors'>Ủng hộ ngay</button>
          <div className='flex items-center flex-col justify-center gap-2 text-xs text-[#6B7280]'>
            <img src='/image/visa.png' alt='' />
            <span className='flex items-center gap-1 justify-center'>
              <Lock size={15} /> Khoản quyên góp của bạn được xử lý an toàn
            </span>
          </div>
        </div>
      </form>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl py-16 max-w-[630px] w-full p-6 h-[80%] relative shadow-lg">
            <div className="absolute top-4 right-0 px-8 items-center  flex justify-between w-full">
              <button className="text-left text-lg text-gray-600 font-medium" onClick={() => setOpen(false)}>Quay lại</button>
              <button className='text-2xl' onClick={() => setOpen(false)}>
                &times;
              </button>
            </div>
            <div className="w-full h-1 bg-gray-200 mt-7 rounded mb-6">
              <div className="h-1 bg-blue-500 rounded" style={{ width: "50%" }} />
            </div>
            <form onSubmit={handleSubmit} className='px-[30px] md:px-[56px] mt-8 text-[#111827] h-[90%] overflow-y-auto '>
              <h2 className="text-xl font-bold mb-4">Thông tin cá nhân</h2>
              <input
                name="fullName"
                value={dataSubmit.fullName}
                onChange={handleInputChange}
                className="w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3"
                placeholder="Họ tên*"
                required
              />
              <input
                name="email"
                type="email"
                value={dataSubmit.email}
                onChange={handleInputChange}
                className="w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3"
                placeholder="Email*"
                required
              />
              <input
                name="phone"
                value={dataSubmit.phone}
                onChange={handleInputChange}
                className="w-full border-2 border-[#CFD1D4] rounded-lg px-3 py-2 mb-3"
                placeholder="Số điện thoại*"
                required
              />
              <h3 className="text-xl font-bold mb-4">Phương thức thanh toán</h3>
              <div className="space-y-2 font-normal text-[18px]">
                <label className="flex items-start gap-2 border rounded px-3 py-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="momo"
                    checked={dataSubmit.paymentMethod === 'momo'}
                    onChange={(e) => handlePaymentMethodChange(e.target.value)}
                  />
                  <div className='-mt-1.5'>
                    Ví MoMo
                    <img src="/image/momo.png" alt="MoMo" className="h-6" />
                  </div>
                </label>
                <label className="flex items-start gap-2 border rounded px-3 py-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={dataSubmit.paymentMethod === 'credit'}
                    onChange={(e) => handlePaymentMethodChange(e.target.value)}
                  />
                  <div className='-mt-1.5'>
                    Thẻ tín dụng hoặc thẻ ghi nợ
                    <div className='flex items-center gap-2'>
                      <img src="/image/visa-all.png" alt="Visa" className="h-6" />
                    </div>
                  </div>
                </label>
                <label className="flex items-start gap-2 border rounded px-3 py-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={dataSubmit.paymentMethod === 'paypal'}
                    onChange={(e) => handlePaymentMethodChange(e.target.value)}
                  />
                  <div className='-mt-1.5'>
                    Thẻ tín dụng 
                    <div className='flex items-center gap-2'>
                      <img src="/image/paypal.png" alt="Visa" className="h-6" />
                    </div>
                  </div>
                </label>
              </div>
              <h2 className="text-xl font-bold mb-4 mt-5">Tóm tắt</h2>
              <div className='bg-[#FEF5D0] *:flex  *:items-center *:justify-between p-4 rounded-lg gap-1 flex flex-col'>
                <div>
                  <span>{dataSubmit.donationType === 1 ? 'Một lần' : 'Hàng tháng'}</span>
                  <span className='font-bold'>${dataSubmit.customAmount || dataSubmit.selectedAmount}</span>
                </div>
                <div>
                  <span>phương thức thanh toán</span>
                  <span className='font-bold'>{dataSubmit.paymentMethod}</span>
                </div>
              </div>
              <p className='text-[10px] text-[#A0A3A9] my-2'>Bạn xác nhận rằng bạn đã trên 18 tuổi và đồng ý nhận email từ Foundation for Future về công việc của chúng tôi và cách bạn có thể giúp đỡ. Nếu bạn cung cấp số điện thoại của mình, chúng tôi cũng có thể gọi cho bạn. Bạn có thể chọn không tham gia bất cứ lúc nào. Đối với gây quỹ hằng tháng chúng tôi sẽ tự động tính phí cho đến khi bạn huỷ đăng ký, hãy liên hệ đến chúng tôi để huỷ đăng ký.</p>
              <div className='bg-[#F2F2F3] gap-2 p-6 rounded-lg flex flex-col items-center justify-center'>
                <p className=''>Sau khi bạn hoàn tất và gửi biểu mẫu này, bạn sẽ được chuyển hướng đến PayPal để hoàn tất khoản quyên góp của mình</p>
                <img src="/image/momo.png" alt="" />
                <button type="submit" className="mt-4 w-max px-14 bg-[#3A63ED] text-white py-3 rounded text-lg font-medium hover:bg-[#4338CA] transition-colors">
                Quyên góp ngay
              </button>
              </div>
              
            </form>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Donate;
