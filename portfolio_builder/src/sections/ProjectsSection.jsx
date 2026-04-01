import { motion } from 'framer-motion'
import FlipCard from '../components/FlipCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { projects } from '../data.js'

export default function ProjectsSection() {
  return (
    <section id="projects" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card md:p-10">
      <SectionTitle eyebrow="Featured Projects" title="3D Flip Portfolio Showcase" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06 }}
          >
            <FlipCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
