import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Building2, 
  Star, 
  Award,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const projectStats = [
    { label: "All Projects", count: 6, filter: "all" },
    { label: "Under Construction", count: 0, filter: "ongoing" },
    { label: "Completed", count: 2, filter: "completed" },
    { label: "Upcoming", count: 4, filter: "upcoming" },
  ];

  const achievements = [
    { icon: Building2, label: "15+ Years Experience", value: "15+" },
    { icon: Award, label: "Projects Delivered", value: "50+" },
    { icon: Star, label: "Client Satisfaction", value: "98%" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
        >
          {/* Top Section - Logo & Description */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="flex flex-col items-center mb-8">
              {/* Enhanced Logo */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full blur-2xl"></div>
                <div className="relative h-20 w-20 md:h-24 md:w-24 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl">
                  <Image
                    src="/logo.svg"
                    alt="Prashi Group Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg?height=48&width=48&text=P";
                    }}
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="mb-4">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2"
                  style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
                >
                  <span className="text-gold font-bold tracking-wide">Prashi</span>
                  <span className="font-light ml-2 tracking-wide">group</span>
                </h2>
                <p
                  className="text-lg md:text-xl text-gray-300 tracking-[0.2em] uppercase font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  on the move always
                </p>
              </div>

              {/* Achievements Row */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-white mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* About Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-serif text-xl lg:text-2xl font-semibold">
                  About Prashigroup
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Leading construction company in Bangalore with over{" "}
                  <span className="text-gold font-semibold">15 years of experience</span> in 
                  delivering premium residential and commercial projects with uncompromising 
                  quality and innovative design.
                </p>
                <p>
                  Our commitment to excellence and customer satisfaction has made us a 
                  <span className="text-gold font-semibold"> trusted name</span> in the 
                  construction industry.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-gold mb-1">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-gold mb-1">50+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
              </div>
            </motion.div>

            {/* Projects Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-serif text-xl lg:text-2xl font-semibold">
                  Our Projects
                </h3>
              </div>

              <div className="space-y-3">
                {projectStats.map((project, index) => (
                  <motion.div
                    key={project.label}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={`/projects?filter=${project.filter}`}
                      className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:from-gold/10 hover:to-gold/5 rounded-xl border border-gray-700/50 hover:border-gold/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gold transition-colors duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {project.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gradient-to-r from-gold/20 to-gold/10 text-gold px-3 py-1 rounded-full font-semibold border border-gold/20">
                          {project.count}
                        </span>
                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-gold opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* View All Projects Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-2"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium group"
                >
                  View All Projects
                  <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-serif text-xl lg:text-2xl font-semibold">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-4">
                {/* Email Contacts */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gold/30 transition-all duration-300 group">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">General Inquiry</div>
                      <a
                        href="mailto:info@prashigroup.com"
                        className="text-gray-300 hover:text-gold transition-colors duration-300 group-hover:text-white"
                      >
                        info@prashigroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gold/30 transition-all duration-300 group">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">Sales Inquiry</div>
                      <a
                        href="mailto:sales@prashigroup.com"
                        className="text-gray-300 hover:text-gold transition-colors duration-300 group-hover:text-white"
                      >
                        sales@prashigroup.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Contacts */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gold/30 transition-all duration-300 group">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">Sales Phone</div>
                      <a
                        href="tel:+918971199588"
                        className="text-gray-300 hover:text-gold transition-colors duration-300 group-hover:text-white font-medium"
                      >
                        +91 89711 99588
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gold/30 transition-all duration-300 group">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">Office Phone</div>
                      <a
                        href="tel:+918971199577"
                        className="text-gray-300 hover:text-gold transition-colors duration-300 group-hover:text-white font-medium"
                      >
                        +91 89711 99577
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-2">Office Address</div>
                    <address className="text-gray-300 not-italic leading-relaxed">
                      21, Whitefield - Hoskote Rd,<br />
                      Vastu Bhoomi, Krishnarajapuram,<br />
                      Bengaluru, Karnataka 560066
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-center md:text-left">
                <p>
                  &copy; {currentYear} <span className="text-gold font-semibold">Prashigroup Construction</span>. 
                  All rights reserved.
                </p>
                <p className="text-sm mt-1">
                  Premium Construction Company in Bangalore
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default PremiumFooter;