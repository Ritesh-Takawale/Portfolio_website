import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'
import { certification } from '../data.js'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card md:p-10">
      <SectionTitle eyebrow="Certifications" title="Continuous Learning" />
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="rounded-2xl border border-electric/30 bg-gradient-to-r from-electric/10 to-violet/10 p-6"
      >
        <h3 className="font-heading text-2xl font-semibold text-ink">{certification.title}</h3>
        <p className="mt-2 text-muted">
          {certification.provider} - {certification.date}
        </p>
      </motion.article>
    </section>
  )
}
