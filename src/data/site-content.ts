import type { LocalizedText } from "@/types/common";
import type { RouteKey } from "@/lib/routes";

export const siteName: LocalizedText = {
  vi: "Hệ thống chính trị Việt Nam",
  en: "Vietnam Political System",
};

export const siteTagline: LocalizedText = {
  vi: "Tổng quan rõ ràng theo từng thành phần",
  en: "A clear component-by-component overview",
};

export const navigation: { key: RouteKey; label: LocalizedText }[] = [
  { key: "home", label: { vi: "Trang chủ", en: "Home" } },
  {
    key: "political-system",
    label: { vi: "Hệ thống chính trị", en: "Political system" },
  },
  {
    key: "state-apparatus",
    label: { vi: "Bộ máy Nhà nước", en: "State apparatus" },
  },
  { key: "history", label: { vi: "Lịch sử", en: "History" } },
  {
    key: "administrative-map",
    label: { vi: "Bản đồ", en: "Map" },
  },
  { key: "glossary", label: { vi: "Thuật ngữ", en: "Glossary" } },
];

export const uiText = {
  skipToContent: { vi: "Chuyển đến nội dung", en: "Skip to content" },
  menu: { vi: "Mở menu", en: "Open menu" },
  close: { vi: "Đóng", en: "Close" },
  viewDetails: { vi: "Xem chi tiết", en: "View details" },
  explore: { vi: "Khám phá", en: "Explore" },
  source: { vi: "Nguồn", en: "Source" },
  sources: { vi: "Nguồn tham khảo", en: "References" },
  reviewed: { vi: "Kiểm tra gần nhất", en: "Last reviewed" },
  theme: { vi: "Giao diện", en: "Theme" },
  themeLight: { vi: "Sáng", en: "Light" },
  themeDark: { vi: "Tối", en: "Dark" },
  themeSystem: { vi: "Hệ thống", en: "System" },
  language: { vi: "English", en: "Tiếng Việt" },
  all: { vi: "Tất cả", en: "All" },
  reset: { vi: "Đặt lại", en: "Reset" },
  entityFilter: { vi: "Nhóm chủ thể", en: "Entity group" },
  relationshipFilter: { vi: "Loại quan hệ", en: "Relationship type" },
  howToRead: { vi: "Cách khám phá", en: "How to explore" },
  alternativeList: {
    vi: "Các thành phần chính",
    en: "Key components",
  },
  position: { vi: "Vị trí", en: "Position" },
  keyFunctions: { vi: "Chức năng chính", en: "Key functions" },
  officialDocument: { vi: "Mở văn bản chính thức", en: "Open official document" },
  openStateApparatus: { vi: "Khám phá Bộ máy Nhà nước", en: "Explore the state apparatus" },
  graphResetHint: { vi: "Xóa lựa chọn và bộ lọc", en: "Clear selection and filters" },
  currentInformation: { vi: "Thông tin tóm tắt", en: "Summary information" },
  alternativeEyebrow: { vi: "Chọn nội dung", en: "Choose a topic" },
  openOfficialSource: { vi: "Mở nguồn chính thức", en: "Open official source" },
  structure: { vi: "Cơ cấu khái quát", en: "General structure" },
  formation: { vi: "Cách hình thành", en: "Formation" },
  term: { vi: "Nhiệm kỳ", en: "Term" },
  accountability: { vi: "Trách nhiệm và báo cáo", en: "Accountability and reporting" },
  relatedEntities: { vi: "Chủ thể liên quan", en: "Related entities" },
  search: { vi: "Tìm kiếm", en: "Search" },
  searchGlossary: { vi: "Tìm thuật ngữ...", en: "Search terms..." },
  filterCategory: { vi: "Lọc theo nhóm", en: "Filter by category" },
  constitution: { vi: "Hiến pháp", en: "Constitution" },
  administrativeReform: { vi: "Cải cách hành chính", en: "Administrative reform" },
  noResults: { vi: "Không tìm thấy kết quả phù hợp.", en: "No matching results found." },
  readDefinition: { vi: "Đọc định nghĩa", en: "Read definition" },
  zoomIn: { vi: "Phóng to", en: "Zoom in" },
  zoomOut: { vi: "Thu nhỏ", en: "Zoom out" },
  mapReset: { vi: "Đặt lại bản đồ", en: "Reset map" },
  conceptualMap: { vi: "Sơ đồ khái niệm - không theo tỷ lệ", en: "Conceptual map - not to scale" },
  exploreLocalGovernment: { vi: "Tìm hiểu chính quyền địa phương", en: "Explore local government" },
  provincialLevel: { vi: "Cấp tỉnh", en: "Provincial level" },
  communeLevel: { vi: "Cấp xã", en: "Commune level" },
};

