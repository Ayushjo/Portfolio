"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMobile } from "@/hooks/useMobile";

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    if (isMobile) {
      setIsOpen(false);
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-4 py-3 rounded-full bg-gray-900/80 backdrop-blur-md border border-gray-700/50 shadow-lg shadow-gray-500/10">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full blur opacity-50"></div>
          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <a href="/" className="font-bold text-lg">
                <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
                  Ayush
                </span>
                <span className="text-gray-300">Singh</span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <a href="/" className="font-bold text-lg mr-4">
                <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
                  Ayush
                </span>
                <span className="text-gray-300">Singh</span>
              </a>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-1 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                size="sm"
                className="ml-2 bg-gray-700 hover:bg-gray-600 text-gray-100 border-0 hover:shadow-lg hover:shadow-gray-500/30"
              >
                Resume
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md ${
            isOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="px-8 py-4 text-2xl font-medium text-gray-200 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button className="mt-6 bg-gray-700 hover:bg-gray-600 text-gray-100 border-0 hover:shadow-lg hover:shadow-gray-500/30">
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
