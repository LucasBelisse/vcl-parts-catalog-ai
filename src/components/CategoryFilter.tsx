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
      <div className="category-grid">
        <button
          onClick={() => onCategoryChange(null)}
          className={cn(
            "category-pill category-card",
            activeCategory === null && "category-pill-active"
          )}
        >
          <LayoutGrid className="h-5 w-5 shrink-0" />
          <span className="category-label">Todos</span>
        </button>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id as CategoryId)}
              className={cn(
                "category-pill category-card",
                activeCategory === category.id && "category-pill-active"
              )}
            >
              <IconComponent className="h-5 w-5 shrink-0" style={{ color: category.color }} />
              <span className="category-label">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
