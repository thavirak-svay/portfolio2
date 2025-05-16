"use client"

import React from "react"
import { motion } from "framer-motion"
import { CodeBracketIcon, ServerIcon } from "@heroicons/react/24/outline"
import Background from "../ui/Background"
import ClientOnly from "../ui/ClientOnly"

// Feature Card similar to what's used in other components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm opacity-70 mt-1">{description}</p>
      </div>
    </motion.div>
  )
}

// Main Gradient Section Component that integrates well with the existing design
const ModernGradientSection = () => {
  return (
    <section
      id="gradient-demo"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 overflow-hidden"
    >
      <ClientOnly showTransition={true}>
        <Background
          Breathing={true}
          startingGap={120}
          breathingRange={15}
          animationSpeed={0.015}
          gradientColors={[
            "rgba(10, 10, 10, 1)",
            "rgba(41, 121, 255, 0.3)", // Primary blue that matches the existing theme
            "rgba(118, 69, 217, 0.25)", // Purple accent
            "rgba(255, 109, 0, 0.2)",
            "rgba(0, 230, 118, 0.15)",
            "rgba(61, 90, 254, 0.2)",
          ]}
          gradientStops={[20, 40, 55, 70, 85, 100]}
          topOffset={10}
        />
      </ClientOnly>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-fit px-3 py-1.5 border border-white/10 bg-white/5 rounded-full backdrop-blur-md flex items-center gap-2"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></span>
            <span className="text-xs font-medium">Animation & Effects</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <div>Custom</div>
            <div className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary">
              Gradient Animations
            </div>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-lg">
            Customizable animated radial gradient background with a subtle breathing effect. Perfect for creating
            engaging and dynamic user interfaces with minimal effort.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <FeatureCard
              icon={<ServerIcon className="w-5 h-5" />}
              title="Dynamic Animation"
              description="Subtle breathing effect that creates an engaging background without distracting users"
            />
            <FeatureCard
              icon={<CodeBracketIcon className="w-5 h-5" />}
              title="Customizable Colors"
              description="Fully customizable color schemes to match any design or branding requirements"
            />
            <FeatureCard
              icon={<div className="flex items-center justify-center w-5 h-5">✨</div>}
              title="Performance Optimized"
              description="Lightweight implementation with minimal impact on application performance"
            />
          </div>

          {/* Code snippet with gradient background */}
          <motion.div
            className="mt-12 relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-white/70 font-mono">animated-gradient.tsx</span>
              </div>
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto p-4 bg-black/50 rounded-lg">
                <code>{`<Background
  Breathing={true}
  startingGap={120}
  breathingRange={15}
  animationSpeed={0.015}
  gradientColors={[
    "rgba(10, 10, 10, 1)",
    "rgba(41, 121, 255, 0.3)",
    "rgba(118, 69, 217, 0.25)",
  ]}
  gradientStops={[20, 60, 100]}
  topOffset={10}
/>`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Additional CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/gradient"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              See Full Demo
            </motion.a>

            <motion.a
              href="/gradient-demo"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-white/10 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Variations
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernGradientSection
