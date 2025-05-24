"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { GlobeAltIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import DatabaseWithRestApi from "../ui/DatabaseWithRestApi"
import { RetroGrid } from "@/components/ui/RetroGrid"

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

// Modern Project Card component with hover effects
const ProjectCardComponent = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className={`group relative rounded-xl overflow-hidden ${project.featured ? "md:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="aspect-video relative overflow-hidden rounded-xl">
        {/* Project image with overlay */}
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />

        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 4).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-white/70 mb-4 line-clamp-2 lg:line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.description}
            </p>

            {/* Project links */}
            <div className="flex gap-3">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  className="flex items-center gap-1 text-white text-sm bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  Code
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  className="flex items-center gap-1 text-white text-sm bg-primary/70 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GlobeAltIcon className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
const ProjectCard = React.memo(ProjectCardComponent)

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
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [visibleProjects, setVisibleProjects] = useState<number>(6)

  // State for category filter
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")

  // Sample projects data (now defined outside as allProjectsData)
  // const projects: Project[] = [ ... ]

  // Filter categories (now defined outside as filterCategoriesData)
  // const filterCategories = [ ... ]

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return allProjectsData
    }
    return allProjectsData.filter((project) => project.category.includes(activeCategory))
  }, [activeCategory]) // Dependency: activeCategory (allProjectsData is stable)

  // Category filter options
  const categories: ProjectCategory[] = ["All", "API", "Microservice", "Database", "DevOps"]

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>

      {/* RetroGrid for top 1/3 of section only */}
      <div className="absolute inset-x-0 top-0 h-1/3 z-0 overflow-hidden">
        <RetroGrid className="opacity-70" />
      </div>

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
            <span className="text-primary text-sm font-medium">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Backend Solutions</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            Explore a selection of my backend projects showcasing various technologies and architectural approaches.
            Each project demonstrates different aspects of backend development expertise.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project grid with animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Featured API project card */}
          {filteredProjects.find((p) => p.id === 0) && activeCategory === "All" && (
            <ApiProjectCard project={filteredProjects.find((p) => p.id === 0)!} />
          )}

          {/* Regular project cards */}
          {filteredProjects
            .filter((p) => p.id !== 0) // Exclude the special API project if already shown
            .slice(0, visibleProjects)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </motion.div>

        {/* View all projects button */}
        <div className="mt-12 text-center">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ModernProjectsComponent)
