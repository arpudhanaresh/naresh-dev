import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Publications from './components/Publications'
import Awards from './components/Awards'
import Ventures from './components/Ventures'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-base text-gray-200 selection:bg-accent selection:text-base">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Mouse Tracking Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 229, 255, 0.05), transparent 80%)`
        }}
      />

      <Navbar />
      
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 space-y-32 pb-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Publications />
        <Awards />
        <Ventures />
        <Contact />
      </main>

      <Footer />

      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }} 
      />
    </div>
  )
}

export default App
