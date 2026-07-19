"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/types/common";
import { otherLocale } from "@/lib/i18n";
import { entityPath, routeFor, routeKeyFromPath } from "@/lib/routes";
import { allEntities } from "@/data/all-data";
import { systemSectionPath, systemSections } from "@/data/system-sections";
import { politicalSystemPortals, portalPath } from "@/data/political-system-portals";
import { institutionPages, institutionPath } from "@/data/institution-pages";

function equivalentEntityPath(pathname: string, targetLocale: Locale) {
  const match = pathname.match(/^\/(vi\/chu-the|en\/entity)\/([^/]+)$/);
  if (!match) return undefined;
  const currentLocale: Locale = pathname.startsWith("/en") ? "en" : "vi";
  const entity = allEntities.find(
    (item) => item.slug[currentLocale] === match[2],
  );
  return entity ? entityPath(targetLocale, entity.slug[targetLocale]) : undefined;
}

function equivalentSystemSectionPath(pathname: string, targetLocale: Locale) {
  const match = pathname.match(/^\/(vi\/thanh-phan|en\/components)\/([^/]+)$/);
  if (!match) return undefined;
  const currentLocale: Locale = pathname.startsWith("/en") ? "en" : "vi";
  const section = systemSections.find((item) => item.slug[currentLocale] === match[2]);
  return section ? systemSectionPath(section, targetLocale) : undefined;
}

function equivalentPortalPath(pathname: string, targetLocale: Locale) {
  const match = pathname.match(/^\/(vi|en)\/([^/]+)$/);
  if (!match) return undefined;
  const currentLocale = match[1] as Locale;
  const portal = politicalSystemPortals.find((item) => item.slug[currentLocale] === match[2]);
  if (!portal) return undefined;
  return portalPath(portal, targetLocale);
}

function equivalentInstitutionPath(pathname: string, targetLocale: Locale) {
  const match = pathname.match(/^\/(vi|en)\/[^/]+\/([^/]+)$/);
  if (!match) return undefined;
  const currentLocale = match[1] as Locale;
  const institution = institutionPages.find((item) => item.slug[currentLocale] === match[2]);
  return institution ? institutionPath(institution, targetLocale) : undefined;
}

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const targetLocale = otherLocale(locale);
  const routeKey = routeKeyFromPath(pathname);
  const href =
    equivalentEntityPath(pathname, targetLocale) ??
    equivalentSystemSectionPath(pathname, targetLocale) ??
    equivalentInstitutionPath(pathname, targetLocale) ??
    equivalentPortalPath(pathname, targetLocale) ??
    (routeKey ? routeFor(routeKey, targetLocale) : routeFor("home", targetLocale));

  return (
    <Link className="locale-switcher" href={href} hrefLang={targetLocale}>
      <span aria-hidden="true">{targetLocale.toUpperCase()}</span>
      <span className="sr-only">{locale === "vi" ? "Chuyển sang tiếng Anh" : "Switch to Vietnamese"}</span>
    </Link>
  );
}
