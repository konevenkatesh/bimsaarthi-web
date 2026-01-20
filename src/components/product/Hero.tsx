'use client';

import { Box, Cylinder, Html, Line, OrbitControls, Ring } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

// --- 3D Components ---

const DataPacket = ({ pathPoints, speed = 1, color = 'white' }: { pathPoints: THREE.Vector3[], speed?: number, color?: string }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [progress, setProgress] = useState(0);

    useFrame((state, delta) => {
        if (!meshRef.current || pathPoints.length < 2) return;
        
        const newProgress = (progress + delta * speed) % 1;
        setProgress(newProgress);
        
        // Linear interpolation along the path
        const currentPos = new THREE.Vector3().lerpVectors(pathPoints[0], pathPoints[1], newProgress);
        meshRef.current.position.copy(currentPos);
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial color={color} />
        </mesh>
    );
};

const PlatformModule = ({ position, label, color, delay }: { position: [number, number, number], label: string, color: string, delay: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  const center = new THREE.Vector3(0, 0, 0);
  const posVector = new THREE.Vector3(...position);
  const pathPoints = useMemo(() => [posVector, center], [posVector, center]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.05;
    }
  });

  return (
    <group>
        <group ref={groupRef} position={position}>
            {/* Base Platform */}
            <Box
                args={[1.2, 0.1, 1.2]}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <meshStandardMaterial
                    color={hovered ? '#ffffff' : '#1e293b'}
                    emissive={color}
                    emissiveIntensity={hovered ? 0.8 : 0.2}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.9}
                />
            </Box>
            
            {/* Wireframe Box Top */}
            <Box args={[1.2, 0.4, 1.2]} position={[0, 0.25, 0]}>
                 <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
            </Box>

            {/* Label */}
            <Html distanceFactor={12} position={[0, 0.8, 0]} style={{ pointerEvents: 'none' }}>
                <div className={`transition-all duration-300 ${hovered ? 'scale-110 opacity-100' : 'opacity-70'} text-center`}>
                    <div className="bg-black/80 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] text-white font-mono uppercase tracking-wider whitespace-nowrap shadow-xl">
                        {label}
                    </div>
                </div>
            </Html>
        </group>

        {/* Connection Spoke */}
        <Line
            points={[center, posVector]}
            color={color}
            opacity={0.2}
            transparent
            lineWidth={1}
        />
        
        {/* Animated Data Packet */}
        <DataPacket pathPoints={pathPoints} speed={0.5} color={color} />
    </group>
  );
};

const CentralCore = () => {
    const groupRef = useRef<THREE.Group>(null);
  
    useFrame((state) => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.002;
      }
    });

  return (
    <group ref={groupRef}>
        {/* Main Cylinder Core */}
        <Cylinder args={[0.8, 0.8, 2, 32]}>
            <meshPhysicalMaterial
                color="#000000"
                emissive="#1d4ed8"
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={1}
                transmission={0.5}
                thickness={1}
            />
        </Cylinder>
        
        {/* Inner Glowing Wireframe */}
        <Cylinder args={[0.7, 0.7, 1.8, 16]}>
            <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
        </Cylinder>

        {/* Orbiting Rings */}
        <Ring args={[1.2, 1.22, 64]} rotation={[Math.PI / 2, 0, 0]}>
             <meshBasicMaterial color="#60a5fa" transparent opacity={0.3} side={THREE.DoubleSide}/>
        </Ring>
        <Ring args={[1.8, 1.82, 64]} rotation={[Math.PI / 2, 0, 0]}>
             <meshBasicMaterial color="#60a5fa" transparent opacity={0.1} side={THREE.DoubleSide}/>
        </Ring>
    </group>
  );
};

const PlatformScene = () => {
    // Arrange modules in a helical/spiral stack
  const modules = [
    { label: 'Site Execution', color: '#ef4444', pos: [2.5, 1, 0] },
    { label: 'Schedule', color: '#f59e0b', pos: [1.8, 0, 1.8] },
    { label: 'Cost Control', color: '#10b981', pos: [-0.5, -0.5, 2.5] },
    { label: 'BIM Logic', color: '#3b82f6', pos: [-2.2, 0.5, 1.2] },
    { label: 'Risk Intel', color: '#8b5cf6', pos: [-2, 1.5, -1.5] },
    { label: 'Compliance', color: '#ec4899', pos: [0, -1, -2.5] },
    { label: 'Portfolio', color: '#6366f1', pos: [2, -0.5, -2] },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
      
      <CentralCore />
      
      {modules.map((mod, i) => (
        <PlatformModule
          key={i}
          position={mod.pos as [number, number, number]}
          label={mod.label}
          color={mod.color}
          delay={i * 0.5}
        />
      ))}
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        maxPolarAngle={Math.PI / 1.5} 
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

// --- Main Hero Component ---

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center bg-zinc-950 overflow-hidden pt-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-mono text-blue-300 uppercase tracking-wider">Platform V2.0 Live</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                The BIMSaarthi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    Platform
                </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            Construction Intelligence as a Service. Unify BIM models, schedules, costs, and sensor data into a single ontology-driven intelligence layer.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-900/20">
                    Request Demo
                    <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold flex items-center gap-2 transition-all backdrop-blur-sm">
                    <Play className="w-4 h-4 fill-current" />
                    Watch Overview
                </button>
            </div>

            <div className="flex gap-8 mt-8 text-sm text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    Predictive
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-purple-500 rounded-full" />
                    Ontology-Driven
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-orange-500 rounded-full" />
                    Real-time
                </div>
            </div>
        </motion.div>

        {/* Right 3D Visual */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[600px] w-full relative"
        >
            {/* Glow backing */}
            <div className="absolute inset-0 bg-blue-900/10 blur-3xl rounded-full transform scale-75" />
            
            <Canvas camera={{ position: [5, 4, 6], fov: 40 }} dpr={[1, 2]}>
                <PlatformScene />
                <gridHelper args={[20, 20, 0x333333, 0x111111]} position={[0, -2, 0]} />
            </Canvas>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
