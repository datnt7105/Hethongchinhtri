import type { Metadata } from "next";
import { PoliticalSystemPage } from "@/components/pages/PoliticalSystemPage";

export const metadata: Metadata = { title: "Political system" };

export default function EnglishPoliticalSystemPage() {
  return <PoliticalSystemPage locale="en" />;
}
