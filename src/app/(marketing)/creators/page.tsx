import type { Metadata } from "next";

import { CreatorProfileHero } from "@/components/creator-profile/CreatorProfileHero";

export const metadata: Metadata = {
  title: "PurePearl Studio",
  description: "Discover courses and creative work from PurePearl Studio.",
};

export default function CreatorProfilePage() {
  return (
    <main>
      <CreatorProfileHero />
    </main>
  );
}
