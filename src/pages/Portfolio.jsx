"use client";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "../components/ui/Button";
import { ProjectCard } from "../components/ProjectCard";
import { SkillBadge } from "../components/SkillBadge";
import { Timeline } from "@/components/Timeline";
import { ContactForm } from "@/components/ContactForm";
import { CreativeHero } from "@/components/CreativeHero";
import { FloatingNav } from "@/components/FloatingNav";
import { MouseFollower } from "@/components/MouseFollower";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";

export default function Portfolio() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100 overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gray-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gray-700/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 mx-auto max-w-7xl">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 mb-4">
                <span className="relative z-10 text-gray-300">
                  Software Engineer & Creative Developer
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600/20 to-gray-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-gray-100">Hi, I'm</span>
              <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
                Ayush Singh
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-[600px]">
              I craft exceptional digital experiences through a blend of clean
              code, creative design, and an unwavering passion for innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToProjects}
                className="relative overflow-hidden group bg-gray-700 hover:bg-gray-600 text-white border-0 hover:shadow-lg hover:shadow-gray-500/30"
              >
                <span className="relative z-10 flex items-center">
                  View Projects{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-gray-600 text-gray-200 hover:text-white hover:border-gray-400 bg-transparent hover:bg-gray-800/50"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Ayushjo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-singh-36539734b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a
                href="https://x.com/_wickyjohn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a href="mailto:hello@example.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-500/50 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gray-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-700">
                <img
                  src="/profile.png"
                  alt="Ayush Singh"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-400 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-200">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-gray-300">
                  I'm a passionate software developer with a strong interest in
                  building modern web applications. I specialize in frontend
                  development using React and Next.js, and I'm constantly
                  expanding my skills in backend technologies as well.
                </p>
                <p className="text-lg text-gray-300 mt-4">
                  My journey in tech began with a curiosity for how things work
                  behind the screen, which quickly turned into a love for
                  writing clean, creative, and functional code. I'm focused on
                  learning by building — creating projects that challenge me and
                  help me grow as a developer.
                </p>
                <p className="text-lg text-gray-300 mt-4">
                  Outside of coding, I enjoy exploring new tools, contributing
                  to small projects, and staying updated with the latest trends
                  in web development.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Name</div>
                    <div className="font-medium text-gray-200">Ayush Singh</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium text-gray-200">
                      ayushsingh202586@gmail.com
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium text-gray-200">Durg</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Availability</div>
                    <div className="font-medium text-gray-300">
                      Open to opportunities
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gray-700 hover:bg-gray-600 text-gray-100">
                    Download Resume
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gray-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={75} />
            <SkillBadge name="TypeScript" level={70} />
            <SkillBadge name="React" level={75} />
            <SkillBadge name="Next.js" level={20} />
            <SkillBadge name="Node.js" level={85} />
            <SkillBadge name="HTML/CSS" level={60} />
            <SkillBadge name="Tailwind CSS" level={50} />
            <SkillBadge name="GraphQL" level={45} />
            <SkillBadge name="PostgreSQL" level={70} />
            <SkillBadge name="AWS" level={65} />
            <SkillBadge name="Python" level={60} />
            <SkillBadge name="Git" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gray-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gray-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="MindCare - Mental Health Companion"
              description="A modern mental health companion app that allows users to track their moods, talk to an empathetic AI chatbot, and visualize emotional patterns. Built with a focus on clean UI and emotional intelligence."
              tags={[
                "React",
                "Tailwind CSS",
                "Framer Motion",
                "OpenRouter API",
                "Node.js",
                "MongoDB",
              ]}
              image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
              demoUrl="https://mindcare.iayush.com"
              repoUrl="https://github.com/Ayushjo/MindCareBackend"
            />
            <ProjectCard
              title="ZenDocs AI"
              description="An AI-powered documentation generator that processes uploaded ZIP files and generates detailed frontend/backend code explanations, database structures, and downloadable documentation."
              tags={[
                "React",
                "Node.js",
                "MongoDB",
                "Tailwind CSS",
                "Framer Motion",
                "OpenAI API",
              ]}
              image="/ai_docs_generator.png"
              demoUrl="https://codenarrator.iayush.com"
              repoUrl="https://github.com/Ayushjo/CodeNarrator"
            />
            <ProjectCard
              title="VetMate - AI Veterinary Assistant"
              description="A smart veterinary assistant that provides symptom-based diagnoses using AI and helps users locate nearby vet clinics. Designed to support pet owners with quick, reliable insights."
              tags={[
                "React",
                "Node.js",
                "MongoDB",
                "OpenRouter API",
                "Tailwind CSS",
              ]}
              image="/vetmate.jpg"
              demoUrl="https://vet-mate.vercel.app"
              repoUrl="https://github.com/Ayushjo/VetMate"
            />
            <ProjectCard
              title="Imagify - AI Image Generator"
              description="A text-to-image generator that transforms user prompts into stunning visuals using AI. Built with a sleek UI and smooth transitions for a creative experience."
              tags={["React", "Tailwind CSS", "Framer Motion", "OpenAI API"]}
              image="/imagify.jpg"
              demoUrl="https://imagify-nine-flax.vercel.app/"
              repoUrl="https://github.com/Ayushjo/Imagify"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gray-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gray-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6 text-gray-100">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium text-gray-200">
                      ayushsingh202586@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div className="font-medium text-gray-200">
                      linkedin.com/in/ayush-singh-36539734b
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">GitHub</div>
                    <div className="font-medium text-gray-200">
                      github.com/Ayushjo
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-medium mb-4 text-gray-200">
                  Current Status
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400 animate-pulse"></div>
                  <span className="text-gray-300">
                    Available for freelance work and full-time opportunities
                  </span>
                </div>
              </div>
            </GlassmorphicCard>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 px-4 mx-auto max-w-7xl">
          <div>
            <a href="/" className="font-bold text-xl">
              <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
                Ayush
              </span>
              <span className="text-gray-400">Singh</span>
            </a>
            <p className="text-sm text-gray-500 mt-2">
              © {new Date().getFullYear()} Ayush Singh. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Ayushjo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-singh-36539734b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a
              href="https://x.com/_wickyjohn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
            <a href="mailto:ayushsingh202586@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
