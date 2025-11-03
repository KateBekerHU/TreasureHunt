import { Lock, Check } from "lucide-react";

interface ProgressDotsProps {
  totalStops: number;
  currentStop: number;
  completedStops: number[];
}

export default function ProgressDots({ totalStops, currentStop, completedStops }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {Array.from({ length: totalStops }, (_, i) => i + 1).map((stop) => {
        const isCompleted = completedStops.includes(stop);
        const isCurrent = stop === currentStop;
        
        return (
          <div
            key={stop}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
              ${isCompleted ? 'bg-primary border-primary text-primary-foreground' : ''}
              ${isCurrent ? 'bg-accent border-primary ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}
              ${!isCompleted && !isCurrent ? 'bg-muted border-border text-muted-foreground' : ''}
            `}
            data-testid={`progress-dot-${stop}`}
          >
            {isCompleted ? (
              <Check className="w-5 h-5" />
            ) : !isCurrent ? (
              <Lock className="w-4 h-4" />
            ) : (
              <span className="font-typewriter text-sm font-bold">{stop}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
