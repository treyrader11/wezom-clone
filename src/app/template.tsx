"use client";

import { animatePageIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className={cn(
          "min-h-screen",
          "min-w-screen",
          "bg-neutral-950",
          "z-[99]",
          "fixed",
          "inset-0"
        )}
      />
      {children}
    </div>
  );
}
