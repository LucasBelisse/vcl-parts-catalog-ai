import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryHeader from "@/components/CategoryHeader";
import ProductGrid from "@/components/ProductGrid";
import ResultsCounter from "@/components/ResultsCounter";
import HomeCarousel from "@/components/HomeCarousel";
import { useProducts } from "@/hooks/useProducts";
import { type CategoryId } from "@/data/categories";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);

  const { data: products = [], isLoading, error } = useProducts();

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
  }, [products, searchQuery, activeCategory]);

  const handleBackToMenu = () => {
    setActiveCategory(null);
    setSearchQuery("");
  };

  // Home: fullscreen black carousel
  if (!activeCategory) {
    return <HomeCarousel onSelectCategory={setActiveCategory} />;
  }

  // Category view
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-5">
        <CategoryHeader categoryId={activeCategory} onBack={handleBackToMenu} />
        <section>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </section>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Carregando produtos...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive text-lg">Erro ao carregar produtos</p>
            <p className="text-muted-foreground text-sm mt-2">
              Verifique sua conexão e tente novamente
            </p>
          </div>
        )}

        {!isLoading && !error && (
          <>
            <ResultsCounter count={filteredProducts.length} />
            <section>
              <ProductGrid products={filteredProducts} />
            </section>
          </>
        )}

        <footer className="text-center py-8 border-t border-border mt-8">
          <p className="text-sm text-muted-foreground">
            © 2025 VCL PEÇAS • Todos os direitos reservados
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
