import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_LINKS, DEFAULT_PROJECTS } from '@/data/portfolioData';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  const [links] = useStoredState('links', DEFAULT_LINKS);
  const [projects] = useStoredState('projects', DEFAULT_PROJECTS);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ['Full Stack Developer', '&amp; Web Designer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="terminal-badge mb-6 w-fit">
          <span className="status-dot" />
          SYSTEM_ONLINE&nbsp;||&nbsp;Full Stack Developer
        </div>

        <p className="eyebrow"># IDENTITY_VERIFIED...</p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
          Jagappa
        </h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="w-full md:w-3/5 space-y-6">
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              I am a <span className="font-bold text-white">Full Stack Developer</span> with hands-on experience in{' '}
              <span className="font-bold text-white">frontend development, backend engineering, and software testing</span>. I build{' '}
              <span className="font-bold text-white">responsive, scalable web applications</span> using Java, Spring Boot,
              React.js, Node.js, and modern web technologies, with a strong focus on{' '}
              <span className="font-bold text-white">clean architecture, RESTful APIs</span>, and delivering
              production-ready solutions.
            </p>

            <p className="text-portfolio-accent text-xs md:text-sm">
              Current Focus: Building scalable full stack applications, improving backend architecture with Spring Boot,
              mastering DSA, and developing production-ready software.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="btn-primary">
                ACCESS_PROJECTS &gt;
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Linkedin size={14} /> CONNECT
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Github size={14} /> GITHUB
              </a>
              <button onClick={() => setResumeOpen(true)} className="btn-outline">
                <Download size={14} /> RESUME
              </button>
              <a href={`mailto:${links.email}`} className="btn-outline">
                <Mail size={14} /> EMAIL
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 grid grid-cols-2 gap-4">
            <div className="border border-white/10 rounded-md p-5">
              <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-2">Projects</div>
              <div className="text-xl font-bold">{projects.length}+ Deployed</div>
            </div>
            <div className="border border-white/10 rounded-md p-5">
              <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-2">Focus</div>
              <div className="text-xl font-bold text-portfolio-accent">Full Stack Dev</div>
            </div>
            <div className="col-span-2 border border-white/10 rounded-md p-5">
              <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-2">Currently Learning</div>
              <div className="text-base font-bold">
                <span ref={typedRef} className="text-portfolio-accent"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {resumeOpen && <ResumeModal resumeUrl={links.resume} onClose={() => setResumeOpen(false)} />}
    </section>
  );
};

export default Hero;
