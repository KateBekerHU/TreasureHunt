import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import parchmentBg from "@assets/generated_images/Vintage_parchment_background_texture_859d66e8.png";
import compassRose from "@assets/generated_images/Vintage_compass_rose_illustration_014b9bc7.png";

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${parchmentBg})` }}
    >
      <Card className="max-w-2xl w-full p-8 bg-card/95 backdrop-blur-sm border-2 border-card-border shadow-2xl">
        <div className="text-center space-y-6">
          <img 
            src={compassRose} 
            alt="Compass Rose" 
            className="w-24 h-24 mx-auto opacity-80"
          />
          
          <h1 className="text-5xl font-bold font-treasure text-foreground">
            Anna's Rotterdam<br />Treasure Hunt
          </h1>
          
          <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
            <p className="font-treasure italic">
              Ahoy, Anna!
            </p>
            
            <p className="font-treasure">
              Welcome to your very own treasure hunt across the beautiful city of Rotterdam. 
              Ten hidden treasures await you, each marked by a secret clue and a mysterious QR code.
            </p>
            
            <p className="font-treasure">
              Follow the riddles, explore the city, and discover the prizes that have been 
              carefully placed for you. Your adventure begins with a single step...
            </p>
          </div>
          
          <div className="pt-4">
            <div className="text-sm font-typewriter uppercase tracking-wider text-muted-foreground mb-6">
              10 Treasures Await
            </div>
            
            <Button 
              size="lg"
              onClick={onStart}
              className="text-lg px-8 py-6 font-treasure"
              data-testid="button-start-adventure"
            >
              Begin Your Adventure
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
