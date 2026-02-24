import { categories, type CategoryId } from "@/data/categories";
import { cn } from "@/lib/utils";
import { LayoutGrid } from "lucide-react";

interface CategoryFilterProps {
  activeCategory: CategoryId | null;
  onCategoryChange: (category: CategoryId | null) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="w-full px-1 sm:px-2">
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 landscape:grid-cols-3 md:grid-cols-4 landscape:md:grid-cols-4">
        <button
          onClick={() => onCategoryChange(null)}
          className={cn(
            "category-pill flex flex-col items-center justify-center text-center py-3 px-1 min-h-[80px]",
            activeCategory === null && "category-pill-active"
          )}
        >
          <LayoutGrid className="h-5 w-5 mb-1.5 shrink-0" />
          <span className="text-[10px] sm:text-xs leading-tight break-words hyphens-auto min-h-[24px] flex items-center justify-center">Todos</span>
        </button>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id as CategoryId)}
              className={cn(
                "category-pill flex flex-col items-center justify-center text-center py-3 px-1 min-h-[80px]",
                activeCategory === category.id && "category-pill-active"
              )}
            >
              <IconComponent className="h-5 w-5 mb-1.5 shrink-0" style={{ color: category.color }} />
              <span className="text-[10px] sm:text-xs leading-tight break-words hyphens-auto min-h-[24px] flex items-center justify-center">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
