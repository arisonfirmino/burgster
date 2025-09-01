import { ServiceHighlightImage } from "@/app/components/service-highlight-image";

function ServiceHighlight() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex h-full w-full max-w-5xl flex-col items-center gap-5 md:flex-row">
        <ServiceHighlightImage />

        <div>
          <p className="text-2xl leading-[36px] font-bold uppercase">
            Nós Oferecemos <br />{" "}
            <span className="text-secondary lg:text-4xl lg:leading-[54px]">
              Entrega em Domicílio
            </span>
          </p>

          <p className="text-muted-foreground text-sm">
            Oferecemos um serviço de entrega super rápida, e você só precisa
            esperar confortavelmente em casa. Use nossos serviços agora mesmo e
            aproveite descontos de até 50%.
          </p>
        </div>
      </div>
    </div>
  );
}

export { ServiceHighlight };
