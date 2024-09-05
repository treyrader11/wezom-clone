"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import Button from "../Button";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Industries() {
  const targetRef = useRef<HTMLElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["end end", "end start"],

  //   // offset: ["0 1", "1.33 1"],
  // });
  useScroll({
    target: targetRef,
    offset: ["0 1", "1.33 1"],
  });
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const scale = useTransform(scrollYProgress, ["0 1", "1.33 1"]);

  return (
    <motion.section
      style={
        {
          // scale,
          // opacity,
        }
      }
      ref={targetRef}
      className={cn(
        "bg-[#181818]",
        "rounded-3xl",
        "relative",
        "z-2",
        "text-white",
        "px-5"
      )}
    >
      <div
        className={cn(
          "w-full",
          "max-w-2xl",
          "mx-auto"
          // "px-5"
        )}
      >
        <h2 className="uppercase font-semibold text-4xl py-6">
          Digitaltransformation for industries
        </h2>
      </div>
      <div
        className={cn("[border-top:1px_solid_rgba(125,131,135,0.5)]", "pt-10")}
      >
        <p className="font-light">
          Wezom is your one-stop software development company, offering a full
          range of services for all industries. We drive your business progress
          with smart tech decisions tailored to a specific field.
        </p>
        <Button showIcon size="lg" variant="primary">
          Discover more
        </Button>
      </div>
    </motion.section>
  );
}
