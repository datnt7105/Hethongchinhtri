import { localize } from "@/lib/i18n";
import type { Locale } from "@/types/common";
import { legalSourceById } from "@/data/legal-sources";
import { uiText } from "@/data/site-content";
import { Icon } from "@/components/ui/Icon";

export function SourceBadge({ sourceId, locale }: { sourceId: string; locale: Locale }) {
  const source = legalSourceById.get(sourceId);
  if (!source) return null;

  return (
    <details className="source-badge">
      <summary>[{source.id}]</summary>
      <div className="source-popover">
        <p className="source-popover__type">
          {source.documentNumber ?? source.documentType}
        </p>
        <strong>{localize(source.title, locale)}</strong>
        <span>{localize(source.issuingAuthority, locale)}</span>
        <span>
          {localize(uiText.reviewed, locale)}: {source.accessedAt}
        </span>
        <a href={source.officialUrl} rel="noreferrer" target="_blank">
          {localize(uiText.officialDocument, locale)}
          <Icon name="external" size={14} />
        </a>
      </div>
    </details>
  );
}

