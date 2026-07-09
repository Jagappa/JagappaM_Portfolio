import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);

    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id') || '';

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-portfolio-dark/95 backdrop-blur-sm' : 'bg-portfolio-dark'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2.5 text-base md:text-lg font-bold tracking-tight">
          <span className="w-3 h-3 bg-white inline-block" />
          Jagappa
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 text-[11px] uppercase tracking-widest">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors duration-300 pb-1 border-b-2 ${activeSection === link.id ? 'text-white border-portfolio-accent' : 'text-gray-500 border-transparent hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-portfolio-dark/95 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 text-xs uppercase tracking-widest">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-300 py-2 ${activeSection === link.id ? 'text-portfolio-accent' : 'text-gray-400'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
