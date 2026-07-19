"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LocaleDocument() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : "vi";
  }, [pathname]);

  return null;
}

