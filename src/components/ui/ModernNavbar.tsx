"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CommandLineIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import ThemeSwitcher from "./ThemeSwitcher"

const ModernNavbar = () => {
  // State
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Navigation links - memoized to prevent recreation on each render
  const navLinks = useMemo(
    () => [
      { name: "Home", href: "#hero", section: "hero" },
      { name: "About", href: "#about", section: "about" },
      { name: "Skills", href: "#skills", section: "skills" },
      { name: "Projects", href: "#projects", section: "projects" },
      { name: "Experience", href: "#experience", section: "experience" },
      { name: "Gradients", href: "#gradient-demo", section: "gradient-demo" },
      { name: "Contact", href: "#contact", section: "contact" },
    ],
    []
  )

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Handle active section highlighting
      const sections = navLinks.map((link) => link.section)
      const scrollPosition = window.scrollY + 200

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navLinks])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/5" : ""
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CommandLineIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">DevBackend</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.section ? "text-white" : "text-white/70 hover:text-white/90"
                    }`}
                  >
                    {activeSection === link.section && (
                      <motion.span
                        className="absolute inset-0 rounded-lg bg-primary/10"
                        layoutId="navbar-active"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mx-4 h-6 border-r border-white/10" />

            <ThemeSwitcher />

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary/80 px-4 py-2 rounded-lg text-sm font-medium text-white shadow-md shadow-primary/20"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeSwitcher />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6 text-white" /> : <Bars3Icon className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-black/90 backdrop-blur-xl shadow-xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <CommandLineIcon className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold">DevBackend</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/5 border border-white/10"
                    aria-label="Close menu"
                  >
                    <XMarkIcon className="w-6 h-6 text-white" />
                  </button>
                </div>

                <ul className="space-y-3 flex-1">
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                          activeSection === link.section
                            ? "bg-primary/10 text-primary"
                            : "text-white/70 hover:bg-white/5"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-gradient-to-r from-primary to-accent px-4 py-3 rounded-lg text-center font-medium text-white shadow-md shadow-primary/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Me
                  </motion.a>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-white/50">© {new Date().getFullYear()} DevBackend</p>
                      <div className="flex gap-4">
                        <a href="#" className="text-white/50 hover:text-primary">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <a href="#" className="text-white/50 hover:text-primary">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="text-white/50 hover:text-primary">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ModernNavbar
