"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Oops!</h1>
          <h2 className="text-xl mb-6">Something went wrong</h2>
          <p className="text-gray-400 mb-8">We encountered an unexpected error. Please try again.</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go Home
          </button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-gray-400 hover:text-white">Error Details (Development)</summary>
            <pre className="mt-4 p-4 bg-gray-900 rounded-lg text-red-400 text-sm overflow-auto">
              {error.message}
              {error.stack && (
                <>
                  {"\n\nStack Trace:\n"}
                  {error.stack}
                </>
              )}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
