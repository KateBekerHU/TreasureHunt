import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import ClueDisplay from '@/components/ClueDisplay';
import QRScanner from '@/components/QRScanner';
import PrizeReveal from '@/components/PrizeReveal';
import ProgressTracker from '@/components/ProgressTracker';
import FinalCongratulations from '@/components/FinalCongratulations';
import PasswordDialog from '@/components/PasswordDialog';
import CoordinateHintDialog from '@/components/CoordinateHintDialog';
import CoordinateMapDialog from '@/components/CoordinateMapDialog';
import { Button } from '@/components/ui/button';
import { Map, MapPin } from 'lucide-react';
import { useHuntProgress } from '@/hooks/useHuntProgress';
import { treasureHuntStops } from '@/lib/huntData';

type Screen = 'welcome' | 'clue' | 'scanner' | 'prize' | 'final';

export default function TreasureHunt() {
  const { progress, startHunt, completeStop, resetHunt } = useHuntProgress();
  const [currentScreen, setCurrentScreen] = useState<Screen>(
    progress.hasCompleted ? 'final' : progress.hasStarted ? 'clue' : 'welcome'
  );
  const [showProgress, setShowProgress] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showCoordinateHint, setShowCoordinateHint] = useState(false);
  const [showCoordinateMap, setShowCoordinateMap] = useState(false);

  const currentStop = treasureHuntStops.find(stop => stop.id === progress.currentStop);
  const isLastStop = progress.currentStop === 10;

  const handleStart = () => {
    startHunt();
    setCurrentScreen('clue');
  };

  const handleOpenScanner = () => {
    setCurrentScreen('scanner');
  };

  const handleScanSuccess = () => {
    setCurrentScreen('prize');
  };

  const handleContinue = () => {
    completeStop(progress.currentStop);
    
    if (isLastStop) {
      setCurrentScreen('final');
    } else {
      setCurrentScreen('clue');
    }
  };

  const handleRestart = () => {
    resetHunt();
    setCurrentScreen('welcome');
  };

  const handleSkipToNext = () => {
    setShowPasswordDialog(true);
  };

  const handlePasswordSuccess = () => {
    setShowPasswordDialog(false);
    completeStop(progress.currentStop);
    
    if (isLastStop) {
      setCurrentScreen('final');
    } else {
      setCurrentScreen('clue');
    }
  };

  const handleRequestHint = () => {
    setShowCoordinateHint(true);
  };

  return (
    <>
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {currentScreen === 'clue' && currentStop && (
        <div className="relative">
          <ClueDisplay
            stopNumber={currentStop.id}
            totalStops={10}
            clueTitle={currentStop.title}
            clueText={currentStop.clue}
            completedStops={progress.completedStops}
            onScanQR={handleOpenScanner}
            onSkipToNext={handleSkipToNext}
            onRequestHint={handleRequestHint}
          />
          <div className="fixed top-4 right-4 z-40 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowCoordinateMap(true)}
              className="bg-card/95 backdrop-blur-sm"
              data-testid="button-show-coordinate-map"
            >
              <MapPin className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowProgress(true)}
              className="bg-card/95 backdrop-blur-sm"
              data-testid="button-show-progress"
            >
              <Map className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      {currentScreen === 'scanner' && currentStop && (
        <QRScanner
          onClose={() => setCurrentScreen('clue')}
          onScanSuccess={handleScanSuccess}
          expectedCode={currentStop.qrCode}
        />
      )}

      {currentScreen === 'prize' && currentStop && (
        <PrizeReveal
          stopNumber={currentStop.id}
          totalStops={10}
          locationName={currentStop.locationName}
          prize={currentStop.prize}
          onContinue={handleContinue}
          isLastStop={isLastStop}
        />
      )}

      {currentScreen === 'final' && (
        <FinalCongratulations
          stops={treasureHuntStops}
          onRestart={handleRestart}
        />
      )}

      {showProgress && (
        <ProgressTracker
          stops={treasureHuntStops}
          completedStops={progress.completedStops}
          currentStop={progress.currentStop}
          onClose={() => setShowProgress(false)}
        />
      )}

      {showPasswordDialog && currentStop && (
        <PasswordDialog
          onClose={() => setShowPasswordDialog(false)}
          onSuccess={handlePasswordSuccess}
          correctPassword={currentStop.locationName}
          title="Voer de locatienaam in"
          hint="Het wachtwoord is de naam van de locatie waar je nu bent"
        />
      )}

      {showCoordinateHint && currentStop && (
        <CoordinateHintDialog
          onClose={() => setShowCoordinateHint(false)}
          coordinates={currentStop.coordinates}
          onPurchaseSuccess={() => {}}
        />
      )}

      {showCoordinateMap && (
        <CoordinateMapDialog
          onClose={() => setShowCoordinateMap(false)}
        />
      )}
    </>
  );
}
