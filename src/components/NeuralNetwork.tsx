import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  layer: number;
  active: boolean;
}

interface Connection {
  from: Node;
  to: Node;
  weight: number;
  active: boolean;
}

const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create neural network structure
    const layers = [4, 6, 6, 3]; // Input, Hidden1, Hidden2, Output
    const nodes: Node[] = [];
    const connections: Connection[] = [];

    // Create nodes
    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: (canvas.width / (layers.length - 1)) * layerIndex,
          y: (canvas.height / (nodeCount + 1)) * (i + 1),
          layer: layerIndex,
          active: Math.random() > 0.5,
        });
      }
    });

    // Create connections
    nodes.forEach((node, nodeIndex) => {
      nodes.forEach((otherNode, otherIndex) => {
        if (node.layer === otherNode.layer - 1) {
          connections.push({
            from: node,
            to: otherNode,
            weight: Math.random() * 2 - 1,
            active: Math.random() > 0.3,
          });
        }
      });
    });

    nodesRef.current = nodes;
    connectionsRef.current = connections;

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw connections
      connectionsRef.current.forEach((connection) => {
        if (connection.active) {
          const gradient = ctx.createLinearGradient(
            connection.from.x, connection.from.y,
            connection.to.x, connection.to.y
          );
          
          const opacity = Math.abs(connection.weight) * 0.5 + 0.1;
          const color = connection.weight > 0 ? '0, 255, 136' : '255, 100, 100';
          
          gradient.addColorStop(0, `rgba(${color}, ${opacity})`);
          gradient.addColorStop(1, `rgba(${color}, 0)`);
          
          ctx.beginPath();
          ctx.moveTo(connection.from.x, connection.from.y);
          ctx.lineTo(connection.to.x, connection.to.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.abs(connection.weight) * 2 + 0.5;
          ctx.stroke();
        }
      });

      // Draw nodes
      nodesRef.current.forEach((node, index) => {
        const pulse = Math.sin(time * 2 + index * 0.1) * 0.3 + 0.7;
        const radius = node.active ? 8 * pulse : 4;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        
        if (node.active) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, radius
          );
          gradient.addColorStop(0, 'rgba(0, 255, 136, 0.8)');
          gradient.addColorStop(1, 'rgba(0, 255, 136, 0.2)');
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
        }
        
        ctx.fill();
        
        // Add glow effect
        if (node.active) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = 'rgba(0, 255, 136, 0.5)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Randomly activate nodes
      if (Math.random() > 0.95) {
        const randomNode = nodesRef.current[Math.floor(Math.random() * nodesRef.current.length)];
        randomNode.active = !randomNode.active;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-64 relative"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50 pointer-events-none" />
    </motion.div>
  );
};

export default NeuralNetwork;