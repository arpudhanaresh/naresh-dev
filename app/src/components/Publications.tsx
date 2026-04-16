import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function Publications() {
  return (
    <section id="publications" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Publications</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="glass p-8 rounded-xl relative">
          <div className="flex gap-6 items-start">
            <div className="mt-1 hidden sm:block p-3 bg-white/5 rounded-full">
              <BookOpen className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Detection of Phishing Websites using an Efficient Machine Learning Framework
              </h3>
              <p className="text-gray-400 mb-2">Published in: <span className="text-gray-200">International Journal of Engineering Research & Technology (IJERT)</span></p>
              <p className="text-sm font-mono text-gray-500">Date: Jun 4, 2020</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
