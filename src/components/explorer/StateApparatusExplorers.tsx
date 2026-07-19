import type { Locale, LocalizedText } from "@/types/common";
import { localize } from "@/lib/i18n";
import { graphDataSets } from "@/data/all-data";
import { stateApparatusKnowledgeCards } from "@/data/knowledge-cards";
import { KnowledgeExplorer } from "./KnowledgeExplorer";

const labels: Record<"state" | "central" | "local", LocalizedText> = {
  state: {
    vi: "Cẩm nang khám phá Bộ máy Nhà nước Việt Nam",
    en: "Interactive guide to Vietnam's state apparatus",
  },
  central: {
    vi: "Cẩm nang các thiết chế nhà nước ở Trung ương",
    en: "Interactive guide to central state institutions",
  },
  local: {
    vi: "Cẩm nang chính quyền địa phương hai cấp",
    en: "Interactive guide to the two-level local-government model",
  },
};

export function StateApparatusOverviewExplorer({ locale }: { locale: Locale }) {
  return (
    <KnowledgeExplorer
      ariaLabel={localize(labels.state, locale)}
      compact
      detailEntities={[
        ...graphDataSets.state.entities,
        ...graphDataSets.central.entities,
        ...graphDataSets.local.entities,
      ]}
      detailRelationships={[
        ...graphDataSets.state.relationships,
        ...graphDataSets.central.relationships,
        ...graphDataSets.local.relationships,
      ]}
      entities={graphDataSets.state.entities}
      knowledgeCards={stateApparatusKnowledgeCards}
      locale={locale}
      relationships={graphDataSets.state.relationships}
    />
  );
}

export function CentralStateExplorer({ locale }: { locale: Locale }) {
  return (
    <KnowledgeExplorer
      ariaLabel={localize(labels.central, locale)}
      entities={graphDataSets.central.entities}
      locale={locale}
      relationships={graphDataSets.central.relationships}
    />
  );
}

export function LocalGovernmentExplorer({ locale }: { locale: Locale }) {
  return (
    <KnowledgeExplorer
      ariaLabel={localize(labels.local, locale)}
      entities={graphDataSets.local.entities}
      locale={locale}
      relationships={graphDataSets.local.relationships}
    />
  );
}
