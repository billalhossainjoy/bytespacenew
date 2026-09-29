"use client";

import { useMemo, useState } from "react";

import { courseCategories, courses } from "@/data/courses";

import { CourseCard } from "./courses/CourseCard";

export function CourseDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const visibleCourses = useMemo(() => {
    if (selectedCategory === "Featured" || selectedCategory === "+ More") {
      return courses;
    }

    return courses.filter((course) => course.categories.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section className="bg-white px-6 py-20 sm:py-24" id="courses">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="mx-auto max-w-[588px] text-[36px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#040819] sm:text-[44px] sm:leading-[1.2]">
            <span className="block">Discover Your Passion,</span>
            <span className="block">Build Your Skills</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[917px] text-[18px] leading-[1.6] text-[#8a919c]">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div aria-label="Course categories" className="mx-auto mt-10 flex max-w-[1100px] flex-wrap justify-center gap-x-3 gap-y-4">
          {courseCategories.map((category) => {
            const selected = selectedCategory === category;
            const moreLink = category === "+ More";

            return (
              <button
                aria-pressed={selected}
                className={`rounded-[24px] px-4 py-3 text-[14px] leading-[1.2] transition-colors ${
                  moreLink
                    ? "bg-transparent px-2 font-medium text-[#1549ea] hover:text-[#0d36b8]"
                    : selected
                      ? "bg-[#bdff00] font-medium text-[#1d2515]"
                      : "bg-[#f5f5f5] text-[#4d5057] hover:bg-[#e9e9eb]"
                }`}
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
              >
                {category}
              </button>
            );
          })}
        </div>

        {visibleCourses.length > 0 ? (
          <div className="mt-14 grid justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleCourses.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-sm text-[#777b84]">
            More courses in this category are coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
