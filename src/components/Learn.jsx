import { motion } from 'framer-motion';

function TiltCard({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      whileHover={{ rotateX: -4, rotateY: 6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_-40px_rgba(255,59,59,0.45)] backdrop-blur-xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FF3B3B]/30 via-transparent to-amber-300/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function Learn() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">What You’ll Learn</h2>
        <p className="text-white/70">Three professional-grade frameworks that transform how you see markets.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <TiltCard title="Find companies before headlines" subtitle="Learn to spot asymmetric opportunities early." />
        <TiltCard title="Spot market forces — not patterns" subtitle="Read flows, incentives, and positioning." />
        <TiltCard title="Decode how bankers think" subtitle="Apply structured insights for confident decisions." />
      </div>
    </section>
  );
}
