"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  BriefcaseIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  ServerIcon,
} from "@heroicons/react/24/outline"
import Background from "../ui/Background"
import ClientOnly from "../ui/ClientOnly"

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
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 overflow-hidden"
    >
      {/* Animated Gradient Background */}
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4"
          >
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></span>
              <span className="text-primary text-sm font-medium">Professional Journey</span>
            </div>
          </motion.div>

          {/* Heading with gradient text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Work <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto opacity-70 mt-4">
            My professional journey as a backend developer, building scalable systems and leading teams to deliver
            high-performance solutions.
          </p>
        </motion.div>

        {/* Feature cards */}
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

        {/* Technical features section inspired by ModernGradientSection */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <FeatureCard
              icon={<ServerIcon className="w-5 h-5" />}
              title="Backend Architecture"
              description="Designing scalable and maintainable backend systems with microservice architecture"
            />
            <FeatureCard
              icon={<CodeBracketIcon className="w-5 h-5" />}
              title="API Development"
              description="Creating robust, secure and efficient APIs for frontend applications"
            />
            <FeatureCard
              icon={<div className="flex items-center justify-center w-5 h-5">🚀</div>}
              title="DevOps & CI/CD"
              description="Implementing automated workflows for testing, building and deployment"
            />
          </div>
        </motion.div>

        {/* Code snippet with gradient background */}
        <motion.div
          className="mt-12 relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-white/70 font-mono">backend-architecture.js</span>
            </div>
            <pre className="text-sm text-gray-300 font-mono overflow-x-auto p-4 bg-black/50 rounded-lg">
              <code>{`// Sample microservice architecture
const ServiceRegistry = {
  register: (service) => {
    console.log(\`Registering service: \${service.name}\`);
    // Implementation details...
  },
  
  discover: (serviceName) => {
    // Service discovery logic...
    return { host: 'api.example.com', port: 8080 };
  }
};

// Usage in application
ServiceRegistry.register({
  name: 'user-service',
  version: '1.0.0',
  endpoints: ['/users', '/auth'],
});`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Download resume button */}
        <div className="mt-12 text-center">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
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
