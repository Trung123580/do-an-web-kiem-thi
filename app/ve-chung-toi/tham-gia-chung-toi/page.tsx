"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ModalPartner from "@/components/ModalPartner";
export const dataJob = [
  {
    img: "/image/job-1.png",
    imgDetail: "/image/job-1-detail.png",
    title: "Content Creator",
    titleDes: "Nhà sáng tạo nội dung",
    slug: "content-creator",
    description: "Tạo nội dung giáo dục, truyền thông và tài liệu, bài viết, infographic...",
    salary: "8 - 12 triệu",
    location: "Hà Nội",
    deadline: "14/7/2025",
    nature: "Full-time",
    jobDescription: [
        "Lên ý tưởng, xây dựng nội dung truyền thông cho các kênh của tổ chức (Facebook, Instagram, TikTok, Website…)",
        "Sản xuất bài viết, hình ảnh, video truyền cảm hứng, nội dung giáo dục hướng đến cộng đồng người khiếm thính và cộng đồng chung",
        "Hỗ trợ triển khai các chiến dịch truyền thông, sự kiện cộng đồng, hội thảo của tổ chứ",
        "Phối hợp cùng team thiết kế, marketing để đảm bảo nội dung nhất quán và sáng tạo",
        "Theo dõi hiệu quả các nội dung đã đăng tải và đề xuất hướng cải thiện",
        "Tham gia brainstorm, đóng góp ý tưởng phát triển thương hiệu FFF"
    ],
    candidateRequirements: [
        "Có kỹ năng viết tốt, tư duy sáng tạo, khả năng kể chuyện bằng hình ảnh và video",
        "Yêu thích làm việc vì cộng đồng, đặc biệt là với người khiếm thính hoặc nhóm yếu thế",
        "Thành thạo các nền tảng mạng xã hội và công cụ hỗ trợ nội dung (Canva, CapCut, Meta Business Suite…)",
        "Có khả năng làm việc nhóm, tiếp nhận phản hồi và cải thiện liên tục",
        "Ưu tiên ứng viên có kinh nghiệm ở vị trí tương đương hoặc đã từng làm trong các tổ chức phi lợi nhuận, xã hội",
        "Biết sử dụng ngôn ngữ ký hiệu (không bắt buộc, nhưng là một lợi thế)"
    ],
    inCome: "8.000.000 – 12.000.000 VNĐ/tháng (tùy theo năng lực và kinh nghiệm)",
    benefits: [
        "Làm việc trong môi trường thân thiện, nhân văn và sáng tạo",
        "Có cơ hội phát triển cá nhân và được đào tạo chuyên môn về truyền thông xã hội & giáo dục cộng đồng",
        "Tham gia các hoạt động, dự án có tác động xã hội sâu rộng",
        "Lương thưởng, hỗ trợ theo năng lực và hiệu quả công việc",
        "Chế độ nghỉ phép, nghỉ lễ theo quy định pháp luật",
        "Được đóng BHXH, BHYT, BHTN đầy đủ theo quy định." 
    ]
  },
  {
    img: "/image/job-2.png",
    imgDetail: "/image/job-2-detail.png",
    title: "Marketing",
    titleDes: "Chuyên viên Marketing",
    slug: "marketing-specialist",
    description: "Lập kế hoạch truyền thông, quản lý mạng xã hội, chạy chiến dịch nâng cao...",
    salary: "10 - 15 triệu",
    location: "Hà Nội",
    deadline: "14/7/2025",
    nature: "Full-time",
    jobDescription: [
        "Xây dựng và triển khai các kế hoạch truyền thông, marketing cho các chương trình giáo dục, đào tạo và sự kiện của FFF",
        "Quản lý và phát triển các kênh truyền thông như fanpage, website, email marketing, báo chí,…",
        "Viết nội dung truyền thông: bài đăng mạng xã hội, bài PR, thông cáo báo chí, nội dung cho ấn phẩm truyền thông…",
        "Phối hợp tổ chức sự kiện, hội thảo và các chiến dịch nâng cao nhận thức cộng đồng về người khiếm thính.",
        "Theo dõi, đánh giá hiệu quả các hoạt động marketing và đề xuất cải tiến.",
    ],
    candidateRequirements: [
        "Tốt nghiệp đại học chuyên ngành Marketing, Truyền thông, Báo chí, Quản trị kinh doanh hoặc các ngành liên quan.",
        "Có tối thiểu 1 năm kinh nghiệm trong lĩnh vực marketing hoặc truyền thông.",
        "Kỹ năng viết nội dung tốt, sáng tạo, khả năng kể chuyện truyền cảm hứng.",
        "Thành thạo các công cụ truyền thông số (Facebook Ads, Google Ads, Canva, Mailchimp,… là lợi thế).",
        "Có tinh thần trách nhiệm, chủ động, cầu tiến và yêu thích các hoạt động xã hội.",
    ],
    inCome: "10.000.000 – 15.000.000 VNĐ/tháng (tùy theo năng lực và kinh nghiệm)",
    benefits: [
        "Làm việc trong môi trường thân thiện, nhân văn và sáng tạo",
        "Có cơ hội phát triển cá nhân và được đào tạo chuyên môn về truyền thông xã hội & giáo dục cộng đồng",
        "Tham gia các hoạt động, dự án có tác động xã hội sâu rộng",
        "Lương thưởng, hỗ trợ theo năng lực và hiệu quả công việc",
        "Chế độ nghỉ phép, nghỉ lễ theo quy định pháp luật",
        "Được đóng BHXH, BHYT, BHTN đầy đủ theo quy định." 
    ]
  },
  {
    img: "/image/job-3.png",
    imgDetail: "/image/job-3-detail.png",
    title: "Designer",
    titleDes: "Nhà Thiết Kế Đồ Họa",
    slug: "graphic-designer",
    description: "Tạo ra hình ảnh thương hiệu, thiết kế bao bì, và các sản phẩm truyền thông...",
    salary: "10 - 15 triệu",
    location: "Hà Nội",
    deadline: "14/7/2025",
    nature: "Full-time",
    jobDescription: [
        "Thiết kế các ấn phẩm truyền thông (banner, poster, brochure, infographic...) phục vụ cho các chiến dịch truyền thông, sự kiện và hoạt động của tổ chức.",
        "Hỗ trợ xây dựng bộ nhận diện thương hiệu cho các dự án, chương trình của FFF.",
        "Hỗ trợ triển khai các chiến dịch truyền thông, sự kiện cộng đồng, hội thảo của tổ chứ",
        "Phối hợp cùng bộ phận nội dung, truyền thông và các phòng ban khác để lên ý tưởng thiết kế phù hợp với định hướng của tổ chức.",
        "Quản lý và cập nhật kho dữ liệu thiết kế.",
        "Tham gia đề xuất ý tưởng sáng tạo nhằm nâng cao hiệu quả truyền thông và hình ảnh tổ chức."
    ],
    candidateRequirements: [
        "Có kinh nghiệm từ 1 năm trở lên trong lĩnh vực thiết kế đồ họa.",
        "Thành thạo các phần mềm thiết kế như Adobe Photoshop, Illustrator, InDesign; ưu tiên biết thêm Adobe Premiere, After Effects là lợi thế.",
        "Có tư duy thẩm mỹ tốt, khả năng sáng tạo và nắm bắt xu hướng thiết kế hiện đại.",
        "Có tinh thần trách nhiệm, chủ động trong công việc, sẵn sàng học hỏi và làm việc nhóm.",
        "Ưu tiên ứng viên từng làm việc với các tổ chức xã hội, phi lợi nhuận hoặc có mong muốn đóng góp cho cộng đồng người khiếm thính.",
    ],
    inCome: "Từ 10 – 15 triệu đồng/tháng (tùy năng lực, có xét tăng lương định kỳ)",
    benefits: [
        "Làm việc trong môi trường thân thiện, nhân văn và sáng tạo",
        "Có cơ hội phát triển cá nhân và được đào tạo chuyên môn về truyền thông xã hội & giáo dục cộng đồng",
        "Tham gia các hoạt động, dự án có tác động xã hội sâu rộng",
        "Lương thưởng, hỗ trợ theo năng lực và hiệu quả công việc",
        "Chế độ nghỉ phép, nghỉ lễ theo quy định pháp luật",
        "Được đóng BHXH, BHYT, BHTN đầy đủ theo quy định." 
    ]
  },
  {
    img: "/image/job-4.png",
    imgDetail: "/image/job-4-detail.png",
    title: "Plan manager",
    titleDes: "Quản lý Dự án",
    slug: "project-manager",
    description: "Lên kế hoạch, triển khai và theo dõi tiến độ dự án, đảm bảo hoàn thành đúng hạn...",
    salary: "15 - 20 triệu",
    location: "Hà Nội",
    deadline: "14/7/2025",
    nature: "Full-time",
    jobDescription: [
        "Quản lý, điều phối và giám sát các dự án giáo dục – đào tạo nghề cho người khiếm thính do FFF tổ chức.",
        "Lập kế hoạch, triển khai và theo dõi tiến độ các hoạt động trong từng dự án.",
        "Làm việc với các đối tác, nhà tài trợ, chuyên gia và các bên liên quan để đảm bảo chất lượng chương trình.",
        "Tham gia xây dựng nội dung, thiết kế hoạt động đào tạo phù hợp với người khiếm thính.",
        "Theo dõi ngân sách, báo cáo tài chính và tổng kết hiệu quả dự án.",
        "Báo cáo định kỳ tiến độ và kết quả cho Ban lãnh đạo tổ chức."
    ],
    candidateRequirements: [
        "Quản lý, điều phối và giám sát các dự án giáo dục – đào tạo nghề cho người khiếm thính do FFF tổ chức.",
        "Lập kế hoạch, triển khai và theo dõi tiến độ các hoạt động trong từng dự án.",
        "Làm việc với các đối tác, nhà tài trợ, chuyên gia và các bên liên quan để đảm bảo chất lượng chương trình.",
        "Tham gia xây dựng nội dung, thiết kế hoạt động đào tạo phù hợp với người khiếm thính.",
        "Theo dõi ngân sách, báo cáo tài chính và tổng kết hiệu quả dự án.",
        "Báo cáo định kỳ tiến độ và kết quả cho Ban lãnh đạo tổ chức."
    ],
    inCome: "15.000.000 – 20.000.000 VNĐ/tháng (tùy theo năng lực và kinh nghiệm)",
    benefits: [
        "Làm việc trong môi trường thân thiện, nhân văn và sáng tạo",
        "Có cơ hội phát triển cá nhân và được đào tạo chuyên môn về truyền thông xã hội & giáo dục cộng đồng",
        "Tham gia các hoạt động, dự án có tác động xã hội sâu rộng",
        "Lương thưởng, hỗ trợ theo năng lực và hiệu quả công việc",
        "Chế độ nghỉ phép, nghỉ lễ theo quy định pháp luật",
        "Được đóng BHXH, BHYT, BHTN đầy đủ theo quy định." 
    ]
  },
  {
    img: "/image/job-5.png",
    imgDetail: "/image/job-5-detail.png",
    title: "Data Analyst",
    titleDes: "Phân Tích Dữ Liệu",
    slug: "data-analyst",
    description: "Phân tích số liệu để đưa ra quyết định chiến lược, tối ưu hóa hiệu suất và báo...",
    salary: "7 - 10 triệu",
    location: "Hà Nội",
    deadline: "14/7/2025",
    nature: "Full-time",
    jobDescription: [
        "Hướng dẫn và hỗ trợ học viên khiếm thính trong quá trình đào tạo kỹ năng sống, kỹ năng nghề.",
        "Xây dựng nội dung đào tạo phù hợp với khả năng tiếp thu của người khiếm thính.",
        "Phối hợp tổ chức các chương trình truyền thông, tư vấn hướng nghiệp, kết nối doanh nghiệp để tạo đầu ra việc làm.",
        "Quản lý hành chính, hỗ trợ vận hành trung tâm.",
        "Một số vị trí chuyên môn (như CNTT, thiết kế đồ họa, sản xuất video, phiên dịch ngôn ngữ ký hiệu) sẽ có mô tả riêng.",
    ],
    candidateRequirements: [
        "Có tâm huyết với công việc cộng đồng, đặc biệt là với người khiếm thính.",
        "Tốt nghiệp cao đẳng/đại học các chuyên ngành phù hợp (giáo dục đặc biệt, tâm lý học, công tác xã hội, CNTT, thiết kế, v.v.",
        "Thành thạo các nền tảng mạng xã hội và công cụ hỗ trợ nội dung (Canva, CapCut, Meta Business Suite…)",
        "Ưu tiên:",
        "Ứng viên biết hoặc sẵn sàng học ngôn ngữ ký hiệu",
        "Có kinh nghiệm làm việc trong các tổ chức phi lợi nhuận hoặc dự án cộng đồng.",
        "Kỹ năng giao tiếp tốt, tư duy tích cực, kiên nhẫn."
    ],
    inCome: "7.000.000 – 10.000.000 VNĐ/tháng (tùy theo năng lực và kinh nghiệm)",
    
    benefits: [
        "Làm việc trong môi trường thân thiện, nhân văn và sáng tạo",
        "Có cơ hội phát triển cá nhân và được đào tạo chuyên môn về truyền thông xã hội & giáo dục cộng đồng",
        "Tham gia các hoạt động, dự án có tác động xã hội sâu rộng",
        "Lương thưởng, hỗ trợ theo năng lực và hiệu quả công việc",
        "Chế độ nghỉ phép, nghỉ lễ theo quy định pháp luật",
        "Được đóng BHXH, BHYT, BHTN đầy đủ theo quy định." 
    ]
    },
];
export const dataVolunteer = [
  {
    img: "/image/volunteer-1.png",
    title: "Workshop Hướng nghiệp & Kỹ năng mềm",
    slug: "career-guidance-and-soft-skills-workshop",
    organization: [
        {
           img: "/image/Ellipse-6.png",
           title: "DNXH vì người khiếm thính Việt Nam",
        }
    ],
    sponsoring: [
        {
            img: "/image/Ellipse-7.png",
            title: "Foundation for Future",
        }
    ],
    description: "Workshop Hướng nghiệp & Kỹ năng mềm là chương trình đào tạo thực tiễn với các buổi hội thảo, hoạt động nhóm, trò chơi tương tác và phiên chia sẻ từ các chuyên gia. Dự án được thiết kế nhằm truyền cảm hứng, chia sẻ kinh nghiệm và cung cấp các công cụ giúp người khiếm thính phát triển toàn diện kỹ năng mềm cùng khả năng định hướng nghề nghiệp. Dự án cũng là cơ hội để các tình nguyện viên, những người có đam mê và nhiệt huyết, được tham gia vào quá trình góp phần thay đổi cuộc sống của người khiếm thính.",
    time: "Chủ Nhật, 20/7/2025 (09:00 – 16:00)",
    location: "Số 15, Đường Lê Duẩn, Quận Hai Bà Trưng, Hà Nội",
    requirements: [
      "Kỹ năng giao tiếp: Tốt, thân thiện và nhiệt huyết",
      "Ưu tiên: Ứng viên có kinh nghiệm làm việc trong các hoạt động hướng nghiệp, đào tạo kỹ năng mềm, hoặc biết ngôn ngữ ký hiệu",
      "Thái độ: Năng động, có tinh thần trách nhiệm và khả năng làm việc nhóm tốt",
    ],
    roles: [
      "Hỗ trợ điều phối sự kiện, đăng ký và tiếp đón học viên",
      "Hỗ trợ phiên chia sẻ và phiên dịch ngôn ngữ ký hiệu cho người tham dự nếu cần thiết",
      "Giao tiếp hỗ trợ chuyên môn: Hỗ trợ tư vấn, cung cấp thông tin và hướng dẫn các hoạt động của workshop",
    ],
    benefits: [
      "Cơ hội được đào tạo kỹ năng quản lý dự án, tổ chức sự kiện chuyên nghiệp",
      "Mở rộng mạng lưới kết nối với cộng đồng và các chuyên gia trong lĩnh vực giáo dục, hướng nghiệp",
      "Cơ hội góp phần trực tiếp vào việc thay đổi cuộc sống của người khiếm thính",
    ]
  },
  {
    img: "/image/volunteer-2.png",
    title: 'Chiến dịch Gây quỹ Cộng đồng "Ánh sáng thầm lặng"',
    slug: "community-fundraising-campaign",
    organization: [],
    sponsoring: [
        {
            img: "/image/Ellipse-7.png",
            title: "Foundation for Future",
        }
    ],
    description: "Dự án “Ánh sáng thầm lặng” nhằm gây quỹ hỗ trợ học bổng, trang thiết bị trợ thính, và các chương trình đào tạo nghề cho người khiếm thính. Trong khuôn khổ chiến dịch này, Workshop Hướng nghiệp & Kỹ năng mềm được tổ chức để trang bị kiến thức và kỹ năng cần thiết cho người khiếm thính, đồng thời là dịp tuyển dụng, huy động tinh thần và năng lực của các tình nguyện viên.",
    time: "Thứ Bảy, ngày 28/9/2025 (09:00 – 16:00)",
    location: "Số 123, Đường Lê Lợi, Quận 1, Thành phố Hồ Chí Minh",
    requirements: [
      "Đam mê hoạt động cộng đồng, ưu tiên những người có kiến thức hoặc kinh nghiệm hỗ trợ người khiếm thính.",
      "Kỹ năng giao tiếp tốt, biết hoặc có khả năng học ngôn ngữ ký hiệu là một lợi thế.",
      "Năng lực tổ chức, làm việc nhóm và cam kết thời gian sự kiện đầy đủ.",
      "Có kiến thức, chuyên môn về vị trí đảm nhiệm"
    ],
    roles: [
      "Tình nguyện viên Truyền thông & Quảng bá: Chịu trách nhiệm tạo nội dung và lan tỏa thông điệp trên các kênh truyền thông.",
      "Tình nguyện viên Điều phối Sự kiện: Hỗ trợ tổ chức và phối hợp hoạt động gây quỹ.",
      "Tình nguyện viên Tiếp cận Cộng đồng: Chủ động kết nối với cá nhân, tổ chức để mời gọi và thu hút sự ủng hộ.",
    ],
    benefits: [
      "Chứng nhận hoặc giấy khen từ Foundation for Future.",
      "Cơ hội trải nghiệm, học hỏi và mở rộng kết nối trong môi trường giáo dục và hướng nghiệp.",
      "Hỗ trợ đào tạo chuyên sâu về giao tiếp với người khiếm thính và kỹ năng mềm.",
    ]
  },
  {
    img: "/image/volunteer-3.png",
    title: 'Festival Sáng tạo & Kết nối "Cùng Đổi Mới Tương Lai"',
    slug: "creative-and-discovery-festival",
    organization: [
        {
           img: "/image/Ellipse-8.png",
           title: "Hội Cha Mẹ Trẻ Khiếm Thính và Người Khiếm Thính Việt Nam",
        },
        {
          img: "/image/Ellipse-7.png",
          title: "Foundation For Future",
       }
    ],
    sponsoring: [
        {
            img: "/image/Ellipse-9.png",
            title: "UNICEF Việt Nam",
        }
    ],
    description: "Festival Sáng tạo & Kết nối \"Cùng Đổi Mới Tương Lai\" là sự kiện được tổ chức bởi Foundation for Future, nhằm tạo diễn đàn trao đổi, học hỏi và chia sẻ sáng tạo cho cộng đồng người khiếm thính và các đối tác liên quan. Dự án hướng đến việc kết nối các cá nhân, doanh nghiệp và tổ chức để cùng nhau khám phá, ứng dụng các giải pháp sáng tạo trong giáo dục và đào tạo hướng nghiệp. Đồng thời, sự kiện còn là cơ hội để người tham gia trải nghiệm, chia sẻ kinh nghiệm và xây dựng những ý tưởng đổi mới nhằm cải thiện chất lượng cuộc sống cho cộng đồng.",
    time: "Thứ Bảy, ngày 15/9/2025 (09:00 – 17:00)",
    location: "Trung tâm Hội nghị & Triển lãm, Thành phố Hồ Chí Minh.",
    requirements: [
      "Các cá nhân năng động, có đam mê hoạt động cộng đồng và sáng tạo.",
      "Ưu tiên ứng viên có kỹ năng giao tiếp tốt, biết ngôn ngữ ký hiệu hoặc đã có kinh nghiệm làm việc trong các hoạt động tình nguyện và quản lý sự kiện.",
    ],
    roles: [
      "Hỗ trợ điều phối: Giúp ban tổ chức điều phối các phiên hội thảo, workshop và phiên giao lưu.",
      "Hỗ trợ hậu cần: Hướng dẫn người tham dự, phụ trách các gian hàng và hỗ trợ tổ chức sự kiện tại chỗ.",
      "Truyền thông & quảng bá: Hỗ trợ tạo nội dung, quảng bá sự kiện trên các kênh truyền thông xã hội và phối hợp với các đối tác truyền thông.",
      "Hỗ trợ kỹ thuật: Hỗ trợ các vấn đề liên quan đến công nghệ, phiên dịch ngôn ngữ ký hiệu, quản lý tài liệu sự kiện."
    ],
    benefits: [
      "Cơ hội trải nghiệm môi trường làm việc chuyên nghiệp trong lĩnh vực cộng đồng và giáo dục.",
      "Phát triển kỹ năng tổ chức sự kiện, giao tiếp và kỹ năng lãnh đạo.",
      "Kết nối với các chuyên gia, doanh nghiệp và cộng đồng sáng tạo.",
      "Nhận giấy chứng nhận tình nguyện, hỗ trợ tích lũy kinh nghiệm và mở rộng mạng lưới quan hệ.     "
    ]
  },
];
export default function JoinUsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const volunteerCarouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[200px] md:h-[720px]">
        <Image src="/image/banner-3.png" alt="Trẻ em khiếm thính vui chơi" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <p className="text-xl md:text-5xl font-bold -tracking-tight leading-relaxed">Cùng chúng tôi tạo nên tương lai tươi đẹp cho cộng đồng người khiếm thính</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16"></div>
      <div className="bg-[#4263EB] mx-auto px-4 py-16 text-center w-[80%] rounded-2xl">
        <h2 className="text-3xl font-bold text-white mb-4">Trở thành một phần của chúng tôi</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">Góp phần hỗ trợ người khiếm thính cùng cách thú vị như thiết kế, đào tạo, tổ chức sự kiện và nhiều lĩnh thực hấp tấc khác...</p>
        <button onClick={() => setIsOpen(true)} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">Tham gia cùng chúng tôi</button>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-12">Công việc</h2>
        <Slider {...carouselSettings} className="job-carousel -mx-3">
          {dataJob.map((item, index) => (
            <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/job/${item.slug}`} className="px-3 h-full">
              <div className="bg-[#F2F2F3] rounded-xl h-full">
                <div className="mb-4">
                  <Image src={item.img} alt='' width={200} height={150} className="w-full" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.titleDes}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>

        <style jsx global>{`
          .job-carousel .slick-track {
            display: flex !important;
          }
          .job-carousel .slick-slide {
            height: inherit !important;
          }
          .job-carousel .slick-slide > div {
            height: 100%;
          }
        `}</style>
      </div>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Tham gia tình nguyện</h2>

          <Slider {...volunteerCarouselSettings} className="volunteer-carousel -mx-3">
            {dataVolunteer.map((item, index) => {
              return (
                <Link key={index} href={`/ve-chung-toi/tham-gia-chung-toi/volunteer/${item.slug}`} className="px-3 h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                    <div className="relative h-48">
                      <Image src={item.img} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{item.title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
          <style jsx global>{`
            .volunteer-carousel .slick-track {
              display: flex !important;
              padding: 1rem 0;
            }
            .volunteer-carousel .slick-slide {
              height: inherit !important;
              margin-bottom: 1rem;
            }
            .volunteer-carousel .slick-slide > div {
              height: 100%;
            }
          `}</style>
        </div>
      </div>
      <ModalPartner isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
}
