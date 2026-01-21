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
}

export const categories: Category[] = [
  { id: "telas-frontais", name: "TELAS E FRONTAIS", icon: Smartphone },
  { id: "sub-placa-conectores", name: "SUB PLACA, CONECTORES E DOCKS", icon: Cable },
  { id: "conectores-soltos", name: "CONECTORES SOLTOS", icon: CircuitBoard },
  { id: "ferramentas-colas", name: "FERRAMENTAS E COLAS", icon: Wrench },
  { id: "baterias", name: "BATERIAS", icon: Battery },
  { id: "aro-chassi-tampas", name: "ARO CHASSI, TAMPAS E CARCAÇAS", icon: RectangleVertical },
  { id: "flex-power-volume", name: "FLEX POWER E FLEX VOLUME", icon: Unplug },
  { id: "lentes-vidro-camera", name: "LENTES E VIDRO DA CÂMERA", icon: Aperture },
  { id: "botoes-externos-power", name: "BOTOES EXTERNOS E BOTOES POWER", icon: Power },
  { id: "digitais-biometrias", name: "DIGITAIS E BIOMETRIAS", icon: Fingerprint },
  { id: "cameras", name: "CÂMERAS", icon: Camera },
  { id: "gavetas", name: "GAVETAS", icon: CreditCard },
  { id: "flex-lcd", name: "FLEX LCD", icon: MonitorSmartphone },
  { id: "campainhas-auriculares", name: "CAMPAINHAS E AURICULARES", icon: Volume2 },
  { id: "flex-flash", name: "FLEX FLASH", icon: Flashlight },
];

export type CategoryId = typeof categories[number]["id"];
