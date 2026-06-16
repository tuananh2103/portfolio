"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Data Scraper Developer",
    company: "Blue Orion Co., Ltd",
    period: "May – Aug 2025",
    description: [
      "Developed and optimized Python data scrapers to collect data from Reddit, YouTube, and other external sources.",
      "Integrated scripts into a Data Universe / Bittensor environment to feed a decentralized AI network.",
      "Configured collection parameters (sources, frequency, volume limits) and monitored processing logs under Linux.",
    ],
    tags: ["Python", "Linux", "Bittensor", "Data Mining", "Automation"],
  },
];

const education = [
  {
    degree: "Master's in Computer Science — Cloud & Networks",
    school: "Université de Rennes I",
    period: "2026 – 2028",
    detail: "Cloud computing, distributed systems, virtualisation, network security, monitoring and automation. Work-study programme (alternance).",
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "Université de Rennes I",
    period: "2022 – 2026",
    detail: "OOP (Java/C), databases, systems, cloud & networks. ANSSI Cybersecurity Certificate (2025).",
  },
  {
    degree: "Scientific & Technical Preparatory (SPIR)",
    school: "INSA de Rennes",
    period: "2020 – 2022",
    detail: "Scientific, technical and humanities curriculum — Grade: 13.22/20.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Work &amp; Education
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Professional</h3>
            {experiences.map(({ role, company, period, description, tags }) => (
              <div key={role} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/40 transition-colors">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-white font-semibold">{role}</h4>
                  <span className="text-xs text-zinc-500 font-mono whitespace-nowrap ml-4">{period}</span>
                </div>
                <p className="text-blue-400 text-sm mb-4">{company}</p>
                <ul className="space-y-2 mb-4">
                  {description.map((d, i) => (
                    <li key={i} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-1.5 flex-shrink-0">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-blue-950/60 text-blue-300 rounded border border-blue-500/20">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Education</h3>
            <div className="space-y-5">
              {education.map(({ degree, school, period, detail }, i) => (
                <motion.div
                  key={degree}
                  className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-blue-500/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-white font-semibold text-sm leading-snug">{degree}</h4>
                    <span className="text-xs text-zinc-500 font-mono whitespace-nowrap ml-4">{period}</span>
                  </div>
                  <p className="text-blue-400 text-sm mb-2">{school}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
