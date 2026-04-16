import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "RHBPay",
    associated: "Finforz Technologies",
    period: "Jul 2025 – Present",
    description: "A robust fintech payment platform designed to handle high transaction volumes securely. Built custom components entirely from Figma designs.",
    tags: ["Angular", "Figma", "TypeScript"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Standard Chartered Bank — 3rdEye",
    associated: "Finforz Technologies",
    period: "Dec 2021 – Aug 2023",
    description: "An internal banking tool focused on reconciliation and transaction tracking. Implemented advanced reporting, robust access controls, and complex data grid interfaces.",
    tags: ["Angular", "C#", "MySQL", "Banking API"],
    links: { live: "#" }
  },
  {
    title: "Beach Tourism App (Blue Flag Beach)",
    associated: "Institute for Ocean Management, Anna Univ",
    period: "Freelance",
    description: "Android application developed as part of EIACP. Provided an intuitive interface for tourists exploring certified Blue Flag beaches, mapping out amenities and rules.",
    tags: ["React Native", "Node.js", "MySQL", "Android"],
    links: { live: "#" }
  },
  {
    title: "Instagram Downloader",
    associated: "Personal Project",
    period: "2024",
    description: "A highly performant web application to download high-quality assets from Instagram reels and posts utilizing underlying yt-dlp integrations.",
    tags: ["FastAPI", "React", "yt-dlp", "Python"],
    links: { github: "#" }
  },
  {
    title: "LinkedIn Tech News Agent",
    associated: "Personal Project",
    period: "2024",
    description: "Automated workflow pipeline using n8n. Scrapes RSS feeds, scores relevance via Claude API, and delivers a beautifully formatted daily Gmail digest.",
    tags: ["n8n", "Claude API", "AI Agent", "Workflow"],
    links: { github: "#" }
  },
  {
    title: "Payment Fraud Detector",
    associated: "Banking Architecture / Personal",
    period: "Past Project",
    description: "An advanced machine learning model developed specifically for detecting fraudulent transactions in real-time within banking systems utilizing detailed ML/DL classifiers.",
    tags: ["AI/ML", "Deep Learning", "Python", "Data Science"],
    links: { github: "#" }
  },
  {
    title: "Intrusion Detection System",
    associated: "M.E. Computer Science & Engineering",
    period: "PG Degree Project",
    description: "Architected an Intrusion Detection System built for robust network security, leveraging machine learning anomalies detection.",
    tags: ["Cybersecurity", "Network Security", "AI/ML"],
    links: { github: "#" }
  },
  {
    title: "AI Subtitle Generator",
    associated: "Personal Project",
    period: "Past Project",
    description: "An automated transcription and subtitle syncing tool built using advanced Speech-to-Text models and FFmpeg for seamless video integration.",
    tags: ["AI/ML", "Python", "Whisper", "FFmpeg"],
    links: { github: "#" }
  },
  {
    title: "Billing Software System",
    associated: "Freelance",
    period: "Past Project",
    description: "A comprehensive point-of-sale and billing management software tailored for local businesses, featuring automated PDF invoicing and inventory tracking.",
    tags: ["Full Stack", "React", "Node.js", "MySQL"],
    links: { github: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              className="h-full"
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                scale={1.02} 
                transitionSpeed={2000}
                className="h-full"
                gyroscope={true}
              >
                <div className="glass p-6 md:p-8 rounded-xl h-full flex flex-col group relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="text-accent">
                  <Folder size={40} className="stroke-1" />
                </div>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a href={project.links.github} className="text-gray-400 hover:text-accent transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} className="text-gray-400 hover:text-accent transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <div className="text-xs font-mono text-gray-500 mb-4 font-medium uppercase tracking-wider">
                {project.associated}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow text-justify">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
                </div>
              </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
