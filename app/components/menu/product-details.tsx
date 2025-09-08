import { cn } from "@/app/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { ProductImage } from "@/app/components/menu/product-image";
import { ProductPrice } from "@/app/components/menu/product-price";
import { OrderNote } from "@/app/components/menu/order-note";

import { ShoppingBagIcon } from "lucide-react";

import { ProductWithDiscountedPrice } from "@/app/types";

function ProductDetails({ product }: { product: ProductWithDiscountedPrice }) {
  return (
    <Sheet>
      <SheetTrigger size="icon">
        <ShoppingBagIcon />
      </SheetTrigger>

      <SheetContent side="top">
        <SheetHeader>
          <ProductImage product={product} />
        </SheetHeader>

        <div className="bg-background z-10 -mt-5 h-full rounded-t-3xl p-5">
          <SheetTitle className={cn("text-xl font-semibold")}>
            {product.name}
          </SheetTitle>
          <SheetDescription className={cn("text-sm")}>
            {product.description}
          </SheetDescription>

          <div className="mt-2 flex flex-col">
            <span className="text-muted-foreground text-xs">
              Serve até 1 pessoa
            </span>
            <ProductPrice product={product} />
          </div>

          <OrderNote />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { ProductDetails };
