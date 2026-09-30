import type { SitePage } from "@/data/sitePages";

const gridBackground = {
  backgroundImage:
    "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
  backgroundPosition: "0 -118px",
  backgroundSize: "120px 120px",
};

export function SiteInfoPage({ page }: { page: SitePage }) {
  return (
    <main>
      <section className="bg-persian-blue-600 px-6 py-20 text-white lg:px-0" style={gridBackground}>
        <div className="mx-auto max-w-[1200px]">
          <p className="text-body-m text-electric-lime-400">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-[760px] font-heading text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-heading-m">
            {page.title}
          </h1>
          <p className="mt-5 max-w-[720px] text-body-l text-white/90">
            {page.description}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-0">
        <div className="mx-auto max-w-[800px] space-y-12">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-heading-xs font-semibold tracking-[-0.03em] text-shuttle-gray-950">
                {section.title}
              </h2>
              <p className="mt-4 text-body-m text-shuttle-gray-700">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
