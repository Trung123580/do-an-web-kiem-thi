"use client"
import Link from "next/link"
import React, { useState } from "react"

const questions = [
  "Tôi hiểu ý người khác khi họ ra dấu hoặc nhìn nét mặt",
  "Tôi biết cách thể hiện cảm xúc của mình để người khác hiểu",
  "Khi làm việc nhóm, tôi dễ dàng chia sẻ ý tưởng với mọi người",
  "Tôi thích nói chuyện hoặc giao tiếp (dù bằng lời hay ngôn ngữ ký hiệu)",
  "Tôi cảm thấy thoải mái khi gặp người mới",
  "Tôi dễ dàng hợp tác với người khác khi làm việc",
  "Tôi lắng nghe người khác trước khi đưa ra ý kiến",
  "Tôi thường xuyên khuyến khích mọi người bày tỏ ý kiến của họ",
  "Tôi thích giúp đỡ người khác trong công việc",
  "Khi có tranh cãi, tôi cố gắng hiểu cả hai bên",
  "Tôi không thấy khó chịu khi làm việc cùng nhiều người",
  "Khi gặp khó khăn, tôi bình tĩnh suy nghĩ cách giải quyết",
  "Tôi thường có nhiều cách để giải quyết một việc",
  "Tôi thích tìm hiểu tại sao một việc lại xảy ra",
  "Tôi hay đặt câu hỏi để hiểu rõ vấn đề",
  "Tôi có thể tự nghĩ ra cách sửa lỗi khi làm sai",
  "Tôi hay có ý tưởng mới khi làm việc",
  "Tôi thích thử những cách làm khác nhau",
  "Tôi thấy vui khi được tự tạo ra cái gì đó",
  "Tôi không ngại thay đổi để làm việc tốt hơn",
  "Tôi hay nghĩ ra cách đơn giản hơn để làm một việc khó",
  "Tôi có thể làm việc một mình mà vẫn hoàn thành tốt",
  "Tôi luôn cố gắng hoàn thành công việc dù không ai kiểm tra",
  "Tôi tự giác làm việc đúng giờ, không cần ai nhắc",
  "Tôi biết rõ việc gì là trách nhiệm của mình",
  "Khi được giao việc, tôi cố gắng làm tốt nhất có thể",
  "Tôi luôn lên kế hoạch trước khi làm việc",
  "Tôi ghi nhớ thời gian và hoàn thành công việc đúng hẹn",
  "Tôi giữ cho chỗ làm việc của mình gọn gàng",
  "Tôi không bỏ cuộc khi gặp khó khăn",
  "Tôi cảm thấy vui khi được làm việc",
  "Tôi luôn cố gắng học hỏi để làm tốt hơn",
  "Tôi tin rằng mình có thể làm được nhiều việc có ích",
]

const options = [1, 2, 3, 4]

