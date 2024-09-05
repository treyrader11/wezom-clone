"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "magnetic";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
};

export default function Button({
  onClick,
  className,
  children,
  variant,
  size = "sm",
  showIcon = false,
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const isMagnetic = variant === "magnetic";

  // Magnetic logic
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });
  const ySpring = useSpring(y, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      // ref={ref}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      // style={{ transform }}
      // transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onClick={onClick}
      aria-label="Contact us"
      className={cn(
        "border-orange-600",
        "group-hover:bg-orange-600",
        "rounded-full",
        "text-white",
        "group-hover:text-black",
        "size-fit",
        "uppercase",
        {
          "px-3.5 py-2 border": variant !== "magnetic",
          "text-black hover:text-white": isPrimary || variant === "magnetic",
          "bg-orange-600": isPrimary,
        },
        "py-2",
        "inline-flex",
        "gap-x-3",
        "items-center",
        "group",
        size === "sm" && cn("text-[10px]"),
        "font-semibold",
        size === "lg" && cn("px-8 py-3.5 text-sm"),
        className
      )}
    >
      {variant === "magnetic" ? (
        <MagneticButton>
          {showIcon && <Arrow size={50} className="w-10" />}
          {children}
        </MagneticButton>
      ) : (
        <>
          {children}
          {showIcon && <Arrow size={18} />}
        </>
      )}
    </motion.a>

    // <MdOutlineArrowUpward
    //   className={cn(
    //     "pointer-events-none",
    //     "relative",
    //     "z-10",
    //     "rotate-45",
    //     "text-7xl",
    //     "text-black",
    //     "transition-all",
    //     "duration-700",
    //     "ease-out",
    //     "group-hover:rotate-90"
    //   )}
    // />

    // <div
    //   className={cn(
    //     "pointer-events-none",
    //     "absolute",
    //     "inset-0",
    //     "z-0",
    //     "scale-0",
    //     "rounded-full",
    //     "bg-white",
    //     "transition-transform",
    //     "duration-700",
    //     "ease-out",
    //     "group-hover:scale-100"
    //   )}
    // />

    // <motion.svg
    //   initial={{ rotate: 0 }}
    //   animate={{ rotate: 360 }}
    //   transition={{
    //     duration: 25,
    //     repeat: Infinity,
    //     repeatType: "loop",
    //     ease: "linear",
    //   }}
    //   style={{
    //     top: "50%",
    //     left: "50%",
    //     x: "-50%",
    //     y: "-50%",
    //   }}
    //   width="200"
    //   height="200"
    //   className="pointer-events-none absolute z-10"
    // >
    //   <path
    //     id="circlePath"
    //     d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
    //     fill="none"
    //   />
    //   <text>
    //     <textPath
    //       href="#circlePath"
    //       fill="black"
    //       className={cn(
    //         "fill-black",
    //         "text-xl",
    //         "font-light",
    //         "uppercase",
    //         "opacity-0",
    //         "transition-opacity",
    //         "duration-700",
    //         "ease-out",
    //         "group-hover:opacity-100"
    //       )}
    //     >
    //       You can write whatever text you want around this circle
    //     </textPath>
    //   </text>
    // </motion.svg>
  );
}

function Arrow({ size, className }: { size?: number; className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none",
        "flex",
        "overflow-hidden",
        "text-2xl",
        // "size-fit",
        // "w-fit",
        "w-5",
        "overflow-hidden",
        // "border-yellow-500 border",
        className
      )}
    >
      <FiArrowRight
        size={size}
        className={cn(
          "arrow",
          "shrink-0",
          "-translate-x-full",
          "transition-transform",
          "duration-300",
          "group-hover:animate-arrow",
          "opacity-0",
          "group-hover:translate-x-0",
          "group-hover:opacity-100",
          "rotate-[330deg]"
          // "transform 0.3s ease 0.2s,opacity 0.3s ease 0.2s"
        )}
      />
      <FiArrowRight
        size={size}
        className={cn(
          "arrow",
          "shrink-0",
          "-translate-x-full",
          "transition-transform",
          "duration-300",
          "group-hover:translate-x-0",
          "group-hover:opacity-0",
          // "group-hover:animate-arrow",
          "rotate-[330deg]"
        )}
      />
    </div>
  );
}

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });
  const ySpring = useSpring(y, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "group",
        "relative",
        "grid",
        "size-[220px]",
        "place-content-center",
        "rounded-full",
        "border-2",
        "border-black",
        "transition-colors",
        "duration-700",
        "ease-out",
        "transition-transform",
        "duration-700",
        "ease-out",
        "scale-50",
        "group-hover:scale-100",
        "bg-orange-600"
      )}
    >
      <MdOutlineArrowUpward
        className={cn(
          "pointer-events-none",
          "relative",
          "z-10",
          "rotate-45",
          "text-7xl",
          "text-black",
          "transition-all",
          "duration-700",
          "ease-out",
          "group-hover:rotate-90"
        )}
      />

      {/* <div
        className={cn(
          "pointer-events-none",
          "absolute",
          "inset-0",
          "z-0",
          "scale-0",
          "rounded-full",
          "bg-white",
          "transition-transform",
          "duration-700",
          "ease-out",
          "group-hover:scale-100"
        )}
      /> */}
      {children}
    </motion.button>
  );
}
