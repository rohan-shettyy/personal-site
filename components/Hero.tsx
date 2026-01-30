import React from 'react';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-radial from-secondary to-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="space-y-6">
          <h2 className="text-accent font-medium tracking-wide uppercase text-sm animate-fade-in-up">
            Software Engineering Student
          </h2>
          <h1 className="text-5xl sm:text-7xl font-bold text-textMain tracking-tight mb-4 font-display">
            Rohan Shetty
          </h1>
          
          <div className="max-w-2xl text-lg sm:text-xl text-textMuted leading-relaxed space-y-4">
             <p>
              I am a Software Engineering student at the <span className="text-textMain font-medium">University of Waterloo</span> (Class of 2026).
            </p>
            <p>
              My experience spans <span className="text-textMain">AI infrastructure</span>, <span className="text-textMain">ML systems research</span>, and <span className="text-textMain">game development</span>. 
            </p>
            <p className="text-accent/90 font-medium">
              I am seeking new grad roles starting in 2026.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start pt-6">
            <SocialButton href={SOCIAL_LINKS.github} icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialButton href={SOCIAL_LINKS.linkedin} icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialButton href={`mailto:${SOCIAL_LINKS.email}`} icon={<Mail className="w-5 h-5" />} label="Email" />
            
            <a 
              href={SOCIAL_LINKS.resume} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary font-bold hover:bg-accent/80 transition-all shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]"
            >
              <FileText className="w-5 h-5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialButton: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-textMuted hover:text-textMain hover:bg-secondary/80 transition-colors border border-white/5 hover:border-accent/20"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;