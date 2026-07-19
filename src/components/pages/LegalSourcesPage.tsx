import type { Locale, LocalizedText } from "@/types/common";
import { localize } from "@/lib/i18n";
import { legalSources } from "@/data/legal-sources";
import { legalSourcesPageContent } from "@/data/page-content";
import { uiText } from "@/data/site-content";
import { Icon } from "@/components/ui/Icon";

const referenceTypeLabels: Record<string, LocalizedText> = {
  constitution: { vi: "Hiến pháp", en: "Constitution" },
  resolution: { vi: "Nghị quyết", en: "Resolution" },
  law: { vi: "Luật", en: "Law" },
  "party-charter": { vi: "Điều lệ", en: "Charter" },
  "official-overview": { vi: "Trang thông tin chính thức", en: "Official information page" },
  "leadership-archive": { vi: "Hồ sơ lãnh đạo", en: "Leadership archive" },
};

export function LegalSourcesPage({ locale }: { locale: Locale }) {
  return (
    <div className="sources-page shell section-space">
      <header className="page-header content-page__header">
        <p className="eyebrow">{localize(legalSourcesPageContent.eyebrow, locale)}</p>
        <h1>{localize(legalSourcesPageContent.title, locale)}</h1>
        <p>{localize(legalSourcesPageContent.lead, locale)}</p>
      </header>

      <div className="source-library-grid">
        {legalSources.map((source) => (
          <article className="source-card" key={source.id}>
            <header>
              <span>[{source.id}]</span>
              <small>
                {source.documentNumber
                  ?? localize(
                    referenceTypeLabels[source.documentType]
                      ?? { vi: "Nguồn chính thức", en: "Official source" },
                    locale,
                  )}
              </small>
            </header>
            <h2>{localize(source.title, locale)}</h2>
            <dl>
              <div>
                <dt>{localize(legalSourcesPageContent.authority, locale)}</dt>
                <dd>{localize(source.issuingAuthority, locale)}</dd>
              </div>
              {source.issuedAt ? (
                <div>
                  <dt>{localize(legalSourcesPageContent.issued, locale)}</dt>
                  <dd>{source.issuedAt}</dd>
                </div>
              ) : null}
              {source.effectiveAt ? (
                <div>
                  <dt>{localize(legalSourcesPageContent.effective, locale)}</dt>
                  <dd>{source.effectiveAt}</dd>
                </div>
              ) : null}
              <div>
                <dt>{localize(legalSourcesPageContent.accessed, locale)}</dt>
                <dd>{source.accessedAt}</dd>
              </div>
            </dl>
            <a className="source-card__link" href={source.officialUrl} rel="noreferrer" target="_blank">
              {localize(uiText.openOfficialSource, locale)}
              <Icon name="external" size={16} />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
