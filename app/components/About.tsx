"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const info = [
  { label: "Location", value: "Rennes, France" },
  { label: "Degree", value: "Master Informatique" },
  { label: "University", value: "Université de Rennes I" },
  { label: "Focus", value: "Cloud & Networks" },
  { label: "Status", value: "Seeking alternance 2026" },
];

const softSkills = ["Situation analysis", "Teamwork", "Technical rigor", "Documentation", "Technical curiosity"];
const languages = [
  { lang: "French", level: "Fluent" },
  { lang: "English", level: "Fluent" },
  { lang: "Vietnamese", level: "Native" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              I started as a developer. AI made me think bigger.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              I learned to code as a fullstack developer — Java, Angular, building features
              and shipping apps. But watching AI reshape software development pushed me to
              ask a harder question: where do I actually want to be in five years?
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              The answer was infrastructure. The layer that runs everything — AI included.
              That&apos;s what drew me to DevOps: not as a fallback, but as a deliberate bet
              on skills that compound. I&apos;m wrapping up my B.Sc. at Rennes I, heading into
              a Cloud &amp; Networks Master&apos;s, and looking for an alternance where I can
              work on real systems.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {softSkills.map((s, i) => (
                <motion.span
                  key={s}
                  className="text-xs px-3 py-1.5 bg-white/5 text-zinc-300 rounded-full border border-white/10"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-6">
              {languages.map(({ lang, level }) => (
                <div key={lang}>
                  <p className="text-xs text-zinc-500 font-mono mb-0.5">{lang}</p>
                  <p className="text-sm text-white">{level}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo + info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Avatar */}
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/40 to-blue-900/20 blur-xl" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-blue-500/30 ring-4 ring-white/5">
                <Image
                  src="/avatar.jpg"
                  alt="Nguyen Tuan Anh"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {info.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <p className="text-xs text-zinc-500 mb-1 font-mono">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
