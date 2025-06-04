'use client';

import Link from 'next/link';

const data = [
  {
    name: 'Chử Thị Thanh Hương',
    image: '/image/tu-van-1.jpg',
    info: `Chủ tịch Hội Cha Mẹ Trẻ Khiếm Thính và <br/> Người Khiếm Thính Việt Nam <br/>
Sáng lập/ Giám đốc Doanh nghiệp xã <br/> hội vì người khiếm thính Việt Nam`,
    description: `Từ một người mẹ có con bị khiếm thính, bà Chử Thị Thanh Hương hiện đang là Chủ tịch của Hội Cha Mẹ Trẻ Khiếm Thính và Người Khiếm thính Việt Nam (VNAP HLC) được thành lập năm 2012 với hơn 6.000 thành viên. Đây là tổ chức vì người khiếm thính đầu tiên tại Việt Nam. Đồng thời, bà cũng là CEO của Công Ty TNHH Doanh Nghiệp Xã Hội Vì Người Khiếm Thính Việt Nam (She+) được thành lập năm 2018. VNAP HLC và She+ là nơi đã đồng hành cùng hàng nghìn phụ huynh có con bị khiếm thính và người khiếm thính trong hành trình tìm lại âm thanh và hòa nhập cộng đồng.`,
    phone: '0904128048',
    email: 'vnaphlcs@gmail.com'
  },
  {
    name: 'Ths. Trần Thị Thiệp',
    image: '/image/tu-van-2.jpg',
    info: `Nguyên phó trưởng khoa Giáo dục đặc <br/> biệt trường Đại học Sư Phạm Hà Nội <br/>
Trưởng bộ môn Giáo dục trẻ khiếm thính <br/> và trẻ khuyết tật ngôn ngữ`,
    description: `Thạc sĩ – Giảng viên chính Trần Thị Thiệp hiện là Phó Trưởng khoa Giáo dục Đặc biệt và Trưởng bộ môn Giáo dục trẻ khiếm thính và trẻ khuyết tật ngôn ngữ tại Trường Đại học Sư phạm Hà Nội. Với hơn 30 năm kinh nghiệm trong lĩnh vực giáo dục đặc biệt, cô Thiệp là một trong những chuyên gia hàng đầu tại Việt Nam trong đào tạo giáo viên và nghiên cứu can thiệp sớm cho trẻ khuyết tật, đặc biệt là trẻ khiếm thính. Cô từng học tập và công tác tại Hà Lan, đồng thời là tác giả của nhiều giáo trình chuyên môn như Ngôn ngữ ký hiệu Thực hành, Can thiệp sớm cho trẻ khuyết tật, Quản lý giáo dục hòa nhập trẻ khuyết tật, v.v. Không chỉ giảng dạy, cô còn tích cực nghiên cứu các đề tài thực tiễn như phát hiện sớm trẻ điếc sơ sinh, hỗ trợ phụ huynh trẻ khuyết tật, và việc làm cho sinh viên ngành giáo dục đặc biệt. Cô Trần Thị Thiệp là người đóng góp sâu sắc cho sự phát triển của giáo dục đặc biệt và giáo dục hòa nhập tại Việt Nam.`,
    phone: '0913349534',
    email: 'ttthiep@yahoo.com.vn'
  },
  {
    name: 'Ths. Đỗ Thị Hảo',
    image: '/image/tu-van-3.png',
    info: `Thạc sĩ trị liệu ngôn ngữ, hiện đang <br/> làm giáo viên dạy phát triển ngôn ngữ của <br/> Doanh nghiệp xã hội vì người khiếm <br/> thính Việt Nam`,
    description: `Thạc sĩ Đỗ Thị Hảo là một chuyên gia trong lĩnh vực phát triển ngôn ngữ, hiện đang là giảng viên tại Doanh nghiệp Xã hội vì Người Khiếm thính Việt Nam, nơi cô đã gắn bó hơn 2 năm. Với hơn 7 năm kinh nghiệm làm việc cùng trẻ khiếm thính và các trẻ có dạng tật khác như tăng động, tự kỷ, chậm nói, cô đã để lại nhiều dấu ấn trong việc hỗ trợ và can thiệp ngôn ngữ. Tốt nghiệp chuyên ngành Ngôn ngữ học tại Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG Hà Nội, cô từng thực tập lâm sàng tại Trung tâm Thính học và Trị liệu Lời nói, Bệnh viện Nhi Trung ương, và đảm nhiệm vai trò kỹ viên mapping điện cực cho hãng Cochlear. Trước đó, cô cũng là cán bộ can thiệp trị liệu ngôn ngữ tại Bệnh viện Vinmec, nơi cô tích lũy nhiều kinh nghiệm thực tiễn. Với kiến thức chuyên sâu và sự tận tâm, Thạc sĩ Đỗ Thị Hảo đã góp phần quan trọng vào việc nâng cao khả năng giao tiếp và hòa nhập cho trẻ khiếm thính và các nhóm trẻ đặc biệt khác.`,
    phone: '0983261384',
    email: 'ttthiep@yahoo.com.vn'
  }
]
export default function page() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-20 md:px-0 pb-8">
      <div className='container mx-auto px-4 pb-8'>
      <nav className="bg-white pb-6 pt-8">
        <div className="mx-auto">
          <div className="flex items-center h-12">
            <Link
              href="/giao-duc"
              className="text-[#A0A3A9] hover:text-gray-900 text-lg font-normal"
            >
              Giáo dục
            </Link>
            <span className="mx-2 text-2xl text-black"><img src="/arrow.png" alt="" /></span>
            <span className="text-[#3A63ED] text-lg font-normal">Tư vấn định hướng học tập</span>
          </div>
        </div>
      </nav>
        <h2 className='text-5xl font-bold pb-[32px]'>Tư vấn định hướng học tập</h2>
        <div className='flex flex-col gap-5'>
          {data.map((item) => <div className='flex flex-col xl:gap-0 gap-5 items-center xl:flex-row py-[56px] px-[50px] xl:px-[108px] bg-[#F2F2F3] rounded-2xl'>
            <div className='flex-1 md:flex-2/5'>
              <img className='rounded-full w-[305px] h-[305px] object-cover' src={item.image} alt="" />
              <h3 className='text-2xl font-bold text-center pt-6 pb-2'>{item.name}</h3>
              <p className='text-[16px] text-[#70747D] font-normal' dangerouslySetInnerHTML={{__html: item.info}}></p>
            </div>
            <div className='flex-1 md:flex-3/5 flex flex-col justify-center'>
              <p className='text-[16px] font-normal text-[#111827] pb-7'>{item.description}</p>
              <div className='text-[16px]'>
                <h4 className='font-bold'>Thông tin liên hệ:</h4>
                <ul className='list-disc pl-7'>
                  <li>Số điện thoại: {item.phone}</li>
                  <li>Email: {item.email}</li>
                </ul>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  );
}