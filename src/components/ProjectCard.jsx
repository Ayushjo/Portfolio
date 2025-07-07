"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  repoUrl,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 group-hover:border-gray-500/50 group-hover:shadow-lg group-hover:shadow-gray-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-600/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={image || "/ai_docs_generator.png"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-800/60 hover:bg-gray-700 text-gray-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex justify-between mt-auto pt-4 border-t border-gray-700/50">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
                onClick={() => window.open(repoUrl, "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              <Link to={demoUrl}>
                <Button
                  size="sm"
                  className="bg-gray-700 hover:bg-gray-600 text-gray-100 border-0 hover:shadow-lg hover:shadow-gray-500/30"
                >
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${
                isHovered ? "bg-gray-400" : "bg-gray-700"
              } transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
