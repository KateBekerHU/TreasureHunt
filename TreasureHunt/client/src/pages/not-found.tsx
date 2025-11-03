import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-md w-full p-8 text-center border-2 border-card-border">
        <MapPin className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="text-4xl font-bold font-treasure mb-2">Lost?</h1>
        <p className="text-muted-foreground font-treasure mb-6">
          This treasure location doesn't exist
        </p>
        <Link href="/">
          <Button className="font-treasure" data-testid="button-home">
            Return to Hunt
          </Button>
        </Link>
      </Card>
    </div>
  );
}
