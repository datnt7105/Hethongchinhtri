import type { Locale, LocalizedText } from "@/types/common";

export type SystemSectionId = "party" | "state" | "national-assembly" | "people" | "police" | "military";

export type SystemSectionLevel = {
  title: LocalizedText;
  description: LocalizedText;
  items: LocalizedText[];
};

export type SystemSectionSource = {
  label: LocalizedText;
  href: string;
};

export type SystemSection = {
  id: SystemSectionId;
  order: string;
  monogram: string;
  image?: {
    src: string;
    heroSrc?: string;
    alt: LocalizedText;
    fit?: "cover" | "contain";
    credit?: LocalizedText;
    sourceHref?: string;
  };
  slug: Record<Locale, string>;
  navLabel: LocalizedText;
  title: LocalizedText;
  kicker: LocalizedText;
  summary: LocalizedText;
  introduction: LocalizedText;
  keyPoints: LocalizedText[];
  levels: SystemSectionLevel[];
  updateNote?: LocalizedText;
  sources: SystemSectionSource[];
};

const constitutionSource: SystemSectionSource = {
  label: { vi: "Hiến pháp năm 2013", en: "2013 Constitution" },
  href: "https://vanban.chinhphu.vn/?docid=171264&pageid=27160",
};

export const systemSections: SystemSection[] = [
  {
    id: "party",
    order: "01",
    monogram: "Đ",
    image: {
      src: "/images/sections/party-card-ai-v2.png",
      heroSrc: "/images/themes/party-central-office-a6-sharp-v2.png",
      alt: {
        vi: "Nhà làm việc Văn phòng Trung ương Đảng, công trình A6",
        en: "Central Party Office building A6",
      },
      credit: { vi: "Ảnh công trình A6: CDC JSC", en: "A6 building image: CDC JSC" },
      sourceHref: "https://cdcjsc.vn/vi/dich-vu-tu-van-va-giam-sat.pd/nha-lam-viec-van-phong-trung-uong-dang-cong-trinh-a6.html",
    },
    slug: { vi: "dang", en: "party" },
    navLabel: { vi: "Đảng", en: "Party" },
    title: { vi: "Đảng Cộng sản Việt Nam", en: "Communist Party of Vietnam" },
    kicker: { vi: "Thành phần 01 · Lực lượng lãnh đạo", en: "Component 01 · Leading force" },
    summary: {
      vi: "Lực lượng lãnh đạo Nhà nước và xã hội; tổ chức từ Trung ương đến các tổ chức đảng ở địa phương, cơ quan và đơn vị.",
      en: "The force leading the State and society, organized from the central level to Party organizations in localities, agencies, and units.",
    },
    introduction: {
      vi: "Trang này trình bày cấu trúc theo từng tầng để người đọc có thể đi từ cơ quan lãnh đạo cao nhất đến nơi trực tiếp triển khai chủ trương ở cơ sở.",
      en: "This page presents the structure level by level, from the highest leading bodies to organizations that directly carry out policy at the grassroots.",
    },
    keyPoints: [
      { vi: "Đại hội đại biểu toàn quốc là cơ quan lãnh đạo cao nhất của Đảng.", en: "The National Congress is the Party's highest leading body." },
      { vi: "Ban Chấp hành Trung ương lãnh đạo giữa hai kỳ Đại hội.", en: "The Central Committee leads between National Congresses." },
      { vi: "Tổ chức cơ sở đảng là nền tảng của Đảng.", en: "Grassroots Party organizations form the Party's foundation." },
    ],
    levels: [
      {
        title: { vi: "Cấp Trung ương", en: "Central level" },
        description: {
          vi: "Nơi quyết định đường lối lớn và tổ chức thực hiện trong toàn Đảng.",
          en: "Where major directions are decided and implementation is organized throughout the Party.",
        },
        items: [
          { vi: "Đại hội đại biểu toàn quốc: cơ quan lãnh đạo cao nhất của Đảng, họp thường lệ 5 năm một lần.", en: "National Congress: the Party's highest leading body, normally convened every five years." },
          { vi: "Ban Chấp hành Trung ương: cơ quan lãnh đạo cao nhất giữa hai kỳ Đại hội.", en: "Central Committee: the highest leading body between National Congresses." },
          { vi: "Bộ Chính trị, Ban Bí thư và Tổng Bí thư: được hình thành theo Điều lệ Đảng để lãnh đạo, chỉ đạo công việc ở Trung ương.", en: "Politburo, Secretariat, and General Secretary: formed under the Party Charter to lead and direct work at the central level." },
        ],
      },
      {
        title: { vi: "Cấp tỉnh và tương đương", en: "Provincial and equivalent level" },
        description: {
          vi: "Cấp ủy lãnh đạo toàn diện nhiệm vụ chính trị tại tỉnh, thành phố trực thuộc Trung ương hoặc trong tổ chức tương đương.",
          en: "Party committees provide comprehensive leadership for political tasks in provinces, centrally governed cities, or equivalent organizations.",
        },
        items: [
          { vi: "Tỉnh ủy, thành ủy trực thuộc Trung ương lãnh đạo các mặt công tác tại địa phương.", en: "Provincial and centrally governed city Party committees lead work in their localities." },
          { vi: "Các đảng bộ trực thuộc Trung ương được tổ chức theo lĩnh vực, cơ quan hoặc lực lượng theo quy định hiện hành.", en: "Party organizations directly under the Central level are organized by field, agency, or force under current rules." },
        ],
      },
      {
        title: { vi: "Cấp xã và cấp trên trực tiếp của cơ sở", en: "Commune and immediate superior level" },
        description: {
          vi: "Từ năm 2025, tổ chức đảng ở xã, phường, đặc khu được sắp xếp phù hợp mô hình chính quyền địa phương hai cấp.",
          en: "Since 2025, Party organizations in communes, wards, and special zones have been aligned with the two-level local government model.",
        },
        items: [
          { vi: "Đảng ủy cấp trên cơ sở ở xã, phường, đặc khu trực thuộc cấp ủy cấp tỉnh.", en: "Immediate-superior Party committees in communes, wards, and special zones report to provincial-level Party committees." },
          { vi: "Cấp này trực tiếp lãnh đạo, chỉ đạo tổ chức cơ sở đảng và các chi bộ trực thuộc trên địa bàn.", en: "This level directly leads grassroots Party organizations and affiliated cells in its area." },
        ],
      },
      {
        title: { vi: "Cấp cơ sở", en: "Grassroots level" },
        description: {
          vi: "Nền tảng của Đảng và là nơi chủ trương được triển khai sát với cơ quan, đơn vị và cộng đồng.",
          en: "The Party's foundation and the level where policy is implemented closest to agencies, units, and communities.",
        },
        items: [
          { vi: "Chi bộ cơ sở, đảng bộ cơ sở được thành lập tại cơ quan, trường học, doanh nghiệp, đơn vị và các địa bàn đủ điều kiện.", en: "Grassroots cells and committees are established in eligible agencies, schools, enterprises, units, and localities." },
          { vi: "Chi bộ trực tiếp quản lý, giáo dục, phân công nhiệm vụ cho đảng viên và tổ chức thực hiện nghị quyết.", en: "Party cells directly manage and educate members, assign work, and implement resolutions." },
        ],
      },
    ],
    updateNote: {
      vi: "Lưu ý cập nhật: “cấp huyện” là cách mô tả quen thuộc trong tài liệu trước đợt sắp xếp năm 2025. Bản trình bày này dùng mô hình hiện hành gồm cấp tỉnh, cấp xã và tổ chức cơ sở đảng.",
      en: "Update note: district-level descriptions are common in materials published before the 2025 reorganization. This page uses the current provincial, commune, and grassroots model.",
    },
    sources: [
      constitutionSource,
      {
        label: { vi: "Điều lệ Đảng Cộng sản Việt Nam", en: "Charter of the Communist Party of Vietnam" },
        href: "https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xi/dieu-le-dang-do-dai-hoi-dai-bieu-toan-quoc-lan-thu-xi-cua-dang-thong-qua-1472",
      },
      {
        label: { vi: "Quy định 298-QĐ/TW về tổ chức đảng ở cấp xã", en: "Regulation 298-QD/TW on commune-level Party organizations" },
        href: "https://tulieuvankien.dangcongsan.vn/home/chu-truong-chinh-sach-moi/quy-dinh-chuc-nang-nhiem-vu-to-chuc-bo-may-cua-dang-uy-cap-tren-truc-tiep-cua-to-chuc-co-so-dang-o-xa-4298",
      },
    ],
  },
  {
    id: "state",
    order: "02",
    monogram: "NN",
    image: {
      src: "/images/sections/state-card-ai.png",
      heroSrc: "/images/themes/ho-chi-minh-mausoleum.png",
      alt: {
        vi: "Lăng Chủ tịch Hồ Chí Minh lung linh dưới ánh đèn ban đêm",
        en: "President Ho Chi Minh Mausoleum illuminated at night",
      },
    },
    slug: { vi: "nha-nuoc", en: "state" },
    navLabel: { vi: "Nhà nước", en: "State" },
    title: { vi: "Nhà nước CHXHCN Việt Nam", en: "State of the Socialist Republic of Vietnam" },
    kicker: { vi: "Thành phần 02 · Bộ máy công quyền", en: "Component 02 · Public institutions" },
    summary: {
      vi: "Nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân; quyền lực nhà nước là thống nhất, có phân công, phối hợp và kiểm soát.",
      en: "A socialist rule-of-law State of the People, by the People, and for the People; state power is unified with assignment, coordination, and control.",
    },
    introduction: {
      vi: "Các cơ quan được nhóm theo vai trò hiến định và theo hai phạm vi Trung ương – địa phương để người đọc dễ nhận biết vị trí của từng thiết chế.",
      en: "Institutions are grouped by constitutional role and by central-local scope so readers can quickly understand each body's place.",
    },
    keyPoints: [
      { vi: "Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất.", en: "The National Assembly is the highest representative body of the People and the highest state-power body." },
      { vi: "Chính phủ là cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp.", en: "The Government is the highest state administrative body and exercises executive power." },
      { vi: "Chính quyền địa phương hiện được tổ chức theo mô hình hai cấp.", en: "Local government currently follows a two-level model." },
    ],
    levels: [
      {
        title: { vi: "Quốc hội và Chủ tịch nước", en: "National Assembly and State President" },
        description: { vi: "Nhóm thiết chế đại diện và thực hiện các thẩm quyền hiến định ở cấp quốc gia.", en: "Representative institutions exercising constitutional powers at the national level." },
        items: [
          { vi: "Quốc hội thực hiện quyền lập hiến, lập pháp, quyết định các vấn đề quan trọng và giám sát tối cao.", en: "The National Assembly exercises constitutional and legislative powers, decides major issues, and conducts supreme oversight." },
          { vi: "Chủ tịch nước là người đứng đầu Nhà nước, thay mặt nước về đối nội và đối ngoại.", en: "The State President is the Head of State and represents the country internally and externally." },
        ],
      },
      {
        title: { vi: "Chính phủ và hệ thống hành chính", en: "Government and administration" },
        description: { vi: "Tổ chức thi hành Hiến pháp, luật và quản lý thống nhất nền hành chính quốc gia.", en: "Organizes implementation of the Constitution and laws and manages the national administration." },
        items: [
          { vi: "Chính phủ gồm Thủ tướng, các Phó Thủ tướng, Bộ trưởng và thủ trưởng cơ quan ngang bộ theo luật.", en: "The Government comprises the Prime Minister, Deputy Prime Ministers, ministers, and heads of ministerial-level agencies as provided by law." },
          { vi: "Bộ, cơ quan ngang bộ quản lý nhà nước theo ngành và lĩnh vực.", en: "Ministries and ministerial-level agencies manage sectors and fields." },
        ],
      },
      {
        title: { vi: "Tòa án, Viện kiểm sát và thiết chế hiến định khác", en: "Courts, procuracies, and other constitutional bodies" },
        description: { vi: "Nhóm cơ quan thực hiện quyền tư pháp, kiểm sát hoạt động tư pháp và các nhiệm vụ hiến định chuyên biệt.", en: "Bodies exercising judicial power, supervising judicial activities, and carrying out specialized constitutional functions." },
        items: [
          { vi: "Tòa án nhân dân là cơ quan xét xử, thực hiện quyền tư pháp.", en: "People's Courts are adjudicatory bodies exercising judicial power." },
          { vi: "Viện kiểm sát nhân dân thực hành quyền công tố và kiểm sát hoạt động tư pháp.", en: "People's Procuracies exercise public prosecution and supervise judicial activities." },
          { vi: "Kiểm toán Nhà nước và Hội đồng Bầu cử quốc gia thực hiện các nhiệm vụ được Hiến pháp, luật giao.", en: "The State Audit Office and National Election Council perform duties assigned by the Constitution and law." },
        ],
      },
      {
        title: { vi: "Chính quyền địa phương", en: "Local government" },
        description: { vi: "Từ năm 2025, chính quyền địa phương được tổ chức ở cấp tỉnh và cấp xã.", en: "Since 2025, local government has been organized at provincial and commune levels." },
        items: [
          { vi: "Cấp tỉnh gồm tỉnh và thành phố trực thuộc Trung ương.", en: "The provincial level includes provinces and centrally governed cities." },
          { vi: "Cấp xã gồm xã, phường và đặc khu; tổ chức Hội đồng nhân dân, Ủy ban nhân dân theo luật.", en: "The commune level includes communes, wards, and special zones, with People's Councils and People's Committees organized by law." },
        ],
      },
    ],
    updateNote: {
      vi: "Sơ đồ dùng mô hình chính quyền địa phương hai cấp có hiệu lực từ năm 2025; không hiển thị cấp huyện như một cấp chính quyền địa phương hiện hành.",
      en: "The page uses the two-level local government model effective from 2025 and does not show district level as a current local-government tier.",
    },
    sources: [
      constitutionSource,
      {
        label: { vi: "Luật Tổ chức Chính phủ 63/2025/QH15", en: "Law on Organization of the Government 63/2025/QH15" },
        href: "https://vanban.chinhphu.vn/?classid=1&docid=212985&orggroupid=1&pageid=27160",
      },
      {
        label: { vi: "Luật Tổ chức chính quyền địa phương 72/2025/QH15", en: "Law on Organization of Local Government 72/2025/QH15" },
        href: "https://vanban.chinhphu.vn/?classid=1&docid=214553&orggroupid=1&pageid=27160",
      },
    ],
  },
  {
    id: "national-assembly",
    order: "03",
    monogram: "QH",
    image: {
      src: "/images/sections/national-assembly-hall.jpg",
      heroSrc: "/images/themes/national-assembly-house.jpeg",
      alt: {
        vi: "Mặt chính Nhà Quốc hội Việt Nam",
        en: "Front view of Vietnam's National Assembly House",
      },
      credit: { vi: "Ảnh: Hoàng Hà · VietNamNet", en: "Photo: Hoàng Hà · VietNamNet" },
      sourceHref: "https://vietnamnet.vn/giai-the-ban-chi-dao-xay-dung-nha-quoc-hoi-2382164.html",
    },
    slug: { vi: "quoc-hoi", en: "national-assembly" },
    navLabel: { vi: "Quốc hội", en: "National Assembly" },
    title: { vi: "Quốc hội Việt Nam", en: "National Assembly of Vietnam" },
    kicker: { vi: "Thành phần 03 · Cơ quan quyền lực nhà nước cao nhất", en: "Component 03 · Highest state-power body" },
    summary: {
      vi: "Cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất; thực hiện quyền lập hiến, lập pháp, quyết định các vấn đề quan trọng và giám sát tối cao.",
      en: "The highest representative body of the People and the highest state-power body, exercising constitutional and legislative powers, deciding major issues, and conducting supreme oversight.",
    },
    introduction: {
      vi: "Trang này tách Quốc hội thành một nội dung chuyên sâu để người đọc nhận biết rõ vị trí hiến định, chức năng, cơ cấu và mối liên hệ giữa đại biểu Quốc hội với cử tri.",
      en: "This dedicated page helps readers understand the National Assembly's constitutional position, functions, organization, and the relationship between deputies and voters.",
    },
    keyPoints: [
      { vi: "Quốc hội là cơ quan đại biểu cao nhất của Nhân dân và cơ quan quyền lực nhà nước cao nhất.", en: "The National Assembly is the highest representative body of the People and the highest state-power body." },
      { vi: "Quốc hội thực hiện quyền lập hiến, lập pháp, quyết định các vấn đề quan trọng và giám sát tối cao.", en: "It exercises constitutional and legislative powers, decides major national issues, and conducts supreme oversight." },
      { vi: "Đại biểu Quốc hội đại diện cho ý chí, nguyện vọng của Nhân dân và giữ mối liên hệ với cử tri.", en: "National Assembly deputies represent the will and aspirations of the People and maintain contact with voters." },
    ],
    levels: [
      {
        title: { vi: "Vị trí hiến định", en: "Constitutional position" },
        description: {
          vi: "Quốc hội giữ vị trí trung tâm trong việc thực hiện quyền lực nhà nước ở cấp quốc gia.",
          en: "The National Assembly holds a central position in the exercise of state power at the national level.",
        },
        items: [
          { vi: "Là cơ quan đại biểu cao nhất của Nhân dân, được hình thành thông qua bầu cử đại biểu Quốc hội.", en: "It is the highest representative body of the People, formed through the election of National Assembly deputies." },
          { vi: "Là cơ quan quyền lực nhà nước cao nhất của nước Cộng hòa xã hội chủ nghĩa Việt Nam.", en: "It is the highest state-power body of the Socialist Republic of Vietnam." },
        ],
      },
      {
        title: { vi: "Chức năng và thẩm quyền", en: "Functions and powers" },
        description: {
          vi: "Các nhóm thẩm quyền lớn giúp nhận biết vai trò của Quốc hội trong hệ thống Nhà nước.",
          en: "Its broad powers explain the National Assembly's role within the State system.",
        },
        items: [
          { vi: "Thực hiện quyền lập hiến, quyền lập pháp và quyết định chương trình xây dựng luật, pháp lệnh.", en: "Exercises constitutional and legislative powers and decides the law- and ordinance-making program." },
          { vi: "Quyết định các vấn đề quan trọng của đất nước theo Hiến pháp và pháp luật.", en: "Decides major national issues under the Constitution and laws." },
          { vi: "Thực hiện quyền giám sát tối cao đối với hoạt động của Nhà nước.", en: "Conducts supreme oversight over State activities." },
        ],
      },
      {
        title: { vi: "Cơ cấu tổ chức", en: "Organization" },
        description: {
          vi: "Các cơ quan và chủ thể phối hợp để chuẩn bị, thẩm tra và tổ chức hoạt động của Quốc hội.",
          en: "Bodies and officeholders work together to prepare, examine, and organize National Assembly activities.",
        },
        items: [
          { vi: "Ủy ban Thường vụ Quốc hội là cơ quan thường trực của Quốc hội.", en: "The Standing Committee is the National Assembly's permanent body." },
          { vi: "Hội đồng Dân tộc và các Ủy ban của Quốc hội thực hiện thẩm tra, giám sát và các nhiệm vụ theo luật.", en: "The Ethnic Council and National Assembly committees conduct examination, oversight, and other duties provided by law." },
          { vi: "Đoàn đại biểu Quốc hội, đại biểu Quốc hội và bộ máy giúp việc tham gia tổ chức hoạt động theo thẩm quyền.", en: "Deputy delegations, deputies, and supporting offices participate in organizing activities within their mandates." },
        ],
      },
      {
        title: { vi: "Đại biểu và cử tri", en: "Deputies and voters" },
        description: {
          vi: "Mối liên hệ giữa đại biểu với cử tri đưa ý kiến, kiến nghị của Nhân dân vào hoạt động nghị trường.",
          en: "The relationship between deputies and voters brings the People's views and petitions into parliamentary work.",
        },
        items: [
          { vi: "Đại biểu Quốc hội đại diện cho ý chí, nguyện vọng của Nhân dân ở đơn vị bầu cử và của Nhân dân cả nước.", en: "Deputies represent the will and aspirations of people in their constituencies and across the country." },
          { vi: "Đại biểu tiếp xúc cử tri, tiếp nhận và phản ánh ý kiến, kiến nghị theo quy định.", en: "Deputies meet voters and receive and convey their views and petitions under applicable rules." },
        ],
      },
    ],
    sources: [
      constitutionSource,
      {
        label: { vi: "Luật sửa đổi Luật Tổ chức Quốc hội 62/2025/QH15", en: "Law 62/2025/QH15 amending the Law on Organization of the National Assembly" },
        href: "https://vanban.chinhphu.vn/?classid=1&docid=213073&orggroupid=1&pageid=27160",
      },
      {
        label: { vi: "Văn bản hợp nhất Luật Tổ chức Quốc hội năm 2025", en: "2025 consolidated Law on Organization of the National Assembly" },
        href: "https://thuvienso.quochoi.vn/handle/11742/107268",
      },
    ],
  },
  {
    id: "people",
    order: "04",
    monogram: "ND",
    image: {
      src: "/images/sections/people-card-ai.png",
      heroSrc: "/images/sections/people-banner-ai.png",
      alt: {
        vi: "Minh họa tinh thần đại đoàn kết của các tầng lớp Nhân dân Việt Nam",
        en: "Illustration of solidarity among Vietnamese people from different walks of life",
      },
    },
    slug: { vi: "nhan-dan", en: "people" },
    navLabel: { vi: "Nhân dân", en: "People" },
    title: { vi: "Nhân dân", en: "The People" },
    kicker: { vi: "Thành phần 04 · Chủ thể quyền lực", en: "Component 04 · Holder of power" },
    summary: {
      vi: "Tất cả quyền lực nhà nước thuộc về Nhân dân; quyền lực được thực hiện bằng dân chủ trực tiếp và dân chủ đại diện.",
      en: "All state power belongs to the People and is exercised through direct and representative democracy.",
    },
    introduction: {
      vi: "Thay vì trình bày Nhân dân như một cơ quan trong sơ đồ, trang này giải thích các cách người dân thực hiện quyền làm chủ và tham gia đời sống công cộng.",
      en: "Rather than presenting the People as an institution, this page explains how citizens exercise ownership and participate in public life.",
    },
    keyPoints: [
      { vi: "Nhân dân là chủ thể của quyền lực nhà nước.", en: "The People are the holder of state power." },
      { vi: "Quyền lực được thực hiện trực tiếp và thông qua cơ quan đại diện.", en: "Power is exercised directly and through representative bodies." },
      { vi: "Công dân tham gia quản lý nhà nước và xã hội theo Hiến pháp, pháp luật.", en: "Citizens participate in state and social management under the Constitution and law." },
    ],
    levels: [
      {
        title: { vi: "Vị trí hiến định", en: "Constitutional position" },
        description: { vi: "Nhân dân là nền tảng của quyền lực nhà nước và của Nhà nước pháp quyền xã hội chủ nghĩa.", en: "The People are the foundation of state power and the socialist rule-of-law State." },
        items: [
          { vi: "Nhà nước là của Nhân dân, do Nhân dân, vì Nhân dân.", en: "The State is of the People, by the People, and for the People." },
          { vi: "Nhà nước bảo đảm và phát huy quyền làm chủ của Nhân dân.", en: "The State guarantees and promotes the People's mastery." },
        ],
      },
      {
        title: { vi: "Dân chủ đại diện", en: "Representative democracy" },
        description: { vi: "Nhân dân thực hiện quyền lực thông qua các cơ quan đại diện và cơ quan khác của Nhà nước.", en: "The People exercise power through representative and other state bodies." },
        items: [
          { vi: "Bầu đại biểu Quốc hội và đại biểu Hội đồng nhân dân theo luật.", en: "Elect deputies to the National Assembly and People's Councils under law." },
          { vi: "Thực hiện quyền lực thông qua Quốc hội, Hội đồng nhân dân và các cơ quan khác của Nhà nước.", en: "Exercise power through the National Assembly, People's Councils, and other state bodies." },
        ],
      },
      {
        title: { vi: "Dân chủ trực tiếp", en: "Direct democracy" },
        description: { vi: "Người dân trực tiếp tham gia quyết định hoặc thể hiện ý chí theo hình thức được pháp luật quy định.", en: "People directly take part in decisions or express their will through forms provided by law." },
        items: [
          { vi: "Biểu quyết khi Nhà nước tổ chức trưng cầu ý dân.", en: "Vote when the State holds a referendum." },
          { vi: "Tham gia, bàn và quyết định các nội dung ở cơ sở theo pháp luật về thực hiện dân chủ ở cơ sở.", en: "Discuss and decide grassroots matters under the law on grassroots democracy." },
        ],
      },
      {
        title: { vi: "Tham gia và giám sát", en: "Participation and oversight" },
        description: { vi: "Công dân góp ý, kiến nghị, giám sát và thực hiện quyền khiếu nại, tố cáo theo luật.", en: "Citizens provide feedback, make petitions, conduct oversight, and exercise complaint and denunciation rights under law." },
        items: [
          { vi: "Tham gia quản lý nhà nước và xã hội, thảo luận và kiến nghị với cơ quan nhà nước.", en: "Participate in state and social management, discuss issues, and make petitions to state bodies." },
          { vi: "Giám sát hoạt động của cơ quan, cán bộ và đại biểu thông qua các cơ chế pháp luật quy định.", en: "Oversee bodies, officials, and representatives through mechanisms provided by law." },
        ],
      },
    ],
    sources: [
      constitutionSource,
      {
        label: { vi: "Luật Thực hiện dân chủ ở cơ sở 10/2022/QH15", en: "Law on Grassroots Democracy 10/2022/QH15" },
        href: "https://vanban.chinhphu.vn/?classid=1&docid=207461&pageid=27160&typegroupid=3",
      },
    ],
  },
  {
    id: "police",
    order: "05",
    monogram: "CA",
    image: {
      src: "/images/sections/police-card-ai.png",
      heroSrc: "/images/themes/ministry-public-security.png",
      alt: {
        vi: "Công an hiệu và tên Bộ Công an",
        en: "Emblem and name of the Ministry of Public Security",
      },
    },
    slug: { vi: "cong-an", en: "public-security" },
    navLabel: { vi: "Công an", en: "Public Security" },
    title: { vi: "Công an nhân dân", en: "People's Public Security" },
    kicker: { vi: "Thành phần 05 · Bảo vệ an ninh, trật tự", en: "Component 05 · Security and public order" },
    summary: {
      vi: "Lực lượng vũ trang nhân dân làm nòng cốt trong bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội và đấu tranh phòng, chống tội phạm.",
      en: "A people's armed force forming the core of national security protection, public order and safety, and crime prevention and control.",
    },
    introduction: {
      vi: "Nội dung tập trung vào hai tầng tổ chức địa phương hiện hành và các nhóm chức năng lớn, không đi vào đơn vị nghiệp vụ chuyên sâu.",
      en: "The content focuses on the current two local organizational levels and broad functions, without detailing specialized operational units.",
    },
    keyPoints: [
      { vi: "Bộ Công an thống nhất quản lý nhà nước về an ninh, trật tự.", en: "The Ministry of Public Security provides unified state management of security and public order." },
      { vi: "Mô hình địa phương hiện gồm Công an cấp tỉnh và Công an cấp xã.", en: "The current local model comprises provincial and commune-level police." },
      { vi: "Không tổ chức Công an cấp huyện từ năm 2025.", en: "District-level police have not been organized since 2025." },
    ],
    levels: [
      {
        title: { vi: "Bộ Công an", en: "Ministry of Public Security" },
        description: { vi: "Cơ quan của Chính phủ thực hiện quản lý nhà nước về an ninh quốc gia, trật tự, an toàn xã hội và xây dựng lực lượng Công an nhân dân.", en: "A Government ministry managing national security, public order and safety, and development of the People's Public Security force." },
        items: [
          { vi: "Tham mưu với Đảng, Nhà nước về bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội.", en: "Advises the Party and State on national security and public order and safety." },
          { vi: "Chỉ đạo các đơn vị nghiệp vụ, học viện, nhà trường và Công an địa phương theo quy định.", en: "Directs professional units, academies, schools, and local police under applicable rules." },
        ],
      },
      {
        title: { vi: "Công an cấp tỉnh", en: "Provincial police" },
        description: { vi: "Tổ chức Công an tại tỉnh, thành phố trực thuộc Trung ương, chịu trách nhiệm trên địa bàn cấp tỉnh.", en: "Police organizations in provinces and centrally governed cities responsible for provincial jurisdictions." },
        items: [
          { vi: "Thực hiện nhiệm vụ bảo vệ an ninh, phòng chống tội phạm và quản lý nhà nước về trật tự, an toàn xã hội trên địa bàn.", en: "Protect security, combat crime, and manage public order and safety in the province." },
          { vi: "Hướng dẫn, kiểm tra và hỗ trợ Công an cấp xã.", en: "Guide, inspect, and support commune-level police." },
        ],
      },
      {
        title: { vi: "Công an cấp xã", en: "Commune-level police" },
        description: { vi: "Lực lượng gần dân, bám cơ sở tại xã, phường và đặc khu.", en: "The closest-to-the-people force based in communes, wards, and special zones." },
        items: [
          { vi: "Nắm tình hình, tiếp nhận thông tin, giải quyết thủ tục và xử lý nhiệm vụ an ninh, trật tự theo thẩm quyền.", en: "Monitor local conditions, receive information, provide procedures, and handle security and order duties within authority." },
          { vi: "Phối hợp cơ quan, tổ chức và Nhân dân xây dựng phong trào bảo vệ an ninh Tổ quốc.", en: "Coordinate with agencies, organizations, and the People to build the national-security protection movement." },
        ],
      },
      {
        title: { vi: "Hai lực lượng nghiệp vụ lớn", en: "Two broad professional forces" },
        description: { vi: "Công an nhân dân gồm An ninh nhân dân và Cảnh sát nhân dân.", en: "The People's Public Security comprises the People's Security and People's Police forces." },
        items: [
          { vi: "An ninh nhân dân tập trung vào bảo vệ an ninh quốc gia.", en: "The People's Security force focuses on national security." },
          { vi: "Cảnh sát nhân dân tập trung vào bảo đảm trật tự, an toàn xã hội và phòng, chống tội phạm.", en: "The People's Police focus on public order and safety and crime prevention and control." },
        ],
      },
    ],
    updateNote: {
      vi: "Cơ cấu địa phương đã thay đổi từ tháng 3/2025: nhiệm vụ của Công an cấp huyện được điều chỉnh cho Công an cấp tỉnh và cấp xã để vận hành theo mô hình mới.",
      en: "The local structure changed in March 2025: district-level duties were reassigned to provincial and commune police under the new model.",
    },
    sources: [
      {
        label: { vi: "Luật Công an nhân dân", en: "Law on the People's Public Security" },
        href: "https://bocongan.gov.vn/KND/vb/vbqp/Lists/VBQP/Attachments/2528/Lu%E1%BA%ADt%20C%C3%B4ng%20an%20nh%C3%A2n%20d%C3%A2n.pdf",
      },
      {
        label: { vi: "Bộ Công an: vận hành chính quyền địa phương hai cấp", en: "Ministry of Public Security: operating under two-level local government" },
        href: "https://bocongan.gov.vn/bai-viet/luc-luong-cong-an-nhan-dan-bao-dam-hoat-dong-khi-thuc-hien-chinh-quyen-dia-phuong-2-cap-d2-t45808",
      },
    ],
  },
  {
    id: "military",
    order: "06",
    monogram: "QĐ",
    image: {
      src: "/images/sections/military-card-ai.png",
      heroSrc: "/images/themes/ministry-national-defence.png",
      alt: {
        vi: "Quốc huy và tên Bộ Quốc phòng",
        en: "National emblem and name of the Ministry of National Defence",
      },
    },
    slug: { vi: "bo-doi", en: "military" },
    navLabel: { vi: "Bộ đội", en: "Military" },
    title: { vi: "Quân đội nhân dân Việt Nam", en: "Vietnam People's Army" },
    kicker: { vi: "Thành phần 06 · Bảo vệ Tổ quốc", en: "Component 06 · National defence" },
    summary: {
      vi: "Lực lượng nòng cốt của lực lượng vũ trang nhân dân trong thực hiện nhiệm vụ quốc phòng, bảo vệ độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ.",
      en: "The core of the people's armed forces in national defence and protection of independence, sovereignty, unity, and territorial integrity.",
    },
    introduction: {
      vi: "Trang dùng các nhóm tổ chức lớn để giúp người mới hình dung, không thể hiện toàn bộ biên chế hoặc hệ thống chỉ huy nghiệp vụ.",
      en: "This page uses broad organizational groups for newcomers and does not depict the complete order of battle or operational command system.",
    },
    keyPoints: [
      { vi: "Bộ Quốc phòng quản lý nhà nước về quốc phòng và tổ chức xây dựng Quân đội.", en: "The Ministry of National Defence manages national defence and organizes development of the Army." },
      { vi: "Quân đội gồm bộ đội chủ lực và bộ đội địa phương.", en: "The Army includes main forces and local forces." },
      { vi: "Cơ cấu còn có quân khu, quân chủng, binh chủng, quân đoàn và Bộ đội Biên phòng.", en: "Its structure also includes military regions, services, arms, army corps, and Border Guard." },
    ],
    levels: [
      {
        title: { vi: "Bộ Quốc phòng và cơ quan chiến lược", en: "Ministry and strategic bodies" },
        description: { vi: "Tổ chức quản lý, chỉ huy và tham mưu chiến lược về quốc phòng, quân sự.", en: "Organizes management, command, and strategic advice on defence and military affairs." },
        items: [
          { vi: "Bộ Quốc phòng chịu trách nhiệm trước Chính phủ về quản lý nhà nước trong lĩnh vực quốc phòng.", en: "The Ministry is responsible to the Government for state management in national defence." },
          { vi: "Bộ Tổng Tham mưu và Tổng cục Chính trị thực hiện chức năng tham mưu, chỉ đạo theo quy định.", en: "The General Staff and General Department of Politics perform advisory and directive functions under applicable rules." },
        ],
      },
      {
        title: { vi: "Quân khu, quân chủng và Bộ đội Biên phòng", en: "Military regions, services, and Border Guard" },
        description: { vi: "Tổ chức lực lượng theo địa bàn chiến lược và theo môi trường, nhiệm vụ tác chiến.", en: "Forces organized by strategic area and by operational environment and mission." },
        items: [
          { vi: "Quân khu phụ trách nhiệm vụ quốc phòng, quân sự trên địa bàn chiến lược được giao.", en: "Military regions handle defence and military tasks in assigned strategic areas." },
          { vi: "Các quân chủng và Bộ đội Biên phòng tổ chức lực lượng theo lĩnh vực, môi trường và nhiệm vụ chuyên biệt.", en: "Services and the Border Guard organize forces for specialized domains, environments, and missions." },
        ],
      },
      {
        title: { vi: "Bộ đội chủ lực và bộ đội địa phương", en: "Main and local forces" },
        description: { vi: "Hai thành phần lớn trong cơ cấu Quân đội nhân dân Việt Nam.", en: "Two broad components of the Vietnam People's Army." },
        items: [
          { vi: "Bộ đội chủ lực gồm các lực lượng cơ động, sẵn sàng thực hiện nhiệm vụ trên các hướng chiến lược.", en: "Main forces include mobile units ready for missions in strategic directions." },
          { vi: "Bộ đội địa phương gắn với nhiệm vụ quốc phòng, quân sự tại địa phương và khu vực phòng thủ.", en: "Local forces support defence and military tasks in localities and defence zones." },
        ],
      },
      {
        title: { vi: "Hậu cần, kỹ thuật, đào tạo và kinh tế – quốc phòng", en: "Logistics, technology, training, and defence economy" },
        description: { vi: "Hệ thống bảo đảm để lực lượng hoạt động, huấn luyện, nghiên cứu và thực hiện nhiệm vụ lâu dài.", en: "Support systems enabling operations, training, research, and long-term missions." },
        items: [
          { vi: "Các đơn vị hậu cần, kỹ thuật bảo đảm vật chất và trang bị.", en: "Logistics and technical units provide materiel and equipment support." },
          { vi: "Học viện, nhà trường, viện nghiên cứu và đơn vị kinh tế – quốc phòng thực hiện nhiệm vụ theo chức năng.", en: "Academies, schools, research institutes, and defence-economic units perform their assigned functions." },
        ],
      },
    ],
    sources: [
      constitutionSource,
      {
        label: { vi: "Luật Quốc phòng 22/2018/QH14", en: "Law on National Defence 22/2018/QH14" },
        href: "https://vanban.chinhphu.vn/?docid=206112&pageid=27160",
      },
      {
        label: { vi: "Bộ Quốc phòng: chức năng, nhiệm vụ, cơ cấu Quân đội", en: "Ministry of National Defence: Army functions, duties, and structure" },
        href: "https://mod.gov.vn/home/detail/%21ut/p/z1/jVDBasJAEP0WDx6HnSCpXlfFYJFQW6XpXMq6xrhtdrchs6H067tWL4HWOjDMe8x7A28EiUKQU52pFBvvVB35C929LmT-OJkmErM0n-B6M1sk4wRH2RTFc1-Ay9UM1_Nsk-bzhwSzsaBb_PhHSbzNf0VA18_fC6pqvztHNW9NQ1KQ9o7LTxaF9fshtgrihNZw-UOY2_cLAG37GNI-A66HqI9Bg1OuAnc0pYUugPagVQCO47TUQUETlIO9N1F0ArE7U3L02RiS-n_45c3_Bf2w223xtTo8LeXgG0vOhjc%21/",
      },
    ],
  },
];

export function systemSectionPath(section: SystemSection, locale: Locale) {
  return locale === "vi"
    ? `/vi/thanh-phan/${section.slug.vi}`
    : `/en/components/${section.slug.en}`;
}

export function findSystemSection(slug: string, locale: Locale) {
  return systemSections.find((section) => section.slug[locale] === slug);
}
