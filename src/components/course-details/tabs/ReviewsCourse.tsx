import Image from "next/image";

import {
  courseRatingBreakdown,
  courseSummary,
  reviews,
} from "@/data/courseDetails";

import { CourseIcon } from "../CourseIcon";

export function ReviewsCourse() {
  return (
    <div className="mt-10 text-shuttle-gray-700">
      <h2 className="font-heading text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        What Learners Are Saying
      </h2>
      <p className="mt-6 text-body-m">
        Discover what our learners have to say about their experience with &quot;Build Digital Assets: A Comprehensive Guide.&quot; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
      </p>

      <div className="mt-8 grid gap-6 rounded-[16px] border border-shuttle-gray-200 p-8 sm:grid-cols-[112px_1fr] sm:items-center">
        <div className="grid h-[112px] place-items-center rounded-[8px] bg-electric-lime-400 text-center text-shuttle-gray-950">
          <div>
            <p className="text-body-xs">Ratings</p>
            <p className="font-heading text-[32px] font-semibold leading-none">
              {courseSummary.rating}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {courseRatingBreakdown.map((row) => (
            <div
              aria-label={`${row.count} ${row.stars}-star reviews`}
              className="grid grid-cols-[1fr_120px_34px] items-center gap-4"
              key={row.stars}
            >
              <div className="h-2 overflow-hidden rounded-full bg-shuttle-gray-100">
                <div
                  className="h-full rounded-full bg-electric-lime-400"
                  style={{
                    width: `${(row.count / courseSummary.reviewCount) * 100}%`,
                  }}
                />
              </div>
              <div className="flex justify-end gap-1 text-shuttle-gray-700">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <CourseIcon
                    className={`size-4 ${starIndex < row.stars ? "opacity-100" : "opacity-35"}`}
                    key={starIndex}
                    name="star"
                  />
                ))}
              </div>
              <span className="text-body-xs">{row.count}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="font-heading mt-8 text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
        Individual Reviews:
      </h2>

      <div className="mt-6 flex flex-wrap gap-4">
        {["All rating", "5", "4", "3", "2", "1"].map((rating, index) => (
          <button className={`flex h-10 items-center gap-2 rounded-full px-4 text-label-s ${index === 0 ? "bg-electric-lime-400 text-shuttle-gray-950" : "bg-shuttle-gray-50 text-shuttle-gray-700"}`} key={rating} type="button">
            {index > 0 ? <CourseIcon className="size-4" name="star" /> : null}
            {rating}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        {reviews.map((review) => (
          <article className="min-h-[216px] rounded-[20px] border border-shuttle-gray-200 p-8" key={review.name}>
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <Image
                  alt={review.name}
                  className="size-12 rounded-full object-cover"
                  height={48}
                  src={review.avatar}
                  width={48}
                />
                <div>
                  <h3 className="text-body-m font-medium text-shuttle-gray-950">{review.name}</h3>
                  <p className="text-body-s">{review.role}</p>
                </div>
              </div>
              <time className="text-body-s" dateTime="2023">{review.date}</time>
            </div>

            <div aria-label="5 out of 5 stars" className="mt-6 flex gap-1 text-shuttle-gray-700">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <CourseIcon className="size-5" key={starIndex} name="star" />
              ))}
            </div>

            <p className="mt-6 text-body-m">&quot;{review.quote}&quot;</p>
          </article>
        ))}
      </div>
    </div>
  );
}
