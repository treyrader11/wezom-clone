import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("w-[122px]", "h-5")}>
      <svg
        className={cn(
          "size-full",
          "fill-white",
          "group-hover:fill-black",
          className
        )}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 172 28"
      >
        <path d="M26.2 20.3H26.1L20.8 0H15.9L10.6 20.3H10.5L6.1 0H0L7.4 28H12.9L18.3 8.9H18.4L23.8 28H29.3L36.7 0H30.6L26.2 20.3ZM39.1001 28H57.6001V23.1H44.9001V16.1H56.9001V11.6H44.9001V4.8H57.6001V0H39.1001V28ZM81.7 3.8L67.5 23V23.1H82.1V28H60.5V24.2L74.7 5V4.8H60.8V0H81.7V3.8ZM164.9 0L156.9 19.9H156.7L148.8 0H142V28H147.2V9.1H147.4L155 27.7H158.7L166.3 9.1H166.4V28H171.6V0H164.9ZM98.6 0H123.1C131.8 0 138.9 6.3 138.9 14C138.9 21.7 131.8 28 123.1 28H98.6C89.9 28 82.8 21.7 82.8 14C82.8 6.3 89.9 0 98.6 0ZM98.6 23.1H123.1C129.6 23.1 133.9 18.5 133.9 14C133.9 9.5 129.7 4.9 123.1 4.9H98.6C92 4.9 87.7 9.5 87.7 14C87.7 18.5 92 23.1 98.6 23.1Z"></path>
      </svg>
    </Link>
  );
}
