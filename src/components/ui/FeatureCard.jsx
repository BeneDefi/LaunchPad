import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  variant = 'mint' 
}) => {
  const variantClasses = {
    mint: "bg-[#102040]/40 border-[#3ce7b9]/20 hover:border-[#3ce7b9]/40",
    sale: "bg-[#102040]/40 border-[#3a9eff]/20 hover:border-[#3a9eff]/40",
    lock: "bg-[#102040]/40 border-[#ffa234]/20 hover:border-[#ffa234]/40",
    drop: "bg-[#102040]/40 border-[#ff77e3]/20 hover:border-[#ff77e3]/40"
  };

  return (
    <div className={`p-4 rounded-lg border ${variantClasses[variant]} transition-all duration-300 flex flex-col items-center text-center h-full`}>
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      {description && <p className="text-xs text-gray-400">{description}</p>}
    </div>
  );
};

export default FeatureCard;
