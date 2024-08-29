"use client";

import { cn } from "@/lib/utils";
import Logo from "../Logo";
import { useState } from "react";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import Burger from "../Burger";
import Nav, { MobileNav } from "./Nav";
import Button from "../Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition(800);
  return (
    <header
      style={{ backgroundColor: scrollY ? "white" : "transparent" }}
      className={cn(
        "fixed",
        "inset-x-0",
        "top-0",
        "z-3",
        // "h-[var(--header-height)]",
        "h-16",
        "flex",
        "items-center",
        "transition-colors",
        "duration-300",
        "ease-in-out",
        { "hover:bg-white": !scrollY },
        "group"
      )}
    >
      <div
        className={cn(
          "flex",
          "flex-wrap",
          "w-[calc(100%_-_16px)]",
          "ml-4",
          "justify-between",
          "items-center"
        )}
      >
        <Logo className={cn({ "fill-black": scrollY })} />
        <div className={cn("flex", "items-center", "ml-auto")}>
          <Nav className="hidden md:flex" />
          <Button className={cn({ "bg-orange-600 text-black": scrollY })}>
            Contact us
          </Button>
          <Burger
            isActive={isMobileMenuOpen}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          />
        </div>
      </div>
    </header>

    // <MobileNav
    //   isActive={isMobileMenuOpen}
    //   className={cn({
    //     "bg-black text-white": isNewsroomPage,
    //   })}
    // >
    //   <Nav
    //     setIsProductMenuOpen={() => setIsProductMenuOpen(true)}
    //     className={cn("flex-col flex-center pb-[70px]")}
    //     isActive={(href) => {
    //       if (isProductMenuOpen && href === "#") {
    //         return true;
    //       }
    //       return href === pathname;
    //     }}
    //   />
    // </MobileNav>
  );
}
