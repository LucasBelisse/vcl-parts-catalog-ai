import type { CategoryId } from "./categories";

export interface Product {
  id: string;
  modelo: string;
  preco: number;
  categoria: CategoryId;
}

// Mock data - será substituído pela integração com Google Sheets
export const products: Product[] = [
  // TELAS E FRONTAIS
  { id: "1", modelo: "TELA SAMSUNG A10", preco: 89.90, categoria: "telas-frontais" },
  { id: "2", modelo: "TELA SAMSUNG A20", preco: 109.90, categoria: "telas-frontais" },
  { id: "3", modelo: "TELA SAMSUNG A30", preco: 119.90, categoria: "telas-frontais" },
  { id: "4", modelo: "TELA SAMSUNG A50", preco: 139.90, categoria: "telas-frontais" },
  { id: "5", modelo: "TELA MOTOROLA G60", preco: 149.90, categoria: "telas-frontais" },
  { id: "6", modelo: "TELA MOTOROLA G71", preco: 159.90, categoria: "telas-frontais" },
  { id: "7", modelo: "TELA XIAOMI REDMI 9", preco: 99.90, categoria: "telas-frontais" },
  { id: "8", modelo: "TELA XIAOMI REDMI NOTE 10", preco: 129.90, categoria: "telas-frontais" },
  
  // SUB PLACA, CONECTORES E DOCKS
  { id: "9", modelo: "SUB PLACA SAMSUNG A10", preco: 29.90, categoria: "sub-placa-conectores" },
  { id: "10", modelo: "SUB PLACA SAMSUNG A20", preco: 34.90, categoria: "sub-placa-conectores" },
  { id: "11", modelo: "SUB PLACA MOTOROLA G8 POWER", preco: 39.90, categoria: "sub-placa-conectores" },
  { id: "12", modelo: "DOCK XIAOMI REDMI 9", preco: 24.90, categoria: "sub-placa-conectores" },
  
  // CONECTORES SOLTOS
  { id: "13", modelo: "CONECTOR CARGA SAMSUNG A10", preco: 9.90, categoria: "conectores-soltos" },
  { id: "14", modelo: "CONECTOR CARGA SAMSUNG A20", preco: 9.90, categoria: "conectores-soltos" },
  { id: "15", modelo: "CONECTOR CARGA MOTOROLA G7", preco: 12.90, categoria: "conectores-soltos" },
  { id: "16", modelo: "CONECTOR CARGA XIAOMI NOTE 8", preco: 11.90, categoria: "conectores-soltos" },
  
  // FERRAMENTAS E COLAS
  { id: "17", modelo: "KIT CHAVES 25 PEÇAS", preco: 49.90, categoria: "ferramentas-colas" },
  { id: "18", modelo: "COLA B7000 50ML", preco: 14.90, categoria: "ferramentas-colas" },
  { id: "19", modelo: "COLA T7000 50ML", preco: 16.90, categoria: "ferramentas-colas" },
  { id: "20", modelo: "ESPÁTULA METAL", preco: 8.90, categoria: "ferramentas-colas" },
  { id: "21", modelo: "VENTOSA PROFISSIONAL", preco: 12.90, categoria: "ferramentas-colas" },
  
  // BATERIAS
  { id: "22", modelo: "BATERIA SAMSUNG A10", preco: 54.90, categoria: "baterias" },
  { id: "23", modelo: "BATERIA SAMSUNG A20", preco: 59.90, categoria: "baterias" },
  { id: "24", modelo: "BATERIA SAMSUNG A50", preco: 64.90, categoria: "baterias" },
  { id: "25", modelo: "BATERIA MOTOROLA G8 POWER", preco: 69.90, categoria: "baterias" },
  { id: "26", modelo: "BATERIA XIAOMI REDMI 9", preco: 49.90, categoria: "baterias" },
  
  // ARO CHASSI, TAMPAS E CARCAÇAS
  { id: "27", modelo: "ARO SAMSUNG A10 PRETO", preco: 19.90, categoria: "aro-chassi-tampas" },
  { id: "28", modelo: "TAMPA SAMSUNG A10 PRETO", preco: 24.90, categoria: "aro-chassi-tampas" },
  { id: "29", modelo: "ARO MOTOROLA G60 PRETO", preco: 29.90, categoria: "aro-chassi-tampas" },
  { id: "30", modelo: "CARCAÇA XIAOMI NOTE 10", preco: 49.90, categoria: "aro-chassi-tampas" },
  
  // FLEX POWER E FLEX VOLUME
  { id: "31", modelo: "FLEX POWER SAMSUNG A10", preco: 14.90, categoria: "flex-power-volume" },
  { id: "32", modelo: "FLEX VOLUME SAMSUNG A20", preco: 14.90, categoria: "flex-power-volume" },
  { id: "33", modelo: "FLEX POWER MOTOROLA G7", preco: 16.90, categoria: "flex-power-volume" },
  { id: "34", modelo: "FLEX VOLUME XIAOMI REDMI 9", preco: 12.90, categoria: "flex-power-volume" },
  
  // LENTES E VIDRO DA CÂMERA
  { id: "35", modelo: "LENTE CÂMERA SAMSUNG A10", preco: 7.90, categoria: "lentes-vidro-camera" },
  { id: "36", modelo: "LENTE CÂMERA SAMSUNG A50", preco: 9.90, categoria: "lentes-vidro-camera" },
  { id: "37", modelo: "VIDRO CÂMERA MOTOROLA G60", preco: 12.90, categoria: "lentes-vidro-camera" },
  { id: "38", modelo: "LENTE CÂMERA XIAOMI NOTE 10", preco: 8.90, categoria: "lentes-vidro-camera" },
  
  // BOTOES EXTERNOS E BOTOES POWER
  { id: "39", modelo: "BOTÃO POWER SAMSUNG A10", preco: 6.90, categoria: "botoes-externos-power" },
  { id: "40", modelo: "BOTÃO VOLUME SAMSUNG A20", preco: 6.90, categoria: "botoes-externos-power" },
  { id: "41", modelo: "KIT BOTÕES MOTOROLA G7", preco: 9.90, categoria: "botoes-externos-power" },
  
  // DIGITAIS E BIOMETRIAS
  { id: "42", modelo: "FLEX DIGITAL SAMSUNG A30", preco: 34.90, categoria: "digitais-biometrias" },
  { id: "43", modelo: "FLEX DIGITAL SAMSUNG A50", preco: 39.90, categoria: "digitais-biometrias" },
  { id: "44", modelo: "FLEX BIOMETRIA MOTOROLA G8", preco: 29.90, categoria: "digitais-biometrias" },
  
  // CÂMERAS
  { id: "45", modelo: "CÂMERA FRONTAL SAMSUNG A10", preco: 24.90, categoria: "cameras" },
  { id: "46", modelo: "CÂMERA TRASEIRA SAMSUNG A20", preco: 34.90, categoria: "cameras" },
  { id: "47", modelo: "CÂMERA FRONTAL MOTOROLA G60", preco: 29.90, categoria: "cameras" },
  { id: "48", modelo: "CÂMERA TRASEIRA XIAOMI NOTE 9", preco: 44.90, categoria: "cameras" },
  
  // GAVETAS
  { id: "49", modelo: "GAVETA CHIP SAMSUNG A10", preco: 8.90, categoria: "gavetas" },
  { id: "50", modelo: "GAVETA CHIP SAMSUNG A50", preco: 9.90, categoria: "gavetas" },
  { id: "51", modelo: "GAVETA CHIP MOTOROLA G8", preco: 8.90, categoria: "gavetas" },
  { id: "52", modelo: "GAVETA CHIP XIAOMI REDMI 9", preco: 7.90, categoria: "gavetas" },
  
  // FLEX LCD
  { id: "53", modelo: "FLEX LCD SAMSUNG A10", preco: 19.90, categoria: "flex-lcd" },
  { id: "54", modelo: "FLEX LCD SAMSUNG A30", preco: 22.90, categoria: "flex-lcd" },
  { id: "55", modelo: "FLEX LCD MOTOROLA G7 PLAY", preco: 18.90, categoria: "flex-lcd" },
  
  // CAMPAINHAS E AURICULARES
  { id: "56", modelo: "CAMPAINHA SAMSUNG A10", preco: 9.90, categoria: "campainhas-auriculares" },
  { id: "57", modelo: "AURICULAR SAMSUNG A20", preco: 12.90, categoria: "campainhas-auriculares" },
  { id: "58", modelo: "CAMPAINHA MOTOROLA G8", preco: 11.90, categoria: "campainhas-auriculares" },
  { id: "59", modelo: "AURICULAR XIAOMI REDMI 9", preco: 10.90, categoria: "campainhas-auriculares" },
  
  // FLEX FLASH
  { id: "60", modelo: "FLEX FLASH SAMSUNG A10", preco: 14.90, categoria: "flex-flash" },
  { id: "61", modelo: "FLEX FLASH SAMSUNG A30", preco: 16.90, categoria: "flex-flash" },
  { id: "62", modelo: "FLEX FLASH MOTOROLA G60", preco: 18.90, categoria: "flex-flash" },
  { id: "63", modelo: "FLEX FLASH XIAOMI NOTE 10", preco: 15.90, categoria: "flex-flash" },
];

export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const generateWhatsAppLink = (modelo: string, preco: string): string => {
  const phone = "5500000000000"; // Substituir pelo número real
  const message = encodeURIComponent(
    `Olá VCL PEÇAS, tenho interesse no item ${modelo} que vi no catálogo por ${preco}. Está disponível?`
  );
  return `https://wa.me/${phone}?text=${message}`;
};
