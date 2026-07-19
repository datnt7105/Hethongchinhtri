"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/types/common";
import { routeFor } from "@/lib/routes";
import { Icon } from "@/components/ui/Icon";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const labels = locale === "vi"
    ? { overview: "Tổng quan", explore: "Khám phá hệ thống", history: "Lịch sử", glossary: "Thuật ngữ", search: "Tìm kiếm", menu: "Mở menu", close: "Đóng menu" }
    : { overview: "Overview", explore: "Explore the system", history: "History", glossary: "Glossary", search: "Search", menu: "Open menu", close: "Close menu" };

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: `/${locale}`, label: labels.overview },
    { href: routeFor("relationships", locale), label: labels.explore },
    { href: routeFor("history", locale), label: labels.history },
    { href: routeFor("glossary", locale), label: labels.glossary },
  ];

  return (
    <header className="site-header">
      <div className="site-header__masthead shell">
        <span className="site-header__party-mark" aria-hidden="true">
          <Image alt="" height={60} priority src="/images/party-emblem.png" width={60} />
        </span>

        <Link className="wordmark" href={`/${locale}`}>
          <span className="wordmark__copy">
            <small>{locale === "vi" ? "NỀN TẢNG HỌC VÀ KHÁM PHÁ" : "LEARNING AND EXPLORATION PLATFORM"}</small>
            <strong>{locale === "vi" ? "Hệ thống chính trị Việt Nam" : "Vietnam Political System"}</strong>
          </span>
        </Link>

        <span className="site-header__crest" aria-hidden="true">
          <Image alt="" height={68} priority src="/images/national-emblem.png" width={68} />
        </span>
      </div>

      <div className="site-header__nav-band">
        <div className="site-header__inner shell">
          <nav aria-label={locale === "vi" ? "Điều hướng chính" : "Primary navigation"} className="main-nav">
            {links.map((link) => (
              <Link aria-current={pathname === link.href ? "page" : undefined} href={link.href} key={link.href}>{link.label}</Link>
            ))}
          </nav>

          <div className="header-actions">
            <form action={routeFor("glossary", locale)} className="header-search" role="search">
              <label className="sr-only" htmlFor={`site-search-${locale}`}>{labels.search}</label>
              <Icon name="search" size={16} />
              <input id={`site-search-${locale}`} name="q" placeholder={labels.search} type="search" />
            </form>
            <LocaleSwitcher locale={locale} />
            <ThemeToggle locale={locale} />
            <button aria-expanded={open} aria-label={open ? labels.close : labels.menu} className="icon-button menu-button" onClick={() => setOpen((value) => !value)} type="button">
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <nav aria-label={locale === "vi" ? "Điều hướng di động" : "Mobile navigation"} className="mobile-nav shell">
          <form action={routeFor("glossary", locale)} className="mobile-search" role="search">
            <label className="sr-only" htmlFor={`mobile-site-search-${locale}`}>{labels.search}</label>
            <Icon name="search" size={17} />
            <input id={`mobile-site-search-${locale}`} name="q" placeholder={labels.search} type="search" />
          </form>
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
      ) : null}
    </header>
  );
}
