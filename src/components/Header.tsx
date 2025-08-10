import { ShoppingCart, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-8 w-8 text-accent animate-glow" />
          <h1 className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            Cosmic Treasures
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            Products
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            Readings
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="cosmic" size="sm" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent text-accent-foreground">
              0
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;