import type { Metadata } from "next";
import { KnowledgeExplorerPage } from "@/components/pages/KnowledgeExplorerPage";
import { contentPages } from "@/data/page-content";
import { LocalGovernmentExplorer } from "@/components/explorer/StateApparatusExplorers";

export const metadata: Metadata = { title: "Local government" };

export default function EnglishLocalPage() {
  return <KnowledgeExplorerPage activeRoute="local" content={contentPages.local} Explorer={LocalGovernmentExplorer} locale="en" />;
}
