import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'
import { aboutParagraphs, stats } from '../data.js'

export default function AboutSection() {
  return (
    <section id="about" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card md:p-10">
      <SectionTitle eyebrow="About" title="Developer Focused on Impact" />
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-muted">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid gap-4">
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4"
            >
              <p className="font-heading text-2xl font-bold text-ink">{item.value}</p>
              <p className="text-sm text-muted">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
