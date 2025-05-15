"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { BriefcaseIcon, CalendarIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline"

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

// Experience card with hover effects and animations
const ExperienceCard = ({
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
      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isActive
          ? "border-2 border-primary shadow-lg shadow-primary/10 bg-white/5"
          : "border border-white/10 bg-white/[0.02] hover:bg-white/5"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      {/* Highlight indicator */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${isActive ? "bg-primary" : "bg-white/10"}`} />

      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">{experience.role}</h3>
            <div className="flex items-center gap-2 mt-1">
              <BuildingOfficeIcon className="w-4 h-4 text-primary" />
              <span className="text-white/70">{experience.company}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
            <CalendarIcon className="w-4 h-4 text-primary" />
            <span className="text-sm text-white/70">{experience.date}</span>
          </div>
        </div>

        {/* Description - only show when active */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="space-y-2 mb-4 text-white/70">
            {experience.description.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-wider text-white/50 mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-full bg-white/[0.03] text-white/70 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Preview text for inactive cards */}
        {!isActive && <div className="text-sm text-white/50 mt-2">Click to view details</div>}
      </div>
    </motion.div>
  )
}

const ModernExperience = () => {
  // State to track which experience is active
  const [activeExperience, setActiveExperience] = useState<number>(1)

  // Sample experience data
  const experiences: Experience[] = [
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

  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-20 -z-10"></div>

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
            <span className="text-primary text-sm font-medium">Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Work Experience</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            My professional journey as a backend developer, building scalable systems and leading teams to deliver
            high-performance solutions.
          </p>
        </motion.div>

        {/* Featured stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <BriefcaseIcon className="w-8 h-8 text-primary mb-4" />
            <div className="text-3xl font-bold mb-2">7+</div>
            <h3 className="text-lg font-semibold mb-1">Years Experience</h3>
            <p className="text-sm opacity-70">Building robust backend systems</p>
          </motion.div>

          <motion.div
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BuildingOfficeIcon className="w-8 h-8 text-primary mb-4" />
            <div className="text-3xl font-bold mb-2">4</div>
            <h3 className="text-lg font-semibold mb-1">Companies</h3>
            <p className="text-sm opacity-70">Across different industries</p>
          </motion.div>

          <motion.div
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CalendarIcon className="w-8 h-8 text-primary mb-4" />
            <div className="text-3xl font-bold mb-2">15+</div>
            <h3 className="text-lg font-semibold mb-1">Major Projects</h3>
            <p className="text-sm opacity-70">Successfully delivered on time</p>
          </motion.div>
        </div>

        {/* Experience cards */}
        <div className="space-y-6 mt-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isActive={activeExperience === experience.id}
              onClick={() => setActiveExperience(experience.id)}
            />
          ))}
        </div>

        {/* Download resume button */}
        <div className="mt-12 text-center">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Resume
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default ModernExperience
