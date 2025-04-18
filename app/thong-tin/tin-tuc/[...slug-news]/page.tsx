"use client";
import React, { useState, use } from "react";
import Image from "next/image";
import { dataNews } from "@/utils/contanst";

type PageParams = {
  params: Promise<{
    "slug-news": string[];
  }>;
};

export default function Page({ params }: PageParams) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams["slug-news"][0];
  const [newDetail, setnewDetail] = useState(dataNews.find((newItem) => newItem.slug === slug));

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="mb-8">
        <div className=" h-[600px] flex flex-row">
          <div className="basis-1/2 bg-[#111827] flex flex-col justify-end items-center">
            <div className="text-6xl text-white font-bold mb-10 max-w-4xl">
              {newDetail?.title}
              <div className="text-lg text-white font-normal mt-3">{newDetail?.description}</div>
            </div>
          </div>
          <div className="basis-1/2">
            <Image src={newDetail?.image ?? ""} alt="" fill className="object-cover !relative" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row gap-2">
            <div>
              <Image src={newDetail?.imageAuthor ?? ""} fill alt="" className="object-cover !relative" />
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
