"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { CourseCard } from "@/components/landing/courses/CourseCard";
import { courses } from "@/data/courses";

const creatorCourses = courses;
const categories = Array.from(
  new Set(creatorCourses.flatMap((course) => course.categories)),
).sort();

type SelectControlProps = {
  ariaLabel: string;
  icon: string;
  label: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  value: string;
};

function SelectControl({
  ariaLabel,
  icon,
  label,
  onChange,
  options,
  value,
}: SelectControlProps) {
  return (
    <label className="relative flex h-12 items-center gap-2 rounded-full border border-shuttle-gray-200 bg-white px-4 text-label-s text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50">
      <Image alt="" height={18} src={`/assets/search-page/icons/${icon}`} width={18} />
      <span className="max-w-48 truncate">{label}</span>
      <select
        aria-label={ariaLabel}
        className="absolute inset-0 cursor-pointer appearance-none rounded-full opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-blue-800"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function CreatorCourseGallery() {
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [sort, setSort] = useState("relevant");
  const hasActiveFilters = category !== "all" || level !== "all";

  const visibleCourses = useMemo(() => {
    const matchingCourses = creatorCourses.filter((course) => {
      const matchesCategory =
        category === "all" || course.categories.includes(category);
      const matchesLevel = level === "all" || course.level.toLowerCase() === level;

      return matchesCategory && matchesLevel;
    });

    if (sort === "title") {
      return [...matchingCourses].sort((a, b) => a.title.localeCompare(b.title));
    }

    return matchingCourses;
  }, [category, level, sort]);

  function resetFilters() {
    setCategory("all");
    setLevel("all");
  }

  return (
    <section className="bg-white px-6 py-16 lg:px-0" aria-label="Creator courses">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <button
              className="flex h-12 items-center gap-2 rounded-full border border-shuttle-gray-200 bg-white px-4 text-label-s text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-blue-800 disabled:cursor-not-allowed disabled:opacity-45"
              disabled={!hasActiveFilters}
              onClick={resetFilters}
              type="button"
            >
              <Image alt="" height={16} src="/assets/search-page/icons/filter.png" width={16} />
              Clear filters
            </button>

            <SelectControl
              ariaLabel="Course level"
              icon="level.png"
              label={level === "all" ? "Level" : level === "beginner" ? "Beginner" : "Intermediate"}
              onChange={setLevel}
              options={[
                { label: "All levels", value: "all" },
                { label: "Beginner", value: "beginner" },
                { label: "Intermediate", value: "intermediate" },
              ]}
              value={level}
            />

            <SelectControl
              ariaLabel="Course category"
              icon="category.png"
              label={category === "all" ? "Category" : category}
              onChange={setCategory}
              options={[
                { label: "All categories", value: "all" },
                ...categories.map((item) => ({ label: item, value: item })),
              ]}
              value={category}
            />
          </div>

          <SelectControl
            ariaLabel="Sort courses"
            icon="sort.png"
            label={sort === "relevant" ? "Most relevant" : "Course title"}
            onChange={setSort}
            options={[
              { label: "Most relevant", value: "relevant" },
              { label: "Course title", value: "title" },
            ]}
            value={sort}
          />
        </div>

        {visibleCourses.length > 0 ? (
          <div className="mt-10 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
            {visibleCourses.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-body-m text-shuttle-gray-700">
            No courses match these filters.
          </p>
        )}
      </div>
    </section>
  );
}
