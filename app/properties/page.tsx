import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, MapPin } from "lucide-react"
import PropertyCard from "@/components/property-card"

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/luxury-penthouse-hero.jpg" alt="Properties" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Explore Our Properties</h1>
            <p className="text-lg text-white/90">Find your perfect home or investment opportunity with Prashigroup</p>
          </div>
        </div>
      </section>

      {/* Property Filters */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="plots">Plots</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>All Locations</option>
                          <option>Whitefield</option>
                          <option>Electronic City</option>
                          <option>Marathahalli</option>
                          <option>Hebbal</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Property Type</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>All Types</option>
                          <option>Apartment</option>
                          <option>Villa</option>
                          <option>Plot</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Budget</label>
                      <div className="relative">
                        <select className="w-full pl-4 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>All Budgets</option>
                          <option>Under ₹50 Lakhs</option>
                          <option>₹50 Lakhs - ₹1 Cr</option>
                          <option>₹1 Cr - ₹2 Cr</option>
                          <option>Above ₹2 Cr</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Status</label>
                      <div className="relative">
                        <select className="w-full pl-4 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>All Status</option>
                          <option>Ready to Move</option>
                          <option>Under Construction</option>
                          <option>New Launch</option>
                        </select>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <Button className="w-full">Search Properties</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="residential" className="space-y-4">
              {/* Similar filter for residential */}
            </TabsContent>
            <TabsContent value="commercial" className="space-y-4">
              {/* Similar filter for commercial */}
            </TabsContent>
            <TabsContent value="plots" className="space-y-4">
              {/* Similar filter for plots */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">All Properties</h2>
              <p className="text-muted-foreground mt-1">Showing 9 properties</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Sort By:</label>
              <select className="pl-3 pr-8 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Area: Low to High</option>
                <option>Area: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard
              title="Prashi Heights"
              location="Whitefield, Bengaluru"
              price="₹1.2 Cr onwards"
              bedrooms={3}
              bathrooms={3}
              area={1850}
              type="Apartment"
              image="/luxury-apartment-showcase.jpg"
              slug="prashi-heights"
              featured={true}
            />
            <PropertyCard
              title="Prashi Meadows"
              location="Electronic City, Bengaluru"
              price="₹2.5 Cr onwards"
              bedrooms={4}
              bathrooms={4}
              area={3200}
              type="Villa"
              image="/luxury-villa-garden.png"
              slug="prashi-meadows"
            />
            <PropertyCard
              title="Prashi Business Park"
              location="Outer Ring Road, Bengaluru"
              price="₹85 Lakhs onwards"
              bedrooms={null}
              bathrooms={null}
              area={1200}
              type="Commercial"
              image="/premium-apartment-lobby.jpg"
              slug="prashi-business-park"
            />
            <PropertyCard
              title="Prashi Terraces"
              location="Hebbal, Bengaluru"
              price="₹1.8 Cr onwards"
              bedrooms={3}
              bathrooms={3}
              area={2100}
              type="Apartment"
              image="/luxury-apartment-terrace.png"
              slug="prashi-terraces"
            />
            <PropertyCard
              title="Prashi Green Valley"
              location="Sarjapur Road, Bengaluru"
              price="₹3.2 Cr onwards"
              bedrooms={4}
              bathrooms={4}
              area={3800}
              type="Villa"
              image="/luxury-villa-pool.png"
              slug="prashi-green-valley"
            />
            <PropertyCard
              title="Prashi Tech Square"
              location="Whitefield, Bengaluru"
              price="₹1.1 Cr onwards"
              bedrooms={null}
              bathrooms={null}
              area={1500}
              type="Commercial"
              image="/modern-tech-office.png"
              slug="prashi-tech-square"
            />
            <PropertyCard
              title="Prashi Horizon"
              location="Marathahalli, Bengaluru"
              price="₹95 Lakhs onwards"
              bedrooms={2}
              bathrooms={2}
              area={1250}
              type="Apartment"
              image="/modern-apartment-complex.png"
              slug="prashi-horizon"
            />
            <PropertyCard
              title="Prashi Acres"
              location="Devanahalli, Bengaluru"
              price="₹45 Lakhs onwards"
              bedrooms={null}
              bathrooms={null}
              area={1200}
              type="Plot"
              image="/empty-land-plot.png"
              slug="prashi-acres"
            />
            <PropertyCard
              title="Prashi Oasis"
              location="Yelahanka, Bengaluru"
              price="₹1.5 Cr onwards"
              bedrooms={3}
              bathrooms={3}
              area={1950}
              type="Apartment"
              image="/modern-apartment-garden.png"
              slug="prashi-oasis"
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="outline" className="mx-1 bg-transparent">
              Previous
            </Button>
            <Button variant="outline" className="mx-1 bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" className="mx-1 bg-transparent">
              2
            </Button>
            <Button variant="outline" className="mx-1 bg-transparent">
              3
            </Button>
            <Button variant="outline" className="mx-1 bg-transparent">
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
