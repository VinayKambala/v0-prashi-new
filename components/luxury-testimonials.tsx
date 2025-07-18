"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  image: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Business Owner",
    quote:
      "Investing in a Prashigroup property was one of the best decisions I've made. The quality of construction and attention to detail is exceptional. The team's professionalism and transparency throughout the process made it a seamless experience.",
    image: "/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "IT Professional",
    quote:
      "From the initial inquiry to the handover, Prashigroup provided a seamless experience. Their team was professional, responsive, and genuinely cared about our needs. The property exceeded our expectations in terms of design and quality.",
    image: "/testimonial-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Doctor",
    quote:
      "The amenities and design of our Prashigroup apartment exceeded our expectations. It truly feels like a premium living space designed for comfort and luxury. The attention to detail in every aspect of the property is remarkable.",
    image: "/testimonial-3.jpg",
    rating: 5,
  },
]

export default function LuxuryTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-navy-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-5">
          <Quote className="w-full h-full text-gold" />
        </div>
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-light">Voices of Satisfaction</span>
          <h2 className="heading-lg text-white mt-4 mb-6">
            Client <span className="text-gradient-gold">Testimonials</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="text-white/70 max-w-2xl mx-auto mt-6 body-md">
            Hear what our satisfied clients have to say about their experience with Prashigroup.
          </p>
        </motion.div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.9,
                  display: activeIndex === index ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold/20">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                  ))}
                </div>

                <blockquote className="text-white/80 text-xl font-serif italic mb-8 relative">
                  <span className="absolute -top-6 left-0 text-gold opacity-20 text-5xl">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-6 right-0 text-gold opacity-20 text-5xl">"</span>
                </blockquote>

                <div>
                  <h4 className="text-xl font-light text-white">{testimonial.name}</h4>
                  <p className="text-gold/80 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-gold w-6" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
