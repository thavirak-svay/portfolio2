"use client"

import React, { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { DocumentTextIcon, RocketLaunchIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import ClientOnly from "../ui/ClientOnly"
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect"

// Modern 3D card component with Canvas Reveal Effect
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
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The card with content */}
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
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,transparent,white)] bg-black"></div>
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

// Floating elements for background
const FloatingElements = () => {
  const [elements, setElements] = React.useState<React.ReactNode[]>([])

  // Generate elements only on the client side after component mounts
  React.useEffect(() => {
    const newElements = Array.from({ length: 20 }).map((_, index) => (
      <motion.div
        key={index}
        className={`absolute rounded-lg bg-white/5 backdrop-blur-sm border border-white/10
          ${index % 2 === 0 ? "w-8 h-8" : "w-16 h-16"}
          ${index % 3 === 0 ? "bg-primary/10" : "bg-accent/10"}
        `}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))
    setElements(newElements)
  }, [])

  return <div className="absolute inset-0 overflow-hidden -z-10 opacity-40">{elements}</div>
}

const ModernAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects for scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={containerRef} id="about" className="py-20 px-6 relative">
      {/* Background elements */}
      <ClientOnly>
        <FloatingElements />
      </ClientOnly>
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-primary/20 filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-accent/20 filter blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="text-primary text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Backend Specialist</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            Crafting robust, scalable backend solutions for modern applications. Passionate about clean code,
            performance optimization, and elegant architectures.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - text content */}
          <div className="space-y-6">
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              With over 7 years of experience specializing in backend development, I&apos;ve built and architected
              systems that power applications used by millions of users. My focus is on creating scalable, maintainable,
              and high-performance server-side solutions.
            </motion.p>

            <motion.p
              className="opacity-70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I specialize in distributed systems, API design, database optimization, and cloud architecture. My
              approach combines technical expertise with a deep understanding of business requirements to deliver
              solutions that not only work flawlessly but also provide long-term value.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <motion.div
                className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-primary">7+</div>
                <div className="text-sm opacity-70">Years Experience</div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-accent">30+</div>
                <div className="text-sm opacity-70">Projects Completed</div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-sm opacity-70">Happy Clients</div>
              </motion.div>
            </div>
          </div>

          {/* Right side - image with parallax */}
          <motion.div className="relative" style={{ y: imageY }}>
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-70 z-10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-black/20 z-10" />
              <Image src="/projects/portfolio-screenshot.jpg" alt="Developer workspace" fill className="object-cover" />

              {/* Decorative code overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <pre className="text-xs text-white/70 font-mono rounded-lg backdrop-blur-sm p-4 bg-black/30">
                  <code>
                    {`// Backend architecture
const createServer = async () => {
  const app = express();
  app.use(compression());
  app.use(cors());
  
  // API Routes
  app.use('/api/v1', apiRouter);
  
  return app.listen(PORT);
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core strengths - 3D cards */}
        <div className="mt-24">
          <motion.h3
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Core Strengths
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card3D
              icon={<RocketLaunchIcon className="w-6 h-6" />}
              title="Scalable Architecture"
              description="Designing systems that gracefully handle growing user bases and increased load without sacrificing performance."
              colorScheme="pink" // Pink/fuchsia gradient
            />

            <Card3D
              icon={<DocumentTextIcon className="w-6 h-6" />}
              title="API Development"
              description="Creating intuitive, efficient, and secure APIs that provide seamless integration between services."
              colorScheme="blue" // Light blue
            />

            <Card3D
              icon={<UserGroupIcon className="w-6 h-6" />}
              title="Team Leadership"
              description="Leading development teams with a focus on code quality, best practices, and continuous improvement."
              colorScheme="default" // Default cyan
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernAbout
