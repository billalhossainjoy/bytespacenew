import Image from "next/image";

import { courseSummary } from "@/data/courseDetails";

import { CourseIcon } from "./CourseIcon";
import { CourseSidebar } from "./CourseSidebar";

const courseStats = [
  { icon: "level", label: courseSummary.level },
  { icon: "star", label: courseSummary.rating },
  { icon: "students", label: courseSummary.students },
] as const;

export function CourseHero() {
  return (
    <section
      className="relative bg-persian-blue-600 px-6 pb-16 text-white lg:h-[842px] lg:px-0 lg:pb-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
        backgroundPosition: "0 -118px",
        backgroundSize: "120px 120px",
      }}
    >
      <div className="relative mx-auto max-w-[1200px] pt-14">
        <button className="absolute right-0 top-[60px] hidden h-12 items-center gap-3 rounded-full bg-electric-lime-400 px-6 text-label-m font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] lg:flex" type="button">
          <CourseIcon className="size-5" name="share" />
          Share
        </button>

        <div className="max-w-[900px]">
          <h1 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.035em] sm:text-[36px]">
            {courseSummary.title}
          </h1>
          <p className="font-heading mt-1 text-[18px] font-semibold leading-[1.35] tracking-[-0.02em] sm:text-[20px]">
            {courseSummary.subtitle}
          </p>
          <p className="mt-6 text-body-m">
            by <span className="font-medium text-electric-lime-400">{courseSummary.author}</span>
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {courseStats.map((stat) => (
              <span className="flex h-10 items-center gap-3 rounded-full bg-white px-6 text-label-m text-shuttle-gray-950" key={stat.label}>
                <CourseIcon className="size-5 text-persian-blue-800" name={stat.icon} />
                {stat.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-[54px] grid items-start gap-10 lg:grid-cols-[720px_412px] lg:gap-[68px]">
          <div className="relative overflow-hidden rounded-[24px] bg-shuttle-gray-100">
            <Image
              alt="Course instructor presenting the digital asset course"
              className="h-auto w-full object-cover lg:h-[480px]"
              height={479}
              priority
              src="/assets/course-details/hero/course-preview.png"
              width={720}
            />
            <button aria-label="Play course preview" className="absolute left-1/2 top-1/2 grid size-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[20px] bg-[#9d867f]/90 shadow-sm backdrop-blur-sm transition-transform hover:-translate-x-1/2 hover:-translate-y-1/2 hover:scale-105" type="button">
              <span className="grid size-12 place-items-center rounded-full bg-white text-[#a98d83]">
                <CourseIcon className="ml-1 size-6" name="play" />
              </span>
            </button>
          </div>

          <CourseSidebar />
        </div>
      </div>
    </section>
  );
}
