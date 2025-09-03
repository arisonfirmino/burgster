import { Logo } from "@/app/components/logo";
import { Search } from "@/app/components/search/search";
import { Profile } from "@/app/components/profile/profile";
import { Button } from "@/app/components/ui/button";

import { Product } from "@/app/types";

import { ShoppingBagIcon } from "lucide-react";

function HeaderBar({ products }: { products: Product[] }) {
  return (
    <div className="flex w-full max-w-5xl items-center gap-5 lg:gap-10">
      <Logo />

      <Search products={products} variant="outline" />

      <div className="flex items-center gap-5">
        <Profile />

        <Button variant="ghost" className="max-w-10 lg:max-w-fit">
          <ShoppingBagIcon />
          <span className="hidden lg:flex">Fazer pedido</span>
        </Button>
      </div>
    </div>
  );
}

export { HeaderBar };
