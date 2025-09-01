import { ProductItem } from "@/app/components/menu/product-item";

import { calculateDiscountedPrice } from "@/app/helpers/formatCurrency";

import { Product } from "@/app/types";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <ul className="flex gap-5 overflow-auto pr-10 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem product={calculateDiscountedPrice(product)} />
        </li>
      ))}
    </ul>
  );
}

export { ProductsList };
