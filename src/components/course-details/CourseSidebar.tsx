import Image from "next/image";
import Link from "next/link";

import {
  courseBenefits,
  courseDetailsPath,
  courseSummary,
  lessonPreview,
} from "@/data/courseDetails";

import { CourseIcon } from "./CourseIcon";

export function CourseSidebar() {
  return (
    <aside className="relative z-20 rounded-[24px] border border-shuttle-gray-200 bg-white p-10 text-shuttle-gray-950 lg:h-[960px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-heading-xs font-semibold tracking-[-0.03em]">
            {courseSummary.lessonCount}
          </h2>

          <div className="flex flex-col gap-3">
            {lessonPreview.map((lesson) => (
              <div className="grid min-h-[38px] grid-cols-[1fr_auto] items-start gap-4 text-body-m lg:grid-cols-[226px_52px] lg:gap-[45px]" key={lesson.number}>
                <div className="grid grid-cols-[24px_1fr] gap-2 lg:grid-cols-[24px_194px]">
                  <span className="leading-[1.2]">{lesson.number}</span>
                  <span className="leading-[1.2]">{lesson.title}</span>
                </div>
                <span className="whitespace-nowrap text-persian-blue-800">{lesson.duration}</span>
              </div>
            ))}
            <p className="text-body-m text-shuttle-gray-700">99 more videos</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="h-[52px] text-body-m text-shuttle-gray-700">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <p className="font-heading flex h-[38px] items-end text-[36px] font-semibold leading-none text-persian-blue-800">
            ${courseSummary.price}
            <span className="font-body text-body-m font-normal text-shuttle-gray-700">/lifetime</span>
          </p>

          <Link
            className="flex h-[46px] w-full items-center justify-center rounded-full bg-electric-lime-400 px-6 py-3 text-label-l font-medium transition-transform hover:scale-[1.02]"
            href={`${courseDetailsPath}/lessons#course-content`}
          >
            Enroll Now
          </Link>
        </div>

        <h3 className="font-heading text-heading-xs font-semibold tracking-[-0.03em]">
          This course include
        </h3>

        <ul className="flex h-[140px] flex-col gap-3">
          {courseBenefits.map((benefit) => (
            <li className="flex h-[26px] items-center gap-2 text-body-m text-shuttle-gray-700" key={benefit.label}>
              <CourseIcon className="size-6 shrink-0 text-persian-blue-800" name={benefit.icon} />
              {benefit.label}
            </li>
          ))}
        </ul>

        <div className="h-px bg-shuttle-gray-200" />

        <div className="flex h-[187px] flex-col gap-6">
          <div className="flex h-[52px] items-center gap-3">
          <Image
            alt="PurePearl Studio"
            className="size-[52px] rounded-full object-cover"
            height={52}
            src="/assets/course-details/avatars/creator-purepearl.png"
            width={52}
          />
          <div>
              <p className="font-heading text-heading-xs font-medium leading-[1.2]">PurePearl Studio</p>
              <p className="text-body-m text-shuttle-gray-700">Professional Creator</p>
            </div>
          </div>

          <p className="h-[52px] text-body-m text-shuttle-gray-700">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <button className="h-[35px] w-fit rounded-full border border-shuttle-gray-200 px-4 text-label-m transition-colors hover:bg-shuttle-gray-50" type="button">
            See Full Profile
          </button>
        </div>
      </div>
    </aside>
  );
}
