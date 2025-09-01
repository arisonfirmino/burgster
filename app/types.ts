import { Prisma } from "@prisma/client";

export type Category = Prisma.CategoryGetPayload<{
  include: { products: true };
}>;

export type Product = Prisma.ProductGetPayload<{
  include: { category: true };
}>;

export interface ProductWithDiscountedPrice extends Product {
  totalPrice: number;
}

export type Review = Prisma.ReviewGetPayload<{
  include: { user: true };
}>;
