import Link from "next/link";
import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import { routeFor } from "@/lib/routes";
import { stateApparatusContent } from "@/data/page-content";
import { uiText } from "@/data/site-content";
import { Icon } from "@/components/ui/Icon";
import { StateApparatusOverviewExplorer } from "@/components/explorer/StateApparatusExplorers";
import { StateSectionNavigation } from "@/components/layout/StateSectionTabs";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export function StateApparatusPage({ locale }: { locale: Locale }) {
  return (
    <div className="state-page shell section-space">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: { vi: "Trang chủ", en: "Home" }, href: routeFor("home", locale) },
          { label: stateApparatusContent.title },
        ]}
      />
      <header className="page-header state-page__header">
        <div>
          <p className="eyebrow">{localize(stateApparatusContent.eyebrow, locale)}</p>
          <h1>{localize(stateApparatusContent.title, locale)}</h1>
          <p>{localize(stateApparatusContent.lead, locale)}</p>
        </div>
        <Link className="context-link" href={routeFor("political-system", locale)}>
          <Icon name="network" size={22} />
          <span>{localize(stateApparatusContent.politicalSystemNote, locale)}</span>
          <Icon name="arrow" size={17} />
        </Link>
      </header>

      <StateSectionNavigation active="state-apparatus" locale={locale} />
      <div className="state-overview-explorer">
        <StateApparatusOverviewExplorer locale={locale} />
      </div>

      <div className="state-choice-grid">
        {stateApparatusContent.choices.map((choice) => (
          <article className="state-choice-card" key={choice.routeKey}>
            <span>{choice.index}</span>
            <div className="state-choice-card__icon">
              <Icon name={choice.routeKey === "central" ? "institution" : "people"} size={28} />
            </div>
            <h2>{localize(choice.title, locale)}</h2>
            <p>{localize(choice.body, locale)}</p>
            <Link className="button button--secondary" href={routeFor(choice.routeKey, locale)}>
              {localize(uiText.explore, locale)}
              <Icon name="arrow" size={16} />
            </Link>
          </article>
        ))}
      </div>

    </div>
  );
}
