import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CatalogCourseDetails } from "@/components/course-details/CatalogCourseDetails";
import { courseDetailsPath } from "@/data/courseDetails";
import { courses, getCourseBySlug } from "@/data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses
    .filter((course) => course.href !== courseDetailsPath)
    .map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {};
  }

  return {
    title: course.title,
    description: `Explore ${course.title}, a ByteSpace course by ${course.author}.`,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course || course.href === courseDetailsPath) {
    notFound();
  }

  return <CatalogCourseDetails course={course} />;
}
