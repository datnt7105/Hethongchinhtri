import type { LocalizedText } from "@/types/common";
import type { RouteKey } from "@/lib/routes";

export type ContentSection = {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
  items?: LocalizedText[];
};

export type ContentPage = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  sections: ContentSection[];
  legalSourceIds: string[];
  reviewedAt: string;
};

export const stateApparatusContent = {
  eyebrow: { vi: "Phạm vi 02", en: "Scope 02" },
  title: { vi: "Bộ máy Nhà nước Việt Nam", en: "Vietnam's state apparatus" },
  lead: {
    vi: "Bộ máy Nhà nước là một bộ phận của hệ thống chính trị, bao gồm các cơ quan nhà nước ở Trung ương và chính quyền địa phương.",
    en: "The state apparatus is one part of the political system, comprising central state bodies and local government.",
  },
  politicalSystemNote: {
    vi: "Quay lại bức tranh rộng hơn để xem vị trí của Nhà nước trong toàn bộ hệ thống chính trị.",
    en: "Return to the wider picture to see where the State sits within the political system.",
  },
  choices: [
    {
      routeKey: "central" as RouteKey,
      index: "01",
      title: { vi: "Bộ máy Trung ương", en: "Central state apparatus" },
      body: {
        vi: "Tìm hiểu Quốc hội, Chủ tịch nước, Chính phủ, hệ thống Tòa án, Viện kiểm sát và các thiết chế trung ương khác.",
        en: "Explore the National Assembly, State President, Government, court and procuracy systems, and other central institutions.",
      },
    },
    {
      routeKey: "local" as RouteKey,
      index: "02",
      title: { vi: "Chính quyền địa phương", en: "Local government" },
      body: {
        vi: "Khám phá mô hình hai cấp hiện hành: cấp tỉnh và cấp xã, cùng quan hệ giữa Hội đồng nhân dân và Ủy ban nhân dân.",
        en: "Explore the current two-level model: provincial and commune levels, and the relationship between People's Councils and People's Committees.",
      },
    },
  ],
  sourceNote: {
    vi: "Dữ liệu chi tiết tiếp tục được bổ sung theo các nguồn tham khảo đã xác minh.",
    en: "Detailed content is added progressively against verified references.",
  },
};

export const contentPages: Record<
  "central" | "local" | "administrative-map" | "history" | "glossary" | "about",
  ContentPage
