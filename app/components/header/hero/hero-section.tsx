import { HeroContent } from "@/app/components/header/hero/hero-content";
import { HeroImage } from "@/app/components/header/hero/hero-image";

function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-5xl gap-20">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}

export { HeroSection };
