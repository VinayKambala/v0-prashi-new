"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Building, Users, Award } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+91 9346070797", "+91 9606471392"],
      action: "tel:+919606471392",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@prashigroup.com", "sales@prashigroup.com"],
      action: "mailto:info@prashigroup.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["21, Whitefield - Hoskote Rd", "Bengaluru, Karnataka 560066"],
      action: "https://maps.google.com",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "10+ Years Experience",
      description: "Proven track record in construction excellence",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Quality Construction",
      description: "Premium materials and superior craftsmanship",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Satisfaction",
      description: "1000+ happy families trust our services",
    },
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
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray mb-6 leading-tight">
            Contact <span className="text-gradient-gold">Our Experts</span>
          </h2>
          <div className="gold-divider-center"></div>
          <p className="text-dark-gray/80 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            Ready to start your construction journey? Our team of experts is here to help you bring your vision to life
            with premium quality and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-dark-gray mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="construction-card hover-lift">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold flex-shrink-0">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-dark-gray mb-2">{info.title}</h4>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-dark-gray/70 text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="construction-card">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-2">Business Hours</h4>
                      <div className="space-y-1 text-sm text-dark-gray/70">
                        <p>Everyday: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="construction-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-dark-gray mb-2">Send Us a Message</h3>
                  <p className="text-dark-gray/70">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-serif font-bold text-dark-gray text-center mb-12">Why Choose Prashi Group?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="construction-card text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-serif font-bold text-dark-gray mb-3">{item.title}</h4>
                    <p className="text-dark-gray/70 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gold/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-4">
              Ready to Build Your Dream?
            </h3>
            <p className="text-dark-gray/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your construction needs and create something extraordinary together. Contact us today for a
              free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-warm-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-gold text-gold hover:bg-gold hover:text-warm-white px-8 py-3 text-lg font-medium transition-all duration-300 bg-transparent"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
