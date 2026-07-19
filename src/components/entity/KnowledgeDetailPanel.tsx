"use client";

import Link from "next/link";
import type { Locale, LocalizedText } from "@/types/common";
import type { Entity } from "@/types/entity";
import type { Relationship } from "@/types/relationship";
import type { RouteKey } from "@/lib/routes";
import { entityPath, routeFor } from "@/lib/routes";
import { localize } from "@/lib/i18n";
import { categoryLabels, uiText } from "@/data/site-content";
import { Icon } from "@/components/ui/Icon";

const detailText: Record<string, LocalizedText> = {
  selectedLabel: { vi: "Nội dung đang xem", en: "Currently viewing" },
  definition: { vi: "Đây là gì?", en: "What is it?" },
  roles: { vi: "Vai trò chính", en: "Main roles" },
  operation: { vi: "Hoạt động như thế nào?", en: "How does it work?" },
  relationships: { vi: "Quan hệ với thành phần khác", en: "Relationships with other components" },
  example: { vi: "Ví dụ gần gũi", en: "Practical example" },
  misconceptions: { vi: "Điều dễ nhầm", en: "Common misconceptions" },
  relatedContent: { vi: "Tìm hiểu tiếp", en: "Continue exploring" },
  chooseRelated: { vi: "Chọn để xem nội dung này", en: "Select to view this content" },
};

