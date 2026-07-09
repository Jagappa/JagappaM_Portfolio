import { GraduationCap } from 'lucide-react';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_EDUCATION } from '@/data/portfolioData';

const Education = () => {
  const [education] = useStoredState('education', DEFAULT_EDUCATION);

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <GraduationCap size={22} className="text-portfolio-accent" />
          Academic_Databanks
        </h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={edu.id} className="relative pl-7 border-l border-white/10">
              <span
                className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border border-white/40 ${
                  idx === 0 ? 'bg-portfolio-accent border-portfolio-accent' : 'bg-transparent'
                }`}
                style={idx === 0 ? { boxShadow: '0 0 8px rgba(57,255,138,0.8)' } : undefined}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-base md:text-lg font-bold">{edu.institution}</h3>
                <span className="text-[11px] text-gray-500 uppercase tracking-wider">{edu.period}</span>
              </div>

              <p className="text-portfolio-accent text-sm mb-1">{edu.degree}</p>
              <p className="text-xs text-gray-500 mb-3">{edu.location}</p>

              <span className="tag-chip">{edu.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
