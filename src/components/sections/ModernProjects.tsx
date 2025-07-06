"use client"

import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import React from "react"
import DatabaseWithRestApi from "../ui/DatabaseWithRestApi"
import { MotionGlass } from "../ui/Glass"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
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
    githubUrl: "#",
    featured: false,
  },
  // Add more projects as needed
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
      // Removed whileHover to prevent card/text zoom
    >
      <MotionGlass className="h-full overflow-hidden transition-all duration-300 rounded-3xl">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden rounded-t-3xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-95 transition-opacity duration-300 pointer-events-none" />
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
        <div className="p-8 relative">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-200 text-base mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4 pt-8">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/10 text-blue-800 dark:text-blue-200 shadow-sm backdrop-blur-md"
                style={{letterSpacing: '0.03em'}}>
                {tag}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-3 mt-2">
            {/* All Demo links removed as requested */}
          </div>
        </div>
      </MotionGlass>
    </motion.div>
  )
}

// API Project Card with DatabaseWithRestApi visualization
const ApiProjectCardComponent = ({ project }: { project: Project }) => {
  return (
    <MotionGlass
      className="md:col-span-3 rounded-xl overflow-hidden p-6"
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
                  className="text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
          </div>

          {/* Project links */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                className="flex items-center gap-1 text-white text-sm"
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
    </MotionGlass>
  )
}
const ApiProjectCard = React.memo(ApiProjectCardComponent)

// Main ModernProjects component
const ModernProjectsComponent = () => {
  const projectsToShow = allProjectsData.filter((p) => p.id !== 0)

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Project Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in backend development, API design, and cloud
            infrastructure.
          </p>
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
          <AnimatePresence>
            {projectsToShow.map((project, index) => (
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
      </div>
    </section>
  )
}

const ModernProjects = React.memo(ModernProjectsComponent)
export default ModernProjects
