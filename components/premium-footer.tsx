import Link from "next/link"

const PremiumFooter = () => {
  return (
    <footer className="bg-dark-gray py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-warm-white font-serif text-lg lg:text-xl mb-4">About Prashigroup</h3>
            <p className="text-warm-white/70">
              Leading construction company in Bangalore with over 15 years of experience in delivering premium
              residential and commercial projects with uncompromising quality and innovative design.
            </p>
            <p className="text-warm-white/70">
              Our commitment to excellence and customer satisfaction has made us a trusted name in the construction
              industry.
            </p>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h3 className="text-warm-white font-serif text-lg lg:text-xl mb-4">Our Projects</h3>
            <div className="space-y-2">
              <Link
                href="/projects?filter=all"
                className="group flex items-center justify-between text-warm-white/70 hover:text-gold transition-colors duration-300"
              >
                <span>All Projects</span>
                <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">6</span>
              </Link>
              <Link
                href="/projects?filter=ongoing"
                className="group flex items-center justify-between text-warm-white/70 hover:text-gold transition-colors duration-300"
              >
                <span>Under Construction</span>
                <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">0</span>
              </Link>
              <Link
                href="/projects?filter=completed"
                className="group flex items-center justify-between text-warm-white/70 hover:text-gold transition-colors duration-300"
              >
                <span>Completed</span>
                <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">2</span>
              </Link>
              <Link
                href="/projects?filter=upcoming"
                className="group flex items-center justify-between text-warm-white/70 hover:text-gold transition-colors duration-300"
              >
                <span>Upcoming</span>
                <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">4</span>
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-warm-white font-serif text-lg lg:text-xl mb-4">Contact Information</h3>
            <p className="text-warm-white/70">
              Email:{" "}
              <a href="mailto:info@prashigroup.com" className="hover:text-gold transition-colors duration-300">
                info@prashigroup.com
              </a>
            </p>
            <p className="text-warm-white/70">
              Sales:{" "}
              <a href="mailto:sales@prashigroup.com" className="hover:text-gold transition-colors duration-300">
                sales@prashigroup.com
              </a>
            </p>
            <p className="text-warm-white/70">
              Phone:{" "}
              <a href="tel:+918971199588" className="hover:text-gold transition-colors duration-300">
                +91 89711 99588
              </a>
            </p>
            <p className="text-warm-white/70">
              Office:{" "}
              <a href="tel:+918971199577" className="hover:text-gold transition-colors duration-300">
                +91 89711 99577
              </a>
            </p>
            <p className="text-warm-white/70">
              Address: 21, Whitefield - Hoskote Rd, Vastu Bhoomi, Krishnarajapuram, Bengaluru, Karnataka 560066
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-warm-white/10 pt-8 text-center text-warm-white/50">
          &copy; {new Date().getFullYear()} Prashigroup Construction. All rights reserved. | Premium Construction
          Company in Bangalore
        </div>
      </div>
    </footer>
  )
}

export default PremiumFooter
