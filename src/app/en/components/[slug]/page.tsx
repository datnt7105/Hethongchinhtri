import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SystemSectionPage } from "@/components/pages/SystemSectionPage";
import { findSystemSection, systemSections } from "@/data/system-sections";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return systemSections.map((section) => ({ slug: section.slug.en }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = findSystemSection(slug, "en");
  return {
    title: section?.title.en ?? "Political-system component",
    description: section?.summary.en,
  };
}

export default async function EnglishSystemSectionRoute({ params }: PageProps) {
  const { slug } = await params;
  const section = findSystemSection(slug, "en");
  if (!section) notFound();
  return <SystemSectionPage locale="en" section={section} />;
}
