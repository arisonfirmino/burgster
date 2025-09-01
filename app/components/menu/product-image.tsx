import Image from "next/image";

import { Product } from "@/app/types";

interface ProductImageProps {
  product: Pick<Product, "name" | "imageURL" | "discountPercentage">;
}

function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="relative aspect-square w-full">
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
