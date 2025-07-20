import { ArrowLeft, Calendar, User, Gavel, Lightbulb, ShieldCheck, TrendingUp, Handshake } from "lucide-react";

export default function RERAKarnatakaCompliancePage() {
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
              Understanding RERA Compliance in Karnataka
            </h1>
            <p className="text-lg text-gray-700">
              A detailed overview of RERA regulations in Karnataka and how they protect property buyers' interests.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>January 5, 2025</span> {/* Updated date */}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <span>Legal Team</span> {/* Updated author */}
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
                The Real Estate (Regulation and Development) Act, 2016 (RERA) was enacted to bring much-needed transparency, accountability, and efficiency to the Indian real estate sector. In Karnataka, the Karnataka Real Estate Regulatory Authority (K-RERA) is the governing body responsible for implementing these regulations, significantly safeguarding the interests of property buyers. This document provides a detailed overview of RERA compliance in Karnataka and its protective mechanisms.
              </p>

              <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
                <Gavel className="w-7 h-7 text-blue-800" /> Key Provisions of K-RERA
              </h2>
              <p>
                K-RERA has introduced several crucial provisions that empower homebuyers and regulate developers, ensuring a more equitable and transparent real estate market.
              </p>

              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">
                <ShieldCheck className="w-6 h-6 text-green-600" /> 1. Mandatory Project Registration
              </h3>
              <p>
                One of the foundational aspects of RERA is the mandatory registration of real estate projects. All commercial and residential projects exceeding 500 sq. meters or having more than eight units must be registered with K-RERA. This ensures that only legitimate and approved projects are advertised and sold, significantly reducing the risk of fraudulent schemes and unverified developments.
              </p>

              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" /> 2. Transparency in Information
              </h3>
              <p>
                Developers are now legally obligated to disclose comprehensive project details on the official K-RERA website. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Approved layout plans and building plans.</li>
                <li>Land title status and any encumbrances.</li>
                <li>Real-time construction progress and expected completion timelines.</li>
                <li>Details of approvals from various government authorities.</li>
                <li>Information about the developer's track record.</li>
              </ul>
              <p className="mt-4">
                This level of transparency empowers buyers with crucial information, enabling them to make well-informed decisions and avoid misleading marketing tactics.
              </p>

              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">
                <TrendingUp className="w-6 h-6 text-purple-600" /> 3. Escrow Account Requirement
              </h3>
              <p>
                To safeguard buyers' investments, RERA mandates that developers deposit 70% of the funds collected from homebuyers into a separate escrow account. These funds can only be utilized for the construction and land costs of that specific project. This provision prevents the diversion of funds to other projects or for other purposes, ensuring that the money is used solely for the intended development.
              </p>

              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">
                <Calendar className="w-6 h-6 text-orange-600" /> 4. Timely Project Completion
              </h3>
              <p>
                One of the most significant benefits for homebuyers is RERA's focus on timely project delivery. Developers are held strictly accountable for adhering to the committed project timelines. In instances of delay, buyers are entitled to compensation, typically in the form of interest on the amount paid, or they have the option to withdraw from the project with a full refund along with interest.
              </p>

              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">
                <ShieldCheck className="w-6 h-6 text-red-600" /> 5. Quality Assurance and Defect Liability
              </h3>
              <p>
                RERA ensures the quality of construction by holding developers liable for structural defects or any other defects in workmanship, quality, or provision of services for a period of five years from the date of possession. Developers are legally bound to rectify such issues within 30 days of notification, without any additional cost to the buyer. This provision offers long-term protection to homebuyers against substandard construction.
              </p>

              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">
                <Handshake className="w-6 h-6 text-teal-600" /> 6. Standardized Agreements
              </h3>
              <p>
                RERA has introduced standardized formats for sale agreements, which reduces ambiguity and prevents developers from including one-sided clauses that previously put buyers at a disadvantage. This ensures fairness and clarity in the terms and conditions of property transactions.
              </p>

              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">
                <Gavel className="w-6 h-6 text-gray-700" /> 7. Grievance Redressal Mechanism
              </h3>
              <p>
                K-RERA provides a robust and efficient platform for homebuyers to file complaints against developers for non-compliance with RERA regulations, project delays, or any other grievances. The Authority has an adjudicating officer and an Appellate Tribunal to ensure timely and fair resolution of disputes, offering a reliable legal recourse for buyers.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-12 shadow-inner">
                <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2 mb-3">
                  <Lightbulb className="w-6 h-6 text-blue-700" /> How RERA Empowers You
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  Understanding RERA compliance is crucial for any property buyer in Karnataka. It transforms the real estate landscape from being developer-centric to buyer-centric, ensuring greater transparency, accountability, and consumer protection. By familiarizing yourself with these regulations and always verifying project details on the official K-RERA website, you can make safer and more informed investment decisions, securing your dream property with confidence.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

     
    </div>
  );
}
