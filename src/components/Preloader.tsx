import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";

// Full-screen preloader with modern flow animation that shows on route changes
export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initial load - hide after delay
    const initialTimer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    // Show preloader on route change
    setIsRouteChanging(true);
    setVisible(true);

    const routeTimer = setTimeout(() => {
      setVisible(false);
      setIsRouteChanging(false);
    }, 1200);

    return () => clearTimeout(routeTimer);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo container with modern animations */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl animate-ping" />
          <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
            <img
              src={logo}
              alt="eSmart Healthcare"
              className="h-16 w-16 rounded-full shadow-lg animate-bounce"
            />
          </div>
          {/* Flowing rings */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-2 rounded-full border border-secondary/40 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
        </div>

        {/* Text with flowing animation */}
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground tracking-wider animate-pulse">
            eSmart Healthcare
          </p>
          <div className="mt-2 flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Loading progress bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}