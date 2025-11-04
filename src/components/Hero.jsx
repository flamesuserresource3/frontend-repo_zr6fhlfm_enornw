import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

function GlowButton({ children }) {
  return (
    <motion.a
      href="#pricing"
      whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(255,59,59,0.45)' }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center gap-2 rounded-xl bg-[#FF3B3B] px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(255,59,59,0.35)] outline-none ring-0 transition-all"
    >
      <span>Reserve Your Seat Now</span>
      <span className="transition-transform group-hover:translate-x-0.5">→</span>
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-20" />
    </motion.a>
  );
}

function FloatingLogo() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [ -40, 40 ], [ 8, -8 ]);
  const rotateY = useTransform(x, [ -40, 40 ], [ -8, 8 ]);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - (rect.left + rect.width / 2);
    const py = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-40, Math.min(40, px / 6)));
    y.set(Math.max(-40, Math.min(40, py / 6)));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY }}
      className="relative mx-auto grid h-52 w-52 place-items-center rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] p-[1px] shadow-[0_0_100px_rgba(255,59,59,0.25)] backdrop-blur-md"
    >
      <div className="absolute -inset-8 -z-0 rounded-full bg-[#FF3B3B]/20 blur-3xl" />
      <div className="relative h-full w-full rounded-3xl bg-black/60 backdrop-blur-xl">
        <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF3B3B" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FF3B3B" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FF3B3B" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="78" stroke="url(#g)" strokeWidth="3" />
          <path d="M70 60c-22 16-22 64 0 80 24 18 64 6 64-16H114c0 14-26 22-38 6-14-18-14-54 0-72 12-16 38-8 38 6h20c0-22-40-34-64-16z" fill="url(#g)" />
          <motion.circle cx="100" cy="100" r="55" stroke="#FF3B3B" strokeOpacity="0.55" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 10px rgba(255,59,59,0.6))' }} animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />
        </svg>
        <div className="pointer-events-none absolute inset-x-6 bottom-4 h-1 rounded-full bg-gradient-to-r from-amber-300/30 via-[#FF3B3B]/50 to-amber-300/30 blur-sm" />
      </div>
    </motion.div>
  );
}

function GlassVideo() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#FF3B3B]/40 via-white/10 to-amber-300/30 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_100px_-40px_rgba(255,59,59,0.6)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 to-transparent opacity-30" />
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-white/30 to-transparent opacity-30" />
        <iframe
          className="relative aspect-video w-full"
          src="https://www.youtube.com/embed/5aKQkT1EL3w?rel=0&modestbranding=1&color=white"
          title="The Capital Code Masterclass"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* Background FX */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,59,59,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,59,59,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#151515_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-8 text-center">
          <FloatingLogo />
          <div className="space-y-4">
            <h1 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              The Capital Code Masterclass
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-base text-white/70 sm:text-lg">
              The first and last masterclass that truly reveals how markets work.
            </p>
          </div>
          <GlowButton />
        </div>
        <GlassVideo />
      </div>
    </section>
  );
}
