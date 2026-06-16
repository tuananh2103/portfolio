"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Development", items: ["Python", "Java", "C", "JavaScript", "TypeScript", "HTML / CSS"] },
  { category: "DevOps / Cloud", items: ["Docker", "Git", "GitLab / GitHub", "Kubernetes", "CI/CD", "Linux (Ubuntu/Debian)"] },
  { category: "Systems & Networks", items: ["TCP/IP", "DNS / DHCP", "VLAN / VPN", "Routing & Switching", "VirtualBox", "Windows Server"] },
  { category: "Database & Methods", items: ["PostgreSQL", "MySQL", "MongoDB", "Agile / Scrum", "Automated Testing", "Technical Docs"] },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.02]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My Tech Stack
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map(({ category, items }, i) => (
            <motion.div
              key={category}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/40 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3 className="text-blue-400 font-mono text-sm mb-5">{category}</h3>
              <ul className="space-y-2.5">
                {items.map((skill, j) => (
                  <motion.li
                    key={skill}
                    className="text-zinc-300 text-sm flex items-center gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.12 + j * 0.05 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 p-4 bg-blue-950/30 border border-blue-500/20 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-xs text-blue-300 font-mono">🏆 ANSSI Cybersecurity Certificate (2025)</p>
        </motion.div>
      </div>
    </section>
  );
}
