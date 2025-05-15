"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { GlobeAltIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

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

// Modern Project Card component with hover effects
const ProjectCard = ({ project }: { project: Project }) => {
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

// Main ModernProjects component
const ModernProjects = () => {
  // State for category filter
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Microservices API",
      description:
        "A complete microservices architecture for e-commerce platforms with service discovery, API gateway, and containerized deployment.",
      image: "/projects/ecommerce-api.jpg",
      tags: ["Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "Microservices"],
      category: ["API", "Microservice"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Real-time Analytics Platform",
      description:
        "High-performance analytics system processing millions of events per second with real-time dashboards.",
      image: "/projects/analytics.jpg",
      tags: ["Python", "Kafka", "PostgreSQL", "Redis", "Docker"],
      category: ["Database", "API"],
      githubUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Serverless Content Management API",
      description:
        "Scalable content management system built using serverless architecture for maximum cost efficiency.",
      image: "/projects/cms.jpg",
      tags: ["Node.js", "AWS Lambda", "DynamoDB", "Serverless", "GraphQL"],
      category: ["API", "Database"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Cloud Infrastructure Automation",
      description:
        "Infrastructure as Code implementation with comprehensive CI/CD pipelines for automated deployments.",
      image: "/projects/infrastructure.jpg",
      tags: ["Terraform", "AWS", "GitHub Actions", "Docker", "Kubernetes"],
      category: ["DevOps"],
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Distributed Cache System",
      description: "Custom distributed caching solution with intelligent eviction policies and cluster management.",
      image: "/projects/cache.jpg",
      tags: ["Go", "Redis", "gRPC", "Prometheus", "Kubernetes"],
      category: ["Database", "Microservice"],
      githubUrl: "#",
      featured: false,
    },
  ]

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  // Category filter options
  const categories: ProjectCategory[] = ["All", "API", "Microservice", "Database", "DevOps"]

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>

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
          {filteredProjects.map((project) => (
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

export default ModernProjects
