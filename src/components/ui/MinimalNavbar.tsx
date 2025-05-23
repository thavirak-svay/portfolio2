"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, User, FolderOpen, Award, Mail } from "lucide-react"

// Define navigation items - keep it minimal with icons
const navItems = [
  { name: "Home", url: "#hero", mobilePriority: true, icon: Home },
  { name: "About", url: "#about", mobilePriority: true, icon: User },
  { name: "Projects", url: "#projects", mobilePriority: true, icon: FolderOpen },
  { name: "Experience", url: "#experience", mobilePriority: false, icon: Award },
  { name: "Contact", url: "#contact", mobilePriority: true, icon: Mail },
]

export default function MinimalNavbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)

  // Set mounted state to handle hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll detection for active section
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "contact"]
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

  // Handle scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    if (!mounted) return

    let scrollTimer: NodeJS.Timeout | null = null

    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      // Check if user has scrolled
      if (currentScrollY > 30 && !hasScrolled) {
        setHasScrolled(true)
      } else if (currentScrollY < 10 && hasScrolled) {
        setHasScrolled(false)
      }

      // Enhanced hide/show logic with threshold
      const scrollDiff = Math.abs(currentScrollY - lastScrollY)
      const scrollThreshold = 5

      // Clear any existing timers to prevent flicker
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }

      // Use a small delay to stabilize hide/show behavior
      scrollTimer = setTimeout(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 50 && scrollDiff > scrollThreshold) {
          // Scrolling down - hide navbar completely
          setIsVisible(false)
        } else if ((currentScrollY < lastScrollY && scrollDiff > scrollThreshold) || currentScrollY < 20) {
          // Scrolling up or at top - show navbar
          setIsVisible(true)
        }
      }, 50) // Small delay to stabilize behavior

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar, { passive: true })
    return () => {
      window.removeEventListener("scroll", controlNavbar)
      // Clean up any pending timer on unmount
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
    }
  }, [lastScrollY, mounted, hasScrolled])

  // Handle resize events
  useEffect(() => {
    if (!mounted) return

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mounted])

  // Don't render anything during SSR to prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className="minimal-navbar">
      <motion.nav
        className={cn("fixed z-50 w-full will-change-transform", isMobile ? "bottom-6" : "top-6")}
        initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : isMobile ? 150 : -150, // Increased to ensure it's completely off-screen
          pointerEvents: isVisible ? "auto" : "none", // Disable interactions when hidden
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          opacity: { duration: 0.15 }, // Even faster opacity transition
        }}
      >
        <div className="mx-auto flex justify-center px-4">
          <div
            className={cn(
              "flex items-center backdrop-blur-md",
              isMobile
                ? "justify-evenly bg-black/40 gap-2 rounded-full w-auto px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                : "gap-8 bg-black/25 border border-white/10 rounded-full px-8 py-2 shadow-[0_2px_20px_rgba(0,0,0,0.1)]"
            )}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.name
              const Icon = item.icon

              // For mobile, only show high priority items
              if (isMobile && !item.mobilePriority) {
                return null
              }

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
                        window.scrollTo({
                          top: targetElement.offsetTop,
                          behavior: "smooth",
                        })
                      }
                    }
                  }}
                  className={cn(
                    "relative transition-all whitespace-nowrap",
                    isMobile ? "p-2 flex items-center justify-center" : "px-3 py-1.5 text-sm",
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={cn(
                        "absolute",
                        isMobile
                          ? "h-full w-full rounded-full bg-gradient-to-r from-primary/30 to-accent/30 -z-10"
                          : "-bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"
                      )}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Mobile: Icon only, Desktop: Text */}
                  {isMobile ? (
                    <motion.div whileTap={{ scale: 0.9 }} className="flex items-center justify-center">
                      <Icon
                        size={22}
                        strokeWidth={1.75}
                        className={cn("transition-all duration-300", isActive ? "text-white" : "text-white/70")}
                      />
                    </motion.div>
                  ) : (
                    <span className="tracking-wide text-sm">{item.name}</span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
