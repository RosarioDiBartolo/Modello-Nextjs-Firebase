"use client"

import { motion } from "framer-motion"
import Layout from "./components/layout"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl font-bold mb-6">Welcome to NextFirebase</h1>
        <p className="text-xl mb-8">A powerful combination of Next.js and Firebase for your web applications</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" asChild>
            <a href="#features">Explore Features</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {["Authentication", "Cloud Storage", "Real-time Database"].map((feature, index) => (
          <motion.div
            key={feature}
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">{feature}</h2>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo eu nulla efficitur.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Layout>
  )
}

