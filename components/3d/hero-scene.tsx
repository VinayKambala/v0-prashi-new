"use client"

import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Stars } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Simple 3D logo component
function LogoModel() {
  const groupRef = useRef(null)

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Simple gold circle representing the 'a' in Prashigroup, similar to Ankuraa's logo */}
      <mesh position={[1.5, 0, 0]}>
        <ringGeometry args={[0.3, 0.4, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Subtle ambient particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#FFD700" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

// Simple scene with minimal elements
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#FFD700" intensity={0.2} />

      <LogoModel />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="night" />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="h-screen w-full relative bg-navy-dark">
      <Canvas shadows className="bg-navy-dark">
        <Scene />
      </Canvas>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl font-light text-white">
            <span className="text-gold">Prashi</span>group
          </h1>

          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />

          <p className="text-xl text-white/80 max-w-xl mx-auto font-light">Your Heart's Destination</p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
            <Button
              size="lg"
              className="bg-transparent hover:bg-gold/10 text-gold border border-gold/30 rounded-none px-8 mt-8"
              onClick={() => {
                document.getElementById("featured-properties")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Explore
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
