"use client"

import React, { useState, useEffect } from "react"
import { Home, UserCircle, FolderKanban, Award, MessageCircle, PlusSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

const items = [
  {
    name: "Home",
    url: "#hero",
    icon: Home,
  },
  {
    name: "About",
    url: "#about",
    icon: UserCircle,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: FolderKanban,
  },
  {
    name: "Experience",
    url: "#experience",
    icon: Award,
  },
  {
    name: "Gradients",
    url: "#gradient-demo",
    icon: PlusSquare,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: MessageCircle,
  },
]

export default function FixedNavbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Set mounted state to handle hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll detection for active section
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "gradient-demo", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          const sectionMap: Record<string, string> = {
            hero: "Home",
            about: "About",
            projects: "Projects",
            experience: "Experience",
            "gradient-demo": "Gradients",
            contact: "Contact",
          }

          const navName = sectionMap[section]
          if (navName && navName !== activeSection) {
            setActiveSection(navName)
          }
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection, mounted])

  // Handle body scrolling when mobile menu is open
  useEffect(() => {
    if (!mounted) return

    if (isMobile && isMenuOpen) {
      document.body.classList.add("mobile-menu-open")
    } else {
      document.body.classList.remove("mobile-menu-open")
    }

    return () => {
      document.body.classList.remove("mobile-menu-open")
    }
  }, [isMobile, isMenuOpen, mounted])

  // Handle resize events
  useEffect(() => {
    if (!mounted) return

    const handleResize = () => {
      const mobile = window.innerWidth < 768
      const smallMobile = window.innerWidth < 480

      setIsMobile(mobile)
      setIsSmallMobile(smallMobile)

      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen, mounted])

  // Don't render anything during SSR to prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className="fixed-navbar">
      {/* Mobile Menu Button */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-50">
          <motion.button
            data-menu-button="true"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 bg-black/80 rounded-full border border-white/20 shadow-lg backdrop-blur-md"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.9)" }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: isMenuOpen ? "0 0 20px rgba(255,255,255,0.2)" : "0 4px 10px rgba(0,0,0,0.3)",
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 2 : 0 }}
              className="w-5 h-0.5 bg-white mb-1.5 transform origin-center"
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1, width: isMenuOpen ? 0 : 20 }}
              className="w-5 h-0.5 bg-white mb-1.5"
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              className="w-5 h-0.5 bg-white transform origin-center"
            />
          </motion.button>
        </div>
      )}

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isMobile
            ? isMenuOpen
              ? "opacity-100 pointer-events-auto visible mobile-nav-menu"
              : "opacity-0 pointer-events-none invisible"
            : "opacity-100 pointer-events-auto visible"
        )}
      >
        <div className={cn("flex justify-center", isMobile ? "pt-16" : "pt-5")}>
          <motion.div
            data-navbar="true"
            className={cn(
              "flex bg-black/50 border border-white/10 backdrop-blur-lg shadow-lg nav-shadow",
              isMobile
                ? "flex-col py-6 px-4 rounded-xl w-[85%] max-w-xs gap-2"
                : "flex-row items-center gap-2 py-2.5 px-3 rounded-full w-fit"
            )}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.name
              const isHovered = hoveredItem === item.name

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={(e) => {
                    if (item.url.startsWith("#")) {
                      e.preventDefault()

                      const targetId = item.url.substring(1)
                      const targetElement = document.getElementById(targetId)

                      if (targetElement) {
                        // On mobile, close menu first then scroll
                        if (isMobile) {
                          setIsMenuOpen(false)
                          // Small delay before scrolling to avoid jumps
                          setTimeout(() => {
                            window.scrollTo({
                              top: targetElement.offsetTop,
                              behavior: "smooth",
                            })
                          }, 100)
                        } else {
                          window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      }
                    }
                  }}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={cn(
                    "relative mobile-nav-link transition-all duration-300",
                    isMobile
                      ? "w-full flex items-center px-4 py-3.5 rounded-lg text-center justify-center gap-3"
                      : "px-5 py-2.5 text-sm font-medium rounded-full",
                    "text-white/70 hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-item"
                      className={cn(
                        "absolute inset-0 -z-10",
                        isMobile ? "rounded-lg" : "rounded-full",
                        "bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 overflow-hidden"
                      )}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Subtle glass effect */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />

                      {/* Animated gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        style={{ backgroundSize: "200% 100%" }}
                      />
                    </motion.div>
                  )}

                  {/* Icon for mobile, text for desktop */}
                  {isMobile ? (
                    <>
                      <Icon size={18} strokeWidth={2} className={isActive ? "text-primary" : ""} />
                      <span>{item.name}</span>
                    </>
                  ) : (
                    <span className="relative z-10">{item.name}</span>
                  )}

                  {/* Hover effect */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className={cn("absolute inset-0 bg-white/10 -z-10", isMobile ? "rounded-lg" : "rounded-full")}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
