"use client";
import Image from "next/image";
import { stories_1 } from "@/utils/contanst";
type Params = Promise<{ 'slug-story': string[] }>

export default async function Page({ params }: { params: Params }) {
  const slug = (await params)["slug-story"][0]
  const storyDetail: any = stories_1.find((storyItem: any) => storyItem.slug === slug)
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="mb-8">
        <div className=" h-[600px] flex flex-row">
          <div className="basis-1/2 bg-[#111827] px-14 flex flex-col justify-end items-center">
            <div className="text-6xl text-white font-bold mb-10 max-w-4xl">
              {storyDetail?.title ?? ''}
              <div className="text-lg text-white font-normal mt-3">{storyDetail?.description}</div>
            </div>
          </div>
          <div className="basis-1/2">
            <Image src={storyDetail?.img ?? ""} alt="" fill className="object-cover !relative" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row gap-2">
            <div>
              <Image src={storyDetail?.imageAuthor ?? ""} width={48} height={48} alt="" className="object-cover !relative" />
            </div>
            <div>
              <div>
                <p className="text-gray-500 text-xs">Người viết</p>
                <h1 className="text-base text-gray-900">{storyDetail?.author}</h1>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{storyDetail?.date}</p>
          </div>
          {/* Content */}
          <div className="prose max-w-none mt-5">
            <div className="text-lg" dangerouslySetInnerHTML={{ __html: storyDetail?.content ?? "" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
