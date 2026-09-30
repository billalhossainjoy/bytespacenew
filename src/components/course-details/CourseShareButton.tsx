"use client";

import { useState } from "react";

import { courseSummary } from "@/data/courseDetails";

import { CourseIcon } from "./CourseIcon";

export function CourseShareButton() {
  const [message, setMessage] = useState("");

  async function shareCourse() {
    const shareData = {
      text: courseSummary.subtitle,
      title: courseSummary.title,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setMessage("Course shared.");
        return;
      }

      await navigator.clipboard.writeText(shareData.url);
      setMessage("Course link copied to your clipboard.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setMessage("The course link could not be shared.");
    }
  }

  return (
    <div className="absolute right-0 top-[60px] hidden lg:block">
      <button
        className="flex h-12 items-center gap-3 rounded-full bg-electric-lime-400 px-6 text-label-m font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        onClick={shareCourse}
        type="button"
      >
        <CourseIcon className="size-5" name="share" />
        Share
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </div>
  );
}
