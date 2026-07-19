import type { Locale } from "@/types/common";
import { RelationshipDirectory } from "@/components/explorer/RelationshipDirectory";

export function RelationshipsPage({ locale }: { locale: Locale }) {
  return (
    <article className="relationships-page">
      <div className="shell">
        <header className="relationships-page__hero">
          <p className="section-label">{locale === "vi" ? "Bản đồ quan hệ" : "Relationship map"}</p>
          <h1>{locale === "vi" ? "Quan hệ trong hệ thống chính trị" : "Relationships in the political system"}</h1>
          <p>{locale === "vi" ? "Lọc theo loại quan hệ, chọn một chủ thể và đọc ý nghĩa của từng kết nối. Mỗi mối quan hệ được trình bày độc lập để tránh nhầm lẫn về cấp trên, cấp dưới." : "Filter by relationship type, choose an organization or institution, and read what each connection means. Each relationship is presented independently to avoid implying a hierarchy."}</p>
        </header>
        <RelationshipDirectory locale={locale} />
      </div>
    </article>
  );
}
