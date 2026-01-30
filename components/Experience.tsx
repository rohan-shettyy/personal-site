import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-textMain mb-12 flex items-center font-display">
          <span className="text-accent mr-3 font-mono text-2xl">02.</span> Experience
        </h2>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary bg-accent transition-transform group-hover:scale-125"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-textMain font-display">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="text-sm font-mono text-textMuted mt-1 sm:mt-0 whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              
              <p className="text-sm text-textMuted mb-4 italic">{job.location}</p>
              
              <ul className="space-y-3">
                {job.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 text-accent mt-1.5 text-xs">▹</span>
                    <span className="text-textMuted leading-relaxed text-sm md:text-base group-hover:text-textMain transition-colors">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;