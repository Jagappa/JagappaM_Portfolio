import { User, Layout, TestTube2, Code2 } from 'lucide-react';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_LINKS } from '@/data/portfolioData';

const About = () => {
  const [links] = useStoredState('links', DEFAULT_LINKS);

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <User size={22} className="text-portfolio-accent" />
          About_Profile
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="relative border border-white/10 rounded-md overflow-hidden">
              <img
                src="/lovable-uploads/AboutPhotoV2.jpg"
                alt="Jagappa profile"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/70 px-2 py-1 rounded text-[10px] text-portfolio-accent">
                <span className="status-dot" /> ID: Jagappa
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Welcome! I'm Jagappa, a Full Stack Developer with hands-on experience in frontend development,
              backend engineering, and quality assurance. I recently completed my Master of Computer Applications
              (MCA) with a specialization in Artificial Intelligence and Machine Learning. I enjoy building
              responsive, scalable web applications using Java, Spring Boot, React.js, Node.js, and modern web
              technologies, while writing clean, maintainable code and delivering reliable software solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="border border-white/10 rounded-md p-4">
                <div className="flex items-center gap-2 text-portfolio-accent text-xs font-bold mb-2">
                  <Code2 size={14} /> Full Stack Developer
                </div>
                <p className="text-xs text-gray-500">Java &middot; Spring Boot &middot; React.js &middot; Node.js</p>
              </div>
              <div className="border border-white/10 rounded-md p-4">
                <div className="flex items-center gap-2 text-portfolio-accent text-xs font-bold mb-2">
                  <Layout size={14} /> Frontend Developer
                </div>
                <p className="text-xs text-gray-500">React.js &middot; JavaScript &middot; HTML &middot; CSS</p>
              </div>
              <div className="border border-white/10 rounded-md p-4">
                <div className="flex items-center gap-2 text-portfolio-accent text-xs font-bold mb-2">
                  <TestTube2 size={14} /> QA Engineer
                </div>
                <p className="text-xs text-gray-500">Manual Testing &middot; API Testing &middot; Bug Reporting</p>
              </div>
            </div>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-fit"
            >
              CONNECT ON LINKEDIN
            </a>

            <div className="border border-white/10 rounded-md p-5 text-xs md:text-sm text-gray-400 italic">
              "First, solve the problem. Then, write the code."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
