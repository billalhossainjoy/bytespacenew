import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteInfoPage } from "@/components/SiteInfoPage";
import { getSitePage, sitePages } from "@/data/sitePages";

type SitePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SitePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function InformationPage({ params }: SitePageProps) {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    notFound();
  }

  return <SiteInfoPage page={page} />;
}
