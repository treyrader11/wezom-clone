import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type LoadMoreProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function Button({
  onClick,
  className,
  children,
}: LoadMoreProps) {
  return (
    <a
      onClick={onClick}
      aria-label="Contact us"
      className={cn(
        "border",
        "border-orange-600",
        "group-hover:bg-orange-600",
        "rounded-full",
        "text-white",
        "group-hover:text-black",
        "size-fit",
        "uppercase",
        "px-3.5",
        "py-2",
        "text-[10px]",
        "font-semibold",
        className
      )}
    >
      {children}
    </a>
  );
}
