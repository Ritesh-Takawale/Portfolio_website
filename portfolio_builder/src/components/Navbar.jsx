import { motion } from 'framer-motion'

export default function Navbar({ items }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060912]/70 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="font-heading text-lg font-extrabold tracking-[0.16em] text-ink">
          RITESH
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <motion.a whileHover={{ y: -2 }} href={`#${item.id}`} className="transition-colors hover:text-ink">
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
