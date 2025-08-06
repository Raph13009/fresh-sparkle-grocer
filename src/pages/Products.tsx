import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import kinderImage from "@/assets/kinder.jpg";
import noodlesImage from "@/assets/noodles.jpg";
import sodaImage from "@/assets/soda-cans.jpg";
import lollipopsImage from "@/assets/lollipops.jpg";

const products = [
  {
    id: 1,
    name: "Kinder Chocolat",
    description: "Chocolat au lait crémeux avec une délicieuse surprise à l'intérieur",
    price: "2.50€",
    image: kinderImage,
    category: "Confiserie",
    featured: true,
  },
  {
    id: 2,
    name: "Nouilles Instantanées",
    description: "Repas rapide et savoureux, parfait pour les pauses déjeuner",
    price: "1.80€",
    image: noodlesImage,
    category: "Épicerie",
    featured: true,
  },
  {
    id: 3,
    name: "Canettes de Soda",
    description: "Collection de boissons rafraîchissantes aux saveurs variées",
    price: "1.20€",
    image: sodaImage,
    category: "Boissons",
    featured: true,
  },
  {
    id: 4,
    name: "Sucettes Colorées",
    description: "Sucettes artisanales aux fruits, parfaites pour petits et grands",
    price: "0.80€",
    image: lollipopsImage,
    category: "Confiserie",
    featured: false,
  },
  {
    id: 5,
    name: "Biscuits Premium",
    description: "Assortiment de biscuits fins et délicieux",
    price: "3.20€",
    image: kinderImage, // Placeholder
    category: "Biscuiterie",
    featured: false,
  },
  {
    id: 6,
    name: "Chocolats Assortis",
    description: "Sélection de chocolats fins aux saveurs exquises",
    price: "4.50€",
    image: kinderImage, // Placeholder
    category: "Confiserie",
    featured: false,
  },
  {
    id: 7,
    name: "Thés et Infusions",
    description: "Collection de thés premium du monde entier",
    price: "2.90€",
    image: sodaImage, // Placeholder
    category: "Boissons",
    featured: false,
  },
  {
    id: 8,
    name: "Snacks Salés",
    description: "Variété de collations salées pour tous les goûts",
    price: "2.10€",
    image: noodlesImage, // Placeholder
    category: "Snacks",
    featured: false,
  },
];

const categories = ["Tous", "Confiserie", "Boissons", "Épicerie", "Biscuiterie", "Snacks"];

const Products = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Nos Produits
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Découvrez notre sélection de produits frais et savoureux, 
              soigneusement choisis pour votre plaisir
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Products */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Produits Phares
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(product => product.featured).map((product) => (
                <Card key={product.id} className="group overflow-hidden hover-lift transition-smooth card-shadow">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-highlight font-semibold">
                        <Star className="h-3 w-3 mr-1" />
                        Phare
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-highlight">
                        {product.price}
                      </span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        En stock
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Products */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Tous nos produits
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Tous" ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 transition-smooth ${
                    category === "Tous" 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover-lift transition-smooth">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    {product.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-secondary text-highlight text-xs">
                          <Star className="h-3 w-3 mr-1" />
                          Phare
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-highlight">
                        {product.price}
                      </span>
                      <Badge variant="secondary" className="bg-fresh-green/10 text-fresh-green text-xs">
                        Disponible
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 soft-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Envie de découvrir nos produits ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Venez nous rendre visite dans notre magasin pour découvrir 
              l'ensemble de notre gamme et bénéficier des conseils de notre équipe
            </p>
            <div className="bg-card rounded-2xl p-6 card-shadow inline-block">
              <div className="text-2xl font-bold text-primary mb-2">
                📍 54 rue de la Convention, 75015 Paris
              </div>
              <div className="text-muted-foreground">
                🕒 Ouvert tous les jours • 📞 +33 6 22 63 48 90
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;