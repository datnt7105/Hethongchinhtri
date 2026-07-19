import Link from "next/link";
import type { Locale } from "@/types/common";
import { legalSourceById } from "@/data/legal-sources";
import { localize } from "@/lib/i18n";
import { routeFor } from "@/lib/routes";

const featuredReferences = [
  { id: "S01", label: { vi: "Hiến pháp nước CHXHCN Việt Nam", en: "Constitution of the Socialist Republic of Vietnam" } },
  { id: "S11", label: { vi: "Điều lệ Đảng Cộng sản Việt Nam", en: "Charter of the Communist Party of Vietnam" } },
  { id: "S06", label: { vi: "Luật Tổ chức Quốc hội", en: "Law on Organization of the National Assembly" } },
  { id: "S05", label: { vi: "Luật Tổ chức Chính phủ", en: "Law on Organization of the Government" } },
  { id: "S12", label: { vi: "Luật Quốc phòng", en: "Law on National Defence" } },
  { id: "S13", label: { vi: "Luật Công an nhân dân", en: "Law on the People's Public Security Forces" } },
].flatMap((item) => {
  const source = legalSourceById.get(item.id);
  return source ? [{ ...item, href: source.officialUrl }] : [];
});

export function SiteFooter({ locale }: { locale: Locale }) {
  const labels = locale === "vi"
    ? {
        title: "Hệ thống chính trị Việt Nam",
        description: "Nền tảng tra cứu cơ cấu tổ chức, chức danh lãnh đạo và quan hệ giữa các thiết chế trong hệ thống chính trị Việt Nam.",
        references: "Nguồn tham khảo",
        copyright: "© 2026 HỆ THỐNG CHÍNH TRỊ VIỆT NAM — NỀN TẢNG TRA CỨU GIÁO DỤC",
        about: "Giới thiệu",
        library: "Thư viện nguồn",
        explore: "Khám phá hệ thống",
      }
    : {
        title: "Vietnam Political System",
        description: "A reference platform for organizational structures, leadership positions and relationships among institutions in Vietnam's political system.",
        references: "References",
        copyright: "© 2026 VIETNAM POLITICAL SYSTEM — EDUCATIONAL REFERENCE PLATFORM",
        about: "About",
        library: "Source library",
        explore: "Explore the system",
      };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <section className="footer-brand" aria-labelledby="footer-brand-title">
            <div className="footer-brand__heading">
              <span aria-hidden="true" className="footer-brand__star">☆</span>
              <Link href={routeFor("home", locale)} id="footer-brand-title">{labels.title}</Link>
            </div>
            <p>{labels.description}</p>
          </section>

          <nav aria-labelledby="footer-references-title" className="footer-reference-nav">
            <Link href={routeFor("legal-sources", locale)} id="footer-references-title">
              {labels.references}
            </Link>
            <div className="footer-reference-list">
              {featuredReferences.map((reference) => (
                <a href={reference.href} key={reference.id} rel="noreferrer" target="_blank">
                  <span aria-hidden="true">↗</span>
                  {localize(reference.label, locale)}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>{labels.copyright}</p>
          <nav aria-label={locale === "vi" ? "Liên kết cuối trang" : "Footer navigation"}>
            <Link href={routeFor("about", locale)}>{labels.about}</Link>
            <Link href={routeFor("legal-sources", locale)}>{labels.library}</Link>
            <Link href={routeFor("political-system", locale)}>{labels.explore}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
