import type { Metadata } from "next";
import { LegalSourcesPage } from "@/components/pages/LegalSourcesPage";

export const metadata: Metadata = { title: "References" };

export default function EnglishLegalSourcesPage() {
  return <LegalSourcesPage locale="en" />;
}
