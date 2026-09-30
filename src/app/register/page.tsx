import type { Metadata } from "next";
import Link from "next/link";

import { AuthField } from "@/components/auth/AuthField";
import { AuthPageShell } from "@/components/auth/AuthPageShell";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create your ByteSpace account.",
};

export default function RegisterPage() {
  return (
    <AuthPageShell
      form={<RegisterForm />}
      introDescription="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      introTitle="Sign up and come in"
    />
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
