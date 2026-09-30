import type { Metadata } from "next";

import { SearchPageContent } from "@/components/search/SearchPageContent";

export const metadata: Metadata = {
  title: "Find a course",
  description: "Search and discover your next ByteSpace course.",
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const initialQuery = Array.isArray(q) ? (q[0] ?? "") : (q ?? "");

  return <SearchPageContent initialQuery={initialQuery} />;
}
