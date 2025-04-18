import BannerSwiper from "@/components/banner-swiper"
import BoxColor2 from "@/components/BoxColor2"
import Button from "@/components/Button"
import Donate from "@/components/Donate"
import LatestNews from "@/components/LatestNews"
import StoryGrid from "@/components/StoryGrid"
import VietnamStatsMap from "@/components/vietnam-stats-map.tsx"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <BannerSwiper />
      <section className='relative w-full'>
        <div className='max-w-[846px] mx-auto h-[568px] flex justify-center items-center flex-col gap-[30px]'>
          <h3 className='text-header'>Hoạt động của chúng tôi</h3>
          <p className='text-description'>
            Foundation for Future cung cấp thông tin giáo dục và đào tạo hướng nghiệp trực tuyến, nhằm trang bị những kiến thức cơ bản và thiết yếu cho cộng đồng người khiếm thính. Qua đó, tổ chức hỗ trợ họ xây dựng nền tảng tự lập và phát triển bền
            vững trong cuộc sống.
          </p>
          <Link href={'/ve-chung-toi'} className='bg-[#111827] text-white !py-2 !px-8 md:!py-4 md:!px-14 rounded-[8px]'>
            Về chúng tôi
          </Link>
        </div>
        <BoxColor2 />
      </section>
      <VietnamStatsMap />
      <StoryGrid />
      <LatestNews />
      <Donate/>
    </div>
  )
}
