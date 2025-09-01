import Image from "next/image";

import { Product } from "@/app/types";
import { Badge } from "../ui/badge";

interface ProductImageProps {
  product: Pick<Product, "name" | "imageURL" | "discountPercentage">;
}

function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="relative aspect-square w-full">
      {product.discountPercentage > 0 && (
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
