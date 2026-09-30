import type { Metadata } from "next";

import { AuthPageShell } from "@/components/auth/AuthPageShell";
import { LoginForm } from "@/components/auth/LoginForm";

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
