import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const gridBackground = {
  backgroundImage:
    "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
  backgroundPosition: "0 -118px",
  backgroundSize: "120px 120px",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main
        className="relative min-h-[650px] overflow-hidden bg-persian-blue-600 px-6 text-center text-white lg:h-[840px] lg:min-h-0 lg:px-0"
        style={gridBackground}
      >
        <div className="relative mx-auto h-full max-w-[1200px]">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-14 -translate-x-1/2 select-none bg-[linear-gradient(180deg,#bdff00_0%,#bdff00_42%,rgba(189,255,0,0.72)_62%,rgba(13,69,235,0)_100%)] bg-clip-text font-heading text-[190px] font-semibold leading-none tracking-[-0.01em] text-transparent sm:text-[300px] lg:text-[480px]"
          >
            404
          </p>

          <div className="relative z-10 mx-auto flex max-w-[936px] flex-col items-center pt-[245px] sm:pt-[355px] lg:pt-[402px]">
            <h1 className="font-heading text-[40px] font-semibold leading-[1.2] tracking-[-0.04em] sm:text-[56px] lg:text-[72px]">
              The page you are looking
              <span className="block">for doesn&apos;t exist</span>
            </h1>

            <p className="mt-8 text-body-m text-white/90 sm:text-body-l">
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link
              className="mt-8 inline-flex h-[46px] items-center justify-center rounded-full bg-electric-lime-400 px-6 text-label-m font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href="/"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
