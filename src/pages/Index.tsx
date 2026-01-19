import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import ResultsCounter from "@/components/ResultsCounter";
import { products } from "@/data/products";
import { categories, type CategoryId } from "@/data/categories";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.modelo
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory
        ? product.categoria === activeCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const activeCategoryName = activeCategory
    ? categories.find((c) => c.id === activeCategory)?.name
    : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-5">
        {/* Search Section */}
        <section>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </section>

        {/* Category Filter */}
        <section>
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </section>

        {/* Results Counter */}
        <ResultsCounter
          count={filteredProducts.length}
          categoryName={activeCategoryName}
        />

        {/* Product Grid */}
        <section>
          <ProductGrid products={filteredProducts} />
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border mt-8">
          <p className="text-sm text-muted-foreground">
            © 2025 VCL PEÇAS • Todos os direitos reservados
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Entre em contato pelo WhatsApp para fazer seu pedido
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
