import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, MapPin, Search } from "lucide-react";
import { treasureHuntStops } from "@/lib/huntData";

interface CoordinateMapDialogProps {
  onClose: () => void;
}

export default function CoordinateMapDialog({ onClose }: CoordinateMapDialogProps) {
  const [latInput, setLatInput] = useState("");
  const [lngInput, setLngInput] = useState("");
  const [foundLocation, setFoundLocation] = useState<string | null>(null);

  const handleSearch = () => {
    const lat = parseFloat(latInput);
    const lng = parseFloat(lngInput);
    
    if (isNaN(lat) || isNaN(lng)) {
      setFoundLocation("Ongeldige coördinaten!");
      return;
    }

    const tolerance = 0.001;
    
    const found = treasureHuntStops.find(stop => 
      Math.abs(stop.coordinates.lat - lat) < tolerance &&
      Math.abs(stop.coordinates.lng - lng) < tolerance
    );

    if (found) {
      setFoundLocation(found.locationName);
    } else {
      setFoundLocation("Geen locatie gevonden op deze coördinaten");
    }
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6 bg-card border-2 border-card-border relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4"
          data-testid="button-close-map"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="space-y-6">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto text-primary mb-3" />
            <h3 className="text-2xl font-bold font-treasure mb-2">Coördinaten Zoeken</h3>
            <p className="text-sm text-muted-foreground font-treasure">
              Voer coördinaten in om de locatie te vinden
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-treasure text-muted-foreground block mb-2">
                  Latitude
                </label>
                <Input
                  type="number"
                  step="0.000001"
                  value={latInput}
                  onChange={(e) => setLatInput(e.target.value)}
                  placeholder="51.9235"
                  className="font-typewriter"
                  data-testid="input-latitude"
                />
              </div>
              <div>
                <label className="text-sm font-treasure text-muted-foreground block mb-2">
                  Longitude
                </label>
                <Input
                  type="number"
                  step="0.000001"
                  value={lngInput}
                  onChange={(e) => setLngInput(e.target.value)}
                  placeholder="4.4782"
                  className="font-typewriter"
                  data-testid="input-longitude"
                />
              </div>
            </div>

            <Button 
              onClick={handleSearch}
              disabled={!latInput.trim() || !lngInput.trim()}
              className="w-full font-treasure"
              data-testid="button-search-coordinates"
            >
              <Search className="w-4 h-4 mr-2" />
              Zoek Locatie
            </Button>

            {foundLocation && (
              <Card className={`p-4 ${foundLocation.includes("Geen") || foundLocation.includes("Ongeldige") ? 'bg-destructive/10 border-destructive/30' : 'bg-primary/10 border-primary/30'}`}>
                <div className="text-center">
                  <MapPin className={`w-8 h-8 mx-auto mb-2 ${foundLocation.includes("Geen") || foundLocation.includes("Ongeldige") ? 'text-destructive' : 'text-primary'}`} />
                  <h4 className="font-treasure font-semibold mb-1">
                    {foundLocation.includes("Geen") || foundLocation.includes("Ongeldige") ? "Niet Gevonden" : "Locatie Gevonden!"}
                  </h4>
                  <p className="font-treasure text-foreground">
                    {foundLocation}
                  </p>
                </div>
              </Card>
            )}

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-treasure text-center">
                Tip: Gebruik de exacte coördinaten uit de hint voor het beste resultaat
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
