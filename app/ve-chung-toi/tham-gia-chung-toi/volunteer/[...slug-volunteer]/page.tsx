import { dataVolunteer } from "@/utils/contanst";
import Image from "next/image";
import Link from "next/link";
type Params = Promise<{ 'slug-volunteer': string[] }>

export default async function VolunteerDetailPage({ params }: { params: Params }) {
  const slug = (await params)["slug-volunteer"][0]
  const volunteerDetail = dataVolunteer.find((volunteer) => volunteer.slug === slug)
  return (
    <div className="min-h-screen pb-16 py-16 pt-32 mx-auto max-w-7xl">
      <div className="container mx-auto">
      <nav className="bg-white">
        <div className="mx-auto">
          <div className="flex items-center h-12 mb-8">
            <Link 
              href="/ve-chung-toi/tham-gia-chung-toi"
              className="text-[#A0A3A9] hover:text-gray-900"
            >
             Tham gia cùng chúng tôi
            </Link>
            <span className="mx-2 text-2xl text-black">&gt;</span>
            <span className="text-[#3A63ED]">Tham gia tình nguyện</span>
          </div>
        </div>
      </nav>
        <h1 className="text-4xl font-bold mb-8">{volunteerDetail?.title}</h1>
        <div className="bg-[#F2F2F3] rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-row">
            <div className="flex flex-col basis-1/3 gap-5">
              {volunteerDetail?.organization.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={item.img} alt="DNXH Logo" width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="text-xs text-gray-500">Đơn vị tổ chức</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
              {volunteerDetail?.sponsoring.map((item, index) => (
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
              <p className="text-gray-700 mb-4 text-base">
                {volunteerDetail?.description}
              </p>
              <ul className="space-y-1 text-base">
                <li>
                  <strong>Thời gian hoạt động:</strong> {volunteerDetail?.time}
                </li>
                <li>
                  <strong>Địa điểm:</strong> {volunteerDetail?.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div className="rounded-xl overflow-hidden mb-8 shadow-sm">
          <Image
            src={volunteerDetail?.img || ''}
            alt="Workshop Volunteer Image"
            width={1000}
            height={400}
            className="w-full rounded-xl h-auto object-cover"
          />
        </div>

        {/* Details Sections */}
        <div className="rounded-xl p-8 space-y-8 mb-8">
          {/* Yêu cầu */}
          <div>
            <h2 className="text-2xl font-bold text-[#2E4FBE] mb-4">Yêu cầu</h2>
            <ul className="list-disc list-inside text-gray-600 text-base">
              {volunteerDetail?.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Vai trò */}
          <div>
            <h2 className="text-2xl font-bold text-[#2E4FBE] mb-4">Vai trò</h2>
            <ul className="list-disc list-inside text-gray-600 text-base">
              {volunteerDetail?.roles.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Quyền lợi */}
          <div>
            <h2 className="text-2xl font-bold text-[#2E4FBE] mb-4">Quyền lợi</h2>
            <ul className="list-disc list-inside text-gray-600 text-base">
              {volunteerDetail?.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white py-3 px-16 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg">Trở thành tình nguyện viên</button>
        </div>
      </div>
    </div>
  );
}
