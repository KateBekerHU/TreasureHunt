import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, MapPin, Trophy } from "lucide-react";
import type { Coordinates } from "@shared/schema";

interface CoordinateHintDialogProps {
  onClose: () => void;
  coordinates: Coordinates;
  onPurchaseSuccess: () => void;
}

const challenges = [
  "Maak een foto van jezelf op deze plek!",
  "Geef een vreemde een compliment!",
  "Dans 10 seconden op straat!",
  "Zing een liedje hardop!",
  "Vertel een grap aan een passant!",
];

export default function CoordinateHintDialog({ 
  onClose, 
  coordinates,
  onPurchaseSuccess
}: CoordinateHintDialogProps) {
  const [challenge] = useState(() => challenges[Math.floor(Math.random() * challenges.length)]);
  const [showCoordinates, setShowCoordinates] = useState(false);

  const handleComplete = () => {
    setShowCoordinates(true);
    onPurchaseSuccess();
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6 bg-card border-2 border-card-border relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4"
          data-testid="button-close-hint"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="space-y-6">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto text-primary mb-3" />
            <h3 className="text-2xl font-bold font-treasure mb-2">Coördinaten Hint</h3>
          </div>

          {!showCoordinates ? (
            <div className="space-y-4">
              <Card className="p-4 bg-accent/20 border-primary/30">
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-treasure font-semibold mb-2">Opdracht:</h4>
                    <p className="font-treasure text-foreground/90">
                      {challenge}
                    </p>
                  </div>
                </div>
              </Card>
              
              <p className="text-sm text-muted-foreground font-treasure text-center">
                Voltooi deze opdracht om de coördinaten te onthullen!
              </p>
              
              <Button 
                onClick={handleComplete}
                className="w-full font-treasure"
                data-testid="button-complete-challenge"
              >
                Opdracht Voltooid!
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Card className="p-6 bg-primary/10 border-primary/30">
                <div className="text-center space-y-2">
                  <h4 className="font-treasure font-semibold text-lg">Coördinaten:</h4>
                  <p className="font-typewriter text-2xl text-primary font-bold">
                    {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
                  </p>
                  <p className="text-sm text-muted-foreground font-treasure mt-4">
                    Gebruik deze coördinaten in Google Maps!
                  </p>
                </div>
              </Card>
              
              <Button 
                onClick={onClose}
                variant="outline"
                className="w-full font-treasure"
                data-testid="button-close-after-reveal"
              >
                Sluiten
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
