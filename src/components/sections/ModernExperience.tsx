"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { BuildingOfficeIcon } from "@heroicons/react/24/outline"
import Background from "../ui/Background"
import { GlowingEffect } from "@/components/ui/GlowingEffect"

// Define gradient colors and stops outside the component
const experienceGradientColors = [
  "rgba(10, 10, 10, 1)",
  "rgba(41, 121, 255, 0.2)", // Primary blue
  "rgba(118, 69, 217, 0.2)", // Purple accent
  "rgba(22, 163, 74, 0.1)", // Green secondary
  "rgba(61, 90, 254, 0.15)",
]
const experienceGradientStops = [20, 40, 65, 85, 100]

// Experience interface
interface Experience {
  id: number
  role: string
  company: string
  duration: string
  date: string
  description: string[]
  technologies: string[]
  featured: boolean
}

// Sample experience data - defined outside the component
const experiencesData: Experience[] = [
  {
    id: 1,
    role: "Lead Backend Developer",
    company: "TechCorp Solutions",
    duration: "2 years",
    date: "2023 - Present",
    description: [
      "Architected and implemented scalable microservices infrastructure supporting 5M+ daily active users",
      "Led a team of 5 backend developers to deliver critical API services with 99.99% uptime",
      "Reduced database query times by 70% through advanced indexing and query optimization",
      "Implemented comprehensive CI/CD pipelines reducing deployment time from days to minutes",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Redis", "GraphQL"],
    featured: true,
  },
  {
    id: 2,
    role: "Senior Backend Developer",
    company: "DataStream Inc",
    duration: "3 years",
    date: "2020 - 2023",
    description: [
      "Designed and built high-throughput data processing pipelines handling 10TB+ daily",
      "Developed RESTful and GraphQL APIs consumed by multiple frontend applications",
      "Improved system reliability with comprehensive monitoring and alerting infrastructure",
      "Mentored junior developers and conducted code reviews to ensure quality standards",
    ],
    technologies: ["Python", "FastAPI", "MongoDB", "RabbitMQ", "Docker", "AWS Lambda", "DynamoDB"],
    featured: true,
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "Innovate Software",
    duration: "2 years",
    date: "2018 - 2020",
    description: [
      "Built and maintained RESTful APIs for mobile and web applications",
      "Implemented authentication and authorization systems using OAuth 2.0 and JWT",
      "Created automated testing frameworks improving code coverage to 90%",
      "Collaborated with frontend teams to design efficient API contracts",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "MySQL", "Jest", "Docker"],
    featured: false,
  },
  {
    id: 4,
    role: "Software Engineer Intern",
    company: "StartupVision",
    duration: "1 year",
    date: "2017 - 2018",
    description: [
      "Assisted in developing CRUD APIs for internal tools",
      "Implemented data analytics modules for tracking user behavior",
      "Created automated reports and notifications using cron jobs",
      "Participated in Agile development process with bi-weekly sprints",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ"],
    featured: false,
  },
]

// Define color classes for experience cards
const experienceColorClasses = {
  featured: {
    text: "text-primary",
    border: "border-primary/30",
    icon: "text-primary",
  },
  standard: {
    text: "text-white",
    border: "border-white/10",
    icon: "text-white/70",
  },
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [isHovered, setIsHovered] = useState(false)
  const classes = experience.featured ? experienceColorClasses.featured : experienceColorClasses.standard

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

        {/* Inner content container */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-white/5 backdrop-blur-sm p-6">
          {/* Header section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3 relative z-10">
            <div>
              <h3
                className={`text-xl md:text-2xl font-bold transition-colors duration-300 group-hover:${classes.text}`}
              >
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-white/70">
                <BuildingOfficeIcon className={`w-4 h-4 ${classes.icon} flex-shrink-0`} />
                <span>{experience.company}</span>
              </div>
            </div>

            <div className="text-sm font-medium px-4 py-2 rounded-full bg-black/50 border border-white/10 w-fit whitespace-nowrap shadow-lg">
              {experience.date}
            </div>
          </div>

          {/* Description section */}
          <div className="mb-6 relative z-10">
            <ul className="space-y-3 mb-6 text-white/80 pl-5">
              {experience.description.map((item, idx) => (
                <li key={idx} className="list-disc list-outside">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies section */}
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-wider text-white/50 mb-3 font-medium">Core Technologies</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-md text-sm bg-white/5 text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ModernExperienceComponent = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 overflow-hidden"
    >
      {/* Background with gradient effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Background
          Breathing={true}
          startingGap={140}
          breathingRange={5}
          animationSpeed={0.01}
          gradientColors={experienceGradientColors}
          gradientStops={experienceGradientStops}
          topOffset={10}
          containerClassName="opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Professional Header Section */}
        <motion.div
          className="text-center mt-8 mb-24 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="text-primary text-sm font-medium">Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Work Experience</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            My professional journey as a backend developer, architecting scalable systems and leading high-performance
            engineering teams across multiple industries.
          </p>
        </motion.div>

        {/* Professional Experience Section - Technical Expertise Card Style */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-8">
            {experiencesData.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ModernExperience = React.memo(ModernExperienceComponent)
export default ModernExperience
