"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Building, Search } from "lucide-react"

const projectCategories = [
  { id: "ongoing", label: "Ongoing", count: 0 },
  { id: "completed", label: "Completed", count: 1 },
  { id: "upcoming", label: "Upcoming", count: 0 },
]

const projects = {
  ongoing: [], // Empty array for ongoing projects
  completed: [
    {
      id: 1,
      title: "Sanvi Sankalpam",
      location: "XQ9C+H9F, Nagondanahalli, Bengaluru, Karnataka 560067",
      type: "Residential Apartments",
      image: "/sanvi-sankalpam.jpeg",
      status: "Completed",
      completion: "Delivered",
      units: "Residential Units",
      description:
        "A heavenly sight right at your doorstep. Modern residential apartments with contemporary design and premium amenities.",
    },
  ],
  upcoming: [], // Empty array for upcoming projects
}

export default function PremiumPropertyShowcase() {
  const [activeCategory, setActiveCategory] = useState("ongoing")

  const currentProjects = projects[activeCategory as keyof typeof projects]

  return (
    <section className="section-padding-lg bg-obsidian relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/subtle-pattern.png')] opacity-5"></div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-responsive-xs font-light mb-4 block">
            Our Portfolio
          </span>
          <h2 className="font-serif text-responsive-4xl font-light text-white mb-6 leading-tight">
            Exceptional <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="gold-divider-center"></div>
          <p className="text-white/70 max-w-2xl mx-auto mt-6 text-responsive-base leading-relaxed">
            Discover our carefully curated collection of luxury developments across Bengaluru's most prestigious
            locations.
          </p>
        </motion.div>

        {/* Category Filters - Enhanced Responsiveness and Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Mobile: Stacked Layout */}
          <div className="flex flex-col sm:hidden gap-3">
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative px-6 py-4 w-full border transition-all duration-300 
                  uppercase tracking-wider text-sm font-medium
                  ${
                    activeCategory === category.id
                      ? "bg-gold text-obsidian border-gold shadow-gold-md"
                      : "bg-transparent text-white border-gold/30 hover:border-gold/60 hover:bg-gold/5"
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-between">
                  <span>{category.label}</span>
                  <span
                    className={`
                    text-xs px-2 py-1 rounded-full
                    ${activeCategory === category.id ? "bg-obsidian/20 text-obsidian" : "bg-gold/20 text-gold"}
                  `}
                  >
                    {category.count}
                  </span>
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute inset-0 bg-gold"
                    style={{ borderRadius: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tablet and Desktop: Horizontal Layout */}
          <div className="hidden sm:flex items-center justify-center gap-4">
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative px-8 py-4 min-w-[160px] border transition-all duration-300 
                  uppercase tracking-wider text-sm font-medium
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
                  <span>{category.label}</span>
                  <span
                    className={`
                    text-xs px-2 py-1 rounded-full
                    ${activeCategory === category.id ? "bg-obsidian/20 text-obsidian" : "bg-gold/20 text-gold"}
                  `}
                  >
                    {category.count}
                  </span>
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTabDesktop"
                    className="absolute inset-0 bg-gold"
                    style={{ borderRadius: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid or No Results */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentProjects.length > 0 ? (
              <div className="grid-responsive">
                {currentProjects.map((project, index) => (
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
                        alt={`${project.title} - ${project.description}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`
                          px-3 py-1 text-xs uppercase tracking-wider font-medium
                          ${
                            activeCategory === "ongoing"
                              ? "bg-blue-500/90 text-white"
                              : activeCategory === "completed"
                                ? "bg-green-500/90 text-white"
                                : "bg-orange-500/90 text-white"
                          }
                        `}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Details - Removed Price */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-white text-responsive-xl font-serif mb-2 leading-tight">{project.title}</h3>
                        <div className="flex items-center gap-2 text-white/60 text-responsive-sm mb-2">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>
                        <span className="text-gold text-responsive-sm">{project.type}</span>
                      </div>

                      <p className="text-white/70 text-responsive-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Project Info Grid - Removed Bedroom Details */}
                      <div className="grid grid-cols-1 gap-3 text-responsive-sm">
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
                        <span className="uppercase tracking-wider text-responsive-xs">View Details</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // No Results Found for Ongoing Projects
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
                      <h3 className="text-white text-responsive-2xl font-serif mb-4">No Upcoming Projects</h3>
                      <p className="text-white/60 text-responsive-base mb-8 leading-relaxed">
                        We currently don't have any upcoming projects announced. Please check our completed projects or
                        stay tuned for future developments.
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
                      <h3 className="text-white text-responsive-2xl font-serif mb-4">No Ongoing Projects</h3>
                      <p className="text-white/60 text-responsive-base mb-8 leading-relaxed">
                        We currently don't have any ongoing projects. Please check our completed projects or explore our
                        upcoming developments.
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
                        <motion.button
                          onClick={() => setActiveCategory("upcoming")}
                          className="px-6 py-3 border border-gold/30 text-gold hover:bg-gold/5 transition-all duration-300 uppercase tracking-wider text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Explore Upcoming Projects
                        </motion.button>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        {currentProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/projects" className="inline-flex items-center gap-3 btn-primary hover-scale">
              Explore All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
