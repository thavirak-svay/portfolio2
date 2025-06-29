"use client"

import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import DatabaseWithRestApi from "../ui/DatabaseWithRestApi"

// GlassEffect from glass-demo
interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string | undefined;
  target?: string;
}

const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle = {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-black cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-3xl"
        style={{
          backdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: "rgba(255, 255, 255, 0.25)" }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
        }}
      />
      <div className="relative z-30 w-full">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const GlassButton: React.FC<{ children: React.ReactNode; href?: string | undefined }> = ({ children, href }) => (
  <GlassEffect
    href={href}
    className="rounded-3xl px-10 py-6 hover:px-11 hover:py-7 hover:rounded-4xl overflow-hidden"
  >
    <div
      className="transition-all duration-700 hover:scale-95"
      style={{ transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)" }}
    >
      {children}
    </div>
  </GlassEffect>
);

const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

// Project types
type ProjectCategory = "All" | "API" | "Microservice" | "Database" | "DevOps"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: ProjectCategory[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

// Sample projects data - defined outside the component
const allProjectsData: Project[] = [
  {
    id: 0, // Special API showcase project
    title: "Advanced RESTful API Platform",
    description:
      "A comprehensive RESTful API platform with robust authentication, rate limiting, data validation, and extensive documentation. This platform serves as the backbone for multiple client applications with different access patterns and security requirements. Features include JWT-based authentication, role-based access control, request validation, thorough error handling, and comprehensive logging.",
    image: "/projects/api.jpg",
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Redis", "JWT", "Swagger", "Docker"],
    category: ["API", "Database"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 1,
    title: "E-Commerce Microservices API",
    description:
      "Developed a suite of microservices for an e-commerce platform, handling product catalog, user accounts, orders, and payments. Focused on high availability and fault tolerance.",
    image: "/projects/api.jpg",
    tags: ["Node.js", "TypeScript", "Microservices", "RabbitMQ", "PostgreSQL", "Docker", "Kubernetes"],
    category: ["API", "Microservice"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description:
      "Built a backend system to process and display real-time analytics data using WebSockets and a time-series database. Optimized for high-volume data ingestion and low-latency querying.",
    image: "/projects/analytics.jpg",
    tags: ["Python", "FastAPI", "WebSockets", "InfluxDB", "Redis", "Grafana"],
    category: ["API", "Database"],
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Headless CMS Backend",
    description:
      "Created a flexible and scalable backend for a headless CMS, allowing content creators to manage and distribute content across multiple channels via a robust API.",
    image: "/projects/database.jpg",
    tags: ["Node.js", "NestJS", "GraphQL", "PostgreSQL", "Elasticsearch", "AWS S3"],
    category: ["API", "Database"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Cloud Infrastructure Orchestration",
    description:
      "Designed and implemented automated infrastructure provisioning and deployment pipelines using Terraform and Ansible on AWS. Managed scalable and resilient cloud environments.",
    image: "/projects/cicd.jpg",
    tags: ["Terraform", "Ansible", "AWS", "Docker", "Kubernetes", "CI/CD"],
    category: ["DevOps"],
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Distributed Caching System",
    description:
      "Implemented a distributed caching layer using Redis to improve application performance and reduce database load for frequently accessed data.",
    image: "/projects/database.jpg",
    tags: ["Redis", "Node.js", "Cache Invalidation", "Data Consistency"],
    category: ["Database", "API"],
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "IoT Data Ingestion Pipeline",
    description:
      "Developed a scalable data ingestion pipeline for IoT devices using Kafka and Go, capable of handling millions of messages per second.",
    image: "/projects/api.jpg",
    tags: ["Go", "Kafka", "IoT", "Data Engineering", "TimescaleDB"],
    category: ["API", "Database"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: 7,
    title: "Serverless API with AWS Lambda",
    description:
      "Built a cost-effective and auto-scaling serverless API using AWS Lambda, API Gateway, and DynamoDB for a startup project.",
    image: "/projects/cicd.jpg",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless", "Node.js"],
    category: ["API", "DevOps"],
    githubUrl: "#",
    featured: false,
  },
  // Add more projects as needed
]

// Define filterCategories outside the component
const filterCategoriesData: { name: string; value: ProjectCategory | "all" }[] = [
  { name: "All Projects", value: "All" },
  { name: "API Development", value: "API" },
  { name: "Microservices", value: "Microservice" },
  { name: "Database Solutions", value: "Database" },
  { name: "DevOps & Infra", value: "DevOps" },
]

// Enhanced Project Card with Glassmorphism
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <GlassEffect className="h-full overflow-hidden transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                <Github className="w-4 h-4 text-white" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

          {/* Tech Stack */}
          <GlassEffect className="p-2 inline-flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </GlassEffect>

          {/* Project Links */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <GlassEffect className="p-2 inline-flex flex-wrap gap-1">
                  <GlassEffect className="w-full text-gray-700 border-gray-300 hover:border-blue-500">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </GlassEffect>
                </GlassEffect>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <GlassEffect className="p-2 inline-flex flex-wrap gap-1">
                  <GlassEffect className="w-full text-gray-700 border-gray-300 hover:border-blue-500">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </GlassEffect>
                </GlassEffect>
              </a>
            )}
          </div>
        </div>
      </GlassEffect>
    </motion.div>
  )
}

// API Project Card with DatabaseWithRestApi visualization
const ApiProjectCardComponent = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="md:col-span-3 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm border border-white/10 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        {/* Left side - Project details */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
          </div>

          {/* Project links */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                className="flex items-center gap-1 text-white text-sm bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CodeBracketIcon className="w-4 h-4" />
                View Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                className="flex items-center gap-1 text-white text-sm bg-primary/70 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlobeAltIcon className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>

        {/* Right side - Database visualization */}
        <div className="flex items-center justify-center">
          <DatabaseWithRestApi
            circleText="API"
            badgeTexts={{
              first: "GET",
              second: "POST",
              third: "PUT",
              fourth: "DELETE",
            }}
            buttonTexts={{
              first: "RESTful",
              second: "v1.0",
            }}
            title="Custom RESTful API Architecture"
            lightColor="#4f8df9" // Using the primary color from your theme
          />
        </div>
      </div>
    </motion.div>
  )
}
const ApiProjectCard = React.memo(ApiProjectCardComponent)

// Main ModernProjects component
const ModernProjectsComponent = () => {
  const [currentFilter, setCurrentFilter] = useState<ProjectCategory | "All">("All")
  const [visibleProjects, setVisibleProjects] = useState(6)

  // Enhanced filtering logic
  const filteredProjects = React.useMemo(() => {
    if (currentFilter === "All") {
      return allProjectsData.filter((p) => p.id !== 0) // Exclude the special API project
    }
    return allProjectsData.filter((project) => project.category.includes(currentFilter as ProjectCategory))
  }, [currentFilter])

  // Categories for the filter tabs
  const categories = ["All", "API", "Microservice", "Database", "DevOps"] as const

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900/50 dark:via-slate-800/30 dark:to-slate-900/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in backend development, API design, and cloud
            infrastructure.
          </p>
        </motion.div>

        {/* Enhanced Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <GlassEffect className="p-2 inline-flex flex-wrap gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentFilter(category)}
                className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 relative text-sm sm:text-base ${currentFilter === category ? 'bg-blue-500/20 text-blue-600 shadow-lg' : 'text-gray-600 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'}`}
              >
                {category}
                {currentFilter === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </GlassEffect>
        </motion.div>

        {/* API Project Showcase */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ApiProjectCard project={allProjectsData.find((p) => p.id === 0)!} />
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > visibleProjects && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <GlassEffect className="glass-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Load More Projects
            </GlassEffect>
          </motion.div>
        )}

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/projects">
            <GlassEffect className="glass-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              <Sparkles className="w-5 h-5 mr-2" />
              View All Projects
            </GlassEffect>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const ModernProjects = React.memo(ModernProjectsComponent)
export default ModernProjects
