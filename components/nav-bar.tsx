"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000c18] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Only one instance */}
          <Link href="/" className="text-white text-2xl font-light">
            <span className="text-[#d4af37]">Prashi</span>group
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-sm uppercase tracking-wider ${
                pathname === "/" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-sm uppercase tracking-wider ${
                pathname === "/about-us" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
              } transition-colors`}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className={`text-sm uppercase tracking-wider ${
                pathname === "/projects" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
              } transition-colors`}
            >
              Projects
            </Link>
            <Link
              href="/news"
              className={`text-sm uppercase tracking-wider ${
                pathname === "/news" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
              } transition-colors`}
            >
              News
            </Link>
            <Link
              href="/contact-us"
              className={`text-sm uppercase tracking-wider ${
                pathname === "/contact-us" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
              } transition-colors`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - No logo here */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#000c18] border-t border-[#d4af37]/10 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-sm uppercase tracking-wider px-4 py-2 ${
                  pathname === "/" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`text-sm uppercase tracking-wider px-4 py-2 ${
                  pathname === "/about-us" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className={`text-sm uppercase tracking-wider px-4 py-2 ${
                  pathname === "/projects" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/news"
                className={`text-sm uppercase tracking-wider px-4 py-2 ${
                  pathname === "/news" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/contact-us"
                className={`text-sm uppercase tracking-wider px-4 py-2 ${
                  pathname === "/contact-us" ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]"
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
