"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Building, Calendar, Users, Phone, Mail, CheckCircle, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const project = {
  id: 1,
  title: "Sanvi Sankalpam",
  subtitle: "Where Luxury Meets Serenity",
  location: "XQ9C+H9F, Nagondanahalli, Bengaluru, Karnataka 560067",
  type: "Residential Apartments",
  category: "completed",
  image: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  status: "Completed",
  completion: "Delivered",
  units: "70 Residential Units",
  description:
    "Sanvi Sankalpam is a symbol of our commitment to creating exceptional living spaces. Nestled in the calm neighborhood of Nagondanahalli, this project offers 70 premium 2 & 3 BHK apartments. Every detail is crafted to perfection, offering a tranquil retreat from the city's hustle while keeping you connected to all essentials.",
  images: {
    hero: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    floorPlan: "/sanvi-sankalpam-floor.jpeg",
    typicalFloors: "/sanvi-sankalpam-view.jpeg",
    gallery: [
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  },
  amenities: [
    "Rooftop Infinity Pool",
    "State-of-the-art Gymnasium",
    "Landscaped Zen Gardens",
    "24/7 Advanced Security",
    "100% Power Backup",
    "Multi-level Covered Parking",
    "Children's Adventure Zone",
    "Elegant Community Hall",
  ],
  specifications: {
    structure:
      "Seismic Zone-II compliant RCC framed structure with high-grade TMT steel.",
    walls: "8-inch external and 4.5-inch internal walls with solid concrete blocks.",
    flooring: "Premium vitrified tiles in all rooms; anti-skid ceramic in bathrooms.",
    kitchen: "Granite platform with stainless steel sink and provision for water purifier.",
    doors:
      "Teak wood main door frame with veneer shutter; seasoned wood for other doors.",
    windows: "UPVC windows with mosquito mesh and safety grills.",
    electrical:
      "Concealed copper wiring with modular switches and provision for AC in all bedrooms.",
    painting:
      "Premium emulsion for interiors and weather-proof paint for exteriors.",
    backup:
      "Generator backup for common areas, lifts, and 1 KVA for each apartment.",
    lifts: "Two high-speed automatic elevators from a reputed brand.",
    water: "24/7 water supply from borewells with a provision for Cauvery water.",
    toilets:
      "Designer ceramic tiles up to 7ft, with premium sanitary fittings from Jaquar/equivalent.",
    common: "Marble/granite flooring in common areas with stainless steel railings.",
  },
  nearbyLocations: [
    { name: "Nexus Whitefield Mall", distance: "5 km" },
    { name: "Manipal Hospital, Whitefield", distance: "6 km" },
    { name: "Vydehi Institute of Medical Sciences", distance: "7 km" },
    { name: "ITPL/ITPB Tech Parks", distance: "8 km" },
  ],
  approvals: [
    {
      name: "RERA Approved",
      number: "PRM/KA/RERA/1251/446/PR/210219/003940",
      icon: <CheckCircle className="w-7 h-7 text-green-600" />,
      color: "bg-green-50 text-green-700 border-green-200"
    },
    {
      name: "BBMP Approved",
      number: "BBMP/2023/54321",
      icon: <Building className="w-7 h-7 text-blue-600" />,
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      name: "A-Katha Property",
      number: "A-Katha/2023/98765",
      icon: <Compass className="w-7 h-7 text-purple-600" />,
      color: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ]
};

export default function SanviSankalpamPage() {
  const [activeTab, setActiveTab] = useState("amenities");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-end" style={{ backgroundImage: `url(${project.images.hero})` }}>
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
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${approval.color} shadow-sm bg-white/80`}
                >
                  {approval.icon}
                  <div className="text-left">
                    <div className="font-semibold text-xs">{approval.name}</div>
                    <div className="text-xs opacity-80">{approval.number}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About & Gallery */}
      <section className="py-14 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Welcome to Serenity</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800">{project.location}</h3>
                <p className="text-gray-500 text-sm">Prime Location</p>
              </div>
              <div className="flex flex-col items-center">
                <Building className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800">{project.units}</h3>
                <p className="text-gray-500 text-sm">Modern Apartments</p>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800">{project.completion}</h3>
                <p className="text-gray-500 text-sm">Status</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {project.images?.gallery?.slice(0, 4).map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Gallery image ${i + 1}`}
                width={300}
                height={200}
                className="rounded-lg shadow-2xl object-cover"
              />
            ))}
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
              <h3 className="text-2xl font-semibold text-center text-blue-700 mb-8">World-Class Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: "Rooftop Infinity Pool", img: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&w=600" },
                  { name: "State-of-the-art Gymnasium", img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&w=600" },
                  { name: "Landscaped Zen Gardens", img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&w=600" },
                  { name: "24/7 Advanced Security", img: "https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&w=600" },
                  { name: "100% Power Backup", img: "https://images.pexels.com/photos/257775/pexels-photo-257775.jpeg?auto=compress&w=600" },
                  { name: "Multi-level Covered Parking", img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&w=600" },
                  { name: "Children's Adventure Zone", img: "https://images.pexels.com/photos/160888/pexels-photo-160888.jpeg?auto=compress&w=600" },
                  { name: "Elegant Community Hall", img: "https://images.pexels.com/photos/1439226/pexels-photo-1439226.jpeg?auto=compress&w=600" },
                ].map((amenity, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center"
                  >
                    <div className="relative w-20 h-20 mb-3 rounded-xl overflow-hidden shadow">
                      <Image
                        src={amenity.img}
                        alt={amenity.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-blue-700">{amenity.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 relative h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
                <Image
                  src="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&w=1200"
                  alt="Amenities View"
                  fill
                  className="object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-100 min-h-[28rem]">
                {/* Background Image */}
                <Image
                  src={project.images.specifications}
                  alt="Specifications Background"
                  fill
                  className="object-cover"
                  style={{ zIndex: 0 }}
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/80 z-10" />
                {/* Content */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "Nexus Whitefield Mall", distance: "5 km", img: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=600" },
                  { name: "Manipal Hospital, Whitefield", distance: "6 km", img: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&w=600" },
                  { name: "Vydehi Institute of Medical Sciences", distance: "7 km", img: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&w=600" },
                  { name: "ITPL/ITPB Tech Parks", distance: "8 km", img: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&w=600" },
                ].map((location, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white p-6 rounded-2xl shadow-xl overflow-hidden relative group flex gap-4 items-center border border-blue-100"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow">
                      <Image
                        src={location.img}
                        alt={location.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{location.name}</h4>
                      <p className="text-blue-700 font-bold">{location.distance}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-8">
          <h3 className="text-2xl font-bold text-blue-700 font-serif">Find Us in Bangalore</h3>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-blue-200 hover:border-blue-400 transition-all duration-300 group">
            <Image
              src="/bangalore-city-map.png"
              alt="Sanvi Sankalpam Location - Bangalore City Map"
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
                  Sanvi Sankalpam
                </div>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/80 p-6 md:p-8 max-w-md text-center border border-blue-200 group-hover:border-blue-400 transition-all duration-300 rounded-xl shadow-lg">
                <h4 className="text-xl md:text-2xl font-serif font-light text-blue-700 mb-3">Visit Our Project</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Located in the peaceful Nagondanahalli area, close to Whitefield and major tech parks.
                </p>
                <div className="w-12 h-px bg-blue-300 mx-auto mb-3"></div>
                <a
                  href="https://www.google.com/maps/place/XQ9C%2BH9F+Sanvi+Sankalpam,+Nagondanahalli,+Bengaluru,+Karnataka+560067"
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
              <p className="text-blue-900/70 text-sm">Nexus Whitefield Mall, ITPL, Phoenix MarketCity</p>
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
              href="https://www.google.com/maps/place/XQ9C%2BH9F+Sanvi+Sankalpam,+Nagondanahalli,+Bengaluru,+Karnataka+560067"
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
    </div>
  );
}