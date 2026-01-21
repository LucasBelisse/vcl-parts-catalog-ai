import { MessageCircle, Package } from "lucide-react";
import { categories } from "@/data/categories";
import type { Product } from "@/hooks/useProducts";

interface ProductCardProps {
  product: Product;
}

const generateWhatsAppLink = (modelo: string, preco: string): string => {
  const phone = "5500000000000"; // Substituir pelo número real
  const message = encodeURIComponent(
    `Olá VCL PEÇAS, tenho interesse no item ${modelo} que vi no catálogo por ${preco}. Está disponível?`
  );
  return `https://wa.me/${phone}?text=${message}`;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappLink = generateWhatsAppLink(product.modelo, product.preco);
  const category = categories.find((c) => c.id === product.categoria);

  const CategoryIcon = category?.icon;

  return (
    <div className="product-card animate-fade-in">
      {/* Category badge */}
      <div className="flex items-center gap-1.5 mb-3">
        {CategoryIcon && <CategoryIcon className="h-4 w-4 text-muted-foreground" />}
        <span className="text-xs font-medium text-muted-foreground truncate">
          {category?.name}
        </span>
      </div>

      {/* Product icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
          <Package className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Model name */}
      <h3 className="model-name text-center mb-2">{product.modelo}</h3>

      {/* Price */}
      <p className="price-tag text-center mb-4">{product.preco}</p>

      {/* WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <MessageCircle className="w-5 h-5" />
        Pedir no WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;
