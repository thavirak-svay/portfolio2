"use client"

import GlassEffect from "@/components/ui/GlassEffect"
import { useTheme } from "@/components/ui/ThemeProvider"
import { ArrowDownIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { Code, Sparkles, Zap } from "lucide-react"
import React, { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import LightBackground from "../ui/LightBackground"

// Define these outside the component so they are not recreated on every render
const heroGradientColors = [
  "rgba(10, 10, 10, 1)",
  "rgba(41, 121, 255, 0.2)", // Primary blue
  "rgba(118, 69, 217, 0.2)", // Purple accent
  "rgba(22, 163, 74, 0.1)", // Green secondary
  "rgba(61, 90, 254, 0.15)",
]
const heroGradientStops = [20, 40, 65, 85, 100]

// Define tech stack array outside the component
const techStack = ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL", "Docker", "Maven", "JUnit", "Git"]

// Feature Card Component with Enhanced Glassmorphism
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: any
  title: string
  description: string
  delay: number
}) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      <GlassEffect className="p-6 group transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </GlassEffect>
    </motion.div>
  )
}

// Enhanced 3D Code Block with Better Glassmorphism
const CodeBlock3D = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 20 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative transform-gpu transition-transform duration-300 hover:rotateX-5 hover:rotateY-5"
        style={{ transformStyle: "preserve-3d" }}
      >
        <GlassEffect className="p-6 font-mono text-sm overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">portfolio.tsx</span>
          </div>

          <div className="space-y-2 text-left">
            <div className="text-purple-600 dark:text-purple-400">
              <span className="text-gray-500 dark:text-gray-400">const</span> developer = {"{"}
            </div>
            <div className="pl-4">
              <div className="text-blue-600 dark:text-blue-400">
                name: <span className="text-green-600 dark:text-green-400">&apos;John Doe&apos;</span>,
              </div>
              <div className="text-blue-600 dark:text-blue-400">
                skills: [<span className="text-green-600 dark:text-green-400">&apos;React&apos;</span>,{" "}
                <span className="text-green-600 dark:text-green-400">&apos;TypeScript&apos;</span>],
              </div>
              <div className="text-blue-600 dark:text-blue-400">
                passion: <span className="text-green-600 dark:text-green-400">&apos;Building Amazing UIs&apos;</span>
              </div>
            </div>
            <div className="text-purple-600 dark:text-purple-400">{"}"}</div>
          </div>

          {/* Animated cursor */}
          <motion.div
            className="inline-block w-2 h-5 bg-blue-500 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </GlassEffect>

        {/* 3D shadow effect */}
        <div
          className="absolute inset-0 bg-black/20 dark:bg-black/40 rounded-[20px] -z-10"
          style={{
            transform: "translateZ(-50px) translateY(10px)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </motion.div>
  )
}

// Main Hero Component
const ModernHeroComponent = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center pt-20 pb-10 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <LightBackground
        Breathing={true}
        startingGap={140}
        breathingRange={10}
        gradientColors={heroGradientColors}
        gradientStops={heroGradientStops}
        topOffset={10}
        containerClassName="opacity-90"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <div>Building</div>
            <div className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary">
              <TypeAnimation
                sequence={["Spring Boot Apps", 1500, "REST APIs", 1500, "Java Services", 1500, "Microservices", 1500]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  display: "inline-block",
                  minWidth: "320px",
                  minHeight: "1.2em",
                  textShadow: "0 0 0",
                }}
                className="brightness-150 font-bold"
              />
            </div>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
            I&apos;m a passionate backend developer who thrives on building high-performance, scalable applications that
            power today&apos;s digital experiences. With expertise in Node.js, Python, and cloud technologies, I create
            robust server-side solutions that handle millions of requests while maintaining exceptional performance.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-xl">
            From microservices architecture to API design, I don&apos;t just write code – I craft digital experiences
            that scale.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              View Projects
              <ArrowDownIcon className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border border-white/10 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Get In Touch
              <CodeBracketIcon className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
            <FeatureCard
              icon={Code}
              title="Clean Code"
              description="Writing maintainable, scalable solutions"
              delay={0.5}
            />
            <FeatureCard icon={Zap} title="Performance" description="Optimized for speed and efficiency" delay={0.6} />
            <FeatureCard
              icon={Sparkles}
              title="Innovation"
              description="Always learning cutting-edge tech"
              delay={0.7}
            />
          </div>

          {/* Tech stack */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="text-xs px-3 py-1.5 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D code visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden lg:block h-[600px]"
        >
          <CodeBlock3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a href="#about" className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium opacity-70">Scroll Down</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
            <ArrowDownIcon className="w-5 h-5 opacity-70" />
          </motion.div>
        </a>
      </motion.div>

      {/* Custom CSS for text gradient and animations */}
      <style jsx global>{`
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-6 {
          transform: rotateY(6deg);
        }

        .rotate-x-12 {
          transform: rotateX(12deg);
        }

        .rotate-y-0 {
          transform: rotateY(0deg);
        }

        .rotate-x-0 {
          transform: rotateX(0deg);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .badge-shine {
          position: relative;
          overflow: hidden;
        }

        .badge-shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shine 4s infinite linear;
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}

const ModernHero = React.memo(ModernHeroComponent)
export default ModernHero
