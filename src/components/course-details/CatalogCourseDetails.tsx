import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/data/courses";

import { CourseIcon } from "./CourseIcon";

const gridBackground = {
  backgroundImage:
    "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
  backgroundPosition: "0 -118px",
  backgroundSize: "120px 120px",
};

export function CatalogCourseDetails({ course }: { course: Course }) {
  return (
    <main>
      <section className="bg-persian-blue-600 px-6 py-16 text-white lg:px-0" style={gridBackground}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_520px] lg:gap-16">
          <div>
            <p className="text-body-m text-electric-lime-400">ByteSpace course</p>
            <h1 className="mt-3 max-w-[640px] font-heading text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-heading-m">
              {course.title}
            </h1>
            <p className="mt-5 text-body-l text-white/90">
              by <span className="font-medium text-electric-lime-400">{course.author}</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="flex h-10 items-center gap-2 rounded-full bg-white px-5 text-label-m text-shuttle-gray-950">
                <CourseIcon className="size-5 text-persian-blue-800" name="star" />
                {course.rating}
              </span>
              {course.categories.slice(0, 2).map((category) => (
                <span className="flex h-10 items-center rounded-full bg-white px-5 text-label-m text-shuttle-gray-950" key={category}>
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[341/196] overflow-hidden rounded-[24px] bg-shuttle-gray-100 shadow-[0_24px_64px_rgba(0,20,92,0.24)]">
            <Image
              alt={course.title}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 520px, calc(100vw - 48px)"
              src={course.image}
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[720px_1fr] lg:gap-[68px]">
          <div>
            <h2 className="font-heading text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
              About this course
            </h2>
            <p className="mt-6 text-body-m text-shuttle-gray-700">
              Explore {course.title} with PurePearl Studio. This course focuses on {formatTopics(course.categories)} and practical skills you can apply to your own projects.
            </p>
            <p className="mt-6 text-body-m text-shuttle-gray-700">
              The complete lesson outline and learner reviews are being prepared. Check back soon for the full course details.
            </p>
          </div>

          <aside className="h-fit rounded-[24px] border border-shuttle-gray-200 bg-white p-8 text-shuttle-gray-950">
            <p className="text-body-m text-shuttle-gray-700">Lifetime access</p>
            <p className="mt-2 font-heading text-[36px] font-semibold leading-none text-persian-blue-800">
              ${course.price}
              <span className="font-body text-body-m font-normal text-shuttle-gray-700">/lifetime</span>
            </p>
            <Link
              className="mt-8 flex h-12 items-center justify-center rounded-full bg-electric-lime-400 px-6 text-label-l font-medium transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-persian-blue-800"
              href="/search"
            >
              Browse all courses
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

function formatTopics(categories: string[]) {
  if (categories.length < 2) {
    return categories[0] ?? "creative skills";
  }

  return `${categories.slice(0, -1).join(", ")} and ${categories.at(-1)}`;
}
