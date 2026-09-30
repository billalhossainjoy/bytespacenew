import type { Metadata } from "next";

import { SearchPageContent } from "@/components/search/SearchPageContent";

export const metadata: Metadata = {
  title: "Find a course",
  description: "Search and discover your next ByteSpace course.",
};

export default function SearchPage() {
  return <SearchPageContent />;
}
