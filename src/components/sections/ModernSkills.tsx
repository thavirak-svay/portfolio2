"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import {
  AcademicCapIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  CommandLineIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  CubeIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline"
import {
  Brain,
  Database,
  GitBranch,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  Code2,
  Palette,
  Globe,
  Workflow,
  TestTube,
  Shield,
} from "lucide-react"
import { GlowingEffect } from "@/components/ui/GlowingEffect"
import DotPattern from "@/components/ui/DotPattern1"
import { cn } from "@/lib/utils"

// Define backendSkills and additionalSkills arrays outside the component
const backendSkillsData = [
  {
    icon: <ServerIcon className="w-6 h-6" />,
    title: "Node.js",
    proficiency: 95,
    description: "Building high-performance backend services, RESTful APIs & microservices with Express & NestJS.",
    color: "primary" as const,
  },
  {
    icon: <CubeIcon className="w-6 h-6" />,
    title: "Go (Golang)",
    proficiency: 78,
    description: "Developing concurrent, high-throughput backend services with exceptional performance.",
    color: "secondary" as const,
  },
  {
    icon: <CubeIcon className="w-6 h-6" />,
    title: "Python",
    proficiency: 85,
    description: "Creating robust web services with FastAPI, Flask & Django for data processing & automation.",
    color: "accent" as const,
  },
  {
    icon: <CubeIcon className="w-6 h-6" />,
    title: "Database Design",
    proficiency: 92,
    description: "Expert in schema design, query optimization & management of SQL and NoSQL databases.",
    color: "primary" as const,
  },
]

const additionalSkillsData = [
  { name: "TypeScript" },
  { name: "GraphQL" },
  { name: "REST API" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "AWS" },
  { name: "CI/CD" },
  { name: "Microservices" },
  { name: "Redis" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "Serverless" },
  { name: "RabbitMQ" },
  { name: "Kafka" },
  { name: "gRPC" },
  { name: "JWT" },
  { name: "OAuth" },
  { name: "WebSockets" },
]

// Define colorClasses for SkillCard outside the component
const skillCardColorClasses = {
  primary: {
    text: "text-primary",
    border: "group-hover:border-primary",
    progressBg: "bg-primary/20",
    progressFill: "bg-primary",
    icon: "text-primary group-hover:bg-primary/10",
  },
  accent: {
    text: "text-accent",
    border: "group-hover:border-accent",
    progressBg: "bg-accent/20",
    progressFill: "bg-accent",
    icon: "text-accent group-hover:bg-accent/10",
  },
  secondary: {
    text: "text-secondary",
    border: "group-hover:border-secondary",
    progressBg: "bg-secondary/20",
    progressFill: "bg-secondary",
    icon: "text-secondary group-hover:bg-secondary/10",
  },
}

// Skill card with progress indicator
const SkillCardComponent = ({
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

  // Define color classes based on theme color
  const classes = skillCardColorClasses[color]

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Outer container with border for glowing effect */}
      <div
        className="group relative rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3 h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Add GlowingEffect */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={120}
          inactiveZone={0}
          borderWidth={3}
          variant="lightgray"
        />

        {/* Inner content container with dot pattern */}
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-white/5 backdrop-blur-sm p-6">
          {/* Skill header with icon */}
          <div className="flex items-start justify-between mb-4 relative z-10">
            <div className={`p-3 rounded-lg bg-white/5 transition-colors duration-300 ${classes.icon}`}>{icon}</div>
            <h3 className={`text-lg font-bold transition-colors duration-300 group-hover:${classes.text}`}>{title}</h3>
          </div>

          {/* Progress bar with enhanced animation */}
          <div className="mb-4 relative z-10">
            <div className="flex justify-between mb-1">
              <span className="text-sm opacity-70">Proficiency</span>
              <span className={`text-sm font-medium ${classes.text}`}>{proficiency}%</span>
            </div>
            <div className={`h-1.5 w-full rounded-full ${classes.progressBg}`}>
              <motion.div
                className={`h-full rounded-full ${classes.progressFill}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed opacity-70 relative z-10">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
const SkillCard = React.memo(SkillCardComponent)

// Skill tag component for additional technologies
const SkillTagComponent = ({ label }: { label: string; icon?: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
      <span className="text-sm">{label}</span>
    </div>
  )
}
const SkillTag = React.memo(SkillTagComponent)

// Define StatCard component outside ModernSkillsComponent
const StatCardComponent = ({
  number,
  title,
  description,
  delay = 0,
  color = "primary",
}: {
  number: string
  title: string
  description: string
  delay?: number
  color?: "primary" | "accent" | "secondary"
}) => {
  const colorClass = color === "primary" ? "text-primary" : color === "accent" ? "text-accent" : "text-secondary"
  const isProjectsCard = title === "Projects Completed"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="group relative rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3 h-full">
        <GlowingEffect
          spread={isProjectsCard ? 60 : 40}
          glow={true}
          disabled={false}
          proximity={isProjectsCard ? 120 : 64}
          inactiveZone={isProjectsCard ? 0 : 0.01}
          borderWidth={isProjectsCard ? 4 : 3}
          variant="lightgray"
        />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <div className={`text-3xl font-bold ${colorClass} mb-2 relative z-10`}>{number}</div>
          <h3 className="text-lg font-semibold mb-1 relative z-10">{title}</h3>
          <p className="text-sm opacity-70 relative z-10">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
const StatCard = React.memo(StatCardComponent)

// Modern Skills main component
const ModernSkillsComponent = () => {
  // Main backend skills data
  // const backendSkills = [ // Now defined outside as backendSkillsData
  // ... (original data here)
  // ]

  // Additional skills for tags display
  // const additionalSkills = [ // Now defined outside as additionalSkillsData
  // ... (original data here)
  // ]

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mt-8 mb-36 relative"
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

        {/* Main skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {backendSkillsData.map((skill, index) => (
            <SkillCard
              key={`skill-${index}`}
              icon={skill.icon}
              title={skill.title}
              proficiency={skill.proficiency}
              description={skill.description}
              color={skill.color}
            />
          ))}
        </div>

        {/* Experience levels section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <StatCard
            number="7+"
            title="Years Experience"
            description="Building production-grade backend systems for diverse industries."
            color="primary"
            delay={0.1}
          />
          <StatCard
            number="20+"
            title="Projects Completed"
            description="From robust microservices to scalable monoliths, delivering reliable solutions."
            color="accent"
            delay={0.2}
          />
          <StatCard
            number="99%+"
            title="Uptime Achieved"
            description="Consistently delivering high-availability systems that meet client needs."
            color="secondary"
            delay={0.3}
          />
        </div>

        {/* Additional skills section */}
        <motion.div
          className="mt-6 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Add dot pattern only to this section */}
          <DotPattern width={8} height={8} cx={1} cy={1} cr={0.5} className="fill-white/5 opacity-50" />

          <h3 className="text-xl font-semibold mb-6 relative z-10">Additional Technologies</h3>
          <div className="flex flex-wrap gap-3 relative z-10">
            {additionalSkillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <SkillTag label={skill.name} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ModernSkills = React.memo(ModernSkillsComponent)
export default ModernSkills
