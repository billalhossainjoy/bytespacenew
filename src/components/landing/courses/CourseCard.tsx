import Image from "next/image";

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
  return (
    <article className="w-full max-w-[373px] rounded-[18px] border border-[#dedfe3] bg-white p-4 shadow-[0_5px_18px_rgba(22,31,53,0.03)] transition-transform duration-200 hover:-translate-y-1">
      <Image
        alt={course.title}
        className="h-auto w-full rounded-[13px]"
        height={196}
        src={course.image}
        width={341}
      />

      <div className="px-1 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-[18px] font-semibold tracking-[-0.025em] text-[#202126]">
              {course.title}
            </h3>
            <p className="mt-1 text-[12px] text-[#8d919a]">
              by <span className="text-[#4e62ea]">{course.author}</span>
            </p>
          </div>
          <p className="shrink-0 pt-1 text-[13px] text-[#6f727a]">
            {course.rating} <span className="text-[#bdff00]">★</span>
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#f2efff] px-3 py-1.5 text-[11px] font-medium text-[#6854d9]">
            ◈ Beginner
          </span>
          <div className="flex items-center">
            {previewAvatars.map((avatar, index) => (
              <Image
                alt=""
                className={`size-7 rounded-full border-2 border-white object-cover ${index === 0 ? "" : "-ml-2"}`}
                height={43}
                key={avatar}
                src={avatar}
                width={43}
              />
            ))}
            <span className="-ml-2 grid size-7 place-items-center rounded-full border-2 border-white bg-[#bdff00] text-[9px] font-semibold text-[#1f2718]">
              2K+
            </span>
          </div>
        </div>

        <p className="mt-4 text-[17px] font-semibold text-[#1549ea]">
          ${course.price}
          <span className="ml-1 text-[11px] font-normal text-[#8d919a]">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
