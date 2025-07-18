import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Bed, Bath, Square, Calendar, CheckCircle2, ArrowRight, Share2, Heart } from "lucide-react"
import PropertyCard from "@/components/property-card"
import ContactForm from "@/components/contact-form"

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch property data based on the slug
  const property = {
    title: "Prashi Heights",
    slug: "prashi-heights",
    location: "Whitefield, Bengaluru",
    fullAddress: "Near Whitefield Main Road, Whitefield, Bengaluru, Karnataka 560066",
    price: "₹1.2 Cr onwards",
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    type: "Apartment",
    status: "Under Construction",
    possession: "Dec 2025",
    description:
      "Prashi Heights is a premium residential project offering spacious 3 BHK apartments with modern amenities. Located in the heart of Whitefield, it provides excellent connectivity to major IT parks, schools, hospitals, and shopping centers.",
    features: [
      "24/7 Security",
      "Swimming Pool",
      "Gym",
      "Children's Play Area",
      "Clubhouse",
      "Landscaped Gardens",
      "Power Backup",
      "Covered Parking",
      "Rainwater Harvesting",
      "Vastu Compliant",
    ],
    specifications: {
      structure: "RCC framed structure with concrete block masonry",
      flooring: "Vitrified tiles in living, dining and bedrooms",
      kitchen: "Granite counter with stainless steel sink",
      bathrooms: "Premium sanitary fittings and ceramic tiles",
      doors: "Main door - Teak wood frame with designer shutter",
      windows: "UPVC windows with MS grills",
      electrical: "Concealed copper wiring with modular switches",
      painting: "Interior - Premium emulsion paint, Exterior - Weather-proof paint",
    },
    floorPlans: [
      {
        type: "3 BHK",
        area: 1850,
        price: "₹1.2 Cr",
        image: "/3bhk-apartment-floor-plan.png",
      },
      {
        type: "3 BHK Premium",
        area: 2100,
        price: "₹1.4 Cr",
        image: "/placeholder.svg?height=600&width=800&query=floor plan 3bhk premium apartment",
      },
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&query=modern apartment building entrance",
      "/placeholder.svg?height=600&width=800&query=apartment swimming pool",
      "/placeholder.svg?height=600&width=800&query=modern apartment gym",
      "/placeholder.svg?height=600&width=800&query=apartment clubhouse interior",
      "/placeholder.svg?height=600&width=800&query=apartment living room interior",
      "/placeholder.svg?height=600&width=800&query=apartment master bedroom",
    ],
    location: {
      map: "/placeholder.svg?height=400&width=600&query=google maps location",
      nearby: [
        { name: "Whitefield Metro Station", distance: "1.5 km" },
        { name: "ITPL", distance: "3 km" },
        { name: "Manipal Hospital", distance: "2 km" },
        { name: "Forum Shantiniketan Mall", distance: "2.5 km" },
        { name: "International School", distance: "1 km" },
      ],
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Property Gallery */}
      <section className="bg-muted">
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={property.gallery[0] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.gallery.slice(1, 5).map((image, index) => (
                <div key={index} className="relative h-[190px] rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                  {index === 3 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white/20">
                        View All Photos
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{property.type}</Badge>
                    <Badge variant="outline">{property.status}</Badge>
                  </div>
                  <h1 className="text-3xl font-bold">{property.title}</h1>
                  <div className="flex items-center gap-1 mt-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{property.price}</div>
                  <div className="text-sm text-muted-foreground">
                    ₹{Math.round(Number.parseInt(property.price.replace(/[^\d]/g, "")) / property.area)} per sq.ft
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button size="sm" variant="outline">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg mb-8">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 text-primary">
                    <Bed className="h-5 w-5" />
                    <span className="text-lg font-semibold">{property.bedrooms}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 text-primary">
                    <Bath className="h-5 w-5" />
                    <span className="text-lg font-semibold">{property.bathrooms}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 text-primary">
                    <Square className="h-5 w-5" />
                    <span className="text-lg font-semibold">{property.area}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Sq.ft</span>
                </div>
              </div>

              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="pt-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Description</h3>
                      <p className="text-muted-foreground">{property.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                        {property.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Project Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm text-muted-foreground">Project Type</div>
                            <div>{property.type}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm text-muted-foreground">Possession</div>
                            <div>{property.possession}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="specifications" className="pt-4">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Construction Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(property.specifications).map(([key, value]) => (
                        <div key={key} className="border rounded-lg p-4">
                          <h4 className="font-medium capitalize mb-2">{key}</h4>
                          <p className="text-sm text-muted-foreground">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="floor-plans" className="pt-4">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Available Floor Plans</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {property.floorPlans.map((plan, index) => (
                        <Card key={index}>
                          <CardContent className="p-0">
                            <div className="relative h-[300px] w-full">
                              <Image
                                src={plan.image || "/placeholder.svg"}
                                alt={`${plan.type} Floor Plan`}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-semibold text-lg">{plan.type}</h4>
                              <div className="grid grid-cols-2 gap-4 mt-2">
                                <div>
                                  <div className="text-sm text-muted-foreground">Area</div>
                                  <div>{plan.area} sq.ft</div>
                                </div>
                                <div>
                                  <div className="text-sm text-muted-foreground">Price</div>
                                  <div>{plan.price}</div>
                                </div>
                              </div>
                              <Button className="w-full mt-4">Download Floor Plan</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="location" className="pt-4">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">{property.fullAddress}</p>

                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                      {/* Fix: Render the map image properly instead of the object */}
                      <Image
                        src={property.location.map || "/placeholder.svg"}
                        alt="Property Location Map"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Nearby Places</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Fix: Map through the nearby places array to render each item */}
                        {property.location.nearby.map((place, index) => (
                          <div key={index} className="flex items-center justify-between border-b pb-2">
                            <span>{place.name}</span>
                            <Badge variant="outline">{place.distance}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Similar Properties</h2>
            <Button variant="outline" className="group" asChild>
              <Link href="/properties">
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              title="Prashi Horizon"
              location="Marathahalli, Bengaluru"
              price="₹95 Lakhs onwards"
              bedrooms={2}
              bathrooms={2}
              area={1250}
              type="Apartment"
              image="/placeholder.svg?height=300&width=400&query=modern apartment complex"
              slug="prashi-horizon"
            />
            <PropertyCard
              title="Prashi Oasis"
              location="Yelahanka, Bengaluru"
              price="₹1.5 Cr onwards"
              bedrooms={3}
              bathrooms={3}
              area={1950}
              type="Apartment"
              image="/placeholder.svg?height=300&width=400&query=modern apartment with garden"
              slug="prashi-oasis"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
