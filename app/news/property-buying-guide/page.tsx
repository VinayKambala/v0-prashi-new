import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PropertyBuyingGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/news">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Button>
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Property Buying Guide: Essential Documents and Information for Bangalore Real Estate
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Prashi Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 space-y-8">
            {/* Introduction */}
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Buying a residential property in Bangalore requires careful attention to documentation and legal
                compliance. This comprehensive guide covers all essential documents, approvals, and processes you need
                to know before making your property investment.
              </p>
            </div>

            <Separator />

            {/* Documents to Check */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Essential Documents to Check Before Buying Property
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Check for proper conveyance of title in favor of the builder.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Check the license/development right/approval of the builder.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Check clear and marketable title of the project.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Ensure execution of the proper Allotment letter/sale Agreements on your payments.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Ensure whether reputed financial companies approve the project. This will help you in getting
                    financial loans.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Check the tentative layout/building plan and verify the plinth area of the apartment. It is
                    advisable to check the carpet area of the apartment and find out if the difference between plinth
                    area and carpet area is reasonable.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Ask for Occupation/completion Certificate.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Ensure the conveyance Deed is registered after the entire payment has been made.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Additional Requirements:</strong> For buying a property you need to check deed of conveyance,
                  Mutation Certificate (for complete property), Land Registration status, Sanction Plan, Search report
                  and payment schedule (for under construction). For re-sale property, check demand notice relating to
                  renovation, tax dues and latest receipts of payments made towards various outgoings such as water,
                  electricity and ground rent.
                </p>
              </div>
            </section>

            <Separator />

            {/* Area Definitions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Understanding Property Areas: Carpet, Built-up & Super Built-up
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-green-700 mb-2">Carpet Area</h3>
                    <p className="text-sm text-gray-600">
                      The precise area within the walls of your home. If you had to layout wall-to-wall carpet in your
                      entire home, the area covered would be the carpet area.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Built-up Area</h3>
                    <p className="text-sm text-gray-600">
                      Inclusive of not just the carpet area but also the area being occupied by the walls of your home.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-purple-700 mb-2">Super Built-up Area</h3>
                    <p className="text-sm text-gray-600">
                      Takes into account all the area under the common space which is the apartment's proportionate
                      share of the lobby, staircase, elevator and corridor outside the apartment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Sale Deed and Registration */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sale Deed and Registration Process</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What is a Sale Deed?</h3>
                  <p className="text-gray-700">
                    A sale Deed is a document prepared on the basis of previous ownership document for the transfer of
                    property from seller to buyer, providing the buyer the absolute and undisputed ownership of
                    property.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Registration Fees</h3>
                  <p className="text-gray-700">
                    During the transfer of property, the stamp paper and Registration fee has to be paid which is
                    equivalent to 7 to 8 per cent of the value of the property or those of circle rates. These rates are
                    the notified rates of a particular area set by the government.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Stamp Duty</h3>
                  <p className="text-gray-700">
                    Stamp Duty is supposed to be paid every time there is a transfer of ownership. It is calculated on
                    the basis of the total value of your property. The amount to be paid varies from city to city.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Rent vs Buy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Should You Rent or Buy?</h2>
              <div className="p-6 bg-yellow-50 rounded-lg">
                <p className="text-gray-700">
                  There is no harm in renting a property till you are ready with enough finances to buy. If you find a
                  place where you want to stay and can manage to get enough formal finance, look at buying as your
                  monthly outflow will lead to creating an asset. But make sure your EMI is not more than 35-40 per cent
                  of your monthly salary.
                </p>
              </div>
            </section>

            <Separator />

            {/* Approvals and Authorities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Different Approvals in Bangalore</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">BBMP Approval</h3>
                    <p className="text-sm text-gray-600">
                      Bruhat Bangalore Mahanagara Palike is responsible for administration of Bangalore, including
                      building plan approvals within its jurisdiction.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">BDA Approval</h3>
                    <p className="text-sm text-gray-600">
                      Bangalore Development Authority is responsible for zoning of land, provision of sites, planning
                      for urban development, and creating urban infrastructure.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">BMRDA Approval</h3>
                    <p className="text-sm text-gray-600">
                      Bangalore Metropolitan Region Development Authority is responsible for planning and supervising
                      development in rural regions of Bangalore and Ramanagaram districts.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">BIAAPA Approval</h3>
                    <p className="text-sm text-gray-600">
                      Bengaluru International Airport Area Planning Authority is responsible for sanction and
                      development of area surrounding Bengaluru International Airport.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">DTCP Approval</h3>
                    <p className="text-sm text-gray-600">
                      Department of Town and Country Planning sanctions layout plans in areas where other departments
                      like BDA, BBMP, BMRDA, BIAAPA do not exist.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">LDA Approval</h3>
                    <p className="text-sm text-gray-600">
                      Lake Development Authority is responsible for protection, restoration, conservation and
                      development of lakes around BMRDA regions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Legal Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Legal Terms and Processes</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Akrama Sakrama</h3>
                  <p className="text-gray-700 mb-2">
                    Literally means "ILLEGAL-LEGAL". The scheme was formulated by the government to regularize illegal
                    development and construction in urban areas by charging penalties.
                  </p>
                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Eligible:</strong> Buildings on owned land without approved plans or deviating from
                      approved plans.
                    </p>
                    <p>
                      <strong>Not Eligible:</strong> Encroachments on government lands or buildings in restricted areas.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">DC Conversion</h3>
                  <p className="text-gray-700">
                    Conversion of land from agriculture to non-agriculture status. Agriculture lands can only be used
                    for agriculture activities unless legal permission is obtained from the District Commissioner.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Katha Types</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-green-600">A Katha</h4>
                      <p className="text-sm text-gray-600">
                        Certifies legal property ownership with all taxes paid to BBMP. Required for trade licenses and
                        loans.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-orange-600">B Katha</h4>
                      <p className="text-sm text-gray-600">
                        Lists illegal properties that can be upgraded to A Katha by fulfilling certain criteria and
                        paying charges.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-blue-600">E Katha</h4>
                      <p className="text-sm text-gray-600">
                        Computerized version of Katha useful for paying property tax with PID number.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">EC Certificate</h3>
                  <p className="text-gray-700">
                    The encumbrance certificate is a mandatory document used in property transactions as evidence of
                    free title/ownership, ensuring complete ownership without any monetary or legal liability.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Conclusion */}
            <section>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Key Takeaway</h3>
                <p className="text-green-700">
                  Property buying in Bangalore requires thorough due diligence. Always verify all documents, understand
                  the different types of approvals required, and ensure compliance with local regulations. When in
                  doubt, consult with legal experts and real estate professionals to make informed decisions.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
