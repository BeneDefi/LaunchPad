import React from 'react';
// import Button from '../ui/Button';
import Button from '../ui/Button';
const FinalCTASection = () => {
  return (
    <section className="py-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          All the DAPPs you Need to <span className="text-[#3a9eff]">Launch</span> a Successful Project
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl">
          We help interested Launch their Project with the most secure and advanced project tools in the DeFi Space!
        </p>
        <Button variant="primary">Go to DApps</Button>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64">
          {/* Isometric cube illustration */}
          <div className="w-full h-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 30L170 70V150L100 190L30 150V70L100 30Z" fill="#1a2b4c" stroke="#3a9eff" strokeWidth="2" />
                <path d="M100 30V110L170 70L100 30Z" fill="#2a3b5c" stroke="#3a9eff" strokeWidth="2" />
                <path d="M30 70L100 110V30L30 70Z" fill="#0a1b3c" stroke="#3a9eff" strokeWidth="2" />
                <path d="M100 190V110L30 150L100 190Z" fill="#0a1b3c" stroke="#3a9eff" strokeWidth="2" />
                <path d="M170 150L100 110V190L170 150Z" fill="#2a3b5c" stroke="#3a9eff" strokeWidth="2" />
                
                {/* Glowing dots */}
                <circle cx="60" cy="60" r="3" fill="#3ce7b9" />
                <circle cx="140" cy="70" r="3" fill="#ff77e3" />
                <circle cx="100" cy="150" r="3" fill="#ffa234" />
                <circle cx="50" cy="120" r="3" fill="#3a9eff" />
                <circle cx="160" cy="110" r="3" fill="#3ce7b9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
