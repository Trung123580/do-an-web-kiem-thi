import { dataSukien } from "@/utils/contanst";
import Image from "next/image";
type Params = Promise<{ "slug-taitro": string[] }>;

export default async function sukienDetailPage({ params }: { params: Params }) {
  const slug = (await params)["slug-taitro"][0];
  console.log(slug);
  const taitroDetail = dataSukien.find((taitro) => taitro.slug === slug);
  return (
    <div className="min-h-screen bg-gray-50 pb-16 py-16 pt-32 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">{taitroDetail?.title}</h1>
        <div className="bg-[#F2F2F3] rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-row">
            <div className="flex flex-col basis-1/3 gap-5">
              {taitroDetail?.organization.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={item.img} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
              {taitroDetail?.sponsoring.map((item, index) => (
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
              <p className="text-gray-700 mb-4 text-base">{taitroDetail?.description}</p>
              <ul className="space-y-1 text-base">
                <li>
                  <strong>Thời gian hoạt động:</strong> {taitroDetail?.time}
                </li>
                <li>
                  <strong>Địa điểm:</strong> {taitroDetail?.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div>
          <h2 className="text-3xl font-bold text-[#2E4FBE] mb-4">Giới thiệu chương trình</h2>
          <ul className="list-disc list-inside text-base ml-4 mb-16">
            {taitroDetail?.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#2E4FBE] mb-4">Tiêu chuẩn tham gia</h2>
          <ul className="list-disc list-inside text-base ml-4 mb-16">
            {taitroDetail?.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden mb-8 shadow-sm">
          <Image src={taitroDetail?.img || ""} alt="Workshop Volunteer Image" width={1000} height={400} className="w-full h-auto object-cover" />
        </div>

        {/* Details Sections */}

        <div className="rounded-xl p-8 space-y-8 mb-8">
          {/* Quyền lợi */}
          <div>
            <h2 className="text-3xl font-bold text-[#2E4FBE] mb-4">Quyền lợi tham gia</h2>
            <ul className="list-disc list-inside text-base">
              {taitroDetail?.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2E4FBE] mb-4">Nghĩa vụ tham gia</h2>
            <ul className="list-disc list-inside text-base">
              {taitroDetail?.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Yêu cầu */}
          <div>
            <h2 className="text-3xl font-bold text-[#2E4FBE] mb-4">Quy trình xét duyệt</h2>
            <ul className="list-disc list-inside text-base">
              {taitroDetail?.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
        {/* Apply Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white py-3 px-16 rounded-lg font-light hover:bg-blue-700 transition-colors text-lg">Đăng ký tham gia</button>
        </div>
      </div>
    </div>
  );
}
