import { Award, CheckCircle2 } from 'lucide-react';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_CERTIFICATES } from '@/data/portfolioData';

const Certificates = () => {
  const [certificates] = useStoredState('certificates', DEFAULT_CERTIFICATES);

  return (
    <section id="certificates" className="py-16 md:py-24 bg-portfolio-card/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <Award size={22} className="text-portfolio-accent" />
          Certificates_And_Publications
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="border border-white/10 rounded-md p-5">
              {cert.verified && (
                <div className="flex items-center gap-1.5 text-portfolio-accent text-[11px] uppercase tracking-wider mb-3">
                  <CheckCircle2 size={13} /> Verified
                </div>
              )}
              <h3 className="text-base font-bold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
              {cert.description && (
                <p className="text-xs text-gray-500 leading-relaxed">{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
