"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { Loader2 } from "lucide-react"

function AnimatedGeometry({ color = "#5d35ff" }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2
      ref.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

export default function FallbackModel({ title = "3D Model Preview", color = "#5d35ff" }) {
  return (
    <Canvas shadows>
      <Suspense
        fallback={
          <Html center>
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading preview...</span>
            </div>
          </Html>
        }
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {/* Simple building model */}
        <group>
          {/* Base */}
          <mesh position={[0, -1, 0]} receiveShadow castShadow>
            <boxGeometry args={[4, 0.2, 4]} />
            <meshStandardMaterial color="#c0c0c0" />
          </mesh>

          {/* Animated Geometry */}
          <AnimatedGeometry color={color} />

          {/* Label */}
          <Html position={[0, 1.5, 0]} center>
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded text-sm font-medium">{title}</div>
          </Html>
        </group>

        <Environment preset="apartment" />
      </Suspense>
    </Canvas>
  )
}
