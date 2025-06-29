"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import MinimalNavbar from "@/components/ui/MinimalNavbar"
import LazyWrapper from "@/components/ui/LazyWrapper"

// Dynamic imports with loading states
const ModernHero = dynamic(() => import("@/components/sections/ModernHero"), {
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading...</div>
    </div>
  ),
  ssr: false,
})

const ModernAbout = dynamic(() => import("@/components/sections/ModernAbout"), {
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading About...</div>
    </div>
  ),
  ssr: false,
})

const ModernSkills = dynamic(() => import("@/components/sections/ModernSkills"), {
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading Skills...</div>
    </div>
  ),
  ssr: false,
})

const ModernExperience = dynamic(() => import("@/components/sections/ModernExperience"), {
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading Experience...</div>
    </div>
  ),
  ssr: false,
})

const ModernContact = dynamic(() => import("@/components/sections/ModernContact"), {
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading Contact...</div>
    </div>
  ),
  ssr: false,
})

const ModernFooter = dynamic(() => import("@/components/ui/ModernFooter"), {
  loading: () => (
    <div className="bg-black h-32 flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading Footer...</div>
    </div>
  ),
  ssr: false,
})

// Commented out for now - can be re-enabled when needed
const ModernProjects = dynamic(() => import("@/components/sections/ModernProjects"), {
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading Projects...</div>
    </div>
  ),
  ssr: false,
})

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <MinimalNavbar />

      {/* Hero loads immediately */}
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <ModernHero />
      </Suspense>

      {/* Other sections load when they come into view */}
      <LazyWrapper fallback={<div className="min-h-screen bg-black" />} rootMargin="200px">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <ModernAbout />
        </Suspense>
      </LazyWrapper>

      <LazyWrapper fallback={<div className="min-h-screen bg-black" />} rootMargin="200px">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <ModernSkills />
        </Suspense>
      </LazyWrapper>

      <LazyWrapper fallback={<div className="min-h-screen bg-black" />} rootMargin="200px">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <ModernExperience />
        </Suspense>
      </LazyWrapper>

      <LazyWrapper fallback={<div className="min-h-screen bg-black" />} rootMargin="200px">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <ModernProjects />
        </Suspense>
      </LazyWrapper>

      <LazyWrapper fallback={<div className="min-h-screen bg-black" />} rootMargin="200px">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <ModernContact />
        </Suspense>
      </LazyWrapper>

      <LazyWrapper fallback={<div className="bg-black h-32" />} rootMargin="100px">
        <Suspense fallback={<div className="bg-black h-32" />}>
          <ModernFooter />
        </Suspense>
      </LazyWrapper>
    </div>
  )
}
