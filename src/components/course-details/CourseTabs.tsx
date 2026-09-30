"use client";

import { useRouter } from "next/navigation";

import { courseDetailsPath, type CourseTab } from "@/data/courseDetails";

const tabs: { href: string; label: string; value: CourseTab }[] = [
  { href: `${courseDetailsPath}#course-content`, label: "About", value: "about" },
  { href: `${courseDetailsPath}/lessons#course-content`, label: "Lesson", value: "lessons" },
  { href: `${courseDetailsPath}/reviews#course-content`, label: "Reviews", value: "reviews" },
];

type CourseTabsProps = {
  activeTab: CourseTab;
};

export function CourseTabs({ activeTab }: CourseTabsProps) {
  const router = useRouter();

  return (
    <div aria-label="Course sections" className="flex flex-wrap gap-4" role="group">
      {tabs.map((tab) => {
        const active = activeTab === tab.value;

        return (
          <button
            aria-pressed={active}
            className={`h-10 rounded-full px-4 text-label-s transition-colors ${
              active
                ? "bg-electric-lime-400 font-medium text-shuttle-gray-950"
                : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100"
            }`}
            key={tab.value}
            onClick={() => router.push(tab.href)}
            type="button"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
