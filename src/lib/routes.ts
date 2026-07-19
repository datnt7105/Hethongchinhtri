import type { Locale } from "@/types/common";

export type RouteKey =
  | "home"
  | "political-system"
  | "relationships"
  | "state-apparatus"
  | "central"
  | "local"
  | "administrative-map"
  | "history"
  | "glossary"
  | "legal-sources"
  | "about";

export type RouteDefinition = {
  key: RouteKey;
  vi: string;
  en: string;
};

export const routeDefinitions: RouteDefinition[] = [
  { key: "home", vi: "/vi", en: "/en" },
  {
    key: "political-system",
    vi: "/vi/he-thong-chinh-tri",
    en: "/en/political-system",
  },
  {
    key: "relationships",
    vi: "/vi/quan-he-trong-he-thong-chinh-tri",
    en: "/en/relationships-in-the-political-system",
  },
  {
    key: "state-apparatus",
    vi: "/vi/bo-may-nha-nuoc",
    en: "/en/state-apparatus",
  },
  {
    key: "central",
    vi: "/vi/bo-may-nha-nuoc/trung-uong",
    en: "/en/state-apparatus/central",
  },
  {
    key: "local",
    vi: "/vi/bo-may-nha-nuoc/dia-phuong",
    en: "/en/state-apparatus/local",
  },
  {
    key: "administrative-map",
    vi: "/vi/ban-do-hanh-chinh",
    en: "/en/administrative-map",
  },
  { key: "history", vi: "/vi/lich-su", en: "/en/history" },
  { key: "glossary", vi: "/vi/thuat-ngu", en: "/en/glossary" },
  {
    key: "legal-sources",
    vi: "/vi/nguon-phap-ly",
    en: "/en/legal-sources",
  },
  { key: "about", vi: "/vi/gioi-thieu", en: "/en/about" },
];

export function routeFor(key: RouteKey, locale: Locale): string {
  const route = routeDefinitions.find((item) => item.key === key);
  if (!route) return `/${locale}`;
  return route[locale];
}

export function routeKeyFromPath(pathname: string): RouteKey | undefined {
  return routeDefinitions.find(
    (route) => route.vi === pathname || route.en === pathname,
  )?.key;
}

export function entityPath(locale: Locale, slug: string): string {
  return locale === "vi" ? `/vi/chu-the/${slug}` : `/en/entity/${slug}`;
}
