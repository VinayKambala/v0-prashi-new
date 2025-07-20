"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Building, Search, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const projectCategories = [
  { id: "all", label: "All Projects", count: 3 },
  { id: "ongoing", label: "Ongoing", count: 1 },
  { id: "completed", label: "Completed", count: 2 },
  { id: "upcoming", label: "Upcoming", count: 0 },
]

const allProjects = [
  // Completed Projects
  {
    id: 1,
    title: "Sanvi Sankalpam",
    slug: "sanvi-sankalpam",
    location: "XQ9C+H9F, Nagondanahalli, Bengaluru, Karnataka 560067",
    type: "Residential Apartments",
    category: "completed",
    image: "/sanvi-sankalpam.jpeg",
    status: "Completed",
    completion: "Delivered",
    units: "Residential Units",
    description:
      "A heavenly sight right at your doorstep. Modern residential apartments with contemporary design and premium amenities in Nagondanahalli.",
    price: "₹45 L - ₹85 L",
    area: "1200-2100 sq ft",
    possession: "Ready to Move",
  },
  {
    id: 2,
    title: "Sanvi Residency",
    slug: "sanvi-residency",
    location: "33,Horamavu Agara Road,Rajanna Layout,Bangalore, Karnataka, 560043",
    type: "Residential Apartments",
    category: "completed",
    image: "/sanvi-residency.jpeg",
    status: "Completed",
    completion: "Delivered",
    units: "48 units with Commencement certificate and occupancy certificate.",
    description:
      "Our flagship project in Hosanara, featuring exclusive G+3 apartments with modern amenities. 100% Vastu compliant design with uninterrupted power and water supply for worry-free living.",
    price: "₹38 L - ₹72 L",
    area: "1100-1900 sq ft",
    possession: "Ready to Move",
  },
  {
    id: 3,
    title: "Prashi Residency",
    slug: "prashi-residency",
    location: "Belathur, WhiteField",
    type: "Residential Apartments",
    category: "ongoing",
    image: "/prashi-residency.jpeg?height=400&width=600&text=Prashi+Residency",
    status: "Ongoing",
    completion: "Under Construction",
    units: "2 & 3 BHK Apartments",
    description:
      "Our flagship project in WhiteField, featuring exclusive G+3 apartments with modern amenities. 100% Vastu compliant design with uninterrupted power and water supply for worry-free living.",
    price: "₹55 L - ₹95 L",
    area: "1300-2200 sq ft",
    possession: "Dec 2025",
  },
]

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")

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

  const getStatusColor = (category: string) => {
    switch (category) {
      case "completed":
        return "bg-gradient-to-r from-green-500 to-emerald-600"
      case "ongoing":
        return "bg-gradient-to-r from-blue-500 to-cyan-600"
      case "upcoming":
        return "bg-gradient-to-r from-orange-500 to-amber-600"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Architectural+Background')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-indigo-900/90"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6"
            >
              Our Portfolio
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Exceptional{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6 rounded-full"></div>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of luxury developments across Bengaluru's most prestigious locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white shadow-lg border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full lg:w-96"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-gray-900 placeholder:text-gray-500"
              />
            </motion.div>

            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {/* Category Filters */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {projectCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative px-4 py-2 rounded-full border transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg"
                        : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      {category.label}
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          activeCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category.count}
                      </Badge>
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.length > 0 ? (
                <div
                  className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" : "space-y-6"}
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {viewMode === "grid" ? (
                        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                          {/* Project Image */}
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Status Badge */}
                            <div className="absolute top-4 left-4">
                              <Badge className={`${getStatusColor(project.category)} text-white border-0 shadow-lg`}>
                                {project.status}
                              </Badge>
                            </div>

                            {/* Overlay Info */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="text-white">
                                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                <div className="flex items-center gap-1 text-white/80 text-sm">
                                  <MapPin className="h-4 w-4 flex-shrink-0" />
                                  <span className="truncate">{project.location.split(",")[0]}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <CardContent className="p-6 space-y-4">
                            <div>
                              <Badge variant="outline" className="text-blue-600 border-blue-200 mb-3">
                                {project.type}
                              </Badge>
                              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                {project.description}
                              </p>
                            </div>

                            {/* Project Stats */}
                            <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                              <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">
                                <Building className="h-4 w-4 text-green-600" />
                                <span className="truncate">{project.area}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar className="h-4 w-4 text-green-500" />
                                <span>{project.possession}</span>
                              </div>
                            </div>

                            {/* CTA Button */}
                            <Link href={`/projects/${project.slug}`} className="block">
                              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg group/btn">
                                <span>View Details</span>
                                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ) : (
                        // List View
                        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md">
                          <div className="flex flex-col md:flex-row">
                            <div className="relative md:w-80 aspect-[4/3] md:aspect-auto overflow-hidden">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-4 left-4">
                                <Badge className={`${getStatusColor(project.category)} text-white border-0`}>
                                  {project.status}
                                </Badge>
                              </div>
                            </div>

                            <CardContent className="flex-1 p-6">
                              <div className="flex flex-col h-full justify-between">
                                <div>
                                  <div className="flex items-start justify-between mb-3">
                                    <div>
                                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">{project.location}</span>
                                      </div>
                                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                                        {project.type}
                                      </Badge>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-sm font-semibold text-green-700">{project.area}</div>
                                    </div>
                                  </div>

                                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

                                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-2">
                                      <Building className="h-4 w-4 text-blue-500" />
                                      <span>{project.units}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Calendar className="h-4 w-4 text-green-500" />
                                      <span>{project.possession}</span>
                                    </div>
                                  </div>
                                </div>

                                <Link href={`/projects/${project.slug}`}>
                                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group/btn">
                                    <span>View Details</span>
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      )}
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
                  <Card className="max-w-md mx-auto p-8 bg-white shadow-xl border-0">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                      <Search className="h-12 w-12 text-blue-500" />
                    </div>

                    {activeCategory === "upcoming" ? (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">No Upcoming Projects</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                          We currently don't have any upcoming projects announced. Please check our completed projects
                          or stay tuned for future developments.
                        </p>
                        <Button
                          onClick={() => setActiveCategory("completed")}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          View Completed Projects
                        </Button>
                      </>
                    ) : activeCategory === "ongoing" ? (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">No Ongoing Projects</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                          We currently don't have any ongoing projects. Please check our completed projects or stay
                          tuned for future developments.
                        </p>
                        <Button
                          onClick={() => setActiveCategory("completed")}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          View Completed Projects
                        </Button>
                      </>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">No Projects Found</h3>
                        <p className="text-gray-600 mb-8">Try adjusting your search criteria or browse all projects.</p>
                        <Button
                          onClick={() => {
                            setActiveCategory("all")
                            setSearchTerm("")
                          }}
                          variant="outline"
                          className="border-blue-200 text-blue-600 hover:bg-blue-50"
                        >
                          View All Projects
                        </Button>
                      </>
                    )}
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore our premium properties and discover the perfect space for your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8"
              >
                Schedule Site Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}