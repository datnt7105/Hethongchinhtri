import type { Metadata } from "next";
import { TimelinePage } from "@/components/pages/TimelinePage";

export const metadata: Metadata = { title: "Lịch sử" };

export default function VietnameseHistoryPage() {
  return <TimelinePage locale="vi" />;
}
