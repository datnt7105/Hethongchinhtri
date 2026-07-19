import type { ReactNode } from "react";
import { LocalizedShell } from "@/components/layout/LocalizedShell";

export default function VietnameseLayout({ children }: { children: ReactNode }) {
  return <LocalizedShell locale="vi">{children}</LocalizedShell>;
}

