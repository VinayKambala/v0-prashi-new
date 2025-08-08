"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Home, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Enhanced scroll handler with hide/show functionality
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Update scroll state
    setIsScrolled(currentScrollY > 20);
    
    // Hide/show header based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScroll]);

  // Close mobile menu when route changes or clicking outside
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Enhanced dynamic styling based on current page
  const getPageStyling = () => {
    const isHomePage = pathname === "/";
    const isAboutPage = pathname === "/about";
    const isContactPage = pathname === "/contact";
    const isProjectsPage = pathname.startsWith("/projects");
    const isNewsPage = pathname === "/news";
    const isPropertiesPage = pathname.startsWith("/properties");

    const baseScrolledBg = "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gold/15";
    const baseTransparentBg = "bg-transparent";

    if (isHomePage) {
      return {
        headerBg: true ? baseScrolledBg : baseTransparentBg,
        textColor: "text-dark-gray",
        activeColor: "text-gold font-semibold",
        hoverColor: "hover:text-gold transition-all duration-300",
        homeStyle: isScrolled
          ? "text-gold bg-gradient-to-r from-gold/10 to-gold/5 px-4 py-2 rounded-full border border-gold/20 shadow-sm"
          : "text-dark-gray bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm",
        ctaStyle: isScrolled
          ? "bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white shadow-lg hover:shadow-xl transform hover:scale-105"
          : "bg-gradient-to-r from-gold to-gold-dark hover:from-white hover:to-white text-white hover:text-dark-gray shadow-lg",
      };
    } else if (isAboutPage || isContactPage || isNewsPage) {
      return {
        headerBg: isScrolled ? baseScrolledBg : "bg-white/90 backdrop-blur-md shadow-md border-b border-gold/10",
        textColor: "text-dark-gray",
        activeColor: "text-gold font-semibold",
        hoverColor: "hover:text-gold transition-all duration-300",
        homeStyle: "text-gold bg-gradient-to-r from-gold/10 to-gold/5 px-4 py-2 rounded-full border border-gold/25 shadow-sm",
        ctaStyle: "bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white shadow-lg hover:shadow-xl transform hover:scale-105",
      };
    } else {
      return {
        headerBg:  true ? baseScrolledBg : baseTransparentBg,
        textColor: isScrolled ? "text-dark-gray" : "text-dark-gray",
        activeColor: "text-gold font-semibold",
        hoverColor: "hover:text-gold transition-all duration-300",
        homeStyle: "text-dark-gray hover:text-gold transition-all duration-300",
        ctaStyle: "bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white shadow-lg hover:shadow-xl transform hover:scale-105",
      };
    }
  };

  const styling = getPageStyling();

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
    { name: "Contact", path: "/contact" },
  ];

  const headerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.header
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? `py-2 md:py-3 ${styling.headerBg}`
          : `py-4 md:py-6 ${styling.headerBg}`
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20 md:h-24 lg:h-28 relative">
          
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 z-10">
            <Link href="/" className="block">
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src="/logo.svg"
                      alt="Prashi Group Logo"
                      width={64}
                      height={64}
                      className="object-contain transition-transform duration-300 group-hover:scale-110 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg?height=64&width=64&text=P";
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col ml-1">
                  <div
                    className={`font-serif text-2xl md:text-3xl lg:text-4xl ${styling.textColor} transition-colors duration-300 leading-tight`}
                    style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
                  >
                    <span className="text-gold font-bold tracking-wide">Prashi</span>
                    <span className="font-light ml-2 tracking-wide text-gold">group</span>
                  </div>
                  <div
                    className="text-[0.45rem] md:text-[0.7rem] lg:text-xs font-light tracking-[0.2em] text-gray-500 uppercase mt-1 ml-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    on the move always
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-1 xl:gap-2 bg-white/60 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {item.dropdown ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.name);
                      }}
                      className={`flex items-center gap-1 text-sm font-medium py-2 px-4 rounded-full transition-all duration-300 ${
                        pathname === item.path || pathname.startsWith(item.path + "/")
                          ? styling.activeColor + " bg-gold/10"
                          : `${styling.textColor} ${styling.hoverColor} hover:bg-gold/5`
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={`flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-full transition-all duration-300 ${
                        pathname === item.path
                          ? styling.activeColor + " bg-gold/10"
                          : item.isHome
                          ? styling.homeStyle
                          : `${styling.textColor} ${styling.hoverColor} hover:bg-gold/5`
                      }`}
                    >
                      {item.isHome && <Home className="h-3 w-3" />}
                      {item.name}
                    </Link>
                  )}

                  {/* Enhanced Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gold/20 shadow-2xl z-50 rounded-2xl overflow-hidden"
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem, idx) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: idx * 0.05 }}
                              >
                                <Link
                                  href={dropdownItem.path}
                                  className="flex items-center justify-between group px-4 py-3 text-sm text-gray-700 hover:text-gold hover:bg-gradient-to-r hover:from-gold/5 hover:to-gold/10 transition-all duration-200"
                                >
                                  <span>{dropdownItem.name}</span>
                                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Enhanced CTA Button - Desktop */}
          <motion.div
            className="hidden lg:block flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/contact">
            <Button className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${styling.ctaStyle}`}>
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gold" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl z-50 border-b border-gold/20"
            >
              <div className="container mx-auto px-4 sm:px-6 py-6 max-w-md">
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`flex items-center justify-between w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                              pathname === item.path
                                ? "text-gold bg-gold/10 font-semibold"
                                : "text-gray-700 hover:text-gold hover:bg-gold/5"
                            }`}
                          >
                            <span className="text-lg font-medium">{item.name}</span>
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
                                className="ml-4 space-y-1 border-l-2 border-gold/20 pl-4"
                              >
                                {item.dropdown.map((dropdownItem, idx) => (
                                  <motion.div
                                    key={dropdownItem.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                  >
                                    <Link
                                      href={dropdownItem.path}
                                      className="block p-3 text-gray-600 hover:text-gold hover:bg-gold/5 rounded-xl transition-all duration-200"
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
                          className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${
                            pathname === item.path
                              ? "text-gold bg-gold/10 font-semibold"
                              : item.isHome
                              ? "text-gold bg-gold/5 font-medium"
                              : "text-gray-700 hover:text-gold hover:bg-gold/5"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.isHome && <Home className="h-5 w-5" />}
                          <span className="text-lg font-medium">{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA and Contact */}
                <motion.div
                  className="pt-6 mt-6 border-t border-gold/20 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                   <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white py-4 rounded-2xl font-semibold text-lg shadow-lg">
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </Link>
                  <div className="flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-2xl">
                    <Phone className="h-5 w-5 text-gold" />
                    <span className="text-gray-600 font-medium">+91 89711 99588</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}