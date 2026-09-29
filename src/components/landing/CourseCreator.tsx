import Image from "next/image";

import { RevenueCard } from "./course-creator/RevenueCard";
import { StudentsCard } from "./hero/StudentsCard";

const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function CourseCreator() {
  return (
    <section
      className="course-creator-background overflow-hidden px-6"
      id="course-creator"
    >
      <div className="mx-auto flex min-h-[796px] max-w-[1200px] flex-col gap-14 py-16 lg:relative lg:block lg:h-[796px] lg:py-0">
        <div
          aria-hidden="true"
          className="pointer-events-none relative mx-auto h-[719px] w-[544px] max-w-none overflow-visible lg:absolute lg:left-0 lg:top-[50px]"
        >
          <RevenueCard
            amount="$120.29"
            className="left-0 top-[46px]"
            subtitle="July 1-28"
            title="Total Revenue"
          />
          <RevenueCard
            amount="$1,200.38"
            badge="+12%"
            className="left-0 top-[196px]"
            subtitle="2023"
            title="Year to Date"
          />

          <Image
            alt=""
            className="absolute left-[10px] top-0 z-20 h-[719px] w-[579px] max-w-none"
            height={719}
            src="/assets/course-creator/creator-woman.png"
            width={579}
          />

          <Image
            alt=""
            className="absolute left-[350px] top-[145px] z-30"
            height={216}
            src="/assets/course-creator/lime-squiggle.png"
            width={216}
          />

          <StudentsCard className="left-[284px] top-[415px]" />
        </div>

        <div className="w-full max-w-[574px] lg:absolute lg:left-[626px] lg:top-[165px]">
          <h2 className="font-heading text-[36px] font-semibold leading-[1.2] tracking-[-0.04em] text-shuttle-gray-950 sm:text-heading-m lg:h-[106px] lg:w-[391px]">
            Create &amp; Manage
            <span className="block">Courses Easily.</span>
          </h2>

          <p className="text-body-l mt-10 max-w-[574px] text-shuttle-gray-700">
            <strong className="font-semibold text-shuttle-gray-950">ByteSpace</strong>{" "}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>

          <ul className="mt-10 flex w-[231px] flex-col gap-4">
            {creatorBenefits.map((benefit) => (
              <li className="text-label-l flex h-6 items-center gap-2 font-medium text-shuttle-gray-950" key={benefit}>
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-persian-blue-800 text-[13px] font-bold text-white">
                  ✓
                </span>
                <span className="whitespace-nowrap">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
