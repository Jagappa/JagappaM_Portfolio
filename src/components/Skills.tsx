import { useMemo } from 'react';
import { Layers, BrainCircuit } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_SKILL_CATEGORIES, DEFAULT_PROJECTS } from '@/data/portfolioData';

const Skills = () => {
  const [categories] = useStoredState('skillCategories', DEFAULT_SKILL_CATEGORIES);
  const [projects] = useStoredState('projects', DEFAULT_PROJECTS);

  // Derive a "usage" score per skill from how often it shows up across project tags -
  // real signal from your data rather than a made-up proficiency number.
  const radarData = useMemo(() => {
    const allSkills = categories.flatMap((c) => c.skills);
    const scored = allSkills.map((name) => {
      const hits = projects.filter((p) =>
        p.tags.some((t) => t.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(t.toLowerCase()))
      ).length;
      return { skill: name, value: 30 + hits * 20 };
    });
    return scored.filter((s) => s.value > 30).slice(0, 7);
  }, [categories, projects]);

  return (
    <section id="skills" className="py-16 md:py-24 bg-portfolio-card/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <Layers size={22} className="text-portfolio-accent" />
          Tech_Arsenal
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="border border-white/10 rounded-md p-5">
                <div className="text-xs uppercase tracking-wider text-portfolio-accent font-bold mb-3">
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="tag-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-white/10 rounded-md p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-2">
              <BrainCircuit size={16} className="text-portfolio-accent" />
              Skill_Matrix
            </div>
            <div className="h-64 md:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius="70%">
                  <PolarGrid stroke="rgba(255,255,255,0.12)" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                  />
                  <Radar
                    dataKey="value"
                    stroke="#39ff8a"
                    fill="#39ff8a"
                    fillOpacity={0.25}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-gray-600 text-center mt-2">// derived from project usage frequency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
