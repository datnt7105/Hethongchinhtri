"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Locale } from "@/types/common";
import { localize } from "@/lib/i18n";
import type { LeadershipArchive, LeadershipProfile } from "@/data/institution-pages";

function yearsIn(value: string) {
  return value.match(/(?:18|19|20)\d{2}/g)?.map(Number) ?? [];
}

function profilesInPeriod(profiles: LeadershipProfile[], archive: LeadershipArchive, periodIndex: number, locale: Locale) {
  const period = archive.periods[periodIndex];
  if (!period) return profiles;
  const periodCopy = `${localize(period.label, locale)} ${localize(period.note, locale)}`;
  const years = yearsIn(periodCopy);
  if (!years.length) return profiles;
  const from = years[0];
  const to = years[1] ?? Number.POSITIVE_INFINITY;
  return profiles.filter((person) => {
    const tenureCopy = [person.startDisplay, person.endDisplay]
      .filter(Boolean)
      .map((value) => localize(value!, locale))
      .join(" ");
    return yearsIn(tenureCopy).some((year) => year >= from && year <= to);
  });
}

function initials(fullName: string) {
  const words = fullName.trim().split(/\s+/).filter(Boolean);
  return words.length ? words.at(-1)!.slice(0, 1).toLocaleUpperCase("vi") : "?";
}

function tenureLabel(person: LeadershipProfile, locale: Locale) {
  const start = localize(person.startDisplay, locale);
  const end = person.endDisplay ? localize(person.endDisplay, locale) : "";
  return end ? `${start}–${end}` : start;
}

function summaryLabel(person: LeadershipProfile, locale: Locale) {
  const honorific = locale === "vi" ? "Đồng chí" : "Comrade";
  const updating = locale === "vi" ? "Nội dung đang được cập nhật." : "Content is being updated.";

  if (!person.summary) return `${honorific} ${person.fullName}: ${updating}`;

  const summary = localize(person.summary, locale).trim();
  if (!summary) return `${honorific} ${person.fullName}: ${updating}`;
  if (summary.startsWith(`${honorific} `)) return summary;
  if (summary.startsWith(person.fullName)) return `${honorific} ${summary}`;

  const description = `${summary.charAt(0).toLocaleLowerCase(locale)}${summary.slice(1)}`;
  return `${honorific} ${person.fullName}, ${description}`;
}

export function LeaderPortraitFrame({
  locale,
  person,
  variant,
}: {
  locale: Locale;
  person: LeadershipProfile;
  variant: "card" | "profile";
}) {
  return (
    <div className={`leader-portrait-frame leader-portrait-frame--${variant}${person.portraitUrl ? "" : " leader-portrait-frame--empty"}`}>
      {person.portraitUrl ? (
        <Image
          alt={person.fullName}
          fill
          sizes={variant === "profile" ? "(max-width: 860px) 92vw, 340px" : "(max-width: 700px) 92vw, 240px"}
          src={person.portraitUrl}
        />
      ) : (
        <>
          <strong aria-hidden="true">{initials(person.fullName)}</strong>
          <span>{locale === "vi" ? "Ảnh đang được cập nhật" : "Portrait being updated"}</span>
        </>
      )}
    </div>
  );
}

