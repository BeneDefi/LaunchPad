import React from 'react';

const SectionTitle = ({ children, icon, accentColor }) => {
  return (
    <h2 className="text-xl md:text-2xl font-semibold mb-3 flex items-start">
      <span className={`mr-2 ${accentColor}`}>{icon}</span>
      <span className={accentColor}>{children}</span>
    </h2>
  );
};

export default SectionTitle;
