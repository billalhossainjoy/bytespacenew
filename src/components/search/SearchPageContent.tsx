"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { CourseCard } from "@/components/landing/courses/CourseCard";
import { courses } from "@/data/courses";

const assetRoot = "/assets/search-page";
const coursesPerPage = 3;

const searchImages = [
  `${assetRoot}/thumbnails/course-01-figma-design.png`,
  `${assetRoot}/thumbnails/course-02-digital-assets.png`,
  `${assetRoot}/thumbnails/course-03-big-data.png`,
  `${assetRoot}/thumbnails/course-04-productivity.png`,
  `${assetRoot}/thumbnails/course-05-money-management.png`,
  `${assetRoot}/thumbnails/course-06-startup-success.png`,
];

const searchCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const searchCourses = courses.map((course, courseIndex) => ({
  ...course,
  image: searchImages[courseIndex],
}));

type IconProps = {
  alt?: string;
  file: string;
  height: number;
  width: number;
};

function SearchIcon({ alt = "", file, height, width }: IconProps) {
  return (
    <Image
      alt={alt}
      height={height}
      src={`${assetRoot}/icons/${file}`}
      width={width}
    />
  );
}

export function SearchPageContent() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return searchCourses.filter((course) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.author.toLowerCase().includes(normalizedQuery);
      const matchesCategory =
        selectedCategory === "Featured" ||
        course.categories.includes(selectedCategory);

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / coursesPerPage));
  const visibleCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage,
  );

  function updateQuery(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

  function chooseCategory(category: string) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  return (
    <main>
      <section
        className="h-[280px] bg-persian-blue-600 px-6 text-white sm:h-[242px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
          backgroundPosition: "0 -118px",
          backgroundSize: "120px 120px",
        }}
      >
        <div className="mx-auto max-w-[1200px] pt-[44px] text-center">
          <h1 className="font-heading text-[36px] font-semibold leading-[1.2] tracking-[-0.035em] sm:text-heading-m">
            Find Your Next Course
          </h1>

          <form
            className="mx-auto mt-6 flex max-w-[624px] flex-col gap-3 sm:flex-row sm:gap-4"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <label className="flex h-[52px] flex-1 items-center gap-4 rounded-full bg-white px-6 text-shuttle-gray-950">
              <span className="sr-only">Search courses</span>
              <SearchIcon file="search.png" height={24} width={24} />
              <input
                className="min-w-0 flex-1 bg-transparent text-body-l outline-none placeholder:text-shuttle-gray-400"
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Search"
                type="search"
                value={query}
              />
            </label>

            <button
              className="flex h-[52px] items-center justify-center gap-4 rounded-full bg-electric-lime-400 px-6 text-label-l font-medium text-shuttle-gray-950 sm:w-[146px]"
              type="button"
            >
              Courses
              <SearchIcon file="chevron-down.png" height={8} width={12} />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-6 pb-[72px] pt-[72px]" id="courses">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-4">
              <FilterButton icon="filter.png" iconHeight={16} iconWidth={16}>
                Filter
              </FilterButton>
              <FilterButton icon="level.png" iconHeight={16} iconWidth={15}>
                Level
              </FilterButton>
              <FilterButton icon="category.png" iconHeight={20} iconWidth={19}>
                Category
              </FilterButton>
            </div>

            <FilterButton icon="sort.png" iconHeight={12} iconWidth={18}>
              Most relevant
            </FilterButton>
          </div>

          <div
            aria-label="Course categories"
            className="mt-8 flex flex-wrap gap-4"
          >
            {searchCategories.map((category) => {
              const selected = selectedCategory === category;

              return (
                <button
                  aria-pressed={selected}
                  className={`h-10 rounded-full px-4 text-label-s transition-colors ${
                    selected
                      ? "bg-electric-lime-400 font-medium text-shuttle-gray-950"
                      : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100"
                  }`}
                  key={category}
                  onClick={() => chooseCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              );
            })}
          </div>

          {filteredCourses.length > 0 ? (
            <div className="mt-20 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
              {visibleCourses.map((course) => (
                <CourseCard course={course} key={course.id} />
              ))}
            </div>
          ) : (
            <div className="mt-20 grid min-h-[384px] place-items-center rounded-3xl border border-shuttle-gray-200 text-center">
              <div>
                <p className="font-heading text-heading-xs font-semibold text-shuttle-gray-950">
                  No courses found
                </p>
                <p className="mt-2 text-body-s text-shuttle-gray-700">
                  Try another search or category.
                </p>
              </div>
            </div>
          )}

          {filteredCourses.length > coursesPerPage ? (
            <nav
              aria-label="Course result pages"
              className="mt-[72px] flex h-12 items-center justify-center gap-6"
            >
              <PaginationArrow
                direction="left"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              />
              <div className="flex items-center gap-6">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    aria-current={currentPage === page ? "page" : undefined}
                    aria-label={`Page ${page}`}
                    className={`font-heading text-[20px] leading-7 ${
                      currentPage === page
                        ? "font-semibold text-shuttle-gray-950"
                        : "font-normal text-shuttle-gray-700"
                    }`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    type="button"
                  >
                    {page}
                  </button>
                ))}
              </div>
              <PaginationArrow
                direction="right"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              />
            </nav>
          ) : null}
        </div>
      </section>
    </main>
  );
}

type FilterButtonProps = {
  children: string;
  icon: string;
  iconHeight: number;
  iconWidth: number;
};

function FilterButton({
  children,
  icon,
  iconHeight,
  iconWidth,
}: FilterButtonProps) {
  return (
    <button
      className="flex h-12 items-center gap-2 rounded-full border border-shuttle-gray-200 bg-white px-4 text-label-s text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50"
      type="button"
    >
      <SearchIcon file={icon} height={iconHeight} width={iconWidth} />
      {children}
    </button>
  );
}

type PaginationArrowProps = {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
};

function PaginationArrow({
  direction,
  disabled,
  onClick,
}: PaginationArrowProps) {
  return (
    <button
      aria-label={`${direction === "left" ? "Previous" : "Next"} page`}
      className="grid h-12 w-14 place-items-center rounded-3xl border border-shuttle-gray-200 bg-white px-4 py-3 text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span
        aria-hidden="true"
        className={`size-2.5 rotate-45 border-shuttle-gray-700 ${
          direction === "left"
            ? "border-b-2 border-l-2"
            : "border-r-2 border-t-2"
        }`}
      />
    </button>
  );
}
