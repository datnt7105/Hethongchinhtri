"use client";

import type { Locale, LocalizedText } from "@/types/common";
import type { KnowledgeCardDefinition } from "@/data/knowledge-cards";
import { categoryLabels } from "@/data/site-content";
import { localize } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

const cardText: Record<string, LocalizedText> = {
  open: { vi: "Xem nội dung", en: "View content" },
  active: { vi: "Đang xem", en: "Viewing" },
};

export function KnowledgeCardGrid({
  cards,
  locale,
  onSelect,
  selectedEntityId,
}: {
  cards: KnowledgeCardDefinition[];
  locale: Locale;
  onSelect: (entityId: string) => void;
  selectedEntityId: string | null;
}) {
  return (
    <div className="knowledge-card-grid">
      {cards.map((card, index) => {
        const { entity } = card;
        const active =
          selectedEntityId === entity.id ||
          Boolean(selectedEntityId && card.memberEntityIds?.includes(selectedEntityId));
        const icon =
          entity.category === "people"
            ? "people"
            : entity.category === "state" || entity.category === "state-body"
              ? "institution"
              : "network";

        return (
          <button
            aria-controls="knowledge-detail-view"
            aria-pressed={active}
            className={`knowledge-card${active ? " is-active" : ""}`}
            key={card.id}
            onClick={() => onSelect(entity.id)}
            type="button"
          >
            <span className="knowledge-card__topline">
              <span className="knowledge-card__icon"><Icon name={icon} size={21} /></span>
              <span className="knowledge-card__index">{String(index + 1).padStart(2, "0")}</span>
            </span>
            <span className="knowledge-card__copy">
              <span className="knowledge-card__category">
                {localize(categoryLabels[entity.category], locale)}
              </span>
              <strong>{localize(card.title ?? entity.name, locale)}</strong>
              <p>{localize(card.summary ?? entity.summary, locale)}</p>
            </span>
            <span className="knowledge-card__cta">
              {localize(active ? cardText.active : cardText.open, locale)}
              <Icon name="arrow" size={15} />
            </span>
          </button>
        );
      })}
    </div>
  );
}
