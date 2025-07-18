import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-image-elegant.jpg"
            alt="About Prashi Group - Elegant Real Estate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-light mb-8 text-white drop-shadow-lg">About Us</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Prashi Group is a renowned name in Bangalore's real estate sector with over a decade of experience. Our
              commitment to excellence has led to the successful development of numerous residential and commercial
              projects in prime locations across the city.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-xl">
                <div className="text-3xl font-bold text-amber-400 mb-2">15+</div>
                <p className="text-white/90 text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-xl">
                <div className="text-3xl font-bold text-amber-400 mb-2">25+</div>
                <p className="text-white/90 text-sm uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-xl">
                <div className="text-3xl font-bold text-amber-400 mb-2">1000+</div>
                <p className="text-white/90 text-sm uppercase tracking-wider">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
