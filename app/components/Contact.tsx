const socials = [
  { label: "GitHub", href: "https://github.com/tuananh2103" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tuan-anh21" },
  { label: "Email", href: "mailto:tuananh21039119@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-zinc-400 mb-3 leading-relaxed">
          I&apos;m actively looking for a <span className="text-white font-medium">DevOps / Systems &amp; Networks alternance</span> starting September 2026.
        </p>
        <p className="text-zinc-500 mb-10 text-sm">Open to collaborations, internships, or a friendly chat about tech.</p>
        <a href="mailto:tuananh21039119@gmail.com" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium">
          Say Hello →
        </a>
        <div className="flex items-center justify-center gap-8 mt-12">
          {socials.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm">{label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}