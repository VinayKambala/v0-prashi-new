"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react"

interface Property {
  id: string
  title: string
  location: string
  price: string
  description: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  status: "Ongoing" | "Completed" | "Upcoming"
}

const properties: Property[] = [
  {
    id: "prashi-heights",
    title: "Prashi Heights",
    location: "Whitefield, Bengaluru",
    price: "₹1.2 Cr onwards",
    description:
      "Premium 3 BHK apartments with modern amenities in the heart of Whitefield. Enjoy spacious living areas and stunning views.",
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    image: "/modern-apartment-building.png",
    status: "Ongoing",
  },
  {
    id: "prashi-meadows",
    title: "Prashi Meadows",
    location: "Electronic City, Bengaluru",
    price: "₹2.5 Cr onwards",
    description:
      "Luxurious 4 BHK villas with private gardens and premium finishes. Experience sophisticated living in a serene environment.",
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    image: "/luxury-villa-garden.png",
    status: "Ongoing",
  },
  {
    id: "prashi-terraces",
    title: "Prashi Terraces",
    location: "Hebbal, Bengaluru",
    price: "₹1.8 Cr onwards",
    description:
      "Elegant apartments with spacious terraces and panoramic views. Perfect for those who appreciate outdoor living.",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    image: "/luxury-apartment-terrace.png",
    status: "Completed",
  },
]

export default function LuxuryFeaturedProperties() {
  const [activeProperty, setActiveProperty] = useState<Property>(properties[0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="featured-properties"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-navy-dark to-navy-darker relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal/5 rounded-full filter blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-light">Exceptional Properties</span>
          <h2 className="heading-lg text-white mt-4 mb-6">
            Featured <span className="text-gradient-gold">Residences</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="text-white/70 max-w-2xl mx-auto mt-6 body-md">
            Discover our collection of premium properties designed to provide exceptional living experiences for the
            most discerning residents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Featured Property Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={activeProperty.image || "/placeholder.svg"}
                alt={activeProperty.title}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-darker via-navy-darker/50 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-gold/90 text-navy-darker px-3 py-1 text-sm font-medium">
                {activeProperty.status}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 border border-gold/20 w-full h-full -z-10"></div>

            <div className="bg-navy-darker/90 backdrop-blur-md p-8 max-w-xl mx-auto lg:mx-0 lg:max-w-none -mt-24 relative z-10 border-t border-l border-gold/10">
              <h3 className="text-2xl font-serif font-light text-white mb-2">{activeProperty.title}</h3>
              <div className="flex items-center gap-1 mb-4 text-white/70">
                <MapPin className="h-4 w-4 text-gold" />
                <span>{activeProperty.location}</span>
              </div>
              <p className="text-white/70 mb-6">{activeProperty.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-3 bg-navy-dark/50 border border-gold/5">
                  <div className="flex items-center gap-1 text-gold mb-1">
                    <Bed className="h-4 w-4" />
                    <span className="text-lg font-light">{activeProperty.bedrooms}</span>
                  </div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-navy-dark/50 border border-gold/5">
                  <div className="flex items-center gap-1 text-gold mb-1">
                    <Bath className="h-4 w-4" />
                    <span className="text-lg font-light">{activeProperty.bathrooms}</span>
                  </div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-navy-dark/50 border border-gold/5">
                  <div className="flex items-center gap-1 text-gold mb-1">
                    <Square className="h-4 w-4" />
                    <span className="text-lg font-light">{activeProperty.area}</span>
                  </div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">Sq.ft</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-2xl font-light text-gold">{activeProperty.price}</div>
                <Link
                  href={`/projects/${activeProperty.id}`}
                  className="flex items-center gap-2 text-white hover:text-gold transition-colors group"
                >
                  <span className="uppercase text-sm tracking-wider">View Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Property Selection */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-6"
          >
            <motion.h3
              variants={item}
              className="text-2xl font-serif font-light text-white mb-6 lg:pl-6 lg:border-l-2 lg:border-gold/30"
            >
              Discover Our <span className="text-gold">Signature Properties</span>
            </motion.h3>

            {properties.map((property) => (
              <motion.div
                key={property.id}
                variants={item}
                className={`p-6 border transition-all duration-300 cursor-pointer hover:shadow-gold-sm ${
                  activeProperty.id === property.id
                    ? "bg-navy-dark border-gold/30"
                    : "bg-transparent border-white/5 hover:border-white/20"
                }`}
                onClick={() => setActiveProperty(property)}
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-sm overflow-hidden shrink-0">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-white mb-1">{property.title}</h4>
                    <div className="flex items-center gap-1 text-white/70 text-sm mb-2">
                      <MapPin className="h-3 w-3 text-gold" />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-white/70">
                        <Bed className="h-3 w-3 text-gold" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/70">
                        <Bath className="h-3 w-3 text-gold" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/70">
                        <Square className="h-3 w-3 text-gold" />
                        <span>{property.area} sq.ft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div variants={item} className="mt-8 text-center lg:text-left">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                View All Properties
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
