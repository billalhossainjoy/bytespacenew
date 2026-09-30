import Image from "next/image";
import Link from "next/link";

const footerNavigation = [
  [
    { label: "Featured Courses", href: "/#courses" },
    { label: "Featured Categories", href: "/#learning-paths" },
    { label: "Business", href: "/#courses" },
    { label: "IT", href: "/#courses" },
    { label: "Design", href: "/#courses" },
  ],
  [
    { label: "Development", href: "/#courses" },
    { label: "Marketing", href: "/#courses" },
    { label: "Photography", href: "/#courses" },
    { label: "Finance", href: "/#courses" },
    { label: "Sport", href: "/#courses" },
  ],
  [
    { label: "Become a Creator", href: "/#join-as-creator" },
    { label: "Affiliate Program", href: "/affiliate-program" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

const legalNavigation = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Settings", href: "/cookies-settings" },
];

export function Footer() {
  return (
    <footer className="border-t border-shuttle-gray-200 bg-white px-6 text-shuttle-gray-950 lg:h-[525px] lg:px-0">
      <div className="mx-auto max-w-[1200px] py-14 lg:relative lg:h-full lg:py-0">
        <div className="grid gap-12 lg:grid-cols-[504px_1fr] lg:gap-[116px] lg:pt-[70px]">
          <div>
            <Link
              aria-label="ByteSpace home"
              className="flex h-8 w-fit items-center gap-1.5"
              href="/"
            >
              <Image
                alt=""
                className="h-8 w-auto"
                height={32}
                src="/brand.png"
                width={29}
              />
              <span className="font-heading text-[26px] font-bold tracking-[-0.04em]">
                ByteSpace
              </span>
            </Link>

            <p className="mt-[21px] text-body-s">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              action="#"
              className="mt-[45px]"
              method="post"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  className="h-[52px] w-full rounded-full border border-shuttle-gray-200 bg-white px-6 text-body-m outline-none transition-colors placeholder:text-shuttle-gray-700 focus:border-persian-blue-800 sm:w-[376px]"
                  id="footer-email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
                <button
                  className="bg-electric-lime-400 h-12 rounded-full px-6 text-label-l font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-persian-blue-800"
                  type="submit"
                >
                  Search
                </button>
              </div>

              <p className="mt-6 max-w-[504px] text-body-xs">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </form>
          </div>

          <nav aria-label="Footer navigation" className="lg:pt-[53px]">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
              {footerNavigation.map((column, columnIndex) => (
                <ul className="flex flex-col gap-4" key={columnIndex}>
                  {column.map((item) => (
                    <li key={item.label}>
                      <Link
                        className="text-body-s transition-colors hover:text-persian-blue-800"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-shuttle-gray-200 pt-6 text-body-xs sm:flex-row sm:items-center sm:justify-between lg:absolute lg:inset-x-0 lg:top-[434px] lg:mt-0 lg:h-[42px]">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {legalNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    className="transition-colors hover:text-persian-blue-800"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
