"use client"

import { MotionGlass } from "@/components/ui/Glass"
import { cn } from "@/lib/utils"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { CheckCircle, Send } from "lucide-react"
import React, { FormEvent, useState } from "react"

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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
            I&apos;d love to hear about your project and discuss how we can work together to bring your vision to life.
            Let&apos;s create something amazing!
          </p>
        </motion.div>

        {/* Quick contact info */}
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-8">Ready to start your project? Let&apos;s connect!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <a href="mailto:your.email@example.com" className="block group transition-all duration-300">
                <MotionGlass
                  className="p-6 group transition-all duration-300 h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-sm text-gray-300">Drop me a line anytime!</p>
                    </div>
                  </div>
                  <p className="font-medium text-blue-400 transition-colors">your.email@example.com</p>
                </MotionGlass>
              </a>

              {/* Phone Card */}
              <a href="tel:+1234567890" className="block group transition-all duration-300">
                <MotionGlass
                  className="p-6 group transition-all duration-300 h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <PhoneIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-sm text-gray-300">Available during business hours</p>
                    </div>
                  </div>
                  <p className="font-medium text-blue-400 transition-colors">+1 (234) 567-890</p>
                </MotionGlass>
              </a>

              {/* Location Card */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block group transition-all duration-300"
              >
                <MotionGlass
                  className="p-6 group transition-all duration-300 h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <MapPinIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-sm text-gray-300">Based in</p>
                    </div>
                  </div>
                  <p className="font-medium text-blue-400 transition-colors">Your City, Country</p>
                </MotionGlass>
              </a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">{/* Social Link Icons */}</div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MotionGlass className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 text-white placeholder-gray-400 bg-black/20 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300",
                        formErrors.name ? "border-red-500" : "border-white/10"
                      )}
                      placeholder="Your full name"
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 text-white placeholder-gray-400 bg-black/20 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300",
                        formErrors.email ? "border-red-500" : "border-white/10"
                      )}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 text-white placeholder-gray-400 bg-black/20 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300",
                      formErrors.subject ? "border-red-500" : "border-white/10"
                    )}
                    placeholder="What's this about?"
                  />
                  {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className={cn(
                      "w-full px-4 py-3 text-white placeholder-gray-400 bg-black/20 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300",
                      formErrors.message ? "border-red-500" : "border-white/10"
                    )}
                    placeholder="Your detailed message..."
                  />
                  {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                </div>

                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full font-semibold py-3 px-6 rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </MotionGlass>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ModernContact = React.memo(ModernContactComponent)
export default ModernContact
