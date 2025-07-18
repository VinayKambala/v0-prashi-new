"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LuxuryHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })

  const scrollToContent = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <Image
        src="/luxurious-villa-with-modern-architectural-design.png" // Image source updated to luxury-building-night.jpg
        alt="Luxury Building at Night"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-darker/80 via-navy-darker/60 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-light text-white leading-tight drop-shadow-lg">
            Experience Unrivaled <span className="text-gradient-gold">Luxury Living</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-3xl text-lg text-white/80 drop-shadow-md"
        >
          Discover meticulously crafted residences and commercial spaces that redefine sophistication and comfort in
          India&apos;s most sought-after locations.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/properties"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy-darker font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-gold/90 shadow-lg"
          >
            Explore Properties
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-gold/10 shadow-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToContent}
          className="text-white/70 hover:text-gold hover:bg-transparent animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </motion.div>
    </section>
  )
}
