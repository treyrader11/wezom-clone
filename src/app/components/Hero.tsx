import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Video from "./Video";
import ParallaxContainer, { StickyContainer } from "./ParalaxContainer";
import Button from "./Button";

type HeroProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Hero({ children, className }: HeroProps) {
  return (
    <section
      className={cn(
        "h-screen",
        "sticky",
        "top-0",
        // "absolute",
        // "z-3",
        // "bg-[#000000]",
        className
      )}
    >
      {/* <BackgroundVideo /> */}
      <StickyContainer className="border z-4">
        <div
          className={cn(
            "min-h-[calc(100vh-100px-88px-80px)]",
            "flex",
            "flex-wrap",
            "items-end"
          )}
        >
          <Title
            className={cn(
              "m-0",
              "text-[44px]",
              "leading-[0.94]",
              "font-extrabold",
              "tracking-[-0.06em]",
              "font-manrope",
              "text-white"
            )}
            text="Turning Digital Ideas into Powerful & Profitable Realities"
          />
          <p>Turning Digital Ideas</p>
          <p>into Powerful &</p>
          <p>Lucrative Realities</p>
        </div>
        <Button showIcon variant="magnetic" size="lg">
          Get Started
        </Button>
      </StickyContainer>
    </section>
  );
}

type BackgroundVideoProps = {
  className?: string;
};

export function BackgroundVideo({ className }: BackgroundVideoProps) {
  return (
    <div className={cn("inset-0", "", "fixed", className)}>
      <Video />
    </div>
  );
}

export function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-[88px]",
        "pt-[80px]",
        "relative",
        "pb-0",
        "overflow-hidden",
        "z-2",
        className
      )}
    >
      <h1>{text}</h1>
    </div>
  );
}
