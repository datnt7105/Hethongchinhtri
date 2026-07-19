import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import { routeFor } from "@/lib/routes";
import { contentPages } from "@/data/page-content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdministrativeMap } from "@/components/map/AdministrativeMap";

export function AdministrativeMapPage({ locale }: { locale: Locale }) {
  const content = contentPages["administrative-map"];
  return (
    <div className="content-page shell section-space">
      <Breadcrumbs locale={locale} items={[
        { label: { vi: "Trang chủ", en: "Home" }, href: routeFor("home", locale) },
        { label: content.title },
      ]} />
      <header className="page-header content-page__header">
        <p className="eyebrow">{localize(content.eyebrow, locale)}</p>
        <h1>{localize(content.title, locale)}</h1>
        <p>{localize(content.lead, locale)}</p>
      </header>
      <AdministrativeMap locale={locale} />
    </div>
  );
}
