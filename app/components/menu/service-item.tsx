import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { ServiceIcon } from "@/app/components/menu/service-icon";

function ServiceItem({
  service,
}: {
  service: { name: string; description: string; icon: string };
}) {
  return (
    <Card className="gap-2 p-2.5">
      <CardHeader>
        <ServiceIcon src={service.icon} alt={service.name} />
      </CardHeader>

      <CardFooter className="flex flex-col gap-0.5">
        <CardTitle className="text-sm font-medium">{service.name}</CardTitle>
        <CardDescription className="line-clamp-2 text-xs">
          {service.description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export { ServiceItem };
