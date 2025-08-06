import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Map = () => {
  // Coordinates for 54 rue de la Convention, Paris 75015
  const position: [number, number] = [48.8434, 2.2947];

  useEffect(() => {
    // This ensures Leaflet is properly initialized
    window.dispatchEvent(new Event('resize'));
  }, []);

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
          className="h-full w-full"
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
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