import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Accueil" },
    { to: "/produits", label: "Produits" },
    { to: "/contact", label: "Contact" },
  ];

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`transition-smooth px-3 py-2 rounded-lg font-medium ${
        location.pathname === to
          ? "bg-secondary text-highlight"
          : "text-primary-foreground hover:bg-primary/80"
      }`}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-primary-foreground font-bold text-xl"
          >
            <ShoppingCart className="h-8 w-8 text-secondary" />
            <span className="text-fresh-yellow">Fresh</span>
            <span>&</span>
            <span className="text-fresh-yellow">Fresh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary/80"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-primary border-primary/20">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-center mb-4">
                    <span className="text-fresh-yellow font-bold text-xl">Fresh & Fresh</span>
                  </div>
                  {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to} label={item.label} />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;