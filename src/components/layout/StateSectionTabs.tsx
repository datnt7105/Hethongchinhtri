import Link from "next/link";
import type { Locale } from "@/types/common";
import type { RouteKey } from "@/lib/routes";
import { localize } from "@/lib/i18n";
import { routeFor } from "@/lib/routes";
import { ariaText, stateSectionTabs } from "@/data/site-content";

export function StateSectionNavigation({ active, locale }: { active: RouteKey; locale: Locale }) {
  return (
    <nav className="section-tabs" aria-label={localize(ariaText.stateSections, locale)}>
      {stateSectionTabs.map((tab) => (
        <Link
          aria-current={active === tab.key ? "page" : undefined}
          href={routeFor(tab.key, locale)}
          key={tab.key}
        >
          {localize(tab.label, locale)}
        </Link>
      ))}
    </nav>
  );
}
