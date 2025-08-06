import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCarousel from "@/components/ProductCarousel";
import { ShoppingBag, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-store.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-fresh-yellow">Fresh</span> & <span className="text-fresh-yellow">Fresh</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-light">
              Votre épicerie de proximité
            </p>
            <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Découvrez des produits frais et exclusifs dans un cadre moderne et accueillant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-highlight hover:bg-secondary/90 font-semibold px-8 py-4 text-lg transition-bounce"
                asChild
              >
                <Link to="/produits">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Voir nos produits
                </Link>
              </Button>
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 border-primary-foreground font-semibold px-8 py-4 text-lg transition-smooth"
                asChild
              >
                <Link to="/contact#carte">
                  <MapPin className="mr-2 h-5 w-5" />
                  Nous trouver
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
            <Star className="h-8 w-8 text-secondary" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
            <ShoppingBag className="h-6 w-6 text-secondary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Pourquoi choisir Fresh & Fresh ?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Depuis notre ouverture dans le 15ème arrondissement de Paris, nous nous engageons à offrir 
              des produits de qualité exceptionnelle dans un environnement moderne et accueillant. 
              Notre équipe passionnée sélectionne soigneusement chaque produit pour vous garantir 
              une expérience d'achat unique.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="bg-card hover-lift transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Qualité Premium
                  </h3>
                  <p className="text-muted-foreground">
                    Sélection rigoureuse de produits frais et de marques reconnues
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card hover-lift transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Ouvert 7j/7
                  </h3>
                  <p className="text-muted-foreground">
                    Horaires étendus pour s'adapter à votre rythme de vie
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card hover-lift transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Proximité
                  </h3>
                  <p className="text-muted-foreground">
                    Au cœur du 15ème, facilement accessible en métro et bus
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <ProductCarousel />

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Venez nous voir pour des produits exclusifs
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Découvrez notre gamme complète de produits soigneusement sélectionnés 
              pour votre plaisir et votre bien-être
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-highlight hover:bg-secondary/90 font-semibold px-8 py-4 text-lg highlight-shadow"
                asChild
              >
                <Link to="/contact">
                  Nous rendre visite
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-secondary hover:text-highlight hover:border-secondary font-semibold px-8 py-4 text-lg transition-smooth"
                asChild
              >
                <Link to="/produits">
                  Voir tous nos produits
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;