import { RetroGridDemo } from "@/components/ui/demo"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function RetroGridDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/demos" className="inline-flex items-center text-blue-400 hover:underline mb-8 gap-2">
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Demos</span>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Retro Grid Demo</h1>

        <RetroGridDemo />

        <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About This Component</h2>
          <p className="mb-4">
            The RetroGrid component creates a nostalgic, synthwave-inspired grid effect that adds depth and visual
            interest to your UI.
          </p>
          <p>
            It uses perspective transforms and animated CSS backgrounds to create a 3D grid effect that appears to
            extend into the distance.
          </p>
        </div>
      </div>
    </div>
  )
}
