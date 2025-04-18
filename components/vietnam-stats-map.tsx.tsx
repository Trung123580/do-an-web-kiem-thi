export default function VietnamStatsMap() {
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-lg p-4">
      {/* Bản đồ */}
      <img src="/image/map-vi.png" alt="Bản đồ Việt Nam" className="w-full aspect-square object-contain" />

      {/* Layout desktop: absolute */}
      <div className="hidden md:block *:hover:scale-125 *:transition-all">
        {/* Box: 5% */}
        <div className=" absolute top-[13%] left-1/2 transform -translate-x-1/2 w-40 h-40 bg-[#B0C1F8] rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2">5%</h3>
          <p className="text-xs text-gray-700">Hơn 5% dân số thế giới cần khắc phục tình trạng mất thính lực</p>
        </div>

        {/* Box: 1200 */}
        <div className="absolute top-[50%] left-[20%] transform -translate-y-1/2 w-40 h-40 bg-[#B0C1F8] rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2">1200</h3>
          <p className="text-xs text-gray-700">Hàng năm có từ 1.200 - 1.400 trẻ khiếm thính ra đời tại Việt Nam</p>
        </div>

        {/* Box: 2.5 triệu */}
        <div className="absolute top-[50%] right-[15%] w-40 h-40 bg-[#B0C1F8] rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2">2,5 triệu</h3>
          <p className="text-xs text-gray-700">Cả nước có khoảng 2,5 triệu người khuyết tật nghe nói</p>
        </div>
      </div>

      {/* Layout mobile: dưới cùng */}
      <div className="md:hidden mt-4 flex flex-col gap-4 items-center">
        <div className="w-full bg-[#B0C1F8] rounded-lg p-4 text-center">
          <h3 className="text-2xl font-bold mb-1">5%</h3>
          <p className="text-sm text-gray-700">Hơn 5% dân số thế giới cần khắc phục tình trạng mất thính lực</p>
        </div>
        <div className="w-full bg-[#B0C1F8] rounded-lg p-4 text-center">
          <h3 className="text-2xl font-bold mb-1">1200</h3>
          <p className="text-sm text-gray-700">Hàng năm có từ 1.200 - 1.400 trẻ khiếm thính ra đời tại Việt Nam</p>
        </div>
        <div className="w-full bg-[#B0C1F8] rounded-lg p-4 text-center">
          <h3 className="text-2xl font-bold mb-1">2,5 triệu</h3>
          <p className="text-sm text-gray-700">Cả nước có khoảng 2,5 triệu người khuyết tật nghe nói</p>
        </div>
      </div>
    </div>
  );
}
