"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PortalEmblem } from "@/components/ui/PortalEmblem";
import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import {
  politicalSystemNodeById,
  politicalSystemNodes,
  politicalSystemPortals,
  portalPath,
  type PortalId,
} from "@/data/political-system-portals";

export function SystemOverviewExplorer({ locale }: { locale: Locale }) {
  const [selectedId, setSelectedId] = useState<PortalId>("state");
  const selectedPortal = politicalSystemPortals.find((portal) => portal.id === selectedId)!;
  const selectedNode = politicalSystemNodeById.get(selectedPortal.rootNodeId)!;
  const relationships = useMemo(
    () => politicalSystemNodes.flatMap((source) =>
      source.relationships
        .filter((relationship) => source.id === selectedNode.id || relationship.targetId === selectedNode.id)
        .map((relationship) => ({ source, relationship })),
    ),
    [selectedNode.id],
  );

  return (
    <div className="relationship-explorer">
      <div className="relationship-map" aria-label={locale === "vi" ? "Sơ đồ quan hệ tổng quan" : "Overview relationship map"}>
        <button
          aria-pressed={selectedId === "party"}
          className="relationship-node relationship-node--party relationship-node--leader"
          onClick={() => setSelectedId("party")}
          type="button"
        >
          <div className="relationship-node__meta">
            <span>01</span>
            <PortalEmblem
              className="relationship-node__emblem"
              portal={politicalSystemPortals[0]}
              sizes="68px"
            />
          </div>
          <strong>{localize(politicalSystemPortals[0].name, locale)}</strong>
          <small>{localize(politicalSystemPortals[0].roleLabel, locale)}</small>
        </button>

        <div className="relationship-map__leadership" aria-label={locale === "vi" ? "Hai thành phần chính dưới sự lãnh đạo của Đảng" : "Two principal components under Party leadership"}>
          {["state", "front"].map((id) => (
            <span key={id}><i aria-hidden="true" />{locale === "vi" ? "Lãnh đạo" : "Leads"}</span>
          ))}
        </div>

        <div className="relationship-map__lower">
          {politicalSystemPortals.slice(1, 3).map((portal) => (
            <button
              aria-pressed={selectedId === portal.id}
              className={`relationship-node relationship-node--${portal.id}`}
              key={portal.id}
              onClick={() => setSelectedId(portal.id)}
              type="button"
            >
              <div className="relationship-node__meta">
                <span>{portal.order}</span>
                <PortalEmblem
                  className="relationship-node__emblem"
                  portal={portal}
                  sizes="68px"
                />
              </div>
              <strong>{localize(portal.name, locale)}</strong>
              <small>{localize(portal.roleLabel, locale)}</small>
            </button>
          ))}
        </div>

        <div className="relationship-map__specialty">
          <p>{locale === "vi" ? "Chuyên đề Quốc phòng và An ninh · Đặt dưới sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng; đồng thời có cơ chế thống lĩnh, quản lý và chỉ huy theo chức năng của Nhà nước." : "Defence and security · Under the Party's absolute and direct leadership in every aspect, with command-in-chief, management and command exercised through the State's functions."}</p>
          <button
            aria-pressed={selectedId === "armed-forces"}
            className="relationship-node relationship-node--armed-forces relationship-node--specialty"
            onClick={() => setSelectedId("armed-forces")}
            type="button"
          >
            <div className="relationship-node__meta">
              <span>{politicalSystemPortals[3].order}</span>
              <PortalEmblem className="relationship-node__emblem" portal={politicalSystemPortals[3]} sizes="68px" />
            </div>
            <strong>{localize(politicalSystemPortals[3].name, locale)}</strong>
            <small>{localize(politicalSystemPortals[3].roleLabel, locale)}</small>
          </button>
        </div>

        <ul className="relationship-map__cross" aria-label={locale === "vi" ? "Các quan hệ chéo" : "Cross relationships"}>
          <li><strong>{locale === "vi" ? "Giám sát · Phản biện" : "Supervision · Social criticism"}</strong><span>{locale === "vi" ? "Mặt trận → Nhà nước" : "Front → State"}</span></li>
          <li><strong>{locale === "vi" ? "Quản lý nhà nước" : "State management"}</strong><span>{locale === "vi" ? "Nhà nước → Lực lượng vũ trang" : "State → Armed forces"}</span></li>
          <li><strong>{locale === "vi" ? "Thống lĩnh" : "Commander-in-chief"}</strong><span>{locale === "vi" ? "Chủ tịch nước → Lực lượng vũ trang" : "State President → Armed forces"}</span></li>
        </ul>
      </div>

      <aside className={`relationship-reading relationship-reading--${selectedPortal.id}`} aria-live="polite">
        <div className="relationship-reading__identity">
          <span>{localize(selectedPortal.roleLabel, locale)}</span>
          <PortalEmblem
            className="relationship-reading__emblem"
            portal={selectedPortal}
            sizes="88px"
          />
        </div>
        <h3>{localize(selectedPortal.name, locale)}</h3>
        <p>{localize(selectedPortal.introduction, locale)}</p>
        <div className="relationship-reading__relations">
          <strong>{locale === "vi" ? "Quan hệ trực tiếp" : "Direct relationships"}</strong>
          <ul>
            {relationships.slice(0, 4).map(({ source, relationship }) => {
              const relatedId = source.id === selectedNode.id ? relationship.targetId : source.id;
              const related = politicalSystemNodeById.get(relatedId);
              return related ? (
                <li key={`${source.id}-${relationship.targetId}-${relationship.type}`}>
                  <span>{localize(relationship.label, locale)}</span>
                  {localize(related.shortName ?? related.name, locale)}
                </li>
              ) : null;
            })}
          </ul>
        </div>
        <Link href={portalPath(selectedPortal, locale)}>
          {locale === "vi" ? "Xem nội dung chi tiết" : "Explore detailed content"} <span aria-hidden="true">→</span>
        </Link>
      </aside>
    </div>
  );
}
