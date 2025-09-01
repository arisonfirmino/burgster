"use client";

import { useState } from "react";

import { CategoriesList } from "@/app/components/menu/categories-list";
import { ProductsList } from "@/app/components/menu/products-list";
import { ReviewsList } from "@/app/components/menu/reviews-list";

import { Category, Product, Review } from "@/app/types";

interface MenuSectionProps {
  categories: Category[];
  products: Product[];
  reviews: Review[];
}

function MenuSection({ categories, products, reviews }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].slug);

  const filteredProducts = products.filter(
    (product) => product.category.slug === activeCategory,
  );

  return (
    <section className="bg-foreground text-primary-foreground flex w-full flex-col items-center gap-10 py-10 xl:h-screen">
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

      <ReviewsList reviews={reviews} />
    </section>
  );
}

export { MenuSection };
