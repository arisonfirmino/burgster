import { SearchItem } from "@/app/components/search/search-item";

import { calculateDiscountedPrice } from "@/app/helpers/formatCurrency";

import { Product } from "@/app/types";

function SearchList({ products }: { products: Product[] }) {
  return (
    <ul className="flex w-full flex-col gap-5">
      {products.map((product) => (
        <li key={product.id}>
          <SearchItem product={calculateDiscountedPrice(product)} />
        </li>
      ))}
    </ul>
  );
}

export { SearchList };
