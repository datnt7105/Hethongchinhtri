import type { Metadata } from "next";
import { ContentPage } from "@/components/pages/ContentPage";
import { contentPages } from "@/data/page-content";

export const metadata: Metadata = { title: "About" };

export default function EnglishAboutPage() {
  return <ContentPage content={contentPages.about} locale="en" />;
}

