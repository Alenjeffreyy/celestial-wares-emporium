import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "1",
    name: "Amethyst Crystal",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    category: "Crystals",
    rating: 4.8,
    description: "High-quality amethyst crystal perfect for meditation and spiritual healing."
  },
  {
    id: "2", 
    name: "Tarot Card Deck - Cosmic Edition",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Tarot",
    rating: 4.9,
    description: "Beautiful cosmic-themed tarot deck with detailed guidebook for beginners and experts."
  },
  {
    id: "3",
    name: "Rose Quartz Heart",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    category: "Crystals",
    rating: 4.7,
    description: "Smooth rose quartz heart stone for love, compassion, and emotional healing."
  },
  {
    id: "4",
    name: "Astrology Chart Reading",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    category: "Readings",
    rating: 5.0,
    description: "Personalized birth chart reading with detailed insights into your personality and future."
  },
  {
    id: "5",
    name: "Sage Bundle Set",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1582821787950-6e17c34608bf?w=400&h=300&fit=crop",
    category: "Herbs",
    rating: 4.6,
    description: "Premium white sage bundle set for cleansing and purifying your sacred space."
  },
  {
    id: "6",
    name: "Crystal Ball - Clear Quartz",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    category: "Crystals",
    rating: 4.9,
    description: "Authentic clear quartz crystal ball for scrying and divination practices."
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-aurora bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of mystical treasures, each carefully selected to enhance your spiritual journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="stellar" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;