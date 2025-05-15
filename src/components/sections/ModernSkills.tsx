"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { CodeBracketIcon, ServerIcon, CubeIcon, CircleStackIcon } from "@heroicons/react/24/outline"

// Skill progress component with radial progress indicator and hover effect
const SkillCard = ({
  icon,
  title,
  proficiency,
  description,
  color = "primary",
}: {
  icon: React.ReactNode
  title: string
  proficiency: number
  description: string
  color?: "primary" | "accent" | "secondary"
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Calculate the circle's stroke properties
  const radius = 33
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (proficiency / 100) * circumference

  // Different background colors based on theme
  const bgColorMap = {
    primary: "bg-primary/5 border-primary/20",
    accent: "bg-accent/5 border-accent/20",
    secondary: "bg-secondary/5 border-secondary/20",
  }

  // Different text colors based on theme
  const textColorMap = {
    primary: "text-primary",
    accent: "text-accent",
    secondary: "text-secondary",
  }

  return (
    <motion.div
      className={`relative p-6 rounded-xl border ${bgColorMap[color]} backdrop-blur-sm flex flex-col gap-4`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Radial progress ring */}
      <div className="w-20 h-20 relative">
        <svg className="w-20 h-20" viewBox="0 0 100 100">
          {/* Background ring */}
          <circle
            className="text-gray-300/20 dark:text-gray-700/30"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />

          {/* Progress ring */}
          <motion.circle
            className={textColorMap[color]}
            strokeWidth="6"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            strokeDasharray={circumference}
          />
        </svg>

        {/* Icon in the center */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${textColorMap[color]}`}>
          {icon}
        </div>
      </div>

      {/* Skill title and proficiency */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{title}</h3>
          <span className={`${textColorMap[color]} font-bold`}>{proficiency}%</span>
        </div>

        {/* Skill description with animation */}
        <motion.p
          className="text-sm opacity-70"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

// Modern skill tag component for smaller skills
const SkillTag = ({ label, icon }: { label: string; icon?: React.ReactNode }) => {
  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span className="text-sm">{label}</span>
    </motion.div>
  )
}

// Modern Skills main component
const ModernSkills = () => {
  // Main backend skills data
  const backendSkills = [
    {
      icon: <ServerIcon className="w-8 h-8" />,
      title: "Node.js",
      proficiency: 95,
      description:
        "Expert in building high-performance backend services, RESTful APIs, and microservices using Express and NestJS frameworks.",
      color: "primary" as const,
    },
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Python",
      proficiency: 85,
      description: "Proficient with FastAPI, Flask, and Django for web services, data processing, and automation.",
      color: "accent" as const,
    },
    {
      icon: <CubeIcon className="w-8 h-8" />,
      title: "Go",
      proficiency: 78,
      description: "Building concurrent, high-throughput backend services with excellent performance characteristics.",
      color: "secondary" as const,
    },
    {
      icon: <CircleStackIcon className="w-8 h-8" />,
      title: "Database Design",
      proficiency: 92,
      description:
        "Schema design, optimization, and management of SQL and NoSQL databases including PostgreSQL, MongoDB, and Redis.",
      color: "primary" as const,
    },
  ]

  // Additional skills for tags display
  const additionalSkills = [
    "TypeScript",
    "GraphQL",
    "REST API",
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Microservices",
    "Redis",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Serverless",
    "RabbitMQ",
    "Kafka",
    "gRPC",
    "JWT",
    "OAuth",
    "WebSockets",
  ]

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-primary/20 filter blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-accent/20 filter blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="text-primary text-sm font-medium">Expert Backend Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Technical Expertise</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            With extensive experience across multiple backend technologies, I build robust, scalable systems that handle
            complex requirements with elegant solutions.
          </p>
        </motion.div>

        {/* Main skills with circular progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {backendSkills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              proficiency={skill.proficiency}
              description={skill.description}
              color={skill.color}
            />
          ))}
        </div>

        {/* Additional skills section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
              >
                <SkillTag label={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience levels section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
            <p className="text-sm opacity-70">Building production-grade backend systems for various industries.</p>
          </motion.div>

          <motion.div
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-accent mb-2">30+</div>
            <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
            <p className="text-sm opacity-70">From microservices to monoliths, delivering reliable solutions.</p>
          </motion.div>

          <motion.div
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-secondary mb-2">99%</div>
            <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
            <p className="text-sm opacity-70">
              Consistent delivery of high-quality code that meets client requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ModernSkills
