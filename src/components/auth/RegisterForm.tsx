"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

import { AuthField } from "@/components/auth/AuthField";

export function RegisterForm() {
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Account creation is not connected to an authentication service yet. You can still explore ByteSpace without an account.",
    );
  }

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

        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <AuthField
              autoComplete="name"
              label="Full Name"
              minLength={2}
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
              minLength={8}
              name="password"
              placeholder="********"
              type="password"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              className="h-12 rounded-full bg-electric-lime-400 px-6 text-label-l font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-persian-blue-800"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      <p aria-live="polite" className="mt-6 min-h-10 text-center text-body-s text-shuttle-gray-700" role="status">
        {message}
      </p>

      <p className="mt-6 text-center text-body-s text-shuttle-gray-700 xl:mt-0">
        Already have an account?{" "}
        <Link className="text-persian-blue-800 hover:underline" href="/login">
          Login
        </Link>
      </p>
    </>
  );
}
