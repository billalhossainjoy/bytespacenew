import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your bag",
  description: "Review the courses in your ByteSpace bag.",
};

export default function CartPage() {
  return (
    <main className="bg-shuttle-gray-50 px-6 py-20 sm:py-28">
      <section className="mx-auto max-w-[760px] rounded-3xl border border-shuttle-gray-200 bg-white px-6 py-16 text-center sm:px-12">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-electric-lime-400 text-shuttle-gray-950">
          <svg
            aria-hidden="true"
            className="size-8"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 8.25h10.5l.75 12H6l.75-12Z"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M9 9V6.75a3 3 0 0 1 6 0V9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h1 className="mt-6 font-heading text-[36px] font-semibold leading-tight tracking-[-0.04em] text-shuttle-gray-950 sm:text-heading-m">
          Your bag is empty
        </h1>
        <p className="mx-auto mt-4 max-w-[500px] text-body-l text-shuttle-gray-700">
          Explore the course library and choose something new to learn.
        </p>
        <Link
          className="mt-8 inline-flex h-[48px] items-center justify-center rounded-full bg-electric-lime-400 px-7 text-label-m font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-persian-blue-600"
          href="/search"
        >
          Browse courses
        </Link>
      </section>
    </main>
  );
}
