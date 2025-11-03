import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProgressDots from "./ProgressDots";
import parchmentBg from "@assets/generated_images/Vintage_parchment_background_texture_859d66e8.png";
import { Scroll, ChevronRight, MapPin } from "lucide-react";

interface ClueDisplayProps {
  stopNumber: number;
  totalStops: number;
  clueTitle: string;
  clueText: string;
  completedStops: number[];
  onScanQR: () => void;
  onSkipToNext?: () => void;
  onRequestHint?: () => void;
}

export default function ClueDisplay({ 
  stopNumber, 
  totalStops, 
  clueTitle, 
  clueText, 
  completedStops,
  onScanQR,
  onSkipToNext,
  onRequestHint
}: ClueDisplayProps) {
  return (
    <div 
      className="min-h-screen flex flex-col p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${parchmentBg})` }}
    >
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col py-8">
        <div className="mb-6">
          <div className="text-center mb-4">
            <span className="font-typewriter text-sm uppercase tracking-wider text-foreground/70">
              Stop {stopNumber} of {totalStops}
            </span>
          </div>
          <ProgressDots 
            totalStops={totalStops} 
            currentStop={stopNumber} 
            completedStops={completedStops} 
          />
        </div>

        <Card className="flex-1 p-8 bg-card/95 backdrop-blur-sm border-2 border-card-border shadow-xl">
          <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-center gap-3 pb-4 border-b border-border">
              <Scroll className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold font-treasure text-center">
                {clueTitle}
              </h2>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <p className="text-xl leading-relaxed font-treasure text-center text-foreground/90 px-4">
                {clueText}
              </p>
            </div>
            
            <div className="pt-4 border-t border-border space-y-3">
              <p className="text-sm text-muted-foreground font-treasure text-center mb-4">
                Scan de QR code op de locatie om je schat te onthullen
              </p>
              <Button 
                onClick={onScanQR}
                className="w-full text-lg py-6 font-treasure"
                size="lg"
                data-testid="button-scan-qr"
              >
                Scan QR Code
              </Button>
              
              {onRequestHint && (
                <Button 
                  onClick={onRequestHint}
                  variant="secondary"
                  className="w-full font-treasure"
                  data-testid="button-request-hint"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Koop Coördinaten Hint
                </Button>
              )}
              
              {onSkipToNext && stopNumber < totalStops && (
                <Button 
                  onClick={onSkipToNext}
                  variant="outline"
                  className="w-full font-treasure"
                  data-testid="button-skip-to-next"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Ga naar volgende clue
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
