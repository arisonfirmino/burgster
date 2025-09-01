import { cn } from "@/app/lib/utils";

import { Category } from "@/app/types";

interface CategoriesListProps {
  categories: Category[];
  active: string;
  setActive: (value: string) => void;
}

function CategoriesList({
  categories,
  active,
  setActive,
}: CategoriesListProps) {
  return (
    <ul className="bg-accent flex rotate-180 items-center rounded-l-xl px-5 [writing-mode:vertical-rl] xl:rounded-xl">
      {categories.map((category) => (
        <li
          key={category.id}
          className={cn("h-full", active !== category.slug && "opacity-75")}
        >
          <button
            onClick={() => setActive(category.slug)}
            className={cn(
              "h-full w-14 cursor-pointer",
              active === category.slug &&
                "border-primary-foreground border-l-2",
            )}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export { CategoriesList };
