import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { AuthArtwork } from "@/components/auth/AuthArtwork";

type AuthPageShellProps = {
  contentHeight?: "default" | "login";
  form: ReactNode;
  introDescription: string;
  introTitle: string;
};

export function AuthPageShell({
  contentHeight = "default",
  form,
  introDescription,
  introTitle,
}: AuthPageShellProps) {
  return (
    <main className="auth-grid min-h-svh overflow-hidden bg-persian-blue-600 text-white xl:min-h-[1024px]">
      <div className="relative mx-auto min-h-svh w-full max-w-[1440px] xl:min-h-[1024px]">
        <Link
          aria-label="ByteSpace home"
          className="absolute left-6 top-8 z-20 xl:left-[8.47%] xl:top-[35px]"
          href="/"
        >
          <Image alt="" height={32} priority src="/brand.png" width={29} />
        </Link>

        <section className="relative z-10 mx-auto flex min-h-svh max-w-[580px] flex-col px-6 pb-10 pt-24 xl:absolute xl:left-[8.47%] xl:top-[120px] xl:block xl:min-h-0 xl:w-[475px] xl:max-w-none xl:p-0">
          <div className="xl:h-[127px]">
            <h1 className="font-heading text-label-l font-semibold">
              {introTitle}
            </h1>
            <p className="mt-4 max-w-[475px] text-body-l text-shuttle-gray-50">
              {introDescription}
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-7 text-shuttle-gray-950 shadow-[0_24px_64px_rgba(0,20,92,0.18)] xl:hidden">
            {form}
          </div>
        </section>

        <AuthArtwork />

        <section className="absolute left-[51.46%] top-[120px] z-20 hidden h-[784px] w-[579px] rounded-3xl bg-white text-shuttle-gray-950 xl:block">
          <div
            className={`absolute left-[63px] top-[61px] flex w-[453px] flex-col justify-between ${
              contentHeight === "login" ? "h-[683px]" : "h-[672px]"
            }`}
          >
            {form}
          </div>
        </section>
      </div>
    </main>
  );
}
