import type { GlossaryTerm } from "@/types/glossary";

const reviewedAt = "2026-07-16";

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "state-power",
    term: { vi: "Quyền lực nhà nước", en: "State power" },
    shortDefinition: {
      vi: "Quyền lực thuộc về Nhân dân và được thực hiện trực tiếp hoặc thông qua các cơ quan của Nhà nước.",
      en: "Power belonging to the People and exercised directly or through state bodies.",
    },
    fullDefinition: {
      vi: "Hiến pháp xác định tất cả quyền lực nhà nước thuộc về Nhân dân; quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp và tư pháp.",
      en: "The Constitution provides that all state power belongs to the People; state power is unified, with assignment, coordination, and control among state bodies in exercising legislative, executive, and judicial powers.",
    },
    category: "constitutional-principle",
    relatedEntityIds: ["people", "state"],
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "legislative-power",
    term: { vi: "Quyền lập pháp", en: "Legislative power" },
    shortDefinition: {
      vi: "Quyền làm luật và sửa đổi luật do Quốc hội thực hiện theo Hiến pháp.",
      en: "The power to make and amend laws, exercised by the National Assembly under the Constitution.",
    },
    category: "state-power",
    relatedEntityIds: ["national-assembly"],
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "executive-power",
    term: { vi: "Quyền hành pháp", en: "Executive power" },
    shortDefinition: {
      vi: "Quyền được Chính phủ thực hiện trong khuôn khổ Hiến pháp và pháp luật.",
      en: "Power exercised by the Government within the Constitution and law.",
    },
    category: "state-power",
    relatedEntityIds: ["government"],
    legalSourceIds: ["S01", "S05"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "judicial-power",
    term: { vi: "Quyền tư pháp", en: "Judicial power" },
    shortDefinition: {
      vi: "Quyền được Tòa án nhân dân thực hiện thông qua hoạt động xét xử.",
      en: "Power exercised by the People's Courts through adjudication.",
    },
    category: "state-power",
    relatedEntityIds: ["peoples-courts"],
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "supreme-supervision",
    term: { vi: "Giám sát tối cao", en: "Supreme supervision" },
    shortDefinition: {
      vi: "Hoạt động giám sát ở cấp độ Hiến pháp do Quốc hội thực hiện đối với hoạt động của Nhà nước.",
      en: "Constitutional-level supervision conducted by the National Assembly over State activities.",
    },
    category: "oversight",
    relatedEntityIds: ["national-assembly", "state-audit"],
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "social-supervision",
    term: { vi: "Giám sát và phản biện xã hội", en: "Social supervision and criticism" },
    shortDefinition: {
      vi: "Một nhóm chức năng được Hiến pháp ghi nhận đối với Mặt trận Tổ quốc Việt Nam.",
      en: "A group of functions constitutionally recognized for the Vietnam Fatherland Front.",
    },
    category: "political-system",
    relatedEntityIds: ["front"],
    legalSourceIds: ["S02", "S04"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "local-government",
    term: { vi: "Chính quyền địa phương", en: "Local government" },
    shortDefinition: {
      vi: "Các thiết chế chính quyền được tổ chức tại đơn vị hành chính phù hợp với đặc điểm nông thôn, đô thị và hải đảo theo luật.",
      en: "Government institutions organized in administrative units in forms appropriate to rural, urban, and island characteristics under law.",
    },
    category: "local-government",
    relatedEntityIds: ["local-government-system", "provincial-level", "commune-level"],
    legalSourceIds: ["S02", "S03"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "public-prosecution",
    term: { vi: "Quyền công tố", en: "Public prosecution" },
    shortDefinition: {
      vi: "Một chức năng của Viện kiểm sát nhân dân được Hiến pháp ghi nhận.",
      en: "A function of the People's Procuracies recognized by the Constitution.",
    },
    category: "judicial-system",
    relatedEntityIds: ["peoples-procuracies"],
    legalSourceIds: ["S01"],
    lastReviewedAt: reviewedAt,
  },
  {
    id: "state-apparatus",
    term: { vi: "Bộ máy Nhà nước", en: "State apparatus" },
    shortDefinition: {
      vi: "Hệ thống các cơ quan nhà nước ở Trung ương và chính quyền địa phương; là một bộ phận của hệ thống chính trị.",
      en: "The system of central state bodies and local government; one part of the political system.",
    },
    category: "state-organization",
    relatedEntityIds: ["state", "central-apparatus", "local-government-system"],
    legalSourceIds: ["S01", "S02", "S03"],
    lastReviewedAt: reviewedAt,
  },
];
