export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "telas-frontais", name: "TELAS E FRONTAIS", icon: "📱" },
  { id: "sub-placa-conectores", name: "SUB PLACA, CONECTORES E DOCKS", icon: "🔌" },
  { id: "conectores-soltos", name: "CONECTORES SOLTOS", icon: "🔗" },
  { id: "ferramentas-colas", name: "FERRAMENTAS E COLAS", icon: "🔧" },
  { id: "baterias", name: "BATERIAS", icon: "🔋" },
  { id: "aro-chassi-tampas", name: "ARO CHASSI, TAMPAS E CARCAÇAS", icon: "📦" },
  { id: "flex-power-volume", name: "FLEX POWER E FLEX VOLUME", icon: "⚡" },
  { id: "lentes-vidro-camera", name: "LENTES E VIDRO DA CÂMERA", icon: "🔍" },
  { id: "botoes-externos-power", name: "BOTOES EXTERNOS E BOTOES POWER", icon: "🔘" },
  { id: "digitais-biometrias", name: "DIGITAIS E BIOMETRIAS", icon: "👆" },
  { id: "cameras", name: "CÂMERAS", icon: "📷" },
  { id: "gavetas", name: "GAVETAS", icon: "📥" },
  { id: "flex-lcd", name: "FLEX LCD", icon: "📺" },
  { id: "campainhas-auriculares", name: "CAMPAINHAS E AURICULARES", icon: "🔊" },
  { id: "flex-flash", name: "FLEX FLASH", icon: "💡" },
];

export type CategoryId = typeof categories[number]["id"];
