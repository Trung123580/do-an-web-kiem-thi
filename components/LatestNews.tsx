import { dataNews } from "@/utils/contanst";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

export default function LatestNews() {
  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='max-w-7xl mx-auto px-4 md:px-8 py-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>Tin mới nhất</h2>
      </div>

      {/* Scrollable list */}
      <Slider {...carouselSettings} className="news-carousel -mx-3">
        {dataNews.map((news, index) => (
          <div key={index} className="px-3">
            <Link href={`/thong-tin/tin-tuc/${news.slug}`}>
              <div className="group cursor-pointer relative">
                <div className="relative h-[370px] rounded-xl overflow-hidden">
                  <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
                  <div className="space-y-2 absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-semibold text-lg transition-colors line-clamp-2">{news.title}</h3>
                    <div className="flex gap-2">
                      {news.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-sm text-black px-3 py-1 bg-white rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <div className="flex justify-end mt-6">
        <Link href='/thong-tin/tin-tuc' className="flex items-center px-4 py-2 text-sm border border-[#CFD1D4] text-[#414652] rounded-xs hover:bg-gray-100 transition">
          Xem thêm 
          <img src="/icon/arrow.png" alt="" />
        </Link>
      </div>
    </section>
  )
}
