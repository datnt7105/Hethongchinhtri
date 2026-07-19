import type { Relationship } from "@/types/relationship";

const reviewedAt = "2026-07-16";

export const politicalSystemRelationships: Relationship[] = [
  {
    id: "people-state",
    sourceEntityId: "people",
    targetEntityId: "state",
    type: "representation",
    label: { vi: "Thực hiện quyền lực", en: "Exercises power" },
    description: {
      vi: "Nhân dân thực hiện quyền lực nhà nước bằng dân chủ trực tiếp và dân chủ đại diện.",
      en: "The People exercise state power through direct and representative democracy.",
    },
    direction: "one-way",
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "party-state",
    sourceEntityId: "party",
    targetEntityId: "state",
    type: "leadership",
    label: { vi: "Lãnh đạo", en: "Leadership" },
    description: {
      vi: "Hiến pháp xác định Đảng là lực lượng lãnh đạo Nhà nước và xã hội.",
      en: "The Constitution identifies the Party as the force leading the State and society.",
    },
    direction: "one-way",
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "party-front",
    sourceEntityId: "party",
    targetEntityId: "front",
    type: "leadership",
    label: { vi: "Lãnh đạo", en: "Leadership" },
    description: {
      vi: "Mặt trận Tổ quốc Việt Nam là bộ phận của hệ thống chính trị do Đảng lãnh đạo.",
      en: "The Vietnam Fatherland Front is part of the political system under Party leadership.",
    },
    direction: "one-way",
    legalSourceIds: ["S02"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "front-state",
    sourceEntityId: "front",
    targetEntityId: "state",
    type: "participation",
    label: { vi: "Tham gia xây dựng", en: "Participation" },
    description: {
      vi: "Mặt trận tham gia xây dựng Nhà nước, giám sát và phản biện xã hội theo quy định của Hiến pháp và pháp luật.",
      en: "The Front participates in building the State and conducts social supervision and criticism under the Constitution and law.",
    },
    direction: "two-way",
    legalSourceIds: ["S02", "S04"],
    lastReviewedAt: reviewedAt,
  },
  ...[
    "trade-union",
    "youth-union",
    "womens-union",
    "farmers-union",
    "veterans-association",
  ].map(
    (entityId): Relationship => ({
      id: `front-${entityId}`,
      sourceEntityId: "front",
      targetEntityId: entityId,
      type: "member-organization",
      label: { vi: "Tổ chức trực thuộc", en: "Affiliated organization" },
      description: {
        vi: "Tổ chức chính trị - xã hội trực thuộc Mặt trận, có chức năng và đối tượng đại diện riêng.",
        en: "A socio-political organization affiliated with the Front, with its own functions and represented constituency.",
      },
      direction: "one-way",
      legalSourceIds: ["S02", "S04"],
      lastReviewedAt: reviewedAt,
    }),
  ),
];

