import Image from "next/image";

const assetRoot = "/assets/auth/register";

export function AuthArtwork() {
  return (
    <div aria-hidden="true" className="absolute inset-0 hidden xl:block">
      <Image
        alt=""
        className="absolute left-[8.47%] top-[394px] h-[384px] w-[373px]"
        height={384}
        src={`${assetRoot}/course-card-digital-assets.png`}
        width={373}
      />
      <Image
        alt=""
        className="absolute left-[16.25%] top-[306px] h-[384px] w-[373px]"
        height={384}
        priority
        src={`${assetRoot}/course-card-big-data.png`}
        width={373}
      />
      <Image
        alt=""
        className="absolute left-[10.21%] top-[323px] h-[147px] w-[148px]"
        height={147}
        src={`${assetRoot}/lime-ring.png`}
        width={148}
      />
      <Image
        alt=""
        className="absolute left-[6.81%] top-[706px] h-[189px] w-[190px]"
        height={189}
        src={`${assetRoot}/lime-triangle.png`}
        width={190}
      />
      <Image
        alt=""
        className="absolute left-[32.99%] top-[630px] h-[176px] w-[177px]"
        height={176}
        src={`${assetRoot}/white-squiggle.png`}
        width={177}
      />
      <Image
        alt=""
        className="absolute left-[24.17%] top-[741px] h-[123px] w-[258px]"
        height={123}
        src={`${assetRoot}/happy-students.png`}
        width={258}
      />
    </div>
  );
}
