import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { UserAvatar } from "@/app/components/user-avatar";

import { QuoteIcon, StarIcon } from "lucide-react";

import { Review } from "@/app/types";

function ReviewItem({ review }: { review: Review }) {
  return (
    <Card className="gap-3 p-3">
      <CardHeader className="flex items-center justify-between">
        <QuoteIcon size={24} className="text-muted-foreground" />

        <div className="flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon
              key={index}
              size={16}
              className="text-primary fill-primary"
            />
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="line-clamp-3">
          {review.text}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center gap-2.5">
        <UserAvatar user={review.user} />
        <p className="text-base font-medium">{review.user.name}</p>
      </CardFooter>
    </Card>
  );
}

export { ReviewItem };
