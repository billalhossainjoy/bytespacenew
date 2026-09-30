"use client";

import Image from "next/image";
import { type FormEvent, useMemo, useState } from "react";

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

type SearchPageContentProps = {
  initialQuery?: string;
};

export function SearchPageContent({ initialQuery = "" }: SearchPageContentProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [level, setLevel] = useState("all");
  const [sort, setSort] = useState("relevant");
  const [filtersExpanded, setFiltersExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const matchingCourses = searchCourses.filter((course) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.author.toLowerCase().includes(normalizedQuery);
      const matchesCategory =
        selectedCategory === "Featured" ||
        course.categories.includes(selectedCategory);
      const matchesLevel = level === "all" || course.level.toLowerCase() === level;

      return matchesQuery && matchesCategory && matchesLevel;
    });

    if (sort === "title") {
      return [...matchingCourses].sort((a, b) => a.title.localeCompare(b.title));
    }

    return matchingCourses;
  }, [level, query, selectedCategory, sort]);

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

  function chooseLevel(value: string) {
    setLevel(value);
    setCurrentPage(1);
  }

  function chooseSort(value: string) {
    setSort(value);
    setCurrentPage(1);
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
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
            onSubmit={submitSearch}
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
              className="flex h-[52px] items-center justify-center rounded-full bg-electric-lime-400 px-6 text-label-l font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-[146px]"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-6 pb-[72px] pt-[72px]" id="courses">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-4">
              <FilterButton
                controls="course-categories"
                expanded={filtersExpanded}
                icon="filter.png"
                iconHeight={16}
                iconWidth={16}
                onClick={() => setFiltersExpanded((expanded) => !expanded)}
              >
                Filters
              </FilterButton>
              <SelectFilter
                ariaLabel="Course level"
                icon="level.png"
                iconHeight={16}
                iconWidth={15}
                label={level === "all" ? "Level" : level === "beginner" ? "Beginner" : "Intermediate"}
                onChange={chooseLevel}
                options={[
                  { label: "All levels", value: "all" },
                  { label: "Beginner", value: "beginner" },
                  { label: "Intermediate", value: "intermediate" },
                ]}
                value={level}
              />
              <SelectFilter
                ariaLabel="Course category"
                icon="category.png"
                iconHeight={20}
                iconWidth={19}
                label={selectedCategory === "Featured" ? "Category" : selectedCategory}
                onChange={chooseCategory}
                options={searchCategories.map((category) => ({
                  label: category === "Featured" ? "All categories" : category,
                  value: category,
                }))}
                value={selectedCategory}
              />
            </div>

            <SelectFilter
              ariaLabel="Sort courses"
              icon="sort.png"
              iconHeight={12}
              iconWidth={18}
              label={sort === "relevant" ? "Most relevant" : "Course title"}
              onChange={chooseSort}
              options={[
                { label: "Most relevant", value: "relevant" },
                { label: "Course title", value: "title" },
              ]}
              value={sort}
            />
          </div>

          {filtersExpanded ? (
            <div
              aria-label="Course categories"
              className="mt-8 flex flex-wrap gap-4"
              id="course-categories"
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
          ) : null}

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
  controls: string;
  expanded: boolean;
  icon: string;
  iconHeight: number;
  iconWidth: number;
  onClick: () => void;
};

function FilterButton({
  children,
  controls,
  expanded,
  icon,
  iconHeight,
  iconWidth,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      aria-controls={controls}
      aria-expanded={expanded}
      className="flex h-12 items-center gap-2 rounded-full border border-shuttle-gray-200 bg-white px-4 text-label-s text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50"
      onClick={onClick}
      type="button"
    >
      <SearchIcon file={icon} height={iconHeight} width={iconWidth} />
      {children}
    </button>
  );
}

type SelectFilterProps = {
  ariaLabel: string;
  icon: string;
  iconHeight: number;
  iconWidth: number;
  label: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  value: string;
};

function SelectFilter({
  ariaLabel,
  icon,
  iconHeight,
  iconWidth,
  label,
  onChange,
  options,
  value,
}: SelectFilterProps) {
  return (
    <label className="relative flex h-12 items-center gap-2 rounded-full border border-shuttle-gray-200 bg-white px-4 text-label-s text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50">
      <SearchIcon file={icon} height={iconHeight} width={iconWidth} />
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
