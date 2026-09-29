import { DesktopArtwork, MobileArtwork } from "./hero/HeroArtwork";
import { SearchIcon } from "./hero/SearchIcon";

export function Hero() {
  return (
    <section className="relative isolate h-[760px] overflow-hidden text-white lg:h-[906px]">
      <DesktopArtwork />
      <MobileArtwork />

      <div className="relative z-40 mx-auto flex max-w-[1100px] flex-col items-center px-5 pt-[54px] text-center sm:px-8 lg:pt-[55px]">
        <h1 className="max-w-[1000px] text-[42px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-[54px] lg:scale-x-[1.05] lg:text-[72px] lg:leading-[1.12] lg:tracking-[-0.02em]">
          <span className="block">Get Access to Hundreds</span>
          <span className="block">Courses Available</span>
        </h1>
        <p className="mt-9 max-w-[850px] text-[14px] leading-6 text-white/90 sm:text-[16px] lg:mt-10">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          action="#courses"
          className="mt-[58px] flex w-full max-w-[582px] flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6 text-left shadow-sm">
            <span className="sr-only">Search courses</span>
            <SearchIcon />
            <input
              className="min-w-0 flex-1 bg-transparent text-[16px] text-[#202126] outline-none placeholder:text-[#8c909a]"
              name="q"
              placeholder="Course, topic, creator"
              type="search"
            />
          </label>
          <button
            className="h-[52px] rounded-full bg-[#bdff00] px-7 text-[16px] font-medium text-[#101515] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
