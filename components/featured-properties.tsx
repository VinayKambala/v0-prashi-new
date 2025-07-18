"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react"

export default function FeaturedProperties() {
  const projects = [
    {
      id: 1,
      title: "Sanvi Sankalpam",
      location: "Nagondanahalli, Bengaluru",
      type: "Residential Apartments",
      status: "Completed",
      image: "/sanvi-sankalpam.jpeg",
      price: "₹45 Lakhs onwards",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      description: "Modern residential apartments with contemporary design and premium amenities.",
      features: ["Vastu Compliant", "Premium Finishes", "24/7 Security", "Power Backup"],
    },
    {
      id: 2,
      title: "Luxury Villa Estate",
      location: "Whitefield, Bengaluru",
      type: "Premium Villas",
      status: "Ongoing",
      image: "/luxury-villa-modern.png", // Updated image source
      price: "₹1.2 Cr onwards",
      bedrooms: 4,
      bathrooms: 4,
      area: 2800,
      description: "Luxury villas with private gardens and premium amenities in prime location.",
      features: ["Private Garden", "Premium Location", "Luxury Finishes", "Gated Community"],
    },
    {
      id: 3,
      title: "Modern Apartment Complex",
      location: "Electronic City, Bengaluru",
      type: "Premium Apartments",
      status: "Ready to Move",
      image: "/modern-apartment-complex-exterior.png", // Updated image source
      price: "₹85 Lakhs onwards",
      bedrooms: 3,
      bathrooms: 2,
      area: 1650,
      description: "Contemporary apartments with modern amenities and excellent connectivity.",
      features: ["Modern Design", "Prime Location", "Quality Construction", "Great Connectivity"],
    },
  ]

  return (
    <section className="section-padding-lg bg-warm-white">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Our Projects</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray mb-6 leading-tight">
            Featured <span className="text-gradient-gold">Properties</span>
          </h2>
          <div className="gold-divider-center"></div>
          <p className="text-dark-gray/80 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            Discover our portfolio of exceptional residential and commercial projects, each designed with meticulous
            attention to detail and built to the highest standards.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="construction-card hover-lift overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        project.status === "Completed" ? "bg-accent-green text-warm-white" : "bg-gold text-warm-white"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-dark-gray mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-dark-gray/70 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <span className="text-gold text-sm font-medium">{project.type}</span>
                    </div>

                    <p className="text-dark-gray/80 text-sm leading-relaxed">{project.description}</p>

                    {/* Property Details */}
                    <div className="flex items-center justify-between text-sm text-dark-gray/70 border-t border-gold/20 pt-4">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{project.bedrooms} Bed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{project.bathrooms} Bath</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        <span>{project.area} sq.ft</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                          <span className="text-xs text-dark-gray/70">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                      <div className="text-lg font-bold text-gold">{project.price}</div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gold text-gold hover:bg-gold hover:text-warm-white bg-transparent"
                        asChild
                      >
                        <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            className="bg-gold hover:bg-gold-dark text-warm-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
