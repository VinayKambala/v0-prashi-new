"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Building, Calendar, Compass, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const project = {
  id: 2,
  title: "Sanvi Residency",
  subtitle: "Your Dream Dwelling Awaits",
  location:
    "33, Horamavu Agara Road, Rajanna Layout, Bangalore, Karnataka, 560043",
  type: "Residential Apartments",
  category: "completed",
  image:
    "/sanvi-residency.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  status: "Completed",
  completion: "Delivered",
  units: "48 units with Commencement and Occupancy Certificates.",
  description:
    "Sanvi Residency is a testament to our philosophy of building homes that inspire a better life. This G+3 complex offers 48 Vastu-compliant apartments, ensuring a harmonious and positive living environment. With uninterrupted power and water supply, and modern amenities, it's a perfect retreat from the city's hustle.",
  images: {
    hero: "/sanvi-residency.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    floorPlan: "/sanvi-residency-floor.png",
    typicalFloors: "/sanvi-residency-view.png",
    gallery: [
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  amenities: [
    "G+3 Apartment Complex",
    "100% Vastu Compliant",
    "Uninterrupted Power Supply",
    "24/7 Water Supply",
    "Modern Architecture",
    "Spacious Bedrooms",
    "Bright Living Rooms",
    "Premium Finishes",
    "Covered Parking",
    "Landscaped Gardens",
    "Advanced Security Systems",
    "Community Spaces",
  ],
  specifications: {
    structure: "G+3 apartment complex with a robust RCC framed structure.",
    walls: "High-quality construction with superior insulation.",
    flooring: "Durable and elegant vitrified tiles in all living areas.",
    kitchen: "Modular kitchen with granite countertops and premium fittings.",
    doors: "High-quality doors with modern and secure hardware.",
    windows: "Large UPVC windows for ample natural light and ventilation.",
    electrical:
      "Concealed wiring with sufficient power points and safety features.",
    painting: "Long-lasting premium paints for both interiors and exteriors.",
    backup: "Reliable power backup system for all essential services.",
    lifts: "Modern and efficient elevator systems for your convenience.",
    water: "Continuous 24/7 water supply with dedicated storage solutions.",
    toilets: "Contemporary bathroom fittings with high-quality tiles.",
    common: "Well-designed and maintained common areas with quality finishes.",
  },
  nearbyLocations: [
    { name: "Elements Mall", distance: "4 km" },
    { name: "Manyata Tech Park", distance: "8 km" },
    { name: "Columbia Asia Hospital", distance: "7 km" },
    { name: "Kempegowda International Airport", distance: "25 km" },
  ],
  approvals: [
    {
      name: "RERA Approved",
      number: "PRM/KA/RERA/1251/446/PR/210219/003940",
      icon: <CheckCircle className="w-7 h-7 text-green-600" />,
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      name: "BBMP Approved",
      number: "BBMP/2023/54321",
      icon: <Building className="w-7 h-7 text-blue-600" />,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      name: "A-Katha Property",
      number: "A-Katha/2023/98765",
      icon: <Compass className="w-7 h-7 text-purple-600" />,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ],
};

export default function SanviResidencyPage() {
  const [activeTab, setActiveTab] = useState("amenities");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${project.images.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-500/40 flex flex-col justify-end">
          <div className="container mx-auto px-4 sm:px-8 max-w-5xl pb-10">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 text-white drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-lg md:text-2xl text-blue-100">{project.subtitle}</p>
            </motion.div>
            {/* Approvals */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.approvals.map((approval, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${approval.color} shadow-sm`}
                >
                  {approval.icon}
                  <div className="text-left">
                    <div className="font-semibold text-sm">{approval.name}</div>
                    <div className="text-xs opacity-80">{approval.number}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About & Highlights */}
      <section className="py-14 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">A Better Way to Live</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.location}
                </h3>
                <p className="text-gray-500">Prime Location</p>
              </div>
              <div className="flex flex-col items-center">
                <Building className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.units}
                </h3>
                <p className="text-gray-500">Modern Apartments</p>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.completion}
                </h3>
                <p className="text-gray-500">Status</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={project.images.specifications}
              alt="Project Overview"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-14 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-8 sm:mb-12 tracking-tight">
            Explore the Details
          </h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex justify-center gap-4 bg-white rounded-xl shadow-lg p-4 mb-10">
              <TabsTrigger
                value="amenities"
                className="py-3 px-6 text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all"
              >
                Amenities
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="py-3 px-6 text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="nearby"
                className="py-3 px-6 text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all"
              >
                Nearby
              </TabsTrigger>
            </TabsList>
            <TabsContent value="amenities" className="mt-8">
              <h3 className="text-2xl font-semibold text-center text-blue-700 mb-8">Modern Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {project.amenities.map((amenity, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-500 mb-2" />
                    <span className="font-medium text-blue-700">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-100 min-h-[28rem]">
                <Image
                  src={project.images.specifications}
                  alt="Specifications Background"
                  fill
                  className="object-cover"
                  style={{ zIndex: 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/80 z-10" />
                <div className="relative z-20 p-8 md:p-16">
                  <h3 className="text-3xl font-extrabold text-blue-700 mb-10 text-center tracking-tight uppercase drop-shadow-lg">
                    Detailed Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(project.specifications || {}).map(([key, value], i) => (
                      <div
                        key={key}
                        className="bg-white/80 rounded-2xl shadow-md border border-blue-100 p-6 flex flex-col gap-2 hover:shadow-xl transition-shadow duration-300"
                      >
                        <span className="flex items-center gap-2 font-semibold text-blue-700 text-lg capitalize">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          {key}
                        </span>
                        <p className="text-gray-700 text-base pl-7">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="nearby" className="mt-8">
              <h3 className="text-2xl font-semibold text-center text-blue-700 mb-8">Convenience at Your Doorstep</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {project.nearbyLocations.map((location, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-xl overflow-hidden relative group flex gap-4 items-center border border-blue-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Compass className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-gray-800">{location.name}</h4>
                      <p className="text-blue-700 font-bold">{location.distance}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          {/* Approvals Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl border bg-green-50 text-green-700 border-green-200 shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="font-semibold">RERA Approved</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl border bg-blue-50 text-blue-700 border-blue-200 shadow-sm">
              <Building className="w-6 h-6 text-blue-600" />
              <span className="font-semibold">BBMP Approved</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl border bg-purple-50 text-purple-700 border-purple-200 shadow-sm">
              <Compass className="w-6 h-6 text-purple-600" />
              <span className="font-semibold">A-Katha Property</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {project.images.gallery.map((image, i) => (
              <div
                key={i}
                className="relative h-72 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-8">
          <h3 className="text-2xl font-bold text-blue-700 font-serif">Find Us in Bangalore</h3>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-blue-200 hover:border-blue-400 transition-all duration-300 group">
            <Image
              src="/bangalore-city-map.png"
              alt="Sanvi Residency Location - Bangalore City Map"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            />
            {/* Interactive Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            {/* Location Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-900/90 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Sanvi Residency
                </div>
              </div>
            </div>
            {/* Interactive Elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/80 p-6 md:p-8 max-w-md text-center border border-blue-200 group-hover:border-blue-400 transition-all duration-300 rounded-xl shadow-lg">
                <h4 className="text-xl md:text-2xl font-serif font-light text-blue-700 mb-3">Visit Our Project</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Located in Horamavu, close to Manyata Tech Park, Elements Mall, and major city hubs.
                </p>
                <div className="w-12 h-px bg-blue-300 mx-auto mb-3"></div>
                <a
                  href="https://www.google.com/maps/place/Sanvi+Residency/data=!4m2!3m1!1s0x0:0x88e4ce3b9ed742a1?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-colors text-sm inline-flex items-center gap-2 font-medium"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="text-blue-700 font-semibold mb-2">Nearby Landmarks</h4>
              <p className="text-blue-900/70 text-sm">Elements Mall, Manyata Tech Park, Columbia Asia Hospital</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="text-blue-700 font-semibold mb-2">Transportation</h4>
              <p className="text-blue-900/70 text-sm">Metro, Bus, Cab Services Available</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="text-blue-700 font-semibold mb-2">Parking</h4>
              <p className="text-blue-900/70 text-sm">Ample parking space available</p>
            </div>
          </div>
          {/* Direct link to Google Maps */}
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/Sanvi+Residency/data=!4m2!3m1!1s0x0:0x88e4ce3b9ed742a1?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors font-medium bg-blue-50 px-6 py-3 rounded-lg border border-blue-200 hover:border-blue-400 mt-4"
            >
              <MapPin className="h-5 w-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Interested in Sanvi Residency? Contact us today to learn more or
              schedule a visit.
            </p>
            <Button className="mt-8 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Schedule a Visit
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
