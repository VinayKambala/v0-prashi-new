"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Building, Search } from "lucide-react"

const projectCategories = [
  { id: "all", label: "All Projects", count: 2 },
  { id: "ongoing", label: "Ongoing", count: 0 },
  { id: "completed", label: "Completed", count: 2 },
  { id: "upcoming", label: "Upcoming", count: 0 },
]

const allProjects = [
  // Completed Projects
  {
    id: 1,
    title: "Sanvi Sankalpam",
    location: "XQ9C+H9F, Nagondanahalli, Bengaluru, Karnataka 560067",
    type: "Residential Apartments",
    category: "completed",
    image: "/sanvi-sankalpam.jpeg",
    status: "Completed",
    completion: "Delivered",
    units: "Residential Units",
    description:
      "A heavenly sight right at your doorstep. Modern residential apartments with contemporary design and premium amenities in Nagondanahalli.",
  },
  {
    id: 2,
    title: "Sanvi Residency",
    location: "Hosanara, New Bangalore, Karnataka",
    type: "Residential Apartments",
    category: "completed",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanvi-residency.png-RWfRtQWkkbSrf3Kdwl1oMtNkUsMfXW.jpeg",
    status: "Completed",
    completion: "Delivered",
    units: "2 & 3 BHK Apartments",
    description:
      "Our flagship project in Hosanara, featuring exclusive G+3 apartments with modern amenities. 100% Vastu compliant design with uninterrupted power and water supply for worry-free living.",
  },
]

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Handle URL parameters for filtering
  useEffect(() => {
    const filterParam = searchParams.get("filter")
    if (filterParam && projectCategories.some((cat) => cat.id === filterParam)) {
      setActiveCategory(filterParam)
    }
  }, [searchParams])

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.type.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero Section */}
      <section className="relative section-padding-lg bg-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/architectural-blueprints.jpg" alt="Projects Hero" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal"></div>
        </div>

        <div className="container-luxury relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold uppercase tracking-[0.2em] text-xs lg:text-sm font-light mb-4 block">
              Our Portfolio
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 leading-tight">
              Exceptional <span className="text-gradient-gold">Projects</span>
            </h1>
            <div className="gold-divider-center"></div>
            <p className="text-white/70 max-w-2xl mx-auto mt-6 text-base lg:text-lg leading-relaxed">
              Explore our comprehensive portfolio of luxury developments across Bengaluru's most prestigious locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section-padding bg-obsidian border-b border-gold/10">
        <div className="container-luxury">
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full xl:w-96 order-2 xl:order-1"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-charcoal border border-gold/20 text-white pl-12 pr-4 py-3 placeholder:text-white/40 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 text-sm lg:text-base"
              />
            </motion.div>

            {/* Category Filters - Enhanced Mobile Layout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full xl:w-auto order-1 xl:order-2"
            >
              {/* Mobile: Grid Layout */}
              <div className="grid grid-cols-2 sm:hidden gap-3">
                {projectCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      relative px-4 py-3 w-full border transition-all duration-300 
                      uppercase tracking-wider text-xs font-medium
                      ${
                        activeCategory === category.id
                          ? "bg-gold text-obsidian border-gold shadow-gold-md"
                          : "bg-transparent text-white border-gold/30 hover:border-gold/60 hover:bg-gold/5"
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex flex-col items-center gap-1">
                      <span className="truncate">{category.label}</span>
                      <span
                        className={`
                        text-xs px-1.5 py-0.5 rounded-full
                        ${activeCategory === category.id ? "bg-obsidian/20 text-obsidian" : "bg-gold/20 text-gold"}
                      `}
                      >
                        {category.count}
                      </span>
                    </span>
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="activeProjectTabMobile"
                        className="absolute inset-0 bg-gold"
                        style={{ borderRadius: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Tablet and Desktop: Horizontal Layout */}
              <div className="hidden sm:flex flex-wrap lg:flex-nowrap items-center justify-center xl:justify-end gap-3">
                {projectCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      relative px-4 py-3 lg:px-6 lg:py-3 min-w-[120px] lg:min-w-[140px] 
                      border transition-all duration-300 uppercase tracking-wider text-xs lg:text-sm font-medium
                      ${
                        activeCategory === category.id
                          ? "bg-gold text-obsidian border-gold shadow-gold-md"
                          : "bg-transparent text-white border-gold/30 hover:border-gold/60 hover:bg-gold/5"
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="truncate">{category.label}</span>
                      <span
                        className={`
                        text-xs px-1.5 py-0.5 rounded-full
                        ${activeCategory === category.id ? "bg-obsidian/20 text-obsidian" : "bg-gold/20 text-gold"}
                      `}
                      >
                        {category.count}
                      </span>
                    </span>
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="activeProjectTabDesktop"
                        className="absolute inset-0 bg-gold"
                        style={{ borderRadius: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding-lg bg-obsidian">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative luxury-card overflow-hidden hover:border-gold/30 transition-all duration-500 hover-lift"
                    >
                      {/* Project Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`
                            px-3 py-1 text-xs uppercase tracking-wider font-medium
                            ${
                              project.category === "ongoing"
                                ? "bg-blue-500/90 text-white"
                                : project.category === "completed"
                                  ? "bg-green-500/90 text-white"
                                  : "bg-orange-500/90 text-white"
                            }
                          `}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="text-white text-lg lg:text-xl font-serif mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{project.location}</span>
                          </div>
                          <span className="text-gold text-sm">{project.type}</span>
                        </div>

                        <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                        {/* Project Info Grid */}
                        <div className="grid grid-cols-1 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-white/60">
                            <Building className="h-4 w-4 text-gold flex-shrink-0" />
                            <span className="truncate">{project.units}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/60">
                            <Calendar className="h-4 w-4 text-gold flex-shrink-0" />
                            <span>{project.completion}</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                          href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="group/btn flex items-center justify-between w-full p-4 border border-gold/30 text-gold hover:bg-gold/5 transition-all duration-300 mt-6"
                        >
                          <span className="uppercase tracking-wider text-xs">View Details</span>
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-20"
                >
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                      <Search className="h-12 w-12 text-gold/60" />
                    </div>
                    {activeCategory === "upcoming" ? (
                      <>
                        <h3 className="text-white text-xl lg:text-2xl font-serif mb-4">No Upcoming Projects</h3>
                        <p className="text-white/60 text-base mb-8 leading-relaxed">
                          We currently don't have any upcoming projects announced. Please check our completed projects
                          or stay tuned for future developments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <motion.button
                            onClick={() => setActiveCategory("completed")}
                            className="px-6 py-3 bg-gold text-obsidian uppercase tracking-wider text-sm font-medium hover:bg-gold/90 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Completed Projects
                          </motion.button>
                        </div>
                      </>
                    ) : activeCategory === "ongoing" ? (
                      <>
                        <h3 className="text-white text-xl lg:text-2xl font-serif mb-4">No Ongoing Projects</h3>
                        <p className="text-white/60 text-base mb-8 leading-relaxed">
                          We currently don't have any ongoing projects. Please check our completed projects or stay
                          tuned for future developments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <motion.button
                            onClick={() => setActiveCategory("completed")}
                            className="px-6 py-3 bg-gold text-obsidian uppercase tracking-wider text-sm font-medium hover:bg-gold/90 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Completed Projects
                          </motion.button>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-serif mb-2">No Projects Found</h3>
                        <p className="text-sm">Try adjusting your search criteria or browse all projects.</p>
                        <button
                          onClick={() => {
                            setActiveCategory("all")
                            setSearchTerm("")
                          }}
                          className="btn-ghost mt-6"
                        >
                          View All Projects
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
