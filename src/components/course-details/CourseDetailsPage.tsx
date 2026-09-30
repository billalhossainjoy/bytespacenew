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

type CourseDetailsPageProps = {
  activeTab?: CourseTab;
};

export function CourseDetailsPage({ activeTab = "about" }: CourseDetailsPageProps) {
  const ActivePanel = tabPanels[activeTab];

  return (
    <main>
      <CourseHero />

      <section
        className={`relative z-10 bg-white px-6 pb-6 pt-16 lg:px-0 ${
          activeTab === "lessons" ? "lg:pb-[98px]" : ""
        }`}
        id="course-content"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className={activeTab === "lessons" ? "lg:w-[723px]" : "lg:w-[720px]"}>
            <CourseTabs activeTab={activeTab} />
            <ActivePanel />
          </div>
        </div>
      </section>
    </main>
  );
}
