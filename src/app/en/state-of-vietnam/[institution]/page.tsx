import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstitutionDetailPage } from "@/components/pages/InstitutionDetailPage";
import { findInstitutionBySlug, institutionPages } from "@/data/institution-pages";

type PageProps = { params: Promise<{ institution: string }> };

export function generateStaticParams() {
  return institutionPages.map((page) => ({ institution: page.slug.en }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { institution } = await params;
  const page = findInstitutionBySlug(institution, "en");
  return { title: page?.title.en ?? "State institution", description: page?.summary.en };
}

export default async function EnglishInstitutionRoute({ params }: PageProps) {
  const { institution } = await params;
  const page = findInstitutionBySlug(institution, "en");
  if (!page) notFound();
  return <InstitutionDetailPage locale="en" page={page} />;
}
