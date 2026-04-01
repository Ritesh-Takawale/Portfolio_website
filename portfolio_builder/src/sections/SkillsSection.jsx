import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'
import { skillGroups } from '../data.js'

export default function SkillsSection() {
  return (
    <section id="skills" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card md:p-10">
      <SectionTitle eyebrow="Skills" title="Frontend, Backend, Database & Tools" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(skillGroups).map(([group, items], index) => (
          <motion.article
            key={group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
          >
            <h3 className="font-heading text-xl font-semibold text-ink">{group}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {items.map((item) => (
                <li key={item} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
