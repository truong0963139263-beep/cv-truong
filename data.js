/* ============================================================================
 *  DATA.JS  —  TOÀN BỘ NỘI DUNG WEBSITE (song ngữ: vi = Tiếng Việt, en = English)
 * ----------------------------------------------------------------------------
 *  ► CHỈ CẦN SỬA FILE NÀY để cập nhật nội dung. KHÔNG cần đụng vào giao diện.
 *  ► Mỗi nội dung đều có 2 ngôn ngữ:  { vi: "Tiếng Việt", en: "English" }
 *  ► Đổi ảnh, đổi CV, đổi trạng thái làm việc... đều có ghi chú ngay bên dưới.
 * ========================================================================== */

window.SITE_DATA = {

  /* ════════ 1) THÔNG TIN CHUNG (dùng chung, không cần dịch) ════════ */
  profile: {
    photo:    "assets/profile.jpg",      // Ảnh chân dung. Đổi ảnh: ghi đè file này (giữ tên).
    email:    "Henrytrinhcongtruong@gmail.com",
    phone:    "0963 139 263",
    phoneTel: "+84963139263",            // Số bấm-để-gọi (không dấu cách, có +84)
    linkedin: "https://www.linkedin.com/in/trinh-cong-truong-02aa98312/",
    defaultLang: "vi",                   // Ngôn ngữ mặc định khi mở web: "vi" hoặc "en"
    formEndpoint: "",                    // (Tùy chọn) link Formspree để nhận mail thẳng vào hộp thư

    // Nút "Tải CV" sẽ trỏ tới các file PDF này. Cập nhật CV: ghi đè file mới (giữ nguyên tên).
    cv: {
      vi: "assets/CV-TrinhCongTruong-VI.pdf",
      en: "assets/CV-TrinhCongTruong-EN.pdf"
    }
  },

  /* ════════ 2) TRẠNG THÁI LÀM VIỆC (tag màu nổi bật ở Hero) ════════
   *  Đổi "current" để chuyển trạng thái hiển thị:
   *     "working" → Đang làm việc tại [công ty]   (tag màu xanh)
   *     "open"    → Đang tìm kiếm cơ hội mới       (tag màu xanh lá)            */
  status: {
    current: "working",
    working: { vi: "Đang làm việc tại OOCL Logistics", en: "Currently at OOCL Logistics" },
    open:    { vi: "Đang tìm kiếm cơ hội mới",         en: "Open to opportunities" }
  },

  /* Nhãn nhỏ cạnh ảnh + nút ngôn ngữ */
  ui: {
    badgeLocation: { vi: "TP.HCM", en: "HCMC" }
  },

  /* ════════ 3) MENU ĐIỀU HƯỚNG ════════ */
  nav: {
    home:       { vi: "Trang chủ",   en: "Home" },
    about:      { vi: "Giới thiệu",  en: "About" },
    experience: { vi: "Kinh nghiệm", en: "Experience" },
    skills:     { vi: "Kỹ năng",     en: "Skills" },
    gallery:    { vi: "Hình ảnh",    en: "Gallery" },
    contact:    { vi: "Liên hệ",     en: "Contact" }
  },

  /* ════════ 4) HERO (đầu trang) ════════ */
  hero: {
    eyebrow: { vi: "Vận hành Kho & Logistics", en: "Warehouse & Logistics Operations" },
    name:    { vi: "Trịnh Công Trường", en: "Trịnh Công Trường" },
    role:    { vi: "Giám sát Kho", en: "Warehouse Supervisor" },
    intro: {
      vi: "Tôi điều hành vận hành kho và logistics khối lượng lớn trong môi trường sản xuất đa quốc gia và 3PL — biến sự kỷ luật trong vận hành và dữ liệu thành độ chính xác, năng suất và hiệu quả đội nhóm có thể đo lường được.",
      en: "I lead high-volume warehouse and logistics operations across multinational manufacturing and 3PL environments — turning disciplined execution and data into measurable accuracy, throughput, and team performance."
    },
    btnCV:      { vi: "Tải CV", en: "Download CV" },
    btnContact: { vi: "Liên hệ", en: "Get in touch" }
  },

  /* KPI nổi bật (số tự đếm lên). suffix là ký tự sau số (vd: "+", "%"). */
  kpis: [
    { value: 7,   suffix: "+", label: { vi: "Năm kinh nghiệm vận hành",        en: "Years in operations" } },
    { value: 5,   suffix: "",  label: { vi: "Doanh nghiệp đa quốc gia & 3PL",  en: "Multinational & 3PL employers" } },
    { value: 100, suffix: "%", label: { vi: "Độ chính xác tồn kho cao nhất",   en: "Peak inventory accuracy" } },
    { value: 30,  suffix: "+", label: { vi: "Nhân sự kho đã quản lý",          en: "Warehouse staff led" } }
  ],

  /* ════════ 5) GIỚI THIỆU ════════ */
  about: {
    eyebrow: { vi: "01 — Giới thiệu", en: "01 — About" },
    title:   { vi: "Lãnh đạo vận hành, dựa trên dữ liệu", en: "Operations leadership, grounded in data" },

    // Đoạn giới thiệu (mỗi phần tử là 1 đoạn văn)
    summary: {
      vi: [
        "Tôi có gần 7 năm kinh nghiệm trong lĩnh vực Logistics và vận hành sản xuất, bao gồm hơn 4 năm đảm nhiệm vai trò Team Leader trong môi trường nhà máy đa quốc gia và dịch vụ logistics 3PL. Tôi có kinh nghiệm toàn diện trong quản lý vận hành kho: tiếp nhận hàng (inbound), kiểm soát tồn kho, xử lý xuất hàng (outbound) và cung ứng vật tư cho dây chuyền sản xuất tại các cơ sở quy mô lớn.",
        "Tôi có kinh nghiệm nâng cao hiệu quả vận hành, độ chính xác tồn kho và năng suất nhân sự thông qua quản lý chặt chẽ, ra quyết định dựa trên dữ liệu và áp dụng các phương pháp cải tiến liên tục. Thành thạo WMS, SAP, ERP, đồng thời phân tích dữ liệu với Excel, SQL và Power BI để hỗ trợ lập kế hoạch và theo dõi hiệu suất, cùng khả năng lãnh đạo đội nhóm và phối hợp đa phòng ban trong môi trường khối lượng lớn, nhịp độ cao."
      ],
      en: [
        "Results-oriented warehouse team leader with nearly 7 years of progressive experience in logistics and manufacturing operations, including over 4 years in frontline leadership within multinational manufacturing and 3PL environments. Demonstrated expertise in end-to-end warehouse operations — inbound receiving, inventory control, outbound fulfilment, and production-line material supply across large-scale facilities.",
        "Strong track record in driving operational efficiency, inventory accuracy, and workforce productivity through disciplined execution, data-driven decisions, and continuous-improvement methodologies. Highly proficient in WMS, SAP, and ERP systems, with advanced analytics in Excel, SQL, and Power BI to support planning and performance monitoring — recognised for hands-on leadership, cross-functional coordination, and an ownership mindset."
      ]
    },

    objectiveLabel: { vi: "Mục tiêu nghề nghiệp", en: "Career objective" },
    objective: {
      vi: "Đảm nhận vai trò giám sát/quản lý vận hành kho, nơi tôi có thể nâng cao độ chính xác tồn kho, tối ưu năng suất và phát triển đội ngũ thông qua quản lý chặt chẽ, ra quyết định dựa trên dữ liệu và cải tiến liên tục.",
      en: "To take on a warehouse operations supervisor/manager role where I can drive inventory accuracy, optimise productivity, and grow teams through disciplined execution, data-driven decisions, and continuous improvement."
    },

    // Học vấn & chứng chỉ
    eduTitle: { vi: "Học vấn & Chứng chỉ", en: "Education & Certifications" },
    eduOrg:   { vi: "Chứng chỉ chuyên môn — MindX Technology", en: "Professional Certifications — MindX Technology" },
    eduItems: [
      { vi: "Đào tạo nghề sơ cấp Phân tích dữ liệu (Data Analyst)", en: "Elementary Vocational Training in Data Analysis (Data Analyst)" },
      { vi: "Chứng chỉ Data Analyst",            en: "Certificate in Data Analyst" },
      { vi: "Chứng chỉ Data for Everyone",        en: "Certificate in Data for Everyone" },
      { vi: "Data Analyst Career Kickstart Program", en: "Data Analyst Career Kickstart Program" },
      { vi: "Chứng chỉ Business Intelligence Analyst", en: "Certificate in Business Intelligence Analyst" }
    ],

    // Ngôn ngữ (pct = % thanh hiển thị, 0–100)
    langTitle: { vi: "Ngôn ngữ", en: "Languages" },
    languages: [
      { name: { vi: "Tiếng Việt", en: "Vietnamese" }, level: { vi: "Bản ngữ", en: "Native" }, pct: 100 },
      { name: { vi: "Tiếng Anh",  en: "English" },    level: { vi: "Cơ bản",  en: "Basic" },  pct: 45 }
    ]
  },

  /* ════════ 6) KINH NGHIỆM (timeline) ════════
   *  Mỗi công việc có: company, current(true nếu đang làm), role, period, location,
   *  và groups (các nhóm nội dung, mỗi nhóm có title + points song ngữ).            */
  experience: {
    eyebrow: { vi: "02 — Kinh nghiệm", en: "02 — Experience" },
    title:   { vi: "Hành trình qua môi trường 3PL & sản xuất", en: "A track record across 3PL & manufacturing" },
    lead:    { vi: "Từ vận hành tại kho đến giám sát hoạt động đa địa điểm — nhấn vào từng vị trí để xem chi tiết.",
               en: "From the warehouse floor to supervising multi-site operations — tap any role to expand the details." },
    currentLabel: { vi: "Hiện tại", en: "Current" },

    jobs: [
      {
        company:  "OOCL Logistics",
        current:  true,
        role:     { vi: "Giám sát Kho", en: "Warehouse Supervisor" },
        period:   "06/2026 — Present",
        location: { vi: "Bình Dương · Đà Nẵng · Linh Xuân, TP.HCM", en: "Binh Duong · Da Nang · Linh Xuan, HCMC" },
        groups: [
          { title: { vi: "Vận hành kho CFS", en: "CFS Warehouse Operations" },
            points: {
              vi: ["Giám sát vận hành kho CFS hằng ngày: tiếp nhận, lưu kho, gom hàng (consolidation) và đóng container cho hàng xuất khẩu.", "Điều phối luồng hàng từ 129 nhà cung cấp, đảm bảo tuân thủ quy trình OOCL và SOP của khách hàng.", "Theo dõi hoạt động kho tại Bình Dương, Đà Nẵng và Linh Xuân (TP.HCM)."],
              en: ["Supervise daily CFS warehouse operations: receiving, storage, consolidation, and container stuffing for export shipments.", "Coordinate cargo flow from 129 suppliers, ensuring compliance with OOCL procedures and customer SOPs.", "Monitor warehouse activities across Binh Duong, Da Nang, and Linh Xuan (HCMC)."]
            } },
          { title: { vi: "Quản lý nhà cung cấp dịch vụ", en: "Service Provider Management" },
            points: {
              vi: ["Quản lý vận hành kho của 3 nhà cung cấp logistics: TBS, SGW và DNL Logistics.", "Đảm bảo chất lượng dịch vụ và xử lý hàng hóa hiệu quả cho 27 khách hàng đang hoạt động."],
              en: ["Manage warehouse execution by 3 logistics providers: TBS, SGW, and DNL Logistics.", "Ensure service quality and smooth cargo handling for 27 active customers."]
            } },
          { title: { vi: "Điều phối, báo cáo & tuân thủ", en: "Coordination, Reporting & Compliance" },
            points: {
              vi: ["Phối hợp với Customer Service, nhà máy và nhà cung cấp để xử lý vấn đề vận hành và đảm bảo tiến độ giao nhận.", "Theo dõi KPI kho, debit phát sinh và hiệu suất nhà cung cấp; phát triển dashboard Power BI để tự động hóa báo cáo.", "Đảm bảo tuân thủ tiêu chuẩn an toàn & an ninh, bao gồm yêu cầu C-TPAT."],
              en: ["Coordinate with Customer Service, factories, and suppliers to resolve issues and maintain shipment schedules.", "Track warehouse KPIs, debit records, and supplier performance; build Power BI dashboards to automate reporting.", "Ensure compliance with safety & security standards, including C-TPAT requirements."]
            } }
        ]
      },
      {
        company:  "Techtronic Industries (TTI)",
        current:  false,
        role:     { vi: "Trợ lý Giám sát Kho", en: "Assistant Warehouse Supervisor" },
        period:   "04/2023 — 06/2025",
        location: { vi: "Kho 15.000 m² · 15.000+ vị trí", en: "15,000 m² · 15,000+ locations" },
        groups: [
          { title: { vi: "Tiếp nhận hàng (Inbound)", en: "Inbound Logistics & Receiving" },
            points: {
              vi: ["Quản lý tiếp nhận hàng ngày: hàng nội địa, điều chuyển nội bộ và hàng nhập khẩu.", "Kiểm soát độ chính xác ASN, xác nhận nhận hàng và cập nhật dữ liệu trên WMS/ERP.", "Phối hợp với mua hàng, logistics và nhà cung cấp để sắp xếp lịch nhập và xử lý sai lệch."],
              en: ["Managed daily inbound operations for domestic, internal-transfer, and imported shipments.", "Controlled ASN accuracy, receiving validation, and system posting in WMS/ERP.", "Coordinated with procurement, logistics, and suppliers to align schedules and resolve discrepancies."]
            } },
          { title: { vi: "Vận hành kho & kiểm soát tồn kho", en: "Warehouse Operations & Inventory Control" },
            points: {
              vi: ["Quản lý layout, phân khu và tối ưu không gian cho kho 15.000 m² với hơn 15.000 vị trí lưu trữ.", "Đảm bảo độ chính xác tồn kho qua cycle counting (1.0 / 2.0 / 3.0) và đối soát dữ liệu.", "Xử lý NCR, phân tích nguyên nhân gốc rễ và triển khai hành động khắc phục; tuân thủ FIFO/FEFO & quản lý theo lô."],
              en: ["Oversaw layout, zoning, and space utilisation across 15,000 m² and 15,000+ locations.", "Managed inventory accuracy through cycle-counting programs (1.0 / 2.0 / 3.0) and reconciliation.", "Controlled NCR handling, root-cause analysis, and corrective actions; ensured FIFO/FEFO & batch standards."]
            } },
          { title: { vi: "Xuất hàng, hỗ trợ sản xuất & đội nhóm", en: "Outbound, Production Support & Team" },
            points: {
              vi: ["Giám sát picking, packing, staging và dispatch để đáp ứng SLA giao hàng.", "Cung ứng vật tư cho 30–35 dây chuyền sản xuất mỗi ca, đảm bảo sản xuất liên tục.", "Quản lý đội ngũ hơn 30 nhân sự; là đầu mối kho với IQC, QM, NPI, PMC và Production."],
              en: ["Supervised picking, packing, staging, and dispatch to meet delivery SLAs.", "Supplied material to 30–35 production lines per shift, ensuring continuous flow.", "Led a 30+ team; acted as warehouse focal point for IQC, QM, NPI, PMC, and production."]
            } },
          { title: { vi: "Thành tích nổi bật", en: "Key Achievements" },
            points: {
              vi: ["Duy trì độ chính xác tồn kho hằng ngày, đạt 100% trong kiểm kê tháng/năm.", "Đảm bảo nguồn vật tư ổn định cho sản xuất khối lượng lớn, không thiếu hụt nghiêm trọng.", "Cải thiện tổ chức kho qua Lean, 5S và Kaizen; giảm sai lệch nhận hàng nhờ siết kiểm soát ASN."],
              en: ["Maintained daily inventory accuracy and achieved 100% monthly/yearly accuracy.", "Supported stable material supply for high-volume lines with zero critical shortages.", "Improved organisation via Lean, 5S, and Kaizen; reduced inbound discrepancies through ASN discipline."]
            } }
        ]
      },
      {
        company:  "Kerry Logistics — Nguyen Kim Central Retail",
        current:  false,
        role:     { vi: "Trưởng nhóm Kho", en: "Warehouse Team Leader" },
        period:   "12/2022 — 04/2023",
        location: { vi: "Kho mới 10.000 m² · 20.000+ SKU", en: "New warehouse 10,000 m² · 20,000+ SKUs" },
        groups: [
          { title: { vi: "Thiết lập kho & thiết kế quy trình", en: "Warehouse Setup & Process Design" },
            points: {
              vi: ["Tham gia triển khai kho mới quy mô 10.000 m², 8.000 vị trí và hơn 20.000 SKU.", "Thiết kế layout, phân khu và luồng di chuyển hàng hóa để tối ưu lưu trữ và picking.", "Xây dựng SOP và hướng dẫn công việc cho nhập, xuất và kiểm soát tồn kho."],
              en: ["Participated in launching a new 10,000 m² warehouse with 8,000 locations and 20,000+ SKUs.", "Designed layout, zoning, and material flow to optimise storage and picking efficiency.", "Developed SOPs and work instructions for inbound, outbound, and inventory control."]
            } },
          { title: { vi: "Vận hành, tồn kho & giám sát đội nhóm", en: "Operations, Inventory & Supervision" },
            points: {
              vi: ["Quản lý nhập, xuất và xử lý đơn hàng hằng ngày trên hệ thống KWMS.", "Thực hiện kiểm kê chu kỳ, đối soát và điều chỉnh tồn kho; kiểm soát hàng hold/không phù hợp.", "Giám sát nhân viên, phối hợp khách hàng & đối tác logistics, triển khai và duy trì 5S."],
              en: ["Managed daily inbound, outbound, and fulfilment under KWMS.", "Conducted cycle counts, reconciliation, and adjustments; controlled hold/non-conforming stock.", "Supervised operators, coordinated with customers & logistics partners, and maintained 5S."]
            } },
          { title: { vi: "Thành tích nổi bật", en: "Key Achievements" },
            points: {
              vi: ["Triển khai thành công kho mới đúng tiến độ và đáp ứng yêu cầu vận hành.", "Nâng cao tính rõ ràng quy trình và nhất quán trong vận hành nhờ chuẩn hóa SOP."],
              en: ["Successfully launched a new warehouse on schedule and within operational requirements.", "Improved process clarity and execution consistency through standardised SOPs."]
            } }
        ]
      },
      {
        company:  "Scanwell Logistics Vietnam (SCW) — Jabil Account",
        current:  false,
        role:     { vi: "Chuyên viên Kho cấp cao", en: "Senior Warehouse Executive" },
        period:   "11/2021 — 12/2022",
        location: { vi: "Kho 13.000 m² · 18.000+ SKU", en: "13,000 m² · 18,000+ SKUs" },
        groups: [
          { title: { vi: "Nhập hàng, lưu trữ & xuất hàng", en: "Inbound, Storage & Outbound" },
            points: {
              vi: ["Phối hợp logistics đầu vào với nhà cung cấp, đơn vị vận chuyển và freight forwarder.", "Quản lý nhận hàng, put-away và lưu trữ trên hệ thống WMS; kiểm soát tồn kho 13.000 m², 17.000+ vị trí, 18.000+ SKU.", "Giám sát picking, packing, staging và thực hiện xuất hàng xuất khẩu, đảm bảo độ chính xác."],
              en: ["Coordinated inbound logistics with vendors, transporters, and freight forwarders.", "Managed receiving, put-away, and storage in WMS; controlled inventory across 13,000 m², 17,000+ locations, 18,000+ SKUs.", "Supervised picking, packing, staging, and export shipment execution, ensuring accuracy."]
            } },
          { title: { vi: "Kiểm soát vận hành & báo cáo", en: "Operational Control & Reporting" },
            points: {
              vi: ["Thực hiện đối soát tồn kho, kiểm kê chu kỳ và giám sát vận hành hằng ngày.", "Đào tạo nhân viên về hệ thống WMS và quy trình kiểm soát tồn kho; chuẩn bị báo cáo cho ban quản lý."],
              en: ["Conducted inventory reconciliations, cycle counting, and daily operational monitoring.", "Trained staff on WMS usage and inventory control; prepared reports for management."]
            } },
          { title: { vi: "Thành tích nổi bật", en: "Key Achievements" },
            points: {
              vi: ["Duy trì 99% độ chính xác tồn kho trong môi trường nhiều SKU.", "Giảm lỗi xuất hàng nhờ chuẩn hóa quy trình; nâng cao an toàn & tuân thủ qua 5S, 6S."],
              en: ["Sustained 99% inventory accuracy across high-SKU operations.", "Reduced outbound errors through standardisation; strengthened safety & compliance via 5S, 6S."]
            } }
        ]
      },
      {
        company:  "Jabil",
        current:  false,
        role:     { vi: "Nhân viên Kho", en: "Warehouse Staff" },
        period:   "11/2019 — 10/2021",
        location: { vi: "Vận hành nhập hàng & kiểm soát tồn kho (SAP)", en: "Inbound & inventory operations (SAP)" },
        groups: [
          { title: { vi: "Nhập hàng & kiểm soát tồn kho", en: "Inbound & Inventory Operations" },
            points: {
              vi: ["Tiếp nhận hàng nội địa và nhập khẩu, kiểm tra hàng hóa và đối chiếu chứng từ.", "Thực hiện giao dịch trên SAP để cập nhật tồn kho và xử lý chứng từ nhập khẩu.", "Thực hiện kiểm kê chu kỳ, kiểm soát FIFO và theo dõi hạn sử dụng."],
              en: ["Received domestic and imported goods, including inspection and documentation checks.", "Performed SAP transactions for inventory updates and import documentation.", "Conducted cycle counting, FIFO control, and shelf-life monitoring."]
            } },
          { title: { vi: "Hỗ trợ xuất hàng & thành tích", en: "Outbound Support & Achievements" },
            points: {
              vi: ["Hỗ trợ picking, staging và xuất hàng cho sản xuất và đơn hàng khách; vận hành xe nâng an toàn.", "Duy trì độ chính xác cao trong cập nhật tồn kho trên SAP và kiểm soát tồn kho thực tế."],
              en: ["Supported picking, staging, and dispatch for production and customer orders; operated forklifts safely.", "Maintained high accuracy in SAP inventory posting and physical stock control."]
            } }
        ]
      }
    ]
  },

  /* ════════ 7) KỸ NĂNG / NĂNG LỰC ════════
   *  icon: "ops" | "lead" | "data" | "improve" (chọn biểu tượng cho thẻ)          */
  skills: {
    eyebrow: { vi: "03 — Năng lực", en: "03 — Capabilities" },
    title:   { vi: "Năng lực cốt lõi", en: "Core competencies" },
    lead:    { vi: "Vận hành kho toàn diện, lãnh đạo đội nhóm, hệ thống & phân tích dữ liệu, và cải tiến liên tục.",
               en: "End-to-end warehouse operations, team leadership, systems & analytics, and continuous improvement." },

    groups: [
      { icon: "ops", title: { vi: "Vận hành Kho & Logistics", en: "Warehouse & Logistics Operations" },
        items: {
          vi: ["Tiếp nhận (Inbound) & điều phối xuất hàng (Outbound)", "Kiểm soát tồn kho & kiểm kê chu kỳ", "Thiết kế layout kho & tối ưu không gian lưu trữ", "Quản lý FIFO / FEFO & quản lý theo lô", "Xử lý đơn hàng & đảm bảo tuân thủ SLA", "Cung ứng vật tư cho dây chuyền sản xuất"],
          en: ["Inbound receiving & outbound dispatch", "Inventory control & cycle counting", "Warehouse layout & space optimisation", "FIFO / FEFO & batch management", "Order fulfilment & SLA compliance", "Production-line material supply"]
        } },
      { icon: "lead", title: { vi: "Quản lý Nhân sự & Vận hành", en: "Leadership & Operations Management" },
        items: {
          vi: ["Lãnh đạo đội nhóm & lập kế hoạch nhân sự", "Đào tạo, giám sát & quản lý hiệu suất", "Phối hợp đa phòng ban (cross-functional)", "Thực thi quy trình chuẩn (SOP) & hỗ trợ kiểm toán"],
          en: ["Team leadership & workforce planning", "Training, supervision & performance control", "Cross-functional coordination", "SOP execution & audit support"]
        } },
      { icon: "data", title: { vi: "Hệ thống & Phân tích dữ liệu", en: "Systems & Data Analytics" },
        items: {
          vi: ["WMS, SAP, ERP, KWMS", "Advanced Excel (Pivot, VLOOKUP, Macros)", "Báo cáo SQL & Power BI", "Báo cáo vận hành & trình bày"],
          en: ["WMS, SAP, ERP, KWMS", "Advanced Excel (Pivot, VLOOKUP, Macros)", "SQL & Power BI reporting", "Operational reporting & presentation"]
        } },
      { icon: "improve", title: { vi: "Cải tiến quy trình & Tuân thủ", en: "Process Improvement & Compliance" },
        items: {
          vi: ["Lean, Kaizen & cải tiến liên tục", "Triển khai 5S / 6S trong kho", "Tuân thủ an toàn kho & quy định HSE", "Phân tích nguyên nhân gốc rễ (RCA) & hành động khắc phục"],
          en: ["Lean, Kaizen & continuous improvement", "5S / 6S implementation", "Warehouse safety & HSE compliance", "Root-cause analysis & corrective actions"]
        } }
    ],

    systemsLabel: { vi: "Hệ thống & công cụ", en: "Systems & tools" },
    systems: ["WMS", "SAP", "ERP", "KWMS", "Power BI", "SQL", "Advanced Excel", "Lean", "Kaizen", "5S / 6S", "C-TPAT"]
  },

  /* ════════ 8) THƯ VIỆN ẢNH ════════
   *  THÊM ẢNH: bỏ ảnh vào thư mục assets/gallery/ rồi đặt "src" như ví dụ:
   *       src: "assets/gallery/doi-ngu.jpg"
   *  Để src "" sẽ hiện ô giữ chỗ (placeholder) — tiện khi chưa có ảnh.
   *  Thêm / bớt ảnh tự do bằng cách thêm / xóa các dòng bên dưới.                 */
  gallery: {
    eyebrow: { vi: "04 — Hình ảnh", en: "04 — Gallery" },
    title:   { vi: "Tại hiện trường", en: "On the floor" },
    lead:    { vi: "Một vài hình ảnh về vận hành, đội nhóm và dự án. Nhấn vào ảnh để xem lớn.",
               en: "A look at operations, teams, and projects. Click any image to enlarge." },
    items: [
      { src: "", caption: { vi: "Đội ngũ vận hành kho", en: "Warehouse operations team" } },
      { src: "", caption: { vi: "Dashboard Power BI vận hành", en: "Power BI operations dashboard" } },
      { src: "", caption: { vi: "Triển khai 5S tại kho", en: "5S implementation on site" } },
      { src: "", caption: { vi: "Khu vực lưu trữ & racking", en: "Storage & racking layout" } },
      { src: "", caption: { vi: "Gom hàng & đóng container xuất khẩu", en: "Consolidation & export container stuffing" } },
      { src: "", caption: { vi: "Kiểm kê chu kỳ & đối soát", en: "Cycle counting & reconciliation" } }
    ]
  },

  /* ════════ 9) LIÊN HỆ ════════ */
  contact: {
    eyebrow: { vi: "05 — Liên hệ", en: "05 — Contact" },
    title:   { vi: "Cùng trao đổi về vận hành", en: "Let’s talk operations" },
    lead:    { vi: "Sẵn sàng cho các vị trí giám sát kho và vận hành. Liên hệ trực tiếp hoặc gửi lời nhắn bên dưới.",
               en: "Open to warehouse supervisor and operations roles. Reach out directly or send a message below." },
    location: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, Vietnam" },

    labels: {
      email:    { vi: "Email",     en: "Email" },
      phone:    { vi: "Điện thoại", en: "Phone" },
      location: { vi: "Địa điểm",   en: "Location" },
      linkedin: { vi: "LinkedIn",   en: "LinkedIn" }
    },

    form: {
      name:      { vi: "Họ tên", en: "Your name" },
      namePh:    { vi: "Nguyễn Văn A", en: "Jane Doe" },
      email:     { vi: "Email", en: "Email" },
      emailPh:   { vi: "ban@congty.com", en: "you@company.com" },
      subject:   { vi: "Tiêu đề", en: "Subject" },
      subjectPh: { vi: "Cơ hội / câu hỏi", en: "Opportunity / enquiry" },
      message:   { vi: "Nội dung", en: "Message" },
      messagePh: { vi: "Nhập lời nhắn của bạn…", en: "Write your message…" },
      send:      { vi: "Gửi lời nhắn", en: "Send message" },
      sending:   { vi: "Đang gửi…", en: "Sending…" },
      opened:    { vi: "Đã mở ứng dụng email của bạn với nội dung soạn sẵn.", en: "Your email app has been opened with the message ready to send." },
      sent:      { vi: "Cảm ơn bạn — lời nhắn đã được gửi.", en: "Thanks — your message has been sent." },
      err:       { vi: "Vui lòng điền họ tên, email hợp lệ và nội dung.", en: "Please add your name, a valid email, and a message." },
      failed:    { vi: "Không gửi được. Vui lòng email trực tiếp tới địa chỉ phía trên.", en: "Couldn’t send. Please email the address above directly." }
    }
  },

  /* ════════ 10) CHÂN TRANG ════════ */
  footer: {
    tag: { vi: "Vận hành Kho & Logistics", en: "Warehouse & Logistics Operations" }
  }

};
