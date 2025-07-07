"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useToast } from "@/hooks/useToast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 p-6 transition-all duration-300 hover:border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/20">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-gray-100">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                placeholder="Your Name"
                required
                className="bg-gray-800/50 border-gray-700 focus:border-gray-500 focus:ring-gray-500/20 text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-gray-800/50 border-gray-700 focus:border-gray-500 focus:ring-gray-500/20 text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Subject"
                required
                className="bg-gray-800/50 border-gray-700 focus:border-gray-500 focus:ring-gray-500/20 text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                rows={5}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-gray-500 focus:ring-gray-500/20 text-gray-100"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 border-0 hover:shadow-lg hover:shadow-gray-500/30"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
