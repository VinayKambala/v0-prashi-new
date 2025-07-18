"use client"

import { useEffect, useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturedProperties from "@/components/featured-properties"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const isMounted = useRef(true)

  // Set up cleanup to prevent memory leaks
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      <HeroSection />
      <AboutSection />
      <FeaturedProperties />
      <ContactSection />
    </div>
  )
}
