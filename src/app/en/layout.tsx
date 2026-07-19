import type { ReactNode } from "react";
import { LocalizedShell } from "@/components/layout/LocalizedShell";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <LocalizedShell locale="en">{children}</LocalizedShell>;
}
