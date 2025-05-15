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
    if (!isMobile) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if clicking outside navbar and not on menu button
      if (isMenuOpen && !target.closest('[data-navbar="true"]') && !target.closest('[data-menu-button="true"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isMenuOpen]);

  // Apply a class to the body when the menu is open to prevent scrolling
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobile, isMenuOpen]);
  
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
    <div className="fixed top-0 sm:top-5 left-0 right-0 z-[9999]">
      {/* Mobile menu button - always visible on mobile */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-50">
          <motion.button
            data-menu-button="true"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 bg-black/80 rounded-full border border-white/20 shadow-lg backdrop-blur-md"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.9)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: isMenuOpen 
                ? "0 0 20px rgba(255,255,255,0.2)" 
                : "0 4px 10px rgba(0,0,0,0.3)"
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 2 : 0 }}
              className="w-5 h-0.5 bg-white mb-1.5 transform origin-center"
            />
            <motion.div 
              animate={{ 
                opacity: isMenuOpen ? 0 : 1,
                width: isMenuOpen ? 0 : 20 
              }} 
              className="w-5 h-0.5 bg-white mb-1.5" 
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              className="w-5 h-0.5 bg-white transform origin-center"
            />
          </motion.button>
        </div>
      )}

      {/* Mobile menu backdrop - only shown when menu is open */}
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

      {/* Desktop navbar is always visible, mobile navbar only when menu is open */}
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
        <div
          className={cn(
            "mx-auto px-4 sm:px-0",
            isMobile ? "w-[85%] max-w-xs" : "max-w-2xl w-fit sm:w-auto flex justify-center sm:pt-6"
          )}
        >
          <motion.div
            data-navbar="true"
            className={cn(
              "flex bg-black/50 border border-white/10 backdrop-blur-lg shadow-lg relative",
              isMobile
                ? "flex-col py-6 px-4 rounded-xl mt-16 gap-3"
                : "flex-row items-center gap-3 py-2 px-2 rounded-full",
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
                        // For mobile: close menu first, then scroll after a brief delay
                        if (isMobile) {
                          setIsMenuOpen(false)
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
                    } else {
                      setActiveTab(item.name)
                    }                      // Handle mobile menu closing with a small delay 
                      // to prevent abrupt UI shifts
                      if (isMobile) {
                        setTimeout(() => {
                          setIsMenuOpen(false)
                        }, 300)
                      }
                    }
                  }}
                  onMouseEnter={() => !isMobile && setHoveredTab(item.name)}
                  onMouseLeave={() => !isMobile && setHoveredTab(null)}
                  className={cn(
                    "relative cursor-pointer transition-all duration-300",
                    isMobile
                      ? `${isSmallMobile ? "px-4 py-3" : "px-5 py-3.5"} w-full text-center font-medium rounded-lg`
                      : "px-6 py-3 text-sm font-semibold rounded-full",
                    "text-white/70 hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      className={cn("absolute inset-0 -z-10 overflow-hidden", isMobile ? "rounded-lg" : "rounded-full")}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.03, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 bg-primary/25",
                          isMobile ? "rounded-lg" : "rounded-full",
                          "blur-md"
                        )}
                      />
                      <div
                        className={cn(
                          "absolute inset-[-4px] bg-primary/20",
                          isMobile ? "rounded-lg" : "rounded-full",
                          "blur-xl"
                        )}
                      />
                      <div
                        className={cn(
                          "absolute inset-[-8px] bg-primary/15",
                          isMobile ? "rounded-lg" : "rounded-full",
                          "blur-2xl"
                        )}
                      />
                      <div
                        className={cn(
                          "absolute inset-[-12px] bg-primary/5",
                          isMobile ? "rounded-lg" : "rounded-full",
                          "blur-3xl"
                        )}
                      />

                      {/* Base layer with primary color */}
                      <div
                        className={cn(
                          "absolute inset-0",
                          isMobile ? "rounded-lg" : "rounded-full",
                          "bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                        )}
                      ></div>

                      {/* Shine animation layer with inline style */}
                      <div
                        className={cn("absolute inset-0", isMobile ? "rounded-lg" : "rounded-full")}
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                          transform: "translateX(-100%)",
                          animation: "shine 3s ease-in-out infinite",
                        }}
                      ></div>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-center">
                    <motion.span
                      className="hidden md:inline relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                    <motion.span
                      className="md:hidden relative z-10"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {Icon && <Icon size={18} strokeWidth={2.5} />}
                    </motion.span>
                  </div>

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

                  {/* Mascot removed as requested */}
                </Link>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
