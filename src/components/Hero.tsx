import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-cosmic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-stellar opacity-80" />
      
      {/* Floating Stars */}
      <div className="absolute inset-0">
        <Star className="absolute top-20 left-20 h-4 w-4 text-accent animate-float opacity-60" />
        <Star className="absolute top-40 right-32 h-6 w-6 text-primary animate-glow opacity-80" />
        <Star className="absolute bottom-32 left-1/4 h-3 w-3 text-accent animate-float delay-1000 opacity-70" />
        <Sparkles className="absolute top-1/3 right-20 h-5 w-5 text-accent animate-glow delay-500 opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-aurora bg-clip-text text-transparent animate-glow">
          Unlock the Mysteries
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">
          of the Universe
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover authentic crystals, sacred tarot decks, and personalized astrology readings 
          to guide your spiritual journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="cosmic" size="lg" className="text-lg px-8 py-4 shadow-glow">
            <Sparkles className="mr-2 h-5 w-5" />
            Explore Products
          </Button>
          <Button variant="stellar" size="lg" className="text-lg px-8 py-4">
            Get Your Reading
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;