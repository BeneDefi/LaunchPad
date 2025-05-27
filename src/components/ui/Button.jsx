import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-all duration-200 inline-block text-center";

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    mint: "bg-[#3ce7b9] hover:bg-[#2ad8aa] text-gray-800",
    sale: "bg-[#3a9eff] hover:bg-[#2a8eef] text-white",
    lock: "bg-[#ffa234] hover:bg-[#ef9224] text-white",
    drop: "bg-[#ff77e3] hover:bg-[#ef67d3] text-white"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
