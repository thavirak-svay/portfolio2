"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { CalendarIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline"
import Background from "../ui/Background"

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

// Define these outside the component so they are not recreated on every render
const experienceGradientColors = [
  "rgba(10, 10, 10, 1)",
  "rgba(41, 121, 255, 0.2)", // Primary blue
  "rgba(118, 69, 217, 0.2)", // Purple accent
  "rgba(22, 163, 74, 0.1)", // Green secondary
  "rgba(61, 90, 254, 0.15)",
]
const experienceGradientStops = [20, 40, 65, 85, 100]

// Feature Card similar to what's used in other components
const FeatureCardComponent = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm h-full shadow-sm shadow-primary/5"
    >
      <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm opacity-70 mt-2">{description}</p>
      </div>
    </motion.div>
  )
}
const FeatureCard = React.memo(FeatureCardComponent)

// Experience card with hover effects and animations
const ExperienceCardComponent = ({
  experience,
  index,
  isActive,
  onClick,
}: {
  experience: Experience
  index: number
  isActive: boolean
  onClick: () => void
}) => {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 h-full ${
        isActive
          ? "border-2 border-primary shadow-lg shadow-primary/20 bg-gradient-to-br from-white/5 to-white/2"
          : "border border-white/10 bg-white/[0.02] hover:bg-white/5"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      whileHover={!isActive ? { scale: 1.02, y: -5 } : {}}
    >
      {/* Highlight indicator */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${isActive ? "bg-primary" : "bg-white/10"}`} />

      {/* Glowing effect for active state */}
      {isActive && (
        <>
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          <div className="absolute -inset-0.5 bg-primary/20 blur-md opacity-30 -z-10"></div>
        </>
      )}

      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            <div className="flex items-center gap-2 mt-2">
              <BuildingOfficeIcon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-white/70">{experience.company}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit flex-shrink-0">
            <CalendarIcon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm text-white/70 whitespace-nowrap">{experience.date}</span>
          </div>
        </div>

        {/* Description - only show when active */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden flex-grow"
        >
          <ul className="space-y-2 mb-4 text-white/70">
            {experience.description.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 pb-2">
            <p className="text-xs uppercase tracking-wider text-white/50 mb-2 font-semibold">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-full bg-white/[0.05] text-white/80 border border-white/10 inline-block hover:bg-primary/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Preview text for inactive cards */}
        {!isActive && (
          <div className="flex items-center gap-2 text-sm text-white/50 mt-auto pt-2">
            <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xs">+</span>
            </span>
            <span>Click to expand</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
const ExperienceCard = React.memo(ExperienceCardComponent)

const ModernExperienceComponent = () => {
  // State to track which experience is active
  const [activeExperience, setActiveExperience] = useState<number>(1)

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <Background
        Breathing={true}
        startingGap={140}
        breathingRange={10}
        animationSpeed={0.01}
        gradientColors={experienceGradientColors}
        gradientStops={experienceGradientStops}
        topOffset={10}
        containerClassName="opacity-90"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Professional Header Section */}
        <motion.div
          className="text-center mt-8 mb-36 relative"
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

        {/* Professional Experience Section */}
        <div className="mb-20">
          {/* Desktop Layout */}
          <div className="hidden lg:flex gap-10">
            {/* Left Column: List of Roles */}
            <div className="space-y-4 sticky top-28 self-start">
              {experiencesData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-1"
                >
                  <div
                    className={`group rounded-lg overflow-hidden transition-all duration-300 relative ${
                      activeExperience === exp.id
                        ? "bg-black/40 border border-white/10"
                        : "bg-white/[0.02] border border-white/5 hover:bg-black/40"
                    }`}
                    onClick={() => setActiveExperience(exp.id)}
                  >
                    {/* Glow effect for active state */}
                    {activeExperience === exp.id && (
                      <>
                        <div className="absolute -inset-0.5 bg-primary/30 blur-md opacity-50 -z-10"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                      </>
                    )}
                    <div className="px-8 py-6 cursor-pointer">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                            <div className="text-sm font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit whitespace-nowrap">
                              {exp.date}
                            </div>

                            <h4
                              className={`text-xl font-semibold ${
                                activeExperience === exp.id
                                  ? "text-primary drop-shadow-md shadow-primary"
                                  : "text-white/90"
                              }`}
                            >
                              {exp.role}
                            </h4>
                          </div>

                          <div className="flex items-center gap-2 mt-2 text-white/70">
                            <BuildingOfficeIcon className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          {" "}
                          <div
                            className={`rounded-full p-2 ${
                              activeExperience === exp.id
                                ? "bg-primary/20 text-primary shadow-sm shadow-primary/30"
                                : "bg-white/5 text-white/50 group-hover:bg-white/10"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`transition-transform ${activeExperience === exp.id ? "rotate-180" : ""}`}
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Content area - expands when active */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeExperience === exp.id ? "auto" : 0,
                          opacity: activeExperience === exp.id ? 1 : 0,
                          marginTop: activeExperience === exp.id ? "16px" : "0px",
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 mb-6 text-white/70 pl-5">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="list-disc list-outside">
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 pb-2">
                          <p className="text-xs uppercase tracking-wider text-white/50 mb-3 font-semibold">
                            Core Technologies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 rounded-md bg-white/[0.03] text-white/80 border border-white/10 text-sm hover:bg-primary/10 transition-colors hover:border-primary/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout: Accordion Style */}
          <div className="lg:hidden space-y-6">
            {experiencesData.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                isActive={activeExperience === exp.id}
                onClick={() => setActiveExperience(exp.id)}
              />
            ))}
          </div>
        </div>

        {/* Professional Resume Download */}
        <div className="mt-16 text-center">
          <div className="max-w-xl mx-auto rounded-xl bg-white/5 backdrop-blur-sm p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">Want to know more about my experience?</h3>
            <p className="text-white/60 mb-6">
              Download my comprehensive resume for a detailed overview of my skills, experience, and professional
              achievements.
            </p>
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-white transition-all shadow-lg shadow-primary/20 border border-white/10"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="font-medium">Download Full Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ModernExperienceComponent)
