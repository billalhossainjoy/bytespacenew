import {
  LearningPathCard,
  type LearningPath,
} from "./learning-paths/LearningPathCard";

const learningPaths: LearningPath[] = [
  {
    title: "Design",
    icon: "/assets/learning-paths/icons/design.svg",
    iconWidth: 36,
    iconHeight: 36,
  },
  {
    title: "Development",
    icon: "/assets/learning-paths/icons/development.svg",
    iconWidth: 24,
    iconHeight: 33,
  },
  {
    title: "IT & Software",
    icon: "/assets/learning-paths/icons/it-software.svg",
    iconWidth: 36,
    iconHeight: 24,
  },
  {
    title: "Business",
    icon: "/assets/learning-paths/icons/business.svg",
    iconWidth: 30,
    iconHeight: 27,
  },
  {
    title: "Marketing",
    icon: "/assets/learning-paths/icons/marketing.svg",
    iconWidth: 30,
    iconHeight: 30,
  },
  {
    title: "Photography",
    icon: "/assets/learning-paths/icons/photography.svg",
    iconWidth: 30,
    iconHeight: 27,
  },
];

export function LearningPaths() {
  return (
    <section className="bg-white px-6 pb-[120px]" id="learning-paths">
      <div className="mx-auto max-w-[1202px]">
        <div className="text-center">
          <h2 className="font-heading text-heading-s font-semibold tracking-[-0.04em] text-ink">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-body-l mx-auto mt-4 max-w-[917px] text-shuttle-gray-400">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there&apos;s
            something for everyone. Unleash your potential and explore our carefully
            curated categories.
          </p>
        </div>

        <div className="mt-[72px] grid grid-cols-2 justify-center gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-[repeat(6,167px)] xl:gap-10">
          {learningPaths.map((path) => (
            <LearningPathCard key={path.title} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
}
