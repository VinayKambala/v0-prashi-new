"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Award, Users, Building2, Clock, Calendar } from "lucide-react"

export default function AboutSection() {
  const achievements = [
    { icon: <Building2 className="h-8 w-8" />, number: "10+", label: "Projects Completed", sublabel: "Since 2014" },
    { icon: <Users className="h-8 w-8" />, number: "1000+", label: "Happy Families", sublabel: "Across Bengaluru" },
    { icon: <Award className="h-8 w-8" />, number: "10+", label: "Years Legacy", sublabel: "Combined Experience" },
    { icon: <Clock className="h-8 w-8" />, number: "100%", label: "On-Time Delivery", sublabel: "Every Project" },
  ]

  const features = [
    "RERA Registered Projects",
    "Premium Quality Construction",
    "Innovative Architectural Design",
    "Customer-Centric Approach",
    "Transparent Pricing Policy",
    "Post-Construction Support",
  ]

  return (
    <section className="section-padding-lg bg-light-gray">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-gold/10 text-gold border-gold/20 mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            Established 2014 • Evolved 2024
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray mb-6 leading-tight">
            About <span className="text-gradient-gold">Prashi Group</span>
          </h2>
          <div className="gold-divider-center"></div>
          <p className="text-dark-gray/80 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            From <strong>Sanvi Group</strong> to <strong>Prashi Group</strong> — A decade-long journey of building
            trust, delivering excellence, and creating homes that exceed expectations in Bengaluru.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-6">A Legacy of Excellence</h3>
              <div className="space-y-4 text-dark-gray/80 text-lg leading-relaxed">
                <p>
                  <strong className="text-dark-gray">Prashi Group</strong>, formerly known as{" "}
                  <strong className="text-dark-gray">Sanvi Group</strong>, was founded in{" "}
                  <strong className="text-gold">2014</strong> by visionary builders who recognized Bengaluru's immense
                  real estate potential.
                </p>
                <p>
                  Over the years, we successfully completed numerous premium projects under the Sanvi Group name,
                  establishing a strong foundation of trust and excellence in the industry.
                </p>
                <p>
                  In <strong className="text-gold">2024</strong>, we evolved into{" "}
                  <strong className="text-dark-gray">Prashi Group</strong> to better serve future homebuyers with
                  enhanced capabilities and a renewed vision for modern living.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-dark-gray font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-warm-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/about">Learn More About Our Journey</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-construction-site.png" // Changed image to better depict real estate leadership/projects
                alt="Prashi Group - Modern Construction Site"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-warm-white/95 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-dark-gray font-semibold">Visionary Leadership</p>
                  <p className="text-dark-gray/70 text-sm">Overseeing excellence in every project phase</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <Card key={index} className="construction-card text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-dark-gray mb-2">{achievement.number}</div>
                <p className="text-dark-gray font-semibold mb-1">{achievement.label}</p>
                <p className="text-dark-gray/60 text-sm">{achievement.sublabel}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
