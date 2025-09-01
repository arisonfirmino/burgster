import Image from "next/image";

import { Badge } from "@/app/components/ui/badge";

import { Product } from "@/app/types";

interface ProductImageProps {
  product: Pick<Product, "name" | "imageURL" | "discountPercentage">;
  showDiscount?: boolean;
}

function ProductImage({ product, showDiscount = true }: ProductImageProps) {
  return (
    <div className="relative aspect-square w-full">
      {product.discountPercentage > 0 && showDiscount && (
        <Badge className="absolute top-5 left-5">
          {product.discountPercentage}% OFF
        </Badge>
      )}

      <Image
        src={product.imageURL}
        alt={product.name}
        height={1024}
        width={1024}
        className="w-full"
      />
    </div>
  );
}

export { ProductImage };
