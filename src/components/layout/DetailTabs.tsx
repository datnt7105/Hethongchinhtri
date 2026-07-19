"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

export type DetailTab = {
  id: string;
  label: string;
  content: ReactNode;
};

function tabFromUrl(tabIds: Set<string>, fallback: string) {
  const requested = new URL(window.location.href).searchParams.get("tab");
  return requested && tabIds.has(requested) ? requested : fallback;
}

export function DetailTabs({
  ariaLabel,
  defaultTab,
  tabs,
}: {
  ariaLabel: string;
  defaultTab: string;
  tabs: DetailTab[];
}) {
  const tabIds = useMemo(() => new Set(tabs.map((tab) => tab.id)), [tabs]);
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    const syncFromUrl = () => setActiveTab(tabFromUrl(tabIds, defaultTab));
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [defaultTab, tabIds]);

  const activate = (tabId: string) => {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("tab", tabId);
    nextUrl.hash = "";
    window.history.pushState(null, "", nextUrl);
    setActiveTab(tabId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? tabs.length - 1
        : (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    if (!nextTab) return;
    event.preventDefault();
    activate(nextTab.id);
    document.getElementById(`tab-${nextTab.id}`)?.focus();
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content ?? tabs[0]?.content;

  return (
    <div className="detail-tabs">
      <nav
        aria-label={ariaLabel}
        className="portal-tabs"
        onKeyDown={handleKeyDown}
        role="tablist"
      >
        {tabs.map((tab) => (
          <a
            aria-controls={`panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            href={`?tab=${tab.id}`}
            id={`tab-${tab.id}`}
            key={tab.id}
            onClick={(event) => {
              event.preventDefault();
              activate(tab.id);
            }}
            role="tab"
            tabIndex={activeTab === tab.id ? 0 : -1}
          >
            {tab.label}
          </a>
        ))}
      </nav>

      <div
        aria-labelledby={`tab-${activeTab}`}
        className="detail-tab-panel"
        id={`panel-${activeTab}`}
        role="tabpanel"
        tabIndex={0}
      >
        {activeContent}
      </div>
    </div>
  );
}
