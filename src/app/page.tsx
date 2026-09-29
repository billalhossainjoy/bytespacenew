import { CourseDiscovery } from "@/components/landing/CourseDiscovery";
import { Hero } from "@/components/landing/Hero";
import { LearningPaths } from "@/components/landing/LearningPaths";
import { PartnerStrip } from "@/components/landing/PartnerStrip";
import { ProfessionalGrowth } from "@/components/landing/ProfessionalGrowth";

export default function Home() {
  return (
    <main id="home">
      <div
        className="bg-persian-blue-600"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
          backgroundPosition: "0 -118px",
          backgroundSize: "120px 120px",
        }}
      >
        <Hero />
      </div>
      <PartnerStrip />
      <CourseDiscovery />
      <LearningPaths />
      <ProfessionalGrowth />
    </main>
  );
}
