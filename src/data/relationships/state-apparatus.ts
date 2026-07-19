import type { Relationship } from "@/types/relationship";

const reviewedAt = "2026-07-16";

export const stateOverviewRelationships: Relationship[] = [
  {
    id: "people-central-apparatus",
    sourceEntityId: "people",
    targetEntityId: "central-apparatus",
    type: "representation",
    label: { vi: "Thực hiện quyền lực", en: "Exercises power" },
    description: {
      vi: "Nhân dân thực hiện quyền lực nhà nước trực tiếp và thông qua các cơ quan đại diện cùng các cơ quan khác của Nhà nước.",
      en: "The People exercise state power directly and through representative and other state bodies.",
    },
    direction: "one-way",
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "people-local-government",
    sourceEntityId: "people",
    targetEntityId: "local-government-system",
    type: "election",
    label: { vi: "Bầu đại biểu", en: "Elects representatives" },
    description: {
      vi: "Cử tri địa phương bầu đại biểu Hội đồng nhân dân theo pháp luật.",
      en: "Local voters elect People's Council representatives under law.",
    },
    direction: "one-way",
    legalSourceIds: ["S01", "S03"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "central-local-overview",
    sourceEntityId: "central-apparatus",
    targetEntityId: "local-government-system",
    type: "central-local",
    label: { vi: "Trung ương - địa phương", en: "Central - local" },
    description: {
      vi: "Quan hệ phân định thẩm quyền, hướng dẫn, kiểm tra và tổ chức thực hiện giữa Trung ương và địa phương.",
      en: "Allocation of authority, guidance, inspection, and implementation between central and local levels.",
    },
    direction: "two-way",
    legalSourceIds: ["S02", "S03"],
    lastReviewedAt: reviewedAt,
  },
];

export const centralStateRelationships: Relationship[] = [
  {
    id: "people-national-assembly",
    sourceEntityId: "people",
    targetEntityId: "national-assembly",
    type: "election",
    label: { vi: "Bầu đại biểu", en: "Elects deputies" },
    description: {
      vi: "Cử tri bầu đại biểu Quốc hội theo pháp luật về bầu cử.",
      en: "Voters elect National Assembly deputies under election law.",
    },
    direction: "one-way",
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "assembly-president-election",
    sourceEntityId: "national-assembly",
    targetEntityId: "state-president",
    type: "election",
    label: { vi: "Bầu", en: "Elects" },
    description: {
      vi: "Quốc hội bầu Chủ tịch nước trong số đại biểu Quốc hội.",
      en: "The National Assembly elects the State President from among its deputies.",
    },
    direction: "one-way",
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "assembly-government-formation",
    sourceEntityId: "national-assembly",
    targetEntityId: "government",
    type: "approval",
    label: { vi: "Bầu và phê chuẩn", en: "Elects and approves" },
    description: {
      vi: "Quốc hội bầu Thủ tướng và phê chuẩn các chức danh thành viên Chính phủ theo Hiến pháp.",
      en: "The National Assembly elects the Prime Minister and approves Government members as provided by the Constitution.",
    },
    direction: "one-way",
    legalSourceIds: ["S01", "S05"],
    lastReviewedAt: reviewedAt,
  },
  ...[
    ["peoples-courts", "Tòa án nhân dân", "People's Courts"],
    ["peoples-procuracies", "Viện kiểm sát nhân dân", "People's Procuracies"],
    ["state-audit", "Kiểm toán Nhà nước", "State Audit Office"],
    ["national-election-council", "Hội đồng Bầu cử quốc gia", "National Election Council"],
  ].map(
    ([targetEntityId, viName, enName]): Relationship => ({
      id: `assembly-${targetEntityId}-supervision`,
      sourceEntityId: "national-assembly",
      targetEntityId,
      type: "supervision",
      label: { vi: "Giám sát tối cao", en: "Supreme supervision" },
      description: {
        vi: `Quốc hội thực hiện giám sát tối cao đối với hoạt động của ${viName} theo phạm vi Hiến pháp quy định.`,
        en: `The National Assembly conducts supreme supervision over the activities of the ${enName} within the constitutional framework.`,
      },
      direction: "one-way",
      legalSourceIds: ["S01"],
      lastReviewedAt: reviewedAt,
    }),
  ),
  {
    id: "government-president-accountability",
    sourceEntityId: "government",
    targetEntityId: "state-president",
    type: "accountability",
    label: { vi: "Báo cáo công tác", en: "Reports" },
    description: {
      vi: "Chính phủ báo cáo công tác trước Chủ tịch nước theo Hiến pháp.",
      en: "The Government reports its work to the State President under the Constitution.",
    },
    direction: "one-way",
    legalSourceIds: ["S01", "S05"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "courts-procuracies-coordination",
    sourceEntityId: "peoples-courts",
    targetEntityId: "peoples-procuracies",
    type: "coordination",
    label: { vi: "Hoạt động tư pháp", en: "Judicial activities" },
    description: {
      vi: "Hai hệ thống có các quan hệ tố tụng và kiểm sát hoạt động tư pháp theo luật; đường nối không biểu thị cấp trên - cấp dưới.",
      en: "The two systems interact through procedure and supervision of judicial activities under law; this is not a hierarchy.",
    },
    direction: "two-way",
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
];

export const localGovernmentRelationships: Relationship[] = [
  ...(["provincial", "commune"] as const).flatMap(
    (level): Relationship[] => {
      const levelVi = level === "provincial" ? "cấp tỉnh" : "cấp xã";
      const levelEn = level === "provincial" ? "provincial" : "commune";
      return [
        {
          id: `people-${level}-council-election`,
          sourceEntityId: "people",
          targetEntityId: `${level}-council`,
          type: "election",
          label: { vi: "Bầu đại biểu", en: "Elects representatives" },
          description: {
            vi: `Cử tri địa phương bầu đại biểu Hội đồng nhân dân ${levelVi}.`,
            en: `Local voters elect representatives to the ${levelEn} People's Council.`,
          },
          direction: "one-way",
          legalSourceIds: ["S03"],
          lastReviewedAt: reviewedAt,
        },
        {
          id: `${level}-council-committee-election`,
          sourceEntityId: `${level}-council`,
          targetEntityId: `${level}-committee`,
          type: "election",
          label: { vi: "Bầu", en: "Elects" },
          description: {
            vi: `Hội đồng nhân dân ${levelVi} bầu Ủy ban nhân dân cùng cấp theo luật.`,
            en: `The ${levelEn} People's Council elects the People's Committee at the same level under law.`,
          },
          direction: "one-way",
          legalSourceIds: ["S03"],
          lastReviewedAt: reviewedAt,
        },
        {
          id: `${level}-committee-accountability`,
          sourceEntityId: `${level}-committee`,
          targetEntityId: `${level}-council`,
          type: "accountability",
          label: { vi: "Chịu trách nhiệm", en: "Accountable" },
          description: {
            vi: `Ủy ban nhân dân chịu trách nhiệm trước Hội đồng nhân dân cùng cấp theo luật.`,
            en: `The People's Committee is accountable to the People's Council at the same level under law.`,
          },
          direction: "one-way",
          legalSourceIds: ["S03"],
          lastReviewedAt: reviewedAt,
        },
      ];
    },
  ),
  {
    id: "central-provincial-guidance",
    sourceEntityId: "central-apparatus",
    targetEntityId: "provincial-level",
    type: "central-local",
    label: { vi: "Phân định và hướng dẫn", en: "Allocation and guidance" },
    description: {
      vi: "Quan hệ Trung ương - địa phương gồm phân định thẩm quyền, hướng dẫn, kiểm tra và tổ chức thực hiện.",
      en: "The central-local relationship includes allocation of authority, guidance, inspection, and implementation.",
    },
    direction: "two-way",
    legalSourceIds: ["S02", "S03"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "provincial-commune-guidance",
    sourceEntityId: "provincial-level",
    targetEntityId: "commune-level",
    type: "administrative-guidance",
    label: { vi: "Hướng dẫn và kiểm tra", en: "Guidance and inspection" },
    description: {
      vi: "Thể hiện quan hệ hướng dẫn, kiểm tra và tổ chức thực hiện giữa hai cấp, không giản lược thành quan hệ sở hữu.",
      en: "Represents guidance, inspection, and implementation between the two levels, not ownership.",
    },
    direction: "one-way",
    legalSourceIds: ["S03"],
    lastReviewedAt: reviewedAt,
  },
];
