import Link from "next/link";
import Image from "next/image";
import { stories_1 } from "@/utils/contanst";

export default function StoryGrid() {
  
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-8">
        <section className="">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {stories_1.slice(0,8).map((story, index) => {
              if (index === 1) {
                return (
                  <div key={index} className="relative h-[305px] bg-[#CFD1D4] rounded-xl flex items-center justify-center">
                    <h2 className="text-3xl md:text-5xl font-light text-center px-4">
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
                  <div key={index} className="relative h-[305px] bg-[#CFD1D4] rounded-xl flex items-center justify-center">
                    <h2 className="text-3xl md:text-5xl font-light text-center px-4">
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
                  <div className="group cursor-pointer relative h-[305px] rounded-xl overflow-hidden">
                    <Image src={story.img} alt={story.title} fill className="object-cover group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                      <h3 className="font-medium text-sm line-clamp-2">{story.title}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(181deg,rgba(42,123,155,0)_0%,#4177efd6_50%,#4177efd6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        {/* Button */}
        <div className="flex justify-end mt-6">
          <Link href={`thong-tin/cau-chuyen`}  className="flex items-center px-7 py-2 text-sm border-2 border-[#CFD1D4] text-[#414652] rounded-lg hover:bg-gray-100 transition">
            Xem thêm 
            <img src="/icon/arrow.png" alt="" />
          </Link>
        </div>
      </div>
    );
  }
  