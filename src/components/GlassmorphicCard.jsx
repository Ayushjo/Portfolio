"use client";
import { motion } from "framer-motion";

export function GlassmorphicCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 p-6 transition-all duration-300 hover:border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/20">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  );
}
