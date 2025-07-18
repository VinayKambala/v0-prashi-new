"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, MapPin, Ruler, Shield, Award, Clock } from "lucide-react"

function FeatureIcon({ icon: Icon, className }) {
  return (
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${className}`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <div className="py-20 bg-black" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Prashigroup</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We combine innovative design, premium quality, and exceptional service to create living spaces that exceed
            expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-purple-900/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FeatureIcon icon={Building2} className="bg-purple-600/20" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Premium Locations</h3>
                    <p className="text-white/70">
                      Our properties are situated in the most sought-after locations, offering convenience, security,
                      and excellent connectivity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-pink-900/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FeatureIcon icon={Award} className="bg-pink-600/20" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Quality Construction</h3>
                    <p className="text-white/70">
                      We use only the finest materials and work with top architects to ensure durability, aesthetics,
                      and functionality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-blue-900/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FeatureIcon icon={MapPin} className="bg-blue-600/20" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Strategic Locations</h3>
                    <p className="text-white/70">
                      Our properties are strategically located near essential amenities, business districts, and
                      transportation hubs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-yellow-900/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FeatureIcon icon={Ruler} className="bg-yellow-600/20" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Thoughtful Design</h3>
                    <p className="text-white/70">
                      Our spaces are designed with careful attention to detail, maximizing functionality while creating
                      beautiful living environments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-green-900/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FeatureIcon icon={Shield} className="bg-green-600/20" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Secure Investment</h3>
                    <p className="text-white/70">
                      Our properties offer excellent appreciation potential, making them not just homes but smart
                      long-term investments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-orange-900/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FeatureIcon icon={Clock} className="bg-orange-600/20" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Timely Delivery</h3>
                    <p className="text-white/70">
                      We pride ourselves on delivering projects on schedule, respecting your timelines and investment
                      plans.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
