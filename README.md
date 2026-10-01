# ByteSpace

ByteSpace is a responsive course marketplace built from a Figma design. It
includes the marketing site, course discovery, course details, lesson and
review views, a creator profile, authentication screens, and a custom 404
page.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `next/image` and `next/font`

## Local setup

Use Node.js 20 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are required for the current frontend-only build.

## Commands

```bash
pnpm dev    # start the development server
pnpm lint   # run ESLint
pnpm build  # create a production build and run type checking
pnpm start  # serve the production build
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Marketing landing page |
| `/search` | Search, filter, sort, and paginate courses |
| `/courses/build-digital-asset` | Full course detail page |
| `/courses/build-digital-asset/lessons` | Course lesson overview |
| `/courses/build-digital-asset/reviews` | Course ratings and reviews |
| `/courses/[slug]` | Catalog course detail pages |
| `/creators` | Creator profile and course filters |
| `/cart` | Shopping bag empty state |
| `/login` and `/register` | Authentication screens |

Unknown routes use the branded 404 page. Footer links such as About, Help,
Privacy Policy, and Terms of Service are backed by the dynamic information
page route.

## Project structure

```text
src/
├── app/          # App Router pages, layouts, and metadata
├── components/   # Shared and feature-level UI
└── data/         # Course and information-page content
public/assets/    # Images and icons grouped by page or feature
```

Most pages are server components. Client components are kept around the
interactions that need local state, including course filters, tabs, sharing,
following, authentication forms, and newsletter feedback.

Course cards and detail routes share the records in `src/data/courses.ts` so
titles, images, prices, and URLs stay consistent. The featured course uses the
more detailed content in `src/data/courseDetails.ts`.

## Current scope

This repository is the frontend implementation. Authentication, checkout,
creator follows, and newsletter subscriptions currently provide interface
feedback but are not connected to persistent backend services.
