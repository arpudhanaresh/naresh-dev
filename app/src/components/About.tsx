import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6 text-gray-400 text-lg leading-relaxed text-justify">
            <p>
              Hi! I'm Naresh, a passionate Full Stack Software Engineer currently based in Chennai, Tamil Nadu, India.
              My journey in tech began during my B.Tech days, but properly matured while securing my <span className="text-accent font-medium">M.E. in Computer Science & Engineering</span> from the prestigious College of Engineering, Guindy.
            </p>
            <p>
              Right now, I am thriving at <span className="text-accent font-medium">Finforz Technologies</span>, where I've accumulated over 3 years of experience. I specialize in building highly scalable APIs with <span className="text-accent font-medium">FastAPI Python</span> and developing rich, dynamic client-side applications using <span className="text-accent font-medium">React</span> and <span className="text-accent font-medium">Angular</span>.
            </p>
            <p>
              Beyond coding, I have a solid grasp of <span className="text-accent font-medium">UX design using Figma</span> and hold moderate expertise in <span className="text-accent font-medium">Cybersecurity</span>. I also proudly run my own venture, <a href="https://arpudhahost.in" target="_blank" rel="noreferrer" className="text-accent hover:underline inline-flex items-center gap-1">arpudhahost.in <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>, a personal web hosting service that powers digital dreams for multiple clients, and I am formally <span className="text-accent font-medium">Microsoft Certified: Azure Developer Associate</span>.
            </p>
          </div>
          
          <div className="lg:col-span-2 relative group w-64 mx-auto md:w-full max-w-sm mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
            <div className="relative aspect-square rounded-2xl overflow-hidden glass border-white/20 p-2">
              <div className="w-full h-full bg-surfaceDark rounded-xl flex items-center justify-center text-gray-500 font-mono text-sm leading-relaxed text-center p-6">
                &lt;!-- <br/><br/>
                Profile Photo Placeholder<br/><br/>
                Add your real photo here <br/>
                and remove this div<br/>
                <br/>
                --&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 cursor-default">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Shipped', value: '15+' },
            { label: 'Certifications', value: '2' },
            { label: 'College Degree', value: 'M.E.' },
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-xl text-center hover:-translate-y-1 transition-transform">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
