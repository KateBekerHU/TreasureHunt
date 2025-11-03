import { useState } from 'react';
import ProgressTracker from '../ProgressTracker';
import { Button } from '@/components/ui/button';

export default function ProgressTrackerExample() {
  const [showTracker, setShowTracker] = useState(true);

  const mockStops = [
    { id: 1, title: "The First Clue", clue: "...", locationName: "Market Hall", prize: "Coffee voucher", qrCode: "CODE1", coordinates: { lat: 51.92, lng: 4.48 } },
    { id: 2, title: "The Second Clue", clue: "...", locationName: "Cube Houses", prize: "Postcard", qrCode: "CODE2", coordinates: { lat: 51.92, lng: 4.49 } },
    { id: 3, title: "The Third Clue", clue: "...", locationName: "Erasmus Bridge", prize: "Photo frame", qrCode: "CODE3", coordinates: { lat: 51.91, lng: 4.48 } },
    { id: 4, title: "The Fourth Clue", clue: "...", locationName: "Rotterdam Zoo", prize: "Plush animal", qrCode: "CODE4", coordinates: { lat: 51.93, lng: 4.47 } },
    { id: 5, title: "The Fifth Clue", clue: "...", locationName: "Delfshaven", prize: "Book", qrCode: "CODE5", coordinates: { lat: 51.91, lng: 4.46 } },
  ];

  if (!showTracker) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-background">
        <Button onClick={() => setShowTracker(true)}>
          Show Progress
        </Button>
      </div>
    );
  }

  return (
    <ProgressTracker 
      stops={mockStops}
      completedStops={[1, 2]}
      currentStop={3}
      onClose={() => setShowTracker(false)} 
    />
  );
}
