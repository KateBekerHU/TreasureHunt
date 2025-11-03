import { useState } from 'react';
import QRScanner from '../QRScanner';
import { Button } from '@/components/ui/button';

export default function QRScannerExample() {
  const [showScanner, setShowScanner] = useState(true);

  if (!showScanner) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-background">
        <Button onClick={() => setShowScanner(true)}>
          Open Scanner
        </Button>
      </div>
    );
  }

  return (
    <QRScanner 
      onClose={() => setShowScanner(false)} 
      onScanSuccess={(code) => {
        console.log('Scanned:', code);
        setShowScanner(false);
      }}
      expectedCode="ROTTERDAM1"
    />
  );
}
