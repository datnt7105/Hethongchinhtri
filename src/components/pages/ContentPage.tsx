import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import type { ContentPage as ContentPageData } from "@/data/page-content";

export function ContentPage({ locale, content }: { locale: Locale; content: ContentPageData }) {
  return (
    <div className="content-page shell section-space">
      <header className="page-header content-page__header">
        <p className="eyebrow">{localize(content.eyebrow, locale)}</p>
        <h1>{localize(content.title, locale)}</h1>
        <p>{localize(content.lead, locale)}</p>
      </header>

      <div className="content-sections">
        {content.sections.map((section, index) => (
          <section className="content-section" id={section.id} key={section.id}>
            <span className="content-section__index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{localize(section.title, locale)}</h2>
              <p>{localize(section.body, locale)}</p>
              {section.items?.length ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item.vi}>{localize(item, locale)}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
