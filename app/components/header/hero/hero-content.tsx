import { Tagline } from "@/app/components/header/hero/tagline";
import { Headline } from "@/app/components/header/hero/headline";
import { HeroDescription } from "@/app/components/header/hero/hero-description";
import { Button } from "@/app/components/ui/button";
import { HeroStats } from "@/app/components/header/hero/stats";

import { ArrowUpRightIcon } from "lucide-react";

function HeroContent() {
  return (
    <div className="flex flex-col gap-5 xl:h-[448px] xl:justify-between xl:gap-0">
      <Tagline />
      <Headline />
      <HeroDescription />

      <div className="flex items-center gap-5">
        <Button
          variant="secondary"
          className="rounded-none rounded-tr-xl rounded-bl-xl uppercase"
        >
          Fazer pedido
          <ArrowUpRightIcon />
        </Button>

        <Button
          variant="outline"
          className="rounded-none rounded-tr-xl rounded-bl-xl uppercase"
        >
          Ver Cardápio
          <ArrowUpRightIcon />
        </Button>
      </div>

      <HeroStats />
    </div>
  );
}

export { HeroContent };
