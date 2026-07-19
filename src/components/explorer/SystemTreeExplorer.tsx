"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale, LocalizedText } from "@/types/common";
import { localize } from "@/lib/i18n";
import {
  politicalSystemNodeById,
  portalById,
  portalPath,
  type PoliticalSystemNode,
  type PortalId,
  type PortalRelationship,
} from "@/data/political-system-portals";
import { institutionPageByNodeId, institutionPages, institutionPath } from "@/data/institution-pages";

const copy: Record<string, LocalizedText> = {
  navigation: { vi: "Cơ cấu tổ chức", en: "Organization structure" },
  navigationHint: { vi: "Chọn từng mục để xem vai trò và chức năng", en: "Choose an item to view its role and functions" },
  definition: { vi: "Mô tả ngắn", en: "Short description" },
  role: { vi: "Vai trò", en: "Role" },
  functions: { vi: "Chức năng chính", en: "Main functions" },
  position: { vi: "Vị trí trong cơ cấu", en: "Position in the structure" },
  relationships: { vi: "Quan hệ với các bộ phận khác", en: "Relationships with other components" },
  misconception: { vi: "Điều thường bị hiểu nhầm", en: "Common misconception" },
  openRelated: { vi: "Mở nội dung liên quan", en: "Open related item" },
  history: { vi: "Lãnh đạo qua các thời kỳ", en: "Officeholders through history" },
  fullDetail: { vi: "Xem nội dung đầy đủ", en: "Open full detail" },
  organizationNode: { vi: "Cơ quan", en: "Body" },
  forceNode: { vi: "Lực lượng", en: "Force" },
  organizationLevelNode: { vi: "Cấp tổ chức", en: "Organization level" },
  titleNode: { vi: "Chức danh", en: "Leadership title" },
  groupNode: { vi: "Tổ chức", en: "Organization" },
  relatedNodes: { vi: "Nội dung liên quan", en: "Related items" },
};

type TreeRow = { node: PoliticalSystemNode; depth: number; hasChildren: boolean };
type DirectRelationship = {
  source: PoliticalSystemNode;
  target: PoliticalSystemNode;
  relationship: PortalRelationship;
};

function buildTreeRows(nodes: PoliticalSystemNode[], collapsedIds: Set<string>): TreeRow[] {
  const nodeIds = new Set(nodes.map((node) => node.id));
  const children = new Map<string, PoliticalSystemNode[]>();

  nodes.forEach((node) => {
    const parentId = node.parentId && nodeIds.has(node.parentId) ? node.parentId : "root";
    children.set(parentId, [...(children.get(parentId) ?? []), node]);
  });

  const rows: TreeRow[] = [];
  const visit = (parentId: string, depth: number) => {
    (children.get(parentId) ?? []).forEach((node) => {
      const hasChildren = (children.get(node.id) ?? []).length > 0;
      rows.push({ node, depth, hasChildren });
      if (!collapsedIds.has(node.id)) visit(node.id, depth + 1);
    });
  };
  visit("root", 0);
  return rows;
}

function nodeTypeLabel(node: PoliticalSystemNode, locale: Locale) {
  if (node.nodeType === "leadership-title") return locale === "vi" ? "Chức danh" : "Leadership title";
  if (node.nodeType === "organization-level") return locale === "vi" ? "Cấp tổ chức" : "Organization level";
  if (node.nodeType === "organization-group") return locale === "vi" ? "Nhóm tổ chức" : "Organization group";
  if (node.nodeType === "state-body") return locale === "vi" ? "Cơ quan" : "Body";
  if (node.nodeType === "armed-force") return locale === "vi" ? "Lực lượng" : "Force";
  if (node.nodeType === "social-political-organization") return locale === "vi" ? "Tổ chức thành viên" : "Member organization";
  return locale === "vi" ? "Tổ chức" : "Organization";
}

function nodeTypeIcon(node: PoliticalSystemNode) {
  if (node.nodeType === "leadership-title") return "♙";
  if (node.nodeType === "armed-force") return "◆";
  if (node.nodeType === "organization-level") return "◇";
  if (node.nodeType === "organization-group") return "▦";
  return "▣";
}

