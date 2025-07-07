import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Simple cursor follower
const SimpleCursorFollower: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (sphereRef.current) {
      // Smooth cursor following
      const targetX = mousePosition.x * 2;
      const targetY = mousePosition.y * 2;
      
      sphereRef.current.position.x += (targetX - sphereRef.current.position.x) * 0.1;
      sphereRef.current.position.y += (targetY - sphereRef.current.position.y) * 0.1;
      
      // Gentle rotation
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[0.3, 16, 16]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.6}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

// Main component
const Simple3DCursor: React.FC = () => {
  return (
    <div className="fixed top-4 left-4 w-48 h-48 z-50 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <SimpleCursorFollower />
      </Canvas>
    </div>
  );
};

export default Simple3DCursor; 