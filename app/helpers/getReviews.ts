import { db } from "@/app/lib/prisma";

export const getReviews = async () => {
  const reviews = await db.review.findMany({
    include: { user: true },
    orderBy: { id: "desc" },
  });

  return reviews;
};
