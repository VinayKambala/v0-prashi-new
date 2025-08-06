"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (    
    <section className="relative flex items-center justify-center w-full min-h-screen pt-28 py-10 sm:py-20 text-center overflow-hidden">
      <Image
        src="/luxurious-villa-with-modern-architectural-design.png"
        alt="Luxurious Villa with Modern Architectural Design"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-800/60 to-transparent"></div>
      <div className="relative z-10 px-3 sm:px-4 max-w-full sm:max-w-5xl mx-auto text-white w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-xl font-semibold text-gold-400 uppercase tracking-wider mb-2 sm:mb-4"
        >
          <span className="mr-2">🏢</span> PREMIUM REAL ESTATE COMPANY
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-4xl md:text-7xl font-bold leading-tight mb-4 sm:mb-6 drop-shadow-lg"
        >
          Building <span className="text-gold-500">Excellence</span> Since 2010
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs sm:text-base md:text-xl text-gray-200 mb-6 sm:mb-10 max-w-xs sm:max-w-3xl mx-auto"
        >
          From residential complexes to commercial landmarks, we deliver superior construction services with
          uncompromising quality, innovative design, and timely execution. Your vision, our expertise.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-xl sm:text-4xl md:text-5xl font-bold text-gold-500">10+</span>
            <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mt-2 text-center">PROJECTS COMPLETED</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col items-center"
          >
            <span className="text-xl sm:text-4xl md:text-5xl font-bold text-gold-500">10+</span>
            <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mt-2 text-center">YEARS EXPERIENCE</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-xl sm:text-4xl md:text-5xl font-bold text-gold-500">100%</span>
            <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mt-2 text-center">CLIENT SATISFACTION</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <Link href="/projects">
            <Button className="w-full sm:w-auto px-6 py-3 text-sm sm:text-lg bg-gold-500 text-gold-900 hover:bg-gold-600 transition-colors flex items-center justify-center">
              VIEW OUR PROJECTS <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 text-sm sm:text-lg border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-gray-900 transition-colors flex items-center justify-center bg-transparent"
            >
              GET QUOTE <Phone className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}