import type { Metadata } from "next";
import { KnowledgeExplorerPage } from "@/components/pages/KnowledgeExplorerPage";
import { contentPages } from "@/data/page-content";
import { CentralStateExplorer } from "@/components/explorer/StateApparatusExplorers";

export const metadata: Metadata = { title: "Bộ máy Trung ương" };

export default function VietnameseCentralPage() {
  return <KnowledgeExplorerPage activeRoute="central" content={contentPages.central} Explorer={CentralStateExplorer} locale="vi" />;
}
