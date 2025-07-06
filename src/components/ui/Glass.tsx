"use client"

import { cn } from "@/lib/utils"
import { motion, MotionProps } from "framer-motion"
import React from "react"

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Glass = React.forwardRef<HTMLDivElement, GlassProps & MotionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/5 backdrop-blur-lg",
          "dark:border-white/10 dark:bg-black/5 dark:shadow-lg dark:shadow-black/5",
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Glass.displayName = "Glass"
const MotionGlass = motion(Glass)

export default Glass
export { MotionGlass }
