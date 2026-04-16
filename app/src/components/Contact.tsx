import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { submitContactForm } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await submitContactForm(formData);
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white drop-shadow-md">Let's build something <span className="text-gradient">awesome</span> together.</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md text-justify sm:text-left mt-4 mb-8">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full glass flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <a href="mailto:arpudhanaresh@gmail.com" className="text-gray-400 hover:text-accent">arpudhanaresh@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full glass flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-400">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/arpudhanaresh/" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass p-8 sm:p-10 rounded-2xl flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input 
                id="name"
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-base/50 text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input 
                id="email"
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-base/50 text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-base/50 text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                placeholder="Hello Naresh, I would like to talk about..."
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-accent text-base font-bold py-4 rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] mt-2"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
