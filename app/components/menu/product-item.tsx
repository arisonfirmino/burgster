import { cn } from "@/app/lib/utils";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/app/components/ui/card";
import { ProductImage } from "@/app/components/menu/product-image";
import { ProductPrice } from "@/app/components/menu/product-price";
import { ProductDetails } from "@/app/components/menu/product-details";

import { ProductWithDiscountedPrice } from "@/app/types";

function ProductItem({ product }: { product: ProductWithDiscountedPrice }) {
  return (
    <Card className={cn("aspect-[4/5] max-w-[300px] min-w-[300px]")}>
      <CardHeader>
        <ProductImage product={product} />
      </CardHeader>

      <CardFooter
        className={cn(
          "bg-background z-10 -mt-5 flex h-full items-center justify-between gap-5 rounded-t-xl px-5 py-2.5",
        )}
      >
        <div>
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <ProductPrice product={product} />
        </div>

        <ProductDetails product={product} />
      </CardFooter>
    </Card>
  );
}

export { ProductItem };
