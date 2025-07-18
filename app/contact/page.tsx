import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Dark Office Background */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-building-night.jpg"
            alt="Luxury Building at Night"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          {/* Additional depth overlay */}
          <div className="absolute inset-0 bg-navy-darker/40" />
        </div>

        {/* Content Container */}
        <div className="container-luxury relative z-10">
          <div className="max-w-4xl">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight drop-shadow-lg">
                    Contact Us
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light shadow-lg"></div>
                </div>
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl font-light drop-shadow-md">
                  Connect with Bangalore's premier real estate experts. Let us help you discover exceptional properties
                  and investment opportunities in the city's most sought-after locations.
                </p>
              </div>

              {/* Contact Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center gap-4 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-lg">
                  <div className="bg-gold/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold drop-shadow-sm">Expert Consultation</h3>
                    <p className="text-white/80 text-sm">Professional guidance</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-lg">
                  <div className="bg-gold/30 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold drop-shadow-sm">Quick Response</h3>
                    <p className="text-white/80 text-sm">24-hour callback</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-lg">
                  <div className="bg-gold/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold drop-shadow-sm">Prime Locations</h3>
                    <p className="text-white/80 text-sm">Bangalore's best</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"></div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-obsidian">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-serif">Get in Touch</h2>
                  <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent"></div>
                  <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                    Ready to embark on your real estate journey? Our dedicated team is here to provide expert guidance
                    and personalized solutions for all your property needs in Bangalore.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="luxury-card hover-lift transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-gold/10 p-3 rounded-full flex-shrink-0">
                        <MapPin className="h-6 w-6 text-gold" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-white text-lg">Our Location</h3>
                        <p className="text-white/70 leading-relaxed">
                          21, Whitefield - Hoskote Rd, Vastu Bhoomi, Krishnarajapuram, Bengaluru, Karnataka 560066
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="luxury-card hover-lift transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-gold/10 p-3 rounded-full flex-shrink-0">
                        <Phone className="h-6 w-6 text-gold" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-white text-lg">Phone Number</h3>
                        <div className="space-y-1">
                          <p className="text-white/70">
                            <a href="tel:+918971199588" className="hover:text-gold transition-colors">
                              +91 89711 99588
                            </a>
                          </p>
                          <p className="text-white/70">
                            <a href="tel:+918971199577" className="hover:text-gold transition-colors">
                              +91 89711 99577
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="luxury-card hover-lift transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-gold/10 p-3 rounded-full flex-shrink-0">
                        <Mail className="h-6 w-6 text-gold" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-white text-lg">Email Address</h3>
                        <div className="space-y-1">
                          <p className="text-white/70">
                            <a href="mailto:info@prashigroup.com" className="hover:text-gold transition-colors">
                              info@prashigroup.com
                            </a>
                          </p>
                          <p className="text-white/70">
                            <a href="mailto:sales@prashigroup.com" className="hover:text-gold transition-colors">
                              sales@prashigroup.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="luxury-card hover-lift transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-gold/10 p-3 rounded-full flex-shrink-0">
                        <Clock className="h-6 w-6 text-gold" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-white text-lg">Office Hours</h3>
                        <div className="space-y-1 text-white/70">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed (By appointment only)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Office Location Map */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white font-serif">Find Us in Bangalore</h3>
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-300 group">
                    <Image
                      src="/bangalore-city-map.png"
                      alt="Prashi Group Office Location - Bangalore City Map"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    />

                    {/* Interactive Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                    {/* Location Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-charcoal/90 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Prashi Group Office
                        </div>
                      </div>
                    </div>

                    {/* Interactive Elements */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="glass-effect p-6 md:p-8 max-w-md text-center border border-gold/20 group-hover:border-gold/40 transition-all duration-300">
                        <h4 className="text-xl md:text-2xl font-serif font-light text-white mb-3">Visit Our Office</h4>
                        <p className="text-white/70 mb-4 leading-relaxed">
                          Located in the heart of Bangalore's tech corridor, easily accessible from major landmarks.
                        </p>
                        <div className="w-12 h-px bg-gold/50 mx-auto mb-3"></div>
                        <a
                          href="https://www.google.com/maps/place/PSR+GROUP%E2%80%99S/data=!4m2!3m1!1s0x0:0xe9869407d29b3549?sa=X&ved=1t:2428&ictx=111"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:text-gold-light transition-colors text-sm inline-flex items-center gap-2"
                        >
                          <MapPin className="h-4 w-4" />
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-charcoal/50 p-4 rounded-lg border border-gold/10">
                      <h4 className="text-gold font-semibold mb-2">Nearby Landmarks</h4>
                      <p className="text-white/70 text-sm">Whitefield, ITPL, Phoenix MarketCity</p>
                    </div>
                    <div className="bg-charcoal/50 p-4 rounded-lg border border-gold/10">
                      <h4 className="text-gold font-semibold mb-2">Transportation</h4>
                      <p className="text-white/70 text-sm">Metro, Bus, Cab Services Available</p>
                    </div>
                    <div className="bg-charcoal/50 p-4 rounded-lg border border-gold/10">
                      <h4 className="text-gold font-semibold mb-2">Parking</h4>
                      <p className="text-white/70 text-sm">Ample parking space available</p>
                    </div>
                  </div>

                  {/* Direct link to Google Maps */}
                  <div className="text-center">
                    <a
                      href="https://www.google.com/maps/place/PSR+GROUP%E2%80%99S/data=!4m2!3m1!1s0x0:0xe9869407d29b3549?sa=X&ved=1t:2428&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium bg-charcoal/30 px-6 py-3 rounded-lg border border-gold/20 hover:border-gold/40"
                    >
                      <MapPin className="h-5 w-5" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="luxury-card shadow-gold-lg">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white font-serif drop-shadow-sm">Send Message</h3>
                        <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent"></div>
                        <p className="text-white/90 leading-relaxed">
                          Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                      </div>
                      <ContactForm />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
