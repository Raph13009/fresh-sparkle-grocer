import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Info */}
          <div className="space-y-4">
            <h3 className="text-fresh-yellow font-bold text-lg">Fresh & Fresh</h3>
            <p className="text-sm text-primary-foreground/80">
              Votre épicerie de proximité pour des produits frais et exclusifs.
            </p>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="font-semibold text-fresh-yellow">Adresse</h4>
            <div className="flex items-start space-x-2 text-sm">
              <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
              <span>54 rue de la Convention<br />Paris 75015</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-fresh-yellow">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+33 6 22 63 48 90</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contact@freshandfresh.fr</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-fresh-yellow">Horaires</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <div>
                  <div>Lun-Sam: 8h-20h</div>
                  <div>Dimanche: 9h-18h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Fresh & Fresh. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;