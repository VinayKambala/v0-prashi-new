"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function LuxuryAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "50+", label: "Premium Projects" },
    { value: "500+", label: "Happy Families" },
    { value: "10+", label: "Industry Awards" },
  ]

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-navy-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/subtle-pattern.png')] opacity-5"></div>
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image src="/about-image-elegant.jpg" alt="About Prashigroup" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-light/80 to-transparent opacity-60"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 border border-gold/20 w-full h-full -z-10"></div>

            {/* Floating accent */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-navy-darker/80 backdrop-blur-sm p-6 flex flex-col justify-center border border-gold/10 z-10">
              <span className="text-gold text-4xl font-serif font-light">1995</span>
              <div className="w-12 h-px bg-gold/30 my-3"></div>
              <span className="text-white/70 text-sm">Year Established</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-light">Our Legacy</span>
              <h2 className="heading-lg text-white mt-4 mb-6">
                The <span className="text-gradient-gold">Prashigroup</span> Story
              </h2>
              <div className="gold-divider-left"></div>
            </div>

            <div className="space-y-6 text-white/70">
              <p className="body-md">
                Founded with a vision to redefine luxury living, Prashigroup has established itself as a premier real
                estate developer in India. With over two decades of experience, we have delivered exceptional properties
                that blend innovative design, premium quality, and sustainable practices.
              </p>
              <p className="body-md">
                Our commitment to excellence has earned us the trust of discerning clients who seek not just homes, but
                lifestyles that reflect their aspirations and achievements. Every Prashigroup property is a testament to
                our unwavering dedication to craftsmanship and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="border-l-2 border-gold/30 pl-4"
                >
                  <div className="text-3xl font-light text-gold font-serif">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300 uppercase tracking-wider text-sm mt-6"
              >
                Our Journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
