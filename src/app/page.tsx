import Hero, { BackgroundVideo, Title } from "./components/Hero";
import Banners from "./components/home/Banners";
import { cn } from "@/lib/utils";
import Video from "./components/Video";
import { GrowIntoView, StickyContainer } from "./components/ParalaxContainer";
import Industries from "./components/home/Industries";
import { InViewBasicMultiple } from "./components/InViewBasicMultiple";
import InView from "./components/InView";

export default function HomePage() {
  return (
    <>
      <BackgroundVideo />
      <main className="relative">
        {/* <BackgroundVideo /> */}
        <Hero />
        {/* <GrowIntoView> */}
        <InView
          variants={{
            hidden: {
              opacity: 1,
              y: 30,
              scale: 0.95,
              // filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              // filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", delay: 0.1 }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
        >
        
          <Industries />
        </InView>

        {/* <InViewBasicMultiple /> */}
        {/* </GrowIntoView> */}
        <Banners />
        <Banners />
      </main>
    </>
  );
}
