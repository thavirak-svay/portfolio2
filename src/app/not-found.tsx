"use client"

import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4 text-blue-500">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Go Back Home
          </Link>

          <div className="text-center">
            <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
              View My Projects
            </Link>
            <span className="mx-2 text-gray-400">or</span>
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <div className="text-8xl opacity-20 mb-4">🚀</div>
          <p className="text-gray-500 text-sm">Lost in space? Let&apos;s get you back on track.</p>
        </div>
      </div>
    </div>
  )
}
