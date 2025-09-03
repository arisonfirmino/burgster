"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/app/components/ui/button";

function SignIn() {
  const handleSignInClick = async () => await signIn("google");

  return (
    <Button onClick={handleSignInClick} variant="outline">
      Fazer login
    </Button>
  );
}

export { SignIn };
