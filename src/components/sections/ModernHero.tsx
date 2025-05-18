"use client"

import React from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDownIcon, CommandLineIcon, CodeBracketIcon, ServerIcon } from "@heroicons/react/24/outline"
import ClientOnly from "../ui/ClientOnly"
import Background from "../ui/Background"

// 3D Code Block Component
const CodeBlock3D = () => {
  return (
    <div className="relative perspective-1000 w-full h-full">
      <div className="relative transform-gpu rotate-y-6 rotate-x-12 transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-lg -z-10"></div>

        {/* Code window frame */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl">
          {/* Code window header */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-black/50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-white/70 font-mono">backend_developer.ts</span>
          </div>

          {/* Code content */}
          <div className="p-6">
            <pre className="text-xs sm:text-sm md:text-base font-mono">
              <div className="text-blue-400">
                class <span className="text-green-400">BackendDeveloper</span> {"{"}
              </div>
              <div className="pl-4 text-yellow-400">constructor() {"{"}</div>
              <div className="pl-8 text-white">
                this.<span className="text-blue-300">languages</span> = [
              </div>
              <div className="pl-12 text-orange-300">&apos;TypeScript&apos;, &apos;Python&apos;, &apos;Go&apos;</div>
              <div className="pl-8 text-white">];</div>
              <div className="pl-8 text-white">
                this.<span className="text-blue-300">databases</span> = [
              </div>
              <div className="pl-12 text-orange-300">
                &apos;PostgreSQL&apos;, &apos;MongoDB&apos;, &apos;Redis&apos;
              </div>
              <div className="pl-8 text-white">];</div>
              <div className="pl-8 text-white">
                this.<span className="text-blue-300">frameworks</span> = [
              </div>
              <div className="pl-12 text-orange-300">&apos;Node.js&apos;, &apos;Express&apos;, &apos;NestJS&apos;</div>
              <div className="pl-8 text-white">];</div>
              <div className="pl-4 text-yellow-400">{"}"}</div>
              <div className="pl-4 text-purple-400">
                createScalableSolutions<span className="text-white">()</span> {"{"}
              </div>
              <div className="pl-8 text-green-300">{/* Your vision, my expertise */}</div>
              <div className="pl-8 text-pink-400">
                return <span className="text-orange-300">&apos;Robust Systems&apos;</span>;
              </div>
              <div className="pl-4 text-purple-400">{"}"}</div>
              <div className="text-blue-400">{"}"}</div>
            </pre>
          </div>
        </div>

        {/* Reflection effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/10 to-transparent rounded-xl transform translate-y-full scale-y-50 blur-sm opacity-40"></div>
      </div>
    </div>
  )
}

// Feature Card
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

// Main Hero Component
const ModernHero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center pt-20 pb-10 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <ClientOnly showTransition={true}>
        <Background
          Breathing={true}
          startingGap={140}
          breathingRange={10}
          animationSpeed={0.01}
          gradientColors={[
            "rgba(10, 10, 10, 1)",
            "rgba(41, 121, 255, 0.2)", // Primary blue
            "rgba(118, 69, 217, 0.2)", // Purple accent
            "rgba(22, 163, 74, 0.1)", // Green secondary
            "rgba(61, 90, 254, 0.15)",
          ]}
          gradientStops={[20, 40, 65, 85, 100]}
          topOffset={10}
          containerClassName="opacity-90"
        />
      </ClientOnly>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-fit px-5 py-2.5 border border-green-400/30 bg-gradient-to-r from-green-600/40 via-emerald-500/30 to-green-400/30 rounded-full backdrop-blur-md flex items-center gap-3.5 shadow-lg shadow-green-500/30"
          >
            {/* Animated status indicator with improved effects */}
            <div className="relative flex-shrink-0">
              {/* Outermost glow */}
              <motion.span
                className="absolute rounded-full bg-green-400/20"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.6, 1],
                  filter: ["blur(2px)", "blur(3px)", "blur(2px)"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.span>

              {/* Core dot with enhanced pulse */}
              <motion.span
                className="inline-block w-3 h-3 rounded-full bg-gradient-to-b from-green-300 to-green-500"
                animate={{
                  opacity: [0.85, 1, 0.85],
                  scale: [0.95, 1.05, 0.95],
                  boxShadow: [
                    "0 0 5px rgba(74, 222, 128, 0.5)",
                    "0 0 12px rgba(74, 222, 128, 0.8)",
                    "0 0 5px rgba(74, 222, 128, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.span>
            </div>

            <motion.div className="flex flex-col">
              <motion.span className="text-xs font-medium text-green-300">Available for</motion.span>
              <motion.span className="text-sm font-bold text-white tracking-wide">New Opportunities</motion.span>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <div>Building</div>
            <div className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary">
              <TypeAnimation
                sequence={[
                  "Scalable APIs",
                  1500,
                  "Microservices",
                  1500,
                  "Cloud Solutions",
                  1500,
                  "Data Pipelines",
                  1500,
                ]}
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
          <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-lg">
            Transforming complex requirements into elegant, high-performance backend solutions. Specializing in scalable
            architectures, database optimization, and cloud-native applications.
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
              icon={<ServerIcon className="w-5 h-5" />}
              title="API Development"
              description="RESTful & GraphQL APIs built for performance and reliability"
            />
            <FeatureCard
              icon={<CommandLineIcon className="w-5 h-5" />}
              title="Microservices"
              description="Scalable architectures with Docker & Kubernetes"
            />
          </div>

          {/* Tech stack */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Python", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"].map(
                (tech, index) => (
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
                )
              )}
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

export default ModernHero