const Page = () => {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [step, setStep] = useState(1)
  const handleChange = (qIdx: number, value: number) => {
    const newAnswers = [...answers]
    newAnswers[qIdx] = value
    setAnswers(newAnswers)
  }

  const answeredCount = answers.filter((a) => a !== null).length
  const progressPercent = Math.round((answeredCount / questions.length) * 100)

  if (step === 2) {
    return (
      <div className="min-h-screen bg-[#F6F8FC] p-0">
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-16">
        <div className='px-6 py-4 rounded-t-lg h-[232px] mt-[32px] flex flex-col justify-center'>
            <h2 className='mb-3 text-5xl font-bold'>Kết quả kiểm tra kỹ năng làm việc</h2>
            <p className='m-0 text-lg font-normal'>Bài kiểm tra kỹ năng làm việc được phát triển và nghiên cứu dựa trên đối tượng đặc biệt nhằm giúp họ khám phá năng lực nghề nghiệp bản thân thông qua các bài kiểm tra kỹ năng nhằm khám phá bản thân và lựa chọn định hướng phù hợp bản thân.</p>
          </div>
          <div className="flex flex-col md:flex-row mt-[96px] gap-8">
            {/* Radar chart + caption */}
            <div className="flex-1 flex flex-col items-center justify-center">
             <img src="/image/test-map.png" alt="" />
            </div>
            {/* Result summary and suggestions */}
            <div className="flex-1 flex flex-col gap-6 min-w-[340px] max-w-lg">
              <div className="bg-[#3A63ED] text-white rounded-xl p-6 text-lg font-semibold">
                Bạn có nền tảng tốt để bắt đầu công việc. Một số kỹ năng bạn đã làm rất tốt, một số khác cần luyện thêm. Cùng xem điểm mạnh của bạn nhé!
              </div>
              <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
                <div>
                  <span className="font-bold text-base text-[#3A63ED]">Điểm mạnh</span>
                  <p className="text-gray-800 mt-1 text-base">Giao tiếp tốt, hợp tác với công việc nghệ thuật, thiết kế. Hợp tác nhóm, có tố chất lãnh đạo, biết lắng nghe, thấu cảm.</p>
                </div>
                <div>
                  <span className="font-bold text-base text-[#3A63ED]">Điểm yếu</span>
                  <p className="text-gray-800 mt-1 text-base">Kỹ năng tổ chức, sắp xếp công việc hoặc lập kế hoạch chưa thực sự nổi bật, dễ bị cảm xúc chi phối.</p>
                </div>
                <div>
                  <span className="font-bold text-base text-[#3A63ED]">Gợi ý nghề nghiệp phù hợp với bạn</span>
                  <ul className="list-disc ml-6 text-base text-gray-800 mt-1">
                    <li>Thiết kế đồ họa, mỹ thuật</li>
                    <li>Giáo viên, nhân sự, quản lý nhóm</li>
                    <li>Viết nội dung, sáng tạo nội dung</li>
                    <li>Tư vấn khách hàng/chăm sóc khách hàng</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href="/nghe-nghiep/tuyen-dung" className="text-[#3A63ED] font-semibold text-base hover:underline">Tìm việc làm phù hợp &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen pt-16 bg-[#D8E0FB]'>
      <div className='bg-blue-600 text-white px-6 py-4 rounded-t-lg h-[232px] flex flex-col justify-center'>
        <h2 className='m-0 text-5xl font-bold'>Hướng dẫn làm bài kiểm tra kỹ năng làm việc</h2>
        <p className='m-0 text-lg font-normal'>Bạn hãy đọc những mệnh đề dưới đây và nhận định vào độ chính xác của mệnh đề đó với bản thân mình, từ 1 (Hoàn toàn sai) đến 4 (Hoàn toàn đúng)</p>
      </div>
      <div className='rounded-lg pt-[67px] pb-[96px] max-w-7xl mx-auto'>
        {/* Progress Bar */}
        <div className='pb-[56px]'>
          <div className='h-4 bg-blue-200 rounded-2xl overflow-hidden'>
            <div className='h-full bg-[#3A63ED] transition-all duration-300' style={{ width: `${progressPercent}%` }} />
          </div>
          <div className='text-right text-xs text-blue-600 mt-1'>
            {answeredCount}/{questions.length}
          </div>
        </div>
        {/* Questions */}
        <form className='max-w-[1064px] mx-auto flex flex-col gap-[16px]'>
          {questions.map((q, idx) => (
            <div key={idx} className='bg-white rounded-xl p-5 shadow-sm'>
              <div className='mb-3 text-[20px] md:text-[32px] font-normal text-center'>{q}</div>
              <div className='flex justify-center'>
                {options.map((opt) => (
                  <label key={opt} className='flex flex-col items-center text-sm mx-4'>
                    <input type='radio' name={`q${idx}`} value={opt} className='mb-1 accent-[#3A63ED] cursor-pointer w-[25px] h-[25px] md:w-[33px] md:h-[33px]' checked={answers[idx] === opt} onChange={() => handleChange(idx, opt)} />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </form>
        <div className='flex items-center justify-center mt-[56px]'>
          <button onClick={() => setStep(2)} className='bg-[#3A63ED] mx-auto text-white py-5 px-[72px] text-2xl rounded-lg font-[Inter] hover:bg-[#3A63ED]/60 transition-colors'>Ứng tuyển ngay</button>
        </div>
      </div>
    </div>
  )
}

export default Page
