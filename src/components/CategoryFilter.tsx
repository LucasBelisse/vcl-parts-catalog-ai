import { categories, type CategoryId } from "@/data/categories";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  activeCategory: CategoryId | null;
  onCategoryChange: (category: CategoryId | null) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="relative">
      <div className="overflow-x-auto hide-scrollbar py-1">
        <div className="flex gap-2 px-1 min-w-max">
          <button
            onClick={() => onCategoryChange(null)}
            className={cn(
              "category-pill",
              activeCategory === null && "category-pill-active"
            )}
          >
            📋 Todos
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id as CategoryId)}
              className={cn(
                "category-pill",
                activeCategory === category.id && "category-pill-active"
              )}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>
      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default CategoryFilter;