export function KnowledgeDetailPanel({
  entity,
  entities,
  locale,
  onSelectEntity,
  relationships,
}: {
  entity?: Entity;
  entities: Entity[];
  locale: Locale;
  onSelectEntity: (entityId: string) => void;
  relationships: Relationship[];
}) {
  if (!entity) return null;

  const entityById = new Map(entities.map((item) => [item.id, item]));
  const directRelationships = relationships.filter(
    (relationship) =>
      relationship.sourceEntityId === entity.id || relationship.targetEntityId === entity.id,
  );
  const relatedEntities = entity.relatedEntityIds.flatMap((entityId) => {
    const related = entityById.get(entityId);
    return related ? [related] : [];
  });
  const definition = entity.definition ?? entity.position ?? entity.summary;
  const roles = entity.functions?.length ? entity.functions : entity.responsibilities ?? [];
  const hasOperation = Boolean(
    entity.structure?.length || entity.formation || entity.term || entity.accountability,
  );
  const detailHref =
    entity.displayMode === "navigate" && entity.destinationRouteKey
      ? routeFor(entity.destinationRouteKey as RouteKey, locale)
      : entityPath(locale, entity.slug[locale]);
  const showDetailLink = entity.displayMode !== "modal";
  const icon =
    entity.category === "people"
      ? "people"
      : entity.category === "state" || entity.category === "state-body"
        ? "institution"
        : "network";

  return (
    <article aria-labelledby="knowledge-detail-title" aria-live="polite" className="knowledge-detail" id="knowledge-detail-view">
      <header className="knowledge-detail__header">
        <div className={`knowledge-detail__icon knowledge-detail__icon--${entity.category}`}>
          <Icon name={icon} size={28} />
        </div>
        <div>
          <p className="knowledge-detail__kicker">
            {localize(detailText.selectedLabel, locale)}
            <span>{localize(categoryLabels[entity.category], locale)}</span>
          </p>
          <h2 id="knowledge-detail-title">{localize(entity.name, locale)}</h2>
          <p className="knowledge-detail__summary">{localize(entity.summary, locale)}</p>
        </div>
      </header>

      <section className="knowledge-detail__definition" aria-labelledby="knowledge-definition-title">
        <span>01</span>
        <div>
          <h3 id="knowledge-definition-title">{localize(detailText.definition, locale)}</h3>
          <p>{localize(definition, locale)}</p>
        </div>
      </section>

      <div className="knowledge-detail__layout">
        <div className="knowledge-detail__main">
          {roles.length ? (
            <section className="knowledge-section">
              <div className="knowledge-section__heading">
                <span>02</span>
                <h3>{localize(detailText.roles, locale)}</h3>
              </div>
              <ul className="knowledge-check-list">
                {roles.map((item) => <li key={item.vi}>{localize(item, locale)}</li>)}
              </ul>
            </section>
          ) : null}

          {hasOperation ? (
            <section className="knowledge-section">
              <div className="knowledge-section__heading">
                <span>03</span>
                <h3>{localize(detailText.operation, locale)}</h3>
              </div>
              <div className="knowledge-operation-grid">
                {entity.structure?.length ? (
                  <div>
                    <strong>{localize(uiText.structure, locale)}</strong>
                    <ul>{entity.structure.map((item) => <li key={item.vi}>{localize(item, locale)}</li>)}</ul>
                  </div>
                ) : null}
                {entity.formation ? (
                  <div>
                    <strong>{localize(uiText.formation, locale)}</strong>
                    <p>{localize(entity.formation, locale)}</p>
                  </div>
                ) : null}
                {entity.term ? (
                  <div>
                    <strong>{localize(uiText.term, locale)}</strong>
                    <p>{localize(entity.term, locale)}</p>
                  </div>
                ) : null}
                {entity.accountability ? (
                  <div>
                    <strong>{localize(uiText.accountability, locale)}</strong>
                    <p>{localize(entity.accountability, locale)}</p>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {entity.practicalExample ? (
            <section className="knowledge-section knowledge-section--example">
              <div className="knowledge-section__heading">
                <span>04</span>
                <h3>{localize(detailText.example, locale)}</h3>
              </div>
              <p>{localize(entity.practicalExample, locale)}</p>
            </section>
          ) : null}

          {entity.commonMisconceptions?.length ? (
            <aside className="knowledge-misconception">
              <div className="knowledge-section__heading">
                <span>!</span>
                <h3>{localize(detailText.misconceptions, locale)}</h3>
              </div>
              <ul>
                {entity.commonMisconceptions.map((item) => (
                  <li key={item.vi}>{localize(item, locale)}</li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>

        <aside className="knowledge-detail__aside">
          {directRelationships.length ? (
            <section className="knowledge-aside-section">
              <h3>{localize(detailText.relationships, locale)}</h3>
              <div className="knowledge-relationship-list">
                {directRelationships.map((relationship) => {
                  const relatedEntityId =
                    relationship.sourceEntityId === entity.id
                      ? relationship.targetEntityId
                      : relationship.sourceEntityId;
                  const relatedEntity = entityById.get(relatedEntityId);
                  if (!relatedEntity) return null;

                  return (
                    <button
                      aria-label={`${localize(detailText.chooseRelated, locale)}: ${localize(relatedEntity.name, locale)}`}
                      key={relationship.id}
                      onClick={() => onSelectEntity(relatedEntity.id)}
                      type="button"
                    >
                      <span>{localize(relationship.label, locale)}</span>
                      <strong>
                        {localize(relatedEntity.shortName ?? relatedEntity.name, locale)}
                        <Icon name="arrow" size={15} />
                      </strong>
                      <small>{localize(relationship.description, locale)}</small>
                    </button>
                  );
                })}
              </div>
            </section>
          ) : null}

          {relatedEntities.length ? (
            <section className="knowledge-aside-section">
              <h3>{localize(detailText.relatedContent, locale)}</h3>
              <div className="knowledge-related-links">
                {relatedEntities.map((relatedEntity) => (
                  <button key={relatedEntity.id} onClick={() => onSelectEntity(relatedEntity.id)} type="button">
                    {localize(relatedEntity.shortName ?? relatedEntity.name, locale)}
                    <Icon name="arrow" size={14} />
                  </button>
                ))}
              </div>
            </section>
          ) : null}
        </aside>
      </div>

      {showDetailLink ? (
        <footer className="knowledge-detail__footer">
          <Link className="button button--primary" href={detailHref}>
            {entity.displayMode === "navigate"
              ? localize(uiText.openStateApparatus, locale)
              : localize(uiText.viewDetails, locale)}
            <Icon name="arrow" size={16} />
          </Link>
        </footer>
      ) : null}
    </article>
  );
}
