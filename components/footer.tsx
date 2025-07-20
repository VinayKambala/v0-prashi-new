import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-[#000c18] text-white pt-16 pb-8 border-t border-[#d4af37]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo variant="text-only" size="md" textColor="light" className="inline-block mb-6" />
            <p className="text-white/70 mb-6">Your Heart's Destination</p>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4 uppercase tracking-wider">Quick Links</h3>
            <div className="w-12 h-[1px] bg-[#d4af37] mb-6"></div>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4 uppercase tracking-wider">Projects</h3>
            <div className="w-12 h-[1px] bg-[#d4af37] mb-6"></div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/projects?status=ongoing"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Ongoing
                </Link>
              </li>
               <li>
                <Link
                  href="/projects?status=completed"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Completed
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?status=upcoming"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4 uppercase tracking-wider">Contact Us</h3>
            <div className="w-12 h-[1px] bg-[#d4af37] mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#d4af37] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/70">
                  100 Main Street, Whitefield, <br />
                  Bengaluru, Karnataka 560066
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#d4af37] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#d4af37] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white/70">info@prashigroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#d4af37]/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">© 2025 Prashigroup. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-white/50 hover:text-[#d4af37] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/50 hover:text-[#d4af37] text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/50 hover:text-[#d4af37] text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
