'use client';

import { Box, Grid, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const BuildingBlock = ({ position, delay, color }: { position: [number, number, number], delay: number, color: string }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [scale, setScale] = useState(0);

    useFrame((state) => {
        // Animation for "construction" effect - scaling up
        const time = state.clock.elapsedTime;
        if (time > delay) {
            setScale((prev) => Math.min(prev + 0.05, 1));
        }
        
        if (meshRef.current) {
            // Subtle "breathing" or scanning effect
            const mat = meshRef.current.material as THREE.MeshStandardMaterial;
             if (mat) mat.opacity = 0.6 + Math.sin(time * 2 + delay) * 0.2;
        }
    });

    return (
        <Box ref={meshRef} args={[0.95, 0.95, 0.95]} position={position} scale={[scale, scale, scale]}>
             <meshStandardMaterial 
                color={color} 
                transparent 
                opacity={0.8} 
                metalness={0.5} 
                roughness={0.2} 
                emissive={color}
                emissiveIntensity={0.2}
             />
             <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(0.95, 0.95, 0.95)]} />
                <lineBasicMaterial color="white" opacity={0.3} transparent />
            </lineSegments>
        </Box>
    );
};

const ConstructionScene = () => {
    // Generate a simple voxel-like building structure
    const blocks = [];
    const colors = ['#3b82f6', '#10b981', '#6366f1', '#f59e0b']; // Blue, Green, Indigo, Amber
    
    // Base
    for(let x=-2; x<=2; x++) {
        for(let z=-2; z<=2; z++) {
             blocks.push({ pos: [x, -1, z], color: '#1e293b', delay: Math.random() * 1 });
        }
    }
    
    // Structure
    const structure = [
        // Columns
        [2, 0, 2], [2, 1, 2], [2, 2, 2],
        [-2, 0, 2], [-2, 1, 2], [-2, 2, 2],
        [2, 0, -2], [2, 1, -2], [2, 2, -2],
        [-2, 0, -2], [-2, 1, -2], [-2, 2, -2],
        // Beams
        [0, 2, 2], [1, 2, 2], [-1, 2, 2],
        [0, 2, -2], [1, 2, -2], [-1, 2, -2],
        [2, 2, 0], [2, 2, 1], [2, 2, -1],
        [-2, 2, 0], [-2, 2, 1], [-2, 2, -1],
        // Core
        [0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0]
    ];

    structure.forEach((pos, i) => {
         blocks.push({ pos: pos, color: colors[i % colors.length], delay: 1 + i * 0.1 });
    });

    return (
        <group rotation={[0, -Math.PI / 4, 0]}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, 5, -10]} intensity={1} color="#3b82f6" />
            
            {blocks.map((b, i) => (
                <BuildingBlock 
                    key={i} 
                    position={b.pos as [number, number, number]} 
                    delay={b.delay} 
                    color={b.color} 
                />
            ))}
            
            {/* Scanning Plane Animation */}
            <ScanningPlane />
            
            <Grid infiniteGrid sectionSize={1} sectionColor="#4b5563" cellColor="#374151" position={[0,-1.5,0]} fadeDistance={20}/>
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} maxPolarAngle={Math.PI/2.2} />
        </group>
    );
};

const ScanningPlane = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame(({ clock }) => {
        if (meshRef.current) {
            const y = Math.sin(clock.elapsedTime * 0.5) * 2.5 + 0.5;
            meshRef.current.position.y = y;
        }
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[8, 8]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} side={THREE.DoubleSide} />
            <lineSegments>
                 <edgesGeometry args={[new THREE.PlaneGeometry(8, 8)]} />
                 <lineBasicMaterial color="#60a5fa" transparent opacity={0.5} />
            </lineSegments>
        </mesh>
    );
};


const ServicesHero = () => {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center bg-black overflow-hidden pt-32">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
        >
            <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 w-fit mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Professional Services</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                    Services That Power <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Construction Intelligence
                    </span>
                </h1>
                 <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                    From BIM modeling to Digital Twins, we provide the technical services needed to operationalize the BIMSaarthi platform and digitize your execution.
                </p>
            </div>

            <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                    <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-white/10">
                        <MessageSquare className="w-4 h-4" />
                        Discuss Your Project
                    </button>
                </Link>
                <Link href="/contact">
                    <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 rounded-lg font-medium flex items-center gap-2 transition-all">
                        <FileText className="w-4 h-4" />
                        Request Proposal
                    </button>
                </Link>
            </div>
            

        </motion.div>

        {/* Right Visual - Construction Scene */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[600px] w-full relative"
        >
             <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
                <ConstructionScene />
             </Canvas>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesHero;
