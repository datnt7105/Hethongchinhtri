import type { Metadata } from "next";
import { AdministrativeMapPage } from "@/components/pages/AdministrativeMapPage";

export const metadata: Metadata = { title: "Bản đồ hành chính" };

export default function VietnameseMapPage() {
  return <AdministrativeMapPage locale="vi" />;
}
