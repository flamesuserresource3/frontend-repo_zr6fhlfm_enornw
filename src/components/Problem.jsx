import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function ReturnsGraph() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true });

  const redPath = "M 10 140 C 60 120, 110 100, 160 40"; // rising steep
  const greyPathStart = "M 10 140 C 60 138, 110 136, 160 134"; // flat
  const greyPathEnd = "M 10 140 C 60 135, 110 130, 160 120"; // slight rise

  return (
    <div ref={ref} className="relative w-full max-w-xl">
      <svg viewBox="0 0 170 150" className="h-64 w-full">
        {/* axes */}
        <line x1="10" y1="140" x2="165" y2="140" stroke="#ffffff22" strokeWidth="1" />
        <line x1="10" y1="140" x2="10" y2="10" stroke="#ffffff22" strokeWidth="1" />

        {/* retail (grey) */}
        <motion.path
          d={greyPathStart}
          stroke="#9ca3af" strokeOpacity="0.7" strokeWidth="2.5" fill="none"
          animate={inView ? { d: greyPathEnd } : undefined}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* institutional (red) */}
        <motion.path
          d={redPath}
          stroke="#FF3B3B" strokeWidth="3" fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 10px rgba(255,59,59,0.5))' }}
        />

        {/* widening glow */}
        <motion.circle cx="160" cy="40" r="3" fill="#FF3B3B" initial={{ opacity: 0 }} animate={inView ? { opacity: 1, scale: [1, 1.4, 1] } : {}} transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }} />
      </svg>

      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40 blur-2xl" aria-hidden>
        <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-[#FF3B3B]/30" />
      </div>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">The Problem</h2>
          <p className="text-white/70">
            For decades, private banks and hedge funds have made 40–100% yearly returns while retail investors barely beat inflation.
            Capital Code teaches you how to think like a professional — not chase tips or hype.
          </p>
        </div>
        <ReturnsGraph />
      </div>
    </section>
  );
}
