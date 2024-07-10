"use client";

import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function Cta() {
  return (
    <Button
      className="rounded-full px-12 py-7 lg:px-16 lg:py-8 text-xl"
      onClick={() => signIn("spotify", { callbackUrl: "/dashboard" })}
    >
      Get Started
    </Button>
  );
}
