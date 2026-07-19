import type { Entity } from "@/types/entity";

const reviewedAt = "2026-07-16";

const memberOrganizationSummary = {
  vi: "Một trong năm tổ chức chính trị - xã hội trực thuộc Mặt trận Tổ quốc Việt Nam; đại diện và bảo vệ quyền, lợi ích hợp pháp, chính đáng của thành viên, hội viên tổ chức mình.",
  en: "One of five socio-political organizations directly affiliated with the Vietnam Fatherland Front, representing and protecting the lawful and legitimate rights and interests of its members.",
};

export const politicalSystemEntities: Entity[] = [
  {
    id: "people",
    slug: { vi: "nhan-dan", en: "the-people" },
    name: { vi: "Nhân dân", en: "The People" },
    category: "people",
    level: "national",
    summary: {
      vi: "Chủ thể của quyền lực nhà nước; thực hiện quyền lực nhà nước bằng dân chủ trực tiếp và dân chủ đại diện.",
      en: "The subject of state power, exercising it through direct democracy and representative democracy.",
    },
    position: {
      vi: "Tất cả quyền lực nhà nước thuộc về Nhân dân.",
      en: "All state power belongs to the People.",
    },
    functions: [
      { vi: "Thực hiện quyền lực trực tiếp", en: "Exercise power directly" },
      {
        vi: "Thực hiện quyền lực thông qua cơ quan đại diện",
        en: "Exercise power through representative bodies",
      },
      { vi: "Tham gia bầu cử và ứng cử", en: "Participate in elections and candidacy" },
    ],
    relatedEntityIds: ["party", "state", "front"],
    glossaryTermIds: ["state-power", "representative-democracy"],
    legalSourceIds: ["S01"],
    displayMode: "modal",
    lastReviewedAt: reviewedAt,
  },
  {
    id: "party",
    slug: { vi: "dang-cong-san-viet-nam", en: "communist-party-of-vietnam" },
    name: { vi: "Đảng Cộng sản Việt Nam", en: "Communist Party of Vietnam" },
    shortName: { vi: "Đảng", en: "The Party" },
    category: "party",
    level: "multi-level",
    summary: {
      vi: "Lực lượng lãnh đạo Nhà nước và xã hội theo Điều 4 Hiến pháp năm 2013.",
      en: "The force leading the State and society under Article 4 of the 2013 Constitution.",
    },
    position: {
      vi: "Một chủ thể trong hệ thống chính trị, không phải là cơ quan nhà nước.",
      en: "An entity in the political system, not a state body.",
    },
    commonMisconceptions: [
      {
        vi: "Đảng là một chủ thể trong hệ thống chính trị, không phải là một cơ quan nhà nước.",
        en: "The Party is an entity in the political system, not a state body.",
      },
    ],
    relatedEntityIds: ["people", "state", "front"],
    glossaryTermIds: ["leadership"],
    legalSourceIds: ["S01"],
    displayMode: "modal-and-page",
    lastReviewedAt: reviewedAt,
  },
  {
    id: "state",
    slug: { vi: "nha-nuoc", en: "state" },
    name: {
      vi: "Nhà nước CHXHCN Việt Nam",
      en: "State of the Socialist Republic of Vietnam",
    },
    shortName: { vi: "Nhà nước", en: "The State" },
    category: "state",
    level: "multi-level",
    summary: {
      vi: "Nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân; bộ máy nhà nước được tổ chức ở Trung ương và địa phương.",
      en: "A socialist rule-of-law State of the People, by the People and for the People, organized at central and local levels.",
    },
    position: {
      vi: "Một bộ phận của hệ thống chính trị; không đồng nhất với toàn bộ hệ thống chính trị.",
      en: "One part of the political system, not the political system as a whole.",
    },
    commonMisconceptions: [
      {
        vi: "Nhà nước là một bộ phận của hệ thống chính trị, không phải toàn bộ hệ thống chính trị.",
        en: "The State is one part of the political system, not the political system as a whole.",
      },
    ],
    relatedEntityIds: ["people", "party", "front"],
    glossaryTermIds: ["state-power", "state-apparatus"],
    legalSourceIds: ["S01", "S02"],
    displayMode: "navigate",
    destinationRouteKey: "state-apparatus",
    lastReviewedAt: reviewedAt,
  },
  {
    id: "front",
    slug: { vi: "mat-tran-to-quoc-viet-nam", en: "vietnam-fatherland-front" },
    name: { vi: "Mặt trận Tổ quốc Việt Nam", en: "Vietnam Fatherland Front" },
    shortName: { vi: "Mặt trận", en: "Fatherland Front" },
    abbreviation: "MTTQVN",
    category: "front",
    level: "multi-level",
    summary: {
      vi: "Tổ chức liên minh chính trị, liên hiệp tự nguyện và là bộ phận của hệ thống chính trị; tập hợp, phát huy sức mạnh đại đoàn kết toàn dân tộc.",
      en: "A political alliance and voluntary union within the political system, bringing together and promoting the strength of national unity.",
    },
    functions: [
      {
        vi: "Đại diện, bảo vệ quyền và lợi ích hợp pháp, chính đáng của Nhân dân",
        en: "Represent and protect the lawful and legitimate rights and interests of the People",
      },
      { vi: "Giám sát và phản biện xã hội", en: "Conduct social supervision and social criticism" },
      { vi: "Tham gia xây dựng Đảng và Nhà nước", en: "Participate in building the Party and the State" },
    ],
    relatedEntityIds: [
      "people",
      "party",
      "state",
      "trade-union",
      "youth-union",
      "womens-union",
      "farmers-union",
      "veterans-association",
    ],
    glossaryTermIds: ["social-supervision"],
    legalSourceIds: ["S02", "S04"],
    displayMode: "modal-and-page",
    lastReviewedAt: reviewedAt,
  },
  {
    id: "trade-union",
    slug: { vi: "cong-doan-viet-nam", en: "vietnam-trade-union" },
    name: { vi: "Công đoàn Việt Nam", en: "Vietnam Trade Union" },
    category: "socio-political-organization",
    level: "multi-level",
    summary: {
      vi: "Tổ chức chính trị - xã hội của giai cấp công nhân và người lao động, đại diện, chăm lo và bảo vệ quyền, lợi ích hợp pháp, chính đáng của đoàn viên và người lao động.",
      en: "A socio-political organization of the working class and workers that represents, cares for, and protects their lawful and legitimate rights and interests.",
    },
    relatedEntityIds: ["front"],
    glossaryTermIds: [],
    legalSourceIds: ["S02", "S04"],
    displayMode: "modal",
    lastReviewedAt: reviewedAt,
  },
  ...([
    ["youth-union", "Đoàn Thanh niên Cộng sản Hồ Chí Minh", "Ho Chi Minh Communist Youth Union", "doan-thanh-nien", "ho-chi-minh-communist-youth-union"],
    ["womens-union", "Hội Liên hiệp Phụ nữ Việt Nam", "Vietnam Women's Union", "hoi-lien-hiep-phu-nu", "vietnam-womens-union"],
    ["farmers-union", "Hội Nông dân Việt Nam", "Vietnam Farmers' Union", "hoi-nong-dan", "vietnam-farmers-union"],
    ["veterans-association", "Hội Cựu chiến binh Việt Nam", "Vietnam Veterans Association", "hoi-cuu-chien-binh", "vietnam-veterans-association"],
  ] as const).map(([id, vi, en, viSlug, enSlug]): Entity => ({
    id,
    slug: { vi: viSlug, en: enSlug },
    name: { vi, en },
    category: "socio-political-organization",
    level: "multi-level",
    summary: memberOrganizationSummary,
    relatedEntityIds: ["front"],
    glossaryTermIds: [],
    legalSourceIds: ["S02", "S04"],
    displayMode: "modal",
    lastReviewedAt: reviewedAt,
  })),
];

export const politicalSystemEntityById = new Map(
  politicalSystemEntities.map((entity) => [entity.id, entity]),
);
