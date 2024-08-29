// "use client";

// import {
//   AnimatePresence,
//   Transition,
//   Variant,
//   motion,
//   MotionProps,
// } from "framer-motion";
// import { cn } from "@/lib/utils";

// type TransitionPanelProps = {
//   children: React.ReactNode[];
//   className?: string;
//   transition?: Transition;
//   activeIndex?: number;
//   variants?: { enter: Variant; center: Variant; exit: Variant };
// } & MotionProps;

// export default function TransitionPanel({
//   children,
//   className,
//   transition,
//   variants,
//   activeIndex,
//   ...motionProps
// }: TransitionPanelProps) {
//   return (
//     <div className={cn("relative", className)}>
//       <AnimatePresence
//         initial={false}
//         mode="popLayout"
//         custom={motionProps.custom}
//       >
//         <motion.div
//           key={activeIndex}
//           variants={variants}
//           transition={transition}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           {...motionProps}
//         >
//           {activeIndex ? children[activeIndex] : children}
//           {/* {children[activeIndex]} */}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import {
  AnimatePresence,
  Transition,
  Variant,
  motion,
  MotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TransitionPanelProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex?: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

export default function TransitionPanel({
  children,
  className,
  transition,
  variants,
  activeIndex,
  ...motionProps
}: TransitionPanelProps) {
  return (
    <AnimatePresence
    //   initial={false}
      mode="wait"
      custom={motionProps.custom}
    >
      <motion.div
        key={activeIndex}
        variants={variants}
        transition={transition}
        initial="enter"
        animate="center"
        exit="exit"
        {...motionProps}
      >
        {activeIndex ? children[activeIndex] : children}
        {/* {children[activeIndex]} */}
      </motion.div>
    </AnimatePresence>
  );
}
