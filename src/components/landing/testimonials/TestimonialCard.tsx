import Image from "next/image";

type TestimonialCardProps = {
  avatar: string;
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({
  avatar,
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <article className="min-h-[432px] rounded-[24px] bg-white p-6">
      <Image
        alt={`${name} portrait`}
        className="size-20 rounded-full"
        height={80}
        src={avatar}
        width={80}
      />

      <div className="mt-6">
        <h3 className="font-heading text-heading-xs font-semibold text-ink">
          {name}
        </h3>
        <p className="text-body-l text-persian-blue-800">{role}</p>
      </div>

      <blockquote className="mt-6 text-body-l text-shuttle-gray-700">
        {quote}
      </blockquote>
    </article>
  );
}
