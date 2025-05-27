import React, { useEffect, useState } from 'react';
import { showcaseProjects } from '../data/projectData';

const ProjectsShowcase = () => {
  const [duplicatedProjects, setDuplicatedProjects] = useState([...showcaseProjects, ...showcaseProjects]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuplicatedProjects([...showcaseProjects, ...showcaseProjects]);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          The{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Top
          </span>{' '}
          DeFi Projects in the Space
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Have Launched using DxSale!
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          With Over 14,000+ Projects Launched, DxSale is by far the
          <br />Most Popular Launchpad in the Entire Cryptocurrency Market!
        </p>
      </div>

      <div className="carousel-container">
        <div className="carousel">
          {duplicatedProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="project-card flex-none w-48 h-48 bg-[#1E293B]/70 rounded-lg p-6 flex flex-col items-center justify-between mx-2"
            >
              <div className="bg-green-400/10 px-3 py-1 rounded-full text-green-400 font-bold text-sm">
                x{project.multiplier}
              </div>
              
              <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center my-2">
                <img 
                  src={project.logo} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-bold text-center">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
