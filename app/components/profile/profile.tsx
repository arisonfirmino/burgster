import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { getUser } from "@/app/helpers/getUser";

import { cn } from "@/app/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { UserAvatar } from "@/app/components/user-avatar";
import { SignIn } from "@/app/components/profile/signin";

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

      <SheetContent className="p-5">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {session && user ? <p>{user.name}</p> : <SignIn />}
      </SheetContent>
    </Sheet>
  );
}

export { Profile };
