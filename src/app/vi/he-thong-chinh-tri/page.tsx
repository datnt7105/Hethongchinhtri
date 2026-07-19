import type { Metadata } from "next";
import { PoliticalSystemPage } from "@/components/pages/PoliticalSystemPage";

export const metadata: Metadata = { title: "Hệ thống chính trị" };

export default function VietnamesePoliticalSystemPage() {
  return <PoliticalSystemPage locale="vi" />;
}

