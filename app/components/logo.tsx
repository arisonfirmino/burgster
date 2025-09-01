import Image from "next/image";

import { cn } from "@/app/lib/utils";

function Logo({ size }: { size?: string }) {
  return (
    <div className={cn("aspect-square", size ? size : "size-10 min-w-10")}>
      <Image
        src="/burgster-logo.png"
        alt="Burgster LOGO"
        height={1024}
        width={1024}
        className="w-full"
      />
    </div>
  );
}

export { Logo };
