"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";

import { LogInIcon, LogOutIcon } from "lucide-react";

function SessionButton() {
  const { data: session } = useSession();

  const handleSignInClick = async () => await signIn("google");
  const handleSignOutClick = async () => await signOut();

  return (
    <Button
      onClick={session ? handleSignOutClick : handleSignInClick}
      variant="ghost"
      className={cn(
        "h-7 w-full justify-start rounded-md",
        session && "text-red-600",
      )}
    >
      {session ? <LogOutIcon /> : <LogInIcon />}
      {session ? "Sair" : "Fazer login"}
    </Button>
  );
}

export { SessionButton };
