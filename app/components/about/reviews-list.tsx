import { ReviewItem } from "@/app/components/about/review-item";

import { Review } from "@/app/types";

function ReviewsList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full max-w-5xl flex-col items-center justify-center">
        <p className="text-2xl leading-[36px] font-semibold">
          Quem Já Mordeu, Aprova!
        </p>
        <p className="text-sm">Veja o que a galera achou dos nossos burgers</p>
      </div>

      <div className="flex w-full overflow-hidden">
        <ul className="animate-scroll flex gap-5">
          {[...reviews, ...reviews].map((review, index) => (
            <li key={index} aria-hidden="true">
              <ReviewItem review={review} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { ReviewsList };
