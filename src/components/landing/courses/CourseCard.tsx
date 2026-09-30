import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/data/courses";

const previewAvatars = [
  "/assets/hero/avatars/avatar-01.png",
  "/assets/hero/avatars/avatar-02.png",
  "/assets/hero/avatars/avatar-03.png",
  "/assets/hero/avatars/avatar-04.png",
];

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const card = (
    <article className="h-[384px] w-full max-w-[373px] rounded-[24px] border border-[#d6d8dc] bg-white p-4 transition-transform duration-200 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-[12px]">
        <Image
          alt={course.title}
          className="h-[196px] w-full object-cover"
          height={196}
          src={course.image}
          width={341}
        />

        <div className="absolute inset-x-3 bottom-4 flex items-center justify-between gap-2">
          {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((detail) => (
            <span
              className="whitespace-nowrap rounded-[24px] bg-[#f6f6f6]/60 px-3 py-1.5 text-[12px] leading-[1.2] text-[#484b51] backdrop-blur-[4px]"
              key={detail}
            >
              {detail}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-heading text-heading-xs truncate font-semibold tracking-[-0.025em] text-[#050609]">
              {course.title}
            </h3>
            <p className="text-body-xs mt-1 text-[#5c6068]">
              by <span className="text-[#003be2]">{course.author}</span>
            </p>
          </div>
          <p className="text-body-m flex shrink-0 items-center gap-0.5 text-[#5c6068]">
            {course.rating}
            <svg
              aria-hidden="true"
              className="text-shuttle-gray-200"
              fill="currentColor"
              height="24"
              viewBox="0 0 20 20"
              width="24"
            >
              <path
                d="m10 2.75 2.13 4.32 4.77.69-3.45 3.37.81 4.75L10 13.64l-4.26 2.24.81-4.75L3.1 7.76l4.77-.69L10 2.75Z"
              />
            </svg>
          </p>
        </div>

        <div className="mt-2.5 flex h-8 items-center gap-3">
          <span className="text-label-xs flex h-8 items-center gap-1 rounded-[24px] bg-shuttle-gray-50 px-3 text-[#4d5057]">
            <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 14 14" width="14">
              <path d="M2 8.75v2.5M7 5.25v6M12 2.75v8.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
            Beginner
          </span>
          <div className="flex items-center">
            {previewAvatars.map((avatar, index) => (
              <Image
                alt=""
                className={`size-8 rounded-full border-2 border-white object-cover ${index === 0 ? "" : "-ml-2"}`}
                height={43}
                key={avatar}
                src={avatar}
                width={43}
              />
            ))}
            <span className="bg-electric-lime-500 -ml-2 grid size-8 place-items-center rounded-full border-2 border-white text-[10px] font-semibold text-[#1f2718]">
              26+
            </span>
          </div>
        </div>

        <p className="font-heading mt-5 text-[20px] font-semibold leading-[1.2] text-[#003be2]">
          ${course.price}
          <span className="font-body text-body-xs font-normal text-[#5c6068]">/lifetime</span>
        </p>
      </div>
    </article>
  );

  if (course.href) {
    return (
      <Link aria-label={`View ${course.title}`} className="block w-full max-w-[373px]" href={course.href}>
        {card}
      </Link>
    );
  }

  return card;
}
