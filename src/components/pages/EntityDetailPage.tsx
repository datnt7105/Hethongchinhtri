import Link from "next/link";
import type { Locale } from "@/types/common";
import type { Entity } from "@/types/entity";
import { localize } from "@/lib/i18n";
import { entityPath, routeFor } from "@/lib/routes";
import { allEntityById } from "@/data/all-data";
import { categoryLabels, uiText } from "@/data/site-content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const homeLabel = { vi: "Trang chủ", en: "Home" };
const entityLabel = { vi: "Chủ thể", en: "Entities" };

export function EntityDetailPage({ entity, locale }: { entity: Entity; locale: Locale }) {
  return (
    <article className="entity-detail shell section-space">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: homeLabel, href: routeFor("home", locale) },
          { label: entityLabel },
          { label: entity.name },
        ]}
      />
      <header className="page-header entity-detail__header">
        <p className="eyebrow">{localize(categoryLabels[entity.category], locale)}</p>
        <h1>{localize(entity.name, locale)}</h1>
        <p>{localize(entity.summary, locale)}</p>
      </header>

      <div className="entity-detail__grid">
        <div className="entity-detail__content">
          {entity.position ? (
            <section>
              <h2>{localize(uiText.position, locale)}</h2>
              <p>{localize(entity.position, locale)}</p>
            </section>
          ) : null}
          {entity.functions?.length ? (
            <section>
              <h2>{localize(uiText.keyFunctions, locale)}</h2>
              <ul>{entity.functions.map((item) => <li key={item.vi}>{localize(item, locale)}</li>)}</ul>
            </section>
          ) : null}
          {entity.structure?.length ? (
            <section>
              <h2>{localize(uiText.structure, locale)}</h2>
              <ul>{entity.structure.map((item) => <li key={item.vi}>{localize(item, locale)}</li>)}</ul>
            </section>
          ) : null}
          {entity.formation ? (
            <section>
              <h2>{localize(uiText.formation, locale)}</h2>
              <p>{localize(entity.formation, locale)}</p>
            </section>
          ) : null}
          {entity.term ? (
            <section>
              <h2>{localize(uiText.term, locale)}</h2>
              <p>{localize(entity.term, locale)}</p>
            </section>
          ) : null}
          {entity.accountability ? (
            <section>
              <h2>{localize(uiText.accountability, locale)}</h2>
              <p>{localize(entity.accountability, locale)}</p>
            </section>
          ) : null}
          {entity.relatedEntityIds.length ? (
            <section>
              <h2>{localize(uiText.relatedEntities, locale)}</h2>
              <div className="related-entity-links">
                {entity.relatedEntityIds.flatMap((entityId) => {
                  const related = allEntityById.get(entityId);
                  if (!related) return [];
                  return [
                    <Link href={entityPath(locale, related.slug[locale])} key={related.id}>
                      {localize(related.name, locale)}
                    </Link>,
                  ];
                })}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </article>
  );
}
