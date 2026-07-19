import type { Metadata } from "next";
import "./globals.css";
import { LocaleDocument } from "@/components/layout/LocaleDocument";
import { assertPhaseOneData } from "@/data/validation";
import { assertPoliticalSystemPortalData } from "@/data/political-system-portals";

assertPhaseOneData();
assertPoliticalSystemPortalData();

export const metadata: Metadata = {
  title: {
    default: "Hệ thống chính trị Việt Nam",
    template: "%s · Hệ thống chính trị Việt Nam",
  },
  description:
    "Khám phá vai trò, cơ cấu và mối quan hệ giữa các thành phần trong hệ thống chính trị Việt Nam.",
};

const themeScript = `(() => {
  try {
    const preference = localStorage.getItem('civic-theme') || 'light';
    const resolved = preference === 'system'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : preference;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePreference = preference;
  } catch (_) {}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LocaleDocument />
        {children}
      </body>
    </html>
  );
}
