import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomeSection from './sections/HomeSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import CertificationsSection from './sections/CertificationsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import { navItems } from './data.js'

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar items={navItems} />
      <motion.main
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-6 md:py-10"
      >
        <motion.div variants={item}>
          <HomeSection />
        </motion.div>
        <motion.div variants={item}>
          <AboutSection />
        </motion.div>
        <motion.div variants={item}>
          <ProjectsSection />
        </motion.div>
        <motion.div variants={item}>
          <SkillsSection />
        </motion.div>
        <motion.div variants={item}>
          <CertificationsSection />
        </motion.div>
        <motion.div variants={item}>
          <ContactSection />
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  )
}