export const ariaText = {
  primaryNavigation: { vi: "Điều hướng chính", en: "Primary navigation" },
  mobileNavigation: { vi: "Điều hướng di động", en: "Mobile navigation" },
  relationshipLegend: { vi: "Chú thích quan hệ", en: "Relationship legend" },
  breadcrumb: { vi: "Đường dẫn trang", en: "Breadcrumb" },
  stateSections: { vi: "Phạm vi Bộ máy Nhà nước", en: "State apparatus sections" },
};

export const stateSectionTabs = [
  { key: "state-apparatus" as const, label: { vi: "Tổng quan", en: "Overview" } },
  { key: "central" as const, label: { vi: "Trung ương", en: "Central" } },
  { key: "local" as const, label: { vi: "Địa phương", en: "Local" } },
];

export const categoryLabels = {
  people: { vi: "Nhân dân", en: "People" },
  party: { vi: "Đảng", en: "Party" },
  state: { vi: "Nhà nước", en: "State" },
  "state-body": { vi: "Cơ quan nhà nước", en: "State body" },
  front: { vi: "Mặt trận", en: "Front" },
  "socio-political-organization": {
    vi: "Tổ chức chính trị - xã hội",
    en: "Socio-political organization",
  },
  "local-government": { vi: "Chính quyền địa phương", en: "Local government" },
  "administrative-level": { vi: "Cấp hành chính", en: "Administrative level" },
};

export const homeContent = {
  eyebrow: { vi: "Nền tảng giáo dục tương tác", en: "Interactive civic learning" },
  title: {
    vi: "Hiểu cấu trúc. Thấy mối quan hệ. Truy được nguồn.",
    en: "Understand the structure. See the relationships. Trace the sources.",
  },
  lead: {
    vi: "Một cách trực quan để tìm hiểu hệ thống chính trị và bộ máy Nhà nước Việt Nam — từ Nhân dân đến các thiết chế ở Trung ương và địa phương.",
    en: "A visual way to explore Vietnam's political system and state apparatus — from the People to institutions at central and local levels.",
  },
  primaryCta: {
    vi: "Khám phá Hệ thống chính trị",
    en: "Explore the political system",
  },
  secondaryCta: {
    vi: "Khám phá Bộ máy Nhà nước",
    en: "Explore the state apparatus",
  },
  distinctionEyebrow: { vi: "Hai phạm vi, một bức tranh", en: "Two scopes, one picture" },
  distinctionTitle: {
    vi: "Phân biệt ngay từ điểm bắt đầu",
    en: "Start with the essential distinction",
  },
  distinctionLead: {
    vi: "Hệ thống chính trị là phạm vi rộng. Bộ máy Nhà nước là một bộ phận nằm trong hệ thống đó.",
    en: "The political system is the wider scope. The state apparatus is one part within that system.",
  },
  politicalCardTitle: { vi: "Hệ thống chính trị", en: "Political system" },
  politicalCardBody: {
    vi: "Bao gồm Nhân dân, Đảng, Nhà nước, Mặt trận Tổ quốc và các tổ chức chính trị - xã hội.",
    en: "Includes the People, the Party, the State, the Fatherland Front, and socio-political organizations.",
  },
  stateCardTitle: { vi: "Bộ máy Nhà nước", en: "State apparatus" },
  stateCardBody: {
    vi: "Gồm các cơ quan nhà nước ở Trung ương và chính quyền địa phương; không đồng nhất với toàn bộ hệ thống chính trị.",
    en: "Comprises central state bodies and local government; it is not the whole political system.",
  },
  mapLabelPeople: { vi: "Nhân dân", en: "The People" },
  mapLabelParty: { vi: "Đảng", en: "Party" },
  mapLabelState: { vi: "Nhà nước", en: "State" },
  mapLabelFront: { vi: "Mặt trận", en: "Front" },
  mapCaption: {
    vi: "Đường nối thể hiện nhiều loại quan hệ — không mặc định là cấp trên, cấp dưới.",
    en: "Connections represent different relationships — not a default hierarchy.",
  },
  proofs: [
    { vi: "Song ngữ", en: "Bilingual" },
    { vi: "Nguồn truy xuất", en: "Traceable sources" },
    { vi: "Tiếp cận được", en: "Accessible" },
  ],
  politicalScopeLabel: { vi: "Phạm vi rộng", en: "Wider scope" },
  stateScopeLabel: { vi: "Một bộ phận", en: "One component" },
  openGraph: { vi: "Mở sơ đồ", en: "Open graph" },
  viewApparatus: { vi: "Xem bộ máy", en: "View apparatus" },
  principlesEyebrow: { vi: "Nguyên tắc trình bày", en: "Presentation principles" },
  principlesTitle: {
    vi: "Sơ đồ không thay thế bản chất pháp lý",
    en: "A graph does not replace legal meaning",
  },
  principles: [
    {
      index: "01",
      title: { vi: "Tách đúng phạm vi", en: "Separate the scopes" },
      body: {
        vi: "Quốc hội nằm trong bộ máy Nhà nước; Nhà nước nằm trong hệ thống chính trị.",
        en: "The National Assembly sits within the state apparatus; the State sits within the political system.",
      },
    },
    {
      index: "02",
      title: { vi: "Gọi tên từng quan hệ", en: "Name every relationship" },
      body: {
        vi: "Đường nối có nhãn, hướng và giải thích riêng; không mặc định là quan hệ cấp bậc.",
        en: "Every connection has its own label, direction, and explanation; hierarchy is never assumed.",
      },
    },
    {
      index: "03",
      title: { vi: "Nguồn dùng chung, dễ tra cứu", en: "Shared, accessible references" },
      body: {
        vi: "Nguồn tham khảo được tổng hợp ở cuối trang và trong một thư viện dùng chung cho toàn bộ hệ thống.",
        en: "References are gathered in the footer and in one library shared across the whole system.",
      },
    },
  ],
  exploreEyebrow: { vi: "Khám phá theo chủ đề", en: "Explore by topic" },
  exploreTitle: { vi: "Chọn một lối vào phù hợp", en: "Choose a way into the system" },
  topicCards: [
    {
      routeKey: "central" as RouteKey,
      title: { vi: "Bộ máy Trung ương", en: "Central apparatus" },
      body: { vi: "Các thiết chế nhà nước ở Trung ương và quan hệ giữa chúng.", en: "Central state institutions and the relationships among them." },
    },
    {
      routeKey: "local" as RouteKey,
      title: { vi: "Chính quyền địa phương", en: "Local government" },
      body: { vi: "Mô hình hai cấp gồm cấp tỉnh và cấp xã.", en: "The two-level model comprising provincial and commune levels." },
    },
    {
      routeKey: "administrative-map" as RouteKey,
      title: { vi: "Bản đồ hành chính", en: "Administrative map" },
      body: { vi: "Minh họa không gian và kết nối đến mô hình địa phương.", en: "A spatial illustration linked to the local model." },
    },
    {
      routeKey: "history" as RouteKey,
      title: { vi: "Lịch sử Hiến pháp", en: "Constitutional history" },
      body: { vi: "Các mốc Hiến pháp và cải cách hành chính tiêu biểu.", en: "Selected constitutional and administrative-reform milestones." },
    },
    {
      routeKey: "glossary" as RouteKey,
      title: { vi: "Thuật ngữ", en: "Glossary" },
      body: { vi: "Giải thích ngắn các khái niệm quan trọng.", en: "Short explanations of essential concepts." },
    },
  ],
  timelineEyebrow: { vi: "Timeline nổi bật", en: "Highlighted timeline" },
  timelineTitle: { vi: "Những mốc định hình cấu trúc hiện hành", en: "Milestones shaping the current structure" },
  viewTimeline: { vi: "Xem toàn bộ dòng thời gian", en: "View the full timeline" },
};

