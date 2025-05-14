'use client'
import { dataTaiTro } from "@/utils/contanst";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"


export default function TaitroDetailPage() {
  const params = useParams()
  const slug: any = params["slug-taitro"]
  const taiTroDetail: any = dataTaiTro.find((taitro) => taitro.slug === slug[0]);
  return (
    <div className="min-h-screen pb-16 py-16 pt-20 max-w-7xl mx-auto md:px-0 px-4">
      <div className="container mx-auto">
        <nav className="bg-white">
          <div className="mx-auto  md:pb-6 md:pt-8 pb-4 pt-6">
            <div className="flex items-center h-12">
              <Link
                href="/cong-dong"
                className="text-[#A0A3A9] hover:text-gray-900"
              >
               Cộng đồng
              </Link>
              <span className="mx-2 text-2xl text-black">&gt;</span>
              <Link
                href="/cong-dong/hoat-dong"
                className="text-[#A0A3A9] hover:text-gray-900"
              >
              Hoạt động
              </Link>
              <span className="mx-2 text-2xl text-black">&gt;</span>
              <span className="text-[#3A63ED]">Chương trình tài trợ</span>
            </div>
          </div>
        </nav>
        <h1 className="text-4xl font-bold mb-8">{taiTroDetail?.title}</h1>
        <div className="bg-[#F2F2F3] rounded-xl shadow-sm p-8 mb-8">
          <div className="md:flex flex-row block gap-4">
            <div className="flex flex-col basis-1/3 gap-5 mb-4 md:mb-0">
              {taiTroDetail?.organization.map((item: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={item.img} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
              {taiTroDetail?.sponsoring.map((item: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={item.img} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="text-xs text-gray-500">Đơn vị tài trợ</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="basis-2/3">
              <p className="text-gray-700 mb-4 text-base">{taiTroDetail?.description}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl py-8 space-y-8">
          <div className="text-base" dangerouslySetInnerHTML={{ __html: taiTroDetail?.content ?? "" }} />
          <div className="rounded-xl overflow-hidden mb-2 shadow-sm max-h-[400px] h-[400px] ww-full">
            <img src={taiTroDetail?.img || ""} alt="Workshop Volunteer Image" className="w-full h-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div >
  );
}
