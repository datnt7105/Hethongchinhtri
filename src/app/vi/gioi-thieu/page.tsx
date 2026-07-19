import type { Metadata } from "next";
import { ContentPage } from "@/components/pages/ContentPage";
import { contentPages } from "@/data/page-content";

export const metadata: Metadata = { title: "Giới thiệu" };

export default function VietnameseAboutPage() {
  return <ContentPage content={contentPages.about} locale="vi" />;
}

