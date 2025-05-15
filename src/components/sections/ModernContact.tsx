"use client"

import React, { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

const ModernContact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Clear error when typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Validate form
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

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Validate form
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Submit form (simulate API call)
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  // Form input variants for animations
  const inputVariants = {
    focus: { scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" },
    blur: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)" },
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="text-primary text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Me</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out and I&apos;ll get
            back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email card */}
            <motion.div
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href="mailto:contact@backenddev.com"
                    className="text-sm opacity-70 hover:text-primary transition-colors"
                  >
                    contact@backenddev.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone card */}
            <motion.div
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-sm opacity-70 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Website card */}
            <motion.div
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GlobeAltIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Website</h3>
                  <a
                    href="https://backenddev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-70 hover:text-primary transition-colors"
                  >
                    www.backenddev.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Profile information */}
            <motion.div
              className="p-6 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold mb-2">Available for Opportunities</h3>
              <p className="text-sm opacity-70 mb-4">
                Currently open to freelance projects, consulting opportunities, and full-time positions that align with
                my expertise in backend development.
              </p>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1 animate-pulse"></div>
                <span className="text-xs">Available for work</span>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Form success message */}
            {isSubmitted && (
              <motion.div
                className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6 flex items-center gap-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <motion.div
                    variants={inputVariants}
                    initial="blur"
                    whileFocus="focus"
                    animate={formErrors.name ? "focus" : "blur"}
                  >
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        formErrors.name ? "border-red-500" : "border-white/10"
                      } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                      placeholder="Your name"
                    />
                  </motion.div>
                  {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <motion.div
                    variants={inputVariants}
                    initial="blur"
                    whileFocus="focus"
                    animate={formErrors.email ? "focus" : "blur"}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        formErrors.email ? "border-red-500" : "border-white/10"
                      } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                      placeholder="Your email"
                    />
                  </motion.div>
                  {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                </div>
              </div>

              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <motion.div
                  variants={inputVariants}
                  initial="blur"
                  whileFocus="focus"
                  animate={formErrors.subject ? "focus" : "blur"}
                >
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      formErrors.subject ? "border-red-500" : "border-white/10"
                    } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    placeholder="Subject"
                  />
                </motion.div>
                {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.div
                  variants={inputVariants}
                  initial="blur"
                  whileFocus="focus"
                  animate={formErrors.message ? "focus" : "blur"}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      formErrors.message ? "border-red-500" : "border-white/10"
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none`}
                    placeholder="Your message"
                  />
                </motion.div>
                {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
              </div>

              {/* Submit button */}
              <div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium flex justify-center items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ModernContact
