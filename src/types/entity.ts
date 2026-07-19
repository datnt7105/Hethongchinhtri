import type { LocalizedText } from "./common";

export type EntityCategory =
  | "people"
  | "party"
  | "state"
  | "state-body"
  | "front"
  | "socio-political-organization"
  | "local-government"
  | "administrative-level";

export type EntityLevel =
  | "national"
  | "central"
  | "provincial"
  | "commune"
  | "multi-level";

export type EntityDisplayMode =
  | "modal"
  | "page"
  | "modal-and-page"
  | "navigate";

export type Entity = {
  id: string;
  slug: LocalizedText;
  name: LocalizedText;
  shortName?: LocalizedText;
  abbreviation?: string;
  category: EntityCategory;
  level: EntityLevel;
  summary: LocalizedText;
  definition?: LocalizedText;
  position?: LocalizedText;
  functions?: LocalizedText[];
  responsibilities?: LocalizedText[];
  structure?: LocalizedText[];
  formation?: LocalizedText;
  term?: LocalizedText;
  accountability?: LocalizedText;
  practicalExample?: LocalizedText;
  commonMisconceptions?: LocalizedText[];
  relatedEntityIds: string[];
  glossaryTermIds: string[];
  legalSourceIds: string[];
  displayMode: EntityDisplayMode;
  destinationRouteKey?: string;
  lastReviewedAt: string;
};
