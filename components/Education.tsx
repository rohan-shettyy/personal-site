import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
          <span className="text-accent mr-2">04.</span> Education
        </h2>

        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <h3 className="text-xl font-bold text-slate-100">{edu.institution}</h3>
                  <span className="text-sm font-mono text-slate-400">{edu.period}</span>
                </div>
                <p className="text-lg text-slate-300">{edu.degree}</p>
                <p className="text-sm text-slate-500 mb-2">{edu.location}</p>
                {edu.details && (
                  <p className="text-sm text-slate-400 bg-slate-800/50 p-3 rounded border border-slate-700/50">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;