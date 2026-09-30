import type { Metadata } from "next";
import Link from "next/link";

import { AuthField } from "@/components/auth/AuthField";
import { AuthPageShell } from "@/components/auth/AuthPageShell";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <AuthPageShell
      contentHeight="login"
      form={<LoginForm />}
      introDescription="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      introTitle="Sign in with ease"
    />
  );
}

function LoginForm() {
  return (
    <>
      <div>
        <div>
          <p className="text-body-l text-persian-blue-800">Sign In</p>
          <h2 className="mt-1 font-heading text-heading-m font-semibold tracking-[-0.035em] text-shuttle-gray-950">
            Welcome Back
          </h2>
        </div>

        <form action="#" className="mt-10" method="post">
          <div className="space-y-6">
            <AuthField
              autoComplete="email"
              label="Email"
              name="email"
              placeholder="designer@example.com"
              type="email"
            />
            <AuthField
              autoComplete="current-password"
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
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 flex h-[141px] w-full flex-col justify-between xl:mt-0">
        <div className="flex items-center gap-4 text-body-s text-black/40">
          <span className="h-px flex-1 bg-black/20" />
          <span>or</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>

        <div className="flex justify-center gap-4">
          <button
            aria-label="Sign in with Facebook"
            className="grid size-[72px] place-items-center rounded-3xl border border-[#d1d1d1] bg-white transition-colors hover:bg-shuttle-gray-50"
            type="button"
          >
            <FacebookIcon />
          </button>
          <button
            aria-label="Sign in with Google"
            className="grid size-[72px] place-items-center rounded-3xl border border-[#d1d1d1] bg-white font-sans text-[34px] font-semibold leading-none text-black transition-colors hover:bg-shuttle-gray-50"
            type="button"
          >
            G
          </button>
        </div>
      </div>

      <p className="mt-12 text-center text-body-s text-shuttle-gray-700 xl:mt-0">
        New user?{" "}
        <Link className="text-persian-blue-800 hover:underline" href="/register">
          Create an account
        </Link>
      </p>
    </>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-8"
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" fill="#000" r="16" />
      <path
        d="M18.15 27v-9.83h3.3l.49-3.83h-3.79V10.9c0-1.11.31-1.86 1.9-1.86h2.03V5.62a27.3 27.3 0 0 0-2.96-.15c-2.93 0-4.94 1.79-4.94 5.08v2.79h-3.31v3.83h3.31V27h3.97Z"
        fill="#fff"
      />
    </svg>
  );
}
