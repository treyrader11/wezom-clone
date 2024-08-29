import {
  CATEGORY_FILTERS,
  type CategoryLabel,
  BLOG_DATA,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";

type CategoriesProps = {
  activeCategory: CategoryLabel;
  categories: CategoryLabel[];
  setActiveCategory: React.Dispatch<React.SetStateAction<CategoryLabel>>;
};

export default function CategoryFilters({
  activeCategory,
  categories,
  setActiveCategory,
}: CategoriesProps) {
  return (
    <ul
      key={categories.length}
      className={cn(
        "gap-2",
        "flex-wrap",
        "justify-center",
        "items-enter",
        "flex"
      )}
    >
      {categories.map((category, i) => (
        <li key={i}>
          <Category
            onClick={() => setActiveCategory(category)}
            className={cn(
              "text-white",
              "text-2xl",
              activeCategory === category
                ? "text-black bg-white"
                : "hover:text-white/50 bg-black"
            )}
          >
            {category}
          </Category>
        </li>
      ))}
    </ul>
  );
}

type CategoryItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
};

function Category({ className, onClick, children }: CategoryItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full",
        "sm:py-3.5",
        "sm:px-8",
        "py-1.5",
        "px-3",
        "sm:py-4",
        "sm:px-9",
        "text-sm",
        "sm:text-2xl",
        // needs to overlap bg image
        "relative",
        "z-1",
        className
      )}
    >
      {children}
    </button>
  );
}



// type CategoriesProps = {
//   activeCategory: CategoryLabel;
//   categories: CategoryLabel[];
//   setActiveCategory: React.Dispatch<React.SetStateAction<CategoryLabel>>;
// };

// export default function CategoryFilters({
//   activeCategory,
//   categories,
//   setActiveCategory,
// }: CategoriesProps) {
//   const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setActiveCategory(event.target.value as CategoryLabel);
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault(); // Prevents the default form submission behavior
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <ul
//         key={categories.length}
//         className={cn(
//           "gap-2",
//           "flex-wrap",
//          "flex-center"
//         )}
//       >
//         {categories.map((category, i) => (
//           <li key={i}>
//             <input
//               type="radio"
//               id={`category-${i}`}
//               name="category"
//               value={category}
//               checked={activeCategory === category}
//               onChange={handleCategoryChange}
//               className={cn(
//                 "sr-only", // Screen reader only, to keep the radio hidden
//                 "text-white",
//                 "hover:text-white/50",
//                 "bg-black",
//                 "text-2xl",
//                 "checked:text-black",
//                 "checked:bg-white"
//               )}
//             />
//             <label
//               htmlFor={`category-${i}`}
//               className={cn(
//                 "rounded-full",
//                 "sm:py-3.5",
//                 "sm:px-8",
//                 "py-1.5",
//                 "px-3",
//                 "sm:py-4",
//                 "sm:px-9",
//                 "text-sm",
//                 "sm:text-2xl",
//                 // needs to overlap bg image
//                 "relative",
//                 "z-1",
//                 "text-white",
//                 "text-2xl",
//                 "hover:text-white/50 bg-black",
//                 "peer-checked:text-black peer-checked:bg-white"
//               )}
//             >
//               {category}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </form>
//   );
// }
