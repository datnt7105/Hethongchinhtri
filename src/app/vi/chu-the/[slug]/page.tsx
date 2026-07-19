import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntityDetailPage } from "@/components/pages/EntityDetailPage";
import { allEntities } from "@/data/all-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allEntities.map((entity) => ({ slug: entity.slug.vi }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entity = allEntities.find((item) => item.slug.vi === slug);
  return { title: entity?.name.vi ?? "Chủ thể" };
}

export default async function VietnameseEntityPage({ params }: PageProps) {
  const { slug } = await params;
  const entity = allEntities.find((item) => item.slug.vi === slug);
  if (!entity) notFound();
  return <EntityDetailPage entity={entity} locale="vi" />;
}