export const politicalSystemContent = {
  eyebrow: { vi: "Khám phá từng bước", en: "Explore step by step" },
  title: { vi: "Hệ thống chính trị Việt Nam", en: "Vietnam's political system" },
  lead: {
    vi: "Tìm hiểu cách Nhân dân, Đảng, Nhà nước, Mặt trận Tổ quốc và các tổ chức chính trị - xã hội tham gia vào đời sống chính trị của đất nước.",
    en: "Explore how the People, the Party, the State, the Fatherland Front, and socio-political organizations participate in the country's political life.",
  },
  readingNote: {
    vi: "Chọn một thẻ chủ đề ở bên trái. Phần giải thích và các mối quan hệ sẽ xuất hiện ngay bên cạnh mà không tải lại trang.",
    en: "Choose a topic card on the left. Its explanation and relationships appear beside it without reloading the page.",
  },
  explorerLabel: {
    vi: "Cẩm nang khám phá các chủ thể trong hệ thống chính trị Việt Nam",
    en: "Interactive guide to entities in Vietnam's political system",
  },
};

export const footerContent = {
  description: {
    vi: "Sản phẩm tìm hiểu và giáo dục. Văn bản gốc từ cơ quan có thẩm quyền là nguồn tham khảo chính thức.",
    en: "An educational exploration product. Original documents from competent authorities remain the official reference.",
  },
  updated: { vi: "Nội dung kiểm tra: 18/07/2026", en: "Content reviewed: 18 Jul 2026" },
  about: { vi: "Giới thiệu", en: "About" },
  sourceLibrary: { vi: "Thư viện nguồn tham khảo", en: "Reference library" },
};
