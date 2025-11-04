import { motion } from 'framer-motion';

export default function Pricing() {
  const currentPrice = 999;
  const seatsRemaining = 250;
  const totalSeats = 500; // for visualization only
  const pct = Math.max(0, Math.min(1, 1 - seatsRemaining / totalSeats));

  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* moving light streak */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        initial={{ x: '-30%' }}
        animate={{ x: ['-30%', '130%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,59,59,0.12), rgba(255,59,59,0.22), transparent)' }}
      />

      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_120px_-40px_rgba(255,59,59,0.55)] backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FF3B3B]/30 via-white/10 to-amber-300/20 opacity-50 blur-2xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Join the Masterclass</h3>
            <p className="text-white/70">The price increases by 1% after every purchase until it reaches ₹1,999. After that, it stays fixed.</p>

            <div className="flex items-end gap-6 pt-2">
              <div>
                <div className="text-sm text-white/60">Current Price</div>
                <div className="text-3xl font-semibold text-white">₹{currentPrice.toLocaleString('en-IN')}</div>
              </div>
              <div>
                <div className="text-sm text-white/60">Seats Remaining</div>
                <div className="text-3xl font-semibold text-white">{seatsRemaining}</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-xs text-white/60">
                <span>Progress</span>
                <span>{Math.round(pct * 100)}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div className="h-full rounded-full bg-[#FF3B3B]" initial={{ width: 0 }} animate={{ width: `${pct * 100}%` }} transition={{ duration: 1.2, ease: 'easeInOut' }} />
              </div>
            </div>

            <motion.a
              href="#" 
              whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(255,59,59,0.45)' }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#FF3B3B] px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(255,59,59,0.35)]"
            >
              Reserve My Seat →
            </motion.a>
          </div>

          {/* circular tracker */}
          <div className="relative mx-auto aspect-square w-56">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF3B3B" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="40" stroke="#ffffff15" strokeWidth="8" fill="none" />
              <motion.circle
                cx="50" cy="50" r="40" stroke="url(#grad)" strokeWidth="8" fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: pct }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              <text x="50" y="54" textAnchor="middle" className="fill-white" style={{ fontSize: 14, fontWeight: 700 }}>{Math.round(pct * 100)}%</text>
            </svg>
            {/* butterfly */}
            <motion.div
              className="pointer-events-none absolute -right-2 -top-2 h-7 w-7"
              animate={{ y: [0, -6, 0], rotateZ: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF3B3B" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <path d="M20 20c-6-8-12-8-16-6 6 2 10 6 10 10-6 2-8 4-8 6 6-2 10-4 14-10z" fill="url(#b)" opacity=".75" />
                <path d="M20 20c6-8 12-8 16-6-6 2-10 6-10 10 6 2 8 4 8 6-6-2-10-4-14-10z" fill="url(#b)" />
                <circle cx="20" cy="20" r="2" fill="#fff" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
