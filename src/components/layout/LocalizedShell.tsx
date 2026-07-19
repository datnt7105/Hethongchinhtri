import type { ReactNode } from "react";
import type { Locale } from "@/types/common";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function LocalizedShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        {locale === "vi" ? "Chuyển đến nội dung" : "Skip to content"}
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} />
    </>
  );
}
