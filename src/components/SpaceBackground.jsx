import React, { useEffect, useState } from 'react';

const SpaceBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ['#8B5CF6', '#60A5FA', '#F472B6', '#818CF8'];
    const newParticles = [];
    
    // Create random particles
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: Math.random() * 10 + 5
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: 0.6,
            animation: `float ${particle.animationDuration}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Larger decorative elements */}
      <div className="absolute left-[20%] top-[30%] w-20 h-20 opacity-10 bg-purple-500 rounded-full blur-xl" />
      <div className="absolute right-[15%] top-[60%] w-32 h-32 opacity-10 bg-blue-500 rounded-full blur-xl" />
      <div className="absolute left-[70%] top-[20%] w-24 h-24 opacity-10 bg-pink-500 rounded-full blur-xl" />
    </div>
  );
};

export default SpaceBackground;
