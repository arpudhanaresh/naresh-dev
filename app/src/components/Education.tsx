import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Education</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="space-y-6">
          <div className="glass p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={100} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Master of Engineering</h3>
            <p className="text-accent text-lg font-medium mb-1 relative z-10">Computer Science & Engineering</p>
            <p className="text-gray-400 mb-4 font-mono text-sm relative z-10">College of Engineering, Guindy • <span className="text-gray-300">Aug 2023 – Apr 2025</span></p>
          </div>

          <div className="glass p-8 rounded-xl relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Full Stack Web & Java Developer</h3>
            <p className="text-accent text-lg font-medium mb-1 relative z-10">NIIT Institute</p>
            <p className="text-gray-400 mb-4 font-mono text-sm relative z-10">Jan 2021 – May 2022 • <span className="text-green-400 font-bold border border-green-500/20 px-2 py-0.5 rounded bg-green-500/10">Grade: S</span></p>
          </div>

          <div className="glass p-8 rounded-xl relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Bachelor of Technology</h3>
            <p className="text-accent text-lg font-medium mb-1 relative z-10">Information Technology</p>
            <p className="text-gray-400 mb-4 font-mono text-sm relative z-10">Panimalar Engineering College • <span className="text-gray-300">2016 – 2020</span> • <span className="text-green-400 font-bold border border-green-500/20 px-2 py-0.5 rounded bg-green-500/10">Grade: S</span></p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
