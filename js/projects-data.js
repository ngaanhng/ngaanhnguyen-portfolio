/**
 * Nguyen Nga Anh Portfolio - Projects Data
 * Multimedia Communications Student - Van Lang University (2026)
 */

const PROJECTS_DATA = [
  // ==========================================
  // YEAR 2025 PROJECTS
  // ==========================================

  // Project 1 (2025): MILO TVC
  {
    id: "project-1",
    num: "Project - 1",
    title: "TVC MILO",
    category: "TVC",
    categoryLabel: "Commercial / TVC Video",
    shortDesc: "Producing a TVC for Milo as a course project involved dynamic visual editing with speed ramping and color grading, as well as designing a high-impact audio, energetic BGM, and precise Voice-Over audio ducking.",
    fullDesc: "Dự án sản xuất TVC quảng cáo năng động cho thương hiệu sữa lúa mạch MILO trong khuôn khổ môn học Media Production tại Đại học Văn Lang. Dự án tập trung vào việc tạo cảm giác bùng nổ năng lượng thể thao thông qua kỹ thuật dựng hình tốc độ cao (Speed Ramping), phân loại màu sắc tươi tắn chuẩn nhận diện thương hiệu (Color Grading) và thiết kế âm thanh sống động với kỹ thuật Voice-Over Ducking mượt mà.",
    role: "Main Video Editor",
    course: "Media Course Project - Van Lang University",
    year: "2025",
    client: "MILO (Course Project)",
    software: ["CapCut", "Google Flow", "Canva"],
    colorHex: "#15803d",
    accentBg: "from-emerald-600 to-green-800",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    previewImage: "assets/images/milo_cover.png",
    
    // Video showcase details (TVC 1 & TVC 2)
    videos: [
      {
        id: "tvc-1",
        label: "TVC 1",
        title: "MILO TVC 1 - Năng Lượng Đột Phá 2X Protein (Phần 1)",
        subtitle: "Kỹ thuật Speed Ramping, Audio Ducking & Color Grade MILO Sport",
        poster: "assets/images/milo_graded.svg",
        driveUrl: "https://drive.google.com/file/d/10KMDQPnNEpQprAr_FFquhKsBUPdDTzUr/view?usp=drive_link",
        sampleSrc: "https://drive.google.com/file/d/10KMDQPnNEpQprAr_FFquhKsBUPdDTzUr/preview"
      },
      {
        id: "tvc-2",
        label: "TVC 2",
        title: "MILO TVC 2 - Năng Lượng Bền Bỉ Tiếp Bước Ước Mơ (Phần 2)",
        subtitle: "Định dạng TVC 30s tối ưu nhịp cắt nhanh, âm thanh thể thao bùng nổ",
        poster: "assets/images/milo_preview.svg",
        driveUrl: "https://drive.google.com/file/d/1bAYo44U8cJCQudpHatzjUxt9H2T1cWY3/view?usp=drive_link",
        sampleSrc: "https://drive.google.com/file/d/1bAYo44U8cJCQudpHatzjUxt9H2T1cWY3/preview"
      }
    ],
    video: {
      type: "drive",
      ratio: "16:9",
      duration: "0:45",
      title: "MILO TVC 1 - Năng Lượng Đột Phá 2X Protein",
      subtitle: "Bản dựng chính thức với kỹ thuật Speed Ramping & Audio Ducking",
      poster: "assets/images/milo_graded.svg",
      driveUrl: "https://drive.google.com/file/d/10KMDQPnNEpQprAr_FFquhKsBUPdDTzUr/view?usp=drive_link",
      sampleSrc: "https://drive.google.com/file/d/10KMDQPnNEpQprAr_FFquhKsBUPdDTzUr/preview"
    },

    // Before / After Color Grading Evidence
    colorGrading: {
      title: "Color Grading: Flat LOG sang Milo Vibrant Green",
      description: "Chuyển đổi cảnh quay thô từ hệ màu Flat LOG sang bảng màu xanh lá rực rỡ và vàng đồng đặc trưng của MILO, tối ưu độ tương phản và chi tiết sản phẩm.",
      beforeLabel: "RAW LOG Profile (Trước)",
      afterLabel: "Graded Commercial Rec.709 (Sau)",
      beforeImg: "assets/images/milo_raw.svg",
      afterImg: "assets/images/milo_graded.svg",
      lutUsed: "Custom MILO Sport LUT (DaVinci Resolve)"
    },

    // Audio & Sound Design Breakdown
    audioDesign: {
      title: "Audio Engineering & Voice-Over Ducking",
      details: [
        { label: "BGM (Nhạc nền)", desc: "Nhịp điệu Electro Pop 128 BPM truyền cảm hứng tập luyện thể thao." },
        { label: "VO Ducking", desc: "Tự động hạ âm lượng BGM xuống -12dB khi có giọng đọc Voice-Over để lời thoại rõ nét." }
      ]
    },

    // Storyboard & Frame Breakdown
    gallery: [
      {
        title: "Cảnh 1: Cầm hộp Milo 2X Protein",
        tag: "Close-up",
        caption: "Góc máy cận thể hiện thiết kế bao bì và thông điệp 2X Protein & Canxi."
      },
      {
        title: "Cảnh 2: Uống sữa tiếp năng lượng",
        tag: "Action Shot",
        caption: "Cắt cảnh nhịp điệu nhanh, đồng bộ với tiết tấu nhạc nền sôi động."
      },
      {
        title: "Cảnh 3: Chuyển động Speed Ramping",
        tag: "VFX / Transition",
        caption: "Kỹ thuật tua chậm kết hợp tăng tốc (Speed Ramping) tạo điểm nhấn bùng nổ."
      },
      {
        title: "Cảnh 4: Trưng bày bao bì nhận diện",
        tag: "Packshot",
        caption: "Bố cục cân xứng chuẩn commercial broadcast."
      }
    ],

    keyLearnings: [
      "Kiểm soát chính xác điểm Keyframe Speed Ramping trong CapCut Pro.",
      "Tạo đường cong màu sắc để màu xanh Milo đạt chuẩn RGB.",
      "Làm chủ Audio Ducking để đạt chuẩn âm thanh rõ nét."
    ]
  },

  // Project 2 (2025): TALKSHOW: NHÀ TRUYỀN THÔNG HỌC TÂM LÝ
  {
    id: "project-2",
    num: "Project - 2",
    title: "TALKSHOW: NHÀ TRUYỀN THÔNG HỌC TÂM LÝ",
    category: "TALKSHOW",
    categoryLabel: "Multi-Cam Talkshow Production",
    shortDesc: "Served as the lead Video Editor for a Media Production course project, producing a multi-camera talkshow episode. Responsible for seamless multi-cam switching, dialogue audio cleanup, motion graphics integration (intro, lower-thirds, callouts), and color grading to deliver an engaging, TV-standard broadcast layout, optimized for live streaming standards.",
    fullDesc: "Tập Talkshow chuyên đề 'Góc Nhìn Sáng Tạo: Nhà Truyền Thông Học Tâm Lý' (Khách mời: Đại diện PEPSI - Từ Phương, Nhà Phân tích Tâm lý - Tấn Hy, Host/MC - Thanh Nga). Đảm nhận vai trò Lead Video Editor phụ trách: Dựng đa góc máy (Multi-Camera Switching), thiết kế & đồng bộ đồ họa động (Motion Graphics: Intro, Lower-thirds, Callouts), lọc nhiễu âm thanh đối thoại và xuất bản theo tiêu chuẩn phát sóng truyền hình & livestream.",
    role: "Main Video Editor",
    course: "Media Course Project - Van Lang University",
    year: "2025",
    client: "AURA Production / Góc Nhìn Sáng Tạo",
    software: ["CapCut Pro", "CapCut", "Canva"],
    colorHex: "#0284c7",
    accentBg: "from-sky-600 to-blue-900",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    previewImage: "assets/images/talkshow_cover.png",

    video: {
      type: "drive",
      ratio: "16:9",
      duration: "18:30",
      title: "Talkshow: Nhà Truyền Thông Học Tâm Lý",
      subtitle: "Hệ thống dựng Multi-Cam 3 góc máy kết hợp Lower-Thirds & Motion Graphics",
      poster: "assets/images/talkshow_cover.png",
      driveUrl: "https://drive.google.com/file/d/1JCkLxw3wExlCkoddW2aE2cNfX2EvB-Ee/view?usp=drive_link",
      sampleSrc: "https://drive.google.com/file/d/1JCkLxw3wExlCkoddW2aE2cNfX2EvB-Ee/preview"
    },

    motionGraphics: {
      title: "Motion Graphics & Broadcast Package",
      items: [
        { name: "Live Stream Header", tag: "Overlay", desc: "Thanh tiêu đề 'WATCH LIVE 🔴' kết hợp logo AURA Production & đối tác Pepsi." },
        { name: "Dynamic Lower-Thirds", tag: "CapCut Motion", desc: "Bảng tên khách mời tự động pop-up theo nhịp phát biểu với chuyển động mượt mà." },
        { name: "Topic Callout Boxes", tag: "Graphic Card", desc: "Thẻ tóm tắt key message: '#1 Mang Tết Về Nhà - Top 10 chiến dịch nổi bật nhờ những thủ thuật tâm lý nổi tiếng'." }
      ]
    },

    audioDesign: {
      title: "Multi-Track Dialogue Cleanup & Mastering",
      details: [
        { label: "De-noise & De-reverb", desc: "Khử tiếng vang phòng thu và tiếng ồn điều hòa qua CapCut Audio." },
        { label: "Broadcast Loudness", desc: "Mastering chuẩn -23 LUFS (EBU R128) phát sóng chuẩn truyền hình." }
      ]
    },

    gallery: [
      {
        title: "Poster chính thức Talkshow",
        tag: "Key Visual",
        caption: "Bố cục chuyên nghiệp với nhận diện thương hiệu AURA Production và nhãn hàng Pepsi."
      },
      {
        title: "Bảng tên khách mời Lower-Third",
        tag: "Motion Graphic",
        caption: "Thiết kế nhận diện riêng biệt cho Đại diện Pepsi, Nhà Phân tích Tâm lý và MC."
      },
      {
        title: "Góc quay toàn cảnh phim trường",
        tag: "Studio Layout",
        caption: "Bố trí ánh sáng 3 điểm (Three-point lighting) cho 3 nhân vật trên sân khấu."
      },
      {
        title: "Livestream Banner & Social Card",
        tag: "Social Media",
        caption: "Tối ưu hóa cho các nền tảng phát sóng trực tiếp Facebook & YouTube."
      }
    ],

    keyLearnings: [
      "Quản lý timeline Multi-Camera đồng bộ mượt mà.",
      "Tối ưu workflow xuất đồ họa Motion Graphics Template từ CapCut Pro.",
      "Nâng cao tư duy chọn góc máy phù hợp với phản ứng biểu cảm của từng khách mời."
    ]
  },

  // Project 3 (2025): SHORT DOCUMENTARY: KHÁM PHÁ NGHỆ THUẬT HÁT BỘI
  {
    id: "project-3",
    num: "Project - 3",
    title: "SHORT DOCUMENTARY: KHÁM PHÁ NGHỆ THUẬT HÁT BỘI",
    category: "DOCUMENTARY",
    categoryLabel: "Cultural Mini-Documentary",
    shortDesc: "Served as the Lead Video Editor for a 4-minute mini-documentary produced as a Media Production course project. Responsible for structuring a concise yet compelling narrative from raw interview clips and B-roll. Handled precise cutting, audio cleanup, lower-thirds/titles, and color grading to deliver a broadcast-quality piece of micro-storytelling.",
    fullDesc: "Phim tài liệu ngắn (Mini-Documentary 4 phút) 'Khám Phá Nghệ Thuật Hát Bội' do kênh Sóng News sản xuất. Dự án tôn vinh nét đẹp nghệ thuật sân khấu truyền thống Việt Nam thông qua góc nhìn của các nghệ nhân gạo cội. Đảm nhiệm vai trò Lead Video Editor phụ trách: Xây dựng cấu trúc kịch bản phóng sự, chọn lọc B-roll đắt giá, cân chỉnh màu sắc nghệ thuật đậm chất tuồng cổ và làm sạch âm thanh phỏng vấn hiện trường.",
    role: "Lead Video Editor",
    course: "Media Course Project - Van Lang University",
    year: "2025",
    client: "Sóng News / VLU Media Lab",
    software: ["CapCut Pro", "CapCut"],
    colorHex: "#b91c1c",
    accentBg: "from-red-700 to-amber-950",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    previewImage: "assets/images/hat_boi_cover.jpg",

    video: {
      type: "drive",
      ratio: "16:9",
      duration: "4:12",
      title: "Phim tài liệu ngắn: Khám Phá Nghệ Thuật Hát Bội (Sóng News)",
      subtitle: "Kể chuyện di sản văn hóa qua lăng kính điện ảnh hiện đại",
      poster: "assets/images/hat_boi_cover.jpg",
      driveUrl: "https://drive.google.com/file/d/1Mrgo16Q2X9HRA5mbG6wWFWY4q7eOb7lI/view?usp=drive_link",
      sampleSrc: "https://drive.google.com/file/d/1Mrgo16Q2X9HRA5mbG6wWFWY4q7eOb7lI/preview"
    },

    colorGrading: {
      title: "Color Palette: Dramatic Theatrical Heritage",
      description: "Tăng cường độ sâu cho sắc đỏ son, vàng đồng và đen tuyền trên trang phục tuồng cổ. Tạo chiều sâu ánh sáng tương phản (Chiaroscuro) tôn vinh biểu cảm khuôn mặt nghệ sĩ.",
      beforeLabel: "Flat Log Camera (Trước)",
      afterLabel: "Cinematic Heritage Grade (Sau)",
      beforeImg: "assets/images/mv_raw.svg",
      afterImg: "assets/images/hat_boi_preview.svg",
      lutUsed: "Heritage Film Tone - CapCut Pro"
    },

    audioDesign: {
      title: "Acoustic Heritage Soundscape",
      details: [
        { label: "Traditional Foley", desc: "Thu và phục hồi âm thanh tiếng trống chầu, tiếng gươm đao và tiếng chuông sân khấu." },
        { label: "Dialogue Mastering", desc: "Lọc sạch tạp âm hậu trường ồn ào để giọng nói nghệ nhân rõ ràng, truyền cảm." }
      ]
    },

    gallery: [
      {
        title: "Poster chính thức 'Khám Phá Nghệ Thuật Hát Bội'",
        tag: "Key Artwork",
        caption: "Hình ảnh nghệ nhân với mặt nạ tuồng cổ huyền ảo mang logo Sóng News."
      },
      {
        title: "Phân cảnh hậu trường hóa trang",
        tag: "B-Roll Capture",
        caption: "Tỉ mỉ từng nét vẽ thủ công phản ánh tính cách nhân vật chính - tà."
      },
      {
        title: "Trình diễn vũ đạo võ thuật tuồng",
        tag: "Action Stage",
        caption: "Góc quay chuyển động mượt mà ghi lại từng đường kiếm và tà áo lụa."
      },
      {
        title: "Phỏng vấn nghệ nhân lão thành",
        tag: "Interview Shot",
        caption: "Bố cục phỏng vấn điện ảnh với ánh sáng ven tóc (Rim Light) tinh tế."
      }
    ],

    keyLearnings: [
      "Nghệ thuật cô đọng 2 tiếng tư liệu thô thành câu chuyện 4 phút xúc động.",
      "Kỹ thuật dựng đan xen giữa lời kể phỏng vấn và hình ảnh B-roll minh họa (J-cut / L-cut).",
      "Bảo tồn giá trị văn hóa dân tộc thông qua ngôn ngữ điện ảnh hiện đại."
    ]
  },

  // Project 4 (2025): INTERVIEW: PHỎNG VẤN KHÁCH HÀNG CANTON FAIR 137
  {
    id: "project-4",
    num: "Project - 4",
    title: "INTERVIEW: PHỎNG VẤN KHÁCH HÀNG CANTON FAIR 137",
    category: "INTERVIEW",
    categoryLabel: "On-Site Customer Interview",
    shortDesc: "Served as the Lead Video Editor & Interview Content Producer for the customer interview series at Canton Fair 137 (Phase 1, Guangzhou) organized by ADENZ Travel. Managed on-site interview cutting, audio cleanup, dynamic lower-thirds, and customer testimonial pacing.",
    fullDesc: "Dự án video phỏng vấn cảm nhận khách hàng & đại biểu tham dự Hội chợ Thương mại Quốc tế Canton Fair 137 (Đợt 1 - Quảng Châu) do ADENZ Travel tổ chức. Đảm nhiệm vai trò Lead Video Editor phụ trách: Dựng phỏng vấn hiện trường, cắt gọt chia sẻ của khách hàng súc tích, xử lý âm thanh tiếng ồn hội chợ, thiết kế bảng tên đồ họa (Lower-Thirds) và chèn B-roll toàn cảnh sự kiện.",
    role: "Main Video Editor",
    course: "Canton Fair 137 (Quảng Châu) – ADENZ Travel",
    year: "2025",
    client: "Canton Fair 137 / ADENZ Travel",
    software: ["CapCut Pro", "CapCut", "Canva"],
    colorHex: "#15803d",
    accentBg: "from-emerald-700 to-green-950",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    previewImage: "assets/images/canton_fair_cover.jpg",

    video: {
      type: "drive",
      ratio: "16:9",
      duration: "4:35",
      title: "Phỏng vấn khách hàng đi Canton Fair 137 - Đợt 1",
      subtitle: "ADENZ Travel • Phỏng vấn hiện trường & Nhịp cắt cảm nhận khách hàng",
      poster: "assets/images/canton_fair_cover.jpg",
      driveUrl: "https://drive.google.com/file/d/1fmL3P8d5LEHy5TZLFd1493ettD2As5z0/view?usp=drive_link",
      sampleSrc: "https://drive.google.com/file/d/1fmL3P8d5LEHy5TZLFd1493ettD2As5z0/preview"
    },

    motionGraphics: {
      title: "Motion Graphics & Lower-Thirds Package",
      items: [
        { name: "Guest Profile Card", tag: "Lower-Third", desc: "Bảng tên thông tin chức danh khách mời và đoàn đại biểu tham dự Hội chợ Canton Fair 137." },
        { name: "Quote Highlight Card", tag: "Key Visual", desc: "Trích dẫn cảm nhận ấn tượng của khách hàng về dịch vụ của ADENZ Travel." }
      ]
    },

    audioDesign: {
      title: "Dialogue Mastering & Noise Reduction",
      details: [
        { label: "Vocal Isolation", desc: "Lọc sạch tạp âm hội chợ ồn ào, làm nổi bật giọng nói khách hàng chân thực, rõ nét." },
        { label: "Dynamic Ducking", desc: "Tự động hạ nhạc nền (BGM) êm ái khi có lời thoại chia sẻ." }
      ]
    },

    gallery: [
      {
        title: "Ảnh lưu niệm đoàn đại biểu ADENZ Travel tại Canton Fair 137",
        tag: "Key Visual",
        caption: "Toàn đoàn đại biểu chụp ảnh lưu niệm tại cổng chính Hội chợ Canton Fair 137, Quảng Châu."
      },
      {
        title: "Phỏng vấn khách hàng hiện trường",
        tag: "On-Site Interview",
        caption: "Bố cục phỏng vấn thực tế với góc quay tự nhiên, truyền tải cảm nhận hài lòng của khách hàng."
      }
    ],

    keyLearnings: [
      "Kỹ thuật xử lý âm thanh đối thoại tại không gian hội chợ mở có độ ồn cao.",
      "Dựng nhịp chia sẻ khách hàng ngắn gọn, tự nhiên và thuyết phục."
    ]
  },

  // ==========================================
  // YEAR 2026 PROJECTS
  // ==========================================

  // Project 5 (2026): MV REMAKE “HẸN LẦN SAU”
  {
    id: "project-5",
    num: "Project - 5",
    title: "MV REMAKE “HẸN LẦN SAU”",
    category: "MV",
    categoryLabel: "Music Video Production",
    shortDesc: "Lead Video Editor & Colorist for MAYDAYs' Music Video 'Hẹn Lần Sau' as a Media Production course project, focusing on narrative editing, pacing, and color styling aligned with the music's rhythm.",
    fullDesc: "Dự án Music Video Remake cho ca khúc 'Hẹn Lần Sau' của MAYDAYs. Vai trò phụ trách Dựng phim & Chỉnh màu (Narrative Editing & Color Styling). Dự án khai thác câu chuyện tình cảm tuổi học trò tại sân trường với phong cách hoài niệm (Nostalgic Cinematic), chú trọng nhịp cắt (Beat-sync Editing) tương thích với giai điệu Ballad sâu lắng.",
    role: "Lead Video Editor & Colorist",
    course: "Media Course Project - Van Lang University",
    year: "2026",
    client: "MAYDAYs (Remake Project)",
    software: ["CapCut Pro", "CapCut", "Canva"],
    colorHex: "#e11d48",
    accentBg: "from-rose-600 to-pink-900",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    previewImage: "assets/images/hen_lan_sau_cover.jpg",

    video: {
      type: "drive",
      ratio: "16:9",
      duration: "3:42",
      title: "MV Remake 'Hẹn Lần Sau' - MAYDAYs",
      subtitle: "Bản dựng cảm xúc tuổi học trò, nhịp cắt theo giai điệu bài hát",
      poster: "assets/images/hen_lan_sau_cover.jpg",
      driveUrl: "https://drive.google.com/file/d/19bOEfcCMWXAGpC1zJ8cbSTcDdIKy27iQ/view?usp=drive_link",
      sampleSrc: "https://drive.google.com/file/d/19bOEfcCMWXAGpC1zJ8cbSTcDdIKy27iQ/preview"
    },

    colorGrading: {
      title: "Color Palette: Warm Nostalgic Film Look",
      description: "Tái hiện tông màu phim nhựa hoài niệm với ánh nắng vàng cam ấm áp, vùng tối ánh xanh rêu nhẹ (Teal & Orange vintage) tôn lên nét trong trẻo của đồng phục học sinh.",
      beforeLabel: "Standard Rec.709 (Trước)",
      afterLabel: "Nostalgic Film Emulation (Sau)",
      beforeImg: "assets/images/mv_raw.svg",
      afterImg: "assets/images/mv_graded.svg",
      lutUsed: "Kodak 2383 Film Print Emulation + Custom Curves"
    },

    audioDesign: {
      title: "Pacing & Beat-Synced Cuts",
      details: [
        { label: "Beat Matching", desc: "Các cú chuyển cảnh (Cut/Dissolve) được tính toán chuẩn xác rơi vào nhịp Kick/Snare của bản phối." },
        { label: "Narrative Arc", desc: "Xây dựng mạch cảm xúc từ e ấp -> rung động -> hoài niệm theo đúng cao trào bài hát." }
      ]
    },

    gallery: [
      {
        title: "Khung cảnh 1: Nam sinh mang balo trên hành lang",
        tag: "Medium Shot",
        caption: "Bố cục 1/3 với ánh sáng xiên ban mai qua khung cửa sổ trường học."
      },
      {
        title: "Khung cảnh 2: Nữ sinh cài ruy-băng tím",
        tag: "Close-Up",
        caption: "Tập trung vào biểu cảm e ấp, tôn vinh nét đẹp thanh xuân."
      },
      {
        title: "Khung cảnh 3: Bước đi bên dãy chậu hoa sân trường",
        tag: "Full Shot",
        caption: "Không gian sân trường ngập tràn ánh nắng và sắc xanh cây lá."
      },
      {
        title: "Khung cảnh 4: Cuộc gặp gỡ tình cờ nơi góc cầu thang",
        tag: "Two Shot",
        caption: "Điểm rơi cảm xúc cốt lõi của câu chuyện tình thời học trò."
      }
    ],

    keyLearnings: [
      "Kỹ thuật dựng truyện kể bằng hình ảnh không cần lời thoại (Visual Storytelling).",
      "Xử lý nhịp thở của nhân vật khớp với nhịp điệu của ca khúc.",
      "Tạo phong cách màu Vintage đồng nhất xuyên suốt 24 phân đoạn cảnh."
    ]
  },

  // Project 6 (2026): TALKSHOW: GÓC NHÌN SÁNG TẠO
  {
    id: "project-6",
    num: "Project - 6",
    title: "TALKSHOW: GÓC NHÌN SÁNG TẠO",
    category: "TALKSHOW",
    categoryLabel: "Multi-Cam Talkshow Production",
    shortDesc: "Served as the lead Video Editor for a Media Production course project, producing the talkshow episode 'Góc Nhìn Sáng Tạo'. Responsible for seamless multi-camera switching, dialogue audio cleanup, motion graphics integration (intro, lower-thirds, callouts), and color grading to deliver an engaging, TV-standard broadcast layout, optimized for live streaming standards.",
    fullDesc: "Tập Talkshow chuyên đề 'GÓC NHÌN SÁNG TẠO' do AURA Production sản xuất. Đảm nhận vai trò Lead Video Editor phụ trách: Dựng đa góc máy (Multi-Camera Switching), thiết kế & đồng bộ đồ họa động (Motion Graphics: Intro, Lower-thirds, Callouts), lọc nhiễu âm thanh đối thoại hiện trường và xuất bản theo tiêu chuẩn phát sóng truyền hình & livestream.",
    role: "Lead Video Editor & Colorist",
    course: "Media Course Project - Van Lang University",
    year: "2026",
    client: "AURA Production / Góc Nhìn Sáng Tạo",
    software: ["CapCut Pro", "CapCut", "Google Flow", "Canva"],
    colorHex: "#0284c7",
    accentBg: "from-sky-600 to-blue-900",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    previewImage: "assets/images/goc_nhin_sang_tao_cover.png",

    video: {
      type: "drive",
      ratio: "16:9",
      duration: "18:30",
      title: "Talkshow: Góc Nhìn Sáng Tạo",
      subtitle: "Hệ thống dựng Multi-Cam 3 góc máy kết hợp Lower-Thirds & Motion Graphics",
      poster: "assets/images/goc_nhin_sang_tao_cover.png",
      driveUrl: "https://drive.google.com/file/d/1J69SEu4iQ-e9ORIWaYWpB5ZTm31mmLSF/view?usp=drive_link",
      sampleSrc: "https://drive.google.com/file/d/1J69SEu4iQ-e9ORIWaYWpB5ZTm31mmLSF/preview"
    },

    motionGraphics: {
      title: "Motion Graphics & Broadcast Package",
      items: [
        { name: "Live Stream Header", tag: "Overlay", desc: "Thanh tiêu đề 'Góc Nhìn Sáng Tạo Talkshow' kết hợp logo AURA Production." },
        { name: "Dynamic Lower-Thirds", tag: "CapCut Motion", desc: "Bảng tên khách mời tự động pop-up theo nhịp phát biểu với chuyển động mượt mà." },
        { name: "Topic Callout Boxes", tag: "Graphic Card", desc: "Thẻ tóm tắt key message và các chủ đề truyền thông sáng tạo nổi bật." }
      ]
    },

    audioDesign: {
      title: "Multi-Track Dialogue Cleanup & Mastering",
      details: [
        { label: "De-noise & De-reverb", desc: "Khử tiếng vang phòng thu và tiếng ồn điều hòa qua CapCut Audio." },
        { label: "Broadcast Loudness", desc: "Mastering chuẩn -23 LUFS (EBU R128) phát sóng chuẩn truyền hình." }
      ]
    },

    gallery: [
      {
        title: "Poster chính thức Talkshow Góc Nhìn Sáng Tạo",
        tag: "Key Visual",
        caption: "Bố cục chuyên nghiệp với nhận diện thương hiệu AURA Production và góc nhìn sáng tạo."
      },
      {
        title: "Góc quay toàn cảnh phim trường",
        tag: "Studio Layout",
        caption: "Bố trí ánh sáng 3 điểm (Three-point lighting) cho 3 nhân vật trên sân khấu."
      },
      {
        title: "Livestream Banner & Social Card",
        tag: "Social Media",
        caption: "Tối ưu hóa cho các nền tảng phát sóng trực tiếp Facebook & YouTube."
      }
    ],

    keyLearnings: [
      "Quản lý timeline Multi-Camera đồng bộ mượt mà.",
      "Tối ưu workflow xuất đồ họa Motion Graphics Template từ CapCut Pro.",
      "Nâng cao tư duy chọn góc máy phù hợp với phản ứng biểu cảm của từng khách mời."
    ]
  },

  // Project 7 (2026): INTERVIEW: BẠN CÓ QUAN TÂM VỀ BẤT ĐỘNG SẢN?
  {
    id: "project-7",
    num: "Project - 7",
    title: "INTERVIEW: BẠN CÓ QUAN TÂM VỀ BẤT ĐỘNG SẢN?",
    category: "INTERVIEW",
    categoryLabel: "On-Site Survey Interview",
    shortDesc: "Lead Video Editor for the social survey interview 'Bạn Có Quan Tâm Về Bất Động Sản?'. Managed outdoor interview cutting, voice audio cleanup, graphic callouts, and engaging visual transitions.",
    fullDesc: "Dự án video phỏng vấn khảo sát đường phố 'Bạn Có Quan Tâm Về Bất Động Sản? - Đâu là nơi bạn muốn đầu tư cho tương lai của mình?'. Đảm nhận vai trò Lead Video Editor & Motion Graphics: Xử lý cắt ghép đối thoại hiện trường súc tích, chèn B-roll phối cảnh đô thị sinh động, thiết kế bảng câu hỏi đồ họa (Graphic Callout Cards) và cân bằng âm thanh giọng nói ngoài trời.",
    role: "Main Video Editor",
    course: "Media Course Project - Van Lang University",
    year: "2026",
    client: "Real Estate Survey Media / VLU",
    software: ["CapCut", "Canva"],
    colorHex: "#15803d",
    accentBg: "from-emerald-700 to-green-950",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    previewImage: "assets/images/real_estate_interview_cover.png",

    video: {
      type: "drive",
      ratio: "16:9",
      duration: "5:20",
      title: "Phỏng vấn: Bạn Có Quan Tâm Về Bất Động Sản?",
      subtitle: "Đâu là nơi bạn muốn đầu tư cho tương lai của mình? • Nhịp cắt phỏng vấn hiện trường & Callouts",
      poster: "assets/images/real_estate_interview_cover.png",
      driveUrl: "https://drive.google.com/file/d/18Bq9OxCfsyRYG7zfiL7X0fTv26D09WJc/view?usp=drive_link",
      sampleSrc: "https://drive.google.com/file/d/18Bq9OxCfsyRYG7zfiL7X0fTv26D09WJc/preview"
    },

    motionGraphics: {
      title: "Motion Graphics & Subtitles Package",
      items: [
        { name: "Dynamic Question Callout Card", tag: "Graphic Card", desc: "Bảng câu hỏi 'Đâu là nơi bạn muốn đầu tư cho tương lai của mình?' xuất hiện nổi bật." },
        { name: "Dynamic Subtitle Track", tag: "Karaoke/Pop-up", desc: "Phụ đề chạy chữ tự động theo lời phỏng vấn của người tham gia khảo sát." }
      ]
    },

    audioDesign: {
      title: "Outdoor Voice Cleanup & Audio Ducking",
      details: [
        { label: "Wind & Noise Reduction", desc: "Lọc tạp âm gió và tiếng ồn xe cộ trên đường phố bằng CapCut Audio AI." }
      ]
    },

    gallery: [
      {
        title: "Poster chính thức 'Bạn Có Quan Tâm Về Bất Động Sản?'",
        tag: "Key Artwork",
        caption: "Bìa đồ họa phối cảnh bất động sản xanh và typography vàng kim sang trọng."
      },
      {
        title: "Phân đoạn phỏng vấn khảo sát đường phố",
        tag: "Street Interview",
        caption: "Bố cục phỏng vấn tự nhiên ghi lại cảm nhận và nguyện vọng đầu tư của người dân."
      }
    ],

    keyLearnings: [
      "Kỹ thuật dựng nhịp phỏng vấn đường phố sôi nổi, nắm bắt đúng trọng tâm câu trả lời.",
      "Cân bằng âm thanh giọng nói hiện trường ngoài trời đạt độ trong trẻo và rõ lời."
    ]
  },

  // Project 8 (2026): INTERVIEW: PHỎNG VẤN KHÁCH HÀNG MỤC TIÊU (LITTLE SPOON)
  {
    id: "project-8",
    num: "Project - 8",
    title: "INTERVIEW: PHỎNG VẤN KHÁCH HÀNG MỤC TIÊU (LITTLE SPOON)",
    category: "INTERVIEW",
    categoryLabel: "Target Customer Interview",
    shortDesc: "Lead Video Editor & Content Producer for the target customer interview 'Mô hình: Quán ăn cho bé - Little Spoon'. Handled on-site parent interview cutting, voice audio cleanup, lower-thirds branding, and customer insight storytelling.",
    fullDesc: "Dự án video phỏng vấn khảo sát khách hàng mục tiêu (Phụ huynh có con nhỏ 3-6 tuổi) cho Đồ án Khởi nghiệp 'Mô hình Quán ăn cho bé - Little Spoon' (Nhóm 2 - Khoa QHCC & Truyền thông, Đại học Văn Lang). Đảm nhận vai trò Lead Video Editor phụ trách: Dựng phỏng vấn thực tế với phụ huynh, cô đọng nhu cầu dinh dưỡng cho trẻ nhỏ, thiết kế bảng tên đồ họa Lower-Thirds theo nhận diện Little Spoon và lồng ghép B-roll hình ảnh món ăn hữu cơ & không gian vui chơi cho bé.",
    role: "Lead Video Editor & Content Producer",
    course: "Entrepreneurship Capstone – Van Lang University",
    year: "2026",
    client: "Little Spoon Nutrition / Khoa QHCC & TT",
    software: ["CapCut", "Canva"],
    colorHex: "#B8005A",
    accentBg: "from-pink-700 to-rose-950",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    previewImage: "assets/images/little_spoon_interview_cover.jpg",

    video: {
      type: "drive",
      ratio: "16:9",
      duration: "6:15",
      title: "Phỏng vấn Khách Hàng Mục Tiêu - Little Spoon",
      subtitle: "Mô hình: Quán ăn cho bé - Little Spoon • Phỏng vấn phụ huynh & Khảo sát nhu cầu dinh dưỡng",
      poster: "assets/images/little_spoon_interview_cover.jpg",
      driveUrl: "https://drive.google.com/file/d/1v6iBHHa4_qQ_DoyaYGelbTF6PFzqwfWL/view?usp=drive_link",
      sampleSrc: "https://drive.google.com/file/d/1v6iBHHa4_qQ_DoyaYGelbTF6PFzqwfWL/preview"
    },

    motionGraphics: {
      title: "Motion Graphics & Lower-Thirds Package",
      items: [
        { name: "Parent Profile Card", tag: "Lower-Third", desc: "Bảng tên thông tin phụ huynh và độ tuổi của bé được thiết kế theo tone màu thương hiệu Little Spoon." },
        { name: "Insight Callout Card", tag: "Key Visual", desc: "Trích dẫn mong muốn của phụ huynh về thực đơn dinh dưỡng an toàn cho con." }
      ]
    },

    audioDesign: {
      title: "Dialogue Mastering & Ambient Balancing",
      details: [
        { label: "Vocal Isolation", desc: "Lọc sạch tiếng ồn môi trường, giúp giọng nói phỏng vấn phụ huynh rõ ràng, ấm áp." }
      ]
    },

    gallery: [
      {
        title: "Poster chính thức 'Phỏng Vấn Khách Hàng Mục Tiêu - Little Spoon'",
        tag: "Key Artwork",
        caption: "Bìa đồ họa với nhận diện thương hiệu Little Spoon và hình ảnh món ăn dinh dưỡng cho bé."
      },
      {
        title: "Phân cảnh phỏng vấn phụ huynh",
        tag: "Parent Interview",
        caption: "Góc quay chân thực ghi lại những chia sẻ tâm huyết của các bậc phụ huynh."
      }
    ],

    keyLearnings: [
      "Kỹ thuật khai thác insight khách hàng mục tiêu qua phương pháp phỏng vấn sâu.",
      "Xây dựng câu chuyện kết nối giữa nỗi đau của khách hàng (pain points) và giải pháp sản phẩm Little Spoon."
    ]
  },

  // Project 9 (2026): “LITTLE SPOON” - F&B STARTUP PROJECT
  {
    id: "project-9",
    num: "Project - 9",
    title: "“LITTLE SPOON” - F&B STARTUP PROJECT",
    category: "STARTUP PROJECT",
    categoryLabel: "F&B Startup & Zalo OA Mini App",
    shortDesc: "LITTLE SPOON is a simulated F&B startup project developed for an Entrepreneurship course, combining a physical dining concept with digital customer engagement. As the Media & Product Lead, I helped shape the business plan and designed an exclusive Zalo OA Mini App as our core capstone deliverable. The app seamlessly integrated online menu browsing, direct ordering, and automated loyalty programs, serving as the primary digital bridge between the restaurant and modern diners.",
    fullDesc: "Dự án Khởi nghiệp Giả lập 'LITTLE SPOON' - Chuỗi Quán Ăn Dinh Dưỡng Chuyên Biệt Dành Cho Trẻ Em (Khu Đô Thị Sala). Đảm nhận vai trò Media & Product Lead: Trực tiếp xây dựng nhận diện thương hiệu, lên kế hoạch truyền thông và thiết kế sản phẩm số cốt lõi là Zalo OA Mini App. Ứng dụng tích hợp menu hữu cơ trực tuyến, đặt bàn, tư vấn thực đơn cùng Bác sĩ Dinh dưỡng và Hồ sơ Dinh dưỡng Điện tử cá nhân hóa theo chuẩn WHO cho trẻ 3-6 tuổi.",
    role: "Media & Product Lead / UI-UX Designer & Content Producer",
    course: "Entrepreneurship Capstone – Van Lang University",
    year: "2026",
    client: "Little Spoon Nutrition (Startup Capstone)",
    software: ["Zalo Mini App Platform", "Antigravity", "Canva"],
    liveAppUrl: "https://little-spoon-zalo-oa.netlify.app/",
    colorHex: "#0284c7",
    accentBg: "from-blue-600 to-amber-700",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    previewImage: "assets/images/little_spoon_cover.png",

    miniApp: {
      title: "Zalo Official Account & Mini App: Little Spoon",
      verifiedBadge: "Quán Ăn Dinh Dưỡng Trẻ Em • Standard WHO",
      address: "Shophouse A01.10, Khu đô thị Sala, Mai Chí Thọ, TP. Thủ Đức",
      features: [
        {
          name: "Thực đơn hữu cơ (Organic)",
          desc: "Chế biến tươi sạch, chuẩn vị, tối ưu dinh dưỡng cho giai đoạn vàng 3 - 6 tuổi."
        },
        {
          name: "Đồng hành chuyên môn",
          desc: "Thực đơn được thiết kế và kiểm duyệt bởi Bác sĩ Dinh dưỡng."
        },
        {
          name: "Hồ sơ Dinh dưỡng Điện tử",
          desc: "Theo dõi biểu đồ tăng trưởng chuẩn WHO cá nhân hóa cho từng bé trên Zalo OA."
        },
        {
          name: "Đặt bàn & Loyalty tích điểm",
          desc: "Tích lũy điểm thưởng thành viên, nhận voucher sinh nhật tự động."
        }
      ]
    },

    video: {
      type: "interactive",
      ratio: "16:9",
      duration: "2:15",
      title: "Little Spoon - Startup Pitch & UI/UX Demo",
      subtitle: "Giải pháp chuyển đổi số cho F&B Dinh dưỡng Trẻ em qua Zalo Mini App",
      poster: "assets/images/little_spoon_cover.png",
      sampleSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
    },

    gallery: [
      {
        title: "Giao diện Zalo Official Account đã xác thực",
        tag: "UI/UX Design",
        caption: "Bố cục nút 'Nhắn tin' & 'Quan tâm', thanh điều hướng Thông tin - Membership - Hồ sơ dinh dưỡng."
      },
      {
        title: "Thiết kế Bộ Nhận Diện Thương Hiệu Little Spoon",
        tag: "Branding Kit",
        caption: "Tone màu vàng ấm và xanh lá pastel tạo cảm giác thân thiện, an tâm cho mẹ và bé."
      },
      {
        title: "Thực đơn Dinh dưỡng Điện tử tương tác",
        tag: "Mobile App",
        caption: "Minh bạch hàm lượng calo, chất xơ, vitamin trong từng món ăn."
      },
      {
        title: "Biểu đồ Tăng trưởng WHO trên Zalo Mini App",
        tag: "Feature Showcase",
        caption: "Giúp phụ huynh theo dõi chiều cao và cân nặng của con theo thời gian thực."
      }
    ],

    keyLearnings: [
      "Kết hợp giữa tư duy truyền thông Marketing và thiết kế trải nghiệm sản phẩm số (UI/UX).",
      "Ứng dụng hệ sinh thái Zalo OA để giảm thiểu rào cản cài đặt app cho phụ huynh.",
      "Xây dựng chiến lược Omnichannel kết nối quán ăn vật lý và nền tảng chăm sóc khách hàng trực tuyến."
    ]
  }
];

