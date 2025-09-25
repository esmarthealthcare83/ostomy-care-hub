import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

// Full-screen preloader with slow-motion fade/scale animation
export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate initial load; hide after short delay
    const t = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 animate-[slowfade_1.2s_ease-in-out_infinite_alternate]">
        <div className="relative">
          <img
            src={logo}
            alt="eSmart Healthcare"
            className="h-20 w-20 rounded-full shadow-strong border-2 border-primary/30 animate-[slowpulse_1.8s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 rounded-full blur-xl bg-primary/20 animate-[slowglow_2.4s_ease-in-out_infinite]" />
        </div>
        <p className="text-sm text-muted-foreground tracking-wide">
          esmarthealthcare...
        </p>
      </div>
    </div>
  );
}