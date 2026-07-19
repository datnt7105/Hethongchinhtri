import type { Metadata } from "next";
import { KnowledgeExplorerPage } from "@/components/pages/KnowledgeExplorerPage";
import { contentPages } from "@/data/page-content";
import { CentralStateExplorer } from "@/components/explorer/StateApparatusExplorers";

export const metadata: Metadata = { title: "Central state apparatus" };

export default function EnglishCentralPage() {
  return <KnowledgeExplorerPage activeRoute="central" content={contentPages.central} Explorer={CentralStateExplorer} locale="en" />;
}
