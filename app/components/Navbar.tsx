"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm text-zinc-400">tuan-anh.dev</span>
        <div className="flex gap-8 text-sm text-zinc-400">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}