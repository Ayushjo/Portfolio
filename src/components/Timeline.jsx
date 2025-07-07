"use client";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/useMobile";

const experiences = [
  {
    title: "Started My Coding Journey",
    company: "IIIT Naya Raipur",
    period: "2023",
    description:
      "Began learning Python in my first year of college. Explored core programming concepts, data structures, and problem-solving using platforms like LeetCode and HackerRank.",
  },
  {
    title: "Explored Data Science & ML",
    company: "Self-Learning",
    period: "2023",
    description:
      "Dived into data science libraries like Pandas, NumPy, Scikit-learn, and TensorFlow. Built small models and visualized datasets to understand ML fundamentals.",
  },
  {
    title: "Frontend Web Development",
    company: "Self-Projects",
    period: "2023 - Present",
    description:
      "Learned HTML, CSS, JavaScript and then moved to frameworks like React and Next.js. Styled apps using Tailwind CSS and Bootstrap. Also explored animations with Framer Motion.",
  },
  {
    title: "Full Stack & AI Integration",
    company: "Personal Projects",
    period: "2024 - Present",
    description:
      "Built full-stack apps using Node.js and MongoDB. Integrated AI APIs using OpenRouter and explored building tools like MindCare — a mental health chatbot with empathetic responses.",
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-gray-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:pl-10" : "md:pr-10"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 p-6 transition-all duration-300 hover:border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-100">
                  {experience.title}
                </h3>
                <div className="text-gray-300 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-gray-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>
          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
