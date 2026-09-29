import Image from "next/image";

const avatars = Array.from(
  { length: 8 },
  (_, index) => `/assets/hero/avatars/avatar-${String(index + 1).padStart(2, "0")}.png`,
);

export function StudentsCard() {
  return (
    <div className="absolute left-[328px] top-[719px] z-30 w-[258px] rounded-[16px] bg-white px-4 py-4 text-[#202126] shadow-[0_8px_28px_rgba(29,40,67,0.08)]">
      <p className="text-[16px] font-medium leading-5">Happy Students</p>
      <p className="text-[12px] text-[#858995]">4.5 (240) <span className="text-[#bdff00]">★</span></p>
      <div className="mt-2 flex items-center">
        {avatars.map((avatar, index) => (
          <Image
            alt=""
            className={`size-[38px] rounded-full border-2 border-white object-cover ${index === 0 ? "" : "-ml-3.5"}`}
            height={43}
            key={avatar}
            src={avatar}
            width={43}
          />
        ))}
        <span className="-ml-3.5 grid size-[43px] shrink-0 place-items-center rounded-full border-2 border-white bg-[#bdff00] text-[12px] font-semibold">2K+</span>
      </div>
    </div>
  );
}
