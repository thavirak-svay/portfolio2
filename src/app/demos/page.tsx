"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { motion } from "framer-motion"

const DemoItem = ({ title, description, href, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-xl border border-white/10 bg-gradient-to-br ${color} hover:shadow-lg transition-all duration-300`}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="opacity-80 mb-4">{description}</p>
      <Link
        href={href}
        className="flex items-center justify-between rounded-lg bg-black/30 px-4 py-2 text-white hover:bg-black/50 transition-colors"
      >
        <span>View Demo</span>
        <ArrowRightIcon size={16} />
      </Link>
    </motion.div>
  )
}

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:underline mb-8 gap-2">
            <ArrowLeftIcon size={16} />
            <span>Back to Home</span>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-4">Component Demos</h1>
            <p className="text-lg opacity-80 max-w-3xl">
              Explore the various custom components used in this portfolio. These demos showcase the components in
              isolation, allowing you to see their functionality and customization options.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DemoItem
            title="Canvas Reveal Effect"
            description="A Three.js-powered effect that reveals content with an animated dot matrix pattern. Perfect for hover states and interactive elements."
            href="/demos/canvas-reveal"
            color="from-indigo-900/30 to-violet-900/30"
          />

          {/* Placeholder for future demos */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center min-h-[200px]">
            <p className="text-center opacity-60">More demos coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
