import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import parchmentBg from "@assets/generated_images/Vintage_parchment_background_texture_859d66e8.png";
import rotterdamMap from "@assets/generated_images/Vintage_Rotterdam_treasure_map_a65968c9.png";
import { Trophy, Heart, MapPin } from "lucide-react";
import type { HuntStop } from "@shared/schema";

interface FinalCongratulationsProps {
  stops: HuntStop[];
  onRestart?: () => void;
}

export default function FinalCongratulations({ stops, onRestart }: FinalCongratulationsProps) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${parchmentBg})` }}
    >
      <div className="max-w-3xl w-full space-y-6">
        <Card className="p-8 bg-card/95 backdrop-blur-sm border-2 border-card-border shadow-2xl">
          <div className="text-center space-y-6">
            <div className="relative">
              <img 
                src={rotterdamMap} 
                alt="Rotterdam Map" 
                className="w-48 h-64 mx-auto opacity-90 object-cover rounded-md"
              />
              <div className="absolute -top-4 -right-4">
                <Trophy className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <div>
              <h1 className="text-5xl font-bold font-treasure text-foreground mb-3">
                Hunt Complete!
              </h1>
              <p className="text-xl font-treasure text-foreground/80">
                All 10 Treasures Discovered
              </p>
            </div>
            
            <Card className="p-6 bg-background/50 border-primary/30">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-treasure text-lg leading-relaxed text-foreground text-left">
                    Dear Anna, you've successfully completed your Rotterdam treasure hunt! 
                    I hope you enjoyed exploring the city and discovering all the surprises 
                    along the way. Each location was chosen with care, each gift selected with love. 
                    May these memories of Rotterdam stay with you always.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        <Card className="p-6 bg-card/95 backdrop-blur-sm border-2 border-card-border">
          <h3 className="font-treasure font-bold text-xl text-center mb-4">
            Your Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {stops.map((stop) => (
              <div 
                key={stop.id}
                className="flex items-center gap-3 p-3 bg-background/50 rounded-md"
                data-testid={`final-stop-${stop.id}`}
              >
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-typewriter font-bold flex-shrink-0">
                  {stop.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="font-treasure text-foreground truncate">
                      {stop.locationName}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {onRestart && (
          <div className="text-center">
            <Button 
              onClick={onRestart}
              variant="outline"
              className="font-treasure"
              data-testid="button-restart"
            >
              Relive the Adventure
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
