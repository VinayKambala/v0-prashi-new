"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ZoomIn, ZoomOut, Maximize, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Room {
  id: string
  name: string
  area: string
  description: string
  x: number
  y: number
  width: number
  height: number
}

interface FloorPlanProps {
  floorPlanImage: string
  title: string
  totalArea: string
  rooms: Room[]
  className?: string
}

export default function InteractiveFloorPlan({
  floorPlanImage,
  title,
  totalArea,
  rooms,
  className = "",
}: FloorPlanProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5))
  }

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

  return (
    <div
      ref={containerRef}
      className={`relative ${
        isFullscreen ? "fixed inset-0 z-50 bg-white" : `${className} h-[500px]`
      } rounded-lg overflow-hidden border`}
    >
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">Total Area: {totalArea}</p>
      </div>

      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/90 backdrop-blur-sm hover:bg-white/100 h-9 w-9"
          onClick={handleZoomIn}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/90 backdrop-blur-sm hover:bg-white/100 h-9 w-9"
          onClick={handleZoomOut}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-white/90 backdrop-blur-sm hover:bg-white/100 h-9 w-9"
          onClick={toggleFullscreen}
        >
          <Maximize className="h-4 w-4" />
        </Button>
      </div>

      <div className="w-full h-full overflow-auto flex items-center justify-center bg-gray-100">
        <div className="relative transition-transform duration-300 ease-out" style={{ transform: `scale(${scale})` }}>
          <Image
            src={floorPlanImage || "/placeholder.svg"}
            alt={`Floor plan for ${title}`}
            width={1000}
            height={800}
            className="max-w-none"
          />

          {rooms.map((room) => (
            <div
              key={room.id}
              className="absolute cursor-pointer"
              style={{
                left: `${room.x}px`,
                top: `${room.y}px`,
                width: `${room.width}px`,
                height: `${room.height}px`,
              }}
              onClick={() => setSelectedRoom(room)}
            >
              <div
                className={`w-full h-full border-2 ${
                  selectedRoom?.id === room.id ? "border-primary bg-primary/20" : "border-transparent"
                } hover:border-primary hover:bg-primary/10 transition-colors duration-200 rounded-md`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-10"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-lg">{selectedRoom.name}</h4>
                  <Badge variant="outline">{selectedRoom.area}</Badge>
                </div>
                <p className="mt-1 text-muted-foreground">{selectedRoom.description}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedRoom(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
