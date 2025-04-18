"use client";
import React, { useState } from 'react';
import { Lock } from "lucide-react"
import { useApp } from '@/context/ContextProvider';

interface DonationData {
  donationType: 1 | 2;
  selectedAmount?: number;
  customAmount?: number;
}

const Donate = () => {
  const {handles} = useApp()
  const [dataSubmit, setDataSubmit] = useState<DonationData>({
    donationType: 1,
    selectedAmount: 10,
    customAmount: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handles.onPostDonate(dataSubmit)
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
      donationType: type
    }));
    setDataSubmit(prev => ({
      ...prev,
      selectedAmount: 10,
    }));
  };

  return (
    <div className='relative w-full min-h-[400px] md:min-h-[500px] h-[720px] bg-cover bg-center' style={{ backgroundImage: "url('/image/donate-bg.jpg')" }}>
      <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' />
      <div className='absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 text-white max-w-md px-4 md:px-0'>
        <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
          Hãy cùng chúng tôi
          <br />
          phá bỏ rào cản.
        </h1>
        <p className='mt-4 text-base md:text-lg opacity-90'>
          Chung tay hỗ trợ giáo dục và đào tạo nghề
          <br className='hidden md:block' />
          cho người khiếm thính ngay hôm nay!
        </p>
      </div>
      <form onSubmit={handleSubmit} className='absolute left-4 right-4 top-1/2 md:right-10 md:left-auto -translate-y-1/2 md:w-[413px]'>
        <div className='bg-white rounded-xl shadow-lg py-12 px-9'>
          <h2 className='text-center text-[#111827] font-normal mb-6 text-[32px]'>Ủng hộ để hỗ trợ người khiếm thính</h2>

          {/* Toggle buttons */}
          <div className='bg-[#EEF1FF] rounded-md flex mb-2 border border-[#E5E7EB] overflow-hidden'>
            <button 
              type='button'
              className={`flex-1 py-4 text-sm font-medium transition-colors ${
                dataSubmit.donationType === 1 ? 'bg-[#EEF1FF] text-gray-900' : 'text-[#4B5563] bg-white'
              }`}
              onClick={() => handleDonationTypeChange(1)}
            >
              Một lần
            </button>
            <button 
              type='button'
              className={`flex-1 py-4 text-sm font-medium transition-colors ${
                dataSubmit.donationType === 2 ? 'bg-[#EEF1FF] text-gray-900' : 'text-[#4B5563] bg-white'
              }`}
              onClick={() => handleDonationTypeChange(2)}
            >
              Hàng tháng
            </button>
          </div>
          {/* Amount buttons */}
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

          {/* Custom amount input */}
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

          {/* Donate button */}
          <button type='submit' className='mt-4 w-full bg-[#4F46E5] text-white py-5 rounded-[4px] text-2xl font-medium mb-4 hover:bg-[#4338CA] transition-colors'>Ủng hộ ngay</button>
          {/* Payment methods */}
          <div className='flex items-center flex-col justify-center gap-2 text-xs text-[#6B7280]'>
            <img src='/image/visa.png' alt='' />
            {/* <img src='/icon/payment.png' alt='Payment methods' className='h-4' /> */}
            <span className='flex items-center gap-1 justify-center'>
              <Lock size={15} /> Khoản quyên góp của bạn được xử lý an toàn
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Donate;
