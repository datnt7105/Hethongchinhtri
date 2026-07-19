import Image from "next/image";
import Link from "next/link";
import type { Locale, LocalizedText } from "@/types/common";
import { localize } from "@/lib/i18n";
import {
  politicalSystemNodeById,
  politicalSystemNodes,
  politicalSystemPortals,
  portalPath,
} from "@/data/political-system-portals";
import {
  institutionPages,
  institutionPath,
  type InstitutionPage,
} from "@/data/institution-pages";
import { PortalEmblem } from "@/components/ui/PortalEmblem";
import { SystemTreeExplorer } from "@/components/explorer/SystemTreeExplorer";
import { LeadershipArchiveSection } from "@/components/leadership/LeadershipArchiveSection";

type InstitutionThemeImage = {
  src: string;
  credit?: LocalizedText;
  sourceHref?: string;
};

const institutionThemeImages: Partial<Record<InstitutionPage["id"], InstitutionThemeImage>> = {
  "national-assembly": {
    src: "/images/themes/national-assembly-house.jpeg",
    credit: { vi: "Ảnh: Hoàng Hà · VietNamNet", en: "Photo: Hoàng Hà · VietNamNet" },
    sourceHref: "https://vietnamnet.vn/giai-the-ban-chi-dao-xay-dung-nha-quoc-hoi-2382164.html",
  },
  "state-president": {
    src: "/images/themes/state-president-palace.png",
  },
  government: {
    src: "/images/themes/government-building-sharp.png",
  },
};

function collectDescendantIds(rootId: string) {
  const ids = new Set([rootId]);
  let changed = true;
  while (changed) {
    changed = false;
    politicalSystemNodes.forEach((node) => {
      if (node.parentId && ids.has(node.parentId) && !ids.has(node.id)) {
        ids.add(node.id);
        changed = true;
      }
    });
  }
  return Array.from(ids);
}

export function InstitutionDetailPage({ locale, page }: { locale: Locale; page: InstitutionPage }) {
  const statePortal = politicalSystemPortals.find((portal) => portal.id === "state")!;
  const rootNode = politicalSystemNodeById.get(page.nodeId)!;
  const visibleNodeIds = collectDescendantIds(page.nodeId);
  const themeImage = institutionThemeImages[page.id];

  return (
    <article className="institution-page portal-page--state">
      <div className="shell">
        <nav className="portal-breadcrumb" aria-label={locale === "vi" ? "Đường dẫn trang" : "Breadcrumb"}>
          <Link href={`/${locale}`}>{locale === "vi" ? "Trang chủ" : "Home"}</Link>
          <span aria-hidden="true">/</span>
          <Link href={portalPath(statePortal, locale)}>{localize(statePortal.name, locale)}</Link>
          <span aria-hidden="true">/</span>
          <span>{localize(page.title, locale)}</span>
        </nav>

        <header className={`institution-hero${themeImage ? " institution-hero--themed" : ""}`}>
          {themeImage ? (
            <Image
              alt=""
              className="institution-hero__theme-image"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1200px"
              src={themeImage.src}
              unoptimized
            />
          ) : null}
          {themeImage ? <span aria-hidden="true" className="institution-hero__theme-veil" /> : null}
          <div className="institution-hero__content">
            <p className="portal-kicker"><span>{page.order}</span>{localize(page.eyebrow, locale)}</p>
            <h1>{localize(page.title, locale)}</h1>
            <p>{localize(page.summary, locale)}</p>
          </div>
          <PortalEmblem className="institution-hero__emblem" portal={statePortal} sizes="120px" />
          {themeImage?.credit && themeImage.sourceHref ? (
            <a className="institution-hero__theme-credit" href={themeImage.sourceHref} rel="noreferrer" target="_blank">
              {localize(themeImage.credit, locale)} ↗
            </a>
          ) : null}
        </header>

        <nav className="portal-tabs" aria-label={locale === "vi" ? "Nội dung trang" : "Page sections"}>
          <a href="#tong-quan">{locale === "vi" ? "Tổng quan" : "Overview"}</a>
          <a href="#co-cau">{localize(page.structureTitle, locale)}</a>
          <a href={`#lich-su-${page.archive.id}`}>{locale === "vi" ? "Lãnh đạo qua các thời kỳ" : "Leadership history"}</a>
          <a href="#lien-quan">{locale === "vi" ? "Nội dung liên quan" : "Related content"}</a>
        </nav>

        <section className="institution-overview" id="tong-quan">
          <header>
            <p className="section-label">{locale === "vi" ? "Cấp 2 · Thiết chế" : "Level 2 · Institution"}</p>
            <h2>{locale === "vi" ? "Vị trí, vai trò và chức năng" : "Position, role and functions"}</h2>
          </header>
          <div>
            {page.overview.map((item, index) => (
              <article key={item.title.vi}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{localize(item.title, locale)}</h3>
                <p>{localize(item.description, locale)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="institution-structure" id="co-cau">
          <header>
            <p className="section-label">{locale === "vi" ? "Cấp 2–3 · Cơ quan và chức danh" : "Levels 2–3 · Bodies and offices"}</p>
            <h2>{localize(page.structureTitle, locale)}</h2>
            <p>{locale === "vi" ? "Chọn một mục trong cơ cấu để xem vị trí, vai trò và chức năng ở phần bên cạnh." : "Choose an item in the structure to view its position, role, and functions alongside it."}</p>
          </header>
          <SystemTreeExplorer
            initialNodeId={page.nodeId}
            locale={locale}
            nodes={politicalSystemNodes}
            portalId="state"
            visibleNodeIds={visibleNodeIds}
          />
        </section>

        <LeadershipArchiveSection archive={page.archive} locale={locale} />

        <section className="institution-related" id="lien-quan">
          <header>
            <p className="section-label">{locale === "vi" ? "Nội dung liên quan" : "Related content"}</p>
            <h2>{locale === "vi" ? "Tiếp tục trong khối Nhà nước" : "Continue exploring the State"}</h2>
          </header>
          <div>
            {institutionPages.filter((item) => item.id !== page.id).map((item) => (
              <Link href={institutionPath(item, locale)} key={item.id}>
                <span>{item.order}</span>
                <strong>{localize(item.title, locale)}</strong>
                <small>{localize(item.eyebrow, locale)} →</small>
              </Link>
            ))}
            <Link href={`${portalPath(statePortal, locale)}#node-${rootNode.id}`}>
              <span>02</span>
              <strong>{localize(statePortal.name, locale)}</strong>
              <small>{locale === "vi" ? "Trở về tổng quan Nhà nước" : "Back to the State overview"} →</small>
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
}
