"use client";

import { cn } from "@/lib/utils";
import Card from "./Card";
import { type BlogPost } from "@/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type BlogPostProps = BlogPost;

export default function BlogPost({
  image,
  title,
  id,
  category,
  date,
}: BlogPostProps) {
  const pathname = usePathname();
  const isSingleBlogPage = pathname.includes("blogs");
  return (
    <Card
      linkTo={`/blogs/${id}`}
      className={cn(
        "gap-4",
        "px-0",
        "pb-16",
        isSingleBlogPage
          ? "text-center"
          : cn("group", "hover:opacity-90", "gap-6")
      )}
    >
      <CoverImage imageSrc={image} />
      <h5
        className={cn(
          "text-3xl",
          "sm:text-4xl",
          "leading-8",
          "sm:leading-9",
          "font-semibold",
          "uppercase",
          "font-oswald",
          "tracking-tighter",
          "group-hover:opacity-70",
          isSingleBlogPage
            ? cn("text-gradient-lavender-2 text-6xl leading-[3.5rem] pt-10")
            : cn("")
        )}
      >
        {title}
      </h5>
      <p
        className={cn(
          isSingleBlogPage
            ? "text-base"
            : cn("text-xl sm:text-2xl sm:leading-4 leading-4")
        )}
      >
        {date}
      </p>
      {isSingleBlogPage && <CategoryTag>{category}</CategoryTag>}
    </Card>
  );
}

function CoverImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div
      className={cn(
        "h-[200px]",
        "sm:h-[300px]",
        "w-full",
        // "sm:w-[350px]",
        "relative",
        "max-w-full"
      )}
    >
      <Image
        fill
        src={`/news/${imageSrc}`}
        alt={"News Item"}
        className={cn("object-cover rounded-2xl md:rounded-2xl lg:rounded-3xl")}
      />
    </div>
  );
}

function CategoryTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "border",
        "border-black",
        "py-1",
        "px-3",
        "text-xs",
        "tracking-tighter",
        "px-2",
        "py-1",
        "rounded-full",
        "size-fit",
        "mx-auto",
        "text-lg"
      )}
    >
      {children}
    </div>
  );
}
