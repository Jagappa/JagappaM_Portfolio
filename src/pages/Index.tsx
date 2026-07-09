
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certificates from '@/components/Certificates';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="max-h-screen bg-portfolio-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
