"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useApp } from "@/context/ContextProvider";
import toast from "react-hot-toast";

interface ModalPartnerProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ModalPartner({ isOpen, closeModal }: ModalPartnerProps) {
  const {handles} : any = useApp()
  const [isSuccess, setIsSuccess] = useState(false);
  const [dataSubmit,setDataSubmit] = useState({
    firstName: '',
    lastName: '',
    reasonToParticipate: 0,
    content: '',
    email: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   const res = await handles.onPostJoinGroup(dataSubmit)
   console.log(res)
   if(res){
    setIsSuccess(true)
   } else {
    toast.error('Cảm ơn bạn than gia cùng chúng tôi.', {
      duration: 5000,
      position: 'top-center',
      style: {
        background: '#10B981',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    });
   }
   setDataSubmit({
    firstName: '',
    lastName: '',
    reasonToParticipate: 0,
    content: '',
    email: '',
   }) 
  };

  const handleClose = () => {
    setIsSuccess(false);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto z-[100]">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`w-full ${isSuccess ? 'max-w-[594px]' :'max-w-md'} transform overflow-hidden rounded-xl bg-white px-6 pb-[56px] pt-[32px] shadow-xl transition-all`}>
                <div className="flex justify-end">
                  <button
                    onClick={handleClose}
                    className="text-[#111827]"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {!isSuccess ? (
                  <>
                    <Dialog.Title as="h3" className="text-2xl font-semibold text-center mb-2">
                      Gửi yêu cầu
                    </Dialog.Title>
                    <p className="text-center text-gray-600 text-sm mb-6">
                      Trở thành một phần của chúng tôi và cùng xây dựng một tương lai tươi sáng cho cộng đồng người khiếm thính
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {/* <div>
                          <input
                            type="text"
                            value={dataSubmit.firstName}
                            onChange={(e) => setDataSubmit({...dataSubmit,firstName: e.target.value})}
                            placeholder="Tên đầy đủ*"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div> */}
                        <div className='relative'>
                          <label htmlFor='ten' className={`${dataSubmit.firstName.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-1/2 -translate-y-1/2`}>
                            Tên đầy đủ <span className='text-red-600'>*</span>
                          </label>
                          <input
                            id="ten"
                            required
                            value={dataSubmit.firstName}
                            onChange={(e) => setDataSubmit({ ...dataSubmit, firstName: e.target.value })}
                            className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="text"
                          />
                        </div>
                        <div className='relative'>
                          <label htmlFor='ho-ten' className={`${dataSubmit.lastName.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-1/2 -translate-y-1/2`}>
                           Họ đầy đủ <span className='text-red-600'>*</span>
                          </label>
                          <input
                            id="ho-ten"
                            required
                            value={dataSubmit.lastName}
                            onChange={(e) => setDataSubmit({ ...dataSubmit, lastName: e.target.value })}
                            className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            type="text"
                          />
                        </div>
                        {/* <div>
                          <input
                            type="text"
                            value={dataSubmit.lastName}
                            onChange={(e) => setDataSubmit({...dataSubmit,lastName: e.target.value})}
                            placeholder="Họ đầy đủ*"
                            className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div> */}
                      </div>
                       <div className='relative'>
                          <label htmlFor='email' className={`${dataSubmit.email.length !== 0 ? "hidden" : "block"} text-sm absolute left-3 text-gray-500 top-1/2 -translate-y-1/2`}>
                           Email <span className='text-red-600'>*</span>
                          </label>
                          <input
                            type="email"
                            required
                            id="email"
                            value={dataSubmit.email}
                            onChange={(e) => setDataSubmit({ ...dataSubmit, email: e.target.value })}
                            className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      <div>
                        {/* <input
                          type="email"
                          value={dataSubmit.email}
                          onChange={(e) => setDataSubmit({...dataSubmit,email: e.target.value})}
                          placeholder="Email*"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        /> */}
                      </div>

                      <div className="relative">
                        <label htmlFor='select' className={`${dataSubmit.reasonToParticipate !== 0 ? "hidden" : "block"} z-0 text-sm absolute left-3 text-gray-500 top-1/2 -translate-y-1/2`}>
                           Lý do gửi yêu cầu <span className='text-red-600'>*</span>
                        </label>
                        <select
                          value={dataSubmit.reasonToParticipate}
                          onChange={(e) => setDataSubmit({...dataSubmit,reasonToParticipate: Number(e.target.value)})}
                          className="w-full px-2 py-2 border relative z-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500"
                          required
                          id="select"
                        >
                          <option value={0}></option>
                          <option value={1}>Nhà tài trợ</option>
                          <option value={2}>Phương tiện truyền thông</option>
                          <option value={3}>Quan hệ đối tác</option>
                          <option value={4}>Nhà tuyển dụng</option>
                          <option value={5}>Tổ chức hỗ trợ</option>
                          <option value={6}>Khác</option>
                        </select>
                      </div>

                      <div className="relative">
                        <label htmlFor='select' className={`${dataSubmit.content.length !== 0 ? "hidden" : "block"} z-0 text-sm absolute left-3 text-gray-500 top-[10px]`}>
                           Nội dung yêu cầu <span className='text-red-600'>*</span>
                        </label>
                        <textarea
                          value={dataSubmit.content}
                          onChange={(e) =>
                            setDataSubmit({
                              ...dataSubmit,
                              content: e.target.value.slice(0, 200),
                            })
                          }
                          rows={4}
                          maxLength={200}
                          className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          required
                        />
                        <p className="text-[10px]">
                          Tối đa 200 ký tự ( còn lại {200 - dataSubmit.content.length} ký tự)
                        </p>
                      </div>

                      <div className="text-[10px] text-gray-500">
                        <p>Bằng cách nhấn nút Gửi, bạn xác nhận rằng bạn trên 18 tuổi và đồng ý nhận email từ Foundation for Future về cách chúng tôi đang thay đổi cuộc sống của cộng đồng người khiếm thính – và cách bạn có thể hỗ trợ. Nếu bạn cung cấp số điện thoại, chúng tôi cũng có thể liên hệ với bạn qua điện thoại. Bạn có thể hủy đăng ký bất cứ lúc nào. Để biết thêm thông tin về cách chúng tôi sử dụng dữ liệu của bạn, vui lòng xem Quyền riêng tư và Cookie của chúng tôi.</p>
                      </div>

                    <div className="w-max m-auto">
                        <button
                        type="submit"
                        className="px-[56px] bg-[#3a63ed] text-white py-3 rounded-lg hover:bg-[#89A1F4] transition-colors"
                      >
                        Liên hệ với chúng tôi
                      </button>
                    </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8 px-[82px]">
                    <Dialog.Title as="h3" className="text-4xl font-semibold mb-2">
                      Gửi yêu cầu
                    </Dialog.Title>
                    <p className="text-center text-black text-base mb-8">
                      Trở thành một phần của chúng tôi và cùng xây dựng một tương lai tươi sáng cho cộng đồng người khiếm thính
                    </p>
                    <div className="w-60 h-w-60 mx-auto mb-6">
                      <img src="/heart.gif" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}