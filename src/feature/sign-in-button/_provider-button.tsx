"use client";
import { Button } from "@/shared/ui/button";
import { signIn } from "next-auth/react";


export default function ProviderButton({
  providerName,
  providerIcon,
}: ProviderBtn) {
  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={() =>
        signIn(providerName, {
          callbackUrl: window.location.origin,
        })
      }
    >
      Sign up with Github
      <span className="ml-3" style={{ fontSize: "20px" }}>
        {providerIcon}
      </span>
    </Button>
  );
}
