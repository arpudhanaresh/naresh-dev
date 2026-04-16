import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Certifications</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-xl border border-white/5 hover:border-blue-500/30">
            <Award className="text-blue-500 mb-4" size={32} />
            <h3 className="text-lg font-bold text-white mb-2 leading-snug">Microsoft Certified: Azure Developer Associate</h3>
            <p className="text-sm text-gray-400 mb-4">Valid: Apr 2023 – Apr 2027</p>
            <div className="text-xs font-mono bg-white/5 py-2 px-3 rounded text-gray-300 inline-block">
              Credential: <span className="text-white font-semibold tracking-wider">A1891DEA50A0F36D</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-xl border border-white/5 hover:border-accent/30">
            <Award className="text-accent mb-4" size={32} />
            <h3 className="text-lg font-bold text-white mb-2 leading-snug">Post Graduate Program in Full Stack SE (Java Spec)</h3>
            <p className="text-sm text-gray-400 mb-4">Issued: Sep 2022 • NIIT</p>
            <div className="text-xs font-mono bg-white/5 py-2 px-3 rounded text-gray-300 inline-block">
              Credential: <span className="text-white font-semibold tracking-wider">23AAZZZZZ6470</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
