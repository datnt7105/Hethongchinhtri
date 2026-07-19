"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/types/common";
import { Icon } from "@/components/ui/Icon";

type Theme = "light" | "dark" | "system";

const themes: Theme[] = ["light", "dark", "system"];

function applyTheme(theme: Theme) {
  const resolved =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = theme;
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("civic-theme") as Theme | null;
    const initial = stored && themes.includes(stored) ? stored : "light";
    setTheme(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (window.localStorage.getItem("civic-theme") === "system") {
        applyTheme("system");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const labelByTheme = locale === "vi"
    ? { light: "Sáng", dark: "Tối", system: "Theo hệ thống" }
    : { light: "Light", dark: "Dark", system: "System" };
  const themeLabel = locale === "vi" ? "Giao diện" : "Theme";

  const changeTheme = () => {
    const next = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(next);
    window.localStorage.setItem("civic-theme", next);
    applyTheme(next);
  };

  return (
    <button
      aria-label={`${themeLabel}: ${labelByTheme[theme]}`}
      className="icon-button"
      onClick={changeTheme}
      title={`${themeLabel}: ${labelByTheme[theme]}`}
      type="button"
    >
      <Icon name={theme === "light" ? "sun" : theme === "dark" ? "moon" : "system"} size={18} />
    </button>
  );
}
