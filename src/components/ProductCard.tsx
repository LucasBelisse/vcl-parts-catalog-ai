import { MessageCircle, Package } from "lucide-react";
import { type Product, formatPrice, generateWhatsAppLink } from "@/data/products";
import { categories } from "@/data/categories";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const priceFormatted = formatPrice(product.preco);
  const whatsappLink = generateWhatsAppLink(product.modelo, priceFormatted);
  const category = categories.find((c) => c.id === product.categoria);

  return (
    <div className="product-card animate-fade-in">
      {/* Category badge */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-sm">{category?.icon}</span>
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
      <p className="price-tag text-center mb-4">{priceFormatted}</p>

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
