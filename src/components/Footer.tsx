import { Star, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-8 w-8 text-accent animate-glow" />
              <h3 className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                Cosmic Treasures
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted source for authentic spiritual tools, crystals, and personalized astrology services. 
              Guiding your cosmic journey since 2020.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                hello@cosmictreasures.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Readings</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Crystals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Tarot Cards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Astrology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Herbs & Sage</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Jewelry</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Cosmic Treasures. All rights reserved. | Built with mystical energy ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;