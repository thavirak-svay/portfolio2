"use client"

import { motion } from "framer-motion"
import React from "react"

interface LightBackgroundProps {
  startingGap?: number
  Breathing?: boolean
  gradientColors?: string[]
  gradientStops?: number[]
  animationSpeed?: number
  breathingRange?: number
  containerStyle?: React.CSSProperties
  containerClassName?: string
  topOffset?: number
  children?: React.ReactNode
}

const LightBackground: React.FC<LightBackgroundProps> = ({
  startingGap = 125,
  Breathing = false,
  gradientColors = ["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"],
  gradientStops = [35, 50, 60, 70, 80, 90, 100],
  breathingRange = 5,
  containerStyle = {},
  topOffset = 0,
  containerClassName = "",
  children,
}) => {
  // Validation: Ensure gradientStops and gradientColors lengths match
  if (gradientColors.length !== gradientStops.length) {
    throw new Error(
      `GradientColors and GradientStops must have the same length.
     Received gradientColors length: ${gradientColors.length},
     gradientStops length: ${gradientStops.length}`
    )
  }

  const gradientStopsString = gradientStops.map((stop, index) => `${gradientColors[index]} ${stop}%`).join(", ")
  const baseGradient = `radial-gradient(${startingGap}% ${startingGap + topOffset}% at 50% 20%, ${gradientStopsString})`

  // Create breathing animation CSS if enabled
  const breathingGradient = Breathing
    ? `radial-gradient(${startingGap + breathingRange}% ${
        startingGap + breathingRange + topOffset
      }% at 50% 20%, ${gradientStopsString})`
    : null

  return (
    <motion.div
      key="light-background"
      initial={{
        opacity: 0,
        scale: 1.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1], // Cubic bezier easing
        },
      }}
      className={`absolute inset-0 overflow-hidden ${containerClassName}`}
    >
      <div
        style={{
          ...containerStyle,
          background: baseGradient,
          animation: Breathing ? `breathingGradient 8s ease-in-out infinite` : undefined,
        }}
        className="absolute inset-0 transition-transform"
      />

      {Breathing && (
        <style jsx>{`
          @keyframes breathingGradient {
            0%,
            100% {
              background: ${baseGradient};
            }
            50% {
              background: ${breathingGradient};
            }
          }
        `}</style>
      )}

      {children}
    </motion.div>
  )
}

export default LightBackground
