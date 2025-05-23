"use client"

import React from "react"
import { StagewiseToolbar } from "@stagewise/toolbar-next"

export function StagewiseToolbarWrapper() {
  // Only render in development mode
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  const stagewiseConfig = {
    plugins: [],
  }

  return <StagewiseToolbar config={stagewiseConfig} />
}
