export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 text-center">
      <p className="text-zinc-600 text-sm">
        © {new Date().getFullYear()} Nguyễn Tuấn Anh · Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}