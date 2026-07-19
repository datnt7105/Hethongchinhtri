import type { RelationshipType } from "@/types/relationship";
import type { LocalizedText } from "@/types/common";

export type RelationshipDescriptor = {
  type: RelationshipType;
  label: LocalizedText;
  description: LocalizedText;
  lineStyle: "solid" | "dashed" | "double";
};

export const relationshipDescriptors: RelationshipDescriptor[] = [
  {
    type: "leadership",
    label: { vi: "Lãnh đạo", en: "Leadership" },
    description: { vi: "Quan hệ lãnh đạo.", en: "A leadership relationship." },
    lineStyle: "solid",
  },
  {
    type: "election",
    label: { vi: "Bầu", en: "Election" },
    description: { vi: "Chủ thể nguồn bầu chủ thể đích.", en: "The source elects the target." },
    lineStyle: "solid",
  },
  {
    type: "approval",
    label: { vi: "Phê chuẩn", en: "Approval" },
    description: { vi: "Quan hệ phê chuẩn theo quy định.", en: "An approval relationship under law." },
    lineStyle: "solid",
  },
  {
    type: "establishment",
    label: { vi: "Thành lập", en: "Establishment" },
    description: { vi: "Quan hệ quyết định hoặc tham gia thành lập.", en: "A decision or participation in establishment." },
    lineStyle: "solid",
  },
  {
    type: "supervision",
    label: { vi: "Giám sát", en: "Supervision" },
    description: { vi: "Quan hệ thực hiện giám sát.", en: "A supervision relationship." },
    lineStyle: "dashed",
  },
  {
    type: "accountability",
    label: { vi: "Chịu trách nhiệm", en: "Accountability" },
    description: { vi: "Quan hệ chịu trách nhiệm hoặc báo cáo.", en: "An accountability or reporting relationship." },
    lineStyle: "solid",
  },
  {
    type: "coordination",
    label: { vi: "Phối hợp", en: "Coordination" },
    description: { vi: "Quan hệ phối hợp hoạt động.", en: "A coordination relationship." },
    lineStyle: "double",
  },
  {
    type: "representation",
    label: { vi: "Đại diện", en: "Representation" },
    description: { vi: "Quan hệ đại diện hoặc thực hiện quyền lực thông qua đại diện.", en: "Representation or exercise of power through representatives." },
    lineStyle: "solid",
  },
  {
    type: "participation",
    label: { vi: "Tham gia", en: "Participation" },
    description: { vi: "Quan hệ tham gia xây dựng hoặc vận hành.", en: "Participation in building or operating a process." },
    lineStyle: "double",
  },
  {
    type: "member-organization",
    label: { vi: "Tổ chức trực thuộc", en: "Affiliated organization" },
    description: { vi: "Quan hệ tổ chức trong mô hình của Mặt trận.", en: "An organizational relationship within the Front." },
    lineStyle: "dashed",
  },
  {
    type: "central-local",
    label: { vi: "Trung ương - địa phương", en: "Central - local" },
    description: { vi: "Quan hệ giữa cấp Trung ương và địa phương.", en: "A central-local relationship." },
    lineStyle: "dashed",
  },
  {
    type: "administrative-guidance",
    label: { vi: "Hướng dẫn hành chính", en: "Administrative guidance" },
    description: { vi: "Quan hệ hướng dẫn, kiểm tra hoặc tổ chức thực hiện.", en: "Guidance, inspection, or implementation." },
    lineStyle: "solid",
  },
];

export const relationshipDescriptorByType = new Map(
  relationshipDescriptors.map((descriptor) => [descriptor.type, descriptor]),
);
