"use client";

import { Float, OrbitControls, PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
// @ts-expect-error - random is not typed in three-stdlib for some reason
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function StarField(props: any) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#22d3ee" // Cyan-400
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function CoreSphere() {
    const meshRef = useRef<THREE.Mesh>(null);
     useFrame((state, delta) => {
         if(meshRef.current) {
             meshRef.current.rotation.y += delta * 0.2;
         }
     })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#06b6d4" // Cyan-500
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#06b6d4"
                    emissiveIntensity={0.5}
                />
            </mesh>
            <mesh>
                 <icosahedronGeometry args={[0.8, 0]} />
                  <meshStandardMaterial
                    color="#22d3ee" 
                    transparent
                    opacity={0.6}
                    emissive="#22d3ee"
                    emissiveIntensity={1}
                />
            </mesh>
        </Float>
    )
}


export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
          <StarField />
          <CoreSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-cyan-400 font-medium tracking-widest text-sm mb-4 uppercase">
            Building the Intelligence Layer for Construction
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Construction Intelligence <br />
            <span className="text-cyan-400">From the Ground Up</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We don't just apply generic AI. We build the core technology stack—
            Knowledge Graphs, Digital Twins, and Domain-Trained Foundation Models.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
           <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-500 text-sm"
           >
            Scroll to Explore
           </motion.div>
      </div>
    </section>
  );
}
