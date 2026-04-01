import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FlipCard({ project }) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((current) => !current)

  return (
    <button
      type="button"
      className="flip-card group relative w-full cursor-pointer rounded-2xl text-left"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={toggle}
      aria-label={`Flip card for ${project.title}`}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flip-inner"
      >
        <article className="flip-face rounded-2xl border border-white/15 bg-gradient-to-br from-[#1a2554] via-[#143360] to-[#29205e] p-6 shadow-card">
          <div className="mb-6 h-28 rounded-xl bg-gradient-to-r from-electric/60 via-violet/50 to-electric/30" />
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-electric">Featured Project</p>
          <h3 className="font-heading text-2xl font-semibold text-ink">{project.title}</h3>
        </article>

        <article className="flip-face flip-back flex flex-col justify-between rounded-2xl border border-white/20 bg-gradient-to-br from-[#0e1737] via-[#1d1546] to-[#0a122e] p-6 shadow-card">
          <div>
            <h3 className="font-heading text-xl font-semibold text-ink">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-electric">{project.stack.join(' • ')}</p>
          </div>
          <div className="mt-5 flex gap-3">
            <a href="#" className="glow-btn rounded-full border border-electric/40 px-4 py-2 text-xs font-semibold text-electric">
              Live Demo
            </a>
            <a href="#" className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-ink">
              GitHub
            </a>
          </div>
        </article>
      </motion.div>
    </button>
  )
}
