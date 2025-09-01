"use client";

import { useState } from "react";

import { CategoriesList } from "@/app/components/menu/categories-list";
import { ProductsList } from "@/app/components/menu/products-list";

import { Category, Product } from "@/app/types";

interface MenuSectionProps {
  categories: Category[];
  products: Product[];
}

function MenuSection({ categories, products }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].slug);

  const filteredProducts = products.filter(
    (product) => product.category.slug === activeCategory,
  );

  return (
    <section className="bg-foreground text-primary-foreground w-full py-10 xl:h-screen">
      <div className="flex w-full items-center justify-end gap-5">
        <div className="flex w-full max-w-5xl gap-5">
          <CategoriesList
            categories={categories}
            active={activeCategory}
            setActive={setActiveCategory}
          />
          <ProductsList products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}

export { MenuSection };
