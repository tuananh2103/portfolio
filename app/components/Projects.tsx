"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "University Management System",
    period: "Oct 2025 – Present",
    description: "Full-stack modular platform covering Admin, Courses, Library, and Transport modules, built with strict separation of concerns.",
    bullets: [
      "Frontend: Angular with dynamic routing and optimized API communication",
      "Backend: Java Spring Boot using DDD architecture for scalability",
      "DB & DevOps: PostgreSQL + Docker volumes for data persistence",
      "Planned: Spring Security (JWT) + JUnit automated tests",
    ],
    tags: ["Angular", "Java Spring Boot", "PostgreSQL", "Docker", "DDD"],
    github: "https://github.com/tuananh2103/management-university-system",
  },
  {
    title: "Custom Language Compiler",
    period: "Feb – Apr 2025",
    description: "Designed and built a compiler for a custom programming language in Java, covering the full pipeline from lexing to code execution.",
    bullets: [
      "Used ANTLR for lexical, syntactic, and semantic analysis",
      "Implemented AST-to-object-code translation rules",
      "Executed and validated generated code on the MAPILE virtual machine",
    ],
    tags: ["Java", "ANTLR", "Compiler Design", "AST", "MAPILE VM"],
    github: "https://github.com/tuananh2103/java-compiler-antlr",
  },
  {
    title: "Python Data Scraper",
    period: "May – Aug 2025",
    description: "Built and optimized data scrapers to feed a decentralized AI network via the Bittensor / Data Universe ecosystem.",
    bullets: [
      "Scraped Reddit, YouTube and other external sources with Python",
      "Integrated into a Bittensor subnet miner environment",
      "Configured collection frequency, volume limits, and Linux log supervision",
    ],
    tags: ["Python", "Linux", "Bittensor", "Data Mining", "Automation"],
    github: "https://github.com/tuananh2103",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6 bg-white/[0.02]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Things I&apos;ve Built
        </motion.h2>
        <div className="space-y-6">
          {projects.map(({ title, period, description, bullets, tags, github }, i) => (
            <motion.div
              key={title}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1">
                <h3 className="text-white font-semibold text-xl group-hover:text-blue-400 transition-colors">{title}</h3>
                <span className="text-xs text-zinc-500 font-mono whitespace-nowrap">{period}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>
              <ul className="space-y-1.5 mb-5">
                {bullets.map((b, j) => (
                  <li key={j} className="text-zinc-500 text-sm flex gap-2">
                    <span className="text-blue-500 flex-shrink-0">›</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-blue-950/60 text-blue-300 rounded-md border border-blue-500/20">{tag}</span>
                ))}
              </div>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-white transition-colors">GitHub →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
