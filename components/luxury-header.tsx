"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "./logo" // Import the new Logo component

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
  }, [pathname])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const menuItems = [
    { name: "Home", path: "/" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 bg-navy-darker/95 backdrop-blur-md shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      {/* Top Bar - Only visible on desktop and when scrolled */}
      <div
        className={`hidden lg:block border-b border-gold/10 transition-all duration-500 ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-8 opacity-100"
        }`}
      >
        <div className="container-luxury flex justify-between items-center h-full">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Phone className="h-3 w-3 text-gold" />
              <span>+91 89711 99588</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Mail className="h-3 w-3 text-gold" />
              <span>info@prashigroup.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-gold text-sm transition-colors">
              Careers
            </a>
            <a href="#" className="text-white/70 hover:text-gold text-sm transition-colors">
              Investor Relations
            </a>
          </div>
        </div>
      </div>

      <div className="container-luxury">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Logo textColor="light" /> {/* Use the Logo component with light text color */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center gap-1 text-sm uppercase tracking-wider font-light ${
                      pathname === item.path || pathname.startsWith(item.path + "/")
                        ? "text-gold"
                        : "text-white hover:text-gold"
                    } transition-colors`}
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
                    className={`text-sm uppercase tracking-wider font-light ${
                      pathname === item.path ? "text-gold" : "text-white hover:text-gold"
                    } transition-colors`}
                  >
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
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-navy-darker border border-gold/10 shadow-gold-md backdrop-blur-md z-20"
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.path}
                              className="block px-4 py-2 text-sm text-white/80 hover:text-gold hover:bg-navy-dark/50 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              className="px-6 py-2 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-darker border-t border-gold/10 overflow-hidden"
          >
            <div className="container-luxury py-6">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <div key={item.name} className="py-2">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`flex items-center justify-between w-full text-lg ${
                            pathname === item.path ? "text-gold" : "text-white"
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
                              transition={{ duration: 0.2 }}
                              className="mt-2 pl-4 border-l border-gold/20"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.path}
                                  className="block py-2 text-white/80 hover:text-gold transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className={`block text-lg ${
                          pathname === item.path ? "text-gold" : "text-white hover:text-gold"
                        } transition-colors`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 mt-4 border-t border-gold/10">
                  <Button
                    variant="default"
                    className="block w-full text-center py-3 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300 uppercase tracking-wider"
                  >
                    Get Quote
                  </Button>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold" />
                    <span className="text-white/70">+91 89711 99588</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold" />
                    <span className="text-white/70">info@prashigroup.com</span>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
