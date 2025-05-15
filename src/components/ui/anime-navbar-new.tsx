"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Update active tab when defaultActive changes from parent component
  useEffect(() => {
    setActiveTab(defaultActive)
  }, [defaultActive])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle clicks outside the navbar to close mobile menu
  useEffect(() => {
    if (!isMobile) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if clicking outside navbar and not on menu button
      if (isMenuOpen && !target.closest('[data-navbar="true"]') && !target.closest('[data-menu-button="true"]')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobile, isMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      const smallMobile = window.innerWidth < 480

      setIsMobile(mobile)
      setIsSmallMobile(smallMobile)

      // Close the menu when resizing from mobile to desktop
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  if (!mounted) return null

  return (
    <div className="fixed top-0 sm:top-6 left-0 right-0 z-[9999]">
      {/* Mobile menu button - only visible on very small screens */}
      {isMobile && isSmallMobile && (
        <div className="fixed top-4 right-4 z-50">
          <button
            data-menu-button="true"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-black/80 rounded-full border border-white/15 shadow-lg"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
              className="w-5 h-0.5 bg-white mb-1.5 transform origin-center"
            />
            <motion.div animate={{ opacity: isMenuOpen ? 0 : 1 }} className="w-5 h-0.5 bg-white mb-1.5" />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              className="w-5 h-0.5 bg-white transform origin-center"
            />
          </button>
        </div>
      )}

      {/* Mobile menu backdrop - only shown when menu is open on very small screens */}
      <AnimatePresence>
        {isMobile && isSmallMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <div
        className={cn(
          "flex justify-center",
          isSmallMobile && isMobile ? (isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible") : ""
        )}
      >
        <motion.div
          data-navbar="true"
          className={cn(
            "flex items-center gap-1 md:gap-2 bg-black/60 border border-white/10 backdrop-blur-lg",
            "py-2 px-2 md:py-2.5 md:px-3 rounded-2xl md:rounded-full shadow-lg relative",
            isMobile ? "w-[95%] sm:w-auto justify-around mt-3" : "",
            className
          )}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isHovered = hoveredTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  // Allow normal navigation for hash links (smooth scroll)
                  if (item.url.startsWith("#")) {
                    e.preventDefault()
                    setActiveTab(item.name)

                    // Handle smooth scrolling
                    const targetId = item.url.substring(1)
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                      })
                    }
                  } else {
                    setActiveTab(item.name)
                  }
                }}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer font-medium transition-all duration-300",
                  "text-white/70 hover:text-white flex items-center justify-center",
                  isMobile ? "px-2 py-1.5 text-xs sm:px-3 sm:py-2" : "px-4 py-2 text-sm",
                  isActive ? "text-white" : ""
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  >
                    {/* Clean, minimal background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />

                    {/* Subtle glass effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-[1px]" />

                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        backgroundSize: "200% 100%",
                      }}
                    />

                    {/* Subtle border */}
                    <div className="absolute inset-0 border border-white/10 rounded-full" />
                  </motion.div>
                )}

                {isMobile ? (
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(isActive ? "text-primary" : "text-white/70")}
                    >
                      <Icon size={isSmallMobile ? 16 : 18} strokeWidth={2} />
                    </motion.div>
                    {!isSmallMobile && <span className="text-[10px] font-medium">{item.name}</span>}
                  </div>
                ) : (
                  <span className="relative z-10">{item.name}</span>
                )}

                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>
              </Link>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
