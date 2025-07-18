"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { usePathname } from "next/navigation"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const pathname = usePathname()

  // Check if we're on a project page to adjust styling
  const isProjectPage = pathname?.includes("/projects/")
  const isDarkContext = pathname?.includes("/contact") || isProjectPage

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-gold/10">
          <CheckCircle2 className="h-10 w-10 text-gold" />
        </div>
        <h3 className="text-2xl font-semibold text-dark-gray">Thank You!</h3>
        <p className="mt-2 text-dark-gray/70">Your message has been received. Our team will get back to you shortly.</p>
        <Button className="mt-6 bg-gold hover:bg-gold-dark text-warm-white" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-dark-gray">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            required
            placeholder="John Doe"
            className="h-12 bg-warm-white border-medium-gray text-dark-gray focus:border-gold focus:ring-gold/20"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-dark-gray">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="john@example.com"
            className="h-12 bg-warm-white border-medium-gray text-dark-gray focus:border-gold focus:ring-gold/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-dark-gray">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            required
            placeholder="+91 98765 43210"
            className="h-12 bg-warm-white border-medium-gray text-dark-gray focus:border-gold focus:ring-gold/20"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="interest" className="text-sm font-medium text-dark-gray">
            Interested In <span className="text-red-500">*</span>
          </label>
          <Select required>
            <SelectTrigger
              id="interest"
              className="h-12 bg-warm-white border-medium-gray text-dark-gray focus:border-gold focus:ring-gold/20"
            >
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-warm-white border-medium-gray">
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="consultation">Free Consultation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-dark-gray">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          required
          placeholder="Please provide details about your construction requirements..."
          rows={4}
          className="resize-none bg-warm-white border-medium-gray text-dark-gray focus:border-gold focus:ring-gold/20"
        />
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base bg-gold hover:bg-gold-dark text-warm-white shadow-lg hover:shadow-xl transition-all duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-center leading-relaxed text-dark-gray/60">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}
