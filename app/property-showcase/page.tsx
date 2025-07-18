"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bed, Bath, Square, MapPin } from "lucide-react"

// Project data
const projects = [
  {
    id: "prashi-heights",
    name: "Prashi Heights",
    location: "Whitefield, Bengaluru",
    type: "Apartment",
    status: "Ongoing",
    description: "Premium 3 BHK apartments with modern amenities in the heart of Whitefield.",
    image: "/project-1.jpg",
    floorPlans: [
      {
        id: "3bhk-standard",
        name: "3 BHK Standard",
        area: 1750,
        bedrooms: 3,
        bathrooms: 3,
        price: "₹1.1 Cr onwards",
      },
      {
        id: "3bhk-premium",
        name: "3 BHK Premium",
        area: 1850,
        bedrooms: 3,
        bathrooms: 3,
        price: "₹1.2 Cr onwards",
      },
      {
        id: "3bhk-luxury",
        name: "3 BHK Luxury",
        area: 2100,
        bedrooms: 3,
        bathrooms: 3,
        price: "₹1.4 Cr onwards",
      },
    ],
  },
  {
    id: "prashi-meadows",
    name: "Prashi Meadows",
    location: "Electronic City, Bengaluru",
    type: "Villa",
    status: "Ongoing",
    description: "Luxurious 4 BHK villas with private gardens and premium finishes.",
    image: "/project-2.jpg",
    floorPlans: [
      {
        id: "4bhk-standard",
        name: "4 BHK Standard",
        area: 3000,
        bedrooms: 4,
        bathrooms: 4,
        price: "₹2.3 Cr onwards",
      },
      {
        id: "4bhk-premium",
        name: "4 BHK Premium",
        area: 3200,
        bedrooms: 4,
        bathrooms: 4,
        price: "₹2.5 Cr onwards",
      },
      {
        id: "4bhk-luxury",
        name: "4 BHK Luxury",
        area: 3500,
        bedrooms: 4,
        bathrooms: 4,
        price: "₹2.8 Cr onwards",
      },
    ],
  },
  {
    id: "prashi-horizon",
    name: "Prashi Horizon",
    location: "Marathahalli, Bengaluru",
    type: "Apartment",
    status: "Upcoming",
    description: "Modern 2 & 3 BHK apartments with excellent connectivity and amenities.",
    image: "/modern-apartment-complex.png",
    floorPlans: [
      {
        id: "2bhk-standard",
        name: "2 BHK Standard",
        area: 1150,
        bedrooms: 2,
        bathrooms: 2,
        price: "₹85 Lakhs onwards",
      },
      {
        id: "2bhk-premium",
        name: "2 BHK Premium",
        area: 1250,
        bedrooms: 2,
        bathrooms: 2,
        price: "₹95 Lakhs onwards",
      },
      {
        id: "3bhk-standard",
        name: "3 BHK Standard",
        area: 1550,
        bedrooms: 3,
        bathrooms: 3,
        price: "₹1.05 Cr onwards",
      },
    ],
  },
]

export default function PropertyShowcasePage() {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/floor-plan-background.jpg" alt="Floor Plans" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Explore Our <span className="gold-text font-semibold">Floor Plans</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Discover the perfect layout for your lifestyle with our interactive floor plan explorer.
            </p>
          </div>
        </div>
      </section>

      {/* Project Selection */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-primary mb-4">
              Select a <span className="text-secondary font-semibold">Project</span>
            </h2>
            <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto">
              Choose a project to explore its floor plans and discover your future home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card
                  className={`overflow-hidden border-none shadow-lg cursor-pointer h-full transition-all duration-300 hover:shadow-xl ${
                    selectedProject.id === project.id ? "ring-2 ring-secondary" : ""
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-primary">{project.status}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <div className="flex items-center gap-1 mb-3 text-primary/70">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-primary/70 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-primary/5">
                        {project.type}
                      </Badge>
                      <div className="text-primary/70 group-hover:text-secondary transition-colors">
                        {project.floorPlans.length} Floor Plans
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Explorer */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-primary mb-4">
              {selectedProject.name} <span className="text-secondary font-semibold">Floor Plans</span>
            </h2>
            <div className="w-24 h-0.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto">
              Explore the different floor plan options available for {selectedProject.name}.
            </p>
          </div>

          <Tabs defaultValue={selectedProject.floorPlans[0].id} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12">
              {selectedProject.floorPlans.map((plan) => (
                <TabsTrigger
                  key={plan.id}
                  value={plan.id}
                  className="data-[state=active]:bg-secondary data-[state=active]:text-primary"
                >
                  {plan.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {selectedProject.floorPlans.map((plan) => (
              <TabsContent key={plan.id} value={plan.id} className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <div className="relative bg-gray-50 p-4 h-[600px] overflow-hidden">
                        <Image
                          src={`/floor-plan-${plan.bedrooms}bhk.png`}
                          alt={plan.name}
                          width={800}
                          height={600}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="p-6 border-l border-gray-200">
                      <div className="mb-6">
                        <Badge className="bg-secondary text-primary mb-2">{selectedProject.name}</Badge>
                        <h3 className="text-2xl font-semibold text-primary mb-2">{plan.name}</h3>
                        <p className="text-primary/70 mb-4">
                          Explore our {plan.name} floor plan with interactive features.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-primary/70">Area</div>
                          <div className="text-lg font-semibold text-primary flex items-center gap-1">
                            <Square className="h-4 w-4 text-secondary" />
                            {plan.area} sq.ft
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-primary/70">Price</div>
                          <div className="text-lg font-semibold text-secondary">{plan.price}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-primary/70">Bedrooms</div>
                          <div className="text-lg font-semibold text-primary flex items-center gap-1">
                            <Bed className="h-4 w-4 text-secondary" />
                            {plan.bedrooms}
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-primary/70">Bathrooms</div>
                          <div className="text-lg font-semibold text-primary flex items-center gap-1">
                            <Bath className="h-4 w-4 text-secondary" />
                            {plan.bathrooms}
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
                        <ul className="text-sm text-primary/70 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-xs text-secondary">✓</span>
                            </div>
                            <span>Spacious living and dining area</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-xs text-secondary">✓</span>
                            </div>
                            <span>Modern kitchen with premium appliances</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-xs text-secondary">✓</span>
                            </div>
                            <span>Master bedroom with walk-in closet</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-xs text-secondary">✓</span>
                            </div>
                            <span>Private balcony with panoramic views</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-xs text-secondary">✓</span>
                            </div>
                            <span>Premium finishes and fixtures</span>
                          </li>
                        </ul>
                      </div>

                      <Button className="w-full bg-secondary text-primary hover:bg-secondary/90" asChild>
                        <Link href={`/projects/${selectedProject.id}`}>View Project Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Download Floor Plans */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Download <span className="gold-text font-semibold">Floor Plans</span>
            </h2>
            <p className="text-lg text-white/80">
              Get detailed floor plans for all our projects. Download, print, and explore at your convenience.
            </p>
            <Button className="bg-secondary text-primary hover:bg-secondary/90 mt-4">Download All Floor Plans</Button>
          </div>
        </div>
      </section>

      {/* Schedule a Visit */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-light text-primary mb-4">
              Schedule a <span className="text-secondary font-semibold">Site Visit</span>
            </h2>
            <p className="text-lg text-primary/80">
              Experience our properties in person. Schedule a site visit with our team today.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90 mt-4" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
