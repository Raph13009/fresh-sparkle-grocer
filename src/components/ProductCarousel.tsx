import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import kinderImage from "@/assets/kinder.jpg";
import noodlesImage from "@/assets/noodles.jpg";
import sodaImage from "@/assets/soda-cans.jpg";

const products = [
  {
    id: 1,
    name: "Kinder",
    description: "Chocolat délicieux pour toute la famille",
    image: kinderImage,
    price: "2.50€",
  },
  {
    id: 2,
    name: "Nouilles Instantanées",
    description: "Repas rapide et savoureux",
    image: noodlesImage,
    price: "1.80€",
  },
  {
    id: 3,
    name: "Canettes de Soda",
    description: "Boissons rafraîchissantes variées",
    image: sodaImage,
    price: "1.20€",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 soft-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Produits Phares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits exclusifs et savoureux
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl card-shadow">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex-shrink-0 bg-card"
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                    {/* Product Image */}
                    <div className="relative">
                      <div className="aspect-square rounded-xl overflow-hidden soft-shadow hover-lift">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6 text-center md:text-left">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                          {product.name}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4">
                          {product.description}
                        </p>
                        <div className="text-3xl font-bold text-highlight">
                          {product.price}
                        </div>
                      </div>
                      <Button 
                        size="lg" 
                        className="bg-secondary text-highlight hover:bg-secondary/90 font-semibold px-8"
                      >
                        Voir le produit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-primary/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;