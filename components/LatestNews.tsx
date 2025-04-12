export default function LatestNews() {
  const news = [
    {
      title: "Cơ Hội Việc Làm Thách Thức và Rào Cản Đối Với Người khiếm thính/Điếc",
      image: "/image/news-1.png",
      badges: ["Kiến thức", "Xã hội"],
    },
    {
      title: "Quán cà phê đặc biệt của người khiếm thính",
      image: "/image/news-2.png",
      badges: ["Xã hội"],
    },
    {
      title: "Các yếu tố nguy cơ gây điếc ở trẻ sơ sinh và trẻ nhỏ",
      image: "/image/news-3.png",
      badges: ["Kiến thức"],
    },
    {
      title: "Cơ Hội Việc Làm Thách Thức và Rào Cản Đối Với Người khiếm thính/Điếc",
      image: "/image/news-1.png",
      badges: ["Kiến thức", "Xã hội"],
    },
    {
      title: "Quán cà phê đặc biệt của người khiếm thính",
      image: "/image/news-2.png",
      badges: ["Xã hội"],
    },
    {
      title: "Các yếu tố nguy cơ gây điếc ở trẻ sơ sinh và trẻ nhỏ",
      image: "/image/news-3.png",
      badges: ["Kiến thức"],
    },
    {
      title: "Cơ Hội Việc Làm Thách Thức và Rào Cản Đối Với Người khiếm thính/Điếc",
      image: "/image/news-1.png",
      badges: ["Kiến thức", "Xã hội"],
    },
    {
      title: "Quán cà phê đặc biệt của người khiếm thính",
      image: "/image/news-2.png",
      badges: ["Xã hội"],
    },
    {
      title: "Các yếu tố nguy cơ gây điếc ở trẻ sơ sinh và trẻ nhỏ",
      image: "/image/news-3.png",
      badges: ["Kiến thức"],
    },
  ]

  return (
    <section className='max-w-7xl mx-auto px-4 md:px-8 py-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>Tin mới nhất</h2>
      </div>

      {/* Scrollable list */}
      <div className='flex gap-4 overflow-x-auto scrollbar-hide pb-2'>
        {news.map((item, index) => (
          <div key={index} className='min-w-[521px] max-w-[521px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition'>
            <div className='relative h-[400px] w-full'>
              <img src={item.image} alt={item.title} className='object-cover w-full h-full' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              <div className='absolute bottom-0 p-3 text-white text-sm font-medium flex flex-col'>
                {item.title}
                <div className='flex gap-1 flex-wrap'>
                  {item.badges.map((b, i) => (
                    <span key={i} className='text-[10px] px-2 py-0.5 bg-white/80 text-gray-800 rounded-full'>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              {/* Badges */}
            </div>
          </div>
        ))}
        {/* Xem thêm button */}
      </div>
      <div className="flex justify-end mt-6">
        <button className="flex items-center px-4 py-2 text-sm border border-[#CFD1D4] text-[#414652] rounded-xs hover:bg-gray-100 transition">
          Xem thêm 
          <img src="/icon/arrow.png" alt="" />
        </button>
      </div>
    </section>
  )
}
