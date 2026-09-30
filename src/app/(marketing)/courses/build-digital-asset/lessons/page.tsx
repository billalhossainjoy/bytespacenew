import type { Metadata } from "next";

import { CourseDetailsPage } from "@/components/course-details/CourseDetailsPage";

export const metadata: Metadata = {
  title: "Build Digital Asset Lessons",
  description: "Explore the lessons in the Build Digital Asset ByteSpace course.",
};

export default function BuildDigitalAssetLessonsPage() {
  return <CourseDetailsPage activeTab="lessons" />;
}
