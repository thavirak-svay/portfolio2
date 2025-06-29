"use client"

import React from "react"

interface HeroSectionProps {
  title: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  bottomImage?: {
    light: string
    dark: string
  }
  gridOptions?: {
    angle: number
    opacity: number
    cellSize: number
    lightLineColor: string
    darkLineColor: string
  }
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaHref = "#",
}: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <h2 className="text-xl md:text-2xl mb-6">
            <span>{subtitle.regular}</span>
            <span className="text-primary">{subtitle.gradient}</span>
          </h2>
        )}
        {description && <p className="text-lg opacity-70 mb-8 max-w-2xl mx-auto">{description}</p>}
        <a
          href={ctaHref}
          className="inline-block bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </section>
  )
}
