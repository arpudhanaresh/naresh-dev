import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Honors & Awards</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl border border-white/5 relative overflow-hidden group hover:border-yellow-500/30 transition-colors">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy size={100} />
            </div>
            <div className="flex flex-col h-full relative z-10">
              <Trophy className="text-yellow-500 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">Young Talent Award 2022</h3>
              <p className="text-gray-400 text-sm mt-auto">Finforz Technologies • Dec 2022</p>
            </div>
          </div>

          <div className="glass p-6 rounded-xl border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy size={100} />
            </div>
            <div className="flex flex-col h-full relative z-10">
              <Trophy className="text-blue-500 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">Commitment and Continuity Award</h3>
              <p className="text-gray-400 text-sm mt-auto">Finforz Technologies • Feb 2025</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
