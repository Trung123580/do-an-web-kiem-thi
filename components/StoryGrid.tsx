export default function StoryGrid() {
    const stories = [
      {
        title: 'Câu chuyện của cậu bé khiếm thính',
        image: '/image/story-1.png',
      },
      {
        title: 'MỖI CÂU CHUYỆN',
        special: true,
      },
      {
        title: 'Câu chuyện xúc động về nữ giáo viên Mỹ giúp trẻ khiếm thính',
        image: '/image/story-2.png',
      },
      {
        title: 'Những câu chuyện đẹp góp cho đời: Chuyện “thuyền thơ”…',
        image: '/image/story-3.png',
      },
      {
        title: 'Người phụ nữ có con bị khiếm thính và hành trình giúp...',
        image: '/image/story-4.png',
      },
      {
        title: 'Cô gái khiếm thính ở Việt Nam giành học bổng...',
        image: '/image/story-5.png',
      },
      {
        title: 'Họa sĩ khiếm thính Nam Long: Mẹ là người thầy đầu tiên...',
        image: '/image/story-6.png',
      },
      {
        title: 'LÀ MỘT CẢM HỨNG',
        special: true,
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden ${
                story.special
                  ? 'bg-gray-100 flex items-center justify-center text-center text-xl md:text-2xl font-semibold text-gray-900'
                  : 'bg-white shadow hover:shadow-md transition duration-200'
              }`}
            >
              {!story.special && (
                <>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-2">
                    {story.title}
                  </div>
                </>
              )}
              {story.special && <span className="text-[48px] font-normal -tracking-tight px-10">{story.title}</span>}
            </div>
          ))}
        </div>
  
        {/* Button */}
        <div className="flex justify-end mt-6">
          <button className="flex items-center px-4 py-2 text-sm border border-[#CFD1D4] text-[#414652] rounded-xs hover:bg-gray-100 transition">
            Xem thêm 
            <img src="/icon/arrow.png" alt="" />
          </button>
        </div>
      </div>
    );
  }
  