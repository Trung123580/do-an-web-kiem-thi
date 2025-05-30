import Image from "next/image";
import {  stories_1 } from "@/utils/contanst";
type Params = Promise<{ 'slug-story': string[] }>

export default async function Page({ params }: { params: Params }) {
  const slug = (await params)["slug-story"][0]
  const newDetail = stories_1.find((newItem) => newItem.slug === slug)
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="mb-8">
        <div className='flex xl:flex-row flex-col relative'>
          <div className='flex-2/4 min-h-[400px] bg-[#111827] flex flex-col justify-end pl-[40px] md:pl-[80px] pr-[32px] pb-[56px] gap-[16px]'>
            <h3 className="text-5xl font-bold text-white mt-10 xl:hidden block">{newDetail?.title}</h3>
            <p className="text-lg font-normal text-white xl:hidden block">{newDetail?.description}</p>
          </div>
          <div className='flex-2/4'>
            <img src={newDetail?.img} className="h-full w-full object-cover  max-h-[600px]" alt='asdas' />
          </div>
          <div className="absolute max-w-7xl w-full xl:flex hidden bottom-14 left-1/2 pl-4 -translate-x-1/2 ">

            <div className="flex-2/4 pr-5">
              <h3 className="text-5xl font-bold text-white mt-10">{newDetail?.title}</h3>
              <p className="text-lg font-normal text-white mt-4">{newDetail?.description}</p>
            </div>
            <div className="flex-2/4">
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row gap-2">
            <div>
              <Image src={newDetail?.imageAuthor ?? ""} width={48} height={48} alt="" className="object-cover !relative" />
            </div>
            <div>
              <div>
                <p className="text-gray-500 text-xs">Người viết</p>
                <h1 className="text-base text-gray-900">{newDetail?.author}</h1>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{newDetail?.date}</p>
          </div>
          {/* Content */}
          <div className="prose max-w-none mt-5">
            <div className="text-lg" dangerouslySetInnerHTML={{ __html: newDetail?.content ?? "" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
