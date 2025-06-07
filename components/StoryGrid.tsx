import Link from "next/link";
import Image from "next/image";
import { stories_1 } from "@/utils/contanst";

export default function StoryGrid() {
  
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-8">
        <section className="">
          <div className="grid-cols-2 lg:grid-cols-4 gap-[20px] md:grid hidden">
            {stories_1.slice(0,8).map((story, index) => {
              if (index === 1) {
                return (
                  <div key={index} className="relative h-[305px] bg-[#F2F2F3] hover:bg-[#D8E0FB] transition-all rounded-xl flex items-center justify-center">
                    <h2 className="text-3xl md:text-5xl font-normal text-center px-4">
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
                  <div key={index} className="relative h-[305px] bg-[#F2F2F3] hover:bg-[#D8E0FB] transition-all rounded-xl flex items-center justify-center">
                    <h2 className="text-3xl md:text-5xl font-normal text-center px-4">
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
                      <h3 className="font-normal text-lg  line-clamp-2">{story.title}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(181deg,rgba(42,123,155,0)_0%,#4177efd6_50%,#4177efd6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              );
            })}
          </div>
           <div className="flex flex-wrap px-[32px] md:hidden *:w-[calc((100%-16px)/2)] gap-y-[16px] justify-between *:h-[147px]">
            {stories_1.slice(0,9).map((story, index) => {
              if (index === 1) {
                return (
                  <div key={index} className="relative  bg-[#F2F2F3] hover:bg-[#D8E0FB] rounded-xl flex items-center justify-center">
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
              if (index === 2) {
                return (
                  <div key={index} className="relative  bg-[#F2F2F3] hover:bg-[#D8E0FB] rounded-xl flex items-center justify-center">
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
                <Link className={`${(index === 4 || index === 5 || index === 3 || index === 6 || index === 7) ? 'hidden':'block'}`} key={index} href={`/thong-tin/cau-chuyen/${story.slug}`}>
                  <div className="group cursor-pointer relative w-full h-[147px] rounded-xl overflow-hidden">
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
          {/* <Link href={`thong-tin/cau-chuyen`}  className={`flex gap-2 items-center px-7 py-2 text-sm  border-2 border-transparent md:border-[#F2F2F3] text-[#414652] rounded-lg hover:bg-gray-100`}>
            Xem thêm 
            <img src="/icon/arrow.png" alt="" className="md:block hidden" />
          </Link> */}
           <Link href='thong-tin/cau-chuyen' className={`flex items-center gap-2 px-7 py-2 text-sm  border-2 border-transparent md:border-[#CFD1D4] text-[#414652] rounded-lg hover:bg-gray-100 transition`}>
          Xem thêm
          <img src='/icon/arrow.png' alt='' className='md:block hidden' />
        </Link>
        </div>
      </div>
    );
  }
  