import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AuthField } from "@/components/auth/AuthField";
import { RegisterArtwork } from "@/components/auth/RegisterArtwork";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create your ByteSpace account.",
};

export default function RegisterPage() {
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
              Sign up and come in
            </h1>
            <p className="mt-4 max-w-[475px] text-body-l text-shuttle-gray-50">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-7 text-shuttle-gray-950 shadow-[0_24px_64px_rgba(0,20,92,0.18)] xl:hidden">
            <RegisterForm />
          </div>
        </section>

        <RegisterArtwork />

        <section className="absolute left-[51.46%] top-[120px] z-20 hidden h-[784px] w-[579px] rounded-3xl bg-white text-shuttle-gray-950 xl:block">
          <div className="absolute left-[63px] top-[61px] flex h-[672px] w-[453px] flex-col justify-between">
            <RegisterForm />
          </div>
        </section>
      </div>
    </main>
  );
}

function RegisterForm() {
  return (
    <>
      <div>
        <div>
          <p className="text-body-l text-persian-blue-800">Create an Account</p>
          <h2 className="mt-1 font-heading text-heading-m font-semibold tracking-[-0.035em] text-shuttle-gray-950">
            Welcome to
            <br />
            ByteSpace
          </h2>
        </div>

        <form action="#" className="mt-10" method="post">
          <div className="space-y-6">
            <AuthField
              autoComplete="name"
              label="Full Name"
              name="name"
              placeholder="Jamie Davis"
              type="text"
            />
            <AuthField
              autoComplete="email"
              label="Email"
              name="email"
              placeholder="designer@example.com"
              type="email"
            />
            <AuthField
              autoComplete="new-password"
              label="Password"
              name="password"
              placeholder="********"
              type="password"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              className="h-12 rounded-full bg-electric-lime-400 px-6 text-label-l font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      <p className="mt-12 text-center text-body-s text-shuttle-gray-700 xl:mt-0">
        Already have an account?{" "}
        <Link className="text-persian-blue-800 hover:underline" href="/login">
          Login
        </Link>
      </p>
    </>
  );
}
