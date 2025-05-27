import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TrendingProjects from '../components/TrendingProjects';
import ProjectsShowcase from '../components/ProjectsShowcase';
import SpaceBackground from '../components/SpaceBackground';
import '../App.css';

const Trends = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen text-white relative overflow-hidden ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <SpaceBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />
        <TrendingProjects />
        <ProjectsShowcase />
      </div>
    </div>
  );
};

export default Trends;
