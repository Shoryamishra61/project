import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const BasicCursor: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = mousePos.x * 2;
      meshRef.current.position.y = mousePos.y * 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshBasicMaterial color="#00ffff" />
    </mesh>
  );
};

const Basic3DCursor: React.FC = () => {
  return (
    <div className="fixed top-4 left-4 w-32 h-32 z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <BasicCursor />
      </Canvas>
    </div>
  );
};

export default Basic3DCursor; 