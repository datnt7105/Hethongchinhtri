import type { Locale, LocalizedText } from "@/types/common";

export const locales: Locale[] = ["vi", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localize(value: LocalizedText, locale: Locale): string {
  return value[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "vi" ? "en" : "vi";
}

