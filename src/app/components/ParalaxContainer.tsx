"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IMG_PADDING = 12;

export default function ParallaxContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className={className}
    >
      <div className="relative h-[150vh]">
        <StickyContainer>{children}</StickyContainer>
        {/* <OverlayCopy heading={heading} subheading={subheading} /> */}
      </div>
      {children}
    </div>
  );
}

// export function StickyContainer({
//   children,
//   backgroundColor,
//   className,
// }: {
//   children: React.ReactNode;
//   backgroundColor?: string;
//   className?: string;
// }) {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["end end", "end start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   return (
//     <motion.div
//       style={{
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: `calc(100vh - ${IMG_PADDING * 2}px)`,
//         top: IMG_PADDING,
//         scale,
//       }}
//       ref={targetRef}
//       className={cn("sticky z-0 overflow-hidden rounded-3xl", className)}
//     >
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           backgroundColor,
//           opacity,
//         }}
//       />
//       {children}
//     </motion.div>
//   );
// }

export function StickyContainer({
  children,
  backgroundColor,
  className,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["end end", "end start"],
    // offset: ["start end", "end", 0],
    offset: ["start end", "end"],
  });

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const scale = useTransform(scrollYProgress, [1, 0], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        // width: `calc(100vw - ${IMG_PADDING * 2}px)`,
        // top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className={cn("sticky z-0 overflow-hidden rounded-3xl", className)}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor,
          // opacity,
        }}
      >
        {children}
      </motion.div>
      {/* {children} */}
    </motion.div>
  );
}

export function GrowIntoView({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start end", "end"],
    offset: [0, 1, "1.33 1"],
  });

  // useScroll({
  //   target: targetRef,
  //   offset: [0, 1, "1.33 1"],
  // })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        // top: IMG_PADDING,
        // scale,
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={targetRef}
      className="sticky h-screen z-0 overflow-hidden rounded-3xl"
    >
      <motion.div className="absolute inset-0" style={{ opacity }}>
        {children}
      </motion.div>
      {/* {children} */}
    </motion.div>
  );
}
