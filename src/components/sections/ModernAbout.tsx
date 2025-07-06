"use client"

import { MotionGlass } from "@/components/ui/Glass"
import { motion } from "framer-motion"
import Image from "next/image"
import React, { useRef } from "react"

interface Card3DProps {
  title: string
  description: string
}

const Card3DComponent: React.FC<Card3DProps> = ({ title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <MotionGlass
      ref={cardRef}
      className="group relative h-full cursor-pointer p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Content - centered */}
      <div className="text-center h-full flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed opacity-70">{description}</p>
      </div>
    </MotionGlass>
  )
}

const Card3D = React.memo(Card3DComponent)

// Enhanced Stats Card Component
const StatsCard = ({ title, value, description }: { title: string; value: string; description: string }) => {
  return (
    <MotionGlass
      className="p-6 text-center h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
      <div className="text-3xl font-bold mb-2 text-primary">{value}</div>
      <p className="text-sm text-gray-400">{description}</p>
    </MotionGlass>
  )
}

// Simple Card Component for Core Strengths (without glass effects)
const SimpleCard: React.FC<Card3DProps> = ({ title, description }) => {
  return (
    <motion.div
      className="group relative h-full cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="h-full p-6 rounded-xl border border-gray-700 bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
        {/* Content - centered */}
        <div className="text-center h-full flex flex-col justify-center">
          <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const ModernAboutComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} id="about" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900/50 dark:via-slate-800/30 dark:to-slate-900/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate backend developer with extensive experience in building scalable, high-performance applications
            using modern technologies and architectural patterns.
          </p>
        </motion.div>

        {/* About content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Image section */}
          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MotionGlass>
              <motion.div className="w-full">
                <Image
                  src="/projects/database.jpg"
                  alt="Backend development workspace"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>

              {/* Enhanced code overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <MotionGlass className="p-4">
                  <pre className="text-xs text-gray-300 font-mono">
                    <code>
                      {`// Backend architecture
const createServer = async () => {
  const app = express();
  app.use(compression());
  app.use(cors());
  
  // API Routes
  app.use('/api/v1', apiRouter);
  
  return app.listen(PORT);
}`}
                    </code>
                  </pre>
                </MotionGlass>
              </div>
            </MotionGlass>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              With over 7 years of experience in backend development, I specialize in creating robust, scalable
              server-side applications that power modern digital experiences. My expertise spans across multiple
              programming languages and frameworks, with a strong focus on performance optimization and clean
              architecture.
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              I have successfully architected and implemented microservices, RESTful APIs, and distributed systems that
              handle millions of requests while maintaining exceptional performance standards. My approach combines
              technical excellence with business understanding to deliver solutions that drive growth.
            </p>

            {/* Enhanced stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <StatsCard title="Experience" value="7+" description="years building production systems" />
              <StatsCard title="Focus" value="100%" description="scalable backend architectures" />
            </div>
          </motion.div>
        </div>

        {/* Core strengths - Simple and clean without glass effects */}
        <div className="mt-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Core Strengths</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SimpleCard
              title="Scalable Architecture"
              description="Designing microservices and distributed systems that scale with your business needs."
            />
            <SimpleCard
              title="API Development"
              description="Building robust RESTful APIs and GraphQL endpoints with comprehensive documentation."
            />
            <SimpleCard
              title="Team Leadership"
              description="Leading development teams and mentoring junior developers to achieve technical excellence."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const ModernAbout = React.memo(ModernAboutComponent)
export default ModernAbout
