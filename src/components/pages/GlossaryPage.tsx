import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import { routeFor } from "@/lib/routes";
import { contentPages } from "@/data/page-content";
import { glossaryTerms } from "@/data/glossary";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GlossaryExplorer } from "@/components/glossary/GlossaryExplorer";

export function GlossaryPage({ locale }: { locale: Locale }) {
  const content = contentPages.glossary;
  return (
    <div className="content-page content-page--glossary shell section-space">
      <Breadcrumbs locale={locale} items={[
        { label: { vi: "Trang chủ", en: "Home" }, href: routeFor("home", locale) },
        { label: content.title },
      ]} />
      <header className="page-header content-page__header themed-page-header themed-page-header--glossary">
        <p className="eyebrow">{localize(content.eyebrow, locale)}</p>
        <h1>{localize(content.title, locale)}</h1>
        <p>{localize(content.lead, locale)}</p>
      </header>
      <GlossaryExplorer locale={locale} terms={glossaryTerms} />
    </div>
  );
}
