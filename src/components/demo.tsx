"use client"

import Background from "@/components/ui/Background"
import { motion } from "framer-motion"

const DemoVariant1 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background */}
      <Background Breathing={true}>
        <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="w-64 h-64 flex items-center justify-center rounded-full bg-opacity-30 bg-white backdrop-blur-sm"
          >
            <motion.div
              className="text-5xl font-bold text-white"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Gradient
            </motion.div>
          </motion.div>
          <p className="mt-4 text-lg text-gray-300 md:text-xl max-w-lg">
            A customizable animated radial gradient background with a subtle breathing effect.
          </p>
        </div>
      </Background>
    </div>
  )
}

export { DemoVariant1 }
