type CourseIconName =
  | "certificate"
  | "check"
  | "consultation"
  | "level"
  | "play"
  | "resources"
  | "share"
  | "star"
  | "students"
  | "video";

type CourseIconProps = {
  className?: string;
  name: CourseIconName;
};

export function CourseIcon({ className = "size-5", name }: CourseIconProps) {
  const commonProps = {
    "aria-hidden": true,
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  switch (name) {
    case "share":
      return (
        <svg {...commonProps}>
          <circle cx="18" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="6" cy="12" r="2.25" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="19" r="2.25" stroke="currentColor" strokeWidth="1.8" />
          <path d="m8 10.9 7.8-4.55M8 13.1l7.8 4.55" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "level":
      return (
        <svg {...commonProps}>
          <path d="M5 15v4M12 10v9M19 5v14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.25" />
        </svg>
      );
    case "star":
      return (
        <svg {...commonProps} fill="currentColor">
          <path d="m12 2.7 2.82 5.71 6.3.92-4.56 4.44 1.08 6.28L12 17.08l-5.64 2.97 1.08-6.28-4.56-4.44 6.3-.92L12 2.7Z" />
        </svg>
      );
    case "students":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 19v-1.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          <path d="M16 6.2a2.5 2.5 0 0 1 0 4.8M16.5 13.2A4 4 0 0 1 20.5 17v2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "play":
      return (
        <svg {...commonProps} fill="currentColor">
          <path d="M8.5 6.3v11.4a1 1 0 0 0 1.55.84l8.1-5.7a1 1 0 0 0 0-1.68l-8.1-5.7a1 1 0 0 0-1.55.84Z" />
        </svg>
      );
    case "resources":
      return (
        <svg {...commonProps}>
          <path d="M3.5 6.5h6l1.7 2H20.5v9.5h-17V6.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M7 12h10M7 15h7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      );
    case "video":
      return (
        <svg {...commonProps}>
          <rect height="11" rx="1" stroke="currentColor" strokeWidth="1.8" width="13" x="3" y="6.5" />
          <path d="m16 10 4.5-2.5v9L16 14v-4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "certificate":
      return (
        <svg {...commonProps}>
          <path d="M5 8.5h14V20H5V8.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M9 8.5V6a3 3 0 0 1 6 0v2.5M12 12v4M10 14h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "consultation":
      return (
        <svg {...commonProps}>
          <path d="M5.3 4.5h4.2v4.2H5.3V4.5ZM14.5 15.3h4.2v4.2h-4.2v-4.2ZM4 17l5-5M15 4l5 5M7.5 19.5l9-15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps} fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="m7.5 12 3 3 6-6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
  }
}
