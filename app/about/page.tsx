"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Award,
  Clock,
  CheckCircle2,
  Target,
  Heart,
  Shield,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
} from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2014",
      title: "Foundation as Saanvi Group",
      description: "Started our journey with a vision to transform Bengaluru's real estate landscape",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      year: "2015-2023",
      title: "Building Excellence",
      description: "Successfully completed numerous premium residential projects under Saanvi Group",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "Evolution to Prashi Group",
      description: "Rebranded to better serve future homebuyers with enhanced vision and capabilities",
      icon: <Star className="h-6 w-6" />,
    },
    {
      year: "Present",
      title: "Leading Developer",
      description: "Recognized as one of Bengaluru's most trusted real estate developers",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const achievements = [
    { icon: <Building2 className="h-8 w-8" />, number: "10+", label: "Projects Delivered", sublabel: "Since 2014" },
    { icon: <Users className="h-8 w-8" />, number: "1000+", label: "Happy Families", sublabel: "Across Bengaluru" },
    { icon: <Clock className="h-8 w-8" />, number: "10+", label: "Years Experience", sublabel: "Combined Legacy" },
    { icon: <Shield className="h-8 w-8" />, number: "100%", label: "Quality Assurance", sublabel: "Every Project" },
  ]

  const coreValues = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Vision-Driven",
      description: "Guided by visionary leadership that has shaped Bengaluru's skyline for over a decade",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer-Centric",
      description: "Every decision is made with our customers' evolving needs and satisfaction at the forefront",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Commitment",
      description: "Unwavering dedication to superior construction quality and innovative design solutions",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Relationship Focus",
      description: "Building lasting relationships through transparency, trust, and exceptional service",
    },
  ]

  const credentials = [
    "RERA Registered Projects",
    "ISO 9001:2015 Certified",
    "CREDAI Member",
    "Green Building Certified",
    "Award-Winning Designs",
    "Financial Institution Approved",
  ]

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream to-light-gray py-20 md:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge className="bg-gold/10 text-gold border-gold/20 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  Established 2014 • Evolved 2024
                </Badge>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-dark-gray leading-tight">
                  About <span className="text-gradient-gold">Prashi Group</span>
                </h1>
                <div className="gold-divider-left mt-6"></div>
              </div>

              <p className="text-xl text-dark-gray/80 leading-relaxed">
                From <strong>Saanvi Group</strong> to <strong>Prashi Group</strong> — A decade-long journey of building
                trust, delivering excellence, and creating homes that exceed expectations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                <Button className="bg-gold hover:bg-gold-dark text-warm-white px-8 py-3 text-lg">Our Projects</Button>
                </Link>
                <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg bg-transparent"
                >
                  Contact Us
                </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-construction-site.png"
                  alt="Prashi Group Leadership Team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-warm-white/95 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-dark-gray font-semibold">Visionary Leadership</p>
                    <p className="text-dark-gray/70 text-sm">
                      Guiding Bengaluru's real estate transformation since 2014
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding-lg bg-warm-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Our Legacy</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              A Decade of <span className="text-gradient-gold">Excellence</span>
            </h2>
            <div className="gold-divider-center"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-dark-gray/80 leading-relaxed space-y-6"
            >
              <p className="text-xl leading-relaxed">
                <strong className="text-dark-gray">Prashi Group</strong>, formerly known as{" "}
                <strong className="text-dark-gray">Saanvi Group</strong>, was originally founded in{" "}
                <strong className="text-gold">2014</strong> by a family of visionary builders who recognized the immense
                potential in Bengaluru's rapidly evolving real estate landscape.
              </p>

              <p>
                Over the years, our dedicated team successfully completed numerous premium real estate projects under
                the Saanvi Group name, establishing a strong foundation of trust and excellence in the industry. Each
                project was a testament to our unwavering commitment to quality construction, innovative design, and
                customer satisfaction.
              </p>

              <p>
                In <strong className="text-gold">2024</strong>, we evolved into a new organization —{" "}
                <strong className="text-dark-gray">Prashi Group</strong> — to better serve the future needs of
                homebuyers in Bengaluru. This transformation represents not just a rebranding, but a strategic evolution
                that combines our decade-long experience with enhanced capabilities and a renewed vision for the future.
              </p>

              <p>
                Today, <strong className="text-dark-gray">Prashi Group</strong> stands as one of the leading real estate
                developers in Bengaluru, known for our commitment to quality, innovation, and customer satisfaction.
                With a strong foundation built on years of experience and success, we continue to prioritize the
                evolving demands of our customers by offering thoughtfully designed homes and apartments.
              </p>

              <p>
                Under the same visionary leadership that guided Saanvi Group to success, Prashi Group has built an
                enviable reputation for strong customer relationships, high satisfaction rates, and strategic management
                with a clear vision for the future. Our dedication ensures that every project not only meets but exceeds
                the expectations of modern homeowners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding-lg bg-light-gray">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Our Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              Milestones of <span className="text-gradient-gold">Growth</span>
            </h2>
            <div className="gold-divider-center"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30 hidden md:block"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 bg-gold rounded-full items-center justify-center text-warm-white flex-shrink-0 shadow-lg">
                    {milestone.icon}
                  </div>

                  {/* Content */}
                  <Card className="construction-card flex-1 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-gold text-warm-white font-semibold">{milestone.year}</Badge>
                        <div className="md:hidden w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                          {milestone.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-dark-gray mb-2">{milestone.title}</h3>
                      <p className="text-dark-gray/70">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding-lg bg-warm-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Our Achievements
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              Numbers That <span className="text-gradient-gold">Speak</span>
            </h2>
            <div className="gold-divider-center"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="construction-card text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-dark-gray mb-2">{achievement.number}</div>
                    <p className="text-dark-gray font-semibold mb-1">{achievement.label}</p>
                    <p className="text-dark-gray/60 text-sm">{achievement.sublabel}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Our Credentials & Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {credentials.map((credential, index) => (
                <Badge key={index} className="bg-gold/10 text-gold border-gold/20 px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  {credential}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding-lg bg-light-gray">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Our Values</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              What <span className="text-gradient-gold">Drives</span> Us
            </h2>
            <div className="gold-divider-center"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="construction-card h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-gray mb-4">{value.title}</h3>
                    <p className="text-dark-gray/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg bg-gradient-to-br from-gold/5 to-gold/10">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              Ready to Build Your <span className="text-gradient-gold">Dream Home</span>?
            </h2>
            <p className="text-xl text-dark-gray/80 mb-8 leading-relaxed">
              Join over 1000 satisfied families who have trusted Prashi Group with their most important investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
              <Button className="bg-gold hover:bg-gold-dark text-warm-white px-8 py-3 text-lg">
                <MapPin className="h-5 w-5 mr-2" />
                View Our Projects
              </Button>
              </Link>
              <Link href="/contact">
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg bg-transparent"
              >
                Schedule a Meeting
              </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
