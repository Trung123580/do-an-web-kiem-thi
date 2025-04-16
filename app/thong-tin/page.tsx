"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const latestNews = [
  {
    title: "Cơ Hội Việc Làm Thách Thức và Rào Cản Đối Với Người khiếm thính/Điếc",
    img: "/image/news-1.png",
    slug: "co-hoi-viec-lam-thach-thuc-va-rao-can",
    tags: ["Việc làm", "Xã hội"],
  },
  {
    title: "Quán cà phê độc đáo của người khiếm thính",
    img: "/image/news-2.png",
    slug: "quan-ca-phe-doc-dao-cua-nguoi-khiem-thinh",
    tags: ["Xã hội"],
  },
  {
    title: "Các yếu tố nguy cơ gây điếc trẻ sơ sinh và trẻ nhỏ",
    img: "/image/news-3.png",
    slug: "cac-yeu-to-nguy-co-gay-diec-tre-so-sinh",
    tags: ["Sức khỏe"],
  },
];

const stories = [
  {
    title: "Câu chuyện của cậu bé khiếm thính",
    img: "/image/story-1.png",
    slug: "cau-chuyen-cua-cau-be-khiem-thinh",
  },
  {
    title: "Câu chuyện sức sống và nữ giáo viên Mỹ giúp trẻ khiếm thính",
    img: "/image/story-2.png",
    slug: "cau-chuyen-suc-song-va-nu-giao-vien",
  },
  {
    title: "Câu chuyện đẹp góp cho đời: Chuyện 'huyền thoại...'",
    img: "/image/story-2.png",
    slug: "cau-chuyen-suc-song-va-nu-giao-vien",
  },
  {
    title: "Câu chuyện đẹp góp cho đời: Chuyện 'huyền thoại...'",
    img: "/image/story-2.png",
    slug: "cau-chuyen-suc-song-va-nu-giao-vien",
  },
  {
    title: "Hoa sĩ khiếm thính Nam Long: Mẹ là người thầy dạy...",
    img: "/image/story-5.png",
    slug: "hoa-si-khiem-thinh-nam-long",
  },
  {
    title: "Những câu chuyện đặc biệt cho độc giả: Chuyện truyền thông...",
    img: "/image/story-4.png",
    slug: "nhung-cau-chuyen-dac-biet",
  },
];

export default function Page() {
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
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Latest News Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Tin mới nhất</h2>
          <div className="w-full">
            <Slider {...carouselSettings} className="news-carousel -mx-3">
              {latestNews.map((news, index) => (
                <div key={index} className="px-3">
                  <Link href={`/thong-tin/${news.slug}`}>
                    <div className="group cursor-pointer relative">
                      <div className="relative h-[370px] rounded-xl overflow-hidden">
                        <Image src={news.img} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
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
          </div>
          <div className="text-end mt-6">
            <Link href="/thong-tin/cau-chuyen" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-4 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
              Xem thêm &rarr;
            </Link>
          </div>
        </section>

        {/* Stories Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href={`/thong-tin/cau-chuyen/1`}>
              <div className="group cursor-pointer relative h-[250px] rounded-xl overflow-hidden">
                <Image src={stories[0].img} alt={stories[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-medium text-sm line-clamp-2">{stories[0].title}</h3>
                </div>
              </div>
            </Link>
            <div className="relative h-[250px] bg-[#CFD1D4] rounded-xl flex items-center justify-center">
              <h2 className="text-5xl font-light text-center px-4">
                MỖI
                <br />
                CÂU
                <br />
                CHUYỆN
              </h2>
            </div>
            <Link href={`/thong-tin/cau-chuyen/1`}>
              <div className="group cursor-pointer relative h-[250px] rounded-xl overflow-hidden">
                <Image src={stories[1].img} alt={stories[1].title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-medium text-sm line-clamp-2">{stories[1].title}</h3>
                </div>
              </div>
            </Link>
            <Link href={`/thong-tin/cau-chuyen/1`}>
              <div className="group cursor-pointer relative h-[250px] rounded-xl overflow-hidden">
                <Image src={stories[2].img} alt={stories[2].title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-medium text-sm line-clamp-2">{stories[2].title}</h3>
                </div>
              </div>
            </Link>
            <Link href={`/thong-tin/cau-chuyen/1`}>
              <div className="group cursor-pointer relative h-[250px] rounded-xl overflow-hidden">
                <Image src={stories[3].img} alt={stories[3].title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-medium text-sm line-clamp-2">{stories[3].title}</h3>
                </div>
              </div>
            </Link>
            <Link href={`/thong-tin/cau-chuyen/1`}>
              <div className="group cursor-pointer relative h-[250px] rounded-xl overflow-hidden">
                <Image src={stories[4].img} alt={stories[4].title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-medium text-sm line-clamp-2">{stories[4].title}</h3>
                </div>
              </div>
            </Link>
            <Link href={`/thong-tin/cau-chuyen/1`}>
              <div className="group cursor-pointer relative h-[250px] rounded-xl overflow-hidden">
                <Image src={stories[5].img} alt={stories[5].title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-medium text-sm line-clamp-2">{stories[5].title}</h3>
                </div>
              </div>
            </Link>
            <div className="relative h-[250px] bg-[#CFD1D4] rounded-xl flex items-center justify-center">
              <h2 className="text-5xl font-light text-center px-4">
                LÀ MỘT
                <br />
                CẢM
                <br />
                HỨNG
              </h2>
            </div>
          </div>
          <div className="text-end mt-6">
            <Link href="/thong-tin/cau-chuyen" className="inline-flex items-center text-sm font-medium hover:text-gray-900 px-4 py-2 rounded-sm border bg-[#FFFFFF] border-[#CFD1D4] text-[#414652]">
              Xem thêm &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
