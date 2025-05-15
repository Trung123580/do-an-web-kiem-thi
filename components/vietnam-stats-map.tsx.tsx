export default function VietnamStatsMap() {
  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-lg p-4">
      {/* Bản đồ */}
      <img src="/map-site.png" alt="Bản đồ Việt Nam" className="w-full aspect-square object-contain" />

      {/* Layout desktop: absolute */}
      <div className="hidden md:block *:hover:scale-125 *:transition-all">
        {/* Box: 5% */}
        <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-[305px] h-[305px] bg-[#B0C1F8] rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2">Giảm thính lực</h3>
          <p className="text-xs text-gray-700">Tỷ lệ giảm thính lực ở độ tuổi từ 65 - 75 chiếm khoảng 30% - 40%, trên 75 tuổi chiếm khoảng 40% - 50%.</p>
        </div>

        {/* Box: 1200 */}
        <div className="absolute top-[50%] left-[15%] transform -translate-y-1/2 w-[305px] h-[305px] bg-[#B0C1F8] rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2">1.200 đến 1.400</h3>
          <p className="text-xs text-gray-700">Theo Báo cáo Điều tra về người khuyết tật của Tổng cục Hàng năm có từ 1.200 - 1.400 trẻ khiếm thính ra đời.</p>
        </div>

        {/* Box: 2.5 triệu */}
        <div className="absolute top-[60%] right-[15%] w-[305px] h-[305px] bg-[#B0C1F8] rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2">Can thiệp</h3>
          <p className="text-xs text-gray-700">Chỉ khoảng 30% trẻ sơ sinh được sàng lọc thính lực sau sinh tại Việt Nam. Mục tiêu đến năm 2030 là 90% trẻ sơ sinh sẽ được tầm soát các bệnh bẩm sinh, bao gồm khiếm thính</p>
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
