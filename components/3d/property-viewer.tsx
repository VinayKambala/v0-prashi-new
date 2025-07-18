"use client"

import type React from "react"

import { Suspense, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Html, PerspectiveCamera } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Loader2, Info, Home, Grid3x3Icon as Grid3, Maximize } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Import the FallbackModel component
import FallbackModel from "./fallback-model"

// Update the Model component to use our FallbackModel
function Model({ url, title, ...props }: { url: string; title?: string }) {
  const { scene } = useGLTF(url)
  const [error, setError] = useState(false)

  if (error) {
    return null // Return null to let the parent handle the fallback
  }

  return (
    <Suspense fallback={null}>
      <primitive object={scene} {...props} />
    </Suspense>
  )
}

function PropertyControls({
  setView,
  isFullscreen,
  toggleFullscreen,
}: {
  setView: (view: string) => void
  isFullscreen: boolean
  toggleFullscreen: () => void
}) {
  return (
    <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between">
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
          onClick={() => setView("exterior")}
        >
          <Home className="mr-2 h-4 w-4" />
          Exterior
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
          onClick={() => setView("interior")}
        >
          <Grid3 className="mr-2 h-4 w-4" />
          Interior
        </Button>
      </div>
      <Button
        variant="secondary"
        size="sm"
        className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
        onClick={toggleFullscreen}
      >
        <Maximize className="mr-2 h-4 w-4" />
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </Button>
    </div>
  )
}

function PropertyInfo({ title, location, price }: { title: string; location: string; price: string }) {
  return (
    <div className="absolute top-4 left-4 z-10">
      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{location}</p>
        <Badge className="mt-2 bg-primary">{price}</Badge>
      </div>
    </div>
  )
}

function HotspotInfo({ position, children }: { position: [number, number, number]; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  return (
    <group position={position}>
      <Html
        center
        occlude
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <div
          className={`relative ${hovered ? "scale-110" : "scale-100"} transition-transform duration-200 cursor-pointer`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              clicked ? "bg-primary text-white" : "bg-white text-primary"
            } shadow-lg`}
          >
            <Info className="h-4 w-4" />
          </div>
          {clicked && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white p-3 rounded-lg shadow-lg text-sm z-10">
              {children}
            </div>
          )}
        </div>
      </Html>
    </group>
  )
}

// Update the PropertyViewer component to handle errors
export default function PropertyViewer({
  title,
  location,
  price,
  exteriorModelUrl = "/models/house-exterior.glb",
  interiorModelUrl = "/models/house-interior.glb",
  className = "",
}: {
  title: string
  location: string
  price: string
  exteriorModelUrl?: string
  interiorModelUrl?: string
  className?: string
}) {
  const [view, setView] = useState("exterior")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [modelError, setModelError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Update the Canvas section to handle errors
  return (
    <div
      ref={containerRef}
      className={`relative ${isFullscreen ? "fixed inset-0 z-50" : `h-[500px] ${className}`} rounded-lg overflow-hidden`}
    >
      <PropertyInfo title={title} location={location} price={price} />
      <PropertyControls setView={setView} isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} />

      {modelError ? (
        <FallbackModel title={`${title} - ${view === "exterior" ? "Exterior" : "Interior"} View`} />
      ) : (
        <Canvas shadows camera={{ position: [10, 10, 10], fov: 25 }} onError={() => setModelError(true)}>
          <Suspense
            fallback={
              <Html center>
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading 3D model...</span>
                </div>
              </Html>
            }
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={25} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
            />

            {view === "exterior" ? (
              <>
                <Model url={exteriorModelUrl} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />
                <HotspotInfo position={[3, 2, 3]}>
                  <h4 className="font-bold mb-1">Modern Architecture</h4>
                  <p>Contemporary design with premium finishes and sustainable materials.</p>
                </HotspotInfo>
                <HotspotInfo position={[-3, 1, 2]}>
                  <h4 className="font-bold mb-1">Landscaped Garden</h4>
                  <p>Professionally designed garden with native plants and outdoor seating area.</p>
                </HotspotInfo>
              </>
            ) : (
              <>
                <Model url={interiorModelUrl} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />
                <HotspotInfo position={[2, 1, 0]}>
                  <h4 className="font-bold mb-1">Living Room</h4>
                  <p>Spacious living area with floor-to-ceiling windows and natural lighting.</p>
                </HotspotInfo>
                <HotspotInfo position={[-2, 1, -2]}>
                  <h4 className="font-bold mb-1">Kitchen</h4>
                  <p>Modern kitchen with premium appliances and island countertop.</p>
                </HotspotInfo>
              </>
            )}

            <Environment preset="apartment" />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
