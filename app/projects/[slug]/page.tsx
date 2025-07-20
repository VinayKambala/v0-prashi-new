"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Building, Users, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Project data - in a real app, this would come from an API or database
const projectData = {
  "sanvi-sankalpam": {
    id: 1,
    title: "Sanvi Sankalpam",
    subtitle: "Heavenly sight, right at your doorstep",
    location: "XQ9C+H9F, Nagondanahalli, Bengaluru, Karnataka 560067",
    type: "Residential Apartments",
    status: "Completed",
    completion: "Delivered",
    units: "Residential Units",
    description:
      "In the backdrop of night sleep over Nagondanahalli Village, Whitefield, stands Sanvi Sankalpam, the symbol of determination to exceed expectations. Housing 70 two & three BHK premium apartments in four floors, residing the advantage of beautiful life, what will the proposed purchaser truly need nearby. Located with amenities, Sanvi Sankalpam has the advantage of beautiful life.",
    images: {
      hero: "/sanvi-sankalpam.jpeg",
      specifications: "/sanvi-sankalpam-specification.jpeg",
      floorPlan: "/sanvi-sankalpam-floor.jpeg",
      typicalFloors: "/sanvi-sankalpam-view.jpeg",
    },
    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "Landscaped Gardens",
      "24/7 Security",
      "Power Backup",
      "Covered Parking",
      "Children's Play Area",
      "Community Hall",
    ],
    specifications: {
      structure:
        "RCC framed structure with Fe 500 grade TMT steel reinforced as per seismic resistance (Seismic Zone-II)",
      walls: '8" thick outer walls and 4.5" thick partition walls for internal walls',
      flooring: "Vitrified tiles in living, dining and bedrooms",
      kitchen: "Granite platform cooking platform fitted with S.S sink above platform and stainless steel",
      doors:
        "Main door - Solid Teak wood frame with skin shutters, Other doors - Seasoned frames with flush shutters, Toilet doors - Seasoned frames with flush shutters molded",
      windows: "Aluminum powder coated windows with safety grill and glass panels",
      electrical:
        "Concealed conduit wiring with adequate points, Provision for A/C points (3 nos) in master bedroom, living room and in all bedrooms, TV & Telephone points will be provided in living room and in master bedroom, Provision for aqua guard, exhaust fan & washing machine in kitchen, Provision for geyser points at all bathrooms",
      painting:
        "Interior - Asian or equivalent plastic emulsion for internal walls, external walls - Exterior - One coat primer and two coats APEX Weather Coat",
      backup:
        "Standby generator for common area lighting, lifts and 2 points in each room & power back-up for 5 to 6 hours at 0.5 KV during all individual flats",
      lifts: "6 Passengers capacity, 2 Nos automatic lifts of standard make",
      water: "Adequate water supply through bore well and provision for Cauvery water connection",
      toilets:
        "Ceramic glazed wall tiles upto 7' height, Ceramic glazed floor tiles, Granite or Equivalent necessary fittings & fixtures for the toilets, Provision for geyser, exhaust fan, Geyser & Exhaust fan not included",
      common: "Granite / Marble flooring for the staircase & common areas with M.S Railings",
    },
  },
  "sanvi-residency": {
    id: 2,
    title: "Sanvi Residency",
    subtitle: "Your dream dwelling awaits",
    location: "33,Horamavu Agara Road,Rajanna Layout,Bangalore, Karnataka, 560043",
    type: "Residential Apartments",
    status: "Completed",
    completion: "Delivered",
    units: "48 units with Commencement certificate and occupancy certificate.",
    description:
      "At Sanvi structures we realize the basic need of yours for a dwelling of your dream. A dwelling is not just brick, mortar and a roof over your head. It's about a space you will be co-habiting with your loved ones. It's an inspiration that drives you to get up in the morning fresh and take on the world and the challenges. It's also your retreat from the hustle bustle of the outside world, where you spend your leisure, rejuvenating your body, spirit and mind. And to give you the best when it comes to your living space we follow the age-old practices of transparency, commitment, quality practices, trust etc.",
    images: {
      hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanvi-residency.png-RWfRtQWkkbSrf3Kdwl1oMtNkUsMfXW.jpeg",
      specifications:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanvi-residency.png-RWfRtQWkkbSrf3Kdwl1oMtNkUsMfXW.jpeg",
      floorPlan:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanvi-residency-floor.png-ekdfRSnX0QA2DwDVQfe2S7lqBO1CrD.jpeg",
      typicalFloors:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanvi-residency-view.png-nJ2O0sEa1Ln3JYBVh5VfGnn1kNmpeX.jpeg",
    },
    amenities: [
      "G+3 Apartment Complex",
      "100% Vastu Compliant",
      "Uninterrupted Power Supply",
      "24/7 Water Supply",
      "Modern Architecture",
      "Spacious Bedrooms",
      "Bright Living Rooms",
      "Premium Finishes",
      "Covered Parking",
      "Landscaped Gardens",
      "Security Systems",
      "Community Spaces",
    ],
    specifications: {
      structure: "G+3 apartment complex with modern RCC framed structure",
      walls: "Premium quality construction with proper insulation",
      flooring: "High-quality vitrified tiles in all living areas",
      kitchen: "Modular kitchen with granite countertops and modern fittings",
      doors: "Premium quality doors with modern hardware",
      windows: "Large windows for natural light and ventilation",
      electrical: "Concealed wiring with adequate power points throughout",
      painting: "Premium quality paints for interior and exterior",
      backup: "Uninterrupted power supply with backup systems",
      lifts: "Modern elevator systems for easy access",
      water: "24/7 water supply with proper storage systems",
      toilets: "Modern bathroom fittings with premium tiles",
      common: "Well-designed common areas with quality finishes",
    },
  },
  "prashi-residency": {
    id: 3,
    title: "Prashi Residency",
    subtitle: "Your dream dwelling awaits",
    location: "Belathur, WhiteField, Bangalore, Karnataka",
    type: "Residential Apartments",
    status: "Ongoing",
    completion: "Ongoing",
    units: "2 & 3 BHK Apartments",
    description:
      "At Prashi structures we realize the basic need of yours for a dwelling of your dream. A dwelling is not just brick, mortar and a roof over your head. It's about a space you will be co-habiting with your loved ones. It's an inspiration that drives you to get up in the morning fresh and take on the world and the challenges. It's also your retreat from the hustle bustle of the outside world, where you spend your leisure, rejuvenating your body, spirit and mind. And to give you the best when it comes to your living space we follow the age-old practices of transparency, commitment, quality practices, trust etc.",
    images: {
      hero: "/prashi-residency.jpeg",
      specifications:
        "prashi-residency-specification.jpeg",
      floorPlan:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanvi-residency-floor.png-ekdfRSnX0QA2DwDVQfe2S7lqBO1CrD.jpeg",
      typicalFloors:
        "/prashi-residency.jpeg",
    },
    amenities: [
      "G+3 Apartment Complex",
      "100% Vastu Compliant",
      "Uninterrupted Power Supply",
      "24/7 Water Supply",
      "Modern Architecture",
      "Spacious Bedrooms",
      "Bright Living Rooms",
      "Premium Finishes",
      "Covered Parking",
      "Landscaped Gardens",
      "Security Systems",
      "Community Spaces",
    ],
    specifications: {
      structure: "G+3 apartment complex with modern RCC framed structure",
      walls: "Premium quality construction with proper insulation",
      flooring: "High-quality vitrified tiles in all living areas",
      kitchen: "Modular kitchen with granite countertops and modern fittings",
      doors: "Premium quality doors with modern hardware",
      windows: "Large windows for natural light and ventilation",
      electrical: "Concealed wiring with adequate power points throughout",
      painting: "Premium quality paints for interior and exterior",
      backup: "Uninterrupted power supply with backup systems",
      lifts: "Modern elevator systems for easy access",
      water: "24/7 water supply with proper storage systems",
      toilets: "Modern bathroom fittings with premium tiles",
      common: "Well-designed common areas with quality finishes",
    },
  },
}

