"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// This wrapper component ensures that the children are only rendered on the client side
// to prevent hydration errors from random values
// Enhanced with smooth transitions using framer-motion
export default function ClientOnly({
  children,
  showTransition = false,
}: {
  children: React.ReactNode
  showTransition?: boolean
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Small delay for smoother fade-in effect
    const timer = setTimeout(() => {
      setIsClient(true)
    }, 10)

    return () => clearTimeout(timer)
  }, [])

  if (!isClient) {
    return null // Don't render anything on the server
  }

  return (
    <AnimatePresence mode="wait">
      {showTransition ? (
        <motion.div
          key="client-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </AnimatePresence>
  )
}
