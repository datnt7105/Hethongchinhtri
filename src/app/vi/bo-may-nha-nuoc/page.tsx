import type { Metadata } from "next";
import { StateApparatusPage } from "@/components/pages/StateApparatusPage";

export const metadata: Metadata = { title: "Bộ máy Nhà nước" };

export default function VietnameseStateApparatusPage() {
  return <StateApparatusPage locale="vi" />;
}

