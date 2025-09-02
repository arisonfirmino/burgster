import { ReviewsList } from "@/app/components/about/reviews-list";

import { Review } from "@/app/types";

function AboutSection({ reviews }: { reviews: Review[] }) {
  return (
    <section className="flex flex-col gap-10 py-10">
      <ReviewsList reviews={reviews} />
    </section>
  );
}

export { AboutSection };
