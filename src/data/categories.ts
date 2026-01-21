import { 
  Smartphone, 
  Cable, 
  CircuitBoard, 
  Wrench, 
  Battery, 
  RectangleVertical,
  Unplug,
  Aperture,
  Power, 
  Fingerprint, 
  Camera, 
  CreditCard,
  MonitorSmartphone,
  Volume2, 
  Flashlight,
  type LucideIcon
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
}

export const categories: Category[] = [
  { id: "telas-frontais", name: "TELAS E FRONTAIS", icon: Smartphone, color: "#3B82F6" }, // blue
  { id: "sub-placa-conectores", name: "SUB PLACA, CONECTORES E DOCKS", icon: Cable, color: "#8B5CF6" }, // purple
  { id: "conectores-soltos", name: "CONECTORES SOLTOS", icon: CircuitBoard, color: "#10B981" }, // green
  { id: "ferramentas-colas", name: "FERRAMENTAS E COLAS", icon: Wrench, color: "#F59E0B" }, // amber
  { id: "baterias", name: "BATERIAS", icon: Battery, color: "#22C55E" }, // green
  { id: "aro-chassi-tampas", name: "ARO CHASSI, TAMPAS E CARCAÇAS", icon: RectangleVertical, color: "#6366F1" }, // indigo
  { id: "flex-power-volume", name: "FLEX POWER E FLEX VOLUME", icon: Unplug, color: "#EF4444" }, // red
  { id: "lentes-vidro-camera", name: "LENTES E VIDRO DA CÂMERA", icon: Aperture, color: "#06B6D4" }, // cyan
  { id: "botoes-externos-power", name: "BOTOES EXTERNOS E BOTOES POWER", icon: Power, color: "#EC4899" }, // pink
  { id: "digitais-biometrias", name: "DIGITAIS E BIOMETRIAS", icon: Fingerprint, color: "#14B8A6" }, // teal
  { id: "cameras", name: "CÂMERAS", icon: Camera, color: "#F97316" }, // orange
  { id: "gavetas", name: "GAVETAS", icon: CreditCard, color: "#A855F7" }, // purple
  { id: "flex-lcd", name: "FLEX LCD", icon: MonitorSmartphone, color: "#0EA5E9" }, // sky
  { id: "campainhas-auriculares", name: "CAMPAINHAS E AURICULARES", icon: Volume2, color: "#84CC16" }, // lime
  { id: "flex-flash", name: "FLEX FLASH", icon: Flashlight, color: "#FACC15" }, // yellow
];

export type CategoryId = typeof categories[number]["id"];
