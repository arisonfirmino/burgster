import { Badge } from "@/app/components/ui/badge";
import { AboutImage } from "@/app/components/about/about-image";
import { AboutText } from "@/app/components/about/about-text";
import { ReviewsList } from "@/app/components/about/reviews-list";

import { Review } from "@/app/types";

function AboutSection({ reviews }: { reviews: Review[] }) {
  return (
    <section className="flex flex-col items-center gap-5 py-5 md:gap-10 lg:py-10">
      <div className="flex w-full max-w-5xl flex-col gap-5 px-5 md:gap-10 xl:p-0">
        <Badge className="uppercase">Sobre nós</Badge>

        <div className="flex flex-col items-center gap-5 md:flex-row lg:gap-20">
          <AboutImage />
          <AboutText />
        </div>
      </div>

      <ReviewsList reviews={reviews} />
    </section>
  );
}

export { AboutSection };
