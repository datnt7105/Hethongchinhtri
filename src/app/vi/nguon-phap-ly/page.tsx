import type { Metadata } from "next";
import { LegalSourcesPage } from "@/components/pages/LegalSourcesPage";

export const metadata: Metadata = { title: "Nguồn tham khảo" };

export default function VietnameseLegalSourcesPage() {
  return <LegalSourcesPage locale="vi" />;
}
