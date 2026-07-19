import type { LocalizedText } from "./common";

export type LegalSource = {
  id: string;
  title: LocalizedText;
  issuingAuthority: LocalizedText;
  documentType: string;
  documentNumber?: string;
  issuedAt?: string;
  effectiveAt?: string;
  status?: "effective" | "partially-effective" | "expired" | "unknown";
  officialUrl: string;
  accessedAt: string;
  relatedEntityIds: string[];
  relatedTimelineEventIds: string[];
};

