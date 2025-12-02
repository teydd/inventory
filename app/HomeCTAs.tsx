"use client"

import Link from "next/link";
import React from "react";
import { useUser } from "@stackframe/stack";

export default function HomeCTAs() {
  const user = useUser();
  const primaryHref = user ? "/dashboard" : "/sign-in";

  return (
    <div className="flex gap-4 justify-center">
      <Link
        className="bg-cyan-600 text-white border-2 rounded-lg px-8 py-3 font-semibold hover:bg-cyan-700 transition-colors"
        href={primaryHref}
      >
        {user ? "Dashboard" : "Sign in"}
      </Link>
      <Link
        className="bg-white text-cyan-600 px-8 py-3 rounded-lg border-2 border-cyan-600 hover:bg-cyan-100"
        href="/sign-in"
      >
        Learn More
      </Link>
    </div>
  );
}
