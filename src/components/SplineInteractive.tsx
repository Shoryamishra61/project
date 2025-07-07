import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineInteractive: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = (splineApp: any) => {
    console.log('Spline loaded successfully');
    setIsLoading(false);
    
    // Enable pointer events for the Spline canvas
    const canvas = splineApp.canvas;
    if (canvas) {
      canvas.style.pointerEvents = 'auto';
    }
  };

  const handleError = (err: any) => {
    console.error('Spline error:', err);
    setError(err.message || 'Failed to load Spline');
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="fixed top-4 left-4 w-48 h-48 z-50 bg-gray-800/20 border border-cyan-500/20 rounded-lg flex items-center justify-center">
        <div className="text-cyan-400">Loading Interactive Spline...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed top-4 left-4 w-48 h-48 z-50 bg-red-500/20 border border-red-500 rounded-lg flex items-center justify-center">
        <div className="text-red-400 text-center text-sm">
          <div>Error: {error}</div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-2 py-1 bg-red-500/20 rounded text-xs"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 w-48 h-48 z-50">
      <Spline
        scene="https://prod.spline.design/HykxhCX1QH3jAjpX/scene.splinecode"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
        }}
      />
    </div>
  );
};

export default SplineInteractive; 