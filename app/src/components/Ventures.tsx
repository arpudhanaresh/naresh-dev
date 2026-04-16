import { motion } from 'framer-motion';
import { Server, ExternalLink } from 'lucide-react';

export default function Ventures() {
  return (
    <section id="ventures" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Ventures / Side Projects</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="glass p-8 rounded-xl relative border-t-2 border-accent group text-center max-w-2xl mx-auto cursor-default">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Server className="text-accent" size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">arpudhahost.in</h3>
          <p className="text-gray-400 leading-relaxed mb-8 text-justify md:text-center mt-2">
            A personal web hosting service owned and operated by me. I provide reliable, high-performance hosting solutions for side projects, portfolios, and small businesses with guaranteed uptime and modern tech stacks.
          </p>

          <a 
            href="https://arpudhahost.in" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
          >
            Visit Website <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
