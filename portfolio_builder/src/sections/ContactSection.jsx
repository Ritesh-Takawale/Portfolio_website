import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card md:p-10">
      <SectionTitle eyebrow="Contact" title="Let&apos;s Build Something Useful" />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-muted">
          <p>Email: <a className="text-electric" href="mailto:ritesh@gmail.com">ritesh@gmail.com</a></p>
          <p>Location: Pune</p>
          <p>I&apos;m open to product-focused freelance work and long-term engineering collaborations.</p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-3"
        >
          <input className="w-full rounded-xl border-white/15 bg-[#091126] text-ink" type="text" name="name" placeholder="Your Name" required />
          <input className="w-full rounded-xl border-white/15 bg-[#091126] text-ink" type="email" name="email" placeholder="Your Email" required />
          <input className="w-full rounded-xl border-white/15 bg-[#091126] text-ink" type="text" name="subject" placeholder="Subject" required />
          <textarea className="w-full rounded-xl border-white/15 bg-[#091126] text-ink" name="message" rows="4" placeholder="Message" required />
          <button type="submit" className="glow-btn rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-bold text-[#051126]">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
