import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

// Advanced cursor follower with multiple effects
const AdvancedCursorFollower: React.FC = () => {
  const mainSphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Main sphere following cursor
    if (mainSphereRef.current) {
      const targetX = mousePosition.x * 2;
      const targetY = mousePosition.y * 2;
      
      mainSphereRef.current.position.x += (targetX - mainSphereRef.current.position.x) * 0.15;
      mainSphereRef.current.position.y += (targetY - mainSphereRef.current.position.y) * 0.15;
      
      // Pulsing effect
      const scale = 1 + Math.sin(time * 3) * 0.1;
      mainSphereRef.current.scale.setScalar(scale);
      
      // Rotation
      mainSphereRef.current.rotation.x += 0.02;
      mainSphereRef.current.rotation.y += 0.02;
    }

    // Rotating torus
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
      torusRef.current.position.x = mousePosition.x * 1.5;
      torusRef.current.position.y = mousePosition.y * 1.5;
    }

    // Animated particles
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        const mesh = particle as THREE.Mesh;
        mesh.position.x = Math.sin(time + i * 0.5) * 3;
        mesh.position.y = Math.cos(time + i * 0.3) * 3;
        mesh.position.z = Math.sin(time * 0.5 + i) * 2;
        mesh.rotation.x += 0.02;
        mesh.rotation.y += 0.02;
      });
    }
  });

  return (
    <group>
      {/* Main glowing sphere */}
      <Sphere ref={mainSphereRef} args={[0.4, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={isHovering ? 1 : 0.6}
          transparent
          opacity={0.9}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* Rotating torus ring */}
      <Torus ref={torusRef} args={[0.8, 0.1, 16, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.4}
          transparent
          opacity={0.7}
          metalness={0.6}
          roughness={0.3}
        />
      </Torus>

      {/* Particle system */}
      <group ref={particlesRef}>
        {[...Array(12)].map((_, i) => (
          <Sphere
            key={i}
            args={[0.08, 8, 8]}
            position={[
              Math.sin(i * Math.PI * 2 / 12) * 2,
              Math.cos(i * Math.PI * 2 / 12) * 2,
              0
            ]}
          >
            <meshStandardMaterial
              color={i % 3 === 0 ? "#ffff00" : i % 3 === 1 ? "#00ff00" : "#ff0080"}
              emissive={i % 3 === 0 ? "#ffff00" : i % 3 === 1 ? "#00ff00" : "#ff0080"}
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </Sphere>
        ))}
      </group>

      {/* Energy waves */}
      {[...Array(3)].map((_, i) => (
        <Torus
          key={`wave-${i}`}
          args={[1.2 + i * 0.3, 0.02, 8, 16]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.2 - i * 0.05}
            transparent
            opacity={0.4 - i * 0.1}
          />
        </Torus>
      ))}
    </group>
  );
};

// Main component
const Advanced3DCursor: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-4 left-4 w-48 h-48 z-50 bg-gray-800/20 border border-cyan-500/20 rounded-lg flex items-center justify-center">
        <div className="text-cyan-400 animate-pulse">Loading Advanced 3D...</div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 w-48 h-48 z-50 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Enhanced lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00ffff" />
        <pointLight position={[0, 10, 0]} intensity={0.5} color="#ff00ff" />
        
        {/* Advanced cursor follower */}
        <AdvancedCursorFollower />
      </Canvas>
    </div>
  );
};

export default Advanced3DCursor; 