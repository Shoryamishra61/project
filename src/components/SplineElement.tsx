import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineElement: React.FC = () => {
  return (
    <div className="fixed top-4 left-4 w-48 h-48 z-50 pointer-events-none">
      <Spline
        scene="https://prod.spline.design/HykxhCX1QH3jAjpX/scene.splinecode"
      />
    </div>
  );
};

export default SplineElement; 