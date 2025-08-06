import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Train, Bus } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact & Localisation
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Trouvez-nous facilement et contactez-nous pour toute question
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <ContactForm />
            </div>

            {/* Store Information */}
            <div className="space-y-6 animate-slide-up">
              <Card className="bg-card card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        Adresse
                      </h3>
                      <p className="text-muted-foreground">
                        54 rue de la Convention<br />
                        75015 Paris, France
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        Téléphone
                      </h3>
                      <p className="text-muted-foreground">
                        +33 6 22 63 48 90
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Disponible pendant les heures d'ouverture
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        contact@freshandfresh.fr
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        Horaires d'ouverture
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Lundi - Samedi : 8h00 - 20h00</p>
                        <p>Dimanche : 9h00 - 18h00</p>
                        <p className="text-sm text-highlight font-medium mt-2">
                          Ouvert tous les jours de l'année
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 soft-gradient" id="carte">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Map />
          </div>
        </div>
      </section>

      {/* Transportation Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Comment nous rejoindre
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card card-shadow hover-lift transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Train className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    En Métro
                  </h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>Station Convention (Ligne 12)</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      3 minutes à pied depuis la sortie
                    </p>
                    <div className="bg-secondary/10 rounded-lg p-3 mt-4">
                      <p className="text-sm font-medium text-highlight">
                        📍 Sortie rue de la Convention
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card card-shadow hover-lift transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Bus className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    En Bus
                  </h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>Lignes 42, 70, 88</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Arrêt "Convention" ou "Vaugirard"
                    </p>
                    <div className="bg-secondary/10 rounded-lg p-3 mt-4">
                      <p className="text-sm font-medium text-highlight">
                        🚌 Arrêts à proximité immédiate
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Card className="bg-secondary/10 border-secondary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    🅿️ Stationnement
                  </h3>
                  <p className="text-muted-foreground">
                    Places de parking disponibles dans la rue et parking payant à proximité
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;