// Profile Metadata
const PROFILE_DATA = {
  name: "NGUYỄN NGA ANH",
  englishName: "Nga Anh Nguyen",
  gradYear: "2027",
  university: "Trường Đại học Văn Lang (Van Lang University)",
  major: "Ngành Truyền thông Đa phương tiện (Multimedia Communications)",
  roleTitle: "Multimedia Communications Student / Video Editor & Media Specialist",
  tagline: "Sáng tạo nội dung đa phương tiện • Dựng phim & Kỹ xảo • Truyền thông số",
  aboutText: "As a Multimedia Communications student at Van Lang University, I have gained valuable experience in teamwork and project execution through various coursework assignments. These experiences have equipped me with foundational skills in multi-format content production (including design, video editing, copywriting, and AI tools), digital media management, and event support. With a proactive mindset and strong adaptability, I am eager to secure an internship position to further develop my professional skills and make a positive contribution to the company's communications and marketing activities.",
  aboutTextVN: "Là sinh viên năm cuối ngành Truyền thông Đa phương tiện tại Trường Đại học Văn Lang, tôi đã tích lũy nhiều kinh nghiệm thực chiến quý báu qua các dự án môn học và làm việc nhóm. Những trải nghiệm này trang bị cho tôi nền tảng vững chắc trong sản xuất nội dung đa định dạng (thiết kế đồ họa, dựng video, biên kịch nội dung và ứng dụng công cụ AI), quản trị truyền thông số và hỗ trợ tổ chức sự kiện. Với tư duy chủ động và khả năng thích ứng cao, tôi sẵn sàng ứng tuyển vị trí Thực tập sinh để phát triển năng lực chuyên môn và đóng góp tích cực vào các hoạt động truyền thông & marketing của doanh nghiệp.",
  skills: [
    { name: "Nhiếp ảnh | Quay phim | Dựng Phim", level: "Level cơ bản", icon: "camera", desc: "Quay phim, nhiếp ảnh và hậu kỳ dựng video trên CapCut / CapCut Pro" },
    { name: "Công cụ AI trong sáng tạo nội dung", level: "Thành thạo", icon: "bot", desc: "Biết sử dụng AI video, AI hình ảnh, AI voice,... trong sáng tạo nội dung" },
    { name: "Sáng tạo nội dung", level: "Thành thạo", icon: "file-text", desc: "Viết kịch bản, Content" },
    { name: "Công cụ hỗ trợ", level: "Sử dụng tốt", icon: "wrench", desc: "Google Workspace, Microsoft 365, Canva, Capcut" }
  ],
  contact: {
    phone: "0962468650",
    phoneDisplay: "0962 468 650",
    email: "nguyenngaanh6704@gmail.com",
    website: "https://ngaanh-portfolio.vn",
    location: "TP. Hồ Chí Minh, Việt Nam",
    universityLocation: "Đại học Văn Lang (Van Lang University)"
  }
};
