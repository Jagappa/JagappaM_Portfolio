import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { useStoredState } from '@/hooks/useStoredState';
import { DEFAULT_LINKS } from '@/data/portfolioData';

const Contact = () => {
  const { toast } = useToast();
  const [links] = useStoredState('links', DEFAULT_LINKS);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new FormData();
    formBody.append('access_key', 'bf65766a-d7b2-4b53-b446-ceb7f5c202c7');
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('message', formData.message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formBody,
      });

      const result = await res.json();

      if (result.success) {
        toast({
          title: 'Message sent successfully!',
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong.');
      }
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactRows = [
    { label: 'email', value: links.email, href: `mailto:${links.email}`, icon: <Mail size={14} />, external: false },
    { label: 'phone', value: links.phone, href: `tel:${links.phone.replace(/\s+/g, '')}`, icon: <Phone size={14} />, external: false },
    { label: 'github', value: links.github.replace(/^https?:\/\//, ''), href: links.github, icon: <Github size={14} />, external: true },
    { label: 'linkedin', value: links.linkedin.replace(/^https?:\/\//, ''), href: links.linkedin, icon: <Linkedin size={14} />, external: true },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-portfolio-card/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <Send size={20} className="text-portfolio-accent" />
          Transmit_Message
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-portfolio-accent text-xs mb-2">06</p>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Let's_Talk</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              Open to full-stack developer and QA roles. Reach out directly or use the form &mdash; either way,
              I'll get back to you soon.
            </p>

            <div className="border border-white/10 rounded-md divide-y divide-white/10">
              {contactRows.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.external ? '_blank' : undefined}
                  rel={row.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-white/5 transition-colors"
                >
                  <span className="text-portfolio-accent">{row.icon}</span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 w-16 flex-shrink-0">
                    {row.label}
                  </span>
                  <span className="text-sm text-gray-200 truncate">{row.value}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 border border-white/10 rounded-md p-6 md:p-8">
            <input type="hidden" name="access_key" value="bf65766a-d7b2-4b53-b446-ceb7f5c202c7" />

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-3 text-sm text-white
                focus:outline-none focus:ring-1 focus:ring-portfolio-accent focus:border-portfolio-accent"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-3 text-sm text-white
                focus:outline-none focus:ring-1 focus:ring-portfolio-accent focus:border-portfolio-accent"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                rows={5}
                className="w-full bg-portfolio-dark border border-white/10 rounded-md p-3 text-sm text-white
                focus:outline-none focus:ring-1 focus:ring-portfolio-accent focus:border-portfolio-accent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary min-w-[180px] justify-center"
            >
              {isSubmitting ? 'SENDING...' : 'SEND_MESSAGE >'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
