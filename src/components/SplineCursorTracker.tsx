import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplineCursorTracker: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const splineRef = useRef<any>(null);

  const handleLoad = (splineApp: any) => {
    console.log('Spline loaded successfully');
    splineRef.current = splineApp;
    setIsLoading(false);
  };

  const handleError = (err: any) => {
    console.error('Spline error:', err);
    setError(err.message || 'Failed to load Spline');
    setIsLoading(false);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (splineRef.current) {
        // Normalize mouse position to -1 to 1 range
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Update Spline camera or objects based on mouse position
        try {
          // Try to access Spline objects and update their position
          if (splineRef.current.findObjectByName) {
            const camera = splineRef.current.findObjectByName('Camera Model');
            if (camera) {
              camera.position.x = x * 2;
              camera.position.y = y * 2;
            }
          }
        } catch (err) {
          console.log('Spline object update:', err);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-4 left-4 w-48 h-48 z-50 bg-gray-800/20 border border-cyan-500/20 rounded-lg flex items-center justify-center">
        <div className="text-cyan-400">Loading Spline...</div>
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
    <div className="fixed top-4 left-4 w-48 h-48 z-50 pointer-events-none">
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
  );
};

export default SplineCursorTracker; 