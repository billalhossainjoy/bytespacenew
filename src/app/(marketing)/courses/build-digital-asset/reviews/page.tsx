import type { Metadata } from "next";

import { CourseDetailsPage } from "@/components/course-details/CourseDetailsPage";

export const metadata: Metadata = {
  title: "Build Digital Asset Reviews",
  description: "Read learner reviews for the Build Digital Asset ByteSpace course.",
};

export default function BuildDigitalAssetReviewsPage() {
  return <CourseDetailsPage activeTab="reviews" />;
}
