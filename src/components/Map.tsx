import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create custom marker icon to avoid conflicts
const createCustomIcon = () => {
  return new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

const Map = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null);
  
  // Coordinates for 54 rue de la Convention, Paris 75015
  const position: [number, number] = [48.8434, 2.2947];

  useEffect(() => {
    // Initialize the custom icon
    const icon = createCustomIcon();
    setCustomIcon(icon);
    setIsLoaded(true);
    
    // Trigger window resize to ensure proper map initialization
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  if (!isLoaded || !customIcon) {
    return (
      <div className="bg-card rounded-2xl card-shadow">
        <div className="p-6 border-b border-border">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Notre Localisation
          </h3>
          <p className="text-muted-foreground">
            Trouvez-nous facilement dans le 15ème arrondissement de Paris
          </p>
        </div>
        
        <div className="h-96 w-full flex items-center justify-center bg-muted/20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-muted-foreground">Chargement de la carte...</p>
          </div>
        </div>
        
        <div className="p-6 bg-muted/30">
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-primary">
              📍 54 rue de la Convention, 75015 Paris
            </p>
            <p className="text-muted-foreground">
              🚇 Métro : Convention (Ligne 12) - 3 minutes à pied
            </p>
            <p className="text-muted-foreground">
              🚌 Bus : Lignes 42, 70, 88
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl overflow-hidden card-shadow">
      <div className="p-6 border-b border-border">
        <h3 className="text-2xl font-bold text-primary mb-2">
          Notre Localisation
        </h3>
        <p className="text-muted-foreground">
          Trouvez-nous facilement dans le 15ème arrondissement de Paris
        </p>
      </div>
      
      <div className="h-96 w-full">
        <MapContainer
          center={position}
          zoom={16}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="text-center">
                <strong>Fresh & Fresh</strong><br />
                54 rue de la Convention<br />
                75015 Paris<br />
                <em>+33 6 22 63 48 90</em>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
      <div className="p-6 bg-muted/30">
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-primary">
            📍 54 rue de la Convention, 75015 Paris
          </p>
          <p className="text-muted-foreground">
            🚇 Métro : Convention (Ligne 12) - 3 minutes à pied
          </p>
          <p className="text-muted-foreground">
            🚌 Bus : Lignes 42, 70, 88
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;