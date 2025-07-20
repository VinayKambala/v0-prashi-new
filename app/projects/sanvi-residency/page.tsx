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
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  status: "Completed",
  completion: "Delivered",
  units: "48 units with Commencement and Occupancy Certificates.",
  description:
    "Sanvi Residency is a testament to our philosophy of building homes that inspire a better life. This G+3 complex offers 48 Vastu-compliant apartments, ensuring a harmonious and positive living environment. With uninterrupted power and water supply, and modern amenities, it's a perfect retreat from the city's hustle.",
  images: {
    hero: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
  const [activeTab, setActiveTab] = useState("highlights");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.images.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-500/40 flex items-center justify-center">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center text-white p-6 md:p-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
              {project.title}
            </h1>
            <p className="text-lg md:text-2xl mt-4 font-light max-w-2xl mx-auto">
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="absolute inset-0 flex flex-col items-center justify-end pb-12 pointer-events-none z-20">
        <div className="flex flex-wrap justify-center gap-4">
          {project.approvals.map((approval, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${approval.color} shadow-sm pointer-events-auto`}
            >
              {approval.icon}
              <div className="text-left">
                <div className="font-semibold text-sm">{approval.name}</div>
                <div className="text-xs opacity-80">{approval.number}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                A Better Way to Live
              </h2>
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
        </div>
      </section>

    {/* Details Section */}
<section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-blue-100">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6 sm:mb-12 tracking-tight">
      Explore the Details
    </h2>

    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      {/* Tabs List */}
      <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white rounded-xl shadow-lg p-2 sm:p-4 mb-6 sm:mb-8">
        {["highlights", "amenities", "specifications", "nearby"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="py-2 px-4 text-sm sm:text-base font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Highlights */}
      <TabsContent value="highlights" className="mt-6 sm:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
          {/* Highlight Card */}
          {[
            {
              icon: <MapPin className="w-10 h-10 text-blue-500 mb-3" />,
              title: "Prime Location",
              content: project.location,
            },
            {
              icon: <Building className="w-10 h-10 text-green-500 mb-3" />,
              title: "Vastu Compliant",
              content: project.type,
            },
            {
              icon: <Calendar className="w-10 h-10 text-red-500 mb-3" />,
              title: "Ready to Move",
              content: project.completion,
            },
          ].map(({ icon, title, content }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-5 rounded-lg shadow-lg text-center"
            >
              {icon}
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-700">{content}</p>
            </motion.div>
          ))}
        </div>
      </TabsContent>

      {/* Amenities */}
      <TabsContent value="amenities" className="mt-6 sm:mt-8">
        <h3 className="text-lg sm:text-2xl font-semibold text-center text-blue-700 mb-6">
          Modern Amenities
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
          {project.amenities.map((amenity, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white p-4 rounded-xl shadow text-center"
            >
              <CheckCircle className="w-6 h-6 text-blue-500 mb-2" />
              <span className="text-sm text-gray-700">{amenity}</span>
            </motion.div>
          ))}
        </div>
      </TabsContent>

      {/* Specifications */}
      <TabsContent value="specifications" className="mt-6 sm:mt-8">
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-blue-100 min-h-[24rem]">
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=1200"
            alt="Specifications Background"
            fill
            className="object-cover"
            style={{ zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/80 z-10" />
          <div className="relative z-20 p-4 sm:p-6 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-6">
              Detailed Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(project.specifications || {}).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/90 p-4 rounded-xl border border-blue-100 shadow-sm"
                >
                  <span className="text-blue-700 font-semibold text-base capitalize flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" /> {key}
                  </span>
                  <p className="text-sm text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Nearby */}
      <TabsContent value="nearby" className="mt-6 sm:mt-8">
        <h3 className="text-lg sm:text-2xl font-semibold text-center text-blue-700 mb-6">
          Convenience at Your Doorstep
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {project.nearbyLocations.map((location, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-4 rounded-xl shadow flex items-center gap-4 border border-blue-100"
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <Compass className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-gray-800">{location.name}</h4>
                <p className="text-sm text-gray-600">{location.distance}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
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
      {/* Enhanced Office Location Map */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-8 font-serif">
            Find Us in Bangalore
          </h3>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Map Image */}
            <div className="relative w-full md:w-1/2 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-blue-200">
              <Image
                src="/bangalore-city-map.png"
                alt="Sanvi Residency Location - Bangalore City Map"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
              {/* Overlay for effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none" />
              {/* Location Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex flex-col items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-800/90 text-white px-4 py-1 rounded text-sm whitespace-nowrap shadow-lg">
                    Sanvi Residency
                  </div>
                </div>
              </div>
            </div>
            {/* Map Details */}
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 p-6 rounded-xl shadow border border-blue-200 text-center">
                  <h4 className="text-blue-700 font-semibold mb-2">
                    Nearby Landmarks
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Elements Mall, Manyata Tech Park, Columbia Asia Hospital
                  </p>
                </div>
                <div className="bg-white/80 p-6 rounded-xl shadow border border-blue-200 text-center">
                  <h4 className="text-blue-700 font-semibold mb-2">
                    Transportation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Metro, Bus, Cab Services Available
                  </p>
                </div>
                <div className="bg-white/80 p-6 rounded-xl shadow border border-blue-200 text-center">
                  <h4 className="text-blue-700 font-semibold mb-2">Parking</h4>
                  <p className="text-gray-600 text-sm">
                    Ample parking space available
                  </p>
                </div>
                <div className="bg-white/80 p-6 rounded-xl shadow border border-blue-200 text-center">
                  <h4 className="text-blue-700 font-semibold mb-2">
                    Airport Access
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Kempegowda International Airport – 25 km
                  </p>
                </div>
              </div>
              {/* Direct link to Google Maps */}
              <div className="text-center mt-6">
                <a
                  href="https://www.google.com/maps/place/Sanvi+Residency/data=!4m2!3m1!1s0x0:0x88e4ce3b9ed742a1?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors font-medium bg-white/70 px-6 py-3 rounded-lg border border-blue-200 hover:border-blue-400 shadow"
                >
                  <MapPin className="h-5 w-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
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
