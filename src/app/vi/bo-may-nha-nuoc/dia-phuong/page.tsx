import type { Metadata } from "next";
import { KnowledgeExplorerPage } from "@/components/pages/KnowledgeExplorerPage";
import { contentPages } from "@/data/page-content";
import { LocalGovernmentExplorer } from "@/components/explorer/StateApparatusExplorers";

export const metadata: Metadata = { title: "Chính quyền địa phương" };

export default function VietnameseLocalPage() {
  return <KnowledgeExplorerPage activeRoute="local" content={contentPages.local} Explorer={LocalGovernmentExplorer} locale="vi" />;
}
