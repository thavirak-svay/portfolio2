// src/components/ui/demo.tsx
// PURPOSE: Demonstrates the usage of the CTASection component.
// SCOPE: IS: Demo component. IS NOT: Part of the main application UI.
import { CTASection } from "@/components/ui/cta-with-glow"

export function CTADemo() {
  return (
    <CTASection
      title="Start building today"
      action={{
        text: "Get Started",
        href: "/docs",
        variant: "default",
      }}
    />
  )
}
