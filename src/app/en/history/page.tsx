import type { Metadata } from "next";
import { TimelinePage } from "@/components/pages/TimelinePage";

export const metadata: Metadata = { title: "History" };

export default function EnglishHistoryPage() {
  return <TimelinePage locale="en" />;
}
