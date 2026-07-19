"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Locale } from "@/types/common";
import type { Entity } from "@/types/entity";
import type { RouteKey } from "@/lib/routes";
import { localize } from "@/lib/i18n";
import { entityPath, routeFor } from "@/lib/routes";
import { categoryLabels, uiText } from "@/data/site-content";
import { Icon } from "@/components/ui/Icon";

type EntityModalProps = {
  entity: Entity;
  locale: Locale;
  onClose: () => void;
};

export function EntityModal({ entity, locale, onClose }: EntityModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const detailHref =
    entity.displayMode === "navigate" && entity.destinationRouteKey
      ? routeFor(entity.destinationRouteKey as RouteKey, locale)
      : entityPath(locale, entity.slug[locale]);

  const showDetailLink = entity.displayMode !== "modal";

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        aria-labelledby="entity-modal-title"
        aria-modal="true"
        className="entity-modal"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <header className="entity-modal__header">
          <div>
            <p className="modal-kicker">
              {localize(categoryLabels[entity.category], locale)}
            </p>
            <h2 id="entity-modal-title">{localize(entity.name, locale)}</h2>
          </div>
          <button
            aria-label={localize(uiText.close, locale)}
            className="icon-button"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="entity-modal__body">
          <p className="entity-summary">{localize(entity.summary, locale)}</p>

          {entity.position ? (
            <section>
              <h3>{localize(uiText.position, locale)}</h3>
              <p>{localize(entity.position, locale)}</p>
            </section>
          ) : null}

          {entity.functions?.length ? (
            <section>
              <h3>{localize(uiText.keyFunctions, locale)}</h3>
              <ul>
                {entity.functions.slice(0, 5).map((item) => (
                  <li key={item.vi}>{localize(item, locale)}</li>
                ))}
              </ul>
            </section>
          ) : null}

        </div>

        {showDetailLink ? (
          <footer className="entity-modal__footer">
            <Link className="button button--primary button--block" href={detailHref}>
              {entity.displayMode === "navigate"
                ? localize(uiText.openStateApparatus, locale)
                : localize(uiText.viewDetails, locale)}
              <Icon name="arrow" size={17} />
            </Link>
          </footer>
        ) : null}
      </section>
    </div>
  );
}
