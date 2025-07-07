import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import SplineCursor from './SplineCursor';

const SplineToggle: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && <SplineCursor />}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200 text-cyan-400 hover:text-cyan-300"
        title={isVisible ? "Hide Spline Element" : "Show Spline Element"}
      >
        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </>
  );
};

export default SplineToggle; 