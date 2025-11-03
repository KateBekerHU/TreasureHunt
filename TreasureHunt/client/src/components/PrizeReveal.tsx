import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import parchmentBg from "@assets/generated_images/Vintage_parchment_background_texture_859d66e8.png";
import treasureChest from "@assets/generated_images/Vintage_treasure_chest_illustration_b91bf8c4.png";
import { Gift, MapPin, Sparkles } from "lucide-react";

interface PrizeRevealProps {
  stopNumber: number;
  totalStops: number;
  locationName: string;
  prize: string;
  onContinue: () => void;
  isLastStop?: boolean;
}

export default function PrizeReveal({ 
  stopNumber, 
  totalStops, 
  locationName, 
  prize, 
  onContinue,
  isLastStop = false
}: PrizeRevealProps) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${parchmentBg})` }}
    >
      <Card className="max-w-2xl w-full p-8 bg-card/95 backdrop-blur-sm border-2 border-card-border shadow-2xl">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <img 
              src={treasureChest} 
              alt="Treasure Chest" 
              className="w-32 h-32 mx-auto opacity-90"
            />
            <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-pulse" />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold font-treasure text-foreground mb-2">
              Treasure Found!
            </h1>
            <p className="text-sm font-typewriter uppercase tracking-wider text-muted-foreground">
              Stop {stopNumber} of {totalStops} Complete
            </p>
          </div>
          
          <div className="py-6 space-y-4">
            <div className="flex items-center justify-center gap-2 text-lg text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-treasure font-semibold">{locationName}</span>
            </div>
            
            <Card className="p-6 bg-background/50 border-primary/30">
              <div className="flex items-start gap-3">
                <Gift className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1 text-left">
                  <h3 className="font-treasure font-semibold text-foreground mb-2">
                    Your Prize:
                  </h3>
                  <p className="font-treasure text-foreground/90 leading-relaxed">
                    {prize}
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={onContinue}
              size="lg"
              className="text-lg px-8 py-6 font-treasure w-full sm:w-auto"
              data-testid="button-continue"
            >
              {isLastStop ? 'Complete Your Journey' : 'Continue to Next Clue'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
