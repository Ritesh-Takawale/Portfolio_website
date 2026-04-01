export default function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-8 space-y-2">
      <p className="text-xs uppercase tracking-[0.25em] text-electric">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">{title}</h2>
    </div>
  )
}
