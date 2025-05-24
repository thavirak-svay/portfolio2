// src/components/ui/glow.tsx
// PURPOSE: Provides a Glow component for visual effects.
// SCOPE: IS: Reusable glow effect. IS NOT: Specific to any single component.
import React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
})

const Glow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(glowVariants({ variant }), className)} {...props}>
      <div
        className={cn(
          "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_10%,_rgba(59,130,246,0)_60%)] sm:h-[512px]",
          variant === "center" && "-translate-y-1/2"
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_10%,_rgba(59,130,246,0)_60%)] sm:h-[256px]",
          variant === "center" && "-translate-y-1/2"
        )}
      />
    </div>
  )
)
Glow.displayName = "Glow"

export { Glow }
