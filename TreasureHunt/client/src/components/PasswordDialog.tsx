import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, CheckCircle2, XCircle } from "lucide-react";

interface PasswordDialogProps {
  onClose: () => void;
  onSuccess: () => void;
  correctPassword: string;
  title?: string;
  hint?: string;
}

export default function PasswordDialog({ 
  onClose, 
  onSuccess, 
  correctPassword,
  title = "Voer het wachtwoord in",
  hint = "Het wachtwoord is de naam van de locatie"
}: PasswordDialogProps) {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const handleSubmit = () => {
    const normalized = password.trim().toLowerCase();
    const correctNormalized = correctPassword.toLowerCase();
    
    if (normalized === correctNormalized) {
      setStatus('correct');
      setTimeout(() => {
        onSuccess();
      }, 1000);
    } else {
      setStatus('wrong');
      setTimeout(() => {
        setStatus('idle');
        setPassword("");
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
          data-testid="button-close-password"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-treasure mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground font-treasure">
              {hint}
            </p>
          </div>

          <div className="space-y-4">
            {status === 'correct' && (
              <div className="text-center space-y-2 p-4 bg-green-500/10 rounded-md">
                <CheckCircle2 className="w-12 h-12 mx-auto text-green-600" />
                <p className="text-green-600 font-treasure">Correct!</p>
              </div>
            )}
            
            {status === 'wrong' && (
              <div className="text-center space-y-2 p-4 bg-destructive/10 rounded-md">
                <XCircle className="w-12 h-12 mx-auto text-destructive" />
                <p className="text-destructive font-treasure">Verkeerd wachtwoord!</p>
              </div>
            )}
            
            {status === 'idle' && (
              <>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Voer locatienaam in"
                  className="font-typewriter"
                  data-testid="input-password"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && password.trim()) {
                      handleSubmit();
                    }
                  }}
                />
                <Button 
                  onClick={handleSubmit}
                  disabled={!password.trim()}
                  className="w-full font-treasure"
                  data-testid="button-submit-password"
                >
                  Bevestig
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
