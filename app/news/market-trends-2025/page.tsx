import { ArrowLeft, Calendar, User, TrendingUp, MapPin, DollarSign, Lightbulb } from "lucide-react";

export default function MarketTrends2025Page() {
  return (
    <div className="min-h-screen bg-gray-50 font-['Inter'] pt-8">
      {/* Header */}
      <div className="bg-white shadow-md rounded-b-lg">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10">
          <a href="/news" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-6 rounded-md px-3 py-1.5 hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Back to News</span>
          </a>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Bangalore Real Estate Market Trends 2025
            </h1>
            <p className="text-lg text-gray-700">
              Discover the latest trends shaping Bangalore's real estate market in 2025, including price movements, emerging localities, and investment opportunities.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <span>Market Research Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Blog Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 sm:p-10 lg:p-12">
            <article className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl leading-relaxed text-gray-800 mb-8">
                Bangalore, India's Silicon Valley, continues to be a dynamic hub for real estate investment. As we move into 2025, several key trends are shaping its property landscape. Understanding these trends is crucial for both prospective homebuyers and investors looking to maximize their returns.
              </p>

              <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
                <TrendingUp className="w-7 h-7 text-blue-600" /> 1. Price Movements and Appreciation
              </h2>
              <p>
                The Bangalore real estate market in 2025 is expected to see continued appreciation, albeit at a moderate pace compared to previous years. Demand remains strong, particularly in the mid-segment and affordable housing categories.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Residential Segment:</strong> Steady growth driven by IT sector employment and inward migration.</li>
                <li><strong>Commercial Segment:</strong> Sustained demand for office spaces, especially in peripheral business districts.</li>
                <li><strong>Luxury Market:</strong> Niche demand, but with increasing interest from HNIs and NRIs.</li>
              </ul>
              <p className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-md">
                <strong>Insight:</strong> Micro-markets with strong infrastructure development and connectivity are likely to outperform.
              </p>

              <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
                <MapPin className="w-7 h-7 text-green-600" /> 2. Emerging Localities and Growth Corridors
              </h2>
              <p>
                Several areas are emerging as hotbeds for real estate activity due to planned infrastructure projects, new tech parks, and improved connectivity.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>North Bangalore:</strong> Driven by Kempegowda International Airport expansion and upcoming IT/Aerospace parks.</li>
                <li><strong>East Bangalore:</strong> Continued growth due to existing IT corridors (Whitefield, Outer Ring Road) and robust social infrastructure.</li>
                <li><strong>South Bangalore:</strong> Mature market with stable appreciation, attracting families seeking established communities.</li>
                <li><strong>West Bangalore:</strong> Gaining traction with improved metro connectivity and industrial growth.</li>
              </ul>
              <p className="mt-4">
                Investors should look beyond the traditional hotspots and explore these developing corridors for higher long-term returns.
              </p>

              <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
                <DollarSign className="w-7 h-7 text-purple-600" /> 3. Investment Opportunities
              </h2>
              <p>
                From residential apartments to plotted developments and commercial spaces, Bangalore offers diverse investment avenues.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Affordable and Mid-Segment Housing:</strong> High demand, good rental yields, and steady appreciation.
                </li>
                <li>
                  <strong>Plotted Developments:</strong> Strong long-term investment potential, especially in areas with clear title and approvals.
                </li>
                <li>
                  <strong>Commercial Properties:</strong> Retail and office spaces in strategic locations continue to offer attractive returns.
                </li>
                <li>
                  <strong>REITs (Real Estate Investment Trusts):</strong> An alternative for those looking for exposure to commercial real estate without direct ownership.
                </li>
              </ul>
              <p className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-400 text-purple-800 rounded-md">
                <strong>Diversify your portfolio</strong> by considering a mix of property types and locations.
              </p>

              <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
                <Lightbulb className="w-7 h-7 text-orange-600" /> 4. Impact of Infrastructure and Policy
              </h2>
              <p>
                Government initiatives and infrastructure projects play a pivotal role in shaping Bangalore's real estate future.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Metro Rail Expansion:</strong> Enhancing connectivity and driving property value along new corridors.</li>
                <li><strong>Peripheral Ring Road (PRR) & Satellite Town Ring Road (STRR):</strong> Improving regional connectivity and opening up new development zones.</li>
                <li><strong>RERA Compliance:</strong> Continues to foster transparency and accountability, boosting buyer confidence.</li>
                <li><strong>Affordable Housing Policies:</strong> Encouraging development in specific segments to meet housing demand.</li>
              </ul>
              <p className="mt-4">
                Stay updated on these developments as they directly influence property values and investment viability.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mt-12 shadow-inner">
                <h3 className="text-xl font-bold text-green-800 flex items-center gap-2 mb-3">
                  <Lightbulb className="w-6 h-6 text-green-700" /> Conclusion
                </h3>
                <p className="text-green-700 leading-relaxed">
                  Bangalore's real estate market in 2025 presents a landscape of opportunities for informed buyers and investors. While steady growth is anticipated, strategic decisions based on thorough market research, understanding emerging localities, and staying abreast of policy changes will be key to successful investments. Always consult with real estate professionals and legal experts to navigate the market effectively.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

  
    </div>
  );
}
