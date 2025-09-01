import { cn } from "@/app/lib/utils";

function Header({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "flex h-screen w-full flex-col items-center gap-5 p-5 lg:p-10 xl:px-0",
        className,
      )}
      {...props}
    />
  );
}

export { Header };
