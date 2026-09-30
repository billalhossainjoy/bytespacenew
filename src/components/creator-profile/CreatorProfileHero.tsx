import Image from "next/image";

const gridBackground = {
  backgroundImage:
    "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
  backgroundPosition: "0 -118px",
  backgroundSize: "120px 120px",
};

export function CreatorProfileHero() {
  return (
    <section
      className="bg-persian-blue-600 px-6 pb-14 text-white lg:px-0"
      style={gridBackground}
    >
      <div className="mx-auto flex min-h-[338px] max-w-[1200px] flex-col justify-between pt-12 sm:pt-14">
        <div>
          <div className="flex items-center gap-4 sm:gap-6">
            <Image
              alt="PurePearl Studio"
              className="size-20 rounded-3xl object-cover sm:size-24"
              height={96}
              priority
              src="/assets/hero/avatars/avatar-01.png"
              width={96}
            />

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.035em] sm:text-[36px]">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-electric-lime-400 px-5 py-2 text-label-s font-medium text-shuttle-gray-950">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-body-m text-white/90 sm:text-body-l">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-[1130px] text-body-m text-white/90 sm:text-body-l">
            Welcome to the creative world of PurePearl Studio. Here, you&apos;ll
            discover the passion, expertise, and inspiration that drive my
            creative journey. Let&apos;s explore and learn together!
            <br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic
            endeavors. From digital designs to multimedia projects, each piece
            tells a unique story. Explore the world of creativity with me.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <span className="rounded-full bg-white px-5 py-3 text-label-m text-shuttle-gray-950">
            <strong className="mr-2 font-medium text-persian-blue-800">3</strong>
            Products
          </span>
          <span className="rounded-full bg-white px-5 py-3 text-label-m text-shuttle-gray-950">
            <strong className="mr-2 font-medium text-persian-blue-800">12</strong>
            Followers
          </span>
          <button
            className="ml-auto rounded-full bg-electric-lime-400 px-6 py-3 text-label-m font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03]"
            type="button"
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}
