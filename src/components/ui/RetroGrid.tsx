import { cn } from "@/lib/utils"
import React from "react"

export const RetroGridComponent = ({ className, angle = 65 }: { className?: string; angle?: number }) => {
  return (
    <div
      className={cn("pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]", className)}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",

            "[background-repeat:repeat] [background-size:40px_40px] [height:300vh] [inset:-50%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

            // Light Styles - pure black with opacity
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_0)]",

            // Dark styles - pure white with opacity
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_0)]"
          )}
        />
      </div>

      {/* Background Gradient - Matching dark section */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent to-90% dark:from-[#0A0A0A]" />
    </div>
  )
}

export const RetroGrid = React.memo(RetroGridComponent)
