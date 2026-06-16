"use client";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.p className="text-blue-400 text-xs font-mono mb-6 tracking-[0.3em] uppercase" {...fadeUp(0.1)}>
        Hello, I am
      </motion.p>

      <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight" {...fadeUp(0.25)}>
        Nguyen Tuan Anh
      </motion.h1>

      <motion.div className="flex items-center gap-3 mb-2" {...fadeUp(0.4)}>
        <span className="text-xl md:text-2xl text-zinc-400 font-light">Fullstack Developer</span>
        <span className="text-zinc-600 text-xl">→</span>
        <span className="text-xl md:text-2xl text-blue-400 font-light">DevOps Engineer</span>
      </motion.div>

      <motion.p className="text-zinc-500 mb-12 text-sm" {...fadeUp(0.5)}>
        Master Informatique Fullstack / DevOps · Université de Rennes I
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row gap-4" {...fadeUp(0.65)}>
        <a
          href="#projects"
          className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-7 py-3 border border-white/20 hover:border-white/50 text-zinc-300 hover:text-white rounded-lg transition-colors font-medium"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <span className="text-xs text-zinc-600 block mb-1">Scroll down</span>
          <svg className="w-4 h-4 text-zinc-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
