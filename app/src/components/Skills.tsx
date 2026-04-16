import { motion } from 'framer-motion';
import { 
  FaReact, FaDocker, 
  FaDatabase, FaMobileAlt, FaFigma
} from 'react-icons/fa';
import { SiFastapi } from 'react-icons/si';

const categories = [
  {
    title: "Frontend",
    icon: <FaReact className="text-2xl text-accent mb-4" />,
    skills: ["React 18", "Angular", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: <SiFastapi className="text-2xl text-accent mb-4" />,
    skills: ["FastAPI", "Node.js", "Python", "C#", "Java"]
  },
  {
    title: "Cloud & DevOps",
    icon: <FaDocker className="text-2xl text-accent mb-4" />,
    skills: ["Microsoft Azure", "AWS", "Jenkins", "Docker", "GitHub Actions"]
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-2xl text-accent mb-4" />,
    skills: ["MySQL", "PostgreSQL", "Query Optimization"]
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt className="text-2xl text-accent mb-4" />,
    skills: ["React Native", "Android Architecture"]
  },
  {
    title: "Security, AI & Extras",
    icon: <FaFigma className="text-2xl text-accent mb-4" />,
    skills: ["AI / ML / Deep Learning", "Cybersecurity", "Figma (UX Design)", "n8n (Automation)", "yt-dlp"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Technological Arsenal</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl border-t border-white/10 hover:border-accent/40 transition-colors"
            >
              {cat.icon}
              <h3 className="text-xl font-semibold text-white mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
