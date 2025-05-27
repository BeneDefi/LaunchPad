import React, { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { trendingProjects } from '../data/projectData';

const TrendingProjects = () => {
  const [duplicatedProjects, setDuplicatedProjects] = useState([...trendingProjects, ...trendingProjects]);

  // Reset the animation when it completes one cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setDuplicatedProjects([...trendingProjects, ...trendingProjects]);
    }, 30000); // Match the animation duration in CSS
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 mb-16">
      <div className="carousel-container">
        <div className="carousel">
          {duplicatedProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="project-card flex-none w-36 sm:w-44 md:w-52 h-36 bg-[#1E293B] rounded-lg m-2 p-4 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 flex items-center">
                <Flame size={16} className="text-orange-500" fill="orange" />
                <span className="ml-1 text-sm text-orange-500">{project.rating}</span>
              </div>
              
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-2 overflow-hidden">
                <img 
                  src={project.logo} 
                  alt={project.name} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              <h3 className="font-bold text-sm text-center">{project.name}</h3>
              {project.badge && (
                <div className="mt-1 px-2 py-0.5 bg-yellow-500 rounded-full text-xs text-black font-bold">
                  {project.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProjects;
