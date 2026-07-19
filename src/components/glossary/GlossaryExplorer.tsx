"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/types/common";
import type { GlossaryTerm } from "@/types/glossary";
import { localize } from "@/lib/i18n";
import { entityPath } from "@/lib/routes";
import { allEntityById } from "@/data/all-data";
import { uiText } from "@/data/site-content";
import { Icon } from "@/components/ui/Icon";

export function GlossaryExplorer({ locale, terms }: { locale: Locale; terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<GlossaryTerm | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const categories = useMemo(() => Array.from(new Set(terms.map((term) => term.category))), [terms]);

  useEffect(() => {
    const initialQuery = new URLSearchParams(window.location.search).get("q");
    if (initialQuery) setQuery(initialQuery);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(locale);
    return terms.filter((term) => {
      const matchesCategory = category === "all" || term.category === category;
      const haystack = `${term.term[locale]} ${term.shortDefinition[locale]}`.toLocaleLowerCase(locale);
      return matchesCategory && (!normalized || haystack.includes(normalized));
    });
  }, [category, locale, query, terms]);

  useEffect(() => {
    if (!selected) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <>
      <div className="glossary-toolbar">
        <label>
          <span>{localize(uiText.search, locale)}</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder={localize(uiText.searchGlossary, locale)}
            type="search"
            value={query}
          />
        </label>
        <label>
          <span>{localize(uiText.filterCategory, locale)}</span>
          <select onChange={(event) => setCategory(event.target.value)} value={category}>
            <option value="all">{localize(uiText.all, locale)}</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>

      {results.length ? (
        <div className="glossary-grid">
          {results.map((term) => (
            <article className="glossary-card" key={term.id}>
              <span>{term.category}</span>
              <h2>{localize(term.term, locale)}</h2>
              <p>{localize(term.shortDefinition, locale)}</p>
              <button onClick={() => setSelected(term)} type="button">
                {localize(uiText.readDefinition, locale)} <Icon name="arrow" size={15} />
              </button>
            </article>
          ))}
        </div>
      ) : <p className="empty-state">{localize(uiText.noResults, locale)}</p>}

      {selected ? (
        <div className="modal-backdrop" onMouseDown={() => setSelected(null)}>
          <section
            aria-labelledby="glossary-modal-title"
            aria-modal="true"
            className="entity-modal glossary-modal"
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
          >
            <header className="entity-modal__header">
              <div>
                <p className="modal-kicker">{selected.category}</p>
                <h2 id="glossary-modal-title">{localize(selected.term, locale)}</h2>
              </div>
              <button aria-label={localize(uiText.close, locale)} className="icon-button" onClick={() => setSelected(null)} ref={closeRef} type="button">
                <Icon name="close" size={20} />
              </button>
            </header>
            <div className="entity-modal__body">
              <p className="entity-summary">{localize(selected.fullDefinition ?? selected.shortDefinition, locale)}</p>
              {selected.relatedEntityIds.length ? (
                <section>
                  <h3>{localize(uiText.relatedEntities, locale)}</h3>
                  <div className="related-entity-links">
                    {selected.relatedEntityIds.flatMap((entityId) => {
                      const entity = allEntityById.get(entityId);
                      return entity ? [<Link href={entityPath(locale, entity.slug[locale])} key={entity.id}>{localize(entity.name, locale)}</Link>] : [];
                    })}
                  </div>
                </section>
              ) : null}
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
