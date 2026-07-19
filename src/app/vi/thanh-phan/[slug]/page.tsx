import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SystemSectionPage } from "@/components/pages/SystemSectionPage";
import { findSystemSection, systemSections } from "@/data/system-sections";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return systemSections.map((section) => ({ slug: section.slug.vi }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = findSystemSection(slug, "vi");
  return {
    title: section?.title.vi ?? "Thành phần hệ thống chính trị",
    description: section?.summary.vi,
  };
}

export default async function VietnameseSystemSectionRoute({ params }: PageProps) {
  const { slug } = await params;
  const section = findSystemSection(slug, "vi");
  if (!section) notFound();
  return <SystemSectionPage locale="vi" section={section} />;
}
