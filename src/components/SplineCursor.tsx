import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline/next';

const SplineCursor: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 10 seconds if there's an error
    if (hasError) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [hasError]);

  const handleLoad = () => {
    setIsLoading(false);
    console.log('Spline element loaded successfully');
  };

  const handleError = (error: any) => {
    setIsLoading(false);
    setHasError(true);
    console.error('Spline loading error:', error);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 w-48 h-48 z-50 pointer-events-none">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center bg-gray-800/20 backdrop-blur-sm rounded-lg border border-cyan-500/20">
          <div className="text-cyan-400 text-sm animate-pulse">Loading...</div>
        </div>
      )}
      
      {hasError && (
        <div className="w-full h-full flex items-center justify-center bg-red-900/20 backdrop-blur-sm rounded-lg border border-red-500/20">
          <div className="text-red-400 text-sm text-center">
            <div>Spline failed to load</div>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 px-2 py-1 bg-red-500/20 rounded text-xs hover:bg-red-500/30 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      <div className={`w-full h-full ${isLoading || hasError ? 'hidden' : 'block'}`}>
        <Spline
          scene="https://prod.spline.design/HykxhCX1QH3jAjpX/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default SplineCursor; 