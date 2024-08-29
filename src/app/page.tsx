"use client";

import Hero, { BackgroundVideo, Title } from "./components/Hero";
import Banners from "./components/home/Banners";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import InView from "./components/InView";
import { createTransition, slideUpVariants } from "@/lib/motion";
import Video from "./components/Video";
import { GrowIntoView, StickyContainer } from "./components/ParalaxContainer";

export default function HomePage() {
  return (
    <>
      <BackgroundVideo />
      <main className="relative">
        {/* <BackgroundVideo /> */}

        <Hero />
        <GrowIntoView>
          <Banners />
        </GrowIntoView>
        <Banners />
        <Banners />
      </main>
    </>
  );
}
