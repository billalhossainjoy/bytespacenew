import { TestimonialCard } from "./testimonials/TestimonialCard";

const testimonials = [
  {
    avatar: "/assets/testimonials/sarah-m.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    avatar: "/assets/testimonials/james-l.png",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    avatar: "/assets/testimonials/alex-b.png",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export function Testimonials() {
  return (
    <section
      className="testimonials-background border-b border-shuttle-gray-200 px-6 py-16 lg:h-[796px] lg:py-[73px]"
      id="testimonials"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:h-[145px] lg:grid-cols-[577px_580px] lg:justify-between lg:gap-0">
          <h2 className="font-heading text-[36px] font-semibold leading-[1.2] tracking-[-0.04em] text-ink sm:text-heading-m lg:mt-[39px] lg:h-[106px]">
            Discover What Our
            <span className="block">Community Is Saying</span>
          </h2>

          <p className="text-body-l text-shuttle-gray-700">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:mt-[73px] lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
