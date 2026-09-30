import Image from "next/image";
import Link from "next/link";

export function CreatorCta() {
  return (
    <section
      className="relative isolate h-[488px] overflow-hidden bg-persian-blue-600 px-6 text-shuttle-gray-50"
      id="join-as-creator"
      style={{
        backgroundImage:
          "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 lg:block"
      >
        <Image
          alt=""
          className="absolute left-[-35px] top-[-108px]"
          height={306}
          src="/assets/hero/decorations/lime-squiggle-left.png"
          width={267}
        />
        <Image
          alt=""
          className="absolute left-[178px] top-0"
          height={176}
          src="/assets/creator-cta/white-squiggle.png"
          width={177}
        />
        <Image
          alt=""
          className="creator-cta-lime absolute bottom-[-153px] left-[19px]"
          height={343}
          src="/assets/hero/decorations/ring-left.png"
          width={346}
        />
        <Image
          alt=""
          className="creator-cta-lime absolute right-[163px] top-0"
          height={189}
          src="/assets/hero/decorations/triangle-right.png"
          width={190}
        />
        <Image
          alt=""
          className="creator-cta-white absolute right-[-163px] top-[5px]"
          height={372}
          src="/assets/hero/decorations/lime-block-right.png"
          width={374}
        />
        <Image
          alt=""
          className="absolute left-[-33px] top-[218px]"
          height={189}
          src="/assets/hero/decorations/triangle-right.png"
          width={190}
        />
        <Image
          alt=""
          className="absolute bottom-[-95px] right-[-38px]"
          height={306}
          src="/assets/hero/decorations/lime-squiggle-left.png"
          width={267}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[964px] flex-col items-center justify-center text-center">
        <h2 className="font-heading w-full max-w-[710px] text-[36px] font-semibold leading-[1.2] tracking-[-0.04em] sm:text-heading-m">
          Unlock Your Potential as a
          <span className="block">Creator with ByteSpace</span>
        </h2>

        <p className="mt-10 max-w-[964px] text-body-l">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          className="bg-electric-lime-400 mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-label-l font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href="/register"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
