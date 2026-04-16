import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Finforz Technologies",
    location: "Chennai (Hybrid)",
    title: "Software Engineer",
    period: "Jul 2025 – Present",
    type: "Full-time",
    description: "Developing scalable applications and working across the stack using React, Angular, and Python FastAPI. Managing internal systems and contributing to high-value client projects like RHBPay."
  },
  {
    company: "Finforz Technologies",
    location: "Chennai (On-site)",
    title: "Software Developer",
    period: "Jun 2025 (1 mo)",
    type: "Full-time",
    description: "Specialized in React.js development, refactoring legacy components and implementing modern UI features."
  },
  {
    company: "Finforz Technologies",
    location: "Chennai (On-site)",
    title: "Intern",
    period: "Jan 2025 – May 2025 (5 mos)",
    type: "Internship",
    description: "Trained in full-stack development patterns, collaborating with senior developers on agile sprints."
  },
  {
    company: "Finforz Technologies",
    location: "Chennai",
    title: "Associate Software Developer",
    period: "Dec 2021 – Aug 2023 (1 yr 9 mos)",
    type: "Full-time",
    description: "Played a critical role in developing the Standard Chartered Bank 3rdEye internal banking tool, utilizing Angular, C#, and MySQL. Delivered consistent performance optimizations."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white">Where I've Worked</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[18px] top-1 h-9 w-9 rounded-full bg-base border border-accent flex items-center justify-center text-accent shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                <Briefcase size={16} />
              </div>
              
              <div className="glass p-8 rounded-xl group hover:border-accent/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 mb-4 font-mono font-medium">
                  <span className="text-blue-400">{exp.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.period}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {exp.description}
                </p>
                <div className="mt-4 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                  {exp.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
