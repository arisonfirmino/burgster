import { Product, ProductWithDiscountedPrice } from "@/app/types";

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const calculateDiscountedPrice = (
  product: Product,
): ProductWithDiscountedPrice => {
  if (product.discountPercentage === 0)
    return { ...product, totalPrice: Number(product.basePrice) };

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return { ...product, totalPrice: Number(product.basePrice) - totalDiscount };
};
