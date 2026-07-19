import type { Metadata } from "next";
import { AdministrativeMapPage } from "@/components/pages/AdministrativeMapPage";

export const metadata: Metadata = { title: "Administrative map" };

export default function EnglishMapPage() {
  return <AdministrativeMapPage locale="en" />;
}
