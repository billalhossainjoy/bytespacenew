"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/search" },
  { label: "Creators", href: "/#creators" },
];

function BagIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 8.25h10.5l.75 12H6l.75-12Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M9 9V6.75a3 3 0 0 1 6 0V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block size-6">
      <span
        className={`absolute left-1/2 top-[7px] h-0.5 w-5 -translate-x-1/2 bg-current transition-transform ${
          open ? "translate-y-[4px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-1/2 top-[11px] h-0.5 w-5 -translate-x-1/2 bg-current transition-opacity ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-1/2 top-[15px] h-0.5 w-5 -translate-x-1/2 bg-current transition-transform ${
          open ? "-translate-y-[4px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavigation = useMemo(
    () => [
      ...navigation,
      { label: "Sign In", href: "/login" },
      { label: "Join Us", href: "/register" },
    ],
    [],
  );

  return (
    <header
      className="relative z-50 bg-persian-blue-600 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      <div className="mx-auto flex h-[118px] w-full max-w-[1200px] items-center justify-between px-6 lg:px-0">
        <Link
          aria-label="ByteSpace home"
          className="flex items-center gap-2.5"
          href="/"
        >
          <Image
            alt=""
            className="h-8 w-auto"
            height={32}
            priority
            src="/brand.png"
            width={29}
          />
          <span className="font-heading text-[22px] font-bold tracking-[-0.04em]">
            ByteSpace
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 text-base">
            {navigation.map((item) => (
              <li key={item.href} >
                <Link
                  className="transition-opacity hover:opacity-70"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-7 text-base md:flex">
          <Link className="transition-opacity hover:opacity-70" href="/login">
            Sign In
          </Link>
          <Link className="transition-opacity hover:opacity-70" href="/register">
            Join Us
          </Link>
          <button
            aria-label="Open shopping bag"
            className="transition-opacity hover:opacity-70"
            type="button"
          >
            <BagIcon />
          </button>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="grid size-11 place-items-center md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-4 top-[96px] rounded-2xl bg-white p-5 text-[#171717] shadow-xl md:hidden"
        >
          <ul className="space-y-1">
            {mobileNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-lg px-3 py-2.5 font-medium hover:bg-neutral-100"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
