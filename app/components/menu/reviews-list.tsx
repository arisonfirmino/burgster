import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { ReviewItem } from "@/app/components/menu/review-item";

import { Review } from "@/app/types";

function ReviewsList({ reviews }: { reviews: Review[] }) {
  return (
    <Carousel>
      <div className="flex items-center justify-between px-5 xl:px-0">
        <div>
          <p className="text-2xl font-semibold">Quem Já Mordeu, Aprova!</p>
          <p className="text-primary-foreground/80 text-sm">
            Veja o que a galera achou dos nossos burgers
          </p>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>

      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id}>
            <ReviewItem review={review} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export { ReviewsList };
