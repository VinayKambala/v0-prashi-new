// components/PremiumFooter.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Importing specific Lucide icons for better control and potential tree-shaking
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for the overall footer section
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // Animation variants for individual items within the footer columns
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Data for social media links (kept for reference, but not rendered)
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/prashigroup" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/prashigroup" },
    { name: "Instagram", icon: "https://placehold.co/24x24/000000/FFFFFF?text=IG", href: "https://www.instagram.com/prashigroup" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/prashigroup" },
  ];

  // Data for quick navigation links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-black text-gray-300 text-sm py-12 md:py-16 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the footer is in view
        variants={footerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12"> {/* Changed to lg:grid-cols-3 */}

          {/* Column 1: Logo & About */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative h-14 w-14 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src="/logo.svg"
                    alt="Prashi Group Logo"
                    width={36}
                    height={36}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-1">
                <div
                  className="font-serif text-xl md:text-2xl text-white leading-tight"
                  style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
                >
                  <span className="text-gold font-bold tracking-wide">Prashi</span>
                  <span className="font-light ml-1 tracking-wide">group</span>
                </div>
                <div
                  className="text-xs md:text-sm font-light tracking-[0.1em] text-gray-400/80 uppercase mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  on the move always
                </div>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm mt-4">
              A leading construction company based in Bangalore, with 15+ years of experience in delivering high-quality residential and commercial projects.
            </p>
          </motion.div>

          {/* Column 2: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-gold/20 pb-2 inline-block">Contact Info</h3>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <a href="tel:+918971199588" className="hover:text-gold transition-colors duration-300">
                +91 89711 99588
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <a href="mailto:info@prashigroup.com" className="hover:text-gold transition-colors duration-300">
                info@prashigroup.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <address className="not-italic text-gray-400">
                21, Whitefield-Hoskote Rd,<br />
                Krishnarajapuram, Bengaluru, KA 560066
              </address>
            </div>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-gold/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-gold transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 text-gold opacity-70 group-hover:opacity-100 transform group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Removed Column 4: Social Media & Newsletter (Optional) */}
        </div>

        {/* Bottom Bar - Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500"
        >
          &copy; {currentYear} Prashi Group. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default PremiumFooter;
