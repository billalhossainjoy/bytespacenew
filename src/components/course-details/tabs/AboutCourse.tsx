import Image from "next/image";

import { courseDescription, keyPoints } from "@/data/courseDetails";

import { CourseIcon } from "../CourseIcon";

const sneakPeekImages = [
  "/assets/course-details/sneak-peek/sneak-peek-01.png",
  "/assets/course-details/sneak-peek/sneak-peek-02.png",
  "/assets/course-details/sneak-peek/sneak-peek-03.png",
  "/assets/course-details/sneak-peek/sneak-peek-04.png",
];

export function AboutCourse() {
  return (
    <div className="mt-10 text-shuttle-gray-700">
      <h2 className="font-heading text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        Description
      </h2>

      <div className="mt-6 space-y-7 text-body-m">
        {courseDescription.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h2 className="font-heading mt-8 text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        Sneak Peek
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {sneakPeekImages.map((image, index) => (
          <Image
            alt={`Digital asset course preview ${index + 1}`}
            className="aspect-[167/125] w-full rounded-[16px] object-cover"
            height={125}
            key={image}
            src={image}
            width={167}
          />
        ))}
      </div>

      <h2 className="font-heading mt-8 text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        Key Points
      </h2>

      <ul className="mt-6 space-y-4">
        {keyPoints.map((point) => (
          <li className="flex items-center gap-3 text-body-m" key={point}>
            <CourseIcon className="size-5 shrink-0 text-persian-blue-800" name="check" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
