import { db } from "@/app/lib/prisma";

export const getProducts = async () => {
  const products = await db.product.findMany({
    include: { category: true },
    orderBy: { id: "desc" },
  });

  return JSON.parse(JSON.stringify(products));
};
