import type { LocalizedText } from "./common";

export type RelationshipType =
  | "leadership"
  | "election"
  | "approval"
  | "establishment"
  | "supervision"
  | "accountability"
  | "coordination"
  | "representation"
  | "participation"
  | "member-organization"
  | "central-local"
  | "administrative-guidance";

export type Relationship = {
  id: string;
  sourceEntityId: string;
  targetEntityId: string;
  type: RelationshipType;
  label: LocalizedText;
  description: LocalizedText;
  direction: "one-way" | "two-way" | "none";
  legalSourceIds: string[];
  lastReviewedAt: string;
};

