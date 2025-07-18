"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, Home } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Dynamic styling based on current page
  const getPageStyling = () => {
    const isHomePage = pathname === "/"
    const isAboutPage = pathname === "/about"
    const isContactPage = pathname === "/contact"
    const isProjectsPage = pathname.startsWith("/projects")
    const isNewsPage = pathname === "/news"
    const isPropertiesPage = pathname === "/properties"

    if (isHomePage) {
      return {
        headerBg: isScrolled ? "bg-warm-white/95 backdrop-blur-md shadow-lg border-b border-gold/20" : "bg-transparent",
        textColor: "text-dark-gray",
        activeColor: "text-gold",
        hoverColor: "hover:text-gold",
        homeStyle: "text-gold bg-gold/10 px-4 py-2 rounded-lg border border-gold/30 shadow-md",
        ctaStyle: "border-gold/40 text-gold hover:bg-gold hover:text-warm-white shadow-md",
      }
    } else if (isAboutPage) {
      return {
        headerBg: isScrolled
          ? "bg-warm-white/98 backdrop-blur-md shadow-xl border-b border-gold/25"
          : "bg-warm-white/95 backdrop-blur-sm shadow-lg border-b border-gold/15",
        textColor: "text-dark-gray",
        activeColor: "text-gold",
        hoverColor: "hover:text-gold",
        homeStyle: "text-gold bg-gold/15 px-4 py-2 rounded-lg border border-gold/40 shadow-lg",
        ctaStyle: "border-gold/50 text-gold hover:bg-gold hover:text-warm-white shadow-lg",
      }
    } else if (isContactPage) {
      return {
        headerBg: isScrolled
          ? "bg-warm-white/98 backdrop-blur-md shadow-xl border-b border-gold/25"
          : "bg-warm-white/95 backdrop-blur-sm shadow-lg border-b border-gold/15",
        textColor: "text-dark-gray",
        activeColor: "text-gold",
        hoverColor: "hover:text-gold",
        homeStyle: "text-gold bg-gold/15 px-4 py-2 rounded-lg border border-gold/40 shadow-lg",
        ctaStyle: "border-gold/50 text-gold hover:bg-gold hover:text-warm-white shadow-lg",
      }
    } else if (isProjectsPage) {
      return {
        headerBg: isScrolled
          ? "bg-warm-white/98 backdrop-blur-md shadow-xl border-b border-gold/25"
          : "bg-warm-white/95 backdrop-blur-sm shadow-lg border-b border-gold/15",
        textColor: "text-dark-gray",
        activeColor: "text-gold",
        hoverColor: "hover:text-gold",
        homeStyle: "text-gold bg-gold/15 px-4 py-2 rounded-lg border border-gold/35 shadow-lg",
        ctaStyle: "border-gold/45 text-gold hover:bg-gold hover:text-warm-white shadow-lg",
      }
    } else if (isNewsPage) {
      return {
        headerBg: isScrolled
          ? "bg-warm-white/98 backdrop-blur-md shadow-xl border-b border-gold/25"
          : "bg-warm-white/95 backdrop-blur-sm shadow-lg border-b border-gold/15",
        textColor: "text-dark-gray",
        activeColor: "text-gold",
        hoverColor: "hover:text-gold",
        homeStyle: "text-gold bg-gold/15 px-4 py-2 rounded-lg border border-gold/40 shadow-lg",
        ctaStyle: "border-gold/50 text-gold hover:bg-gold hover:text-warm-white shadow-lg",
      }
    } else if (isPropertiesPage) {
      return {
        headerBg: isScrolled
          ? "bg-warm-white/98 backdrop-blur-md shadow-xl border-b border-gold/25"
          : "bg-warm-white/95 backdrop-blur-sm shadow-lg border-b border-gold/15",
        textColor: "text-dark-gray",
        activeColor: "text-gold",
        hoverColor: "hover:text-gold",
        homeStyle: "text-gold bg-gold/15 px-4 py-2 rounded-lg border border-gold/40 shadow-lg",
        ctaStyle: "border-gold/50 text-gold hover:bg-gold hover:text-warm-white shadow-lg",
      }
    } else {
      // Default styling for other pages
      return {
        headerBg: isScrolled ? "bg-warm-white/95 backdrop-blur-md shadow-lg border-b border-gold/10" : "bg-transparent",
        textColor: "text-dark-gray",
        activeColor: "text-gold",
        hoverColor: "hover:text-gold",
        homeStyle: "text-gold bg-gold/10 px-4 py-2 rounded-lg border border-gold/25",
        ctaStyle: "border-gold/30 text-gold hover:bg-gold hover:text-warm-white",
      }
    }
  }

  const styling = getPageStyling()

  // Menu items with Home always as first item
  const menuItems = [
    { name: "Home", path: "/", isHome: true },
    {
      name: "Projects",
      path: "/projects",
      dropdown: [
        { name: "Ongoing Projects", path: "/projects?status=ongoing" },
        { name: "Completed Projects", path: "/projects?status=completed" },
        { name: "Upcoming Projects", path: "/projects?status=upcoming" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Properties", path: "/properties" },
    { name: "Contact", path: "/contact" },
  ]

  const headerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? `py-3 md:py-4 ${styling.headerBg}` : `py-6 md:py-8 ${styling.headerBg}`
      }`}
    >
      <div className="container-luxury">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0">
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="relative h-10 w-10 md:h-12 md:w-12">
                <Image
                  src="/prashi-logo-symbol.jpeg"
                  alt="Prashi Group Logo Symbol"
                  width={48}
                  height={48}
                  className="rounded-full bg-transparent object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=48&width=48&text=P"
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="font-serif text-lg md:text-xl">
                  <span className="text-gold">Prashi</span>
                  <span className="text-dark-gray font-light ml-1">group</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center gap-1 text-sm uppercase tracking-wider font-medium py-2 transition-colors ${
                      pathname === item.path || pathname.startsWith(item.path + "/")
                        ? styling.activeColor
                        : `${styling.textColor} ${styling.hoverColor}`
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className={`flex items-center gap-2 text-sm uppercase tracking-wider font-medium py-2 transition-all duration-300 ${
                      pathname === item.path
                        ? styling.activeColor
                        : item.isHome
                          ? styling.homeStyle
                          : `${styling.textColor} ${styling.hoverColor}`
                    }`}
                  >
                    {item.isHome && <Home className="h-4 w-4" />}
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-warm-white border border-gold/20 shadow-gold-md backdrop-blur-md z-20 rounded-lg"
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.path}
                              className="block px-4 py-3 text-sm text-dark-gray/80 hover:text-gold hover:bg-gold/5 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden lg:block flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button className="bg-gold hover:bg-gold-dark text-warm-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl">
              Get Quote
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-dark-gray focus:outline-none z-10 p-2 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden bg-warm-white border-t border-gold/20 overflow-hidden shadow-lg"
          >
            <div className="container-luxury py-6">
              <nav className="flex flex-col space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`flex items-center justify-between w-full text-lg py-2 ${
                            pathname === item.path ? styling.activeColor : styling.textColor
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 pl-4 border-l border-gold/30"
                            >
                              {item.dropdown.map((dropdownItem, idx) => (
                                <motion.div
                                  key={dropdownItem.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                  <Link
                                    href={dropdownItem.path}
                                    className="block py-2 text-dark-gray/80 hover:text-gold transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className={`flex items-center gap-2 text-lg py-2 transition-all duration-300 ${
                          pathname === item.path
                            ? styling.activeColor
                            : item.isHome
                              ? styling.homeStyle
                              : `${styling.textColor} ${styling.hoverColor}`
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.isHome && <Home className="h-5 w-5" />}
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  className="pt-6 mt-6 border-t border-gold/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button className="w-full bg-gold hover:bg-gold-dark text-warm-white py-3 rounded-lg font-medium">
                    Get Quote
                  </Button>
                </motion.div>

                <motion.div
                  className="pt-6 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold" />
                    <span className="text-dark-gray/70">+91 89711 99588</span>
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
