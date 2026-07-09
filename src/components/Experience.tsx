import { TerminalSquare } from 'lucide-react';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_EXPERIENCES } from '@/data/portfolioData';

const Experience = () => {
  const [experiences] = useStoredState('experiences', DEFAULT_EXPERIENCES);

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <TerminalSquare size={22} className="text-portfolio-accent" />
          Execution_Log
        </h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-7 border-l border-white/10">
              <span
                className={`absolute -left-[7px] top-1 w-3 h-3 border border-white/40 ${
                  exp.current ? 'bg-transparent' : 'bg-white/80'
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-base md:text-lg font-bold">{exp.role}</h3>
                <span className="text-[11px] text-gray-500 uppercase tracking-wider">{exp.period}</span>
              </div>

              <div className="text-portfolio-accent text-sm mb-4">{exp.company}</div>

              <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-xs md:text-[13px] text-gray-400 flex gap-2 leading-relaxed">
                    <span className="text-gray-600 mt-0.5">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