> = {
  central: {
    eyebrow: { vi: "Bộ máy Nhà nước / Trung ương", en: "State apparatus / Central" },
    title: { vi: "Bộ máy Nhà nước ở Trung ương", en: "Central state apparatus" },
    lead: {
      vi: "Tổng quan các thiết chế được trình bày theo vị trí và quan hệ pháp lý, không áp mô hình tam quyền phân lập.",
      en: "An overview of institutions organized by legal position and relationships, without imposing a separation-of-powers model.",
    },
    sections: [
      {
        id: "institutions",
        title: { vi: "Các thiết chế chính", en: "Principal institutions" },
        body: {
          vi: "Sơ đồ chi tiết sẽ thể hiện các quan hệ bầu, phê chuẩn, giám sát, chịu trách nhiệm và phối hợp bằng các kiểu đường riêng.",
          en: "The detailed graph will distinguish election, approval, supervision, accountability, and coordination with separate edge styles.",
        },
        items: [
          { vi: "Quốc hội", en: "National Assembly" },
          { vi: "Chủ tịch nước", en: "State President" },
          { vi: "Chính phủ", en: "Government" },
          { vi: "Tòa án nhân dân", en: "People's Courts" },
          { vi: "Viện kiểm sát nhân dân", en: "People's Procuracies" },
          { vi: "Kiểm toán Nhà nước", en: "State Audit Office" },
          { vi: "Hội đồng Bầu cử quốc gia", en: "National Election Council" },
        ],
      },
    ],
    legalSourceIds: ["S01"],
    reviewedAt: "2026-07-16",
  },
  local: {
    eyebrow: { vi: "Bộ máy Nhà nước / Địa phương", en: "State apparatus / Local" },
    title: { vi: "Chính quyền địa phương", en: "Local government" },
    lead: {
      vi: "Phase 1 sử dụng mô hình chính quyền địa phương hai cấp hiện hành: cấp tỉnh và cấp xã; không đưa cấp huyện vào sơ đồ.",
      en: "Phase 1 uses the current two-level local-government model: provincial and commune levels; district level is not shown.",
    },
    sections: [
      {
        id: "provincial",
        title: { vi: "Cấp tỉnh", en: "Provincial level" },
        body: {
          vi: "Gồm tỉnh, thành phố trực thuộc Trung ương và các thiết chế chính quyền địa phương được tổ chức theo luật.",
          en: "Includes provinces, centrally governed cities, and local-government institutions organized by law.",
        },
        items: [
          { vi: "Hội đồng nhân dân cấp tỉnh", en: "Provincial People's Council" },
          { vi: "Ủy ban nhân dân cấp tỉnh", en: "Provincial People's Committee" },
        ],
      },
      {
        id: "commune",
        title: { vi: "Cấp xã", en: "Commune level" },
        body: {
          vi: "Gồm xã, phường, đặc khu và các thiết chế chính quyền địa phương được tổ chức theo luật.",
          en: "Includes communes, wards, special zones, and local-government institutions organized by law.",
        },
        items: [
          { vi: "Hội đồng nhân dân cấp xã", en: "Commune People's Council" },
          { vi: "Ủy ban nhân dân cấp xã", en: "Commune People's Committee" },
        ],
      },
    ],
    legalSourceIds: ["S02", "S03"],
    reviewedAt: "2026-07-16",
  },
  "administrative-map": {
    eyebrow: { vi: "Không gian hành chính", en: "Administrative space" },
    title: { vi: "Bản đồ hành chính", en: "Administrative map" },
    lead: {
      vi: "Khu vực minh họa lãnh thổ và hai cấp đơn vị hành chính, được thiết kế để kết nối với trang chính quyền địa phương.",
      en: "An illustrative view of the territory and two administrative levels, designed to connect with the local-government section.",
    },
    sections: [
      {
        id: "scope",
        title: { vi: "Phạm vi Phase 1", en: "Phase 1 scope" },
        body: {
          vi: "Bản đồ chỉ sử dụng dữ liệu có nguồn và giấy phép rõ ràng. Dữ liệu chi tiết từng tỉnh và cơ cấu tổ chức địa phương nằm ngoài phạm vi.",
          en: "The map will only use clearly sourced and licensed data. Province-level organizational profiles are out of scope.",
        },
      },
    ],
    legalSourceIds: ["S02", "S03"],
    reviewedAt: "2026-07-16",
  },
  history: {
    eyebrow: { vi: "Dòng thời gian", en: "Timeline" },
    title: { vi: "Hiến pháp và cải cách hành chính", en: "Constitutions and administrative reform" },
    lead: {
      vi: "Các mốc được chọn để làm rõ thay đổi lớn về thiết chế và tổ chức bộ máy; không nhằm liệt kê toàn bộ lịch sử pháp luật.",
      en: "Selected milestones highlight major institutional and organizational changes rather than cataloguing all legal history.",
    },
    sections: [
      {
        id: "2013",
        title: { vi: "28/11/2013 — Hiến pháp năm 2013", en: "28 Nov 2013 — 2013 Constitution" },
        body: {
          vi: "Hiến pháp được Quốc hội khóa XIII thông qua và là nền tảng pháp lý chính cho cấu trúc nội dung Phase 1.",
          en: "Adopted by the 13th National Assembly, this Constitution is a principal legal basis for the Phase 1 content model.",
        },
      },
      {
        id: "2025",
        title: { vi: "16/06/2025 — Sửa đổi một số điều của Hiến pháp", en: "16 Jun 2025 — Selected constitutional amendments" },
        body: {
          vi: "Nghị quyết 203/2025/QH15 sửa đổi các nội dung liên quan đến Mặt trận, các tổ chức chính trị - xã hội và tổ chức đơn vị hành chính hai cấp.",
          en: "Resolution 203/2025/QH15 amended provisions concerning the Front, socio-political organizations, and the two-level administrative model.",
        },
      },
    ],
    legalSourceIds: ["S01", "S02"],
    reviewedAt: "2026-07-16",
  },
  glossary: {
    eyebrow: { vi: "Thư viện khái niệm", en: "Concept library" },
    title: { vi: "Thuật ngữ", en: "Glossary" },
    lead: {
      vi: "Giải thích ngắn các khái niệm cần thiết để đọc sơ đồ mà không giả định người dùng đã có kiến thức pháp lý chuyên sâu.",
      en: "Short explanations of concepts needed to read the graphs without assuming advanced legal knowledge.",
    },
    sections: [
      {
        id: "state-power",
        title: { vi: "Quyền lực nhà nước", en: "State power" },
        body: {
          vi: "Hiến pháp xác định tất cả quyền lực nhà nước thuộc về Nhân dân; quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan nhà nước.",
          en: "The Constitution provides that all state power belongs to the People and is unified, with assignment, coordination, and control among state bodies.",
        },
      },
      {
        id: "representation",
        title: { vi: "Dân chủ đại diện", en: "Representative democracy" },
        body: {
          vi: "Một hình thức Nhân dân thực hiện quyền lực nhà nước thông qua Quốc hội, Hội đồng nhân dân và các cơ quan khác của Nhà nước.",
          en: "A way the People exercise state power through the National Assembly, People's Councils, and other state bodies.",
        },
      },
      {
        id: "social-criticism",
        title: { vi: "Phản biện xã hội", en: "Social criticism" },
        body: {
          vi: "Một chức năng được Hiến pháp ghi nhận đối với Mặt trận Tổ quốc Việt Nam trong khuôn khổ Hiến pháp và pháp luật.",
          en: "A function constitutionally recognized for the Vietnam Fatherland Front within the Constitution and law.",
        },
      },
    ],
    legalSourceIds: ["S01", "S02"],
    reviewedAt: "2026-07-16",
  },
  about: {
    eyebrow: { vi: "Về dự án", en: "About the project" },
    title: { vi: "Một lớp diễn giải trực quan, không thay thế văn bản gốc", en: "A visual interpretation layer, not a replacement for original documents" },
    lead: {
      vi: "Dự án giúp người mới tìm hiểu phân biệt chủ thể, phạm vi và quan hệ trong hệ thống chính trị và bộ máy Nhà nước Việt Nam.",
      en: "This project helps newcomers distinguish entities, scopes, and relationships in Vietnam's political system and state apparatus.",
    },
    sections: [
      {
        id: "method",
        title: { vi: "Phương pháp nội dung", en: "Content method" },
        body: {
          vi: "Nội dung tóm tắt được tách khỏi giao diện, gắn mã nguồn, ngày kiểm tra và liên kết đến tài liệu chính thức. Những phần chưa đủ nguồn không được tự suy diễn.",
          en: "Summaries are separated from the interface and carry source IDs, review dates, and official links. Gaps are not filled by speculation.",
        },
      },
      {
        id: "limits",
        title: { vi: "Giới hạn", en: "Limitations" },
        body: {
          vi: "Website phục vụ mục đích tìm hiểu và giáo dục. Văn bản gốc do cơ quan có thẩm quyền công bố vẫn là căn cứ tham khảo chính thức.",
          en: "The website is for educational exploration. Original documents published by competent authorities remain the official reference.",
        },
      },
    ],
    legalSourceIds: [],
    reviewedAt: "2026-07-16",
  },
};

export const legalSourcesPageContent = {
  eyebrow: { vi: "Dùng chung cho toàn bộ hệ thống", en: "Shared across the whole system" },
  title: { vi: "Thư viện nguồn tham khảo", en: "Reference library" },
  lead: {
    vi: "Danh mục tập trung các văn bản, trang thông tin và hồ sơ chính thức được sử dụng để xây dựng toàn bộ nội dung của hệ thống.",
    en: "A centralized list of official documents, information pages and archives used to build the system's content.",
  },
  issued: { vi: "Ban hành", en: "Issued" },
  effective: { vi: "Hiệu lực", en: "Effective" },
  accessed: { vi: "Kiểm tra liên kết", en: "Link reviewed" },
  authority: { vi: "Cơ quan hoặc đơn vị cung cấp", en: "Issuing or providing authority" },
};
