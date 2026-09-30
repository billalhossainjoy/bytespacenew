import { courseModules } from "@/data/courseDetails";

import { CourseIcon } from "../CourseIcon";

export function LessonsCourse() {
  return (
    <div className="mt-10 flex flex-col gap-6 text-shuttle-gray-700">
      <h2 className="font-heading text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        Explore the Modules
      </h2>
      <p className="text-body-m">
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
      </p>

      <h3 className="font-heading text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        Lesson List
      </h3>

      <div className="flex flex-col gap-6">
        {courseModules.map((module) => (
          <article className="grid min-h-[75px] grid-cols-[72px_1fr] items-start gap-[13px] lg:grid-cols-[72px_638px]" key={module.title}>
            <div className="grid size-[72px] place-items-center rounded-[20px] bg-electric-lime-400 text-shuttle-gray-950">
              <CourseIcon className="size-8" name="video" />
            </div>
            <div className="flex min-h-[75px] flex-col gap-1">
              <h4 className="text-label-m font-medium text-shuttle-gray-950">{module.title}</h4>
              <p className="text-body-m">{module.description}</p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="font-heading text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        Lesson Content
      </h3>
      <p className="text-body-m">
        Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
      </p>

      <h3 className="font-heading text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        Lesson Progress Tracking
      </h3>
      <p className="text-body-m">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
      </p>

      <div className="h-[116px] rounded-[16px] border border-shuttle-gray-200 p-4">
        <p className="text-body-s font-medium text-shuttle-gray-950">Learning Progress</p>
        <p className="font-heading mt-1 text-[36px] font-semibold leading-none text-shuttle-gray-950">55%</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-shuttle-gray-100">
          <div className="h-full w-[55%] rounded-full bg-electric-lime-400" />
        </div>
      </div>
    </div>
  );
}
