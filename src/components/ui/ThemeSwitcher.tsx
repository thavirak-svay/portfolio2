"use client"

import { useTheme } from "@/components/ui/ThemeProvider"
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full p-1">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-colors ${
          theme === "light" ? "bg-primary text-white" : "hover:bg-background/80"
        }`}
        aria-label="Light mode"
      >
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ rotate: 15 }}>
          <SunIcon className="w-4 h-4" />
        </motion.div>
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-colors ${
          theme === "dark" ? "bg-primary text-white" : "hover:bg-background/80"
        }`}
        aria-label="Dark mode"
      >
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ rotate: 15 }}>
          <MoonIcon className="w-4 h-4" />
        </motion.div>
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-colors ${
          theme === "system" ? "bg-primary text-white" : "hover:bg-background/80"
        }`}
        aria-label="System theme"
      >
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
          <ComputerDesktopIcon className="w-4 h-4" />
        </motion.div>
      </button>
    </div>
  )
}
