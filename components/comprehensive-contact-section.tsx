"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Building, Users, BarChart3 } from "lucide-react"
import EnhancedContactForm from "./enhanced-contact-form"
import Image from "next/image"

export default function ComprehensiveContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-light mb-4 block">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            <span className="text-gradient-gold">Find Us</span> Here
          </h2>
          <div className="gold-divider"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We're always here to assist you. Reach out to us through any of our contact channels or visit our office.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6 flex flex-col"
          >
            {/* Office Address */}
            <div className="luxury-card p-6 md:p-8 flex-1">
              <div className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white text-lg md:text-xl font-serif mb-3">Office Address</h4>
                  <address className="text-white/70 not-italic leading-relaxed break-words">
                    21, Whitefield - Hoskote Rd,
                    <br />
                    Vastu Bhoomi, Krishnarajapuram,
                    <br />
                    Bengaluru, Karnataka 560066
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="luxury-card p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-lg md:text-xl font-serif mb-3">Phone</h4>
                  <div className="space-y-1">
                    <p className="text-white/70">+91 89711 99588</p>
                    <p className="text-white/70">+91 89711 99577</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gold/10 my-6"></div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-lg md:text-xl font-serif mb-3">Email</h4>
                  <div className="space-y-1">
                    <p className="text-white/70">info@prashigroup.com</p>
                    <p className="text-white/70">sales@prashigroup.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="luxury-card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-lg md:text-xl font-serif mb-3">Business Hours</h4>
                  <div className="space-y-1 text-white/70">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed (By appointment only)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="luxury-card p-6 md:p-8 lg:p-10 h-full">
              <div className="mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-4">Send us a Message</h3>
                <p className="text-white/70">
                  Ready to find your dream property? Fill out the form below and our team will get back to you within 24
                  hours.
                </p>
              </div>
              <EnhancedContactForm />
            </div>
          </motion.div>
        </div>

        {/* Inquiry Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {[
            {
              icon: <Building className="h-8 w-8" />,
              title: "General Sales",
              description: "For property purchases and general inquiries",
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Joint Venture",
              description: "For partnership and collaboration opportunities",
            },
            {
              icon: <BarChart3 className="h-8 w-8" />,
              title: "Investor Relations",
              description: "For investment opportunities and investor queries",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="luxury-card p-6 md:p-8 text-center hover-lift flex flex-col items-center justify-start min-h-[200px]"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold flex-shrink-0">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-light text-white mb-3 text-center">{item.title}</h3>
              <p className="text-white/70 leading-relaxed text-center flex-1">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Office Location Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
              <span className="text-gradient-gold">Visit</span> Our Office
            </h3>
            <div className="gold-divider"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Located in the heart of Bangalore's tech corridor, our office is easily accessible from major landmarks
              and transportation hubs.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden border border-gold/10 group">
            <Image
              src="/bangalore-city-map.png"
              alt="Prashi Group Office Location - Bangalore City Map"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />

            {/* Interactive Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent group-hover:from-charcoal/60 transition-all duration-300"></div>

            {/* Location Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-8 h-8 bg-gold rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-charcoal/90 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gold/30">
                  <div className="text-center">
                    <div className="font-semibold text-gold">Prashi Group</div>
                    <div className="text-xs text-white/70">Whitefield, Bangalore</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-effect p-6 md:p-8 max-w-md text-center border border-gold/20 group-hover:border-gold/40 transition-all duration-300 group-hover:scale-105">
                <h4 className="text-xl md:text-2xl font-serif font-light text-white mb-3">Prime Location</h4>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Strategically located in Whitefield, with excellent connectivity to IT parks, shopping centers, and
                  residential areas.
                </p>
                <div className="w-12 h-px bg-gold/50 mx-auto mb-4"></div>
                <a
                  href="https://www.google.com/maps/place/PSR+GROUP%E2%80%99S/data=!4m2!3m1!1s0x0:0xe9869407d29b3549?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium bg-charcoal/50 px-4 py-2 rounded border border-gold/30 hover:border-gold/50"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Location Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="luxury-card p-4 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="h-6 w-6 text-gold" />
              </div>
              <h4 className="text-white font-semibold mb-2">IT Hub Access</h4>
              <p className="text-white/70 text-sm">Close to major IT parks and tech companies</p>
            </div>
            <div className="luxury-card p-4 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <h4 className="text-white font-semibold mb-2">Prime Location</h4>
              <p className="text-white/70 text-sm">Whitefield - Hoskote Road connectivity</p>
            </div>
            <div className="luxury-card p-4 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h4 className="text-white font-semibold mb-2">Easy Access</h4>
              <p className="text-white/70 text-sm">Metro, bus, and cab services available</p>
            </div>
            <div className="luxury-card p-4 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <h4 className="text-white font-semibold mb-2">Convenience</h4>
              <p className="text-white/70 text-sm">Ample parking and nearby amenities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
