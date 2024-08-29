import { cn } from "@/lib/utils";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import TransitionLink from "../TransitionLink";

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps) {
  return (
    <nav
      className={cn(
        "flex",
        "justify-between",
        "gap-x-5",
        "gap-y-[70px]",
        "uppercase",
        "font-oswald",
        "font-semibold",
        "text-5xl",
        "md:text-[30px]",
        // leading only works when text size is arbitrary value
        "leading-6",
        "tracking-tighter",
        className
      )}
    >
      {ROUTES.map(({ path, label }) => (
        <TransitionLink key={path} href={path} label={label} />
      ))}
    </nav>
  );
}

type MobileNavProps = {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
};

export function MobileNav({ children, isActive, className }: MobileNavProps) {
  return (
    <div
      className={cn(
        "z-3",
        "fixed",
        "inset-0",
        "flex",
        "flex-col",
        "justify-end",
        "bg-grey",
        "w-full",
        "transition-all",
        "duration-[600ms]",
        "ease-in-out",
        "-translate-y-full",
        // Use both screen and svh in case svh is not supported
        "min-h-screen",
        "min-h-[100svh]",
        isActive ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      {children}
    </div>
  );
}