function getPath(node: PoliticalSystemNode): PoliticalSystemNode[] {
  const path: PoliticalSystemNode[] = [node];
  let parentId = node.parentId;
  const visited = new Set([node.id]);
  while (parentId && !visited.has(parentId)) {
    const parent = politicalSystemNodeById.get(parentId);
    if (!parent) break;
    path.unshift(parent);
    visited.add(parent.id);
    parentId = parent.parentId;
  }
  return path;
}

export function SystemTreeExplorer({
  locale,
  portalId,
  nodes,
  initialNodeId,
  parentOverrides,
  visibleNodeIds,
}: {
  locale: Locale;
  portalId: PortalId;
  nodes: PoliticalSystemNode[];
  initialNodeId: string;
  parentOverrides?: Record<string, string | undefined>;
  visibleNodeIds?: string[];
}) {
  const visibleSet = useMemo(() => visibleNodeIds ? new Set(visibleNodeIds) : null, [visibleNodeIds]);
  const treeNodes = useMemo(
    () => nodes
      .filter((node) => visibleSet ? visibleSet.has(node.id) : node.category === portalId)
      .map((node) => Object.prototype.hasOwnProperty.call(parentOverrides ?? {}, node.id)
        ? { ...node, parentId: parentOverrides?.[node.id] }
        : node)
      .sort((left, right) => visibleNodeIds
        ? visibleNodeIds.indexOf(left.id) - visibleNodeIds.indexOf(right.id)
        : 0),
    [nodes, parentOverrides, portalId, visibleNodeIds, visibleSet],
  );
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(() => new Set());
  const treeRows = useMemo(() => buildTreeRows(treeNodes, collapsedIds), [collapsedIds, treeNodes]);
  const [selectedId, setSelectedId] = useState(initialNodeId);
  const [hasInteracted, setHasInteracted] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const selected = politicalSystemNodeById.get(selectedId) ?? politicalSystemNodeById.get(initialNodeId)!;

  useEffect(() => {
    const hashId = window.location.hash.replace(/^#node-/, "");
    if (hashId && treeRows.some(({ node }) => node.id === hashId)) {
      setSelectedId(hashId);
      setHasInteracted(true);
    }
  }, [treeRows]);

  useEffect(() => {
    if (!hasInteracted || !window.matchMedia("(max-width: 860px)").matches) return;
    const frame = window.requestAnimationFrame(() => {
      panelRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hasInteracted, selectedId]);

  const selectNode = (nodeId: string) => {
    setSelectedId(nodeId);
    setHasInteracted(true);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#node-${nodeId}`);
  };

  const directRelationships = useMemo<DirectRelationship[]>(() => {
    const result: DirectRelationship[] = [];
    nodes.forEach((source) => {
      source.relationships.forEach((relationship) => {
        const target = politicalSystemNodeById.get(relationship.targetId);
        if (!target) return;
        if (source.id === selected.id || target.id === selected.id) {
          result.push({ source, target, relationship });
        }
      });
    });
    return result;
  }, [nodes, selected.id]);
  const relatedNodes = useMemo(
    () => selected.relatedNodeIds
      .map((nodeId) => politicalSystemNodeById.get(nodeId))
      .filter((node): node is PoliticalSystemNode => Boolean(node)),
    [selected],
  );
  const isVisibleInTree = (node: PoliticalSystemNode) => visibleSet ? visibleSet.has(node.id) : node.category === portalId;

  const path = getPath(selected);
  const institutionPage = institutionPageByNodeId.get(selected.id) ?? institutionPages.find((page) => page.archive.id === selected.leadershipHistoryId);
  const armedForcesPortal = portalById.get("armed-forces")!;
  const forceDetailHref = locale === "vi"
    ? ["peoples-army", "ministry-national-defence", "minister-national-defence"].includes(selected.id)
      ? `${portalPath(armedForcesPortal, locale)}/quan-doi-nhan-dan`
      : ["public-security-forces", "ministry-public-security", "minister-public-security", "public-security-specialized-forces", "people-security-force", "people-police-force", "public-security-provincial", "public-security-commune"].includes(selected.id)
        ? `${portalPath(armedForcesPortal, locale)}/cong-an-nhan-dan`
        : null
    : null;
  let historyHref: string | null = null;
  if (selected.leadershipHistoryId && institutionPage) {
    historyHref = `${institutionPath(institutionPage, locale)}#lich-su-${selected.leadershipHistoryId}`;
  } else if (selected.leadershipHistoryId === "general-secretary") {
    historyHref = "?tab=tong-bi-thu";
  } else if (selected.leadershipHistoryId === "front-central-committee-chair") {
    historyHref = "?tab=lanh-dao";
  } else if (selected.leadershipHistoryId === "minister-national-defence" && locale === "vi") {
    historyHref = `${portalPath(armedForcesPortal, locale)}/quan-doi-nhan-dan?tab=lanh-dao`;
  } else if (selected.leadershipHistoryId === "minister-public-security" && locale === "vi") {
    historyHref = `${portalPath(armedForcesPortal, locale)}/cong-an-nhan-dan?tab=lanh-dao`;
  } else if (selected.leadershipHistoryId) {
    historyHref = `#lich-su-${selected.leadershipHistoryId}`;
  }

  return (
    <div className="system-workspace">
      <aside className="system-tree" aria-label={localize(copy.navigation, locale)}>
        <div className="system-tree__heading">
          <p>{localize(copy.navigation, locale)}</p>
          <span>{localize(copy.navigationHint, locale)}</span>
        </div>
        <div className="system-tree__legend" aria-label={locale === "vi" ? "Chú giải loại nội dung" : "Item type legend"}>
          <span><i aria-hidden="true">▣</i>{localize(copy.organizationNode, locale)}</span>
          <span><i aria-hidden="true">▦</i>{localize(copy.groupNode, locale)}</span>
          <span><i aria-hidden="true">◆</i>{localize(copy.forceNode, locale)}</span>
          <span><i aria-hidden="true">◇</i>{localize(copy.organizationLevelNode, locale)}</span>
          <span><i aria-hidden="true">♙</i>{localize(copy.titleNode, locale)}</span>
        </div>
        <ul role="tree">
          {treeRows.map(({ node, depth, hasChildren }) => (
            <li aria-expanded={hasChildren ? !collapsedIds.has(node.id) : undefined} key={node.id} role="treeitem" aria-level={depth + 1}>
              <div className="system-tree__row" style={{ paddingLeft: 10 + depth * 20 }}>
                {hasChildren ? (
                  <button
                    aria-label={`${collapsedIds.has(node.id) ? locale === "vi" ? "Mở" : "Expand" : locale === "vi" ? "Thu gọn" : "Collapse"}: ${localize(node.name, locale)}`}
                    className="system-tree__expander"
                    onClick={() => setCollapsedIds((current) => {
                      const next = new Set(current);
                      if (next.has(node.id)) next.delete(node.id);
                      else next.add(node.id);
                      return next;
                    })}
                    type="button"
                  >
                    <span aria-hidden="true">{collapsedIds.has(node.id) ? "+" : "−"}</span>
                  </button>
                ) : <span className="system-tree__expander-spacer" />}
              <button
                aria-current={selected.id === node.id ? "true" : undefined}
                className={`system-tree__node system-tree__node--${node.nodeType}`}
                onClick={() => selectNode(node.id)}
                type="button"
              >
                <span className="system-tree__branch" aria-hidden="true">{nodeTypeIcon(node)}</span>
                <span>{localize(node.shortName ?? node.name, locale)}</span>
              </button>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <button
        aria-label={locale === "vi" ? "Đóng hồ sơ chi tiết" : "Close details"}
        className={`reading-panel__backdrop${hasInteracted ? " is-open" : ""}`}
        onClick={() => setHasInteracted(false)}
        type="button"
      />

      <article className={`reading-panel${hasInteracted ? " is-mobile-open" : ""}`} id={`node-${selected.id}`} ref={panelRef} tabIndex={-1}>
        <button className="reading-panel__mobile-close" onClick={() => setHasInteracted(false)} type="button">
          {locale === "vi" ? "Đóng" : "Close"} <span aria-hidden="true">×</span>
        </button>
        <header className="reading-panel__header">
          <span className={`node-type node-type--${selected.category}`}>
            {nodeTypeLabel(selected, locale)}
          </span>
          <h2>{localize(selected.name, locale)}</h2>
          <p>{localize(selected.summary, locale)}</p>
          {institutionPage || forceDetailHref || historyHref ? (
            <div className="reading-panel__actions">
              {institutionPage ? <Link className="node-detail-link" href={institutionPath(institutionPage, locale)}>{localize(copy.fullDetail, locale)} <span aria-hidden="true">→</span></Link> : null}
              {!institutionPage && forceDetailHref ? <Link className="node-detail-link" href={forceDetailHref}>{localize(copy.fullDetail, locale)} <span aria-hidden="true">→</span></Link> : null}
              {historyHref ? <Link className="node-history-link" href={historyHref}>{localize(copy.history, locale)} <span aria-hidden="true">↓</span></Link> : null}
            </div>
          ) : null}
        </header>

        <div className="reading-panel__body">
          <section>
            <div className="reading-panel__section-heading"><span>01</span><h3>{localize(copy.definition, locale)}</h3></div>
            <p>{localize(selected.summary, locale)}</p>
          </section>

          <section>
            <div className="reading-panel__section-heading"><span>02</span><h3>{localize(copy.role, locale)}</h3></div>
            <ul>{selected.role.map((item) => <li key={item.vi}>{localize(item, locale)}</li>)}</ul>
          </section>

          <section>
            <div className="reading-panel__section-heading"><span>03</span><h3>{localize(copy.functions, locale)}</h3></div>
            <ul>{selected.functions.map((item) => <li key={item.vi}>{localize(item, locale)}</li>)}</ul>
          </section>

          <section>
            <div className="reading-panel__section-heading"><span>04</span><h3>{localize(copy.position, locale)}</h3></div>
            <ol className="node-path">
              {path.map((item, index) => (
                <li key={item.id}>
                  {index > 0 ? <span aria-hidden="true">→</span> : null}
                  {localize(item.shortName ?? item.name, locale)}
                </li>
              ))}
            </ol>
          </section>

          {directRelationships.length ? (
            <section>
              <div className="reading-panel__section-heading"><span>05</span><h3>{localize(copy.relationships, locale)}</h3></div>
              <div className="direct-relationships">
                {directRelationships.map(({ source, target, relationship }) => {
                  const related = source.id === selected.id ? target : source;
                  const relatedPortal = portalById.get(related.category)!;
                  const isSamePortal = isVisibleInTree(related);
                  const content = (
                    <>
                      <span>{localize(relationship.label, locale)}</span>
                      <strong>{localize(related.shortName ?? related.name, locale)}</strong>
                      <small>{localize(relationship.description, locale)}</small>
                    </>
                  );

                  return isSamePortal ? (
                    <button key={`${source.id}-${target.id}-${relationship.type}`} onClick={() => selectNode(related.id)} type="button">
                      {content}
                    </button>
                  ) : (
                    <Link
                      aria-label={`${localize(copy.openRelated, locale)}: ${localize(related.name, locale)}`}
                      href={`${portalPath(relatedPortal, locale)}?tab=co-cau#node-${related.id}`}
                      key={`${source.id}-${target.id}-${relationship.type}`}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : null}

          {relatedNodes.length ? (
            <section>
              <div className="reading-panel__section-heading"><span>06</span><h3>{localize(copy.relatedNodes, locale)}</h3></div>
              <div className="related-node-list">
                {relatedNodes.map((related) => {
                  const relatedPortal = portalById.get(related.category)!;
                  const isSamePortal = isVisibleInTree(related);
                  return isSamePortal ? (
                    <button key={related.id} onClick={() => selectNode(related.id)} type="button">
                      <span>{nodeTypeLabel(related, locale)}</span>
                      <strong>{localize(related.shortName ?? related.name, locale)}</strong>
                    </button>
                  ) : (
                    <Link href={`${portalPath(relatedPortal, locale)}?tab=co-cau#node-${related.id}`} key={related.id}>
                      <span>{nodeTypeLabel(related, locale)}</span>
                      <strong>{localize(related.shortName ?? related.name, locale)}</strong>
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : null}

          {selected.commonMisconceptions?.length ? (
            <aside className="misconception-note">
              <div className="reading-panel__section-heading"><span>!</span><h3>{localize(copy.misconception, locale)}</h3></div>
              {selected.commonMisconceptions.map((item) => <p key={item.vi}>{localize(item, locale)}</p>)}
            </aside>
          ) : null}
        </div>

      </article>
    </div>
  );
}
