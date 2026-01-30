import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-textMain mb-12 flex items-center font-display">
          <span className="text-accent mr-3 font-mono text-2xl">03.</span> Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold text-accent border-b border-white/10 pb-2 font-display">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="inline-block bg-secondary text-textMuted text-sm px-3 py-1 rounded-full border border-white/10 hover:border-accent/50 hover:text-accent transition-colors cursor-default hover:bg-secondary/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;