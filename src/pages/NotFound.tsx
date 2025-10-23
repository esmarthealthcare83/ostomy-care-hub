import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6">
      <div className="text-center max-w-md w-full">
        <div className="mb-6 sm:mb-8">
          <h1 className="mb-3 sm:mb-4 text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-semibold mb-2">
            Oops! Page not found
          </p>
          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
            The page you're looking for doesn't exist or has been moved. But don't worry, we're here to help!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="btn-hero w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
          >
            <a href="/" className="flex items-center justify-center gap-2">
              <Home className="h-4 w-4 sm:h-5 sm:w-5" />
              Return to Home
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
          >
            <a href="/contact">Contact Support</a>
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600">
            <span className="font-medium">Requested URL:</span> {location.pathname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
