import { formatCurrency } from "@/app/helpers/formatCurrency";

import { ProductWithDiscountedPrice } from "@/app/types";

interface ProductPriceProps {
  product: Pick<
    ProductWithDiscountedPrice,
    "basePrice" | "totalPrice" | "discountPercentage"
  >;
}

function ProductPrice({ product }: ProductPriceProps) {
  return (
    <p className="text-base font-medium">
      {formatCurrency(product.totalPrice)}{" "}
      {product.discountPercentage > 0 && (
        <span className="text-muted-foreground text-sm font-normal line-through">
          {formatCurrency(Number(product.basePrice))}
        </span>
      )}
    </p>
  );
}

export { ProductPrice };
