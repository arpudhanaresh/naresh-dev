import { motion } from 'framer-motion';
import { Code2, Cloud, ShieldCheck, ExternalLink } from 'lucide-react';

const specialties = [
  {
    icon: <Code2 className="w-5 h-5 text-accent" />,
    title: "Full Stack Development",
    desc: "FastAPI · React · Angular · TypeScript · Node.js",
  },
  {
    icon: <Cloud className="w-5 h-5 text-accent" />,
    title: "Azure Certified Engineer",
    desc: "Azure Developer Associate · Docker · CI/CD · AWS",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    title: "UX Design & Security",
    desc: "Figma · Cybersecurity · Scalable System Design",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
          {/* Bio text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-3 space-y-5 text-gray-400 text-lg leading-relaxed"
          >
            <motion.p variants={itemVariants} className="text-justify">
              Hi! I'm Naresh, a passionate Full Stack Software Engineer currently based in Chennai, Tamil Nadu, India.
              My journey in tech began during my B.Tech days, but properly matured while securing my{' '}
              <span className="text-accent font-medium">M.E. in Computer Science & Engineering</span> from the
              prestigious College of Engineering, Guindy.
            </motion.p>
            <motion.p variants={itemVariants} className="text-justify">
              Right now, I am thriving at <span className="text-accent font-medium">Finforz Technologies</span>, where
              I've accumulated over 3 years of experience. I specialize in building highly scalable APIs with{' '}
              <span className="text-accent font-medium">FastAPI Python</span> and developing rich, dynamic client-side
              applications using <span className="text-accent font-medium">React</span> and{' '}
              <span className="text-accent font-medium">Angular</span>.
            </motion.p>
            <motion.p variants={itemVariants} className="text-justify">
              Beyond coding, I have a solid grasp of{' '}
              <span className="text-accent font-medium">UX design using Figma</span> and hold moderate expertise in{' '}
              <span className="text-accent font-medium">Cybersecurity</span>. I also proudly run my own venture,{' '}
              <a
                href="https://arpudhahost.in"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline inline-flex items-center gap-1"
              >
                arpudhahost.in <ExternalLink size={14} />
              </a>
              , a personal web hosting service that powers digital dreams for multiple clients, and I am formally{' '}
              <span className="text-accent font-medium">Microsoft Certified: Azure Developer Associate</span>.
            </motion.p>
          </motion.div>

          {/* Specialty cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {specialties.map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="glass p-5 rounded-xl border-l-2 border-accent/40 hover:border-accent transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  {s.icon}
                  <h3 className="text-white font-semibold text-sm">{s.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed pl-8">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 cursor-default"
        >
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Shipped', value: '15+' },
            { label: 'Certifications', value: '2' },
            { label: 'College Degree', value: 'M.E.' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass p-6 rounded-xl text-center border border-white/5 hover:border-accent/30 transition-colors"
            >
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
