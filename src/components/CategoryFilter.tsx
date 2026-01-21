import { categories, type CategoryId } from "@/data/categories";
import { cn } from "@/lib/utils";
import { LayoutGrid } from "lucide-react";

interface CategoryFilterProps {
  activeCategory: CategoryId | null;
  onCategoryChange: (category: CategoryId | null) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="w-full px-2">
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={cn(
            "category-pill flex flex-col items-center justify-center text-center py-3 px-2 min-h-[70px]",
            activeCategory === null && "category-pill-active"
          )}
        >
          <LayoutGrid className="h-5 w-5 mb-1" />
          <span className="text-xs leading-tight">Todos</span>
        </button>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id as CategoryId)}
              className={cn(
                "category-pill flex flex-col items-center justify-center text-center py-3 px-2 min-h-[70px]",
                activeCategory === category.id && "category-pill-active"
              )}
            >
              <IconComponent className="h-5 w-5 mb-1" />
              <span className="text-xs leading-tight line-clamp-2">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
