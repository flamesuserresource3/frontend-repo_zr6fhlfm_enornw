import Hero from './components/Hero';
import Problem from './components/Problem';
import Learn from './components/Learn';
import Pricing from './components/Pricing';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* global background gradients and subtle motion */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(255,59,59,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_80%_20%,rgba(251,191,36,0.08),transparent_60%)]" />
        <motion.div
          className="absolute inset-0"
          initial={{ backgroundPositionX: '0%' }}
          animate={{ backgroundPositionX: ['0%', '200%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundImage: 'linear-gradient(120deg, transparent, rgba(255,59,59,0.08), transparent)', backgroundSize: '200% 100%' }}
        />
      </div>

      <Hero />
      <Problem />
      <Learn />
      <Pricing />

      <footer className="px-6 py-12 text-center text-sm text-white/50">
        © {new Date().getFullYear()} The Capital Code. All rights reserved.
      </footer>
    </div>
  );
}
