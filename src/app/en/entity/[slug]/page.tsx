import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntityDetailPage } from "@/components/pages/EntityDetailPage";
import { allEntities } from "@/data/all-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allEntities.map((entity) => ({ slug: entity.slug.en }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entity = allEntities.find((item) => item.slug.en === slug);
  return { title: entity?.name.en ?? "Entity" };
}

export default async function EnglishEntityPage({ params }: PageProps) {
  const { slug } = await params;
  const entity = allEntities.find((item) => item.slug.en === slug);
  if (!entity) notFound();
  return <EntityDetailPage entity={entity} locale="en" />;
}
