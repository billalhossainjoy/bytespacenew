import type { Metadata } from "next";

import { CourseDetailsPage } from "@/components/course-details/CourseDetailsPage";

export const metadata: Metadata = {
  title: "Build Digital Asset",
  description:
    "Build digital assets with expert guidance in this comprehensive ByteSpace course.",
};

export default function BuildDigitalAssetPage() {
  return <CourseDetailsPage />;
}
