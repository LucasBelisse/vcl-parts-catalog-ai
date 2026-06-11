import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CategoryId } from "@/data/categories";

import telas from "@/assets/categories/telas.png.asset.json";
import subplacas from "@/assets/categories/subplacas.png.asset.json";
import conectores from "@/assets/categories/conectores.png.asset.json";
import colas from "@/assets/categories/colas.png.asset.json";
import baterias from "@/assets/categories/baterias.png.asset.json";
import aros from "@/assets/categories/aros.png.asset.json";
import flexpower from "@/assets/categories/flexpower.png.asset.json";
import lentes from "@/assets/categories/lentes.png.asset.json";
import botoes from "@/assets/categories/botoes.png.asset.json";
import biometrias from "@/assets/categories/biometrias.png.asset.json";
import cameras from "@/assets/categories/cameras.png.asset.json";
import gavetas from "@/assets/categories/gavetas.png.asset.json";
import flexlcd from "@/assets/categories/flexlcd.png.asset.json";
import campainhas from "@/assets/categories/campainhas.png.asset.json";
import flexflash from "@/assets/categories/flexflash.png.asset.json";

interface CategorySlide {
  id: CategoryId;
  title: string;
  image: string;
}

const slides: CategorySlide[] = [
  { id: "telas-frontais", title: "TELAS E FRONTAIS", image: telas.url },
  { id: "sub-placa-conectores", title: "SUB PLACAS, DOCK E CONECTORES", image: subplacas.url },
  { id: "conectores-soltos", title: "CONECTORES SOLTOS", image: conectores.url },
  { id: "ferramentas-colas", title: "COLAS, FERRAMENTAS E FITAS", image: colas.url },
  { id: "baterias", title: "BATERIAS", image: baterias.url },
  { id: "aro-chassi-tampas", title: "AROS, CHASSIS, TAMPAS E CARCAÇAS", image: aros.url },
  { id: "flex-power-volume", title: "FLEX POWER E VOLUME", image: flexpower.url },
  { id: "lentes-vidro-camera", title: "LENTES E VIDROS DE CÂMERAS", image: lentes.url },
  { id: "botoes-externos-power", title: "BOTÕES EXTERNOS, POWER E VOLUME", image: botoes.url },
  { id: "digitais-biometrias", title: "DIGITAIS E BIOMETRIAS", image: biometrias.url },
  { id: "cameras", title: "CÂMERAS FRONTAIS E TRASEIRAS", image: cameras.url },
  { id: "gavetas", title: "GAVETAS DE CHIP", image: gavetas.url },
  { id: "flex-lcd", title: "FLEX LCD", image: flexlcd.url },
  { id: "campainhas-auriculares", title: "CAMPAINHAS E AURICULARES", image: campainhas.url },
  { id: "flex-flash", title: "FLEX FLASH", image: flexflash.url },
];

interface HomeCarouselProps {
  onSelectCategory: (id: CategoryId) => void;
}

const HomeCarousel = ({ onSelectCategory }: HomeCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", dragFree: false });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {/* Intro Slide */}
          <div className="relative flex-[0_0_100%] min-w-0 h-full flex flex-col items-center justify-center px-6">
            <div className="text-center max-w-2xl">
              <p className="text-xs sm:text-sm tracking-[0.4em] text-white/60 mb-6 uppercase">
                Bem-vindo
              </p>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight leading-none mb-2">
                VCL
              </h1>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight leading-none mb-10 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                PEÇAS
              </h1>
              <div className="h-px w-24 bg-white/30 mx-auto mb-8" />
              <p className="text-sm sm:text-base text-white/80 leading-relaxed uppercase tracking-wider">
                Acesse o catálogo mais completo de peças da região e venha ser nosso cliente.
                Teremos uma grande satisfação em atendê-lo.
              </p>
              <div className="mt-12 flex items-center justify-center gap-2 text-white/50 text-xs uppercase tracking-[0.3em] animate-pulse">
                Deslize <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Category Slides */}
          {slides.map((s) => (
            <div
              key={s.id}
              className="relative flex-[0_0_100%] min-w-0 h-full flex flex-col items-center justify-between px-6 pt-16 pb-10 sm:pt-20 sm:pb-14"
            >
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center uppercase max-w-3xl leading-tight">
                {s.title}
              </h2>

              <div className="flex-1 w-full flex items-center justify-center py-6 min-h-0">
                <img
                  src={s.image}
                  alt={s.title}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)]"
                  draggable={false}
                />
              </div>

              <button
                onClick={() => onSelectCategory(s.id)}
                className="group relative px-10 py-4 sm:px-14 sm:py-5 bg-white text-black font-bold text-sm sm:text-base tracking-[0.25em] uppercase rounded-full transition-all duration-300 hover:bg-white/90 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
              >
                <span className="flex items-center gap-3">
                  Acesse Aqui
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Nav Arrows */}
      {canPrev && (
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Anterior"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      )}
      {canNext && (
        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Próximo"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center animate-pulse"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      )}

      {/* Progress Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {Array.from({ length: slides.length + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === selected ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 text-xs sm:text-sm text-white/50 tabular-nums tracking-widest">
        {String(selected + 1).padStart(2, "0")} / {String(slides.length + 1).padStart(2, "0")}
      </div>
    </div>
  );
};

export default HomeCarousel;
