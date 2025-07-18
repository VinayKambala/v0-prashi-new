"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Maximize, ChevronRight, ChevronLeft, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Hotspot {
  id: string
  title: string
  description: string
  position: { x: number; y: number }
}

interface PanoramaScene {
  id: string
  title: string
  imageUrl: string
  hotspots: Hotspot[]
  connections: { id: string; position: { x: number; y: number }; targetId: string }[]
}

interface VirtualTourProps {
  initialSceneId: string
  scenes: PanoramaScene[]
  title: string
  className?: string
}

export default function VirtualTour({ initialSceneId, scenes, title, className = "" }: VirtualTourProps) {
  const [currentSceneId, setCurrentSceneId] = useState(initialSceneId)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const lastPositionRef = useRef({ x: 0, y: 0 })

  const currentScene = scenes.find((scene) => scene.id === currentSceneId) || scenes[0]

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStartRef.current = { x: e.clientX, y: e.clientY }
    lastPositionRef.current = { ...rotation }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - dragStartRef.current.x
    const deltaY = e.clientY - dragStartRef.current.y

    setRotation({
      x: lastPositionRef.current.x + deltaX * 0.5,
      y: Math.max(-45, Math.min(45, lastPositionRef.current.y + deltaY * 0.5)),
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const navigateToScene = (sceneId: string) => {
    setCurrentSceneId(sceneId)
    setSelectedHotspot(null)
    setRotation({ x: 0, y: 0 })
  }

  const previousScene = () => {
    const currentIndex = scenes.findIndex((scene) => scene.id === currentSceneId)
    const prevIndex = (currentIndex - 1 + scenes.length) % scenes.length
    navigateToScene(scenes[prevIndex].id)
  }

  const nextScene = () => {
    const currentIndex = scenes.findIndex((scene) => scene.id === currentSceneId)
    const nextIndex = (currentIndex + 1) % scenes.length
    navigateToScene(scenes[nextIndex].id)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        previousScene()
      } else if (e.key === "ArrowRight") {
        nextScene()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSceneId])

  return (
    <div
      ref={containerRef}
      className={`relative ${
        isFullscreen ? "fixed inset-0 z-50" : `h-[500px] ${className}`
      } rounded-lg overflow-hidden`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{currentScene.title}</p>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 h-10 w-10"
          onClick={toggleFullscreen}
        >
          <Maximize className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute inset-y-0 left-4 z-10 flex items-center">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 h-10 w-10"
          onClick={previousScene}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-4 z-10 flex items-center">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 h-10 w-10"
          onClick={nextScene}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex gap-2">
          {scenes.map((scene) => (
            <Button
              key={scene.id}
              variant={scene.id === currentSceneId ? "default" : "outline"}
              size="sm"
              className="h-8 min-w-8 rounded-full"
              onClick={() => navigateToScene(scene.id)}
            >
              {scenes.indexOf(scene) + 1}
            </Button>
          ))}
        </div>
      </div>

      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${currentScene.imageUrl})`,
          transform: `perspective(1000px) rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Hotspots */}
        {currentScene.hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="absolute"
            style={{
              left: `${hotspot.position.x}%`,
              top: `${hotspot.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedHotspot(selectedHotspot?.id === hotspot.id ? null : hotspot)
            }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 ${
                selectedHotspot?.id === hotspot.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <Info className="h-5 w-5 text-primary" />
            </div>
          </div>
        ))}

        {/* Scene connections */}
        {currentScene.connections.map((connection) => (
          <div
            key={connection.id}
            className="absolute"
            style={{
              left: `${connection.position.x}%`,
              top: `${connection.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => {
              e.stopPropagation()
              navigateToScene(connection.targetId)
            }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/80 backdrop-blur-sm shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 animate-pulse">
              <ChevronRight className="h-6 w-6 text-white" />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedHotspot && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20"
          >
            <h4 className="font-bold text-lg">{selectedHotspot.title}</h4>
            <p className="mt-1 text-muted-foreground">{selectedHotspot.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