export default function ProjectPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("overview")
  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-white mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-gold hover:text-gold-light transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Fixed Navigation Spacer - Prevents collision with fixed header */}
      <div className="h-20 md:h-24"></div>

      {/* Header - Removed Contact Us button to prevent collision */}
      <div className="bg-charcoal border-b border-gold/10">
        <div className="container-luxury py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">{project.title}</h1>
              <p className="text-gold text-lg mb-4">{project.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>{project.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{project.completion}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image - Adjusted height to prevent navigation collision */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={project.images.hero || "/placeholder.svg"}
          alt={`${project.title} - Hero Image`}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `/placeholder.svg?height=600&width=1200&text=${encodeURIComponent(project.title)}`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="container-luxury">
            <span className="inline-block px-3 py-1 bg-green-500/90 text-white text-sm uppercase tracking-wider font-medium rounded">
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container-luxury py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-gold/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gold data-[state=active]:text-obsidian">
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="data-[state=active]:bg-gold data-[state=active]:text-obsidian"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger value="floor-plans" className="data-[state=active]:bg-gold data-[state=active]:text-obsidian">
              Floor Plans
            </TabsTrigger>
            <TabsTrigger value="amenities" className="data-[state=active]:bg-gold data-[state=active]:text-obsidian">
              Amenities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif text-gold mb-6">About the Project</h2>
                <p className="text-black/80 leading-relaxed mb-8">{project.description}</p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-charcoal p-6 border border-gold/10">
                    <Building className="h-8 w-8 text-gold mb-3" />
                    <h3 className="text-white font-medium mb-2">Property Type</h3>
                    <p className="text-white/70">{project.type}</p>
                  </div>
                  <div className="bg-charcoal p-6 border border-gold/10">
                    <Users className="h-8 w-8 text-gold mb-3" />
                    <h3 className="text-white font-medium mb-2">Units</h3>
                    <p className="text-white/70">{project.units}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-6">Project Highlights</h2>
                <div className="space-y-4">
                  {project.id === 1 ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black/80">Premium 2 & 3 BHK apartments in a 4-floor residential complex</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black/80">Strategic location in Nagondanahalli Village, Whitefield</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black/80">Modern amenities and premium specifications</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black/80">Completed and ready for possession</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black/80">Flagship project in Hosanara with G+3 apartment complex</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black/80">100% Vastu compliant design for positive living</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black/80">Uninterrupted power and water supply for worry-free living</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black/80">Modern architecture with spacious and bright interiors</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-serif text-gold mb-6">Technical Specifications</h2>
                <div className="space-y-6">
                  <div className="bg-charcoal p-6 border border-gold/10">
                    <h3 className="text-gold font-medium mb-3">Structure</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{project.specifications.structure}</p>
                  </div>
                  <div className="bg-charcoal p-6 border border-gold/10">
                    <h3 className="text-gold font-medium mb-3">Walls</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{project.specifications.walls}</p>
                  </div>
                  <div className="bg-charcoal p-6 border border-gold/10">
                    <h3 className="text-gold font-medium mb-3">Flooring</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{project.specifications.flooring}</p>
                  </div>
                  <div className="bg-charcoal p-6 border border-gold/10">
                    <h3 className="text-gold font-medium mb-3">Kitchen</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{project.specifications.kitchen}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative aspect-[4/3] mb-8">
                  <Image
                    src={project.images.specifications || "/placeholder.svg"}
                    alt={`${project.title} - Specifications`}
                    fill
                    className="object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=400&width=600&text=Specifications`
                    }}
                  />
                </div>

                <div className="space-y-6">
                  <div className="bg-charcoal p-6 border border-gold/10">
                    <h3 className="text-gold font-medium mb-3">Electrical</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{project.specifications.electrical}</p>
                  </div>
                  <div className="bg-charcoal p-6 border border-gold/10">
                    <h3 className="text-gold font-medium mb-3">Backup Power</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{project.specifications.backup}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="floor-plans" className="mt-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-serif text-gold mb-6">Floor Plans & Layout</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl text-gold mb-4">
                      {project.id === 1 ? "Car Parking Plan" : "Apartment Floor Plans"}
                    </h3>
                    <div className="relative aspect-[4/3] bg-charcoal rounded-lg overflow-hidden">
                      <Image
                        src={project.images.floorPlan || "/placeholder.svg"}
                        alt={`${project.title} - Floor Plans`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=400&width=600&text=Floor+Plans`
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl text-gold mb-4">
                      {project.id === 1 ? "Typical Floor Plans" : "Building View & Location"}
                    </h3>
                    <div className="relative aspect-[4/3] bg-charcoal rounded-lg overflow-hidden">
                      <Image
                        src={project.images.typicalFloors || "/placeholder.svg"}
                        alt={`${project.title} - Building View`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=400&width=600&text=Building+View`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal p-8 border border-gold/10 rounded-lg">
                <h3 className="text-xl text-gold mb-4">Floor Plan Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">
                      {project.id === 1 ? "Ground, First, Second & Third Floor" : "Apartment Features"}
                    </h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      {project.id === 1 ? (
                        <>
                          <li>• Premium 2 & 3 BHK apartments</li>
                          <li>• Optimized space utilization</li>
                          <li>• Cross ventilation in all units</li>
                          <li>• Private balconies for each apartment</li>
                        </>
                      ) : (
                        <>
                          <li>• Spacious 2 & 3 BHK apartments</li>
                          <li>• Bright living rooms with ample natural light</li>
                          <li>• Well-ventilated bedrooms</li>
                          <li>• Modern kitchen layouts</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">
                      {project.id === 1 ? "Common Areas" : "Building Amenities"}
                    </h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      {project.id === 1 ? (
                        <>
                          <li>• Landscaped gardens and open spaces</li>
                          <li>• Swimming pool and recreational areas</li>
                          <li>• Covered car parking</li>
                          <li>• Children's play area</li>
                        </>
                      ) : (
                        <>
                          <li>• G+3 structure with modern design</li>
                          <li>• Covered parking facilities</li>
                          <li>• Landscaped common areas</li>
                          <li>• 24/7 security and maintenance</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="mt-8">
            <div>
              <h2 className="text-2xl font-serif text-white mb-6">Premium Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-charcoal p-6 border border-gold/10 rounded-lg hover:border-gold/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-white font-medium">{amenity}</h3>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-charcoal p-8 border border-gold/10 rounded-lg">
                <h3 className="text-xl text-gold mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-medium mb-4">Get in Touch</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gold" />
                        <span className="text-white/80">+91 89711 99588</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gold" />
                        <span className="text-white/80">info@prashigroup.com</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-gold mt-1" />
                        <span className="text-white/80">{project.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-4">Schedule a Visit</h4>
                    <p className="text-white/80 mb-4">
                      Experience the luxury and comfort of {project.title} firsthand. Schedule a site visit today.
                    </p>
                    <Link href="/contact">
                    <Button className="bg-gold text-obsidian hover:bg-gold/90">Schedule Visit</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
