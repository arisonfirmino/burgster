import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { ProductImage } from "@/app/components/menu/product-image";
import { ProductPrice } from "@/app/components/menu/product-price";
import { Button } from "@/app/components/ui/button";

import { ShoppingBagIcon } from "lucide-react";

import { ProductWithDiscountedPrice } from "@/app/types";

function SearchItem({ product }: { product: ProductWithDiscountedPrice }) {
  return (
    <Card className="h-24 flex-row">
      <CardHeader className="aspect-square h-full">
        <ProductImage product={product} showDiscount={false} />
      </CardHeader>

      <CardContent className="bg-background z-10 -ml-2 flex h-full w-full items-center justify-between rounded-l-xl px-5">
        <div>
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <ProductPrice product={product} />
        </div>

        <Button size="icon">
          <ShoppingBagIcon />
        </Button>
      </CardContent>
    </Card>
  );
}

export { SearchItem };
