"use client";

import { useState } from "react";

import type { CourseTab } from "@/data/courseDetails";

import { CourseHero } from "./CourseHero";
import { CourseTabs } from "./CourseTabs";
import { AboutCourse } from "./tabs/AboutCourse";
import { LessonsCourse } from "./tabs/LessonsCourse";
import { ReviewsCourse } from "./tabs/ReviewsCourse";

const tabPanels = {
  about: AboutCourse,
  lessons: LessonsCourse,
  reviews: ReviewsCourse,
};

export function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState<CourseTab>("about");
  const ActivePanel = tabPanels[activeTab];

  return (
    <main>
      <CourseHero />

      <section className="bg-white px-6 pb-6 pt-16 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="lg:w-[720px]">
            <CourseTabs activeTab={activeTab} onChange={setActiveTab} />
            <ActivePanel />
          </div>
        </div>
      </section>
    </main>
  );
}
