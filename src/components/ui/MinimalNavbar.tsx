"use client"

import React, { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, User, FolderOpen, Award, Mail } from "lucide-react"
import GlassPanel from "@/components/ui/GlassPanel"
import { useTheme } from "@/components/ui/ThemeProvider"

// Debounce utility function
function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: NodeJS.Timeout | null = null

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => func(...args), waitFor)
  }

  return debounced as (...args: Parameters<F>) => ReturnType<F>
}

// Define navigation items - keep it minimal with icons
const navItems = [
  { name: "Home", url: "#hero", mobilePriority: true, icon: Home },
  { name: "About", url: "#about", mobilePriority: true, icon: User },
  { name: "Projects", url: "#projects", mobilePriority: true, icon: FolderOpen },
  { name: "Experience", url: "#experience", mobilePriority: false, icon: Award },
  { name: "Contact", url: "#contact", mobilePriority: true, icon: Mail },
]

const MinimalNavbarComponent = () => {
  const { theme } = useTheme()
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

  // Memoized and debounced scroll handlers
  const debouncedHandleScroll = useCallback(
    debounce(() => {
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
    }, 150), // Debounce time of 150ms
    [activeSection] // Dependency: activeSection
  )

  const debouncedControlNavbar = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 30 && !hasScrolled) {
        setHasScrolled(true)
      } else if (currentScrollY < 10 && hasScrolled) {
        setHasScrolled(false)
      }

      const scrollDiff = Math.abs(currentScrollY - lastScrollY)
      const scrollThreshold = 5

      if (currentScrollY > lastScrollY && currentScrollY > 50 && scrollDiff > scrollThreshold) {
        setIsVisible(false)
      } else if ((currentScrollY < lastScrollY && scrollDiff > scrollThreshold) || currentScrollY < 20) {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY) // Update lastScrollY directly without timeout for accurate diff next time
    }, 50), // Debounce time of 50ms, slightly shorter than original timeout for responsiveness
    [lastScrollY, hasScrolled] // Dependencies: lastScrollY, hasScrolled
  )

  // Handle scroll detection for active section
  useEffect(() => {
    if (!mounted) return

    window.addEventListener("scroll", debouncedHandleScroll)
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll)
    }
  }, [mounted, debouncedHandleScroll])

  // Handle scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    if (!mounted) return

    // The original scrollTimer logic is now effectively handled by the debounce in debouncedControlNavbar
    // and the direct setLastScrollY update within it.

    window.addEventListener("scroll", debouncedControlNavbar, { passive: true })
    return () => {
      window.removeEventListener("scroll", debouncedControlNavbar)
      // No need to clear scrollTimer here as debounce handles its own timer.
    }
  }, [mounted, debouncedControlNavbar])

  // Handle resize events
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768)
  }, []) // No dependencies, will be created once

  useEffect(() => {
    if (!mounted) return

    handleResize() // Call once on mount
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mounted, handleResize])

  // Don't render anything during SSR to prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className="minimal-navbar">
      <motion.nav
        className={cn("fixed z-50 w-full will-change-transform", isMobile ? "bottom-6" : "top-6")}
        initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : isMobile ? 150 : -150,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          opacity: { duration: 0.15 },
        }}
      >
        <div className="mx-auto flex justify-center px-4">
          <GlassPanel
            variant={isMobile ? "strong" : "panel"}
            darkMode={theme === "dark"}
            className={cn(
              "flex items-center backdrop-blur-xl border border-white/20 dark:border-white/10",
              isMobile
                ? "justify-evenly gap-2 rounded-full w-auto px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                : "gap-8 rounded-full px-8 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
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
                  {/* Enhanced active indicator with glass effect */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={cn(
                        "absolute",
                        isMobile
                          ? "h-full w-full rounded-full -z-10"
                          : "-bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"
                      )}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    >
                      {isMobile && (
                        <GlassPanel
                          variant="panel"
                          darkMode={theme === "dark"}
                          className="h-full w-full rounded-full backdrop-blur-lg bg-gradient-to-r from-primary/20 to-accent/20"
                        />
                      )}
                    </motion.div>
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
          </GlassPanel>
        </div>
      </motion.nav>
    </div>
  )
}

export default React.memo(MinimalNavbarComponent)
