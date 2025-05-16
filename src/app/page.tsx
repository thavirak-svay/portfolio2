"use client"

import ModernHero from "@/components/sections/ModernHero"
import ModernAbout from "@/components/sections/ModernAbout"
import ModernSkills from "@/components/sections/ModernSkills"
import ModernProjects from "@/components/sections/ModernProjects"
import ModernExperience from "@/components/sections/ModernExperience"
import ModernContact from "@/components/sections/ModernContact"
import ModernGradientSection from "@/components/sections/ModernGradientSection"
import ModernFooter from "@/components/ui/ModernFooter"
import MinimalNavbar from "@/components/ui/MinimalNavbar"

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#0A0A0A] text-white">
      <MinimalNavbar />
      <ModernHero />
      <ModernAbout />
      <ModernSkills />
      <ModernProjects />
      <ModernExperience />
      <ModernGradientSection />
      <ModernContact />
      <ModernFooter />
    </div>
  )
}
