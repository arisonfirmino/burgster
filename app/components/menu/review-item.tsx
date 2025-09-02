import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { UserAvatar } from "@/app/components/user-avatar";

import { Review } from "@/app/types";

function ReviewItem({ review }: { review: Review }) {
  return (
    <Card className="gap-3 p-3">
      <CardHeader>
        <CardDescription className="line-clamp-3">
          {review.text}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center gap-2.5">
        <UserAvatar user={review.user} />
        <p className="text-base font-medium">{review.user.name}</p>
      </CardFooter>
    </Card>
  );
}

export { ReviewItem };
