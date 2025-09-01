import { Logo } from "@/app/components/logo";
import { Button } from "@/app/components/ui/button";

import { CircleUserIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";

function HeaderBar() {
  return (
    <div className="flex w-full max-w-5xl items-center gap-5 lg:gap-10">
      <Logo />

      <Button variant="outline" className="w-full justify-between">
        Pesquisar <SearchIcon />
      </Button>

      <div className="flex items-center gap-5">
        <Button variant="ghost" className="max-w-10 lg:max-w-fit">
          <CircleUserIcon />
          <span className="hidden lg:flex">Minha conta</span>
        </Button>

        <Button variant="ghost" className="max-w-10 lg:max-w-fit">
          <ShoppingBagIcon />
          <span className="hidden lg:flex">Fazer pedido</span>
        </Button>
      </div>
    </div>
  );
}

export { HeaderBar };
