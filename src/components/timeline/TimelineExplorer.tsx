"use client";

import { useState } from "react";
import type { Locale } from "@/types/common";
import type { TimelineEvent } from "@/types/timeline";
import { localize } from "@/lib/i18n";
import { uiText } from "@/data/site-content";

type TimelineFilter = "all" | TimelineEvent["category"];

export function TimelineExplorer({ locale, events }: { locale: Locale; events: TimelineEvent[] }) {
  const [filter, setFilter] = useState<TimelineFilter>("all");
  const filtered = events.filter((event) => filter === "all" || event.category === filter);

  return (
    <div className="timeline-explorer">
      <div className="timeline-filters" role="group" aria-label={localize(uiText.filterCategory, locale)}>
        {([
          ["all", uiText.all],
          ["constitution", uiText.constitution],
          ["administrative-reform", uiText.administrativeReform],
        ] as const).map(([value, label]) => (
          <button
            aria-pressed={filter === value}
            className={filter === value ? "is-active" : ""}
            key={value}
            onClick={() => setFilter(value)}
            type="button"
          >
            {localize(label, locale)}
          </button>
        ))}
      </div>

      <ol className="timeline-list">
        {filtered.map((event) => (
          <li className="timeline-event" key={event.id}>
            <time dateTime={event.date}>{event.date}</time>
            <div className="timeline-event__marker" aria-hidden="true" />
            <article>
              <span>{localize(event.category === "constitution" ? uiText.constitution : uiText.administrativeReform, locale)}</span>
              <h2>{localize(event.title, locale)}</h2>
              <p>{localize(event.summary, locale)}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
