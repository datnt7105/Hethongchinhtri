"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import { routeFor } from "@/lib/routes";
import { mapRegions } from "@/data/administrative-map";
import { uiText } from "@/data/site-content";
import { Icon } from "@/components/ui/Icon";

export function AdministrativeMap({ locale }: { locale: Locale }) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [activeId, setActiveId] = useState(mapRegions[0].id);
  const drag = useRef<{ pointerX: number; pointerY: number; panX: number; panY: number } | null>(null);
  const active = mapRegions.find((region) => region.id === activeId) ?? mapRegions[0];

  const startDrag = (event: ReactPointerEvent<SVGSVGElement>) => {
    if ((event.target as SVGElement).classList.contains("map-region")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { pointerX: event.clientX, pointerY: event.clientY, panX: pan.x, panY: pan.y };
  };
  const moveDrag = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (!drag.current) return;
    setPan({
      x: drag.current.panX + event.clientX - drag.current.pointerX,
      y: drag.current.panY + event.clientY - drag.current.pointerY,
    });
  };
  const endDrag = () => { drag.current = null; };
  const reset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  return (
    <div className="administrative-map-layout">
      <div className="map-canvas">
        <div className="map-controls">
          <button aria-label={localize(uiText.zoomIn, locale)} onClick={() => setZoom((value) => Math.min(2.2, value + 0.2))} type="button">+</button>
          <button aria-label={localize(uiText.zoomOut, locale)} onClick={() => setZoom((value) => Math.max(0.7, value - 0.2))} type="button">-</button>
          <button aria-label={localize(uiText.mapReset, locale)} onClick={reset} type="button">↺</button>
        </div>
        <svg
          aria-label={localize(uiText.conceptualMap, locale)}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          role="img"
          viewBox="0 0 360 620"
        >
          <g transform={`translate(${pan.x} ${pan.y}) scale(${zoom})`}>
            {mapRegions.map((region, index) => (
              <g key={region.id}>
                <path
                  aria-label={localize(region.name, locale)}
                  className={`map-region map-region--${index + 1}${activeId === region.id ? " is-active" : ""}`}
                  d={region.path}
                  onClick={() => setActiveId(region.id)}
                  onFocus={() => setActiveId(region.id)}
                  onMouseEnter={() => setActiveId(region.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") setActiveId(region.id);
                  }}
                  role="button"
                  tabIndex={0}
                />
                <text className="map-region-label" x={region.labelX} y={region.labelY}>
                  {localize(region.name, locale)}
                </text>
              </g>
            ))}
            <circle className="map-island" cx="298" cy="246" r="6" />
            <circle className="map-island" cx="314" cy="283" r="4" />
          </g>
        </svg>
        <span className="map-scale-note">{localize(uiText.conceptualMap, locale)}</span>
      </div>

      <aside className="map-detail-panel" aria-live="polite">
        <p className="eyebrow">{localize(uiText.currentInformation, locale)}</p>
        <h2>{localize(active.name, locale)}</h2>
        <p>{localize(active.description, locale)}</p>
        <div className="map-levels">
          <span>{localize(uiText.provincialLevel, locale)}</span>
          <span>{localize(uiText.communeLevel, locale)}</span>
        </div>
        <Link className="button button--primary" href={routeFor("local", locale)}>
          {localize(uiText.exploreLocalGovernment, locale)} <Icon name="arrow" size={16} />
        </Link>
      </aside>
    </div>
  );
}
