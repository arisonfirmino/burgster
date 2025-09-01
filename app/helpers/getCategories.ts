import { db } from "@/app/lib/prisma";

export const getCategories = async () => {
  const categories = await db.category.findMany({
    include: { products: true },
  });

  return JSON.parse(JSON.stringify(categories));
};
