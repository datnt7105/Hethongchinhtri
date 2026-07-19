import type { Metadata } from "next";
import { GlossaryPage } from "@/components/pages/GlossaryPage";

export const metadata: Metadata = { title: "Thuật ngữ" };

export default function VietnameseGlossaryPage() {
  return <GlossaryPage locale="vi" />;
}
