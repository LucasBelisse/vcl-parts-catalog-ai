import { Smartphone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <div className="bg-primary-foreground/20 p-2 rounded-xl">
          <Smartphone className="w-7 h-7" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight">VCL PEÇAS</h1>
          <p className="text-xs text-primary-foreground/80 font-medium">
            Peças para Celular • Qualidade Garantida
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
