export default function LatestNews() {
    const news = [
      {
        title: 'Cơ Hội Việc Làm Thách Thức và Rào Cản Đối Với Người khiếm thính/Điếc',
        image: '/images/news-1.jpg',
        badges: ['Kiến thức', 'Xã hội'],
      },
      {
        title: 'Quán cà phê đặc biệt của người khiếm thính',
        image: '/images/news-2.jpg',
        badges: ['Xã hội'],
      },
      {
        title: 'Các yếu tố nguy cơ gây điếc ở trẻ sơ sinh và trẻ nhỏ',
        image: '/images/news-3.jpg',
        badges: ['Kiến thức'],
      },
      {
        title: 'Cơ Hội Việc Làm Thách Thức và Rào Cản Đối Với Người khiếm thính/Điếc',
        image: '/images/news-1.jpg',
        badges: ['Kiến thức', 'Xã hội'],
      },
      {
        title: 'Quán cà phê đặc biệt của người khiếm thính',
        image: '/images/news-2.jpg',
        badges: ['Xã hội'],
      },
      {
        title: 'Các yếu tố nguy cơ gây điếc ở trẻ sơ sinh và trẻ nhỏ',
        image: '/images/news-3.jpg',
        badges: ['Kiến thức'],
      },
      {
        title: 'Cơ Hội Việc Làm Thách Thức và Rào Cản Đối Với Người khiếm thính/Điếc',
        image: '/images/news-1.jpg',
        badges: ['Kiến thức', 'Xã hội'],
      },
      {
        title: 'Quán cà phê đặc biệt của người khiếm thính',
        image: '/images/news-2.jpg',
        badges: ['Xã hội'],
      },
      {
        title: 'Các yếu tố nguy cơ gây điếc ở trẻ sơ sinh và trẻ nhỏ',
        image: '/images/news-3.jpg',
        badges: ['Kiến thức'],
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Tin mới nhất</h2>
        </div>
  
        {/* Scrollable list */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {news.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-3 text-white text-sm font-medium">
                  {item.title}
                </div>
                {/* Badges */}
                <div className="absolute bottom-2 left-3 flex gap-1 flex-wrap">
                  {item.badges.map((b, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 bg-white/80 text-gray-800 rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Xem thêm button */}
          
        </div>
        <div className="min-w-[120px] flex items-center justify-center">
            <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100">
              Xem thêm →
            </button>
          </div>
      </section>
    );
  }
  