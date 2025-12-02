"use client"

import React, { useEffect } from "react";
import { SignIn, useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export default function SignInClient() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  return <SignIn />;
}
