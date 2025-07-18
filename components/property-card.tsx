import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, MapPin } from "lucide-react"

interface PropertyCardProps {
  title: string
  location: string
  price: string
  bedrooms: number | null
  bathrooms: number | null
  area: number
  type: string
  image: string
  slug: string
  featured?: boolean
}

export default function PropertyCard({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  type,
  image,
  slug,
  featured = false,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/properties/${slug}`} className="block relative">
        <div className="relative h-[220px] w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          {featured && <Badge className="absolute top-3 left-3 bg-primary text-white">Featured</Badge>}
          <Badge className="absolute top-3 right-3 bg-background/90">{type}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="font-semibold text-primary">{price}</div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between border-t mt-2">
          {bedrooms !== null && (
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{bedrooms} Bed</span>
            </div>
          )}
          {bathrooms !== null && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{bathrooms} Bath</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{area} sq.ft</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}
