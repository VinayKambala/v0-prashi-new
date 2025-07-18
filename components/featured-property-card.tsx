import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin } from "lucide-react"

interface FeaturedPropertyCardProps {
  title: string
  location: string
  price: string
  description: string
  features: string[]
  image: string
  slug: string
  status: string
}

export default function FeaturedPropertyCard({
  title,
  location,
  price,
  description,
  features,
  image,
  slug,
  status,
}: FeaturedPropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-full min-h-[300px]">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-white">{status}</Badge>
          </div>
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <div className="flex items-center gap-1 mb-4 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <p className="text-muted-foreground mb-6">{description}</p>
            <div className="grid grid-cols-2 gap-y-2 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">{price}</div>
            <Button variant="outline" className="group" asChild>
              <Link href={`/projects/${slug}`}>
                View Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
