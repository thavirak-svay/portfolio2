"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"

interface LightCanvasEffectProps {
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
  animationSpeed?: number
}

const LightCanvasEffect = memo(
  ({
    colors = [[0, 255, 255]],
    containerClassName,
    dotSize = 4,
    showGradient = true,
    animationSpeed = 0.4,
  }: LightCanvasEffectProps) => {
    const primaryColor = colors[0] || [0, 255, 255]
    const secondaryColor = colors[1] || colors[0]

    const primaryRGB = `rgb(${primaryColor[0]}, ${primaryColor[1]}, ${primaryColor[2]})`
    const secondaryRGB = secondaryColor
      ? `rgb(${secondaryColor[0]}, ${secondaryColor[1]}, ${secondaryColor[2]})`
      : primaryRGB

    return (
      <div className={cn("h-full relative w-full overflow-hidden", containerClassName)}>
        {/* CSS-only dot pattern */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, ${primaryRGB} 1px, transparent 1px)`,
            backgroundSize: `${dotSize * 8}px ${dotSize * 8}px`,
            animation: `dotMove ${20 / animationSpeed}s linear infinite`,
          }}
        />

        {/* Secondary layer for depth */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, ${secondaryRGB} 0.5px, transparent 0.5px)`,
            backgroundSize: `${dotSize * 12}px ${dotSize * 12}px`,
            animation: `dotMove ${30 / animationSpeed}s linear infinite reverse`,
          }}
        />

        {showGradient && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 via-20% to-transparent to-70%" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0.5) 100%)",
              }}
            />
          </>
        )}

        <style jsx>{`
          @keyframes dotMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(${dotSize * 4}px, ${dotSize * 4}px);
            }
          }
        `}</style>
      </div>
    )
  }
)

LightCanvasEffect.displayName = "LightCanvasEffect"

export { LightCanvasEffect }
