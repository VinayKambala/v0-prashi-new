"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, MapPin, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"
import Logo from "./logo" // Import the new Logo component

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 py-2 shadow-sm" // Changed to white for screenshot consistency
          : "bg-white py-6" // Changed to white for screenshot consistency
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo textColor="dark" /> {/* Use the Logo component with dark text color */}
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium text-gray-800 hover:text-yellow-600 transition-colors ${pathname === "/" ? "text-yellow-600" : ""}`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-yellow-600 transition-colors ${pathname.startsWith("/projects") ? "text-yellow-600" : ""}`}
            >
              Projects <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-white border-gray-200">
              <DropdownMenuItem asChild className="text-gray-800 hover:text-yellow-600 hover:bg-gray-100">
                <Link href="/projects?status=ongoing">Ongoing Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="text-gray-800 hover:text-yellow-600 hover:bg-gray-100">
                <Link href="/projects?status=completed">Completed Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="text-gray-800 hover:text-yellow-600 hover:bg-gray-100">
                <Link href="/projects?status=upcoming">Upcoming Projects</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className={`text-sm font-medium text-gray-800 hover:text-yellow-600 transition-colors ${pathname === "/about" ? "text-yellow-600" : ""}`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium text-gray-800 hover:text-yellow-600 transition-colors ${pathname === "/contact" ? "text-yellow-600" : ""}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-800">
            <Phone className="h-4 w-4 text-yellow-600" />
            <span className="text-sm">+91 9876543210</span>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-gray-100">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-gray-800 border-gray-200">
              <nav className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className={`text-lg font-medium hover:text-yellow-600 transition-colors ${pathname === "/" ? "text-yellow-600" : ""}`}
                >
                  Home
                </Link>
                <div className="space-y-3">
                  <div className={`font-medium ${pathname.startsWith("/projects") ? "text-yellow-600" : ""}`}>
                    Projects
                  </div>
                  <div className="pl-4 border-l border-gray-200 space-y-3">
                    <Link href="/projects?status=ongoing" className="block text-gray-700 hover:text-yellow-600">
                      Ongoing Projects
                    </Link>
                    <Link href="/projects?status=completed" className="block text-gray-700 hover:text-yellow-600">
                      Completed Projects
                    </Link>
                    <Link href="/projects?status=upcoming" className="block text-gray-700 hover:text-yellow-600">
                      Upcoming Projects
                    </Link>
                  </div>
                </div>
                <Link
                  href="/about"
                  className={`text-lg font-medium hover:text-yellow-600 transition-colors ${pathname === "/about" ? "text-yellow-600" : ""}`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium hover:text-yellow-600 transition-colors ${pathname === "/contact" ? "text-yellow-600" : ""}`}
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      21, Whitefield - Hoskote Rd, Vastu Bhoomi, Krishnarajapuram, Bengaluru
                    </span>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
