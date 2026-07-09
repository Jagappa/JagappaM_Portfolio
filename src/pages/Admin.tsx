import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoredState } from '@/hooks/useStoredState';
import {
  DEFAULT_SKILLS,
  DEFAULT_PROJECTS,
  DEFAULT_LINKS,
  Skill,
  Project,
  ProfileLinks,
} from '@/data/portfolioData';

type Tab = 'skills' | 'projects' | 'links';

const emptyProject: Omit<Project, 'id'> & { id?: string } = {
  title: '',
  image: '',
  description: '',
  tags: [],
  link: '',
};

const Admin = () => {
  const [tab, setTab] = useState<Tab>('skills');

  const [skills, setSkills] = useStoredState<Skill[]>('skills', DEFAULT_SKILLS);
  const [projects, setProjects] = useStoredState<Project[]>('projects', DEFAULT_PROJECTS);
  const [links, setLinks] = useStoredState<ProfileLinks>('links', DEFAULT_LINKS);

  const [skillName, setSkillName] = useState('');
  const [skillColor, setSkillColor] = useState('#7cf03d');

  const [projectForm, setProjectForm] = useState(emptyProject);
  const [tagsInput, setTagsInput] = useState('');

  const [linkForm, setLinkForm] = useState<ProfileLinks>(links);
  const [savedMsg, setSavedMsg] = useState(false);

  const addSkill = () => {
    if (!skillName.trim()) return;
    setSkills([...skills, { id: `s${Date.now()}`, name: skillName.trim(), color: skillColor }]);
    setSkillName('');
  };

  const removeSkill = (id: string) => setSkills(skills.filter((s) => s.id !== id));

  const startEditProject = (p: Project) => {
    setProjectForm(p);
    setTagsInput(p.tags.join(', '));
  };

  const resetProjectForm = () => {
    setProjectForm(emptyProject);
    setTagsInput('');
  };

  const saveProject = () => {
    if (!projectForm.title.trim()) return;
    const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
    if (projectForm.id) {
      setProjects(projects.map((p) => (p.id === projectForm.id ? ({ ...projectForm, tags } as Project) : p)));
    } else {
      setProjects([...projects, { ...projectForm, tags, id: `p${Date.now()}` } as Project]);
    }
    resetProjectForm();
  };

  const removeProject = (id: string) => setProjects(projects.filter((p) => p.id !== id));

  const saveLinks = () => {
    setLinks(linkForm);
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 1800);
  };

  const resetAll = () => {
    setSkills(DEFAULT_SKILLS);
    setProjects(DEFAULT_PROJECTS);
    setLinks(DEFAULT_LINKS);
    setLinkForm(DEFAULT_LINKS);
    resetProjectForm();
  };

  const tabs: Tab[] = ['skills', 'projects', 'links'];

  return (
    <div className="min-h-screen bg-portfolio-dark text-white">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold uppercase tracking-wide flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-portfolio-accent inline-block" style={{ boxShadow: '0 0 8px rgba(57,255,138,0.8)' }} />
            Portfolio_Admin
          </h1>
          <Link to="/" className="text-xs uppercase tracking-wider text-portfolio-accent hover:underline">
            &larr; Back to site
          </Link>
        </div>

        <div className="flex gap-2 mb-8 border-b border-white/10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border-b-2 -mb-px transition-colors ${
                tab === t
                  ? 'text-portfolio-accent border-portfolio-accent'
                  : 'text-gray-500 border-transparent hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'skills' && (
          <div className="grid md:grid-cols-[320px_1fr] gap-6">
            <div className="bg-portfolio-card rounded-xl p-5">
              <h2 className="text-sm font-semibold mb-4">Add a skill</h2>
              <label className="block text-xs text-gray-400 mb-1">Skill name</label>
              <input
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
                placeholder="e.g. Docker"
              />
              <label className="block text-xs text-gray-400 mb-1">Badge color</label>
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="color"
                  value={skillColor}
                  onChange={(e) => setSkillColor(e.target.value)}
                  className="w-9 h-9 rounded-md border border-white/10 bg-transparent p-0 cursor-pointer"
                />
                <span className="text-xs text-gray-400">{skillColor}</span>
              </div>
              <button onClick={addSkill} className="btn-primary w-full text-center">
                Add skill
              </button>
            </div>

            <div className="bg-portfolio-card rounded-xl p-5">
              <h2 className="text-sm font-semibold mb-4">Current skills</h2>
              {skills.length === 0 ? (
                <p className="text-sm text-gray-400">No skills yet.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((s) => (
                    <div
                      key={s.id}
                      className="flex items-center gap-3 bg-portfolio-dark border border-white/5 rounded-lg px-3 py-2.5"
                    >
                      <span className="w-6 h-6 rounded-md flex-shrink-0" style={{ backgroundColor: s.color }} />
                      <span className="text-sm flex-1 truncate">{s.name}</span>
                      <button
                        onClick={() => removeSkill(s.id)}
                        className="text-gray-500 hover:text-red-400 text-lg leading-none"
                        aria-label={`Remove ${s.name}`}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {tab === 'projects' && (
          <div className="grid md:grid-cols-[360px_1fr] gap-6">
            <div className="bg-portfolio-card rounded-xl p-5">
              <h2 className="text-sm font-semibold mb-4">
                {projectForm.id ? 'Edit project' : 'Add a project'}
              </h2>
              <label className="block text-xs text-gray-400 mb-1">Title</label>
              <input
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                value={projectForm.title}
                onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                placeholder="e.g. Inventory Tracker"
              />
              <label className="block text-xs text-gray-400 mb-1">Image path</label>
              <input
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                value={projectForm.image}
                onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                placeholder="/lovable-uploads/example.png"
              />
              <label className="block text-xs text-gray-400 mb-1">Description</label>
              <textarea
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                rows={3}
                value={projectForm.description}
                onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                placeholder="What the project does"
              />
              <label className="block text-xs text-gray-400 mb-1">Tags (comma separated)</label>
              <input
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="React, TypeScript, MySQL"
              />
              <label className="block text-xs text-gray-400 mb-1">Project link</label>
              <input
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                value={projectForm.link}
                onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                placeholder="https://github.com/..."
              />
              <div className="flex gap-2">
                <button onClick={saveProject} className="btn-primary flex-1 text-center">
                  {projectForm.id ? 'Save changes' : 'Add project'}
                </button>
                {projectForm.id && (
                  <button
                    onClick={resetProjectForm}
                    className="px-4 rounded-md border border-white/15 text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            <div className="bg-portfolio-card rounded-xl p-5">
              <h2 className="text-sm font-semibold mb-4">Current projects</h2>
              {projects.length === 0 ? (
                <p className="text-sm text-gray-400">No projects yet.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 bg-portfolio-dark border border-white/5 rounded-lg px-4 py-3"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{p.title}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {p.tags.map((t, i) => (
                            <span
                              key={i}
                              className="bg-portfolio-accent/15 text-portfolio-accent text-[10px] px-2 py-0.5 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => startEditProject(p)}
                        className="text-xs text-gray-400 hover:text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeProject(p.id)}
                        className="text-gray-500 hover:text-red-400 text-lg leading-none"
                        aria-label={`Remove ${p.title}`}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {tab === 'links' && (
          <div className="bg-portfolio-card rounded-xl p-5 max-w-md">
            <h2 className="text-sm font-semibold mb-4">Profile links</h2>
            <label className="block text-xs text-gray-400 mb-1">GitHub URL</label>
            <input
              className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
              value={linkForm.github}
              onChange={(e) => setLinkForm({ ...linkForm, github: e.target.value })}
              placeholder="https://github.com/username"
            />
            <label className="block text-xs text-gray-400 mb-1">LinkedIn URL</label>
            <input
              className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
              value={linkForm.linkedin}
              onChange={(e) => setLinkForm({ ...linkForm, linkedin: e.target.value })}
              placeholder="https://www.linkedin.com/in/username"
            />
            <label className="block text-xs text-gray-400 mb-1">Resume file path</label>
            <input
              className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-1 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
              value={linkForm.resume}
              onChange={(e) => setLinkForm({ ...linkForm, resume: e.target.value })}
              placeholder="/Jagappa-Resume.pdf"
            />
            <p className="text-[11px] text-gray-500 mb-3">
              This is the path your Hero section links to for the download button.
            </p>
            <label className="block text-xs text-gray-400 mb-1">Contact email</label>
            <input
              className="w-full bg-portfolio-dark border border-white/10 rounded-md p-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
              value={linkForm.email}
              onChange={(e) => setLinkForm({ ...linkForm, email: e.target.value })}
              placeholder="you@example.com"
            />
            <button onClick={saveLinks} className="btn-primary w-full text-center">
              Save links
            </button>
            {savedMsg && <p className="text-xs text-portfolio-accent mt-3">Saved.</p>}
          </div>
        )}

        <div className="flex justify-end mt-8">
          <button
            onClick={resetAll}
            className="text-xs text-gray-400 hover:text-red-400 border border-white/10 rounded-md px-4 py-2"
          >
            Reset to site defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
