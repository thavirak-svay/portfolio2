"use client"

import React, { useState, useEffect } from "react"
import { Home, UserCircle, FolderKanban, Award, MessageCircle, PlusSquare } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

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

export default function NavMain() {
  const [activeSection, setActiveSection] = useState("Home")
  const [isMounted, setIsMounted] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sections = ["hero", "about", "skills", "projects", "experience", "gradient-demo", "contact"]

      const scrollPosition = window.scrollY + 200

      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          // Map section ID to navbar item name
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
  }, [activeSection])

  return isMounted ? (
    <div className="fixed-navbar">
      <AnimeNavBar items={items} defaultActive={activeSection} className="nav-shadow" />
    </div>
  ) : null
}
