import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { CategoryId } from "@/data/categories";

export interface Product {
  id: string;
  modelo: string;
  preco: string;
  categoria: CategoryId;
}

async function fetchProducts(): Promise<Product[]> {
  console.log("Fetching products from Google Sheets...");
  
  const { data, error } = await supabase.functions.invoke('get-products');
  
  if (error) {
    console.error("Error fetching products:", error);
    throw new Error("Erro ao carregar produtos");
  }
  
  if (!data || !data.products) {
    console.log("No products returned from API");
    return [];
  }
  
  console.log(`Loaded ${data.products.length} products`);
  return data.products as Product[];
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 2 * 60 * 1000, // Cache for 2 minutes
    refetchOnWindowFocus: true,
  });
}
