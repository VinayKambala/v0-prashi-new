"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (    
    <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/luxurious-villa-with-modern-architectural-design.png" // Updated image source
        alt="Luxurious Villa with Modern Architectural Design"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-800/60 to-transparent"></div>
      <div className="relative z-10 px-4 py-12 max-w-5xl mx-auto text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-semibold text-gold-400 uppercase tracking-wider mb-4"
        >
          <span className="mr-2">🏢</span> PREMIUM REAL ESTATE COMPANY
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg"
        >
          Building <span className="text-gold-500">Excellence</span> Since 2010
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
        >
          From residential complexes to commercial landmarks, we deliver superior construction services with
          uncompromising quality, innovative design, and timely execution. Your vision, our expertise.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl font-bold text-gold-500">10+</span>
            <span className="text-gray-300 text-sm uppercase tracking-wider mt-2">PROJECTS COMPLETED</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl font-bold text-gold-500">10+</span>
            <span className="text-gray-300 text-sm uppercase tracking-wider mt-2">YEARS EXPERIENCE</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl font-bold text-gold-500">100%</span>
            <span className="text-gray-300 text-sm uppercase tracking-wider mt-2">CLIENT SATISFACTION</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/projects">
            <Button className="px-8 py-6 text-lg bg-gold-500 text-gold-900 hover:bg-gold-600 transition-colors flex items-center">
              VIEW OUR PROJECTS <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-gray-900 transition-colors flex items-center bg-transparent"
            >
              GET QUOTE <Phone className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
