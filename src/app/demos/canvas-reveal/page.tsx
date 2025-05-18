"use client"

import React, { useState } from "react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import Link from "next/link"
import { DocumentTextIcon, RocketLaunchIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { AnimatePresence, motion } from "framer-motion"

// Card3D component from ModernAbout.tsx
type ColorScheme = "default" | "blue" | "pink"

const Card3D = ({
  icon,
  title,
  description,
  colorScheme = "default",
}: {
  icon: React.ReactNode
  title: string
  description: string
  colorScheme?: ColorScheme
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Color configurations based on colorScheme
  const colorConfig = {
    default: {
      effectColors: [[0, 255, 255]], // Default cyan
      glowClasses: "from-cyan-500 to-cyan-400",
    },
    blue: {
      effectColors: [[125, 211, 252]], // Light blue
      glowClasses: "from-blue-500 to-blue-400",
    },
    pink: {
      effectColors: [
        [236, 72, 153], // Pink
        [232, 121, 249], // Fuchsia
      ],
      glowClasses: "from-pink-500 to-fuchsia-400",
    },
  }

  const { effectColors, glowClasses } = colorConfig[colorScheme]

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container */}
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm h-full relative overflow-hidden">
        {/* Canvas Effect Container */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={effectColors}
            dotSize={2}
            showGradient={true}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(200px_at_center,black,white)] bg-black"></div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${glowClasses} opacity-0 z-10`}
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ filter: "blur(8px)" }}
        />

        {/* Card content */}
        <div className="relative z-20 p-6">
          <div className="p-3 rounded-lg bg-white/5 w-fit mb-4">{icon}</div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-70">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function CanvasRevealDemo() {
  const [sectionHovered, setSectionHovered] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link href="/demos" className="inline-flex items-center text-blue-400 hover:underline mb-8 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            <span>Back to Demos</span>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Canvas Reveal Effect Demo</h1>
          <p className="text-lg opacity-80 max-w-3xl">
            This demo showcases the Canvas Reveal Effect component. Hover over the cards below to see the effect in
            action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="h-64 group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <CanvasRevealEffect
                containerClassName="bg-black"
                animationSpeed={0.5}
                colors={[[0, 255, 255]]} // Default cyan
                dotSize={2}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 0.8]}
                showGradient={false}
              />
            </div>
            <div className="p-6 h-full flex flex-col items-center justify-center relative z-10">
              <h3 className="text-xl font-semibold mb-3">Cyan Default</h3>
              <p className="text-center opacity-70">The default cyan reveal effect used in Team Leadership card</p>
            </div>
          </div>

          <div className="h-64 group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <CanvasRevealEffect
                containerClassName="bg-black"
                animationSpeed={0.5}
                colors={[[125, 211, 252]]} // Light blue
                dotSize={2}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 0.8]}
                showGradient={false}
              />
            </div>
            <div className="p-6 h-full flex flex-col items-center justify-center relative z-10">
              <h3 className="text-xl font-semibold mb-3">Light Blue</h3>
              <p className="text-center opacity-70">Light blue reveal effect used in API Development card</p>
            </div>
          </div>

          <div className="h-64 group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <CanvasRevealEffect
                containerClassName="bg-black"
                animationSpeed={0.5}
                colors={[
                  [236, 72, 153], // Pink
                  [232, 121, 249], // Fuchsia
                ]}
                dotSize={2}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 0.8]}
                showGradient={false}
              />
            </div>
            <div className="p-6 h-full flex flex-col items-center justify-center relative z-10">
              <h3 className="text-xl font-semibold mb-3">Pink & Fuchsia</h3>
              <p className="text-center opacity-70">Pink and fuchsia gradient used in Scalable Architecture card</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Core Strengths Cards Implementation</h2>
          <p className="text-lg opacity-80 max-w-3xl mb-8">
            Below is an example of the actual Core Strengths cards with different color schemes. Hover over each card to
            see the different effects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pink Card */}
            <Card3D
              icon={<RocketLaunchIcon className="w-6 h-6" />}
              title="Scalable Architecture"
              description="Designing systems that gracefully handle growing user bases and increased load without sacrificing performance."
              colorScheme="pink"
            />

            {/* Blue Card */}
            <Card3D
              icon={<DocumentTextIcon className="w-6 h-6" />}
              title="API Development"
              description="Creating intuitive, efficient, and secure APIs that provide seamless integration between services."
              colorScheme="blue"
            />

            {/* Default/Cyan Card */}
            <Card3D
              icon={<UserGroupIcon className="w-6 h-6" />}
              title="Team Leadership"
              description="Leading development teams with a focus on code quality, best practices, and continuous improvement."
              colorScheme="default"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Full Section Effect</h2>
          <p className="text-lg opacity-80 max-w-3xl mb-8">
            This example shows how to apply the effect to an entire section instead of individual cards.
          </p>

          <div
            className="h-[40rem] relative overflow-hidden rounded-xl border border-white/10 bg-black/30 flex items-center justify-center"
            onMouseEnter={() => setSectionHovered(true)}
            onMouseLeave={() => setSectionHovered(false)}
          >
            <AnimatePresence>
              {sectionHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-0"
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-transparent"
                    colors={[
                      [59, 130, 246], // Blue
                      [139, 92, 246], // Purple
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative z-20 text-center max-w-2xl p-8">
              <p className="md:text-2xl text-2xl font-medium text-white">
                "With insomnia, nothing's real. Everything is far away. Everything is a copy, of a copy, of a copy."
              </p>
            </div>

            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,transparent,white)] bg-black"></div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Component API</h2>

          <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
            <pre className="text-sm overflow-x-auto">
              {`<CanvasRevealEffect
  containerClassName="bg-black"    // Container background class
  animationSpeed={0.5}             // Animation speed (0.1-2.0)
  colors={[[0, 255, 255]]}         // RGB color values for dots
  opacities={[0.2, 0.4, 0.8]}      // Opacity values for dots
  dotSize={2}                      // Size of the dots (px)
  showGradient={false}             // Show gradient overlay
/>`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mb-2">Properties</h3>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>
              <strong>containerClassName</strong>: Custom class for the container background
            </li>
            <li>
              <strong>animationSpeed</strong>: Speed of the animation (0.1 slower, 1.0+ faster)
            </li>
            <li>
              <strong>colors</strong>: Array of RGB color values for the dots
            </li>
            <li>
              <strong>opacities</strong>: Array of opacity values for the dots
            </li>
            <li>
              <strong>dotSize</strong>: Size of the dots in pixels
            </li>
            <li>
              <strong>showGradient</strong>: Whether to show the gradient overlay
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">Creating a Less Chaotic Effect</h3>
          <p className="opacity-90 mb-4">For a more subtle and controlled reveal effect, consider these adjustments:</p>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>
              <strong>Slow the animation</strong>: Use a lower <code>animationSpeed</code> value (0.1-0.2)
            </li>
            <li>
              <strong>Reduce dot size</strong>: Set <code>dotSize</code> to a smaller value (1-1.5)
            </li>
            <li>
              <strong>More uniform opacities</strong>: Use a more subtle progression in the <code>opacities</code> array
            </li>
            <li>
              <strong>Enable gradient overlay</strong>: Set <code>showGradient</code> to true for depth
            </li>
            <li>
              <strong>Use softer colors</strong>: Choose colors that complement your UI rather than stand out
            </li>
          </ul>

          <div className="bg-gray-800/50 p-6 rounded-lg mt-6">
            <p className="mb-2 text-sm font-semibold">Example configuration for a subtle effect:</p>
            <pre className="text-sm overflow-x-auto">
              {`<CanvasRevealEffect
  animationSpeed={0.2}
  containerClassName="bg-black"
  colors={[[140, 107, 236]]} // Purple color
  dotSize={1.5}
  opacities={[0.1, 0.15, 0.2, 0.25, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]}
  showGradient={true}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
