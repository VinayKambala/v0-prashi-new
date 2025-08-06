"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"
import { MapPin, Building, Calendar, Phone, Mail, CheckCircle, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const project = {
  id: 3,
  title: "Prashi Residency",
  subtitle: "A New Benchmark in Urban Living",
  location: "Belathur, Whitefield, Bangalore, Karnataka",
  type: "Residential Apartments",
  category: "ongoing",
  image: "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  status: "Ongoing",
  completion: "Q3 2025",
  units: "Spacious 2 & 3 BHK Apartments",
  description:
    "Prashi Residency is set to be a landmark project in the vibrant locale of Whitefield. Designed for modern families, it offers spacious 2 and 3 BHK apartments with a focus on community living. With its contemporary design, thoughtful amenities, and strategic location, Prashi Residency is poised to become the most sought-after address in East Bangalore.",
  images: {
    hero: "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    floorPlan: "/prashi-residency-floor.jpeg",
    typicalFloors: "/prashi-residency-view.jpeg",
    gallery: [
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  },
  amenities: [
    "Modern Clubhouse",
    "Swimming Pool with Deck",
    "Fully Equipped Gym",
    "Landscaped Parks",
    "Children's Play Area",
    "Indoor Games Room",
    "24/7 CCTV Surveillance",
    "Intercom Facility",
    "Rainwater Harvesting",
    "Ample Visitor Parking",
    "EV Charging Points",
    "Senior Citizen's Corner",
  ],
  specifications: {
    structure: "Earthquake-resistant RCC framed structure.",
    walls: "Eco-friendly cellular concrete blocks for all walls.",
    flooring: "Large format vitrified tiles for a seamless look.",
    kitchen: "Provision for modular kitchen with multiple electrical points.",
    doors: "Engineered wood doors with premium laminate finish.",
    windows: "Powder-coated aluminum sliding windows with tinted glass.",
    electrical: "Fire-resistant electrical wires of a reputed brand.",
    painting: "Low VOC paints for a healthy indoor environment.",
    backup: "Full power backup for common areas and 1KW for each apartment.",
    lifts: "High-speed passenger and service lifts in each block.",
    water: "Treated water supply through an efficient water treatment plant.",
    toilets: "Wall-mounted sanitary ware and CP fittings from top brands.",
    common: "Aesthetically designed lobbies and common areas.",
  },
  nearbyLocations: [
    { name: "Hope Farm Metro Station", distance: "2 km", mapsUrl: "https://maps.app.goo.gl/3bY7Y8vV7fW6qX7H6" },
    { name: "Prestige Shantiniketan Mall", distance: "3 km", mapsUrl: "https://maps.app.goo.gl/9cX7Y8vV7fW6qX7H7" },
    { name: "Sathya Sai Hospital", distance: "4 km", mapsUrl: "https://maps.app.goo.gl/5dY8Y9wW8gX7rY8I8" },
    { name: "Whitefield Global School", distance: "1 km", mapsUrl: "https://maps.app.goo.gl/4eZ9Z0xX0iY8sZ9J9" },
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
      number: "BBMP/2025/12345",
      icon: <Building className="w-7 h-7 text-blue-600" />,
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      name: "A-Katha Property",
      number: "A-Katha/2025/67890",
      icon: <Compass className="w-7 h-7 text-purple-600" />,
      color: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ],
};

export default function PrashiResidencyPage() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    amenities: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add("bg-white", "shadow-md");
          nav.classList.remove("bg-transparent");
        } else {
          nav.classList.add("bg-transparent");
          nav.classList.remove("bg-white", "shadow-md");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeTab, setActiveTab] = useState("amenities");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    

      {/* Hero Section */}
      <section ref={sectionRefs.home} className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: `url(${project.images?.hero})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex items-center justify-center">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
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
            <div className="flex flex-wrap justify-center gap-4 mt-8">
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
                  </div>
                </motion.div>
              ))}
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Enquire Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A New Era of Living</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">{project.location}</h3>
                  <p className="text-gray-500">Prime Location</p>
                </div>
                <div className="flex flex-col items-center">
                  <Building className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">{project.units}</h3>
                  <p className="text-gray-500">Modern Apartments</p>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">{project.completion}</h3>
                  <p className="text-gray-500">Expected Completion</p>
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

      {/* Amenities & Specifications Section */}
      <section ref={sectionRefs.amenities} className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-12 tracking-tight">Explore the Details</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex justify-center gap-4 bg-white rounded-xl shadow-lg p-4 mb-10">
              <TabsTrigger
                value="amenities"
                className="py-3 px-6 text-lg font-semibold data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-full transition-all"
              >
                Amenities
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="py-3 px-6 text-lg font-semibold data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-full transition-all"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="nearby"
                className="py-3 px-6 text-lg font-semibold data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-full transition-all"
              >
                Nearby
              </TabsTrigger>
            </TabsList>
            <TabsContent value="amenities" className="mt-8">
              <h3 className="text-2xl font-semibold text-center text-purple-700 mb-8">World-Class Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: "Modern Clubhouse", img: "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg?auto=compress&w=600" },
                  { name: "Swimming Pool with Deck", img: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&w=600" },
                  { name: "Fully Equipped Gym", img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&w=600" },
                  { name: "Landscaped Parks", img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&w=600" },
                  { name: "Children's Play Area", img: "https://images.pexels.com/photos/160888/pexels-photo-160888.jpeg?auto=compress&w=600" },
                  { name: "Indoor Games Room", img: "https://images.pexels.com/photos/5303587/pexels-photo-5303587.jpeg?auto=compress&w=600" },
                  { name: "24/7 CCTV Surveillance", img: "https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&w=600" },
                  { name: "Intercom Facility", img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&w=600" },
                  { name: "Rainwater Harvesting", img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=600" },
                  { name: "Ample Visitor Parking", img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&w=600" },
                  { name: "EV Charging Points", img: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&w=600" },
                  { name: "Senior Citizen's Corner", img: "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&w=600" },
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
                    <span className="font-medium text-gray-700">{amenity.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 relative h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-100">
                <Image
                  src="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&w=1200"
                  alt="Amenities View"
                  fill
                  className="object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-100 min-h-[28rem]">
                {/* Background Image */}
                <Image
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=1200"
                  alt="Specifications Background"
                  fill
                  className="object-cover"
                  style={{ zIndex: 0 }}
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-purple-50/80 to-purple-100/80 z-10" />
                {/* Content */}
                <div className="relative z-20 p-8 md:p-16">
                  <h3 className="text-3xl font-extrabold text-purple-700 mb-10 text-center tracking-tight uppercase drop-shadow-lg">
                    Detailed Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(project.specifications || {}).map(([key, value], i) => (
                      <div
                        key={key}
                        className="bg-white/80 rounded-2xl shadow-md border border-purple-100 p-6 flex flex-col gap-2 hover:shadow-xl transition-shadow duration-300"
                      >
                        <span className="flex items-center gap-2 font-semibold text-purple-700 text-lg capitalize">
                          <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
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
              <h3 className="text-2xl font-semibold text-center text-purple-700 mb-8">Convenience at Your Doorstep</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { ...project.nearbyLocations[0], img: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=600" },
                  { ...project.nearbyLocations[1], img: "https://images.pexels.com/photos/264706/pexels-photo-264706.jpeg?auto=compress&w=600" },
                  { ...project.nearbyLocations[2], img: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&w=600" },
                  { ...project.nearbyLocations[3], img: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&w=600" },
                ].map((location, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white p-6 rounded-2xl shadow-xl overflow-hidden relative group flex gap-4 items-center border border-purple-100"
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
                      <p className="text-gray-600 font-bold">{location.distance}</p>
                    
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={sectionRefs.gallery} className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Explore Prashi Residency</h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper"
          >
            {project.images.gallery.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-hdr105 transition-transform duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Interested in making Prashi Residency your home? Contact us today to learn more or schedule a visit.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>+91 96064713920</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6" />
                <span>info@prashigroup.com</span>
              </div>
            </div>
            <Link href = "/contact?project=prashi-residency">
            <Button className="mt-8 bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Schedule a Visit
            </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto space-y-6 px-4 sm:px-8">
          <h3 className="text-2xl font-bold text-purple-700 font-serif">Find Us in Bangalore</h3>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-purple-200 hover:border-purple-400 transition-all duration-300 group">
            <Image
              src="/bangalore-city-map.png"
              alt="Prashi Residency Location - Bangalore City Map"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            />

            {/* Interactive Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            {/* Location Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-900/90 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Prashi Residency
                </div>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/80 p-6 md:p-8 max-w-md text-center border border-purple-200 group-hover:border-purple-400 transition-all duration-300 rounded-xl shadow-lg">
                <h4 className="text-xl md:text-2xl font-serif font-light text-purple-700 mb-3">Visit Our Project</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Located in Belathur, Whitefield, close to major tech parks and amenities.
                </p>
                <div className="w-12 h-px bg-purple-300 mx-auto mb-3"></div>
                <a
                  href="https://www.google.com/maps/place/Belathur,+Whitefield,+Bangalore,+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 transition-colors text-sm inline-flex items-center gap-2 font-medium"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h4 className="text-purple-700 font-semibold mb-2">Nearby Landmarks</h4>
              <p className="text-purple-900/70 text-sm">
                Hope Farm Metro, Prestige Shantiniketan Mall, Sathya Sai Hospital
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h4 className="text-purple-700 font-semibold mb-2">Transportation</h4>
              <p className="text-purple-900/70 text-sm">Metro, Bus, Cab Services Available</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h4 className="text-purple-700 font-semibold mb-2">Parking</h4>
              <p className="text-purple-900/70 text-sm">Ample parking space available</p>
            </div>
          </div>

          {/* Direct link to Google Maps */}
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/Belathur,+Whitefield,+Bangalore,+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors font-medium bg-purple-50 px-6 py-3 rounded-lg border border-purple-200 hover:border-purple-400 mt-4"
            >
              <MapPin className="h-5 w-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm">© 2025 Prashi Residency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}