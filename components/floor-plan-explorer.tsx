"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, Maximize, ZoomIn, ZoomOut, Info } from "lucide-react"
import Link from "next/link"

// Floor plan data
const floorPlans = [
  {
    id: "2bhk",
    name: "2 BHK Premium",
    area: 1250,
    bedrooms: 2,
    bathrooms: 2,
    price: "₹95 Lakhs onwards",
    image: "/floor-plan-2bhk.png",
    project: "Prashi Horizon",
    hotspots: [
      {
        id: "living",
        name: "Living Room",
        description: "Spacious living area with large windows and balcony access",
        area: "300 sq.ft",
        x: 35,
        y: 60,
      },
      {
        id: "kitchen",
        name: "Kitchen",
        description: "Modern kitchen with premium appliances and breakfast counter",
        area: "120 sq.ft",
        x: 70,
        y: 60,
      },
      {
        id: "master",
        name: "Master Bedroom",
        description: "Luxurious master bedroom with attached bathroom and walk-in closet",
        area: "220 sq.ft",
        x: 30,
        y: 30,
      },
      {
        id: "bedroom2",
        name: "Bedroom 2",
        description: "Comfortable second bedroom with large windows and built-in wardrobes",
        area: "180 sq.ft",
        x: 70,
        y: 30,
      },
    ],
  },
  {
    id: "3bhk",
    name: "3 BHK Luxury",
    area: 1850,
    bedrooms: 3,
    bathrooms: 3,
    price: "₹1.2 Cr onwards",
    image: "/floor-plan-3bhk.png",
    project: "Prashi Heights",
    hotspots: [
      {
        id: "living",
        name: "Living Room",
        description: "Expansive living and dining area with premium finishes",
        area: "400 sq.ft",
        x: 35,
        y: 60,
      },
      {
        id: "kitchen",
        name: "Kitchen",
        description: "Gourmet kitchen with island counter and high-end appliances",
        area: "150 sq.ft",
        x: 70,
        y: 60,
      },
      {
        id: "master",
        name: "Master Bedroom",
        description: "Luxurious master suite with walk-in closet and spa-like bathroom",
        area: "250 sq.ft",
        x: 25,
        y: 25,
      },
      {
        id: "bedroom2",
        name: "Bedroom 2",
        description: "Spacious second bedroom with attached bathroom",
        area: "200 sq.ft",
        x: 50,
        y: 25,
      },
      {
        id: "bedroom3",
        name: "Bedroom 3",
        description: "Versatile third bedroom that can also be used as a home office",
        area: "180 sq.ft",
        x: 75,
        y: 25,
      },
    ],
  },
  {
    id: "4bhk",
    name: "4 BHK Villa",
    area: 3200,
    bedrooms: 4,
    bathrooms: 4,
    price: "₹2.5 Cr onwards",
    image: "/floor-plan-4bhk.png",
    project: "Prashi Meadows",
    hotspots: [
      {
        id: "living",
        name: "Living Room",
        description: "Grand living area with double-height ceiling and premium finishes",
        area: "500 sq.ft",
        x: 35,
        y: 60,
      },
      {
        id: "kitchen",
        name: "Kitchen & Dining",
        description: "Chef's kitchen with premium appliances and formal dining area",
        area: "350 sq.ft",
        x: 70,
        y: 60,
      },
      {
        id: "master",
        name: "Master Suite",
        description: "Luxurious master suite with sitting area, walk-in closet and spa bathroom",
        area: "400 sq.ft",
        x: 20,
        y: 25,
      },
      {
        id: "bedroom2",
        name: "Bedroom 2",
        description: "Spacious guest bedroom with attached bathroom",
        area: "250 sq.ft",
        x: 45,
        y: 25,
      },
      {
        id: "bedroom3",
        name: "Bedroom 3",
        description: "Children's bedroom with study area and attached bathroom",
        area: "230 sq.ft",
        x: 70,
        y: 25,
      },
      {
        id: "bedroom4",
        name: "Bedroom 4",
        description: "Versatile fourth bedroom that can be used as a home office or gym",
        area: "220 sq.ft",
        x: 90,
        y: 25,
      },
    ],
  },
]

