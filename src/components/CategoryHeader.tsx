import { ArrowLeft } from "lucide-react";
import { categories, type CategoryId } from "@/data/categories";

interface CategoryHeaderProps {
  categoryId: CategoryId;
  onBack: () => void;
}

const CategoryHeader = ({ categoryId, onBack }: CategoryHeaderProps) => {
  const category = categories.find((c) => c.id === categoryId);

  if (!category) return null;

  const IconComponent = category.icon;

  return (
    <div className="flex items-center gap-3 py-4 px-2">
      <button
        onClick={onBack}
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="Voltar"
      >
        <ArrowLeft className="h-6 w-6 text-foreground" />
      </button>
      <div className="flex items-center gap-3">
        <IconComponent className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-bold text-foreground">{category.name}</h1>
      </div>
    </div>
  );
};

export default CategoryHeader;
