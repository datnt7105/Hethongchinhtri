import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstitutionDetailPage } from "@/components/pages/InstitutionDetailPage";
import { findInstitutionBySlug, institutionPages } from "@/data/institution-pages";

type PageProps = { params: Promise<{ institution: string }> };

export function generateStaticParams() {
  return institutionPages.map((page) => ({ institution: page.slug.vi }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { institution } = await params;
  const page = findInstitutionBySlug(institution, "vi");
  return { title: page?.title.vi ?? "Thiết chế Nhà nước", description: page?.summary.vi };
}

export default async function VietnameseInstitutionRoute({ params }: PageProps) {
  const { institution } = await params;
  const page = findInstitutionBySlug(institution, "vi");
  if (!page) notFound();
  return <InstitutionDetailPage locale="vi" page={page} />;
}
