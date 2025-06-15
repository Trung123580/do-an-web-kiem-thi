'use client'
import { triLieuNgonNgu } from "@/utils/contanst";
import Image from "next/image";
import { useParams } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function page() {
    const params = useParams()
    const slug: any = params["slug-trilieu"]
    const khoahocDetail: any = triLieuNgonNgu.find((khoahoc) => khoahoc.slug === slug[0]);
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
        <>
            <nav className="bg-white pb-6 pt-8 max-w-7xl mx-auto relative mt-20 ">
                <div className="mx-auto px-4">
                    <div className="flex items-center ">
                        <Link
                            href="/giao-duc"
                            className="text-[#A0A3A9] hover:text-gray-900 text-lg font-normal line-clamp-1"
                        >
                            Giáo dục
                        </Link>
                        <span className="mx-2 text-2xl text-black"><img src="/arrow.png" alt="" /></span>
                        <Link href={'/giao-duc/tri-lieu-ngon-ngu'} className="text-[#A0A3A9] line-clamp-1 text-lg font-normal">Trị liệu ngôn ngữ</Link>
                        <span className="mx-2 text-2xl text-black"><img src="/arrow.png" alt="" /></span>
                        <span className="text-[#3A63ED] line-clamp-1 text-lg font-normal">{khoahocDetail?.title}</span>
                    </div>
                </div>
            </nav>
            <div className="bg-[#D8E0FB] px-4">
                <div className="py-14 max-w-7xl mx-auto relative">
                    <div className="mb-6">
                        {khoahocDetail?.organization.map((item: any, index: number) => (
                            <div key={index} className="flex items-center gap-3">
                                <Image src={item.img} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                                <div>
                                    <div className="text-[10px] text-[#70747D]">Đơn vị tổ chức</div>
                                    <div className="font-medium text-lg">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-5xl font-bold mb-4">{khoahocDetail?.title}</h1>
                    <p className="mb-16 text-lg">{khoahocDetail?.description}</p>
                    <div className="bg-[#FFFFFF] rounded-xl shadow-sm p-8 absolute -bottom-75 sm:-bottom-36 md:-bottom-20 xl:-bottom-15 left-1/2 -translate-x-1/2  w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
                            <div className="flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]">
                                <span className="text-sm text-[#70747D]">Thời lượng buổi học</span>
                                <span className="text-2xl">{khoahocDetail?.time}</span>
                            </div>
                            <div className="flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]">
                                <span className="text-sm text-[#70747D]">Hình thức</span>
                                <span className="text-2xl">{khoahocDetail?.form}</span>
                            </div>
                            {!!khoahocDetail?.price && (
                                <div className="flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]">
                                    <span className="text-sm text-[#70747D]">Chi phí buổi học</span>
                                    <span className="text-2xl">{khoahocDetail?.price}</span>
                                </div>
                            )}

                            <div className="flex justify-center gap-1 flex-col px-5 sm:border-r border-[#CFD1D4]">
                                <span className="text-sm text-[#70747D]">Độ tuổi</span>
                                <span className="text-2xl">{khoahocDetail?.objectives}</span>
                            </div>
                            <div className={`flex justify-center gap-1 flex-col px-5 ${!!khoahocDetail?.price ? '' : 'row-span-2 col-span-2'}`}>
                                <span className="text-sm text-[#70747D]">Giáo viên</span>
                                <span className="text-2xl">{khoahocDetail?.teacher}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen pb-16 py-16 pt-88 sm:pt-48 md:pt-30 xl:pt-32 max-w-7xl mx-auto px-4">
                <div className="container mx-auto">
                    {khoahocDetail?.type === 3 ? <>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">Tổng quan về lớp huấn luyện ngôn ngữ</h2>
                        <div className="text-base">
                            <h4 className="font-bold">1. Khái niệm và mục tiêu</h4>
                            <p>
                                Lớp huấn luyện ngôn ngữ dành cho trẻ em khiếm thính bẩm sinh là một môi trường học tập được thiết kế đặc biệt với mục đích mang lại cho các em một nền tảng giao tiếp vững chắc. Trong lớp học này, trẻ không chỉ được tiếp cận với các phương pháp dạy và học hiệu quả mà còn được tham gia vào những hoạt động tương tác thú vị. Mỗi bài học không chỉ đơn thuần là việc học từ vựng hay ngữ pháp; thay vào đó, đó là những cuộc hành trình đầy sắc màu, nơi mà sự sáng tạo và trí tưởng tượng được khơi dậy mạnh mẽ.
                            </p>
                            <p className="my-5">
                                Bạn có thể hình dung được không? Một lớp học tràn ngập những nụ cười, những bàn tay giơ lên chỉ để thể hiện cảm xúc, và âm thanh của những tiếng cười rộn rã. Mục tiêu chính của chương trình là không chỉ để trẻ em tiếp thu được ngôn ngữ, mà còn để các em cảm thấy tự tin, dũng cảm và ngập tràn hứng khởi khi giao tiếp với người khác. Đây chính là bước đi đầu tiên, vô cùng quan trọng, trong hành trình giúp trẻ bước ra thế giới, khám phá và hòa nhập vào cuộc sống.
                            </p>
                            <h4 className="font-bold">1. Khái niệm và mục tiêu</h4>
                            <p>
                                Đối tượng tham gia lớp huấn luyện ngôn ngữ rất đa dạng, từ những bé mới phát hiện ra vấn đề thính giác cho đến những em đã từng thử nghiệm nhiều kênh giao tiếp khác nhau. Những em nhỏ này đều có một điểm chung: đó là mong muốn được hiểu và hiểu người khác. Do đó, việc xác định đúng đối tượng sẽ góp phần quan trọng giúp cá nhân hóa chương trình học và tối ưu hóa kết quả.
                            </p>
                            <p className="my-5">
                                Khi gia đình bạn tình cờ nhận ra rằng con mình gặp khó khăn trong việc giao tiếp, có lẽ bạn sẽ cảm thấy bỡ ngỡ và lo lắng. Nhưng hãy nhớ rằng, mỗi trẻ đều có những khả năng riêng và những tiềm năng chưa được khai thác. Chúng ta chỉ cần đồng hành cùng các em, tạo ra một không gian an toàn để khám phá và phát triển. Nhờ vào lớp huấn luyện này, con bạn sẽ tìm thấy phương pháp phù hợp với riêng mình, từ đó mở ra những cánh cửa mới dẫn đến những trải nghiệm quý giá trong cuộc sống.
                            </p>
                        </div>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Phương pháp giảng dạy</h2>

                        <div className="text-base" >
                            <p>
                                Trong lớp huấn luyện ngôn ngữ dành cho trẻ em khiếm thính bẩm sinh, việc áp dụng các phương pháp giảng dạy hiệu quả là một yếu tố quyết định giúp các em có thể tiếp thu ngôn ngữ một cách tự nhiên và thoải mái nhất.
                            </p>
                            <p className="my-5">
                                Phương pháp thường được áp dụng tại Thiên Đức là nhận thức thính giác và ngôn ngữ nói. Các thầy cô sẽ giúp trẻ em phát triển khả năng nghe thông qua những bài tập luyện tập từ cơ bản đến nâng cao. Trẻ sẽ được khuyến khích nghe âm thanh từ môi trường xung quanh, từ đó giúp các em nhận ra âm thanh và lời nói từ người khác. Những hoạt động này không chỉ giúp phát triển kỹ năng nghe, mà còn kích thích trí nhớ và khả năng tư duy của trẻ, từ đó cải thiện khả năng giao tiếp của các em. Hãy tưởng tượng rằng, mỗi bài học đều là một cuộc phiêu lưu khám phá thế giới âm thanh, từ những tiếng chim hót đến tiếng cười của bạn bè.
                            </p>
                            <p>
                                Cách tổ chức lớp học cũng đóng một vai trò không kém phần quan trọng trong việc truyền đạt kiến thức cho trẻ. Những giờ học không chỉ đơn thuần là những tiết học lý thuyết khô khan, mà là những khoảng thời gian mà mỗi em đều được tham gia vào nhiều hoạt động vui tươi và sáng tạo. Giáo viên sẽ kết hợp giữa việc giảng dạy và trò chơi giáo dục, từ đó giúp trẻ em không cảm thấy chán nản mà luôn trong trạng thái hứng thú học hỏi.
                            </p>
                        </div>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Chương trình học trong lớp huấn luyện</h2>
                        <div className="text-base" >
                            <p>
                                Khi đăng ký tham gia lớp huấn luyện ngôn ngữ dành cho trẻ em khiếm thính bẩm sinh, các bậc phụ huynh có thể hoàn toàn yên tâm bởi chương trình học được xây dựng một cách khoa học, phù hợp với nhu cầu và khả năng của từng em. Nội dung chính của chương trình không chỉ tập trung vào việc phát triển ngôn ngữ mà còn giúp trẻ em khám phá thế giới xung quanh một cách toàn diện. Hàng tuần, các em sẽ học những chủ đề đa dạng, từ cuộc sống hàng ngày cho đến các chủ đề khoa học, nghệ thuật và văn hóa. Mỗi bài học đều được thiết kế để tạo ra sự hứng khởi, khơi dậy sự sáng tạo và trí tưởng tượng của trẻ.
                            </p>
                            <p className="mt-5">
                                Chẳng hạn, trong một buổi học về cuộc sống hàng ngày, trẻ có thể được hướng dẫn cách giao tiếp thông qua những tình huống thực tế, như đặt câu hỏi, trả lời và diễn đạt cảm xúc. Các giáo viên sẽ tạo ra những kịch bản để trẻ thực hành, giúp các em cảm thấy như đang sống trong một câu chuyện thú vị. Chúng ta rất dễ hình dung ra những hình ảnh sinh động khi trẻ em học cách hỏi thăm sức khỏe và chia sẻ những câu chuyện nhỏ trong ngày. Những bài học như vậy không chỉ giúp trẻ phát triển ngôn ngữ mà còn tạo ra những kỷ niệm đáng nhớ.
                            </p>
                        </div>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Thời gian biểu của lớp học</h2>
                        <div className="text-base" >
                            <p>
                                Thời gian biểu của lớp học được thiết kế một cách hợp lý để đảm bảo rằng mỗi em đều có cơ hội để học tập, vui chơi và nghỉ ngơi. Một ngày trong lớp huấn luyện ngôn ngữ có thể bắt đầu với những hoạt động khởi động thú vị, giúp trẻ em cảm thấy phấn chấn và chuẩn bị tinh thần cho một ngày dài phía trước. Các môn học sẽ luân phiên nhau, từ luyện nghe, nói đến hoạt động thực hành mà không gây cảm giác nhàm chán.
                                Cuối mỗi buổi học, các em thường sẽ có những phút giây để phản ánh về những gì mình đã học được. Điều này không chỉ tạo điều kiện cho trẻ nói lên ý kiến cá nhân mà còn nâng cao khả năng tự đánh giá bản thân, một kỹ năng cần thiết cho sự phát triển lâu dài. Những phút giây cùng nhau chia sẻ và lắng nghe không chỉ giúp các em nhớ lâu hơn mà còn tạo nên sự kết nối sâu sắc với bạn bè, giáo viên và cả chính bản thân các em.
                            </p>

                        </div>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Phản hồi về khóa học</h2>
                        <div className="gap-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {khoahocDetail?.commnents.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col p-6 items-start gap-3 mb-5  border-2 border-[#CFD1D4] rounded-lg">
                                    <div className="flex">
                                        <Image src={item.avatar} alt="DNXH Logo" width={48} height={48} className="rounded-full" />
                                        <div className="flex flex-col justify-center ml-3">
                                            <span className="text-[10px]">Phụ huynh học viên</span>
                                            <span className="text-lg">{item.name}</span>
                                        </div>
                                    </div>
                                    <div className="text-base">{item.content}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col mt-18 gap-3.5 bg-[#F2F2F3] py-12 px-[72px] rounded-lg">
                            <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">Đăng ký khóa học</h2>
                            {khoahocDetail?.type === 3 ? (
                                <p>
                                    Việc đăng ký tham gia lớp huấn luyện ngôn ngữ dành cho trẻ em khiếm thính bẩm sinh không chỉ đơn giản là một quy trình, mà còn là một bước quan trọng, mở ra cánh cửa cho hành trình phát triển ngôn ngữ và kết nối xã hội của trẻ. Để tiến hành đăng ký, phụ huynh có thể liên hệ trực tiếp với trung tâm tổ chức lớp học qua số điện thoại <b>02438 693 363</b> hoặc <b>0904 330 889</b> hoặc website chính thức. Những thông tin rõ ràng và chi tiết giúp phụ huynh dễ dàng nhận biết về điều kiện tham gia và lịch học. Hãy chắc chắn rằng bạn đã tìm hiểu kỹ lưỡng mọi thông tin, điều này không chỉ giúp tiết kiệm thời gian mà còn giúp bạn cảm thấy tự tin hơn khi đưa ra quyết định cho con mình.
                                </p>
                            ) :
                                <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.scienceRegistration ?? "" }} />
                            }
                        </div>
                    </> : <>
                        {khoahocDetail?.type === 2 ? <>
                               <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">Lợi ích của phương pháp trị liệu AVT</h2>
                        <div className="text-base">
                        <ul className="list-disc pl-6  text-black leading-relaxed ">
                            <li>Phát triển khả năng nghe và nói tự nhiên.</li>
                            <li>Tăng cường khả năng giao tiếp xã hội và học tập.</li>
                            <li>Nâng cao chất lượng cuộc sống cho trẻ khiếm thính và gia đình.</li>
                        </ul>

                        </div>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Quy trình</h2>
                        <div className="text-base" >
                           <ol className="list-decimal pl-6 text-black leading-relaxed">
                            <li>Đánh giá ban đầu</li>
                            <li>Xây dựng kế hoạch trị liệu cá nhân</li>
                            <li>Các buổi trị liệu</li>
                            <li>Đánh giá tiến độ và điều chỉnh kế hoạch</li>
                            <li>Hỗ trợ phụ huynh</li>
                        </ol>

                        </div>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Tại sao chọn học AVT tại Trung tâm trợ tính Cát tường?</h2>
                        <div className="text-base">
                             <div className=" text-black leading-relaxed">
  <div>
    <strong>ĐỘI NGŨ GIÁO VIÊN ĐƯỢC ĐÀO TẠO QUỐC TẾ</strong><br />
    Các giáo viên được đào tạo bài bản và chuyên sâu bởi chuyên gia AVT quốc tế giàu kinh nghiệm.
  </div>

  <div>
    <strong>CHƯƠNG TRÌNH CÁ NHÂN HÓA</strong><br />
    Mỗi học viên được xây dựng kế hoạch trị liệu riêng, phù hợp với tình trạng và nhu cầu cá nhân, dễ dàng theo dõi lộ trình phát triển.
  </div>

  <div>
    <strong>CHƯƠNG TRÌNH CÁ NHÂN HÓA</strong><br />
    Mỗi học viên được xây dựng kế hoạch trị liệu riêng, phù hợp với tình trạng và nhu cầu cá nhân, dễ dàng theo dõi lộ trình phát triển.
  </div>
</div>

                        </div>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Phản hồi về khóa học</h2>
                        <div className="gap-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {khoahocDetail?.commnents.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col p-6 items-start gap-3 mb-5  border-2 border-[#CFD1D4] rounded-lg">
                                    <div className="flex">
                                        <Image src={item.avatar} alt="DNXH Logo" width={48} height={48} className="rounded-full" />
                                        <div className="flex flex-col justify-center ml-3">
                                            <span className="text-[10px]">Học viên</span>
                                            <span className="text-lg">{item.name}</span>
                                        </div>
                                    </div>
                                    <div className="text-base">{item.content}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col mt-18 gap-3.5 bg-[#F2F2F3] py-12 px-[72px] rounded-lg">
                            <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">Đăng ký khóa học</h2>
                            <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.scienceRegistration ?? "" }} />
                        </div>
                        </> : <>
   <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">{khoahocDetail?.titlePost}</h2>
                        <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.courseIntroduction ?? "" }} />
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Đầu ra</h2>
                        <div className="text-base" >
                            <div className="text-sm text-black leading-relaxed space-y-2 pl-4">
                                <p>
                                    Phương pháp AVT hướng đến việc giúp trẻ khiếm thính phát triển kỹ năng ngôn ngữ nói và hiểu lời nói thông qua việc sử dụng khả năng nghe (ngay cả khi đã hỗ trợ bằng máy trợ thính hoặc cấy ốc tai điện tử). Đầu ra kỳ vọng bao gồm:
                                </p>

                                <p>
                                    <strong>1. Giao tiếp bằng lời nói</strong><br />
                                    Trẻ có khả năng sử dụng lời nói để giao tiếp thay vì chỉ dựa vào ký hiệu hoặc hình ảnh.<br />
                                    Phát triển ngữ âm, từ vựng, cú pháp và ngữ nghĩa gần ngang bằng với trẻ nghe bình thường cùng độ tuổi.
                                </p>

                                <p>
                                    <strong>2. Phát triển kỹ năng nghe</strong><br />
                                    Có khả năng nghe hiểu lời nói trong môi trường yên tĩnh và dần tiến tới môi trường có tiếng ồn.<br />
                                    Phân biệt âm thanh, từ đơn, câu nói và cảm xúc qua giọng nói.
                                </p>

                                <p>
                                    <strong>3. Phát triển ngôn ngữ tiếp thu (receptive) và ngôn ngữ diễn đạt (expressive)</strong><br />
                                    Hiểu ngôn ngữ người khác nói (receptive language).<br />
                                    Biết cách diễn đạt suy nghĩ, cảm xúc và mong muốn của mình bằng lời nói (expressive language).
                                </p>

                                <p>
                                    <strong>4. Hòa nhập học đường và xã hội</strong><br />
                                    Trẻ có thể học trong lớp học phổ thông mà không cần thông dịch viên ngôn ngữ ký hiệu.<br />
                                    Có khả năng tham gia vào các hoạt động cộng đồng, giao tiếp tự tin với bạn bè và người thân.
                                </p>
                            </div>


                        </div>
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Nội dung khóa học</h2>
                        <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.content ?? "" }} />
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Phản hồi về khóa học</h2>
                        <div className="gap-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {khoahocDetail?.commnents.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col p-6 items-start gap-3 mb-5  border-2 border-[#CFD1D4] rounded-lg">
                                    <div className="flex">
                                        <Image src={item.avatar} alt="DNXH Logo" width={48} height={48} className="rounded-full" />
                                        <div className="flex flex-col justify-center ml-3">
                                            <span className="text-[10px]">Học viên</span>
                                            <span className="text-lg">{item.name}</span>
                                        </div>
                                    </div>
                                    <div className="text-base">{item.content}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col mt-18 gap-3.5 bg-[#F2F2F3] py-12 px-[72px] rounded-lg">
                            <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">Đăng ký khóa học</h2>
                            <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.scienceRegistration ?? "" }} />
                        </div>
                        </>}
                            
                     
                    </>}
                    {/* <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">{khoahocDetail?.titlePost}</h2>
                    <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.courseIntroduction ?? "" }} />
                    <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Đầu ra</h2>
                    <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.output ?? "" }} />
                    <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Nội dung khóa học</h2>
                    <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.content ?? "" }} />
                    <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2 mt-10">Phản hồi về khóa học</h2>
                    <div className="gap-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {khoahocDetail?.commnents.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col p-6 items-start gap-3 mb-5  border-2 border-[#CFD1D4] rounded-lg">
                                <div className="flex">
                                    <Image src={item.avatar} alt="DNXH Logo" width={48} height={48} className="rounded-full" />
                                    <div className="flex flex-col justify-center ml-3">
                                        <span className="text-[10px]">Học viên</span>
                                        <span className="text-lg">{item.name}</span>
                                    </div>
                                </div>
                                <div className="text-base">{item.content}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col mt-18 gap-3.5 bg-[#F2F2F3] py-12 px-[72px] rounded-lg">
                        <h2 className="text-[32px] font-bold text-[#2E4FBE] mb-2">Đăng ký khóa học</h2>
                        <div className="text-base" dangerouslySetInnerHTML={{ __html: khoahocDetail?.scienceRegistration ?? "" }} />
                    </div> */}
                </div>
            </div >
        </>
    );
}
