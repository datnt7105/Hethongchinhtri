import type { LocalizedText } from "./common";

export type TimelineEvent = {
  id: string;
  date: string;
  category: "constitution" | "administrative-reform";
  title: LocalizedText;
  summary: LocalizedText;
  changeTypes: string[];
  relatedEntityIds: string[];
  legalSourceIds: string[];
  lastReviewedAt: string;
};

