"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalPartnerProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ModalPartner({ isOpen, closeModal }: ModalPartnerProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
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

        <div className="fixed inset-0 overflow-y-auto">
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-end">
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        <div>
                          <input
                            type="text"
                            placeholder="Tên đầy đủ*"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Họ đầy đủ*"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Email*"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <select
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500"
                          required
                        >
                          <option value="">Lý do gửi yêu cầu*</option>
                          <option value="partner">Đối tác</option>
                          <option value="volunteer">Tình nguyện viên</option>
                          <option value="other">Khác</option>
                        </select>
                      </div>

                      <div>
                        <textarea
                          placeholder="Nội dung yêu cầu*"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          required
                        />
                        <p className="text-[10px]">Tối đa 200 ký tự ( còn lại 200 ký tự)</p>
                      </div>

                      <div className="text-xs text-gray-500">
                        <p>Bằng cách nhấn nút Gửi, bạn xác nhận rằng bạn trên 18 tuổi và đồng ý nhận email từ Foundation for Future về cách chúng tôi đang thay đổi cuộc sống của cộng đồng người khiếm thính – và cách bạn có thể hỗ trợ. Nếu bạn cung cấp số điện thoại, chúng tôi cũng có thể liên hệ với bạn qua điện thoại. Bạn có thể hủy đăng ký bất cứ lúc nào. Để biết thêm thông tin về cách chúng tôi sử dụng dữ liệu của bạn, vui lòng xem Quyền riêng tư và Cookie của chúng tôi.</p>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Liên hệ với chúng tôi
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Dialog.Title as="h3" className="text-4xl font-semibold mb-2">
                      Gửi yêu cầu
                    </Dialog.Title>
                    <p className="text-center text-black text-base mb-8">
                      Trở thành một phần của chúng tôi và cùng xây dựng một tương lai tươi sáng cho cộng đồng người khiếm thính
                    </p>
                    <div className="w-60 h-w-60 mx-auto mb-6">
                      <img src="/image/heart.png" alt="" className="w-full h-full object-cover" />
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