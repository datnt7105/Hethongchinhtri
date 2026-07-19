"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale, LocalizedText } from "@/types/common";
import type { Entity } from "@/types/entity";
import type { Relationship } from "@/types/relationship";
import type { KnowledgeCardDefinition } from "@/data/knowledge-cards";
import { localize } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { KnowledgeCardGrid } from "@/components/entity/KnowledgeCardGrid";
import { KnowledgeDetailPanel } from "@/components/entity/KnowledgeDetailPanel";

const explorerText: Record<string, LocalizedText> = {
  eyebrow: { vi: "Cẩm nang tương tác", en: "Interactive guide" },
  title: { vi: "Chọn chủ đề bạn muốn tìm hiểu", en: "Choose a topic to explore" },
  body: {
    vi: "Mỗi thẻ mở một phần giải thích ngắn gọn, có vai trò, mối quan hệ, ví dụ và nguồn liên quan. Bạn có thể đổi chủ đề bất cứ lúc nào mà không tải lại trang.",
    en: "Each card opens a concise explanation with roles, relationships, examples, and sources. Switch topics at any time without reloading the page.",
  },
  choose: { vi: "Chọn chủ đề", en: "Choose a topic" },
  chooseHint: {
    vi: "Bấm vào một thẻ để thay đổi nội dung bên cạnh.",
    en: "Select a card to change the content beside it.",
  },
  searchLabel: { vi: "Tìm nhanh trong danh sách", en: "Quick search" },
  searchPlaceholder: { vi: "Nhập tên cơ quan hoặc chủ thể...", en: "Search for an institution or entity..." },
  resultCount: { vi: "chủ đề", en: "topics" },
  noResults: { vi: "Không tìm thấy chủ đề phù hợp.", en: "No matching topics found." },
  clearSearch: { vi: "Xóa tìm kiếm", en: "Clear search" },
  stepOne: { vi: "Chọn", en: "Choose" },
  stepOneBody: { vi: "một chủ đề quan tâm", en: "a topic of interest" },
  stepTwo: { vi: "Đọc", en: "Read" },
  stepTwoBody: { vi: "giải thích theo từng mục", en: "the structured explanation" },
  stepThree: { vi: "Mở rộng", en: "Continue" },
  stepThreeBody: { vi: "qua quan hệ và nguồn", en: "through links and sources" },
};

type KnowledgeExplorerProps = {
  locale: Locale;
  entities: Entity[];
  relationships: Relationship[];
  ariaLabel: string;
  detailEntities?: Entity[];
  detailRelationships?: Relationship[];
  knowledgeCards?: KnowledgeCardDefinition[];
  compact?: boolean;
};

export function KnowledgeExplorer({
  locale,
  entities,
  relationships,
  ariaLabel,
  detailEntities,
  detailRelationships,
  knowledgeCards,
  compact = false,
}: KnowledgeExplorerProps) {
  const cards = useMemo<KnowledgeCardDefinition[]>(
    () => knowledgeCards ?? entities.map((entity) => ({ id: `knowledge-${entity.id}`, entity })),
    [entities, knowledgeCards],
  );
  const allEntities = useMemo(() => {
    const byId = new Map<string, Entity>();
    entities.forEach((entity) => byId.set(entity.id, entity));
    detailEntities?.forEach((entity) => byId.set(entity.id, entity));
    cards.forEach((card) => byId.set(card.entity.id, card.entity));
    return Array.from(byId.values());
  }, [cards, detailEntities, entities]);
  const allRelationships = useMemo(() => {
    const byId = new Map<string, Relationship>();
    (detailRelationships ?? relationships).forEach((relationship) => {
      byId.set(relationship.id, relationship);
    });
    return Array.from(byId.values());
  }, [detailRelationships, relationships]);
  const entityById = useMemo(
    () => new Map(allEntities.map((entity) => [entity.id, entity])),
    [allEntities],
  );
  const [selectedEntityId, setSelectedEntityId] = useState(cards[0]?.entity.id ?? null);
  const [query, setQuery] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);

  const filteredCards = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(locale);
    if (!normalizedQuery) return cards;

    return cards.filter((card) => {
      const searchableText = [
        localize(card.title ?? card.entity.name, locale),
        localize(card.summary ?? card.entity.summary, locale),
      ]
        .join(" ")
        .toLocaleLowerCase(locale);
      return searchableText.includes(normalizedQuery);
    });
  }, [cards, locale, query]);

  const selectedEntity = selectedEntityId ? entityById.get(selectedEntityId) : undefined;

  const selectEntity = (entityId: string) => {
    setSelectedEntityId(entityId);
    setHasInteracted(true);
  };

  useEffect(() => {
    if (!hasInteracted || !selectedEntityId) return;
    if (!window.matchMedia("(max-width: 980px)").matches) return;

    const frame = window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hasInteracted, selectedEntityId]);

  return (
    <section
      aria-label={ariaLabel}
      className={`knowledge-explorer${compact ? " knowledge-explorer--compact" : ""}`}
    >
      <header className="knowledge-explorer__intro">
        <div>
          <p className="eyebrow">{localize(explorerText.eyebrow, locale)}</p>
          <h2>{localize(explorerText.title, locale)}</h2>
          <p>{localize(explorerText.body, locale)}</p>
        </div>
        <ol className="knowledge-explorer__steps" aria-label={localize(explorerText.title, locale)}>
          {[
            [explorerText.stepOne, explorerText.stepOneBody],
            [explorerText.stepTwo, explorerText.stepTwoBody],
            [explorerText.stepThree, explorerText.stepThreeBody],
          ].map(([title, body], index) => (
            <li key={title.vi}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{localize(title, locale)}</strong>
                <small>{localize(body, locale)}</small>
              </div>
            </li>
          ))}
        </ol>
      </header>

      <div className="knowledge-explorer__workspace">
        <aside className="knowledge-explorer__catalog" aria-labelledby="knowledge-catalog-title">
          <div className="knowledge-explorer__catalog-heading">
            <div>
              <p className="eyebrow">{localize(explorerText.choose, locale)}</p>
              <h3 id="knowledge-catalog-title">{localize(explorerText.chooseHint, locale)}</h3>
            </div>
            <span>{filteredCards.length} {localize(explorerText.resultCount, locale)}</span>
          </div>

          <label className="knowledge-search">
            <span className="sr-only">{localize(explorerText.searchLabel, locale)}</span>
            <Icon name="search" size={18} />
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder={localize(explorerText.searchPlaceholder, locale)}
              type="search"
              value={query}
            />
          </label>

          {filteredCards.length ? (
            <KnowledgeCardGrid
              cards={filteredCards}
              locale={locale}
              onSelect={selectEntity}
              selectedEntityId={selectedEntityId}
            />
          ) : (
            <div className="knowledge-explorer__empty">
              <p>{localize(explorerText.noResults, locale)}</p>
              <button className="button button--quiet" onClick={() => setQuery("")} type="button">
                {localize(explorerText.clearSearch, locale)}
              </button>
            </div>
          )}
        </aside>

        <div className="knowledge-explorer__content" ref={detailRef}>
          <KnowledgeDetailPanel
            entities={allEntities}
            entity={selectedEntity}
            locale={locale}
            onSelectEntity={selectEntity}
            relationships={allRelationships}
          />
        </div>
      </div>
    </section>
  );
}
