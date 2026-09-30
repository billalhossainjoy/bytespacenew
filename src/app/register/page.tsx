import type { Metadata } from "next";

import { AuthPageShell } from "@/components/auth/AuthPageShell";
import { RegisterForm } from "@/components/auth/RegisterForm";

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
