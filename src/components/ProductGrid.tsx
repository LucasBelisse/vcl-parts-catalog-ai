import ProductCard from "./ProductCard";
import { PackageSearch } from "lucide-react";
import type { Product } from "@/hooks/useProducts";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
          <PackageSearch className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Nenhum produto encontrado
        </h3>
        <p className="text-muted-foreground max-w-xs">
          Tente buscar por outro modelo ou selecione outra categoria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