export default function FloorPlanExplorer() {
  const [selectedPlan, setSelectedPlan] = useState(floorPlans[1]) // Default to 3BHK
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5))
  }

  const handleHotspotClick = (id: string) => {
    setSelectedHotspot(selectedHotspot === id ? null : id)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative bg-gray-50 p-4 h-[600px] overflow-hidden">
            {/* Controls */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="bg-white shadow-md hover:bg-gray-100"
                onClick={handleZoomIn}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="bg-white shadow-md hover:bg-gray-100"
                onClick={handleZoomOut}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="bg-white shadow-md hover:bg-gray-100"
                onClick={() => setZoom(1)}
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>

            {/* Floor Plan */}
            <div className="w-full h-full flex items-center justify-center overflow-auto">
              <div className="relative transition-transform duration-300" style={{ transform: `scale(${zoom})` }}>
                <Image
                  src={selectedPlan.image || "/placeholder.svg"}
                  alt={selectedPlan.name}
                  width={800}
                  height={600}
                  className="max-w-none"
                />

                {/* Hotspots */}
                {selectedPlan.hotspots.map((hotspot) => (
                  <div key={hotspot.id} className="absolute" style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}>
                    <button
                      className={`w-6 h-6 rounded-full flex items-center justify-center floor-plan-dot ${
                        selectedHotspot === hotspot.id
                          ? "bg-secondary text-primary"
                          : "bg-white border border-secondary text-secondary"
                      }`}
                      onClick={() => handleHotspotClick(hotspot.id)}
                    >
                      <Info className="h-3 w-3" />
                    </button>
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white p-3 rounded-lg shadow-lg text-sm z-10 floor-plan-info ${
                        selectedHotspot === hotspot.id ? "opacity-100 transform-none" : ""
                      }`}
                    >
                      <h4 className="font-semibold text-primary">{hotspot.name}</h4>
                      <p className="text-xs text-primary/70 mt-1">{hotspot.description}</p>
                      <div className="mt-2 text-xs font-medium text-secondary">{hotspot.area}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-l border-gray-200">
          <div className="mb-6">
            <Badge className="bg-secondary text-primary mb-2">{selectedPlan.project}</Badge>
            <h3 className="text-2xl font-semibold text-primary mb-2">{selectedPlan.name}</h3>
            <p className="text-primary/70 mb-4">
              Explore our {selectedPlan.name} floor plan with interactive features.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-primary/70">Area</div>
              <div className="text-lg font-semibold text-primary flex items-center gap-1">
                <Square className="h-4 w-4 text-secondary" />
                {selectedPlan.area} sq.ft
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-primary/70">Price</div>
              <div className="text-lg font-semibold text-secondary">{selectedPlan.price}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-primary/70">Bedrooms</div>
              <div className="text-lg font-semibold text-primary flex items-center gap-1">
                <Bed className="h-4 w-4 text-secondary" />
                {selectedPlan.bedrooms}
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-primary/70">Bathrooms</div>
              <div className="text-lg font-semibold text-primary flex items-center gap-1">
                <Bath className="h-4 w-4 text-secondary" />
                {selectedPlan.bathrooms}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-primary mb-3">Select Floor Plan</h4>
            <div className="grid grid-cols-3 gap-3">
              {floorPlans.map((plan) => (
                <button
                  key={plan.id}
                  className={`p-3 border rounded-lg text-center floor-plan-hover ${
                    selectedPlan.id === plan.id ? "floor-plan-active" : ""
                  }`}
                  onClick={() => {
                    setSelectedPlan(plan)
                    setSelectedHotspot(null)
                  }}
                >
                  <div className="text-sm font-medium">{plan.bedrooms} BHK</div>
                  <div className="text-xs text-primary/70">{plan.area} sq.ft</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-3">How to Use</h4>
            <ul className="text-sm text-primary/70 space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-secondary">1</span>
                </div>
                <span>Click on the hotspots to view room details</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-secondary">2</span>
                </div>
                <span>Use the zoom controls to get a closer look</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-secondary">3</span>
                </div>
                <span>Switch between different floor plans using the selector</span>
              </li>
            </ul>
          </div>

          <Button className="w-full bg-secondary text-primary hover:bg-secondary/90" asChild>
            <Link href={`/projects/${selectedPlan.project.toLowerCase().replace(/\s+/g, "-")}`}>
              View Project Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
