import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import { graphDataSets } from "@/data/all-data";
import { politicalSystemContent } from "@/data/site-content";
import { politicalSystemKnowledgeCards } from "@/data/knowledge-cards";
import { KnowledgeExplorer } from "./KnowledgeExplorer";

export function PoliticalSystemExplorer({ locale }: { locale: Locale }) {
  return (
    <KnowledgeExplorer
      ariaLabel={localize(politicalSystemContent.explorerLabel, locale)}
      entities={graphDataSets.political.entities}
      knowledgeCards={politicalSystemKnowledgeCards}
      locale={locale}
      relationships={graphDataSets.political.relationships}
    />
  );
}
