import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote?: string
  review?: string
  image?: string
  rating?: number
}

export default function TestimonialCard({
  name,
  location,
  quote,
  review,
  image = "/diverse-group.png",
  rating = 5,
}: TestimonialCardProps) {
  // Use either quote or review, with quote taking precedence
  const testimonialText = quote || review || ""

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-4 items-start">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>

        <div className="flex gap-0.5 mt-4">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
          {rating % 1 !== 0 && <StarHalf className="h-4 w-4 fill-primary text-primary" />}
        </div>

        <blockquote className="mt-4 text-muted-foreground">"{testimonialText}"</blockquote>
      </CardContent>
    </Card>
  )
}
