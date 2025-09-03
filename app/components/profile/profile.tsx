import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { getUser } from "@/app/helpers/getUser";

import { cn } from "@/app/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { UserAvatar } from "@/app/components/user-avatar";
import { SessionButton } from "@/app/components/profile/session-button";

import { CircleUserIcon } from "lucide-react";

async function Profile() {
  const session = await getServerSession(authOptions);
  const user = await getUser(session?.user.email);

  return (
    <Sheet>
      <SheetTrigger variant="ghost" className={cn("max-w-10 lg:max-w-fit")}>
        {session && user ? (
          <UserAvatar user={user} size="size-4" />
        ) : (
          <CircleUserIcon />
        )}
        <span className="hidden lg:flex">Minha conta</span>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="top-5 w-full max-w-[90%] rounded-xl border md:right-5 md:left-auto md:max-w-[350px] md:-translate-x-0"
      >
        <SheetHeader className={cn("flex items-center gap-2.5 border-b p-3")}>
          {session && user && <UserAvatar user={user} />}

          <div>
            <SheetTitle className={cn("text-base font-semibold")}>
              {session && user ? user.name : "Bem-vindo(a)!"}
            </SheetTitle>
            <SheetDescription className={cn("text-muted-foreground text-xs")}>
              {session && user
                ? user.email
                : "Faça login e aproveite nossos serviços"}
            </SheetDescription>
          </div>
        </SheetHeader>

        <SheetFooter className={cn("border-t p-3")}>
          <SessionButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export { Profile };
