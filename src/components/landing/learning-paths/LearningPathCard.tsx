import Image from "next/image";

export type LearningPath = {
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

type LearningPathCardProps = {
  path: LearningPath;
};

export function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <article className="flex h-[167px] w-full max-w-[167px] items-center justify-center rounded-[24px] border border-shuttle-gray-200 bg-white">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="bg-electric-lime-400 grid size-[60px] place-items-center rounded-[40px]">
          <Image
            alt=""
            aria-hidden="true"
            height={path.iconHeight}
            src={path.icon}
            width={path.iconWidth}
          />
        </div>
        <h3 className="text-label-xl font-medium text-shuttle-gray-950">
          {path.title}
        </h3>
      </div>
    </article>
  );
}
