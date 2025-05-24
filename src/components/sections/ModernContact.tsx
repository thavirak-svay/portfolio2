"use client"

import React, { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { EnvelopeIcon, PhoneIcon, CheckCircleIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { RetroGrid } from "@/components/ui/RetroGrid"

const ModernContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    return errors
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errors = validateForm()

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative min-h-screen w-full py-20">
      <div className="absolute inset-x-0 top-0 h-1/3">
        <RetroGrid className="opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section header */}
        <motion.div
          className="text-center mt-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="text-primary text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Have a project in mind or want to discuss potential collaborations? I'm always excited to hear new ideas and
            explore opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <EnvelopeIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-white/70 mb-4">Drop me a line anytime!</p>
            <a href="mailto:your.email@example.com" className="text-primary">
              your.email@example.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <PhoneIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-white/70 mb-4">Available during business hours</p>
            <a href="tel:+1234567890" className="text-primary">
              +1 (234) 567-890
            </a>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <MapPinIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-white/70 mb-4">Based in</p>
            <span className="text-primary">Your City, Country</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      formErrors.name ? "border-red-500" : "border-white/10"
                    } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="mt-2 text-sm text-red-500">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      formErrors.email ? "border-red-500" : "border-white/10"
                    } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && <p className="mt-2 text-sm text-red-500">{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    formErrors.subject ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                  placeholder="What's this about?"
                />
                {formErrors.subject && <p className="mt-2 text-sm text-red-500">{formErrors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    formErrors.message ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                  placeholder="Your message here..."
                />
                {formErrors.message && <p className="mt-2 text-sm text-red-500">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center space-x-2"
              >
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span className="text-green-500">Message sent successfully!</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ModernContactComponent)
