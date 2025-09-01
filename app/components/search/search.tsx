"use client";

import { useState } from "react";

import { cn } from "@/app/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { SearchList } from "@/app/components/search/search-list";

import { SearchIcon } from "lucide-react";

import { Product } from "@/app/types";

interface SearchProps {
  size?: "default" | "icon" | null | undefined;
  variant?: "default" | "outline" | "secondary" | "ghost" | null | undefined;
  className?: string;
  products: Product[];
}

function Search({ size, variant, className, products }: SearchProps) {
  const [search, setSearch] = useState("");

  const normalize = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const filteredProducts = products.filter((product) =>
    normalize(product.name).includes(normalize(search)),
  );

  return (
    <Sheet>
      <SheetTrigger
        size={size}
        variant={variant}
        className={cn("w-full justify-between font-normal", className)}
      >
        Pesquisar <SearchIcon />
      </SheetTrigger>

      <SheetContent
        side="top"
        className={cn(
          "flex w-full flex-col items-center gap-5 border-none bg-transparent p-5 shadow-none md:max-w-lg md:px-0",
        )}
      >
        <SheetTitle className="hidden" />

        <div className="bg-background flex h-10 w-full items-center gap-5 rounded-xl border px-3 py-2">
          <input
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
            className="placeholder:text-muted-foreground w-full truncate text-base outline-none md:text-sm"
          />
          <SearchIcon size={16} className="text-muted-foreground min-w-4" />
        </div>

        {search && <SearchList products={filteredProducts} />}
      </SheetContent>
    </Sheet>
  );
}

export { Search };
