import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_LINKS } from '@/data/portfolioData';

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [links] = useStoredState('links', DEFAULT_LINKS);

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="font-bold text-sm mb-1">Jagappa</h3>
          <p className="text-portfolio-accent text-xs">Full Stack Developer</p>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-wider text-gray-500 mb-3">Contact Us</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Email: {links.email}</li>
            <li>Phone: {links.phone}</li>
            <li>Address: {links.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-wider text-gray-500 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-gray-400 hover:text-portfolio-accent transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-wider text-gray-500 mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/15 text-gray-400 flex items-center justify-center hover:text-portfolio-accent hover:border-portfolio-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/15 text-gray-400 flex items-center justify-center hover:text-portfolio-accent hover:border-portfolio-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/15 text-gray-400 flex items-center justify-center hover:text-portfolio-accent hover:border-portfolio-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${links.email}`}
              className="w-9 h-9 rounded-full border border-white/15 text-gray-400 flex items-center justify-center hover:text-portfolio-accent hover:border-portfolio-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center text-[11px] text-gray-600 pt-6 border-t border-white/5 tracking-wider">
          &copy; {currentYear} JAGAPPA.DEV &mdash; ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
