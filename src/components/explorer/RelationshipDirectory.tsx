"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale, LocalizedText } from "@/types/common";
import { localize } from "@/lib/i18n";
import {
  politicalSystemNodeById,
  politicalSystemNodes,
  politicalSystemPortals,
  portalById,
  portalPath,
  type PortalRelationshipType,
} from "@/data/political-system-portals";

const filterLabels: Record<"all" | PortalRelationshipType, LocalizedText> = {
  all: { vi: "Tất cả", en: "All" },
  leads: { vi: "Lãnh đạo", en: "Leadership" },
  "belongs-to": { vi: "Thuộc", en: "Affiliation" },
  manages: { vi: "Quản lý", en: "Management" },
  commands: { vi: "Chỉ huy", en: "Command" },
  supervises: { vi: "Giám sát", en: "Supervision" },
  "coordinates-with": { vi: "Phối hợp", en: "Coordination" },
  represents: { vi: "Đại diện", en: "Representation" },
  "commander-in-chief": { vi: "Thống lĩnh", en: "Commander-in-chief" },
};

const edges = politicalSystemNodes.flatMap((source) =>
  source.relationships.map((relationship) => ({
    source,
    target: politicalSystemNodeById.get(relationship.targetId)!,
    relationship,
  })),
);

export function RelationshipDirectory({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<"all" | PortalRelationshipType>("all");
  const [selectedNodeId, setSelectedNodeId] = useState("party");
  const selectedNode = politicalSystemNodeById.get(selectedNodeId)!;
  const selectedPortal = portalById.get(selectedNode.category)!;
  const visibleEdges = filter === "all" ? edges : edges.filter((edge) => edge.relationship.type === filter);
  const selectedEdges = useMemo(
    () => edges.filter((edge) => edge.source.id === selectedNodeId || edge.target.id === selectedNodeId),
    [selectedNodeId],
  );

  return (
    <div className="relationship-directory">
      <div className="relationship-filter" aria-label={locale === "vi" ? "Lọc theo loại quan hệ" : "Filter by relationship type"}>
        {(["all", "leads", "belongs-to", "manages", "commands", "commander-in-chief", "supervises", "coordinates-with"] as const).map((type) => (
          <button aria-pressed={filter === type} key={type} onClick={() => setFilter(type)} type="button">
            {localize(filterLabels[type], locale)}
            <span>{type === "all" ? edges.length : edges.filter((edge) => edge.relationship.type === type).length}</span>
          </button>
        ))}
      </div>

      <div className="relationship-directory__layout">
        <div className="relationship-list">
          <div className="relationship-list__portals">
            {politicalSystemPortals.map((portal) => (
              <button aria-pressed={selectedNodeId === portal.rootNodeId} className={`relationship-portal-chip relationship-portal-chip--${portal.id}`} key={portal.id} onClick={() => setSelectedNodeId(portal.rootNodeId)} type="button">
                <span>{portal.order}</span>{localize(portal.name, locale)}
              </button>
            ))}
          </div>

          <div className="relationship-list__edges" aria-live="polite">
            {visibleEdges.map(({ source, target, relationship }, index) => (
              <div className="relationship-row" key={`${source.id}-${target.id}-${relationship.type}-${index}`}>
                <button onClick={() => setSelectedNodeId(source.id)} type="button">{localize(source.shortName ?? source.name, locale)}</button>
                <div><span>{localize(relationship.label, locale)}</span><i aria-hidden="true">→</i></div>
                <button onClick={() => setSelectedNodeId(target.id)} type="button">{localize(target.shortName ?? target.name, locale)}</button>
                <p>{localize(relationship.description, locale)}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className={`relationship-node-panel relationship-node-panel--${selectedNode.category}`}>
          <span>{localize(selectedPortal.roleLabel, locale)}</span>
          <h2>{localize(selectedNode.name, locale)}</h2>
          <p>{localize(selectedNode.summary, locale)}</p>
          <div>
            <strong>{locale === "vi" ? "Quan hệ đang hiển thị" : "Displayed relationships"}</strong>
            <ul>
              {selectedEdges.map(({ source, target, relationship }, index) => {
                const related = source.id === selectedNode.id ? target : source;
                return <li key={`${source.id}-${target.id}-${index}`}><span>{localize(relationship.label, locale)}</span>{localize(related.shortName ?? related.name, locale)}</li>;
              })}
            </ul>
          </div>
          <Link href={`${portalPath(selectedPortal, locale)}#node-${selectedNode.id}`}>
            {locale === "vi" ? "Đọc trang chi tiết" : "Read the detail page"} <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </div>
    </div>
  );
}
