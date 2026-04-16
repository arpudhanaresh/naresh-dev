import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { getResumeUrl } from '../services/api';

export default function Hero() {
  const titles = ["Full Stack Developer", "Azure Certified Engineer", "Open Source Builder"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />

      <div className="relative z-10 space-y-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-lg"
        >
          Hi, myself
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white"
        >
          Naresh Kumar D.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-bold text-gray-400 h-16 sm:h-20 flex items-center"
        >
          <span className="mr-3">I am a</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gradient"
            >
              {titles[titleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-lg text-gray-400 leading-relaxed text-justify md:text-left"
        >
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <span className="text-accent font-medium">Finforz Technologies</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start gap-4 sm:gap-6 pt-4 w-full sm:w-auto"
        >
          <a href="#projects" className="w-full sm:w-auto text-center px-8 py-4 bg-accent text-base font-semibold rounded-md shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:-translate-y-1 transition-all duration-300">
            View My Work
          </a>
          <a href={getResumeUrl()} target="_blank" rel="noreferrer" className="w-full sm:w-auto text-center px-8 py-4 border border-gray-600 text-white rounded-md hover:border-accent hover:text-accent transition-all duration-300">
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-6 mt-12 pt-8 border-t border-white/5"
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/arpudhanaresh/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://arpudhahost.in" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="My Web Hosting">
            <ExternalLink size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Ensure AnimatePresence is used directly in Hero
import { AnimatePresence as FramerAnimatePresence } from 'framer-motion';
const AnimatePresence = FramerAnimatePresence;
