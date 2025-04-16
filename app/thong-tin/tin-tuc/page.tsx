"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { dataNews } from "@/utils/contanst";

export default function Page() {
  const mainArticle = dataNews[0];
  const sideArticles = [dataNews[1], dataNews[2]]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-6 mb-16">
          {/* Main Featured Article */}
          <div className="lg:col-span-3">
            <Link href={`/thong-tin/tin-tuc/${mainArticle.slug}`}>
              <div className="group cursor-pointer">
                <div className="relative h-[500px] rounded-xl overflow-hidden mb-4">
                  <Image src={mainArticle.image} alt={mainArticle.title} fill className="object-cover" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 justify-between">
                    <span className="text-sm text-gray-500">{mainArticle.date}</span>
                    {mainArticle.tags && (
                      <div className="flex gap-2">
                        {mainArticle.tags.map((tag, index) => (
                          <span key={index} className="text-xs px-3 py-1 bg-[#F2F2F3] rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <h1 className="text-2xl font-semibold transition-colors">{mainArticle.title}</h1>
                  <p className="text-gray-600 line-clamp-2">{mainArticle.description}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-2 space-y-6">
            {sideArticles.map((article) => (
              <Link href={`/thong-tin/tin-tuc/${article.slug}`} key={article.id}>
                <div className="group cursor-pointer mb-4">
                  <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  <h2 className="font-bold mb-2 text-xl transition-colors line-clamp-2">{article.title}</h2>
                  <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 pr-10 border-r border-[#CFD1D4]">
            <h2 className="text-2xl font-bold mb-4">Tìm kiếm tin tức</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Học ngôn ngữ ký hiệu"
                className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Kiến thức", "Xã hội", "Giáo dục", "Nghề nghiệp", "Thể giới", "Sự kiện"].map((category, index) => (
                <button
                  key={index}
                  className="px-3 py-1 text-sm rounded-sm bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* News List */}
          <div className="lg:col-span-3">
            <div className="space-y-6 max-h-[800px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {dataNews.map((item) => (
                <Link href={`/thong-tin/tin-tuc/${item.slug}`} key={item.id}>
                  <div className="flex gap-6 group cursor-pointer mb-4  rounded-xl p-4">
                    <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between mt-12">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        {item.tags && (
                          <div className="flex gap-2">
                            {item.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-sm px-3 py-1 bg-gray-100 rounded-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
