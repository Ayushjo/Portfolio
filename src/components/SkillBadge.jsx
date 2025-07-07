"use client";
import { motion } from "framer-motion";

export function SkillBadge({ name, level }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-black/30 backdrop-blur-xl border border-gray-700/40 p-8 h-full transition-all duration-500 hover:border-gray-500/50 hover:shadow-2xl hover:shadow-gray-500/10">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

        <div className="relative z-10">
          {/* Skill name with better typography */}
          <div className="text-center mb-6">
            <h3 className="font-semibold text-xl text-gray-100 tracking-tight">
              {name}
            </h3>
          </div>

          {/* Modern progress bar container */}
          <div className="relative mb-4">
            <div className="relative h-3 w-full bg-gray-800/60 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full"></div>

              {/* Animated progress bar */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 rounded-full shadow-lg shadow-gray-400/40"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{
                  duration: 1.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>

                {/* Animated pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                initial={{ x: -32 }}
                animate={{ x: "calc(100vw)" }}
                transition={{
                  duration: 2,
                  delay: 1.8,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Percentage with modern styling */}
          <div className="flex justify-between items-center">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Proficiency
            </div>
            <motion.div
              className="text-lg font-bold text-gray-300"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              {level}%
            </motion.div>
          </div>

          {/* Skill level indicator dots */}
          <div className="flex justify-center mt-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i < Math.ceil(level / 20)
                    ? "bg-gray-400 shadow-sm shadow-cyan-400/60"
                    : "bg-gray-700/50"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-500/10 to-transparent rounded-2xl"></div>

        {/* Additional futuristic elements */}
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-2xl"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </div>
    </motion.div>
  );
}
