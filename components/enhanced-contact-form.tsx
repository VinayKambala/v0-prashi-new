"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus(null) // Reset status

    try {
      // Simulate an API call (replace with your actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate 2 seconds delay

      // Assuming the API call was successful
      setSubmissionStatus("success")
      setFormData({ name: "", email: "", message: "" }) // Clear the form
    } catch (error) {
      console.error("Submission error:", error)
      setSubmissionStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-obsidian p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl text-gold font-bold mb-6">Contact Us</h2>
      {submissionStatus === "success" && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your message has been sent.</span>
        </div>
      )}

      {submissionStatus === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> There was an error submitting your message. Please try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="block text-white mb-2 text-sm font-medium">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-obsidian border border-gold/20 text-white px-4 py-3 placeholder:text-white/40 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-white mb-2 text-sm font-medium">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-obsidian border border-gold/20 text-white px-4 py-3 placeholder:text-white/40 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="block text-white mb-2 text-sm font-medium">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full bg-obsidian border border-gold/20 text-white px-4 py-3 placeholder:text-white/40 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
            placeholder="Enter your message"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold text-obsidian py-4 px-8 hover:bg-gold-light transition-all duration-300 uppercase tracking-wider text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </motion.button>
      </form>
    </div>
  )
}

export default EnhancedContactForm
