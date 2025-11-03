import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Camera, CheckCircle2, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

interface QRScannerProps {
  onClose: () => void;
  onScanSuccess: (code: string) => void;
  expectedCode: string;
}

export default function QRScanner({ onClose, onScanSuccess, expectedCode }: QRScannerProps) {
  const [manualCode, setManualCode] = useState("");
  const [scanStatus, setScanStatus] = useState<'scanning' | 'success' | 'error'>('scanning');

  const handleManualSubmit = () => {
    if (manualCode.trim() === expectedCode) {
      setScanStatus('success');
      setTimeout(() => {
        onScanSuccess(manualCode);
      }, 1000);
    } else {
      setScanStatus('error');
      setTimeout(() => {
        setScanStatus('scanning');
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6 bg-card border-2 border-card-border relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4"
          data-testid="button-close-scanner"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-treasure mb-2">Scan QR Code</h3>
            <p className="text-sm text-muted-foreground font-treasure">
              Point your camera at the QR code
            </p>
          </div>

          <div className="aspect-square bg-muted/50 rounded-md border-4 border-primary border-dashed flex items-center justify-center relative overflow-hidden">
            {scanStatus === 'scanning' && (
              <div className="text-center space-y-4">
                <Camera className="w-16 h-16 mx-auto text-primary animate-pulse" />
                <p className="text-sm text-muted-foreground font-typewriter">
                  Camera viewfinder
                </p>
              </div>
            )}
            
            {scanStatus === 'success' && (
              <div className="text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 mx-auto text-green-600" />
                <p className="text-sm text-foreground font-treasure">
                  Code Verified!
                </p>
              </div>
            )}
            
            {scanStatus === 'error' && (
              <div className="text-center space-y-4">
                <XCircle className="w-16 h-16 mx-auto text-destructive" />
                <p className="text-sm text-destructive font-treasure">
                  Wrong location. Try again!
                </p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <p className="text-xs text-center text-muted-foreground font-typewriter">
              Or enter the code manually:
            </p>
            <div className="flex gap-2">
              <Input
                value={manualCode}
                onChange={(e) => setManualCode(e.target.value)}
                placeholder="Enter code"
                className="font-typewriter"
                data-testid="input-manual-code"
              />
              <Button 
                onClick={handleManualSubmit}
                disabled={!manualCode.trim()}
                data-testid="button-submit-code"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
