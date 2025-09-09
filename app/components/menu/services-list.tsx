import { ServiceItem } from "@/app/components/menu/service-item";

function ServicesList() {
  const services = [
    {
      name: "Hambúrgueres Artesanais",
      description:
        "Feitos com ingredientes frescos e selecionados para um sabor incomparável.",
      icon: "/burger-icon.png",
    },
    {
      name: "Molhos Exclusivos",
      description: "Receitas únicas que realçam o sabor de cada lanche.",
      icon: "/sauce-icon.png",
    },
    {
      name: "Entrega Rápida e Segura",
      description:
        "Garantia de receber seu pedido quentinho no conforto da sua casa.",
      icon: "/delivery-icon.png",
    },
    {
      name: "Atendimento Personalizado",
      description:
        "Nossa equipe está pronta para tornar sua experiência especial.",
      icon: "/service-icon.png",
    },
  ];

  return (
    <ul className="grid w-full max-w-5xl grid-cols-1 gap-5 px-5 md:grid-cols-2 md:px-10 xl:grid-cols-4 xl:p-0">
      {services.map((service) => (
        <li key={service.name}>
          <ServiceItem service={service} />
        </li>
      ))}
    </ul>
  );
}

export { ServicesList };
