import type { LocalizedText } from "@/types/common";
import type { Entity } from "@/types/entity";
import { politicalSystemEntities } from "@/data/entities/political-system";
import { stateApparatusEntities } from "@/data/entities/state-apparatus";

export type KnowledgeCardDefinition = {
  id: string;
  entity: Entity;
  memberEntityIds?: string[];
  summary?: LocalizedText;
  title?: LocalizedText;
};

const politicalEntityById = new Map(
  politicalSystemEntities.map((entity) => [entity.id, entity]),
);
const stateEntityById = new Map(
  stateApparatusEntities.map((entity) => [entity.id, entity]),
);

function requireEntity(map: Map<string, Entity>, id: string): Entity {
  const entity = map.get(id);
  if (!entity) throw new Error(`Missing knowledge-card entity: ${id}`);
  return entity;
}

const socioPoliticalOrganizationIds = [
  "trade-union",
  "youth-union",
  "womens-union",
  "farmers-union",
  "veterans-association",
];

const socioPoliticalOrganizations: Entity = {
  id: "socio-political-organizations",
  slug: {
    vi: "cac-to-chuc-chinh-tri-xa-hoi",
    en: "socio-political-organizations",
  },
  name: {
    vi: "Các tổ chức chính trị - xã hội",
    en: "Socio-political organizations",
  },
  category: "socio-political-organization",
  level: "multi-level",
  summary: {
    vi: "Đại diện và vận động những nhóm xã hội khác nhau tham gia vào đời sống chính trị, xã hội.",
    en: "Represent and mobilize different social groups to participate in political and social life.",
  },
  relatedEntityIds: socioPoliticalOrganizationIds,
  glossaryTermIds: [],
  legalSourceIds: ["S02", "S04"],
  displayMode: "modal",
  lastReviewedAt: "2026-07-16",
};

export const politicalSystemKnowledgeCards: KnowledgeCardDefinition[] = [
  {
    id: "knowledge-people",
    entity: requireEntity(politicalEntityById, "people"),
    summary: {
      vi: "Chủ thể của quyền lực nhà nước và là nền tảng của hệ thống chính trị.",
      en: "The holder of state power and the foundation of the political system.",
    },
  },
  {
    id: "knowledge-party",
    entity: requireEntity(politicalEntityById, "party"),
    summary: {
      vi: "Lực lượng lãnh đạo Nhà nước và xã hội.",
      en: "The force leading the State and society.",
    },
  },
  {
    id: "knowledge-state",
    entity: requireEntity(politicalEntityById, "state"),
    summary: {
      vi: "Bộ máy thực hiện quyền lực nhà nước và quản lý xã hội bằng Hiến pháp, pháp luật.",
      en: "The apparatus that exercises state power and governs society under the Constitution and law.",
    },
    title: { vi: "Nhà nước Việt Nam", en: "The Vietnamese State" },
  },
  {
    id: "knowledge-front",
    entity: requireEntity(politicalEntityById, "front"),
    summary: {
      vi: "Liên minh chính trị và tổ chức đại diện, tập hợp các tầng lớp nhân dân.",
      en: "A political alliance and representative organization bringing together different groups of the People.",
    },
  },
  {
    id: "knowledge-socio-political-organizations",
    entity: socioPoliticalOrganizations,
    memberEntityIds: socioPoliticalOrganizationIds,
  },
];

export const stateApparatusKnowledgeCards: KnowledgeCardDefinition[] = [
  {
    id: "knowledge-national-assembly",
    entity: requireEntity(stateEntityById, "national-assembly"),
    summary: {
      vi: "Cơ quan đại biểu cao nhất của Nhân dân và cơ quan quyền lực nhà nước cao nhất.",
      en: "The highest representative body of the People and the highest state-power body.",
    },
  },
  {
    id: "knowledge-state-president",
    entity: requireEntity(stateEntityById, "state-president"),
    summary: {
      vi: "Người đứng đầu Nhà nước, thay mặt nước về đối nội và đối ngoại.",
      en: "The Head of State, representing the country in domestic and foreign affairs.",
    },
  },
  {
    id: "knowledge-government",
    entity: requireEntity(stateEntityById, "government"),
    summary: {
      vi: "Cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp và tổ chức thi hành pháp luật.",
      en: "The highest state administrative body, exercising executive power and organizing the implementation of law.",
    },
  },
  {
    id: "knowledge-peoples-courts",
    entity: requireEntity(stateEntityById, "peoples-courts"),
    summary: {
      vi: "Cơ quan xét xử, thực hiện quyền tư pháp.",
      en: "The adjudicatory bodies exercising judicial power.",
    },
    title: { vi: "Tòa án nhân dân", en: "People's Courts" },
  },
  {
    id: "knowledge-peoples-procuracies",
    entity: requireEntity(stateEntityById, "peoples-procuracies"),
    summary: {
      vi: "Cơ quan thực hành quyền công tố và kiểm sát hoạt động tư pháp.",
      en: "The bodies exercising public prosecution and supervising judicial activities.",
    },
    title: { vi: "Viện kiểm sát nhân dân", en: "People's Procuracies" },
  },
  {
    id: "knowledge-local-government",
    entity: requireEntity(stateEntityById, "local-government-system"),
    summary: {
      vi: "Hệ thống cơ quan tổ chức quản lý các vấn đề tại từng đơn vị hành chính.",
      en: "The system of bodies managing matters within each administrative unit.",
    },
  },
];
