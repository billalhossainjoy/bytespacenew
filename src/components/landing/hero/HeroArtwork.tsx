import Image from "next/image";

import { CourseCard } from "./CourseCard";
import { ProgressCard } from "./ProgressCard";
import { StudentsCard } from "./StudentsCard";

export function DesktopArtwork() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 lg:block">
      <Image alt="" className="absolute bottom-0 left-[145px] z-10" height={442} priority src="/assets/hero/background-arch.png" width={1149} />
      <Image alt="" className="absolute bottom-0 left-[359px] z-20" height={515} priority src="/assets/hero/hero-student.png" width={722} />
      <Image alt="" className="absolute left-0 top-[103px] z-20" height={387} src="/assets/hero/decorations/lime-squiggle-left.png" width={267} />
      <Image alt="" className="absolute left-[1227px] top-[92px] z-20" height={372} src="/assets/hero/decorations/lime-block-right.png" width={213} />
      <Image alt="" className="absolute left-[182px] top-[356px] z-20" height={176} src="/assets/hero/decorations/white-squiggle-left.png" width={177} />
      <Image alt="" className="absolute left-[1126px] top-[553px] z-20" height={332} src="/assets/hero/decorations/white-squiggle-right.png" width={317} />
      <Image alt="" className="absolute left-[15px] top-[572px] z-20" height={343} src="/assets/hero/decorations/ring-left.png" width={346} />
      <Image alt="" className="absolute left-[1105px] top-[346px] z-20" height={189} src="/assets/hero/decorations/triangle-right.png" width={190} />
      <CourseCard />
      <ProgressCard />
      <StudentsCard />
    </div>
  );
}

export function MobileArtwork() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[350px] overflow-hidden lg:hidden">
      <Image alt="" className="absolute bottom-0 left-1/2 h-auto w-[720px] max-w-none -translate-x-1/2" height={442} src="/assets/hero/background-arch.png" width={1149} />
      <Image alt="" className="absolute bottom-[-12px] left-1/2 h-auto w-[490px] max-w-none -translate-x-1/2" height={515} priority src="/assets/hero/hero-student.png" width={722} />
    </div>
  );
}
