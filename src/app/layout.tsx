import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ByteSpace",
    template: "%s | ByteSpace",
  },
  description: "Learn, grow, and create with ByteSpace.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-body min-h-full">{children}</body>
    </html>
  );
}
