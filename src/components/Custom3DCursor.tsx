import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// 3D Object that follows cursor
const CursorFollower: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, gl } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth interpolation for cursor following
      const targetX = mousePosition.x * 3;
      const targetY = mousePosition.y * 3;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.1;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.1;
      
      // Add some rotation based on movement
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* Main cursor follower - glowing sphere */}
      <Sphere ref={meshRef} args={[0.3, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Trail effect - smaller spheres */}
      {[...Array(5)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.1 - i * 0.02, 8, 8]}
          position={[
            mousePosition.x * 3 - i * 0.2,
            mousePosition.y * 3 - i * 0.2,
            0
          ]}
        >
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6 - i * 0.1}
          />
        </Sphere>
      ))}
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <Sphere
          key={`particle-${i}`}
          args={[0.05, 4, 4]}
          position={[
            Math.sin(state.clock.elapsedTime + i) * 2,
            Math.cos(state.clock.elapsedTime + i * 0.5) * 2,
            Math.sin(state.clock.elapsedTime * 0.5 + i) * 2
          ]}
        >
          <meshStandardMaterial
            color="#ffff00"
            emissive="#ffff00"
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </Sphere>
      ))}
    </group>
  );
};

// Main component
const Custom3DCursor: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-4 left-4 w-48 h-48 z-50 bg-gray-800/20 border border-cyan-500/20 rounded-lg flex items-center justify-center">
        <div className="text-cyan-400">Loading 3D Cursor...</div>
      </div>
    );
  }

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
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
        
        {/* 3D Cursor Follower */}
        <CursorFollower />
        
        {/* Disable orbit controls for cursor-only interaction */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default Custom3DCursor; 