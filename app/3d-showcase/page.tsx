"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  CuboidIcon as Cube,
  Grid3x3Icon as Grid3,
  PanelTop,
  ArrowRight,
  Play,
  RotateCw,
  MousePointerClick,
  ZoomIn,
  Fullscreen,
  Info,
} from "lucide-react"
import FallbackModel from "@/components/3d/fallback-model"
import InteractiveFloorPlan from "@/components/3d/interactive-floor-plan"
import VirtualTour from "@/components/3d/virtual-tour"

export default function ShowcasePage() {
  const [activeProject, setActiveProject] = useState("prashi-heights")

  const projects = [
    {
      id: "prashi-heights",
      name: "Prashi Heights",
      location: "Whitefield, Bengaluru",
      image: "/project-1.jpg",
      type: "Apartment",
    },
    {
      id: "prashi-meadows",
      name: "Prashi Meadows",
      location: "Electronic City, Bengaluru",
      image: "/project-2.jpg",
      type: "Villa",
    },
    {
      id: "prashi-business-park",
      name: "Prashi Business Park",
      location: "Outer Ring Road, Bengaluru",
      image: "/project-3.jpg",
      type: "Commercial",
    },
  ]

  const activeProjectData = projects.find((p) => p.id === activeProject) || projects[0]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Interactive Experience</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Immersive Property Showcase</h1>
            <p className="text-lg text-muted-foreground">
              Explore our properties through interactive 3D models, detailed floor plans, and immersive virtual tours.
              Experience your future home before making a decision.
            </p>
          </div>
        </div>
      </section>

      {/* Project Selection */}
      <section className="py-8 border-b">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Select a Project</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all ${activeProject === project.id ? "ring-2 ring-primary" : "hover:shadow-md"}`}
                onClick={() => setActiveProject(project.id)}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3">
                    <Badge>{project.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <p className="text-muted-foreground">{project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Showcase Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold">{activeProjectData.name}</h2>
              <p className="text-muted-foreground">{activeProjectData.location}</p>
            </div>
            <Button variant="outline" className="group" asChild>
              <Link href={`/projects/${activeProjectData.id}`}>
                View Project Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <Tabs defaultValue="3d-model" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
              <TabsTrigger value="3d-model" className="flex items-center gap-2">
                <Cube className="h-4 w-4" />
                <span className="hidden sm:inline">3D Model</span>
                <span className="sm:hidden">3D</span>
              </TabsTrigger>
              <TabsTrigger value="floor-plan" className="flex items-center gap-2">
                <PanelTop className="h-4 w-4" />
                <span className="hidden sm:inline">Floor Plan</span>
                <span className="sm:hidden">Plan</span>
              </TabsTrigger>
              <TabsTrigger value="virtual-tour" className="flex items-center gap-2">
                <Grid3 className="h-4 w-4" />
                <span className="hidden sm:inline">Virtual Tour</span>
                <span className="sm:hidden">Tour</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="3d-model" className="space-y-8">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Interactive 3D Model</h3>
                        <p className="text-muted-foreground">Explore the property from every angle</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <RotateCw className="h-4 w-4" />
                          <span>Rotate</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ZoomIn className="h-4 w-4" />
                          <span>Zoom</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MousePointerClick className="h-4 w-4" />
                          <span>Click</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-[600px]">
                    <FallbackModel title={`${activeProjectData.name} - 3D Preview`} />

                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button variant="secondary" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white/90">
                        <Info className="h-4 w-4 mr-1" />
                        Help
                      </Button>
                      <Button variant="secondary" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white/90">
                        <Fullscreen className="h-4 w-4 mr-1" />
                        Fullscreen
                      </Button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <div className="font-medium">{activeProjectData.name}</div>
                        <div className="text-sm text-muted-foreground">{activeProjectData.type}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                        >
                          Exterior
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                        >
                          Interior
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <h4 className="font-medium mb-2">About This 3D Model</h4>
                    <p className="text-muted-foreground text-sm">
                      This interactive 3D model allows you to explore {activeProjectData.name} from all angles. Click
                      and drag to rotate, use the scroll wheel to zoom, and click on hotspots to learn more about
                      specific features. Switch between exterior and interior views to get a complete understanding of
                      the property.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <RotateCw className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">360° Rotation</h4>
                          <p className="text-sm text-muted-foreground">
                            Click and drag to rotate the model and view it from any angle.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <ZoomIn className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Zoom Control</h4>
                          <p className="text-sm text-muted-foreground">
                            Use the scroll wheel or pinch gesture to zoom in and out.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <MousePointerClick className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Interactive Hotspots</h4>
                          <p className="text-sm text-muted-foreground">
                            Click on highlighted areas to learn more about specific features.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="floor-plan" className="space-y-8">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Interactive Floor Plan</h3>
                        <p className="text-muted-foreground">Explore the layout and room details</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ZoomIn className="h-4 w-4" />
                          <span>Zoom</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MousePointerClick className="h-4 w-4" />
                          <span>Click Room</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <InteractiveFloorPlan
                    floorPlanImage="/floor-plan-3bhk.png"
                    title={`${activeProjectData.name} - 3 BHK Premium`}
                    totalArea="1850 sq.ft"
                    rooms={[
                      {
                        id: "living",
                        name: "Living Room",
                        area: "400 sq.ft",
                        description:
                          "Spacious living area with large windows providing ample natural light and a view of the garden.",
                        x: 200,
                        y: 300,
                        width: 300,
                        height: 200,
                      },
                      {
                        id: "kitchen",
                        name: "Kitchen",
                        area: "150 sq.ft",
                        description:
                          "Modern kitchen with premium appliances, granite countertops, and ample storage space.",
                        x: 500,
                        y: 300,
                        width: 150,
                        height: 200,
                      },
                      {
                        id: "master",
                        name: "Master Bedroom",
                        area: "250 sq.ft",
                        description:
                          "Luxurious master bedroom with attached bathroom and walk-in closet. Features a private balcony.",
                        x: 200,
                        y: 100,
                        width: 200,
                        height: 150,
                      },
                      {
                        id: "bedroom2",
                        name: "Bedroom 2",
                        area: "200 sq.ft",
                        description: "Comfortable second bedroom with large windows and built-in wardrobes.",
                        x: 450,
                        y: 100,
                        width: 150,
                        height: 150,
                      },
                      {
                        id: "bedroom3",
                        name: "Bedroom 3",
                        area: "180 sq.ft",
                        description: "Versatile third bedroom that can also be used as a home office or study.",
                        x: 650,
                        y: 100,
                        width: 150,
                        height: 150,
                      },
                    ]}
                    className="w-full"
                  />

                  <div className="p-6 bg-muted/30">
                    <h4 className="font-medium mb-2">About This Floor Plan</h4>
                    <p className="text-muted-foreground text-sm">
                      This interactive floor plan allows you to explore the layout of {activeProjectData.name}. Click on
                      rooms to see details and specifications. Use the zoom controls to get a better view of the space.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src="/floor-plan-detail.png" alt="Floor Plan Detail" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">Detailed Specifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Our floor plans include detailed specifications for each room, including dimensions, materials,
                        and features. Click on any room to see more information.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src="/floor-plan-options.png" alt="Floor Plan Options" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">Multiple Layout Options</h4>
                      <p className="text-sm text-muted-foreground">
                        Explore different layout options for your future home. We offer various configurations to suit
                        different needs and preferences.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="virtual-tour" className="space-y-8">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Virtual Tour</h3>
                        <p className="text-muted-foreground">Experience the property in 360°</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <RotateCw className="h-4 w-4" />
                          <span>Drag to Look</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MousePointerClick className="h-4 w-4" />
                          <span>Click Hotspots</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <VirtualTour
                    title={`${activeProjectData.name} - Virtual Tour`}
                    initialSceneId="living-room"
                    scenes={[
                      {
                        id: "living-room",
                        title: "Living Room",
                        imageUrl: "/360-living-room.png",
                        hotspots: [
                          {
                            id: "living-feature-1",
                            title: "Premium Flooring",
                            description:
                              "Italian marble flooring with underfloor heating for maximum comfort in all seasons.",
                            position: { x: 30, y: 60 },
                          },
                          {
                            id: "living-feature-2",
                            title: "Smart Home Controls",
                            description:
                              "Integrated smart home system controlling lighting, temperature, and entertainment.",
                            position: { x: 70, y: 40 },
                          },
                        ],
                        connections: [
                          {
                            id: "to-kitchen",
                            position: { x: 80, y: 50 },
                            targetId: "kitchen",
                          },
                          {
                            id: "to-master",
                            position: { x: 20, y: 50 },
                            targetId: "master-bedroom",
                          },
                        ],
                      },
                      {
                        id: "kitchen",
                        title: "Kitchen",
                        imageUrl: "/360-kitchen.png",
                        hotspots: [
                          {
                            id: "kitchen-feature-1",
                            title: "Premium Appliances",
                            description:
                              "High-end appliances including induction cooktop, double oven, and wine cooler.",
                            position: { x: 40, y: 50 },
                          },
                          {
                            id: "kitchen-feature-2",
                            title: "Custom Cabinetry",
                            description: "Custom-designed cabinetry with soft-close drawers and ample storage space.",
                            position: { x: 60, y: 40 },
                          },
                        ],
                        connections: [
                          {
                            id: "to-living",
                            position: { x: 20, y: 50 },
                            targetId: "living-room",
                          },
                        ],
                      },
                      {
                        id: "master-bedroom",
                        title: "Master Bedroom",
                        imageUrl: "/360-master-bedroom.png",
                        hotspots: [
                          {
                            id: "master-feature-1",
                            title: "Walk-in Closet",
                            description: "Spacious walk-in closet with custom shelving and organization systems.",
                            position: { x: 30, y: 40 },
                          },
                          {
                            id: "master-feature-2",
                            title: "En-suite Bathroom",
                            description:
                              "Luxury en-suite bathroom with rainfall shower, soaking tub, and dual vanities.",
                            position: { x: 70, y: 60 },
                          },
                        ],
                        connections: [
                          {
                            id: "to-living-from-master",
                            position: { x: 50, y: 80 },
                            targetId: "living-room",
                          },
                        ],
                      },
                    ]}
                    className="w-full"
                  />

                  <div className="p-6 bg-muted/30">
                    <h4 className="font-medium mb-2">About This Virtual Tour</h4>
                    <p className="text-muted-foreground text-sm">
                      This virtual tour allows you to explore {activeProjectData.name} as if you were there in person.
                      Navigate between rooms, look around in 360°, and discover features by clicking on hotspots.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
                          <Image src="/virtual-tour-guide.png" alt="Virtual Tour Guide" fill className="object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                              <Play className="h-5 w-5 text-white fill-white ml-1" />
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-2/3">
                          <h4 className="font-medium text-lg mb-2">How to Use the Virtual Tour</h4>
                          <p className="text-muted-foreground mb-4">
                            Our virtual tour feature allows you to explore properties as if you were there in person.
                            Watch this quick guide to learn how to navigate, interact with hotspots, and get the most
                            out of your virtual tour experience.
                          </p>
                          <Button variant="outline">Watch Guide</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Experience Your Future Home?</h2>
            <p className="text-lg text-muted-foreground">
              Schedule a personalized consultation with our team to discuss your requirements and explore our properties
              in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">Browse All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
