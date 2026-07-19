import type { LocalizedText } from "./common";

export type GlossaryTerm = {
  id: string;
  term: LocalizedText;
  shortDefinition: LocalizedText;
  fullDefinition?: LocalizedText;
  category: string;
  relatedEntityIds: string[];
  legalSourceIds: string[];
  lastReviewedAt: string;
};
