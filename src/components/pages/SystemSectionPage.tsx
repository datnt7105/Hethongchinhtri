import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import { routeFor } from "@/lib/routes";
import { systemSectionPath, systemSections, type SystemSection } from "@/data/system-sections";

const detailCopy = {
  back: { vi: "Trở về tổng quan", en: "Back to overview" },
  onThisPage: { vi: "Trong trang này", en: "On this page" },
  keyPoints: { vi: "Điểm cần nhớ", en: "Key points" },
  updated: { vi: "Cập nhật nội dung", en: "Content update" },
  sources: { vi: "Nguồn tham khảo chính thức", en: "Official references" },
  sourcesLead: {
    vi: "Nội dung tóm tắt phục vụ mục đích tìm hiểu. Văn bản gốc là căn cứ tham khảo chính thức.",
    en: "Summaries are for learning purposes. Original documents remain the official references.",
  },
  more: { vi: "Tiếp tục khám phá", en: "Keep exploring" },
  open: { vi: "Xem mục", en: "View component" },
  nav: { vi: "Các thành phần của hệ thống", en: "System components" },
};

export function SystemSectionPage({ locale, section }: { locale: Locale; section: SystemSection }) {
  return (
    <article className={`system-detail system-detail--${section.id}`}>
      <div className="shell">
        <nav aria-label={localize(detailCopy.nav, locale)} className="pillar-quick-nav">
          <Link href={routeFor("home", locale)}>{locale === "vi" ? "Tổng quan" : "Overview"}</Link>
          {systemSections.map((item) => (
            <Link
              aria-current={item.id === section.id ? "page" : undefined}
              href={systemSectionPath(item, locale)}
              key={item.id}
            >
              {localize(item.navLabel, locale)}
            </Link>
          ))}
        </nav>

        <header className="system-detail__hero">
          {section.image ? (
            <div className={`system-detail__hero-media${section.image.fit === "contain" ? " system-detail__hero-media--contain" : ""}`}>
              <Image
                alt={localize(section.image.alt, locale)}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 1200px"
                src={section.image.heroSrc ?? section.image.src}
                unoptimized
              />
            </div>
          ) : null}
          <span className="system-detail__hero-veil" aria-hidden="true" />
          <div className="system-detail__hero-copy">
            <Link className="system-detail__back" href={routeFor("home", locale)}>
              <span aria-hidden="true">←</span> {localize(detailCopy.back, locale)}
            </Link>
            <p className="system-detail__kicker">{localize(section.kicker, locale)}</p>
            <h1>{localize(section.title, locale)}</h1>
            <p className="system-detail__lead">{localize(section.summary, locale)}</p>
          </div>
          <div className="system-detail__identity">
            <span aria-hidden="true">{section.monogram}</span>
            <small>{section.order} / 06</small>
          </div>
          {section.image?.credit && section.image.sourceHref ? (
            <a
              className="system-detail__image-credit"
              href={section.image.sourceHref}
              rel="noreferrer"
              target="_blank"
            >
              {localize(section.image.credit, locale)} ↗
            </a>
          ) : null}
        </header>

        <div className="system-detail__intro">
          <p>{localize(section.introduction, locale)}</p>
          <div>
            <span>{localize(detailCopy.keyPoints, locale)}</span>
            <ul>
              {section.keyPoints.map((point) => (
                <li key={point.vi}>{localize(point, locale)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="system-detail__layout">
          <aside className="system-detail__toc">
            <span>{localize(detailCopy.onThisPage, locale)}</span>
            <ol>
              {section.levels.map((level, index) => (
                <li key={level.title.vi}>
                  <a href={`#muc-${index + 1}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {localize(level.title, locale)}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="system-detail__levels">
            {section.levels.map((level, index) => (
              <section id={`muc-${index + 1}`} key={level.title.vi}>
                <div className="system-detail__level-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h2>{localize(level.title, locale)}</h2>
                  <p>{localize(level.description, locale)}</p>
                  <ul>
                    {level.items.map((item) => (
                      <li key={item.vi}>{localize(item, locale)}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}

            {section.updateNote ? (
              <aside className="system-detail__update">
                <span>{localize(detailCopy.updated, locale)}</span>
                <p>{localize(section.updateNote, locale)}</p>
              </aside>
            ) : null}
          </div>
        </div>

        <section className="system-detail__sources">
          <div>
            <p className="overview-kicker">{localize(detailCopy.sources, locale)}</p>
            <p>{localize(detailCopy.sourcesLead, locale)}</p>
          </div>
          <ul>
            {section.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} rel="noreferrer" target="_blank">
                  {localize(source.label, locale)} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="system-detail__more">
          <header>
            <p className="overview-kicker">{localize(detailCopy.more, locale)}</p>
          </header>
          <div>
            {systemSections
              .filter((item) => item.id !== section.id)
              .map((item) => (
                <Link href={systemSectionPath(item, locale)} key={item.id}>
                  {item.image ? (
                    <span className={`system-detail__more-image${item.image.fit === "contain" ? " system-detail__more-image--contain" : ""}`}>
                      <Image
                        alt={localize(item.image.alt, locale)}
                        fill
                        sizes="(max-width: 560px) 100vw, (max-width: 1120px) 50vw, 20vw"
                        src={item.image.src}
                      />
                    </span>
                  ) : (
                    <span className="system-detail__more-monogram">{item.monogram}</span>
                  )}
                  <span className="system-detail__more-copy">
                    <strong>{localize(item.navLabel, locale)}</strong>
                    <small>{localize(detailCopy.open, locale)} →</small>
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </article>
  );
}
