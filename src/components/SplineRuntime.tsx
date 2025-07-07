import React, { useState, useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineRuntime: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    const loadSpline = async () => {
      if (!canvasRef.current) return;

      try {
        const app = new Application(canvasRef.current);
        await app.load('https://prod.spline.design/HykxhCX1QH3jAjpX/scene.splinecode');
        
        appRef.current = app;
        setIsLoading(false);
        console.log('Spline runtime loaded successfully');

        // Set up cursor tracking
        const handleMouseMove = (event: MouseEvent) => {
          if (appRef.current) {
            // Get mouse position relative to canvas
            const rect = canvasRef.current!.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            // Normalize coordinates
            const normalizedX = (x / rect.width) * 2 - 1;
            const normalizedY = -(y / rect.height) * 2 + 1;
            
            // Update camera or objects
            try {
              // Try to find and update camera
              const camera = appRef.current.findObjectByName('Camera Model');
              if (camera) {
                camera.position.x = normalizedX * 3;
                camera.position.y = normalizedY * 3;
              }
            } catch (err) {
              console.log('Camera update:', err);
            }
          }
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          if (appRef.current) {
            appRef.current.dispose();
          }
        };
      } catch (err) {
        console.error('Failed to load Spline:', err);
        setError('Failed to load Spline runtime');
        setIsLoading(false);
      }
    };

    loadSpline();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-4 left-4 w-48 h-48 z-50 bg-gray-800/20 border border-cyan-500/20 rounded-lg flex items-center justify-center">
        <div className="text-cyan-400">Loading Spline Runtime...</div>
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
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default SplineRuntime; 