import Link from "next/link";
import Image from "next/image";
import { stories } from "@/utils/contanst";

export default function StoryGrid() {
  
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <section className="">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stories.map((story, index) => {
              if (index === 1) {
                return (
                  <div key={index} className="relative h-[250px] bg-[#CFD1D4] rounded-xl flex items-center justify-center">
                    <h2 className="text-5xl font-light text-center px-4">
                      MỖI
                      <br />
                      CÂU
                      <br />
                      CHUYỆN
                    </h2>
                  </div>
                );
              }
              if (index === 7) {
                return (
                  <div key={index} className="relative h-[250px] bg-[#CFD1D4] rounded-xl flex items-center justify-center">
                    <h2 className="text-5xl font-light text-center px-4">
                      LÀ MỘT
                      <br />
                      CẢM
                      <br />
                      HỨNG
                    </h2>
                  </div>
                );
              }
              if (typeof story === 'string') return null;
              return (
                <Link key={index} href={`/thong-tin/cau-chuyen/${story.slug}`}>
                  <div className="group cursor-pointer relative h-[250px] rounded-xl overflow-hidden">
                    <Image src={story.img} alt={story.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-medium text-sm line-clamp-2">{story.title}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        {/* Button */}
        <div className="flex justify-end mt-6">
          <Link href={`thong-tin/cau-chuyen`}  className="flex items-center px-4 py-2 text-sm border border-[#CFD1D4] text-[#414652] rounded-xs hover:bg-gray-100 transition">
            Xem thêm 
            <img src="/icon/arrow.png" alt="" />
          </Link>
        </div>
      </div>
    );
  }
  