export function LeaderPeriodFilter({
  archive,
  locale,
  onChange,
  value,
}: {
  archive: LeadershipArchive;
  locale: Locale;
  onChange: (value: string) => void;
  value: string;
}) {
  return (
    <div className="leadership-filter" aria-label={locale === "vi" ? "Lọc theo giai đoạn" : "Filter by period"}>
      <span>{locale === "vi" ? "Giai đoạn" : "Period"}</span>
      <div>
        <button aria-pressed={value === "all"} onClick={() => onChange("all")} type="button">
          {locale === "vi" ? "Tất cả" : "All"}
        </button>
        {archive.periods.map((item, index) => (
          <button aria-pressed={value === String(index)} key={item.label.vi} onClick={() => onChange(String(index))} type="button">
            {localize(item.label, locale)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function LeaderCard({
  index,
  locale,
  onOpen,
  person,
  selected,
}: {
  index: number;
  locale: Locale;
  onOpen: () => void;
  person: LeadershipProfile;
  selected: boolean;
}) {
  return (
    <button
      aria-pressed={selected}
      className="leader-card"
      data-selected={selected || undefined}
      onClick={onOpen}
      type="button"
    >
      <span className="leader-card__index">{String(index + 1).padStart(2, "0")}</span>
      <LeaderPortraitFrame locale={locale} person={person} variant="card" />
      <span className="leader-card__name">{person.fullName}</span>
      <span className="leader-card__office">{localize(person.titleUsed, locale)}</span>
      <strong>{tenureLabel(person, locale)}</strong>
      <span className="leader-card__cta">
        {locale === "vi" ? "Xem hồ sơ" : "View profile"} <span aria-hidden="true">→</span>
      </span>
    </button>
  );
}

export function EmptyState({ locale }: { locale: Locale }) {
  return (
    <div className="leadership-empty" role="status">
      <p>{locale === "vi" ? "Nội dung đang được cập nhật." : "Content is being updated."}</p>
    </div>
  );
}

export function LeaderGrid({
  locale,
  onOpen,
  profiles,
  selectedId,
}: {
  locale: Locale;
  onOpen: (profileId: string) => void;
  profiles: LeadershipProfile[];
  selectedId?: string;
}) {
  if (!profiles.length) return <EmptyState locale={locale} />;

  return (
    <div className="leadership-archive__people">
      {profiles.map((person, index) => (
        <LeaderCard
          index={index}
          key={person.id}
          locale={locale}
          onOpen={() => onOpen(person.id)}
          person={person}
          selected={selectedId === person.id}
        />
      ))}
    </div>
  );
}

export function LeaderProfilePanel({
  locale,
  person,
}: {
  locale: Locale;
  person?: LeadershipProfile;
}) {
  const updating = locale === "vi" ? "Nội dung đang được cập nhật." : "Content is being updated.";

  if (!person) {
    return (
      <aside className="leader-profile leader-profile--empty" aria-live="polite" id="leader-profile" tabIndex={-1}>
        <p className="section-label">{locale === "vi" ? "Hồ sơ lãnh đạo" : "Leadership profile"}</p>
        <EmptyState locale={locale} />
      </aside>
    );
  }

  return (
    <aside className="leader-profile" aria-live="polite" id="leader-profile" tabIndex={-1}>
      <p className="section-label">{locale === "vi" ? "Hồ sơ lãnh đạo" : "Leadership profile"}</p>
      <LeaderPortraitFrame locale={locale} person={person} variant="profile" />
      <h3>{person.fullName}</h3>
      <dl>
        <div><dt>{locale === "vi" ? "Chức danh" : "Office"}</dt><dd>{localize(person.titleUsed, locale)}</dd></div>
        <div><dt>{locale === "vi" ? "Thời gian đảm nhiệm" : "Tenure"}</dt><dd>{tenureLabel(person, locale)}</dd></div>
      </dl>
      <section>
        <h4>{locale === "vi" ? "Tóm tắt" : "Summary"}</h4>
        <p>{summaryLabel(person, locale)}</p>
      </section>
      <section>
        <h4>{locale === "vi" ? "Các dấu mốc chính" : "Key milestones"}</h4>
        {person.milestones?.length ? (
          <ul>{person.milestones.map((milestone) => <li key={milestone.vi}>{localize(milestone, locale)}</li>)}</ul>
        ) : <p>{updating}</p>}
      </section>
    </aside>
  );
}

export function LeadershipArchiveSection({ archive, locale }: { archive: LeadershipArchive; locale: Locale }) {
  const verifiedProfiles = useMemo(
    () => archive.profiles.filter((person) => person.verificationStatus === "verified"),
    [archive.profiles],
  );
  const [period, setPeriod] = useState("all");
  const [selectedId, setSelectedId] = useState(verifiedProfiles[0]?.id ?? "");
  const visibleProfiles = useMemo(
    () => period === "all" ? verifiedProfiles : profilesInPeriod(verifiedProfiles, archive, Number(period), locale),
    [archive, locale, period, verifiedProfiles],
  );
  const selected = verifiedProfiles.find((person) => person.id === selectedId)
    ?? visibleProfiles[0]
    ?? verifiedProfiles[0];

  const changePeriod = (nextPeriod: string) => {
    const nextProfiles = nextPeriod === "all"
      ? verifiedProfiles
      : profilesInPeriod(verifiedProfiles, archive, Number(nextPeriod), locale);
    setPeriod(nextPeriod);
    setSelectedId(nextProfiles[0]?.id ?? "");
  };

  const openProfile = (profileId: string) => {
    setSelectedId(profileId);
    if (window.matchMedia("(max-width: 860px)").matches) {
      window.requestAnimationFrame(() => {
        const profile = document.getElementById("leader-profile");
        profile?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
        profile?.focus({ preventScroll: true });
      });
    }
  };

  return (
    <section className="leadership-archive" id={`lich-su-${archive.id}`}>
      <header className="leadership-archive__header">
        <div>
          <p className="section-label">{locale === "vi" ? "Lịch sử chức danh" : "Office history"}</p>
          <h2>{localize(archive.title, locale)}</h2>
        </div>
        <p>{localize(archive.lead, locale)}</p>
      </header>

      <LeaderPeriodFilter archive={archive} locale={locale} onChange={changePeriod} value={period} />

      <div className="leadership-directory">
        <LeaderGrid locale={locale} onOpen={openProfile} profiles={visibleProfiles} selectedId={selected?.id} />
        <LeaderProfilePanel locale={locale} person={selected} />
      </div>
    </section>
  );
}
