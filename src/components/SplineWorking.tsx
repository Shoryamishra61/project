import React, { useState, useEffect } from 'react';

const SplineWorking: React.FC = () => {
  const [SplineComponent, setSplineComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSpline = async () => {
      try {
        const { default: Spline } = await import('@splinetool/react-spline');
        setSplineComponent(() => Spline);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load Spline:', err);
        setError('Failed to load Spline component');
        setIsLoading(false);
      }
    };

    loadSpline();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-4 left-4 w-48 h-48 z-50 bg-gray-800/20 border border-cyan-500/20 rounded-lg flex items-center justify-center">
        <div className="text-cyan-400">Loading Spline...</div>
      </div>
    );
  }

  if (error || !SplineComponent) {
    return (
      <div className="fixed top-4 left-4 w-48 h-48 z-50 bg-red-500/20 border border-red-500 rounded-lg flex items-center justify-center">
        <div className="text-red-400 text-center text-sm">
          <div>Spline Error</div>
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
      <SplineComponent
        scene="https://prod.spline.design/HykxhCX1QH3jAjpX/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default SplineWorking; 