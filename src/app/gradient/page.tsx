import ModernNavbar from "@/components/ui/ModernNavbar"
import ModernGradientSection from "@/components/sections/ModernGradientSection"
import ModernFooter from "@/components/ui/ModernFooter"

export default function GradientDemoPage() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      <ModernNavbar />
      <ModernGradientSection />
      <ModernFooter />
    </div>
  )
}
