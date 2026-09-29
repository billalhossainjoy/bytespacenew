import Image from "next/image";

import { courses } from "@/data/courses";

import { CourseCard } from "./courses/CourseCard";
import { ProgressCard } from "./hero/ProgressCard";

const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export function ProfessionalGrowth() {
  return (
    <section
      className="professional-growth-background overflow-hidden px-6"
      id="professional-growth"
    >
      <div className="mx-auto flex min-h-[796px] max-w-[1210px] flex-col gap-12 py-16 lg:relative lg:block lg:h-[796px] lg:py-0">
        <div className="w-full max-w-[577px] lg:absolute lg:left-0 lg:top-[200px]">
          <h2 className="font-heading text-[36px] font-semibold leading-[1.2] tracking-[-0.04em] text-shuttle-gray-950 sm:text-heading-m lg:h-[106px] lg:w-[577px]">
            Your Path to Professional
            <span className="block">Growth Starts Here!</span>
          </h2>

          <p className="text-body-l mt-10 max-w-[477px] text-shuttle-gray-700 lg:h-[145px]">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are looking
            to sharpen specific skills, gain industry expertise, or embark on a new
            career path entirely, we have the resources you need.
          </p>

          <dl className="mt-10 flex max-w-[314px] gap-14">
            {growthStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-heading-s font-semibold text-persian-blue-800">
                  {stat.value}
                </dt>
                <dd className="text-body-l text-shuttle-gray-700">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div aria-hidden="true" className="pointer-events-none relative mx-auto h-[552px] w-[577px] max-w-none lg:absolute lg:right-0 lg:top-[118px]">
          <div className="absolute left-0 top-0 z-10 w-[373px]">
            <CourseCard course={courses[0]} />
          </div>

          <div className="absolute bottom-1 left-[70px] z-[15] h-[72px] w-[460px] rounded-[50%] bg-[#222a3b]/20 blur-[26px]" />

          <Image
            alt=""
            className="absolute left-0 top-3 z-20 h-[540px] w-[577px] object-cover"
            height={540}
            src="/assets/hero/hero-student.png"
            width={577}
          />

          <Image
            alt=""
            className="absolute right-[-31px] top-[68px] z-50"
            height={216}
            src="/assets/professional-growth/lime-squiggle.png"
            width={217}
          />

          <ProgressCard className="left-[330px] top-[205px]" />
        </div>
      </div>
    </section>
  );
}
