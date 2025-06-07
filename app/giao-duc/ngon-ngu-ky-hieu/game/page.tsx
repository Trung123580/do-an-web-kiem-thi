"use client"
import { bangChuCai } from "@/utils/contanst"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const page = () => {
  const router = useRouter()
  const [currentName, setCurrentName] = useState<any>([])
  const handleName = (id: string) => {
    const chuCai = bangChuCai.find((item) => item.id === id)
    if (chuCai) {
      setCurrentName((prev: any) => [...prev, chuCai])
    }
  }
 const handleRemoveItem = (id: string) => {
  setCurrentName((prevCurrentName:any) => {
    // Array.prototype.findLastIndex() là một lựa chọn tốt nếu môi trường hỗ trợ (ES2023+)
    // Nếu không, bạn có thể duyệt ngược mảng.
    let lastIndex = -1;

    // Cách 1: Sử dụng findLastIndex (hiện đại, cần kiểm tra tương thích trình duyệt/Node.js)
    if (typeof prevCurrentName.findLastIndex === 'function') {
      lastIndex = prevCurrentName.findLastIndex((item:any) => item.id === id);
    } else {
      // Cách 2: Duyệt ngược mảng (tương thích rộng hơn)
      for (let i = prevCurrentName.length - 1; i >= 0; i--) {
        if (prevCurrentName[i].id === id) {
          lastIndex = i;
          break; // Tìm thấy item cuối cùng, dừng lại
        }
      }
    }

    // 2. Nếu tìm thấy item (lastIndex !== -1)
    if (lastIndex !== -1) {
      // Tạo một mảng mới bằng cách loại bỏ item tại lastIndex
      // Slice trước phần tử, và slice sau phần tử, rồi nối lại
      return [
        ...prevCurrentName.slice(0, lastIndex), // Các phần tử trước item cần xóa
        ...prevCurrentName.slice(lastIndex + 1) // Các phần tử sau item cần xóa
      ];
    }

    // Nếu không tìm thấy item nào có id đó (hoặc mảng rỗng), trả về mảng hiện tại
    return prevCurrentName;
  });
};
  return (
    <div className=' bg-white pt-20 pb-[96px]'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='grid md:grid-cols-[2fr,1fr] gap-8'>
          <div className={` rounded-xl space-y-8 p-4`}>
            <h1 className='text-5xl font-bold text-[#3A63ED] text-center my-6'>Tên của bạn là?</h1>
            <div className='flex justify-between rounded-lg bg-[#F2F2F3] items-center px-8 h-[184px] border-4 border-[#CFD1D4] gap-4'>
              <div className='overflow-x-auto py-1 flex max-w-[85%]'>
                {currentName.map((item: any, index: number) => {
                  return (
                    <img key={index} src={`/image/${item.id}.png`} onClick={() => handleRemoveItem(item.id)} alt='' className='cursor-pointer object-cover md:w-[120px] w-[60px] md:h-[120px] h-[60px]' />
                  )
                })}
              </div>
              <div className='flex items-center justify-center'>
                <button className={`${currentName.length === 0 ? 'opacity-50' :'opacity-100'}`} onClick={() => {
                    if (currentName.length === 0) return
                    router.push("game/go-game")
                    return
                }}>
                  <img className={`md:h-[120px] h-[60px] object-contain ${currentName.length === 0 ? 'grayscale-100' : ''}`} src='/image/buttonArrow.png' alt='' />
                </button>
              </div>
            </div>
            <div className='justify-center mt-20 flex flex-wrap *:w-[calc((100%/9) - 180px)] gap-4'>
              {bangChuCai.map((item, index) => {
                return <img onClick={() => handleName(item.id)} key={index} src={`/image/${item.id}.png`} alt='' className='cursor-pointer object-cover w-[120px] h-[120px]' />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
