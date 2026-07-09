import { Cpu, ExternalLink } from 'lucide-react';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_PROJECTS } from '@/data/portfolioData';

const Projects = () => {
  const [projects] = useStoredState('projects', DEFAULT_PROJECTS);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <Cpu size={22} className="text-portfolio-accent" />
          Deployed_Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/10 rounded-md overflow-hidden card-hover"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-[11px] text-gray-500 tracking-wider flex items-center gap-1.5">
                  <span className="status-dot" />
                  PROJECT_{String(idx + 1).padStart(3, '0')}
                </span>
                <ExternalLink size={14} className="text-gray-500 group-hover:text-portfolio-accent transition-colors" />
              </div>

              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold mb-2 group-hover:text-portfolio-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
