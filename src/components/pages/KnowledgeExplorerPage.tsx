import type { ComponentType } from "react";
import type { Locale } from "@/types/common";
import type { RouteKey } from "@/lib/routes";
import { localize } from "@/lib/i18n";
import { routeFor } from "@/lib/routes";
import type { ContentPage as ContentPageData } from "@/data/page-content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StateSectionNavigation } from "@/components/layout/StateSectionTabs";

const homeLabel = { vi: "Trang chủ", en: "Home" };
const stateLabel = { vi: "Bộ máy Nhà nước", en: "State apparatus" };

export function KnowledgeExplorerPage({
  locale,
  content,
  activeRoute,
  Explorer,
}: {
  locale: Locale;
  content: ContentPageData;
  activeRoute: Extract<RouteKey, "central" | "local">;
  Explorer: ComponentType<{ locale: Locale }>;
}) {
  return (
    <div className="page-shell shell section-space">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: homeLabel, href: routeFor("home", locale) },
          { label: stateLabel, href: routeFor("state-apparatus", locale) },
          { label: content.title },
        ]}
      />
      <header className="page-header page-header--knowledge">
        <div>
          <p className="eyebrow">{localize(content.eyebrow, locale)}</p>
          <h1>{localize(content.title, locale)}</h1>
          <p>{localize(content.lead, locale)}</p>
        </div>
        <StateSectionNavigation active={activeRoute} locale={locale} />
      </header>
      <Explorer locale={locale} />

      <div className="content-sections knowledge-content-sections">
        {content.sections.map((section, index) => (
          <section className="content-section" id={section.id} key={section.id}>
            <span className="content-section__index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{localize(section.title, locale)}</h2>
              <p>{localize(section.body, locale)}</p>
              {section.items?.length ? (
                <ul>{section.items.map((item) => <li key={item.vi}>{localize(item, locale)}</li>)}</ul>
              ) : null}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
