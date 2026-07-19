import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import { politicalSystemContent, uiText } from "@/data/site-content";
import { PoliticalSystemExplorer } from "@/components/explorer/PoliticalSystemExplorer";

export function PoliticalSystemPage({ locale }: { locale: Locale }) {
  return (
    <div className="page-shell shell section-space">
      <header className="page-header page-header--knowledge">
        <div>
          <p className="eyebrow">{localize(politicalSystemContent.eyebrow, locale)}</p>
          <h1>{localize(politicalSystemContent.title, locale)}</h1>
          <p>{localize(politicalSystemContent.lead, locale)}</p>
        </div>
        <aside className="reading-note">
          <span>{localize(uiText.howToRead, locale)}</span>
          <p>{localize(politicalSystemContent.readingNote, locale)}</p>
        </aside>
      </header>
      <PoliticalSystemExplorer locale={locale} />
    </div>
  );
}
