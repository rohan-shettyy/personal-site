import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink, Trophy, Gamepad2, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-textMain mb-12 flex items-center font-display">
          <span className="text-accent mr-3 font-mono text-2xl">01.</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={index}
              className="group bg-secondary rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 flex flex-col h-full border border-white/5 hover:border-accent/30"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-accent p-2 bg-accent/10 rounded-lg">
                  <ProjectIcon type={project.linkType} />
                </div>
                {project.link ? (
                   <a 
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-textMuted hover:text-accent transition-colors"
                   aria-label={`External link to ${project.title}`}
                 >
                   <ExternalLink className="w-5 h-5" />
                 </a>
                ) : (
                  <span className="text-xs font-mono text-accent/70 border border-accent/20 px-2 py-1 rounded bg-accent/5">
                    {project.status || "Coming Soon"}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-accent transition-colors font-display">
                {project.title}
              </h3>
              
              <p className="text-textMuted text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {project.techStack && (
                <ul className="flex flex-wrap gap-2 mt-auto text-xs font-mono text-textMuted/80">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="bg-primary px-2 py-1 rounded text-accent/80 border border-white/5">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectIcon: React.FC<{ type: string | undefined }> = ({ type }) => {
  switch (type) {
    case 'github': return <Github className="w-6 h-6" />;
    case 'devpost': return <Trophy className="w-6 h-6" />;
    case 'itch': return <Gamepad2 className="w-6 h-6" />;
    default: return <Layers className="w-6 h-6" />;
  }
};

export default Projects;