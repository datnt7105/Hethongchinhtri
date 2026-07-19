import Link from "next/link";
import type { Locale, LocalizedText } from "@/types/common";
import { localize } from "@/lib/i18n";
import { ariaText } from "@/data/site-content";

export type BreadcrumbItem = {
  label: LocalizedText;
  href?: string;
};

export function Breadcrumbs({ locale, items }: { locale: Locale; items: BreadcrumbItem[] }) {
  return (
    <nav aria-label={localize(ariaText.breadcrumb, locale)} className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label.vi}-${index}`}>
            {item.href ? <Link href={item.href}>{localize(item.label, locale)}</Link> : <span aria-current="page">{localize(item.label, locale)}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
