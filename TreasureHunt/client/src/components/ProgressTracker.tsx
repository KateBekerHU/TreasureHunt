import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Lock, CheckCircle2, X } from "lucide-react";
import type { HuntStop } from "@shared/schema";

interface ProgressTrackerProps {
  stops: HuntStop[];
  completedStops: number[];
  currentStop: number;
  onClose: () => void;
}

export default function ProgressTracker({ stops, completedStops, currentStop, onClose }: ProgressTrackerProps) {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-auto p-6 bg-card border-2 border-card-border relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4"
          data-testid="button-close-progress"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="space-y-6 pr-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-treasure mb-2">Your Journey</h2>
            <p className="text-sm text-muted-foreground font-treasure">
              {completedStops.length} of {stops.length} treasures discovered
            </p>
          </div>

          <div className="space-y-3">
            {stops.map((stop) => {
              const isCompleted = completedStops.includes(stop.id);
              const isCurrent = stop.id === currentStop;
              const isLocked = stop.id > currentStop;

              return (
                <Card 
                  key={stop.id}
                  className={`p-4 ${isCurrent ? 'border-primary border-2' : ''} ${isLocked ? 'opacity-50' : ''}`}
                  data-testid={`progress-stop-${stop.id}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                      ${isCompleted ? 'bg-primary text-primary-foreground' : ''}
                      ${isCurrent ? 'bg-accent text-accent-foreground ring-2 ring-primary' : ''}
                      ${isLocked ? 'bg-muted text-muted-foreground' : ''}
                    `}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : isLocked ? (
                        <Lock className="w-4 h-4" />
                      ) : (
                        <span className="font-typewriter font-bold">{stop.id}</span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-treasure font-semibold text-foreground mb-1">
                        {stop.title}
                      </h3>
                      
                      {isCompleted && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-treasure">{stop.locationName}</span>
                        </div>
                      )}
                      
                      {isLocked && (
                        <p className="text-sm text-muted-foreground font-treasure italic">
                          Complete previous stops to unlock
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
