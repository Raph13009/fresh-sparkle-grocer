const Map = () => {
  // Coordinates for 54 rue de la Convention, Paris 75015
  const latitude = 48.8434;
  const longitude = 2.2947;
  const zoom = 16;
  
  // Create static map URL from OpenStreetMap
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.005},${latitude-0.005},${longitude+0.005},${latitude+0.005}&layer=mapnik&marker=${latitude},${longitude}`;

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
      
      <div className="h-96 w-full relative">
        <iframe
          src={mapUrl}
          className="w-full h-full border-0"
          title="Fresh & Fresh - 54 rue de la Convention, Paris 75015"
          loading="lazy"
        />
        
        {/* Overlay with store info */}
        <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 card-shadow max-w-xs">
          <div className="text-sm">
            <div className="font-semibold text-primary mb-1">Fresh & Fresh</div>
            <div className="text-muted-foreground">
              54 rue de la Convention<br />
              75015 Paris<br />
              <span className="text-highlight font-medium">+33 6 22 63 48 90</span>
            </div>
          </div>
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
          <p className="text-muted-foreground mt-3">
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-smooth underline"
            >
              🗺️ Obtenir un itinéraire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;