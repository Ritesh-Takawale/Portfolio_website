import { motion } from 'framer-motion'
import { Globe, Mail, Send } from 'lucide-react'

const particles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  delay: Math.random() * 2,
  duration: 4 + Math.random() * 4,
}))

export default function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] px-6 pb-12 pt-16 shadow-card md:px-10 md:pt-20">
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-2 w-2 rounded-full bg-electric/60"
            style={{ left: particle.x, top: particle.y }}
            animate={{ y: ['0%', '-45%', '0%'], opacity: [0.25, 0.75, 0.25] }}
            transition={{ repeat: Infinity, duration: particle.duration, delay: particle.delay }}
          />
        ))}
      </div>

      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="relative text-xs uppercase tracking-[0.25em] text-electric">
        Hi, I&apos;m Ritesh Takawale
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="relative mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-transparent md:text-6xl"
        style={{ backgroundImage: 'linear-gradient(120deg, #d8e3ff, #57b5ff 45%, #8f6bff)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
      >
        Full Stack Developer & Creative Problem Solver
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.14 }}
        className="relative mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
      >
        I build beautiful, functional web applications that balance delightful user experience with maintainable architecture and reliable delivery.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="glow-btn rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-bold text-[#051126]">
          View My Work
        </a>
        <a href="#contact" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ink transition hover:border-electric/40 hover:text-electric">
          Get In Touch
        </a>
      </motion.div>

      <div className="relative mt-8 flex flex-wrap items-center gap-4 text-muted">
        <a href="#" aria-label="GitHub" className="rounded-full border border-white/20 p-2 transition hover:border-electric/40 hover:text-electric">
          <Globe size={18} />
        </a>
        <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/20 p-2 transition hover:border-electric/40 hover:text-electric">
          <Send size={18} />
        </a>
        <a href="mailto:ritesh@gmail.com" aria-label="Email" className="rounded-full border border-white/20 p-2 transition hover:border-electric/40 hover:text-electric">
          <Mail size={18} />
        </a>
      </div>

      <motion.p
        animate={{ y: [0, 7, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="relative mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted"
      >
        Scroll to explore
      </motion.p>
    </section>
  )
}
