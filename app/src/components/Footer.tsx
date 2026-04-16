import { ArrowUp, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full border-t border-white/5 bg-base/50 mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="#" className="font-bold text-xl tracking-tighter text-white">
            N<span className="text-accent">.</span>K<span className="text-accent">.</span>D
          </a>
          <span className="hidden md:inline text-gray-600">|</span>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Naresh Kumar D. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/arpudhanaresh/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="https://arpudhahost.in" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <ExternalLink size={18} />
            </a>
          </div>
          
          <div className="h-6 w-px bg-white/10" />

          <button 
            onClick={scrollToTop}
            className="group flex items-center justify-center h-10 w-10 bg-white/5 border border-white/10 rounded-full hover:bg-accent/10 hover:border-accent hover:text-accent text-gray-400 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
